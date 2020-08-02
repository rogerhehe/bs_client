import GameMgr from "../../../GameMgr";

/**
 * @name PopupView2.ts
 * @description 弹窗界面样式2
 * @author Created by jun on 2018.4.7
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class PopupView2 extends cc.Component {

    /** 文本内容 */
    @property(cc.Label)
    txtContent: cc.Label = null;

    /** 弹窗参数 */
    private _popupParam: IPopupParam = null;

    onLoad() {
        GameMgr.popupCtr.viewComp = this;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onClickBtnClose.bind(this));
    }

    start() {
        this._popupParam = <IPopupParam>this.node["customParam"];
        if (this._popupParam) {
            this.txtContent.string = this._popupParam.txtContent;
        }
    }

    onClickBtnClose(event) {
        event.stopPropagation();
        GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);
        GameMgr.uiMgr.closeUI(GameMgr.cfg.uiPopupPanel2);
    }
}