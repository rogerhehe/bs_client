import BaseView from "../../../Core/BaseView"
import UIConfig from "../../../UIConfig"
import GameMgr from "../../../GameMgr";

/**
 * @name MaskView.ts
 * @description 遮罩界面
 * @author Created by jun on 2019.10.28
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class MaskView extends BaseView {

    /** 白色过渡 */
    @property(cc.Sprite)
    sprWhite: cc.Sprite = null;

    /** 黑色过渡 */
    @property(cc.Sprite)
    sprBlack: cc.Sprite = null;

    /** 动画组件 */
    @property(cc.Animation)
    private _animation: cc.Animation = null;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, (event) => {
            event.stopPropagation();
        })
        this._animation = this.getComponent(cc.Animation);
    }

    start() {
        this._showMask(GameMgr.maskCtr.isWhite);
        this._animation.play();
    }

    onDestroy() {

    }

    private _showMask(isWhite: boolean) {
        if (isWhite) {
            this.sprWhite.node.active = true;
            this.sprBlack.node.active = false;
        } else {
            this.sprBlack.node.active = true;
            this.sprWhite.node.active = false;
        }
    }

    _showMaskEnd() {
        this._uiMgr.closeUI(UIConfig.UIMaskPanel);
    }
}