import BaseController from "../../../Core/BaseController";

/**
 * @name EndCtr.ts
 * @description 结束管理
 * @author Created by jun on 2019.10.28
 */

export default class EndCtr extends BaseController {
    private static _instance: EndCtr;

    private constructor() {
        super();
    }

    public static getInstance(): EndCtr {
        if (!EndCtr._instance) {
            EndCtr._instance = new EndCtr();
        }
        return EndCtr._instance;
    }

    public init() {
        
    }
}
