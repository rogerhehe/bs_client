import BaseController from "../../../Core/BaseController";
import PlayerModel from "./PlayerModel";
import GameMgr from "../../../GameMgr";
import Config from "../../../Config"

/**
 * @name PlayerCtr.ts
 * @description 玩家相关逻辑管理
 * @author Created by jun on 2018.4.7
 */


let BOOKID: number = 665;
let SLOT_ID_LIST: number = 1;
let SLOT_ID_CURR: number = 2;
let SLOT_ID_CLOTH: number = 3;
let SLOT_ID_LOVE: number = 4;
let SLOT_ID_EGG: number = 5;
let SLOT_ID_SELECT: number = 6;
let SLOT_ID_REPLAY: number = 7;

export default class PlayerCtr extends BaseController {
    private static _instance: PlayerCtr;

    private constructor() {
        super();
    }

    public static getInstance(): PlayerCtr {
        if (!PlayerCtr._instance) {
            PlayerCtr._instance = new PlayerCtr();
            PlayerCtr._instance.init();
        }
        return PlayerCtr._instance;
    }

    public playerModel: PlayerModel = null;
    /** 
     isLimitByUpdate: 1代表受到章节更新限制，0代表不受到限制
     lastUpdateChapterId: 最新更新的章节id
     willUpdateMilliTime: 如果没有获取下一章的更新时间时返回0
     willUpdateCd: 如果没有获取下一章的更新时间时返回0
     当isLimitByUpdate为1，且lastUpdateChapterId大于等于要阅读的章节ID时；或者isLimitByUpdate为0时，正常进入下一章节阅读。
    */
    public readConfigInfo: any = { isLimitByUpdate: 0, lastUpdateChapterId: 0, willUpdateMilliTime: 0, willUpdateCd: 0 };

    public init() {
        this.playerModel = new PlayerModel();
        if (Config.DEBUG) {
            this.playerModel.currChapter = Config.CURR_CHAPTER;
            this.playerModel.currStage = Config.CURR_STAGE;
            this.playerModel.currOperId = Config.CURR_OPER_ID;
            this.readConfigInfo = { isLimitByUpdate: 0, lastUpdateChapterId: 0, willUpdateMilliTime: 0, willUpdateCd: 0 };
        } else {
            this.getPlayerInfo();
            this.getReadConfig();
        }
    }

    /** 获取玩家信息 */
    public getPlayerInfo() {
        if (Config.DEBUG) return;

        getUserInfo((data) => {
            console.log("in getPlayerInfo callback");
            console.log(data);
            this.playerModel.code = data.code;
            if (data.code == 0) {
                this.playerModel.avatar = data.avatar;
                this.playerModel.id = data.id;
                this.playerModel.loginType = data.loginType;
                this.playerModel.nickName = data.nickName;
                this.playerModel.sex = data.sex;
                this.playerModel.uin = data.uin;
                this.playerModel.user = data.user;

                // 获取
                this._loadAllChapterData();
                this._loadCurrChapterData();
                this._loadClothData();
                this._loadLoveData();
                this._loadEggData();
                this._loadSelectData();
                this._loadTalkReplayData();

                // this.getGoodsValues();
            }
        });
    }

    /** 删除玩家信息 */
    public delPlayerInfo() {
        if (Config.DEBUG) return;

        this.deleteHistory(SLOT_ID_LIST);
        this.deleteHistory(SLOT_ID_CURR);
        this.deleteHistory(SLOT_ID_CLOTH);
        this.deleteHistory(SLOT_ID_LOVE);
        this.deleteHistory(SLOT_ID_EGG);
        this.deleteHistory(SLOT_ID_SELECT);
        this.deleteHistory(SLOT_ID_REPLAY);
    }

    /** 获取所有章节列表数据 */
    private _loadAllChapterData() {
        getBookHistory(BOOKID, SLOT_ID_LIST, (data) => {
            console.log("in loadAllChapterData callback");
            console.log(data);
            if (data.code == 0) {
                this.playerModel.chapterList = JSON.parse(data.data.content);
            }
        });
    }

    /** 获取当前章节列表数据 */
    private _loadCurrChapterData() {
        getBookHistory(BOOKID, SLOT_ID_CURR, (data) => {
            console.log("in loadCurrChapterData callback");
            console.log(data);
            if (data.code == 0) {
                let contentObj = JSON.parse(data.data.content);
                this.playerModel.currChapter = contentObj.chapterId;
                this.playerModel.currStage = contentObj.stageId;
                this.playerModel.currOperId = contentObj.operateId;
                this.playerModel.currBgm = contentObj.bgm;
            }
        });
    }

