import BaseView from "../../../Core/BaseView"
import GameMgr from "../../../GameMgr"
import UIConfig from "../../../UIConfig"
import Config from "../../../Config"

/**
 * @name LoginView.ts
 * @description 登录界面
 * @author Created by jun on 2018.4.7
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoginView extends BaseView {

    /** 名称动画 */
    @property(sp.Skeleton)
    spLogo: sp.Skeleton = null;

    /** 城堡动画 */
    @property(sp.Skeleton)
    spFengMian: sp.Skeleton = null;

    /** 开始图文 */
    @property(cc.Sprite)
    sprStart: cc.Sprite = null;

    /** 动画组件 */
    @property(cc.Animation)
    _animation: cc.Animation = null;

    _canNext: boolean = false;
    _fengmianOK: boolean = false;
    _logoOK: boolean = false;
    _startGame: boolean = false;
    _fengmianUrl: string = "spines/ui/fengmian/fengmian";
    _logoUrl: string = "spines/ui/logo/logo";

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickStart.bind(this))
        this._animation = this.getComponent(cc.Animation);
        this._canNext = false;
        this._startGame = false;
    }

    start() {
        this.spLogo.setEndListener(() => {
            this._animation.playAdditive('login_fengmain');
            this._animation.playAdditive('login_start');
            this._canNext = true;
        })
        this.spFengMian.setAnimation(0, 'jin_s', false);
        this.spFengMian.addAnimation(0, "jin_l", true);

        this.spLogo.setAnimation(0, 'logo_s', false);
        this.spLogo.addAnimation(0, "logo_l", true);
    }

    onDestroy() {

    }

    update() {
        if (GameMgr.GAME_INIT_FIN && !this._startGame && this._canNext) {
            this._startGame = true;
            this._uiMgr.closeUI(UIConfig.UILoadingPanel);
            this._audioMgr.playMusic(UIConfig.UILoginPanel.AB, "title");

            this.spFengMian.setAnimation(0, 'jin_s', false);
            this.spFengMian.addAnimation(0, "jin_l", true);

            this.spLogo.setAnimation(0, 'logo_s', false);
            this.spLogo.addAnimation(0, "logo_l", true);
        }
    }

    onClickStart(event) {
        event.stopPropagation();

        if (this._canNext) {
            this._audioMgr.defaultSound();
            this._audioMgr.stopMusic();

            this._uiMgr.closeUI(UIConfig.UILoginPanel);

            // 通关过第一章打开章节选择界面
            if (GameMgr.playerCtr.playerModel.chapterList[1].stage[1].playCount > 0) {
                this._uiMgr.openUI(UIConfig.UIChapterPanel);
                return;
            }
            
            // 开始旅行
            GameMgr.storyCtr.doStartStory(GameMgr.playerCtr.playerModel.currOperId);
        }
    }
}