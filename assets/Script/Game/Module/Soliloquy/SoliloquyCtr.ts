import BaseController from "../../../Core/BaseController";
import SoliloquyView from "./SoliloquyView"
import UIConfig from "../../../UIConfig"

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
            SoliloquyCtr._instance.init();
        }
        return SoliloquyCtr._instance;
    }

    public init() {
        this._soliloquyId = 0;
    }

    private _soliloquyId: number = 0;
    /** 独白起始ID */
    get soliloquyId() { return this._soliloquyId; }

    /** 独白界面 */
    private _view: SoliloquyView = null;
    set view(view: SoliloquyView) {
        this._view = view;
    }

    /**
     * 打开独白界面
     * @param soliloquyId 独白起始ID
     */
    public openSoliloquy(soliloquyId: number) {
        this._soliloquyId = soliloquyId;
        this._uiMgr.openUI(UIConfig.UISoliloquyPanel);
    }
}
