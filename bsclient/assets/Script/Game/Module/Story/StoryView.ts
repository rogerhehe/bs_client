import BaseView from "../../../Core/BaseView"
import GameMgr from "../../../GameMgr"
import CfgMgr from "../../Config/CfgMgr"
import UIConfig from "../../../UIConfig"
import Config from "../../../Config"


/**
 * @name StoryView.ts
 * @description 叙事界面
 * @author Created by jun on 2018.4.7
 */

const {ccclass, property} = cc._decorator;

@ccclass
export default class StoryView extends BaseView {

    /** 剧情背景图 */
    @property(cc.Sprite)
    sprBg: cc.Sprite = null;

    currOperId: number = 0;
    nextOperId: number = 0;
    currSceneId: number = 0;
    currBgm: string = "";
    canClick: boolean = false;
    isAuto: boolean = false;
    speed: number = 0.5;

    onLoad () {
        GameMgr.storyCtr.view = this;
        this.node.on(cc.Node.EventType.TOUCH_END, this.doingNext.bind(this))
    }

    start () {
        this.currOperId = 0;
        this.nextOperId = 0;
        this.currSceneId = 0;
        this.currBgm = "";
        this.canClick = false;
        this.isAuto = false;
        this.speed = 0.5;
    }

    onDestroy() {
        GameMgr.storyCtr.view = null;
    }

    doingNext(event) {
        // 打断自动操作
        if (this.isAuto && event) {
            this.isAuto = false;
            GameMgr.mainCtr.setAuto(false);
            return;
        }

        // 是否禁用操作
        if (!this.canClick) return;

        // 判断是否结束
        if (this.checkEnd()) return;

        // 检查场景是否正常
        let nextOperObj = GameMgr.playerCtr.playerModel.getCurrChapterCfg().chapters[this.nextOperId];
        let currSceneObj = CfgMgr.CfgScene.scenes[this.currSceneId];
        let nextSceneObj = CfgMgr.CfgScene.scenes[nextOperObj.scene];

        // 场景无变化
        if (this.currSceneId == nextOperObj.scene) {
            this.doingOperate(event);
            return;
        }

        // 场景位移
        if (currSceneObj && currSceneObj.bg == nextSceneObj.bg) {
            this.currSceneId = nextOperObj.scene;
            this.doingOperate(event);
            return;
        }

        // 关闭对话
        if (this._uiMgr.getOpenUI(UIConfig.UIRoleTalkPanel)) {
            this._uiMgr.closeUI(UIConfig.UIRoleTalkPanel)
        }
        this.createNewMask(true);

        // 1.初始场景 2.场景切换
        let loadCallBack = () => {
            // 加载下一场景图
            // cc.loader.loadRes("textures/bg/" + nextSceneObj.bg, cc.SpriteFrame, (err, spriteFrame) => {
            //     this.sprBg.spriteFrame = spriteFrame;
            //     this.sprBg.node.x = nextSceneObj.initx;
            //     this.currSceneId = nextOperObj.scene;
            //     this.doingOperate(event);
            //     // 存档
            //     GameMgr.playerCtr.saveChapterCurr();
            // });

            // this._resMgr.getAssetBundle("chapter" + GameMgr.playerCtr.playerModel.currChapter, loadBundleCallback)

            this.doingOperate(event);
        }

        // 卸载当前场景图
        if (currSceneObj) {
            this.sprBg.spriteFrame = null;
            // GameMgr.releaseImage("textures/bg/" + currSceneObj.bg);
            this.scheduleOnce(loadCallBack, 0.5);
        } else {
            loadCallBack();
        }
    }

