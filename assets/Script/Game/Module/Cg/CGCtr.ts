import BaseController from "../../../Core/BaseController"
import UIConfig from "../../../UIConfig"

/**
 * @name CGCtr.ts
 * @description CG管理
 * @author Created by jun on 2019.10.28
 */

export default class CGCtr extends BaseController {
    private static _instance: CGCtr;

    private constructor() {
        super();
    }

    public static getInstance(): CGCtr {
        if (!CGCtr._instance) {
            CGCtr._instance = new CGCtr();
            CGCtr._instance.init();
        }
        return CGCtr._instance;
    }
    
    public init() {
        
    }


    private _cgId: number = 0;
    /** 插图配置ID */
    get cgId() { return this._cgId; }

    /**
     * 打开CG界面
     * @param _cgId
     */
    public openCG(cgId: number) {
        this._cgId = cgId;
        this._uiMgr.openUI(UIConfig.UICGPanel);
    }
}
