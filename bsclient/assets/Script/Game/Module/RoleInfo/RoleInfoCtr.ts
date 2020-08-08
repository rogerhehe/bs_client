import BaseController from "../../../Core/BaseController";

/**
 * @name RoleInfoCtr.ts
 * @description 人物介绍管理
 * @author Created by jun on 2019.10.28
 */

export default class RoleInfoCtr extends BaseController {
    private static _instance: RoleInfoCtr;

    private constructor() {
        super();
    }

    public static getInstance(): RoleInfoCtr {
        if (!RoleInfoCtr._instance) {
            RoleInfoCtr._instance = new RoleInfoCtr();
            RoleInfoCtr._instance.init();
        }
        return RoleInfoCtr._instance;
    }
    
    public init() {
        
    }
}
