import BaseController from "../../../Core/BaseController";

/**
 * @name LoginCtr.ts
 * @description 登录相关逻辑管理
 * @author Created by jun on 2018.4.7
 */

export default class LoginCtr extends BaseController {
    private static _instance: LoginCtr;

    private constructor() {
        super();
    }

    public static getInstance(): LoginCtr {
        if (!LoginCtr._instance) {
            LoginCtr._instance = new LoginCtr();
        }
        return LoginCtr._instance;
    }

    public init() {
        // GameMgr.netSockMgr.registerHandler(MsgId.WC_RESP_LOGIN, this.respLogin.bind(this));
    }

    /**
     * 请求登录
     * @param account 账号
     * @param passwd 密码
     */
    public reqLogin(account: string, psd: string) {
        // let msg = ReqLogin.create({ account: account, password: psd });

        // GameMgr.netSockMgr.sendByte(MsgId.CW_REQ_LOGIN, ReqLogin.encode(msg).finish());
    }

    /**
     * 请求登录返回
     * @param event 返回数据
     */
    public respLogin(event: any) {
        // let msg: RespLogin = RespLogin.decode(event);
        // if (msg.result === 0) {
            
        // } else if (msg.result === 1) {
        //     GameMgr.popupCtr.openPopupTip("异常");
        // } else if (msg.result === 2) {
        //     GameMgr.popupCtr.openPopupTip("已登陆");
        // } else if (msg.result === 3) {
        //     GameMgr.popupCtr.openPopupTip("数据加载失败");
        // }
    }
}