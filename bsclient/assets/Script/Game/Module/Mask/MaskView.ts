
/**
 * @name MaskView.ts
 * @description 遮罩界面
 * @author Created by jun on 2019.10.28
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class MaskView extends cc.Component {

    /** 白色过渡 */
    @property(cc.Sprite)
    sprWhite: cc.Sprite = null;

    /** 黑色过渡 */
    @property(cc.Sprite)
    sprBlack: cc.Sprite = null;

    /** 动画组件 */
    @property(cc.Animation)
    _animation: cc.Animation = null;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickNext.bind(this))
        this._animation = this.getComponent(cc.Animation);
    }

    start() {
        this._animation.play();
    }

    onDestroy() {

    }

    onClickNext(event: any) {
        event.stopPropagation();
    }

    showMask(isWhite: boolean) {
        if (isWhite) {
            this.sprWhite.node.active = true;
            this.sprBlack.node.active = false;
        } else {
            this.sprBlack.node.active = true;
            this.sprWhite.node.active = false;
        }
    }

    _showMaskEnd() {
        this.node.destroy();
    }
}