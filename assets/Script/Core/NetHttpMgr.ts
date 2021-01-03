/**
 * @name NetHttpMgr.ts
 * @description 网络短连接管理
 * @author Created by jun on 2018.4.7
 */

export default class NetHttpMgr {
    private static _instance: NetHttpMgr;

    private constructor() { }

    public static getInstance(): NetHttpMgr {
        if (!NetHttpMgr._instance) {
            NetHttpMgr._instance = new NetHttpMgr();
        }
        return NetHttpMgr._instance;
    }
}