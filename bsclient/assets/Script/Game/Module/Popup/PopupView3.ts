import GameMgr from "../../../GameMgr";

/**
 * @name PopupView3.ts
 * @description 弹窗界面样式3
 * @author Created by jun on 2018.4.7
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class PopupView3 extends cc.Component {

    /** 文本内容 */
    @property(cc.Label)
    txtContent: cc.Label = null;

    onLoad() {
        GameMgr.popupCtr.viewComp = this;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onClickBtnClose.bind(this));
    }

    start() {

    }

    onClickBtnClose(event) {
        event.stopPropagation();
    }
}