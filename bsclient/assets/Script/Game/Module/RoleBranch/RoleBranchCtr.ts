import BaseController from "../../../Core/BaseController";

/**
 * @name RoleBranchCtr.ts
 * @description 剧情人物分支选择管理
 * @author Created by jun on 2019.10.28
 */

export default class RoleBranchCtr extends BaseController {
    private static _instance: RoleBranchCtr;

    private constructor() {
        super();
    }

    public static getInstance(): RoleBranchCtr {
        if (!RoleBranchCtr._instance) {
            RoleBranchCtr._instance = new RoleBranchCtr();
            RoleBranchCtr._instance.init();
        }
        return RoleBranchCtr._instance;
    }

    public fromChapterView: boolean = false;

    public init() {
        this.fromChapterView = false;
    }
}
