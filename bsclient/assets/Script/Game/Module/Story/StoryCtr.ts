import BaseController from "../../../Core/BaseController";
import GameMgr from "../../../GameMgr"
import StoryView from "./StoryView"
import UIConfig from "../../../UIConfig"
import Config from "../../../Config"
import CfgMgr from "../../Config/CfgMgr"

/**
 * @name StoryCtr.ts
 * @description 剧情相关逻辑管理
 * @author Created by jun on 2019.10.28
 */

export default class StoryCtr extends BaseController {
    private static _instance: StoryCtr;

    private constructor() {
        super();
    }

    public static getInstance(): StoryCtr {
        if (!StoryCtr._instance) {
            StoryCtr._instance = new StoryCtr();
            StoryCtr._instance.init();
        }
        return StoryCtr._instance;
    }

    public init() {
        this.currSceneId = 0;

        this.currOperId = 0;
        this.nextOperId = 0;

        this.currBgm = "";
        this.canClick = false;
        this.isAuto = false;
        this.speed = 0.5;
    }

    currOperId: number = 0;
    nextOperId: number = 0;
    currBgm: string = "";
    canClick: boolean = false;
    isAuto: boolean = false;
    speed: number = 0.5;

    currSceneId: number = 0;

    /** 操作类型: -1.无 0.背景移动 1.旁白 2.对话 3.人物介绍 4.分支选择 5.插图 6.CG动画 
        7.好感度 8.衣服选择 9.电话微信 10.回忆 11.彩蛋 12.地点信息 13.独白 */
    doingHandler = {
        "-1": this.doingOperate.bind(this),
        "0": this._moveHandler.bind(this),
        "1": this._asideHandler.bind(this),
        "2": this._roleTalkHandler.bind(this),
        "3": this._roleInfoHandler.bind(this),
        "4": this._selectHandler.bind(this),
        "5": this._chatuHandler.bind(this),
        "6": this._cgHandler.bind(this),
        "7": this._loveHandler.bind(this),
        "8": this._clothHandler.bind(this),
        "9": this._callHandler.bind(this),
        "10": this._memoryHandler.bind(this),
        "11": this._eggHandler.bind(this),
        "12": this._placeInfoHandler.bind(this),
        "13": this._soliloquyHandler.bind(this),
    }

    /** 叙事界面 */
    private _view: StoryView = null;
    set view(view: StoryView) {
        this._view = view;
    }

    public doAuto(data: any) {
        if (data.pause) {
            // 暂停操作
            cc.tween(this._view.node).stop();
            this.canClick = false;
            this.isAuto = false;
        } else if (data.speed) {
            // 加速自动操作
            if (GameMgr.mainCtr.speed == 3) {
                this.speed = 0.25;
            } else if (GameMgr.mainCtr.speed == 2) {
                this.speed = 0.55;
            } else {
                this.speed = 1.25;
            }
            this.isAuto = true;
            // (<MainView>GameMgr.mainCtr.viewComp).setAuto(true);
            this.doNext();
        }
    }

    public doStory(data: any) {
        console.log("story event = ", data);
        this.canClick = true;
        // GameMgr.audioMgr.playMusic("audios/" + this._currBgm);
        if (data.phone && data.branch) {
            // 电话
            GameMgr.maskCtr.openMask(true);
            if (data.branch > 0) {
                this.nextOperId = Number(data.branch);
            }
        } else if (data.select && data.branch && data.branch > 0) {
            // 选择
            // GameMgr.mainCtr.viewComp.node.active = true;
            this.nextOperId = Number(data.branch);
        } else {
            GameMgr.popupCtr.openPopupMask("故事事件错误=" + data);
            return;
        }
        this._view.doingNext(null);
    }

    /**
     * 开始叙事
     * @param startOperId 叙事开始ID
     */
    public doStartStory(startOperId: number) {
        this.canClick = true;
        if (this.currOperId != startOperId) {
            this.nextOperId = startOperId;
        }
        this.doingOperate();
    }

