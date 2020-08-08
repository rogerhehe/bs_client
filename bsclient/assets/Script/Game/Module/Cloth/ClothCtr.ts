import BaseController from "../../../Core/BaseController";

/**
 * @name ClothCtr.ts
 * @description 换装管理
 * @author Created by jun on 2019.10.28
 */

export default class ClothCtr extends BaseController {
    private static _instance: ClothCtr;

    private constructor() {
        super();
    }

    public static getInstance(): ClothCtr {
        if (!ClothCtr._instance) {
            ClothCtr._instance = new ClothCtr();
            ClothCtr._instance.init();
        }
        return ClothCtr._instance;
    }

    public init() {

    }
}