    /** 获取衣服数据 */
    private _loadClothData() {
        getBookHistory(BOOKID, SLOT_ID_CLOTH, (data) => {
            console.log("in loadClothData callback");
            console.log(data);
            if (data.code == 0) {
                let contentObj = JSON.parse(data.data.content);
                this.playerModel.currClothId = contentObj.clothId;
                this.playerModel.clothList = contentObj.clothList;
            }
        });
    }

    /** 获取好感度数据 */
    private _loadLoveData() {
        getBookHistory(BOOKID, SLOT_ID_LOVE, (data) => {
            console.log("in loadLoveData callback");
            console.log(data);
            if (data.code == 0) {
                this.playerModel.loveValueList = JSON.parse(data.data.content);
            }
        });
    }

    /** 获取彩蛋数据 */
    private _loadEggData() {
        getBookHistory(BOOKID, SLOT_ID_EGG, (data) => {
            console.log("in loadEggData callback");
            console.log(data);
            if (data.code == 0) {
                this.playerModel.egg = JSON.parse(data.data.content);
            }
        });
    }

    /** 获取购买分支数据 */
    private _loadSelectData() {
        getBookHistory(BOOKID, SLOT_ID_SELECT, (data) => {
            console.log("in loadSelectData callback");
            console.log(data);
            if (data.code == 0) {
                this.playerModel.selectList = JSON.parse(data.data.content);
            }
        });
    }

    /** 获取对话回放数据 */
    private _loadTalkReplayData() {
        getBookHistory(BOOKID, SLOT_ID_REPLAY, (data) => {
            console.log("in loadTalkReplayData callback");
            console.log(data);
            if (data.code == 0) {
                this.playerModel.chapterTalkList = JSON.parse(data.data.content);
            }
        });
    }

    /** 存档章节列表 */
    private _saveChapterList() {
        let title = "第" + this.playerModel.currChapter + "章-第" + this.playerModel.currStage + "节-" + this.playerModel.currOperId;
        saveBookHistory(BOOKID, SLOT_ID_LIST, SLOT_ID_LIST, title, JSON.stringify(this.playerModel.chapterList), (data) => {
            console.log("in saveChapterList callback");
            console.log(data);
        });
    }

    /** 存档对话回放数据 */
    private _saveTalkReplayData() {
        let title = "第" + this.playerModel.currChapter + "章-第" + this.playerModel.currStage + "节-" + this.playerModel.currOperId;
        saveBookHistory(BOOKID, SLOT_ID_REPLAY, SLOT_ID_REPLAY, title, JSON.stringify(this.playerModel.chapterTalkList), (data) => {
            console.log("in saveTalkReplayData callback");
            console.log(data);
        });
    }

    /** 存档当前进度 */
    public saveChapterCurr() {
        if (Config.DEBUG) return;

        let title = "第" + this.playerModel.currChapter + "章-第" + this.playerModel.currStage + "节-" + this.playerModel.currOperId;
        let externParam = {
            chapterId: this.playerModel.currChapter,
            stageId: this.playerModel.currStage,
            operateId: this.playerModel.currOperId,
            bgm: this.playerModel.currBgm,
        };
        saveBookHistory(BOOKID, SLOT_ID_CURR, SLOT_ID_CURR, title, JSON.stringify(externParam), (data) => {
            console.log("in saveHistoryCurr callback");
            console.log(data);
            this._saveChapterList();
            this._saveTalkReplayData();
        });
    }

    /** 存档衣服皮肤 */
    public saveClothCurr() {
        if (Config.DEBUG) return;

        let title = "购买衣服-" + this.playerModel.currClothId;
        let externParam = { clothId: this.playerModel.currClothId, clothList: this.playerModel.clothList };
        saveBookHistory(BOOKID, SLOT_ID_CLOTH, SLOT_ID_CLOTH, title, JSON.stringify(externParam), (data) => {
            console.log("in saveClothCurr callback");
            console.log(data);
        });
    }

    /** 存档好感度 */
    public saveLoveValue(name: string, value: number) {
        if (Config.DEBUG) return;

        let title = "对[" + name + "]增加好感值+" + value;
        saveBookHistory(BOOKID, SLOT_ID_LOVE, SLOT_ID_LOVE, title, JSON.stringify(this.playerModel.loveValueList), (data) => {
            console.log("in saveLoveValue callback");
            console.log(data);
        });
    }

