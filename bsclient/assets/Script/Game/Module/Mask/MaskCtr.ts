import BaseController from "../../../Core/BaseController";
import GameMgr from "../../../GameMgr";

/**
 * @name MaskCtr.ts
 * @description 剧情相关逻辑管理
 * @author Created by jun on 2019.10.28
 */

export default class MaskCtr extends BaseController {
    private static _instance: MaskCtr;

    private constructor() {
        super();
    }

    public static getInstance(): MaskCtr {
        if (!MaskCtr._instance) {
            MaskCtr._instance = new MaskCtr();
        }
        return MaskCtr._instance;
    }

    public init() {
        
    }
}
