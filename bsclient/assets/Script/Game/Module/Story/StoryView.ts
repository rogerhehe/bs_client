import BaseView from "../../../Core/BaseView"
import GameMgr from "../../../GameMgr"
import CfgMgr from "../../Config/CfgMgr"

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
        GameMgr.storyCtr.setView(this);
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
        GameMgr.storyCtr.setView(null);
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

        // // 关闭对话
        // if (GameMgr.uiMgr.getOpenUI(GameMgr.cfg.uiRoleTalkPanel)) {
        //     GameMgr.uiMgr.closeUI(GameMgr.cfg.uiRoleTalkPanel)
        // }
        // this.createNewMask(true);

        // // 1.初始场景 2.场景切换
        // let loadCallBack = () => {
        //     // 加载下一场景图
        //     cc.loader.loadRes("textures/bg/" + nextSceneObj.bg, cc.SpriteFrame, (err, spriteFrame) => {
        //         this.sprBg.spriteFrame = spriteFrame;
        //         this.sprBg.node.x = nextSceneObj.initx;
        //         this._currSceneId = nextOperObj.scene;
        //         this.doingOperate(event);
        //         // 存档
        //         GameMgr.playerCtr.saveChapterCurr();
        //     });
        // }

        // // 卸载当前场景图
        // if (currSceneObj) {
        //     this.sprBg.spriteFrame = null;
        //     GameMgr.releaseImage("textures/bg/" + currSceneObj.bg);
        //     this.scheduleOnce(loadCallBack, 0.5);
        // } else {
        //     loadCallBack();
        // }
    }

    doingOperate(event) {
        // 操作类型: -1.无 0.背景移动 1.旁白 2.对话 3.人物介绍 4.分支选择 5.插图 6.CG动画 7.好感度 8.衣服选择 
        // 9.电话微信 10.回忆 11.彩蛋 12.地点信息 13.独白
        // 锁定操作
        this.canClick = false;

        // // 校对章节
        // this._currOperId = this._nextOperId;
        // let currOperObj = GameMgr.playerCtr.playerModel.getCurrChapterCfg().chapters[this._currOperId];

        // // 校对下一次操作
        // if (currOperObj.nxId == 1) {
        //     this._nextOperId += currOperObj.nxId;
        // } else {
        //     this._nextOperId = currOperObj.nxId;
        // }

        // // 校对音乐音效
        // this.checkAudio(currOperObj, event)

        // // 同步当前操作
        // if (this._currOperId != -1) {
        //     GameMgr.playerCtr.playerModel.currOperId = this._currOperId;
        //     GameMgr.playerCtr.playerModel.currBgm = this._currBgm;
        // }

        // // 加屏幕特效
        // if (currOperObj.effect) {
        //     this.checkEffect(currOperObj.effect);
        // }

        // // 隐藏换装按钮
        // if (GameMgr.mainCtr.viewComp) {
        //     if (currOperObj.notopen) {
        //         (<MainView>GameMgr.mainCtr.viewComp).showClothButton(false);
        //     } else {
        //         (<MainView>GameMgr.mainCtr.viewComp).showClothButton(true);
        //     }
        // }

        // // 关闭独白   
        // if (currOperObj.doing != 1 && currOperObj.doing != 4) {
        //     if (GameMgr.uiMgr.getOpenUI(GameMgr.cfg.uiAsidePanel)) {
        //         GameMgr.uiMgr.closeUI(GameMgr.cfg.uiAsidePanel);
        //     }
        // }

        // // 关闭对话
        // if (currOperObj.doing <= 1 || currOperObj.doing == 5 || currOperObj.doing == 6
        //     || currOperObj.doing == 8 || currOperObj.doing == 9) {
        //     if (GameMgr.uiMgr.getOpenUI(GameMgr.cfg.uiRoleTalkPanel)) {
        //         GameMgr.uiMgr.closeUI(GameMgr.cfg.uiRoleTalkPanel)
        //     }
        // }

        // // 执行操作
        // if (currOperObj.doing < 0) {
        //     // -1.无
        //     this.directNext();
        // } else if (currOperObj.doing == 0) {
        //     // 0.景移动或者换场景
        //     let currSceneObj = CfgMgr.CfgScene.scenes[this._currSceneId];
        //     if (currSceneObj.x != 0 && currSceneObj.dt > 0) {
        //         cc.tween(this.sprBg.node)
        //             .to(currSceneObj.dt, { position: cc.v2(this.sprBg.node.x + currSceneObj.x, this.sprBg.node.y) }, { easing: 'sineOut' })
        //             .delay(0.8)
        //             .call(() => {
        //                 this.directNext();
        //             })
        //             .start()
        //     } else {
        //         cc.tween(this.sprBg.node)
        //             .delay(0.5)
        //             .call(() => {
        //                 this.directNext();
        //             })
        //             .start()
        //     }
        // } else if (currOperObj.doing == 1) {
        //     // 1.旁白
        //     if (GameMgr.uiMgr.getOpenUI(GameMgr.cfg.uiAsidePanel)) {
        //         (<AsideView>GameMgr.asideCtr.viewComp).showAside(currOperObj.txt, this._currOperId);
        //     } else {
        //         GameMgr.uiMgr.openUI(GameMgr.cfg.uiAsidePanel, { txt: currOperObj.txt, operId: this._currOperId });
        //     }
        // } else if (currOperObj.doing == 2) {
        //     // 2.对话
        //     if (GameMgr.uiMgr.getOpenUI(GameMgr.cfg.uiRoleTalkPanel)) {
        //         (<RoleTalkView>GameMgr.roleTalkCtr.viewComp).showDialogue(currOperObj.item, currOperObj.txt);
        //     } else {
        //         GameMgr.uiMgr.openUI(GameMgr.cfg.uiRoleTalkPanel, { memory: false, roleId: currOperObj.item, txt: currOperObj.txt })
        //     }
        //     GameMgr.playerCtr.playerModel.addTalkPlayerback(this._currOperId);
        // } else if (currOperObj.doing == 3) {
        //     // 3.人物介绍
        //     GameMgr.uiMgr.openUI(GameMgr.cfg.uiRoleInfoPanel, currOperObj.item);
        // } else if (currOperObj.doing == 4) {
        //     // 4.分支选择
        //     GameMgr.mainCtr.viewComp.node.active = false;
        //     if (this._currOperId == 300629) {
        //         // 第三章结束需要一个特殊的分支选择
        //         GameMgr.uiMgr.closeUI(GameMgr.cfg.uiAsidePanel);
        //         this.createNewMask(true);
        //         GameMgr.uiMgr.openUI(GameMgr.cfg.uiRoleBranchPanel);
        //     } else {
        //         GameMgr.uiMgr.openUI(GameMgr.cfg.uiSelectPanel, currOperObj.item);
        //     }
        // } else if (currOperObj.doing == 5) {
        //     // 5.插图
        //     GameMgr.uiMgr.openUI(GameMgr.cfg.uiChatuPanel, currOperObj.item);
        // } else if (currOperObj.doing == 6) {
        //     // 6.CG动画
        //     this.createNewMask(true);
        //     GameMgr.uiMgr.openUI(GameMgr.cfg.uiCGPanel, currOperObj.item);
        // } else if (currOperObj.doing == 7) {
        //     // 7.好感度
        //     let item: cc.Node = cc.instantiate(GameMgr.resCache.getPrefab(GameMgr.cfg.uiLoveItem.prefabUrl));
        //     item.parent = this.node;
        //     item.zIndex = cc.macro.MAX_ZINDEX;
        //     let loveItem: LoveItem = item.getComponent("LoveItem");
        //     loveItem.showLove(currOperObj.item);
        // } else if (currOperObj.doing == 8) {
        //     // 8.衣服选择
        //     this.createNewMask(true);
        //     GameMgr.uiMgr.openUI(GameMgr.cfg.uiReplacementPanel);
        // } else if (currOperObj.doing == 9) {
        //     // 9.电话微信
        //     this.createNewMask(false);
        //     GameMgr.callCtr.startId = currOperObj.item;
        //     GameMgr.uiMgr.openUI(GameMgr.cfg.uiCallPanel);
        // } else if (currOperObj.doing == 10) {
        //     // 10.回忆
        //     if (GameMgr.uiMgr.getOpenUI(GameMgr.cfg.uiRoleTalkPanel)) {
        //         (<RoleTalkView>GameMgr.roleTalkCtr.viewComp).showMemory(currOperObj.item, currOperObj.txt);
        //     } else {
        //         GameMgr.uiMgr.openUI(GameMgr.cfg.uiRoleTalkPanel, { memory: true, roleId: currOperObj.item, txt: currOperObj.txt })
        //     }
        //     GameMgr.playerCtr.playerModel.addTalkPlayerback(this._currOperId);
        // } else if (currOperObj.doing == 11) {
        //     // 11.彩蛋，好像没派上用场
        //     let eggObj = CfgMgr.CfgEgg.eggs[currOperObj.item];
        //     if (eggObj && GameMgr.playerCtr.playerModel.egg.indexOf(eggObj.egg) >= 0 && eggObj.branch > 0) {
        //         this._currOperId = eggObj.branch;
        //         // 检查章节阶段
        //         if (eggObj.chapter != GameMgr.playerCtr.playerModel.currChapter) {
        //             GameMgr.playerCtr.playerModel.currChapter = eggObj.chapter;
        //         }
        //         if (eggObj.stage != GameMgr.playerCtr.playerModel.currStage) {
        //             GameMgr.playerCtr.playerModel.currStage = eggObj.stage;
        //         }
        //     }
        //     this.directNext();
        // } else if (currOperObj.doing == 12) {
        //     // 地点介绍
        //     GameMgr.uiMgr.openUI(GameMgr.cfg.uiPlaceInfoPanel, currOperObj.item);
        // } else if (currOperObj.doing == 13) {
        //     // 独白
        //     GameMgr.uiMgr.openUI(GameMgr.cfg.uiSoliloquyPanel, currOperObj.item);
        // } else {
        //     console.log("on click doing error =", currOperObj.doing);
        //     GameMgr.popupCtr.openPopupTip("操作类型错误=" + currOperObj.doing);
        // }

        // if (GameMgr.cfg.DEBUG) {
        //     let player = GameMgr.playerCtr.playerModel;
        //     console.log("doing=", currOperObj.doing, "item=", currOperObj.item, "chapter=", player.currChapter,
        //         "stage=", player.currStage, "operId=", player.currOperId, "nextOperId=", this._nextOperId,
        //         "bgm=", player.currBgm, "cloth=", player.currClothId, "skin=", player.currSkin, "egg=", player.egg,
        //         "currSceneId=", this._currSceneId);
        // }
    }

    directNext() {
        this.canClick = true;
        this.doingNext(null);
    }

    checkEnd() {
        if (this.nextOperId < 0) {
            // 判断是否为-1结束，设置下一章节数据，第三章结束需要特殊处理，进行男主分支固定选择
            // let currOperObj = GameMgr.playerCtr.playerModel.getCurrChapterCfg().chapters[this._currOperId];
            // GameMgr.playerCtr.playerModel.endChapter(currOperObj.item);
            // this.createNewMask(true);
            // // 关闭所有
            // GameMgr.uiMgr.closeAllUI(GameMgr.cfg.uiMainPanel.prefabUrl);
            // // 打开结束
            // if (GameMgr.playerCtr.playerModel.currChapter <= 0) {
            //     GameMgr.uiMgr.openUI(GameMgr.cfg.uiChapterPanel);
            // } else {
            //     GameMgr.uiMgr.openUI(GameMgr.cfg.uiEndPanel);
            // }
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
        // effect.forEach(element => {
        //     if (element == "shockscreen") {
        //         // 震屏效果
        //         let tw = cc.tween;
        //         tw(this.sprBg.node)
        //             .sequence(
        //                 tw().to(0.02, { position: cc.v2(5, 7) }),
        //                 tw().to(0.02, { position: cc.v2(-6, 7) }),
        //                 tw().to(0.02, { position: cc.v2(-13, 3) }),
        //                 tw().to(0.02, { position: cc.v2(3, -6) }),
        //                 tw().to(0.02, { position: cc.v2(-5, 5) }),
        //                 tw().to(0.02, { position: cc.v2(2, -8) }),
        //                 tw().to(0.02, { position: cc.v2(-8, -10) }),
        //                 tw().to(0.02, { position: cc.v2(3, 10) }),
        //                 tw().to(0.02, { position: cc.v2(-5, 8) }),
        //                 tw().to(0.02, { position: cc.v2(0, 0) })
        //             )
        //             .repeat(5)
        //             .start()
        //         return
        //     }
        // });
    }

    createNewMask(isWhite: boolean) {
        // let item: cc.Node = cc.instantiate(GameMgr.resCache.getPrefab(GameMgr.cfg.uiMaskPanel.prefabUrl));
        // item.parent = this.node;
        // item.zIndex = GameMgr.cfg.uiMaskPanel.zOrder;
        // let maskView: MaskView = item.getComponent("MaskView");
        // maskView.showMask(isWhite);
    }
}