    /** 存档彩蛋 */
    public saveEgg(egg: string) {
        if (Config.DEBUG) return;

        let title = "追加彩蛋-" + egg;
        saveBookHistory(BOOKID, SLOT_ID_EGG, SLOT_ID_EGG, title, JSON.stringify(this.playerModel.egg), (data) => {
            console.log("in saveEgg callback");
            console.log(data);
        });
    }

    /** 存档购买的分支 */
    public saveBranch(branchId: number) {
        if (Config.DEBUG) return;

        let title = "购买分支-" + branchId;
        saveBookHistory(BOOKID, SLOT_ID_SELECT, SLOT_ID_SELECT, title, JSON.stringify(this.playerModel.selectList), (data) => {
            console.log("in saveEgg callback");
            console.log(data);
        });
    }

    /** 获取存档列表信息 */
    public loadHistoryList() {
        if (Config.DEBUG) return;

        getBookHistoryList(BOOKID, (data) => {
            console.log("in loadHistoryList callback");
            console.log(data);
        });
    }

    /** 读取最近存档信息 */
    public loadHistoryLast() {
        if (Config.DEBUG) return;

        getBookLastHistory(BOOKID, (data) => {
            console.log("in loadHistoryLast callback");
            console.log(data);
        });
    }

    /** 删除指定存档 */
    public deleteHistory(slotId: number) {
        if (Config.DEBUG) return;

        deleteBookHistory(BOOKID, slotId, (data) => {
            console.log("in deleteHistory callback");
            console.log(data);
        });
    }

    /** 获取商业化数值 */
    public getGoodsValues() {
        if (Config.DEBUG) return;

        getBookValues(BOOKID, 0, (data) => {
            console.log("in getGoodsValues callback");
            console.log(data);
        });
    }

    /** 消费物品 */
    public consumeGoods() {
        if (Config.DEBUG) return;

        // takeOffBookValue(BOOKID, "100002", GLOBAL_CURRENT_SLOT_ID, 1, (data) => {
        // });
    }

    /** 购买物品 */
    public purchaseGoods(goodsId, callbackFun) {
        if (Config.DEBUG) return;

        buyGoods(BOOKID, goodsId.toString(), 1, 0, (data) => {
            console.log("buy goods success, goodsId = " + goodsId);
            console.log(data);
            if (data.code == 0) {
                callbackFun(true);
            }
        });
    }

    /** 获取阅读配置信息 */
    public getReadConfig() {
        if (Config.DEBUG) return;

        getReadConfigInfo(BOOKID, (data) => {
            console.log("in getReadConfigInfo callback");
            console.log(data);
            if (data.code == 0) {
                this.readConfigInfo = data.data;
            }
        });
    }

    /** 上报章节打开 */
    public reportChapterOpen(chapterId: number) {
        if (Config.DEBUG) return;

        let params = {
            "bookId": BOOKID,
            "cmd": "addReadChapterInfo",
            "chapterId": chapterId,
            "readState": 1   // 1表示打开章节，2表示章节阅读完成
        }
        sendRequest(params, (data) => {
            console.log("in reportChapterOpen callback");
            console.log(data);
        });
    }

    /** 上报章节阅读完成 */
    public reportChapterFinish(chapterId: number) {
        if (Config.DEBUG) return;

        let params = {
            "bookId": BOOKID,
            "cmd": "addReadChapterInfo",
            "chapterId": chapterId,
            "readState": 2   // 1表示打开章节，2表示章节阅读完成
        }
        sendRequest(params, (data) => {
            console.log("in reportChapterFinish callback");
            console.log(data);
        });
    }

    /** 上报章节选项 */
    public reportSelectEvent(_isBuy: boolean, _selectId: number, _branchId: number) {
        if (Config.DEBUG) return;

        let params = {
            chapterId: this.playerModel.currChapterID,
            isBuy: _isBuy,
            selectId: _selectId,
            branchId: _branchId,
        }

        report(BOOKID, "BranchSelect", JSON.stringify(params), (data) => {
            console.log("in reportSelectEvent self callback");
            console.log(data);
        })

        // reportBusinessEvent(BOOKID, this.playerModel.currChapterID, optionId, (data) => {
        //     console.log("in reportSelectEvent business callback");
        //     console.log(data);
        // });
    }
}