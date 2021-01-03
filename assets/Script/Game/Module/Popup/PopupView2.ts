import BaseView from "../../../Core/BaseView"
import UIConfig from "../../../UIConfig"
import GameMgr from "../../../GameMgr"

/**
 * @name PopupView2.ts
 * @description 弹窗界面样式2
 * @author Created by jun on 2018.4.7
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class PopupView2 extends BaseView {

    /** 文本内容 */
    @property(cc.Label)
    txtContent: cc.Label = null;

    /** 弹窗参数 */
    private _popupParam: string = null;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onClickBtnClose.bind(this));
    }

    start() {
        this._popupParam = GameMgr.popupCtr.popup2Param;
        if (this._popupParam) {
            this.txtContent.string = this._popupParam;
        }
    }

    onClickBtnClose(event) {
        event.stopPropagation();
        this._audioMgr.defaultSound();
        
        this._uiMgr.closeUI(UIConfig.UIPopupPanel2);
    }
}