    /**
     * 衣服选择结束
     * @param branchId 
     * @param skin 
     */
    public endClothStory(branchId: number, skin: string) {
        this.canClick = true;
        GameMgr.maskCtr.openMask(true);
        // 存档
        if (branchId > 0) {
            this.nextOperId = branchId;
            GameMgr.playerCtr.playerModel.currOperId = this.nextOperId;
            GameMgr.playerCtr.saveChapterCurr();
        }
        this.doingOperate();
    }

    /**
     * 继续下一段
     */
    public doNextStory() {
        this.doingOperate();
    }

    /**
     * 执行操作
     */
    doingOperate() {
        console.log("doingOperate nextOperId = ", this.nextOperId);
        // 锁定操作
        this.canClick = false;
        // 是否切换场景
        if (this._checkSwitchScene()) {
            let nextOperObj = GameMgr.playerCtr.playerModel.getCurrChapterCfg().chapters[this.nextOperId];
            this._view.switchScene(nextOperObj.scene, this._doingHandler.bind(this));
            this.currSceneId = nextOperObj.scene;
        } else {
            this._doingHandler();
        }
    }

    _doingHandler() {
        // 校对章节操作
        let currOperObj = GameMgr.playerCtr.playerModel.getCurrChapterCfg().chapters[this.nextOperId];
        if (currOperObj.doing < -1 || currOperObj.doing > 13) {
            GameMgr.popupCtr.openPopupTip("操作类型错误=" + currOperObj.doing);
            return
        }

        // 校对下一次操作
        this.currOperId = this.nextOperId;
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
            this._doCheckEffect(currOperObj.effect);
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
            GameMgr.asideCtr.closeAside();
        }

        // 关闭对话
        if (currOperObj.doing <= 1 || currOperObj.doing == 5 || currOperObj.doing == 6
            || currOperObj.doing == 8 || currOperObj.doing == 9) {
            if (this._uiMgr.getOpenUI(UIConfig.UIRoleTalkPanel)) {
                this._uiMgr.closeUI(UIConfig.UIRoleTalkPanel)
            }
        }

        // 执行操作
        this.doingHandler[currOperObj.doing](currOperObj);

