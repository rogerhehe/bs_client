import BaseController from "../../../Core/BaseController";

/**
 * @name LoadingCtr.ts
 * @description 加载管理
 * @author Created by jun on 2019.10.28
 */

export default class LoadingCtr extends BaseController {
    private static _instance: LoadingCtr;

    private constructor() {
        super();
    }

    public static getInstance(): LoadingCtr {
        if (!LoadingCtr._instance) {
            LoadingCtr._instance = new LoadingCtr();
        }
        return LoadingCtr._instance;
    }

    public init() {
        
    }
}
