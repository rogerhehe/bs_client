import BaseController from "../../../Core/BaseController";
import GameMgr from "../../../GameMgr";
import PopupView3 from "./PopupView3";

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
        }
        return PopupCtr._instance;
    }

    public init() {

    }

    /**
     * 按钮弹窗
     * @param popupParam 内容参数
     */
    public openPopupBtn(popupParam: IPopupParam) {
        let uiCfg: IUICfg = {
            prefabUrl: GameMgr.cfg.uiPopupPanel1.prefabUrl,
            customParam: popupParam,
            action: true,
            zOrder: cc.macro.MAX_ZINDEX
        };

        GameMgr.uiMgr.openUI(uiCfg);
    }

    /**
     * 遮罩弹窗
     * @param strParam 提示内容
     */
    public openPopupMask(strParam: string) {
        let uiCfg: IUICfg = {
            prefabUrl: GameMgr.cfg.uiPopupPanel2.prefabUrl,
            customParam: { txtContent: strParam },
            action: true,
            zOrder: cc.macro.MAX_ZINDEX
        };

        GameMgr.uiMgr.openUI(uiCfg);
    }

    /**
     * 漂移提示
     * @param strTips 提示内容
     */
    public openPopupTip(strTips: string) {
        var currCanvas = cc.find("Canvas");
        if (currCanvas) {
            let popupTips: cc.Node = cc.instantiate(GameMgr.resCache.getPrefab(GameMgr.cfg.uiPopupPanel3.prefabUrl));
            let popupView: PopupView3 = popupTips.getComponent("PopupView3");
            popupView.node.zIndex = cc.macro.MAX_ZINDEX;
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
                    console.log("openPopupTip: destroy popup tip!");
                })
                .start()
        }
    }

    /**
     * 锁定提示
     * @param strTips 提示内容
     */
    public openPopupTipLock(strTips: string) {
        var currCanvas = cc.find("Canvas");
        if (currCanvas) {
            let popupTips: cc.Node = cc.instantiate(GameMgr.resCache.getPrefab(GameMgr.cfg.uiPopupPanel3.prefabUrl));
            let popupView: PopupView3 = popupTips.getComponent("PopupView3");
            popupView.node.zIndex = cc.macro.MAX_ZINDEX;
            popupView.txtContent.string = strTips;
            currCanvas.addChild(popupTips);

            // 动画
            cc.tween(popupTips)
                .delay(4)
                .to(2, { opacity: 0 }, { easing: 'fade' })
                .start()
        }
    }

    /**
     * 倒计时弹窗
     * @param timeCnt 倒计时时间，单位(s)
     */
    public openPopupTime(timeCnt: number) {
        console.log("openPopupTime timeCnt: ", timeCnt);

        if (timeCnt <= 0) {
            return;
        }

        let uiCfg: IUICfg = {
            prefabUrl: GameMgr.cfg.uiPopupPanel4.prefabUrl,
            customParam: { txtContent: timeCnt },
            action: true,
            zOrder: cc.macro.MAX_ZINDEX
        };

        GameMgr.uiMgr.openUI(uiCfg);
    }
}