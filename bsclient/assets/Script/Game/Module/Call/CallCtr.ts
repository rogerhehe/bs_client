import BaseController from "../../../Core/BaseController"
import UIConfig from "../../../UIConfig"

/**
 * @name CallCtr.ts
 * @description 电话管理
 * @author Created by jun on 2018.4.7
 */

export default class CallCtr extends BaseController {
    private static _instance: CallCtr;

    private constructor() {
        super();
    }

    public static getInstance(): CallCtr {
        if (!CallCtr._instance) {
            CallCtr._instance = new CallCtr();
            CallCtr._instance.init();
        }
        return CallCtr._instance;
    }

    public init() {
        
    }

    /** 是否电话切入分支 */
    public switchBranch: boolean = false;

    private _startId: number = 0;
    /** 进入对话开始对话的起始ID */
    get startId() { return this._startId; }

    /**
     * 打开人物介绍界面
     * @param _startId
     */
    public openCall(startId: number) {
        this._startId = startId;
        this._uiMgr.openUI(UIConfig.UICallPanel);
    }

    
}