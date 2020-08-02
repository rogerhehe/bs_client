import BaseController from "../../../Core/BaseController";

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
}