    doingOperate(event) {
        // 操作类型: -1.无 0.背景移动 1.旁白 2.对话 3.人物介绍 4.分支选择 5.插图 6.CG动画 7.好感度 8.衣服选择 
        // 9.电话微信 10.回忆 11.彩蛋 12.地点信息 13.独白
        // 锁定操作
        this.canClick = false;

        // 校对章节
        this.currOperId = this.nextOperId;
        let currOperObj = GameMgr.playerCtr.playerModel.getCurrChapterCfg().chapters[this.currOperId];

        // 校对下一次操作
        if (currOperObj.nxId == 1) {
            this.nextOperId += currOperObj.nxId;
        } else {
            this.nextOperId = currOperObj.nxId;
        }

        // 校对音乐音效
        this.checkAudio(currOperObj, event)

        // 同步当前操作
        if (this.currOperId != -1) {
            GameMgr.playerCtr.playerModel.currOperId = this.currOperId;
            GameMgr.playerCtr.playerModel.currBgm = this.currBgm;
        }

        // 加屏幕特效
        if (currOperObj.effect) {
            this.checkEffect(currOperObj.effect);
        }

        // 隐藏换装按钮
        // if (GameMgr.mainCtr.viewComp) {
        //     if (currOperObj.notopen) {
        //         (<MainView>GameMgr.mainCtr.viewComp).showClothButton(false);
        //     } else {
        //         (<MainView>GameMgr.mainCtr.viewComp).showClothButton(true);
        //     }
        // }

        // 关闭独白   
        if (currOperObj.doing != 1 && currOperObj.doing != 4) {
            if (this._uiMgr.getOpenUI(UIConfig.UIAsidePanel)) {
                this._uiMgr.closeUI(UIConfig.UIAsidePanel);
            }
        }

        // 关闭对话
        if (currOperObj.doing <= 1 || currOperObj.doing == 5 || currOperObj.doing == 6
            || currOperObj.doing == 8 || currOperObj.doing == 9) {
            if (this._uiMgr.getOpenUI(UIConfig.UIRoleTalkPanel)) {
                this._uiMgr.closeUI(UIConfig.UIRoleTalkPanel)
            }
        }

        // 执行操作
        if (currOperObj.doing < 0) {
            // -1.无
            this.directNext();
        } else if (currOperObj.doing == 0) {
            // 0.景移动或者换场景
            let currSceneObj = CfgMgr.CfgScene.scenes[this.currSceneId];
            if (currSceneObj.x != 0 && currSceneObj.dt > 0) {
                cc.tween(this.sprBg.node)
                    .to(currSceneObj.dt, { position: cc.v3(this.sprBg.node.x + currSceneObj.x, this.sprBg.node.y) }, { easing: 'sineOut' })
                    .delay(0.8)
                    .call(() => {
                        this.directNext();
                    })
                    .start()
            } else {
                cc.tween(this.sprBg.node)
                    .delay(0.5)
                    .call(() => {
                        this.directNext();
                    })
                    .start()
            }
        } else if (currOperObj.doing == 1) {
            // 1.旁白
            if (this._uiMgr.getOpenUI(UIConfig.UIAsidePanel)) {
                // (<AsideView>GameMgr.asideCtr.viewComp).showAside(currOperObj.txt, this.currOperId);
            } else {
                this._uiMgr.openUI(UIConfig.UIAsidePanel, { txt: currOperObj.txt, operId: this.currOperId });
            }
        } else if (currOperObj.doing == 2) {
            // 2.对话
            if (this._uiMgr.getOpenUI(UIConfig.UIRoleTalkPanel)) {
                // (<RoleTalkView>GameMgr.roleTalkCtr.viewComp).showDialogue(currOperObj.item, currOperObj.txt);
            } else {
                this._uiMgr.openUI(UIConfig.UIRoleTalkPanel, { memory: false, roleId: currOperObj.item, txt: currOperObj.txt })
            }
            GameMgr.playerCtr.playerModel.addTalkPlayerback(this.currOperId);
        } else if (currOperObj.doing == 3) {
            // 3.人物介绍
            this._uiMgr.openUI(UIConfig.UIRoleInfoPanel, currOperObj.item);
        } else if (currOperObj.doing == 4) {
            // 4.分支选择
            // GameMgr.mainCtr.viewComp.node.active = false;
            if (this.currOperId == 300629) {
                // 第三章结束需要一个特殊的分支选择
                this._uiMgr.closeUI(UIConfig.UIAsidePanel);
                this.createNewMask(true);
                this._uiMgr.openUI(UIConfig.UIRoleBranchPanel);
            } else {
                this._uiMgr.openUI(UIConfig.UISelectPanel, currOperObj.item);
            }
        } else if (currOperObj.doing == 5) {
            // 5.插图
            this._uiMgr.openUI(UIConfig.UIChatuPanel, currOperObj.item);
        } else if (currOperObj.doing == 6) {
            // 6.CG动画
            this.createNewMask(true);
            this._uiMgr.openUI(UIConfig.UICGPanel, currOperObj.item);
        } else if (currOperObj.doing == 7) {
            // 7.好感度
            // let item: cc.Node = cc.instantiate(GameMgr.resCache.getPrefab(GameMgr.cfg.uiLoveItem.prefabUrl));
            // item.parent = this.node;
            // item.zIndex = cc.macro.MAX_ZINDEX;
            // let loveItem: LoveItem = item.getComponent("LoveItem");
            // loveItem.showLove(currOperObj.item);
        } else if (currOperObj.doing == 8) {
            // 8.衣服选择
            this.createNewMask(true);
            this._uiMgr.openUI(UIConfig.UIClothPanel);
        } else if (currOperObj.doing == 9) {
            // 9.电话微信
            this.createNewMask(false);
            GameMgr.callCtr.startId = currOperObj.item;
            this._uiMgr.openUI(UIConfig.UICallPanel);
        } else if (currOperObj.doing == 10) {
            // 10.回忆
            if (this._uiMgr.getOpenUI(UIConfig.UIRoleTalkPanel)) {
                // (<RoleTalkView>GameMgr.roleTalkCtr.viewComp).showMemory(currOperObj.item, currOperObj.txt);
            } else {
                this._uiMgr.openUI(UIConfig.UIRoleTalkPanel, { memory: true, roleId: currOperObj.item, txt: currOperObj.txt })
            }
            GameMgr.playerCtr.playerModel.addTalkPlayerback(this.currOperId);
        } else if (currOperObj.doing == 11) {
            // 11.彩蛋，好像没派上用场
            let eggObj = CfgMgr.CfgEgg.eggs[currOperObj.item];
            if (eggObj && GameMgr.playerCtr.playerModel.egg.indexOf(eggObj.egg) >= 0 && eggObj.branch > 0) {
                this.currOperId = eggObj.branch;
                // 检查章节阶段
                if (eggObj.chapter != GameMgr.playerCtr.playerModel.currChapter) {
                    GameMgr.playerCtr.playerModel.currChapter = eggObj.chapter;
                }
                if (eggObj.stage != GameMgr.playerCtr.playerModel.currStage) {
                    GameMgr.playerCtr.playerModel.currStage = eggObj.stage;
                }
            }
            this.directNext();
        } else if (currOperObj.doing == 12) {
            // 地点介绍
            this._uiMgr.openUI(UIConfig.UIPlaceInfoPanel, currOperObj.item);
        } else if (currOperObj.doing == 13) {
            // 独白
            GameMgr.soliloquyCtr.openSoliloquy(currOperObj.item);
        } else {
            console.log("on click doing error =", currOperObj.doing);
            GameMgr.popupCtr.openPopupTip("操作类型错误=" + currOperObj.doing);
        }

        if (Config.DEBUG) {
            let player = GameMgr.playerCtr.playerModel;
            console.log("doing=", currOperObj.doing, "item=", currOperObj.item, "chapter=", player.currChapter,
                "stage=", player.currStage, "operId=", player.currOperId, "nextOperId=", this.nextOperId,
                "bgm=", player.currBgm, "cloth=", player.currClothId, "skin=", player.currSkin, "egg=", player.egg,
                "currSceneId=", this.currSceneId);
        }
    }

