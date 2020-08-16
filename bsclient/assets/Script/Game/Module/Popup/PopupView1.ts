import BaseView from "../../../Core/BaseView"
import UIConfig from "../../../UIConfig"
import GameMgr from "../../../GameMgr"

/**
 * @name PopupView1.ts
 * @description 弹窗界面样式1
 * @author Created by jun on 2018.4.7
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class PopupView1 extends BaseView {

    /** 文本内容 */
    @property(cc.Label)
    txtContent: cc.Label = null;

    /** 确定按钮文本内容 */
    @property(cc.Label)
    txtSure: cc.Label = null;

    /** 取消文本内容 */
    @property(cc.Label)
    txtCancle: cc.Label = null;

    /** 弹窗参数 */
    private _popupParam: IPopupParam = null;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, (event: any) => {
            event.stopPropagation();
        });
    }

    start() {
        this._popupParam = GameMgr.popupCtr.popup1Param;
        if (this._popupParam) {
            this.txtContent.string = this._popupParam.txtContent;
            if (this._popupParam.txtSure) {
                this.txtSure.string = this._popupParam.txtSure;
            }
            if (this._popupParam.txtCancel) {
                this.txtCancle.string = this._popupParam.txtCancel;
            }
        }
    }

    onDestroy() {

    }

    onClickBtnClose() {
        // GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);
        this._uiMgr.closeUI(UIConfig.UIPopupPanel1);
    }

    onClickBtnSure() {
        // GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);
        this._uiMgr.closeUI(UIConfig.UIPopupPanel1);

        if (this._popupParam) {
            this._popupParam.callbackSure();
        }
    }

    onClickBtnCancle() {
        // GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);
        this._uiMgr.closeUI(UIConfig.UIPopupPanel1);

        if (this._popupParam) {
            this._popupParam.callbackCancle();
        }
    }
}