import BaseController from "../../../Core/BaseController";
import UIConfig from "../../../UIConfig"

/**
 * @name MaskCtr.ts
 * @description 剧情相关逻辑管理
 * @author Created by jun on 2019.10.28
 */

export default class MaskCtr extends BaseController {
    private static _instance: MaskCtr;

    private constructor() {
        super();
    }

    public static getInstance(): MaskCtr {
        if (!MaskCtr._instance) {
            MaskCtr._instance = new MaskCtr();
            MaskCtr._instance.init();
        }
        return MaskCtr._instance;
    }

    public init() {
        this._isWhite = false;
    }

    private _isWhite: boolean = false;
    /** 独白起始ID */
    get isWhite() { return this._isWhite; }

    /**
     * 打开过渡界面
     * @param isWhite 是否为白色遮罩
     */
    public openMask(isWhite: boolean) {
        this._isWhite = isWhite;
        this._uiMgr.openUI(UIConfig.UIMaskPanel);
    }
}
