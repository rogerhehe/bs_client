import GameMgr from "../../../GameMgr";

/**
 * @name MainView.ts
 * @description 主界面
 * @author Created by jun on 2019.10.28
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class MainView extends cc.Component {

    /** 自动提示 */
    @property(cc.Sprite)
    sprAuto: cc.Sprite = null;

    /** 阅读速度 */
    @property(cc.Label)
    txtSpeed: cc.Label = null;

    /** 换装按钮 */
    @property(cc.Button)
    btnCloth: cc.Button = null;

    _canClick: boolean = false;

    onLoad() {
        GameMgr.mainCtr.setView(this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickNext.bind(this))
    }

    start() {
        this.sprAuto.node.active = false;
        this.txtSpeed.string = "";
        this._canClick = true;
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
        GameMgr.mainCtr.setView(null);
    }

    onClickNext(event: any) {

    }

    onClickSpeed(event, data) {
        event.stopPropagation();

    }

    onClickAuto(event, data) {
        event.stopPropagation();
        // GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);
        if (!this._canClick) { return; }
        this._disableClick();

        // 设置速度
        if (this.sprAuto.node.active) {
            GameMgr.mainCtr.speed++;
            if (GameMgr.mainCtr.speed > 3) {
                GameMgr.mainCtr.speed = 1;
            }
        } else {
            GameMgr.mainCtr.speed = 1;
        }
        this.txtSpeed.string = GameMgr.mainCtr.speed.toString() + ".0X";

        // 加速自动播放
        GameMgr.storyCtr.doAuto({ "speed": true });
    }

    onClickPlayback(event, data) {
        event.stopPropagation();
        // GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);
        if (!this._canClick) { return; }
        this._disableClick();

        // 暂停
        this._pauseAuto();
        // 打开回放
        // GameMgr.uiMgr.openUI(GameMgr.cfg.uiPlaybackPanel);
    }

    onClickChapter(event, data) {
        event.stopPropagation();
        // GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);
        if (!this._canClick) { return; }
        this._disableClick();

        // 暂停
        this._pauseAuto();
        // 打开章节选择
        // GameMgr.audioMgr.stopMusic();
        // GameMgr.uiMgr.openUI(GameMgr.cfg.uiChapterPanel);
    }

    onClickCloth(event, data) {
        event.stopPropagation();
        // GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);
        if (!this._canClick) { return; }
        this._disableClick();

        // 暂停
        this._pauseAuto();
        // 打开衣服选择
        // GameMgr.audioMgr.stopMusic();
        // GameMgr.uiMgr.openUI(GameMgr.cfg.uiReplacementPanel);
    }

    setAuto(isAuto: boolean) {
        if (this.sprAuto.node.active != isAuto) {
            if (isAuto) {
                let tw = cc.tween;
                tw(this.sprAuto.node)
                    .sequence(
                        tw().to(3, { opacity: 130, scale: 0.9 }),
                        tw().to(3, { opacity: 255, scale: 1.0 })
                    )
                    .repeatForever()
                    .start()
            } else {
                cc.tween(this.sprAuto.node).stop();
                this.txtSpeed.string = "";
            }
            this.sprAuto.node.active = isAuto;
        }
    }

    showClothButton(isShow: boolean) {
        if (this.btnCloth.node.active != isShow) {
            this.btnCloth.node.active = isShow;
        }
    }

    _pauseAuto() {
        this.txtSpeed.string = "";
        this.sprAuto.node.active = false;
        GameMgr.storyCtr.doAuto({ "pause": true });
    }

    _disableClick() {
        this._canClick = false;
        this.unscheduleAllCallbacks();
        this.scheduleOnce(()=>{
            this._canClick = true;
        }, 2);
    }
}