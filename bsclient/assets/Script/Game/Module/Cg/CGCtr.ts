import BaseController from "../../../Core/BaseController";

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
        }
        return CGCtr._instance;
    }
    
    public init() {
        
    }
}
