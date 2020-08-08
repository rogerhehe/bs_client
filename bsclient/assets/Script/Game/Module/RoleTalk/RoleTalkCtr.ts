import BaseController from "../../../Core/BaseController";

/**
 * @name RoleTalkCtr.ts
 * @description 对话管理
 * @author Created by jun on 2019.10.28
 */

export default class RoleTalkCtr extends BaseController {
    private static _instance: RoleTalkCtr;

    private constructor() {
        super();
    }

    public static getInstance(): RoleTalkCtr {
        if (!RoleTalkCtr._instance) {
            RoleTalkCtr._instance = new RoleTalkCtr();
            RoleTalkCtr._instance.init();
        }
        return RoleTalkCtr._instance;
    }

    public init() {
        
    }
}
