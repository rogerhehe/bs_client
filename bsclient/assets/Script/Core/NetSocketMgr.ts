/**
 * @name NetSocketMgr.ts
 * @description 网络长连接管理
 * @author Created by jun on 2018.4.7
 */

export default class NetSocketMgr {
    private static _instance: NetSocketMgr;

    private constructor() {
        this._handlerMap = {};
    }

    public static getInstance(): NetSocketMgr {
        if (!NetSocketMgr._instance) {
            NetSocketMgr._instance = new NetSocketMgr();
        }
        return NetSocketMgr._instance;
    }

    /** socket连接对象 */
    private _sockObj: WebSocket;
    /** 返回消息处理器 */
    private _handlerMap: { [key: number]: (data: any) => void; };

    /**
     * 网络连接
     * @param host 地址
     * @param port 端口
     */
    public connect(host: string, port: string) {
        if (this._sockObj === undefined) {
            this._sockObj = new WebSocket(host + ":" + port);
            this._sockObj.binaryType = 'arraybuffer';

            this._sockObj.onopen = this.onOpen.bind(this);
            this._sockObj.onclose = this.onClose.bind(this);
            this._sockObj.onerror = this.onError.bind(this);
            this._sockObj.onmessage = this.onMessage.bind(this);
        }
    }

    /**
     * 主动关闭连接
     */
    public closeConn() {
        if (this._sockObj) {
            this._sockObj.close();
        }
    }

    /**
     * 网络重连
     * @param host 地址
     * @param port 端口
     */
    public reconnect(host: string, port: string) {
        if (this._sockObj && this._sockObj.readyState != WebSocket.OPEN) {
            this._sockObj = new WebSocket(host + ":" + port);
            this._sockObj.binaryType = 'arraybuffer';

            this._sockObj.onopen = this.onOpen.bind(this);
            this._sockObj.onclose = this.onClose.bind(this);
            this._sockObj.onerror = this.onError.bind(this);
            this._sockObj.onmessage = this.onMessage.bind(this);
        }
    }

    /**
     * 连接状态
     */
    public isConnect() {
        if (this._sockObj.readyState === WebSocket.OPEN) {
            return true;
        }
        return false;
    }

    /**
     * 连接成功回调
     * @param event 回调回传参数 
     */
    public onOpen(event: any) {
        console.log("WebSocket instance opened.");
    }

    /**
     * 连接关闭回调
     * @param event 回调回传参数 
     */
    public onClose(event: any) {
        console.log("WebSocket instance closed.");
    }

    /**
     * 连接异常回调
     * @param event 回调回传参数 
     */
    public onError(event: any) {
        console.error("WebSocket instance fired an error.");
    }

    /**
     * 返回消息回调
     * @param event 消息数据 
     */
    public onMessage(event: any) {
        if (typeof (event.data) === "string") {
            console.log("receive msg : " + event.data);
            let parseJSON = (obj: any): any => {
                for (const key in obj) {
                    if (obj.hasOwnProperty(key) && typeof obj[key] === "string") {
                        if (obj[key].indexOf(",") > 0) {
                            obj[key] = JSON.parse(obj[key]);
                            parseJSON(obj[key]);
                        }
                        else if (obj[key].charAt(0) === "{") {
                            obj[key] = JSON.parse(obj[key]);
                        }
                    }
                }
            }

            let msgObj: any = JSON.parse(event.data);
            parseJSON(msgObj);

            let handler: (data: any) => void = this._handlerMap[msgObj.data.requestType];
            handler(msgObj);
        } else {
            if (event.data.byteLength < 6) {
                console.error("receive data err, byteLength:", event.data.byteLength);
                return;
            }
            let dataBuff = new DataView(event.data);
            let readPos = 0;
            let len = dataBuff.getInt32(readPos, false);
            readPos += 4;
            let msgId = dataBuff.getInt16(readPos, false);
            len -= 2;
            readPos += 2;
            let data = new Uint8Array(len);
            for (let idx = 0; idx < len; ++idx) {
                data[idx] = dataBuff.getUint8(readPos);
                readPos++;
            }

            let handler: (data: any) => void = this._handlerMap[msgId];
            handler(data);

            console.log("receive msgId:", msgId, " byteLength:", event.data.byteLength);
        }
    }

    /**
     * 发送消息
     * @param data byte消息数据
     */
    public sendByte(msgId: number, data: any) {
        if (this._sockObj.readyState === WebSocket.OPEN) {
            const msgLen = data.length + 2;
            const bufferLen = data.length + 6;
            const buffer = new ArrayBuffer(bufferLen);
            const dataView = new DataView(buffer);
            dataView.setInt32(0, msgLen, false);
            dataView.setInt16(4, msgId, false);
            let offset = 6;
            for (let idx = 0; idx < data.length; ++idx) {
                dataView.setUint8(offset++, data[idx]);
            }

            this._sockObj.send(buffer);
            console.log("send msgId:", msgId, "byteLength:", buffer.byteLength);
        } else {
            console.error("WebSocket instance is disconnect.");
        }
    }

    /**
     * 发送消息
     * @param msg json消息数据
     */
    public sendJson(msg: any) {
        if (this._sockObj.readyState === WebSocket.OPEN) {
            let msgJson: any = JSON.stringify(msg);
            console.log("send msg : " + msg);
            this._sockObj.send(msgJson);
        } else {
            console.error("WebSocket instance is disconnect.");
        }
    }

    /**
     * 注册消息处理器
     * @param protocolId 协议ID 
     * @param callbackFun 处理器回调函数
     */
    public registerHandler(protocolId: number, callbackFun: (data: any) => void) {
        this._handlerMap[protocolId] = callbackFun;
    }
}