    directNext() {
        this.canClick = true;
        this.doingNext(null);
    }

    checkEnd() {
        if (this.nextOperId < 0) {
            // 判断是否为-1结束，设置下一章节数据，第三章结束需要特殊处理，进行男主分支固定选择
            let currOperObj = GameMgr.playerCtr.playerModel.getCurrChapterCfg().chapters[this.currOperId];
            GameMgr.playerCtr.playerModel.endChapter(currOperObj.item);
            this.createNewMask(true);
            // 关闭所有
            this._uiMgr.closeAllUI(UIConfig.UIMainPanel.prefab);
            // 打开结束
            if (GameMgr.playerCtr.playerModel.currChapter <= 0) {
                this._uiMgr.openUI(UIConfig.UIChapterPanel);
            } else {
                this._uiMgr.openUI(UIConfig.UIEndPanel);
            }
            return true;
        }
        return false;
    }

    checkAudio(operObj, event) {
        // 背景音乐
        // if (operObj.music != "" && operObj.music != this._currBgm) {
        //     this._currBgm = operObj.music;
        //     GameMgr.audioMgr.playMusic("audios/" + this._currBgm)
        // } else if (operObj.music == "" && this._currBgm == "" && GameMgr.playerCtr.playerModel.currBgm != "") {
        //     this._currBgm = GameMgr.playerCtr.playerModel.currBgm
        //     GameMgr.audioMgr.playMusic("audios/" + this._currBgm)
        // }
        // // 点击音效 
        // if (operObj.sound != "") {
        //     GameMgr.audioMgr.playSound("audios/" + operObj.sound)
        // } else if (event) {
        //     GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);
        // }
    }

    checkEffect(effect) {
        effect.forEach(element => {
            if (element == "shockscreen") {
                // 震屏效果
                let tw = cc.tween;
                tw(this.sprBg.node)
                    .sequence(
                        tw().to(0.02, { position: cc.v2(5, 7) }),
                        tw().to(0.02, { position: cc.v2(-6, 7) }),
                        tw().to(0.02, { position: cc.v2(-13, 3) }),
                        tw().to(0.02, { position: cc.v2(3, -6) }),
                        tw().to(0.02, { position: cc.v2(-5, 5) }),
                        tw().to(0.02, { position: cc.v2(2, -8) }),
                        tw().to(0.02, { position: cc.v2(-8, -10) }),
                        tw().to(0.02, { position: cc.v2(3, 10) }),
                        tw().to(0.02, { position: cc.v2(-5, 8) }),
                        tw().to(0.02, { position: cc.v2(0, 0) })
                    )
                    .repeat(5)
                    .start()
                return
            }
        });
    }

    createNewMask(isWhite: boolean) {
        // let item: cc.Node = cc.instantiate(GameMgr.resCache.getPrefab(GameMgr.cfg.uiMaskPanel.prefabUrl));
        // item.parent = this.node;
        // item.zIndex = GameMgr.cfg.uiMaskPanel.zOrder;
        // let maskView: MaskView = item.getComponent("MaskView");
        // maskView.showMask(isWhite);
    }
}
