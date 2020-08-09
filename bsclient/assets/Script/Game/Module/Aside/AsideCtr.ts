import BaseController from "../../../Core/BaseController";
import UIConfig from "../../../UIConfig"
import AsideView from "./AsideView"

/**
 * @name AsideCtr.ts
 * @description 旁白管理
 * @author Created by jun on 2018.4.7
 */

export default class AsideCtr extends BaseController {
    private static _instance: AsideCtr;

    private constructor() {
        super();
    }

    public static getInstance(): AsideCtr {
        if (!AsideCtr._instance) {
            AsideCtr._instance = new AsideCtr();
            AsideCtr._instance.init();
        }
        return AsideCtr._instance;
    }

    public init() {

    }

    /** 旁白界面 */
    private _view: AsideView = null;
    set view(view: AsideView) {
        this._view = view;
    }

    private _content: string = "";
    /** 旁白内容 */
    get content() { return this._content; }

    private _operId: number = 0;
    /** 步骤ID */
    get operId() { return this._operId; }

    /**
     * 打开旁白界面
     * @param content 
     * @param operId 
     */
    public openAside(content: string, operId: number) {
        this._content = content;
        this._operId = operId;
        if (this._view) {
            this._view.showAside(content, operId);
        } else {
            this._uiMgr.openUI(UIConfig.UIAsidePanel);
        }
    }

    /**
     * 关闭旁白界面
     */
    public closeAside() {
        if (this._view) {
            this._uiMgr.closeUI(UIConfig.UIAsidePanel);
        }
    }
}