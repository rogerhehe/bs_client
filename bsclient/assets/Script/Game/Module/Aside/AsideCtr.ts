import BaseController from "../../../Core/BaseController";

/**
 * @name AsideCtr.ts
 * @description 旁白管理
 * @author Created by jun on 2018.4.7
 */

export default class AsideCtr extends BaseController {
    private static _instance: AsideCtr;

    private constructor() {
        super();
    }

    public static getInstance(): AsideCtr {
        if (!AsideCtr._instance) {
            AsideCtr._instance = new AsideCtr();
        }
        return AsideCtr._instance;
    }

    public init() {

    }
}