import BaseController from "../../../Core/BaseController";
import UIConfig from "../../../UIConfig"

/**
 * @name ChatuCtr.ts
 * @description 插图管理
 * @author Created by jun on 2019.10.28
 */

export default class ChatuCtr extends BaseController {
    private static _instance: ChatuCtr;

    private constructor() {
        super();
    }

    public static getInstance(): ChatuCtr {
        if (!ChatuCtr._instance) {
            ChatuCtr._instance = new ChatuCtr();
        }
        return ChatuCtr._instance;
    }

    public init() {

    }

    private _chatuId: number = 0;
    /** 插图配置ID */
    get chatuId() { return this._chatuId; }

    /**
     * 打开插图界面
     * @param _chatuId
     */
    public openChatu(chatuId: number) {
        this._chatuId = chatuId;
        this._uiMgr.openUI(UIConfig.UIChatuPanel);
    }
}
