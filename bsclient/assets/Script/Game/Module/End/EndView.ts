import GameMgr from "../../../GameMgr";

/**
 * @name EndView.ts
 * @description 结束界面
 * @author Created by jun on 2020.1.12
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class EndView extends cc.Component {

    /** 背景 */
    @property(cc.Sprite)
    sprBg: cc.Sprite = null;

    /** 插图 */
    @property(cc.Sprite)
    sprChatu: cc.Sprite[] = [];

    /** 插图名 */
    @property(cc.Label)
    txtName: cc.Label[] = [];

    /** 返回按钮 */
    @property(cc.Button)
    btnReturn: cc.Button = null;

    /** 下一章按钮 */
    @property(cc.Button)
    btnNext: cc.Button = null;

    /** 动画组件 */
    @property(cc.Animation)
    _animation: cc.Animation = null;

    _chatuUrlList: string[] = [];
    _bgUrl: string = "textures/ui/js_bg";

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick.bind(this))
        this._animation = this.getComponent(cc.Animation);

        cc.loader.loadRes(this._bgUrl, cc.SpriteFrame, (err, spriteFrame) => {
            this.sprBg.spriteFrame = spriteFrame;
        });

        let chatuList = GameMgr.playerCtr.playerModel.endChatuList
        for (let index = 0; index < 3; ++index) {
            let chatu = chatuList[index].split("#")
            this.txtName[index].string = chatu[1];
            let urlPath: string = "textures/bgsmall/" + chatu[0];
            this._chatuUrlList[index] = urlPath;
            cc.loader.loadRes(urlPath, cc.SpriteFrame, (err, spriteFrame) => {
                this.sprChatu[index].spriteFrame = spriteFrame;
            });
        }
    }

    start() {
        this.btnNext.node.active = false;
        this.btnReturn.node.active = false;
        this._animation.play();

        this.scheduleOnce(() => {
            this.btnNext.node.active = true;
            this.btnReturn.node.active = true;
            // 平台控制开启章数
            let cfg = GameMgr.playerCtr.readConfigInfo;
            if (cfg.isLimitByUpdate > 0 && cfg.lastUpdateChapterId < 500) {
                this.btnNext.node.active = false;
                this.btnReturn.node.x = 0;
            }
        }, 1.5);
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
        this.sprBg.spriteFrame = null;
        GameMgr.releaseImage(this._bgUrl);
        for (let index = 0; index < 3; ++index) {
            this.sprChatu[index].spriteFrame = null;
            GameMgr.releaseImage(this._chatuUrlList[index]);
        }
    }

    onClick(event: any) {
        event.stopPropagation();
    }

    onClickReturn(event) {
        event.stopPropagation();
        GameMgr.uiMgr.closeUI(GameMgr.cfg.uiEndPanel);
        GameMgr.uiMgr.openUI(GameMgr.cfg.uiChapterPanel);
    }

    onClickNext(event) {
        event.stopPropagation();

        // 平台控制
        let cfg = GameMgr.playerCtr.readConfigInfo;
        if (cfg.isLimitByUpdate > 0 && cfg.lastUpdateChapterId < GameMgr.playerCtr.playerModel.currChapterID) {
            GameMgr.popupCtr.openPopupTipLock("章节尚未开启");
            GameMgr.uiMgr.closeUI(GameMgr.cfg.uiEndPanel);
            GameMgr.uiMgr.openUI(GameMgr.cfg.uiChapterPanel);
            return;
        }

        // 完结
        if (GameMgr.playerCtr.playerModel.currChapter < 0) {
            GameMgr.uiMgr.openUI(GameMgr.cfg.uiChapterPanel);
            GameMgr.popupCtr.openPopupMask("本季已完结，敬请期待下一季！");
            return;
        }

        // 下一章
        GameMgr.uiMgr.closeUI(GameMgr.cfg.uiEndPanel);
        GameMgr.storyCtr.doStory({ "start": GameMgr.playerCtr.playerModel.currOperId });
    }
}