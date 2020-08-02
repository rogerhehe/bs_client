import BaseController from "../../../Core/BaseController";

/**
 * @name SoliloquyCtr.ts
 * @description 独白管理
 * @author Created by jun on 2019.10.28
 */

export default class SoliloquyCtr extends BaseController {
    private static _instance: SoliloquyCtr;

    private constructor() {
        super();
    }

    public static getInstance(): SoliloquyCtr {
        if (!SoliloquyCtr._instance) {
            SoliloquyCtr._instance = new SoliloquyCtr();
        }
        return SoliloquyCtr._instance;
    }

    public init() {
        
    }
}
