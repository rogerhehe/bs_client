import BaseView from "../../../Core/BaseView"
import GameMgr from "../../../GameMgr"
import UIConfig from "../../../UIConfig"

/**
 * @name PopupView4.ts
 * @description 弹窗界面样式4
 * @author Created by jun on 2018.4.7
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class PopupView4 extends BaseView {

    /** 文本内容 */
    @property(cc.Label)
    txtContent: cc.Label = null;

    /** 弹窗参数 */
    private _popupParam: number = null;

    /** 计时(s) */
    private _timeCnt: number = 0;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onClickBtnClose.bind(this));
    }

    start() {
        this._popupParam = GameMgr.popupCtr.popup4Param;
        if (this._popupParam) {
            this._timeCnt = this._popupParam;
        } else {
            this._timeCnt = 3;
        }

        this.schedule(() => {
            this.timeCallback();
        }, 1, this._timeCnt);
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
    }

    timeCallback() {
        this._timeCnt -= 1;
        this.txtContent.string = this._timeCnt.toString() + "s";
        if (this._timeCnt <= 0) {
            this._uiMgr.closeUI(UIConfig.UIPopupPanel4);
        }
    }

    onClickBtnClose(event) {
        event.stopPropagation();
    }
}