        if (Config.DEBUG) {
            let player = GameMgr.playerCtr.playerModel;
            console.log("doing=", currOperObj.doing, "item=", currOperObj.item, "chapter=", player.currChapter,
                "stage=", player.currStage, "operId=", player.currOperId, "nextOperId=", this.nextOperId,
                "bgm=", player.currBgm, "cloth=", player.currClothId, "skin=", player.currSkin, "egg=", player.egg,
                "currSceneId=", this.currSceneId);
        }
    }

    /**
     * 0.景移动或者换场景
     * @param currOperObj 
     */
    private _moveHandler(currOperObj) {
        this._view.adjustScene(this.currSceneId)
    }

    /**
     * 1.旁白
     * @param currOperObj 
     */
    private _asideHandler(currOperObj) {
        GameMgr.asideCtr.openAside(currOperObj.txt, this.currOperId);
    }

    /**
     * 2.对话
     * @param currOperObj 
     */
    _roleTalkHandler(currOperObj) {
        this._view.showDialogue(currOperObj.item, currOperObj.txt);
        GameMgr.playerCtr.playerModel.addTalkPlayerback(this.currOperId);
    }

    _roleInfoHandler(currOperObj) {
        // 3.人物介绍
        this._uiMgr.openUI(UIConfig.UIRoleInfoPanel, currOperObj.item);
    }

    /**
     * 4.分支选择
     * @param currOperObj 
     */
    _selectHandler(currOperObj) {
        // GameMgr.mainCtr.viewComp.node.active = false;
        if (this.currOperId == 300629) {
            // 第三章结束需要一个特殊的分支选择
            GameMgr.asideCtr.closeAside();
            GameMgr.maskCtr.openMask(true);
            this._uiMgr.openUI(UIConfig.UIRoleBranchPanel);
        } else {
            this._uiMgr.openUI(UIConfig.UISelectPanel, currOperObj.item);
        }
    }

    _chatuHandler(currOperObj) {
        // 5.插图
        this._uiMgr.openUI(UIConfig.UIChatuPanel, currOperObj.item);
    }

    _cgHandler(currOperObj) {
        // 6.CG动画
        GameMgr.maskCtr.openMask(true);
        this._uiMgr.openUI(UIConfig.UICGPanel, currOperObj.item);
    }

    _loveHandler(currOperObj) {
        // 7.好感度
        // let item: cc.Node = cc.instantiate(GameMgr.resCache.getPrefab(GameMgr.cfg.uiLoveItem.prefabUrl));
        // item.parent = this.node;
        // item.zIndex = cc.macro.MAX_ZINDEX;
        // let loveItem: LoveItem = item.getComponent("LoveItem");
        // loveItem.showLove(currOperObj.item);
    }

    /**
     * 8.衣服选择
     */
    _clothHandler() {
        GameMgr.maskCtr.openMask(true);
        this._uiMgr.openUI(UIConfig.UIClothPanel);
    }

    _callHandler(currOperObj) {
        // 9.电话微信
        GameMgr.maskCtr.openMask(false);
        GameMgr.callCtr.startId = currOperObj.item;
        this._uiMgr.openUI(UIConfig.UICallPanel);
    }

    _memoryHandler(currOperObj) {
        // 10.回忆
        if (this._uiMgr.getOpenUI(UIConfig.UIRoleTalkPanel)) {
            // (<RoleTalkView>GameMgr.roleTalkCtr.viewComp).showMemory(currOperObj.item, currOperObj.txt);
        } else {
            this._uiMgr.openUI(UIConfig.UIRoleTalkPanel, { memory: true, roleId: currOperObj.item, txt: currOperObj.txt })
        }
        GameMgr.playerCtr.playerModel.addTalkPlayerback(this.currOperId);
    }

    _eggHandler(currOperObj) {
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
        this.doingOperate();
    }

    /**
     * 12.地点介绍
     * @param currOperObj 
     */
    private _placeInfoHandler(currOperObj) {
        GameMgr.placeInfoCtr.openPlaceInfo(currOperObj.item)
    }

    /**
     * 13.独白
     * @param currOperObj 
     */
    private _soliloquyHandler(currOperObj) {
        GameMgr.soliloquyCtr.openSoliloquy(currOperObj.item);
    }



    public doNext() {
        // 是否自动执行下一次操作
        if (this.isAuto) {
            this.canClick = true;
            cc.tween(this._view.node)
                .delay(this.speed)
                .call(() => {
                    if (this.checkEnd()) return;
                    let currOperObj = GameMgr.playerCtr.playerModel.getCurrChapterCfg().chapters[this.currOperId];
                    if (currOperObj && currOperObj.doing != 4) {
                        this.doNext();
                    }
                })
                .start()
        } else {
            cc.tween(this._view.node)
                .delay(0.5)
                .call(() => { this.canClick = true; })
                .start()
        }
    }

    checkEnd() {
        if (this.nextOperId < 0) {
            // 判断是否为-1结束，设置下一章节数据，第三章结束需要特殊处理，进行男主分支固定选择
            let currOperObj = GameMgr.playerCtr.playerModel.getCurrChapterCfg().chapters[this.currOperId];
            GameMgr.playerCtr.playerModel.endChapter(currOperObj.item);
            GameMgr.maskCtr.openMask(true);
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

    /**
     * 检查是否需要加载新场景
     */
    private _checkSwitchScene() {
        let nextOperObj = GameMgr.playerCtr.playerModel.getCurrChapterCfg().chapters[this.nextOperId];
        let currSceneObj = CfgMgr.CfgScene.scenes[this.currSceneId];
        let nextSceneObj = CfgMgr.CfgScene.scenes[nextOperObj.scene];

        // 场景无变化
        if (this.currSceneId == nextOperObj.scene) {
            return false;
        }

        // 场景位移
        if (currSceneObj && currSceneObj.bg == nextSceneObj.bg) {
            return false;
        }

        return true;
    }

    /**
     * 执行特殊效果
     * @param effect 效果配置
     */
    private _doCheckEffect(effectObj) {
        effectObj.forEach(element => {
            if (element == "shockscreen") {
                this._view.shockScreen()
                return
            }
        });
    }
}
