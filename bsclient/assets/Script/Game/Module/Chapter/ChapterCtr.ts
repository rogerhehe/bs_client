import BaseController from "../../../Core/BaseController";

/**
 * @name ChapterCtr.ts
 * @description 章节相关逻辑管理
 * @author Created by jun on 2019.10.28
 */

export default class ChapterCtr extends BaseController {
    private static _instance: ChapterCtr;

    private constructor() {
        super();
    }

    public static getInstance(): ChapterCtr {
        if (!ChapterCtr._instance) {
            ChapterCtr._instance = new ChapterCtr();
        }
        return ChapterCtr._instance;
    }

    public init() {

    }
}
