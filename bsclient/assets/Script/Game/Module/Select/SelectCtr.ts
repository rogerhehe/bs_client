import BaseController from "../../../Core/BaseController";

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
        }
        return SelectCtr._instance;
    }

    public init() {
        
    }
}
