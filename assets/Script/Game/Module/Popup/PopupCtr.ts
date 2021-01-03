import BaseController from "../../../Core/BaseController"
import PopupView3 from "./PopupView3"
import UIConfig from "../../../UIConfig"

/**
 * @name PopupCtr.ts
 * @description 弹窗逻辑管理
 * @author Created by jun on 2018.4.7
 */

export default class PopupCtr extends BaseController {
    private static _instance: PopupCtr;

    private constructor() {
        super();
    }

    public static getInstance(): PopupCtr {
        if (!PopupCtr._instance) {
            PopupCtr._instance = new PopupCtr();
            PopupCtr._instance.init();
        }
        return PopupCtr._instance;
    }

    public init() {

    }

    /** 弹窗1参数 */
    public popup1Param: IPopupParam = null;

    /** 弹窗2参数 */
    public popup2Param: string = "";

    /** 弹窗2参数 */
    public popup4Param: number = 0;

    /**
     * 按钮弹窗
     * @param popupParam 内容参数
     */
    public openPopupBtn(popupParam: IPopupParam) {
        this.popup1Param = popupParam;
        this._uiMgr.openUI(UIConfig.UIPopupPanel1);
    }

    /**
     * 遮罩弹窗
     * @param strParam 提示内容
     */
    public openPopupMask(strParam: string) {
        this.popup2Param = strParam;
        this._uiMgr.openUI(UIConfig.UIPopupPanel2);
    }

    /**
     * 漂移提示
     * @param strTips 提示内容
     */
    public openPopupTip(strTips: string) {
        var currCanvas = cc.find("Canvas");
        if (currCanvas) {
            this._resMgr.loadAsset(UIConfig.COMMON_AB, UIConfig.UIPopupPanel3.prefab, cc.Prefab, (prefab) => {
                let popupTips: cc.Node = cc.instantiate(prefab);
                let popupView: PopupView3 = popupTips.getComponent("PopupView3");
                popupView.node.zIndex = UIConfig.UIPopupPanel3.zOrder;
                popupView.txtContent.string = strTips;
                currCanvas.addChild(popupTips);
                // 动画
                let tw = cc.tween;
                tw(popupTips)
                    .parallel(
                        tw().to(3, { position: cc.v2(0, 380) }, { easing: 'sineOut' }),
                        tw().to(3, { opacity: 0 }, { easing: 'fade' })
                    )
                    .call(() => {
                        popupTips.destroy();
                        this._resMgr.removeAsset(UIConfig.COMMON_AB, UIConfig.UIPopupPanel3.prefab, cc.Prefab);
                    })
                    .start()
            });
        }
    }

    /**
     * 锁定提示
     * @param strTips 提示内容
     */
    public openPopupTipLock(strTips: string) {
        var currCanvas = cc.find("Canvas");
        if (currCanvas) {
            this._resMgr.loadAsset(UIConfig.COMMON_AB, UIConfig.UIPopupPanel3.prefab, cc.Prefab, (prefab) => {
                let popupTips: cc.Node = cc.instantiate(prefab);
                let popupView: PopupView3 = popupTips.getComponent("PopupView3");
                popupView.node.zIndex = UIConfig.UIPopupPanel3.zOrder;
                popupView.txtContent.string = strTips;
                currCanvas.addChild(popupTips);
                // 动画
                cc.tween(popupTips)
                    .delay(4)
                    .to(2, { opacity: 0 }, { easing: 'fade' })
                    .call(() => {
                        popupTips.destroy();
                        this._resMgr.removeAsset(UIConfig.COMMON_AB, UIConfig.UIPopupPanel3.prefab, cc.Prefab);
                    })
                    .start()
            });
        }
    }

    /**
     * 倒计时弹窗
     * @param timeCnt 倒计时时间，单位(s)
     */
    public openPopupTime(timeCnt: number) {
        if (timeCnt <= 0) {
            return;
        }
        this.popup4Param = timeCnt;
        this._uiMgr.openUI(UIConfig.UIPopupPanel4);
    }
}