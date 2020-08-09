import BaseController from "../../../Core/BaseController";
import UIConfig from "../../../UIConfig"

/**
 * @name SelectCtr.ts
 * @description 选项管理
 * @author Created by jun on 2019.10.28
 */

export default class SelectCtr extends BaseController {
    private static _instance: SelectCtr;

    private constructor() {
        super();
    }

    public static getInstance(): SelectCtr {
        if (!SelectCtr._instance) {
            SelectCtr._instance = new SelectCtr();
            SelectCtr._instance.init();
        }
        return SelectCtr._instance;
    }

    public init() {

    }

    private _selectId: number = 0;
    /** 选择配置ID */
    get selectId() { return this._selectId; }

    /**
     * 打开选择界面
     * @param _selectId 
     */
    public openSelectPanel(selectId: number) {
        this._selectId = selectId;
        this._uiMgr.openUI(UIConfig.UISelectPanel);
    }

}
