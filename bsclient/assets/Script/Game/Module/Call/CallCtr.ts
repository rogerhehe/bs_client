import BaseController from "../../../Core/BaseController";

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

    /** 进入对话开始对话的起始ID */
    public startId: number = 0;

    /** 是否电话切入分支 */
    public switchBranch: boolean = false;

    public init() {
        this.startId = 0;
        this.switchBranch = false;
    }

    
}