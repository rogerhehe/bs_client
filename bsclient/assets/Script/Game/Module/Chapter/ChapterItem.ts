import GameMgr from "../../../GameMgr";
import CfgMgr from "../../cfg/CfgMgr";

/**
 * @name ChapterItem.ts
 * @description 章节子界面
 * @author Created by jun on 2019.10.28
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class ChapterItem extends cc.Component {

    /** 角色进度图标容器 */
    @property(cc.Layout)
    layoutRoleIcon: cc.Layout = null

    /** 角色进度图标 */
    @property(cc.Sprite)
    sprRoleStatus: cc.Sprite[] = [];

    /** 解锁图标 */
    @property(cc.Sprite)
    sprLockIcon: cc.Sprite = null;

    /** 章节插图 */
    @property(cc.Sprite)
    sprChatu: cc.Sprite = null;

    /** 重玩按钮 */
    @property(cc.Button)
    btnReplay: cc.Button = null;

    /** 分支选择按钮 */
    @property(cc.Button)
    btnBranch: cc.Button = null;

    /** 角色进度图标 */
    @property(cc.Sprite)
    sprSelectedMark: cc.Sprite = null;

    /** 好感度进度条 */
    @property(cc.ProgressBar)
    progressLove: cc.ProgressBar = null;

    _chapterId: number = 1;
    _currStageId: number = 1;
    _currChatuUrl: string = "";
    _chapterView: any = null;
    _canClick: boolean = false;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickPlay.bind(this))
    }

    start() {
        this._canClick = false;
        this.scheduleOnce(() => {
            this._canClick = true;
        }, 1.5);
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
        this.sprChatu.spriteFrame = null;
        GameMgr.releaseImage(this._currChatuUrl);
    }

    onClickPlay(event) {
        if (GameMgr.roleBranchCtr.fromChapterView || !this._canClick) { return; }
        this._chapterView.syncDisableClick();

        event.stopPropagation();
        GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);

        let callback = () => {
            // 平台控制
            let cfg = GameMgr.playerCtr.readConfigInfo;
            if (cfg.isLimitByUpdate > 0 && cfg.lastUpdateChapterId < GameMgr.playerCtr.playerModel.currChapterID) {
                GameMgr.popupCtr.openPopupTipLock("章节尚未开启");
                return
            }

            // 获取数据
            let chapterObj = GameMgr.playerCtr.playerModel.chapterList[this._chapterId];
            let stageObj = chapterObj.stage[this._currStageId];
            if (stageObj.unlock <= 0) {
                GameMgr.popupCtr.openPopupTipLock("章节尚未开启");
                return;
            } else if (stageObj.operateId <= 0 && stageObj.playCount > 0 && stageObj.unlock > 0) {
                this.onClickReplay("");
                return;
            }

            // 初始章节数据
            GameMgr.playerCtr.playerModel.currChapter = this._chapterId;
            GameMgr.playerCtr.playerModel.currStage = this._currStageId;
            GameMgr.playerCtr.playerModel.currOperId = stageObj.operateId;

            // 开始故事
            GameMgr.uiMgr.closeUI(GameMgr.cfg.uiChapterPanel);
            GameMgr.storyCtr.doStory({ "start": GameMgr.playerCtr.playerModel.currOperId });
        }

        cc.tween(this.node)
            .to(0.05, { scale: 0.9 })
            .to(0.05, { scale: 1.0 })
            .call(callback)
            .start()
    }

    onClickReplay(event) {
        if (event) {
            if (!this._canClick) { return; }
            this._chapterView.syncDisableClick();

            event.stopPropagation();
            GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);
        }

        let popupParam: IPopupParam = {
            txtContent: "重置此章节会使本章节及之后的\n章节全部锁定,确定重新开始本章节吗?",
            txtSure: "确定",
            txtCancel: "不要",
            callbackSure: () => { // 确定重玩
                GameMgr.playerCtr.playerModel.replayChapter(this._chapterId, this._currStageId);
                GameMgr.uiMgr.closeUI(GameMgr.cfg.uiChapterPanel);

                // 重新开始故事
                GameMgr.storyCtr.doStory({ "start": GameMgr.playerCtr.playerModel.currOperId });
            },
            callbackCancle: () => { // 取消重玩

            }
        }
        GameMgr.popupCtr.openPopupBtn(popupParam);
    }

    onClickBranch(event) {
        if (!this._canClick) { return; }
        this._chapterView.syncDisableClick();

        event.stopPropagation();
        GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);

        GameMgr.roleBranchCtr.fromChapterView = true;
        GameMgr.uiMgr.openUI(GameMgr.cfg.uiRoleBranchPanel);
    }

    onClickChangeRole(event, data) {
        event.stopPropagation();
        GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);

        if (this._currStageId == data || this._chapterId < 4 || data > 3 || data < 1) {
            return
        }
        this._currStageId = data;
        this._chapterView.syncBranch(this._currStageId);
    }

    setChapterId(chapterId: number, chapterView: any) {
        this._chapterId = chapterId;
        this._currStageId = 1;
        this._chapterView = chapterView;

        this.btnReplay.node.active = false;
        this.btnBranch.node.active = false;
        this.sprLockIcon.node.active = false;
        this.layoutRoleIcon.node.active = false;
        this.sprSelectedMark.node.active = false;
        this.progressLove.node.active = false;

        let chapterObj = GameMgr.playerCtr.playerModel.chapterList[chapterId];
        let stagObj = chapterObj.stage[this._currStageId];
        let chatuUrl = "textures/chapter/chapter" + chapterId.toString();

        // 是否解锁
        if (stagObj.operateId <= 0 && stagObj.unlock <= 0) {
            chatuUrl += "_lock";
            this.sprLockIcon.node.active = true;
        }

        // 是否通关
        if (stagObj.playCount > 0 && this._chapterId != 4) {
            this.btnReplay.node.active = true;
        }

        // 选择角色线，1-程 2-顾 3-博
        if (this._chapterId > 3) {
            this.layoutRoleIcon.node.active = true;
            this.sprSelectedMark.node.active = true;
            this.progressLove.node.active = true;
            this._roleBranchInfo(chapterObj);
        } else {
            // 加载插图
            this._currChatuUrl = chatuUrl;
            cc.loader.loadRes(chatuUrl, cc.SpriteFrame, (err, frame) => {
                this.sprChatu.spriteFrame = frame;
            });
        }

        // 第四章特殊逻辑
        if (this._chapterId == 4) {
            let chapterObj3 = GameMgr.playerCtr.playerModel.chapterList[3].stage[1];
            if (chapterObj3.playCount > 0 && chapterObj3.unlock > 0) {
                let chapterObj41 = GameMgr.playerCtr.playerModel.chapterList[4].stage[1];
                let chapterObj42 = GameMgr.playerCtr.playerModel.chapterList[4].stage[2];
                let chapterObj43 = GameMgr.playerCtr.playerModel.chapterList[4].stage[3];
                if (chapterObj41.unlock > 0 || chapterObj42.unlock > 0 || chapterObj43.unlock > 0) {
                    this.btnBranch.node.active = true;
                }
            }
        }
    }

    _roleBranchInfo(chapterObj: any) {
        // 1-程 2-顾 3-博
        let atlasUrl = GameMgr.cfg.uiChapterPanel.atlasUrl;
        // 程
        let chengObj = chapterObj.stage[1];
        if (chengObj.unlock <= 0) {
            this.sprRoleStatus[0].spriteFrame = GameMgr.resCache.getSpriteFrame(atlasUrl, "zj_cheng_lock");
        } else if (chengObj.operateId > 0 && chengObj.unlock > 0) {
            this.sprRoleStatus[0].spriteFrame = GameMgr.resCache.getSpriteFrame(atlasUrl, "zj_cheng_ing");
        } else if (chengObj.operateId <= 0 && chengObj.unlock > 0 && chengObj.playCount > 0) {
            this.sprRoleStatus[0].spriteFrame = GameMgr.resCache.getSpriteFrame(atlasUrl, "zj_cheng_fin");
        }

        // 顾
        let guObj = chapterObj.stage[2];
        if (guObj.unlock <= 0) {
            this.sprRoleStatus[1].spriteFrame = GameMgr.resCache.getSpriteFrame(atlasUrl, "zj_gu_lock");
        } else if (guObj.operateId > 0 && guObj.unlock > 0) {
            this.sprRoleStatus[1].spriteFrame = GameMgr.resCache.getSpriteFrame(atlasUrl, "zj_gu_ing");
        } else if (guObj.operateId <= 0 && guObj.unlock > 0 && guObj.playCount > 0) {
            this.sprRoleStatus[1].spriteFrame = GameMgr.resCache.getSpriteFrame(atlasUrl, "zj_gu_fin");
        }

        // 博
        let boObj = chapterObj.stage[3];
        if (boObj.unlock <= 0) {
            this.sprRoleStatus[2].spriteFrame = GameMgr.resCache.getSpriteFrame(atlasUrl, "zj_bo_lock");
        } else if (boObj.operateId > 0 && boObj.unlock > 0) {
            this.sprRoleStatus[2].spriteFrame = GameMgr.resCache.getSpriteFrame(atlasUrl, "zj_bo_ing");
        } else if (boObj.operateId <= 0 && boObj.unlock > 0 && boObj.playCount > 0) {
            this.sprRoleStatus[2].spriteFrame = GameMgr.resCache.getSpriteFrame(atlasUrl, "zj_bo_fin");
        }
    }

    changeRole(itemId: number) {
        // 1-程 2-顾 3-博
        this._currStageId = itemId;
        // 选中标记
        if (itemId == 1) {
            this.sprSelectedMark.node.x = 422;
            this.progressLove.node.x = 390;
            this.progressLove.progress = Math.min(GameMgr.playerCtr.playerModel.getLoveChengValue() / CfgMgr.CfgLove.chengLoveValue, 1);

        } else if (itemId == 2) {
            this.sprSelectedMark.node.x = 282;
            this.progressLove.node.x = 245;
            this.progressLove.progress = Math.min(GameMgr.playerCtr.playerModel.getLoveGuValue() / CfgMgr.CfgLove.guLoveValue, 1);
        } else if (itemId == 3) {
            this.sprSelectedMark.node.x = 142;
            this.progressLove.node.x = 105;
            this.progressLove.progress = Math.min(GameMgr.playerCtr.playerModel.getLoveBoValue() / CfgMgr.CfgLove.boLoveValue, 1);
        }

        // 插图
        let chapterObj = GameMgr.playerCtr.playerModel.chapterList[this._chapterId];
        let stagObj = chapterObj.stage[itemId];
        let chatuUrl = "textures/chapter/chapter" + this._chapterId.toString();

        // 是否解锁
        if (stagObj.unlock <= 0) {
            chatuUrl += "_lock";
            this.sprLockIcon.node.active = true;
        } else {
            this.sprLockIcon.node.active = false;
        }

        // 是否通关
        if (stagObj.playCount > 0 && this._chapterId != 4) {
            this.btnReplay.node.active = true;
        } else {
            this.btnReplay.node.active = false;
        }

        // 分支后缀
        if (itemId == 1) {
            chatuUrl += "_cheng";
        } else if (itemId == 2) {
            chatuUrl += "_gu";
        } else if (itemId == 3) {
            chatuUrl += "_bo";
        }

        // 加载插图
        this._currChatuUrl = chatuUrl;
        cc.loader.loadRes(chatuUrl, cc.SpriteFrame, (err, frame) => {
            this.sprChatu.spriteFrame = frame;
        });
    }

    disableClick() {
        this._canClick = false;
        this.unscheduleAllCallbacks();
        this.scheduleOnce(() => {
            this._canClick = true;
        }, 3);
    }
}
