import BaseController from "../../../Core/BaseController"
import UIConfig from "../../../UIConfig"

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

    private _roleInfoId: number = 0;
    /** 插图配置ID */
    get roleInfoId() { return this._roleInfoId; }

    /**
     * 打开人物介绍界面
     * @param _roleInfoId
     */
    public openRoleInfo(roleInfoId: number) {
        this._roleInfoId = roleInfoId;
        this._uiMgr.openUI(UIConfig.UIRoleInfoPanel);
    }
}
