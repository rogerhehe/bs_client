import GameMgr from "../../../GameMgr";
import CfgMgr from "../../Config/CfgMgr";
import Config from "../../../Config"

/**
 * @name PlayerModel.ts
 * @description 玩家数据
 * @author Created by jun on 2018.4.22
 */

export default class PlayerModel {
    /** 0登录成功 */
    public code: number = -1;
    /** 用户头像url */
    public avatar: string = "";
    /** 用户在平台上的唯一编号，一般情况下可通过此id查询到对应的用户信息 */
    public id: string = "";
    /** 登录类型，微信，QQ */
    public loginType: string = "";
    /** 用户昵称 */
    public nickName: string = "";
    /** 1表示男性；2表示女性；0表示其它，例如保密、不公开等情况 */
    public sex: number = -1;
    /** uin */
    public uin: string = "";
    /** user */
    public user: string = "";

    /** 章节列表数据, 1-程 2-顾 3-博 */
    public chapterList = {
        1: { stage: { 1: { operateId: 0, playCount: 0, unlock: 1 } } },
        2: { stage: { 1: { operateId: 0, playCount: 0, unlock: 0 } } },
        3: { stage: { 1: { operateId: 0, playCount: 0, unlock: 0 } } },
        4: { stage: { 1: { operateId: 0, playCount: 0, unlock: 0 }, 2: { operateId: 0, playCount: 0, unlock: 0 }, 3: { operateId: 0, playCount: 0, unlock: 0 } } },
        5: { stage: { 1: { operateId: 0, playCount: 0, unlock: 0 }, 2: { operateId: 0, playCount: 0, unlock: 0 }, 3: { operateId: 0, playCount: 0, unlock: 0 } } },
        6: { stage: { 1: { operateId: 0, playCount: 0, unlock: 0 }, 2: { operateId: 0, playCount: 0, unlock: 0 }, 3: { operateId: 0, playCount: 0, unlock: 0 } } },
    };

    /** 当前章节ID */
    public currChapterID(): number {
        return 100 * this._currChapter + this._currStage;
    }

    /** 当前章节 */
    private _currChapter: number = 1;
    /** 当前章节 */
    set currChapter(value: number) {
        this._currChapter = value;
    }
    get currChapter(): number {
        return this._currChapter;
    }

    /** 当前章节阶段 */
    private _currStage: number = 1;
    /** 当前章节阶段 */
    set currStage(value: number) {
        this._currStage = value;
    }
    get currStage(): number {
        return this._currStage;
    }

    /** 当前操作ID */
    private _currOperId: number = 0;
    /** 当前操作ID */
    set currOperId(value: number) {
        this._currOperId = value;
        if (this._currChapter <= 0 || this._currStage <= 0) {
            return;
        }
        this.chapterList[this._currChapter].stage[this._currStage].operateId = value;
    }
    get currOperId(): number {
        return this._currOperId;
    }

    /** 当前背景音乐 */
    private _currBgm: string = "";
    /** 当前背景音乐 */
    set currBgm(value: string) {
        this._currBgm = value;
    }
    get currBgm(): string {
        return this._currBgm;
    }

    /** 购买衣服列表 */
    public clothList = [];

    /** 当前衣服ID */
    private _currClothId: number = 1;
    /** 当前衣服ID */
    set currClothId(value: number) {
        this._currClothId = value;
        let clothObj = CfgMgr.CfgCloth.cloths[this._currClothId];
        this._currSkin = clothObj.skin;
    }
    get currClothId(): number {
        return this._currClothId;
    }

    /** 当前选择皮肤 */
    private _currSkin: string = "t1";
    /** 当前选择皮肤 */
    get currSkin(): string {
        return this._currSkin;
    }

    /** 每章节好感度数据 */
    public loveValueList = {
        1: { stage: { 1: { gu: 0, cheng: 0, bo: 0 } } },
        2: { stage: { 1: { gu: 0, cheng: 0, bo: 0 } } },
        3: { stage: { 1: { gu: 0, cheng: 0, bo: 0 } } },
        4: { stage: { 1: { gu: 0, cheng: 0, bo: 0 }, 2: { gu: 0, cheng: 0, bo: 0 }, 3: { gu: 0, cheng: 0, bo: 0 } } },
        5: { stage: { 1: { gu: 0, cheng: 0, bo: 0 }, 2: { gu: 0, cheng: 0, bo: 0 }, 3: { gu: 0, cheng: 0, bo: 0 } } },
        6: { stage: { 1: { gu: 0, cheng: 0, bo: 0 }, 2: { gu: 0, cheng: 0, bo: 0 }, 3: { gu: 0, cheng: 0, bo: 0 } } },
    };


    /** 对顾累计好感度增加 */
    public addLoveGuValue(value: number) {
        this.loveValueList[this._currChapter].stage[this._currStage].gu += value;
        if (Config.DEBUG) {
            console.log(this.loveValueList);
        }
    }
    /** 获取对顾累计好感度 */
    public getLoveGuValue(): number {
        let loveGuValue = 0;
        for (let index = 1; index <= 6; ++index) {
            loveGuValue += this.loveValueList[index].stage[1].gu
            if (index > 3) {
                loveGuValue += this.loveValueList[index].stage[2].gu
                loveGuValue += this.loveValueList[index].stage[3].gu
            }
        }
        return loveGuValue;
    }

    /** 对程累计好感度增加 */
    public addLoveChengValue(value: number) {
        this.loveValueList[this._currChapter].stage[this._currStage].cheng += value;
        if (Config.DEBUG) {
            console.log(this.loveValueList);
        }
    }
    /** 获取对程累计好感度 */
    public getLoveChengValue(): number {
        let loveChengValue = 0;
        for (let index = 1; index <= 6; ++index) {
            loveChengValue += this.loveValueList[index].stage[1].cheng
            if (index > 3) {
                loveChengValue += this.loveValueList[index].stage[2].cheng
                loveChengValue += this.loveValueList[index].stage[3].cheng
            }
        }
        return loveChengValue;
    }

    /** 对博累计好感度增加 */
    public addLoveBoValue(value: number) {
        this.loveValueList[this._currChapter].stage[this._currStage].bo += value;
        if (Config.DEBUG) {
            console.log(this.loveValueList);
        }
    }

    /** 获取对博累计好感度 */
    public getLoveBoValue(): number {
        let loveBoValue = 0;
        for (let index = 1; index <= 6; ++index) {
            loveBoValue += this.loveValueList[index].stage[1].bo
            if (index > 3) {
                loveBoValue += this.loveValueList[index].stage[2].bo
                loveBoValue += this.loveValueList[index].stage[3].bo
            }
        }
        return loveBoValue;
    }

    /** 彩蛋 */
    private _egg: number[] = [];
    /** 彩蛋 */
    set egg(value: number[]) {
        this._egg = value;
    }
    get egg(): number[] {
        return this._egg;
    }

    /** 购买选项列表 */
    public selectList = [];

    /** 当前章节资源AB配置 */
    public getCurrChapterAB(): any {
        if (this._currChapter < 4) {
            return "chapter" + this._currChapter.toString();
        } else {
            return "chapter" + this._currChapter.toString() + "_" + this._currStage.toString();
        }
    }

    /** 当前章节配置文件 */
    public getCurrChapterCfg(): any {
        if (this._currChapter < 4) {
            return CfgMgr.Chapter[this._currChapter.toString()];
        } else {
            return CfgMgr.Chapter[this._currChapter.toString() + "_" + this._currStage.toString()];
        }
    }

    /** 当前操作配置 */
    public getCurrOperCfg(): any {
        return this.getCurrChapterCfg().chapters[this._currOperId];
    }

    /** 结束插图列表 */
    public endChatuList = []

    /** 完结 */
    public endChapter(itemId: number) {
        // 随机结束插图
        this.endChatuList = this.getCurrChapterCfg().endChatuList;

        // 增加本章通关次数
        this.chapterList[this._currChapter].stage[this._currStage].operateId = 0;
        this.chapterList[this._currChapter].stage[this._currStage].playCount += 1;

        // 结束本章
        if (this._currChapter == 1) {
            this._endChapter1();
        } else if (this._currChapter == 2) {
            this._endChapter2();
        } else if (this._currChapter == 3) {
            this._endChapter3(itemId);
        } else if (this._currChapter == 4) {
            this._endChapter4();
        } else if (this._currChapter == 5) {
            this._endChapter5();
        } else if (this._currChapter == 6) {
            this._endChapter6();
        }

        // 开启下一章
        if (this._currChapter > 0 && this._currStage > 0 && this._currOperId > 0) {
            this.chapterList[this._currChapter].stage[this._currStage].unlock = 1;
            this.chapterList[this._currChapter].stage[this._currStage].operateId = this._currOperId;
        }

        // 存档
        if (Config.DEBUG) {
            console.log(this.chapterList);
        } else {
            GameMgr.playerCtr.saveChapterCurr();
        }
    }

    private _endChapter1() {
        // 初始下一章
        this._currChapter = 2;
        this._currStage = 1;
        this._currOperId = 200001;
        GameMgr.playerCtr.reportChapterOpen(101);
    }

    private _endChapter2() {
        // 初始下一章
        this._currChapter = 3;
        this._currStage = 1;
        this._currOperId = 300001;
        GameMgr.playerCtr.reportChapterFinish(201);
        GameMgr.playerCtr.reportChapterOpen(301);
    }

    private _endChapter3(itemId: number) {
        GameMgr.playerCtr.reportChapterFinish(301);
        // 初始下一章
        this._currChapter = 4;
        // 初始下一节
        this._currStage = itemId;
        // 1-程 2-顾 3-博
        if (itemId == 1) {
            this._currOperId = 410001;
            GameMgr.playerCtr.reportChapterOpen(401);
        } else if (itemId == 2) {
            this._currOperId = 420001;
            GameMgr.playerCtr.reportChapterOpen(402);
        } else if (itemId == 3) {
            this._currOperId = 430001;
            GameMgr.playerCtr.reportChapterOpen(403);
        } else {
            GameMgr.popupCtr.openPopupMask("章节数据异常");
        }
    }

    private _endChapter4() {
        if (this._currStage == 1) {
            // 初始下一章
            this._currChapter = 5;
            this._currOperId = 510001;
            GameMgr.playerCtr.reportChapterFinish(401);
            GameMgr.playerCtr.reportChapterOpen(501);
        } else if (this._currStage == 2) {
            // 初始下一章
            this._currChapter = 5;
            this._currOperId = 520001;
            GameMgr.playerCtr.reportChapterFinish(402);
            GameMgr.playerCtr.reportChapterOpen(502);
        } else if (this._currStage == 3) {
            // 初始下一章
            this._currChapter = 5;
            this._currOperId = 530001;
            GameMgr.playerCtr.reportChapterFinish(403);
            GameMgr.playerCtr.reportChapterOpen(503);
        } else {
            GameMgr.popupCtr.openPopupMask("章节数据异常");
        }
    }

    private _endChapter5() {
        if (this._currStage == 1) {
            // 初始下一章
            this._currChapter = 6;
            this._currOperId = 610001;
            GameMgr.playerCtr.reportChapterFinish(501);
            GameMgr.playerCtr.reportChapterOpen(601);
        } else if (this._currStage == 2) {
            // 初始下一章
            this._currChapter = 6;
            this._currOperId = 620001;
            GameMgr.playerCtr.reportChapterFinish(502);
            GameMgr.playerCtr.reportChapterOpen(602);
        } else if (this._currStage == 3) {
            // 初始下一章
            this._currChapter = 6;
            this._currOperId = 630001;
            GameMgr.playerCtr.reportChapterFinish(503);
            GameMgr.playerCtr.reportChapterOpen(603);
        } else {
            GameMgr.popupCtr.openPopupMask("章节数据异常");
        }
    }

    private _endChapter6() {
        if (this._currStage == 1) {
            GameMgr.playerCtr.reportChapterFinish(601);
        } else if (this._currStage == 2) {
            GameMgr.playerCtr.reportChapterFinish(602);
        } else if (this._currStage == 3) {
            GameMgr.playerCtr.reportChapterFinish(603);
        } else {
            GameMgr.popupCtr.openPopupMask("章节数据异常");
        }
        // 初始下一章
        this._currChapter = -1;
        this._currStage = -1;
        this._currOperId = -1;
    }

    /** 重置角色 */
    public resetRole(stageId: number) {
        if (stageId == 1) {
            this._resetData(4, 2);
            this._resetData(4, 3);
        } else if (stageId == 2) {
            this._resetData(4, 1);
            this._resetData(4, 3);
        } else if (stageId == 3) {
            this._resetData(4, 1);
            this._resetData(4, 2);
        }
        this.replayChapter(4, stageId);
    }

    /** 重玩章节 */
    public replayChapter(chapterId: number, stageId: number) {
        this._currChapter = chapterId;
        this._currStage = stageId;
        if (chapterId < 4) {
            if (chapterId == 1) {
                this._currOperId = 100545;
                this._resetData(1, 1);
                this.chapterList[1].stage[1].unlock = 1;
            } else if (chapterId == 2) {
                this._currOperId = 200001;
                this._resetData(2, 1);
                this.chapterList[2].stage[1].unlock = 1;
            } else if (chapterId == 3) {
                this._currOperId = 300001;
                this._resetData(3, 1);
                this.chapterList[3].stage[1].unlock = 1;
            }
        } else if (chapterId == 4) {
            if (stageId == 1) {
                this._currOperId = 410001;
                this._resetData(4, 1);
                this.chapterList[4].stage[1].unlock = 1;
            } else if (stageId == 2) {
                this._currOperId = 420001;
                this._resetData(4, 2);
                this.chapterList[4].stage[2].unlock = 1;
            } else if (stageId == 3) {
                this._currOperId = 430001;
                this._resetData(4, 3);
                this.chapterList[4].stage[3].unlock = 1;
            }
        } else if (chapterId == 5) {
            if (stageId == 1) {
                this._currOperId = 510001;
                this._resetData(5, 1);
                this.chapterList[5].stage[1].unlock = 1;
            } else if (stageId == 2) {
                this._currOperId = 520001;
                this._resetData(5, 2);
                this.chapterList[5].stage[2].unlock = 1;
            } else if (stageId == 3) {
                this._currOperId = 530001;
                this._resetData(5, 3);
                this.chapterList[5].stage[3].unlock = 1;
            }
        } else if (chapterId == 6) {
            if (stageId == 1) {
                this._currOperId = 610001;
                this._resetData(6, 1);
                this.chapterList[6].stage[1].unlock = 1;
            } else if (stageId == 2) {
                this._currOperId = 620001;
                this._resetData(6, 2);
                this.chapterList[6].stage[2].unlock = 1;
            } else if (stageId == 3) {
                this._currOperId = 630001;
                this._resetData(6, 3);
                this.chapterList[6].stage[3].unlock = 1;
            }
        }

        // 存档
        this.chapterList[this._currChapter].stage[this._currStage].operateId = this._currOperId;
        if (Config.DEBUG) {
            console.log(this.chapterList);
            console.log(this.loveValueList);
        } else {
            GameMgr.playerCtr.saveChapterCurr();
        }
    }

    /** 重置数据 */
    private _resetData(chapter: number, stage: number) {
        for (let index = chapter; index <= 6; ++index) {
            if (stage <= 1) {
                this._resetStageData(index, 1);
            }
            if (index > 3) {
                if (stage <= 2) {
                    this._resetStageData(index, 2);
                }
                this._resetStageData(index, 3);
            }
        }
    }

    private _resetStageData(chapter: number, stage: number) {
        this.chapterList[chapter].stage[stage].operateId = 0;
        this.chapterList[chapter].stage[stage].unlock = 0;
        this.loveValueList[chapter].stage[stage].cheng = 0;
        this.loveValueList[chapter].stage[stage].gu = 0;
        this.loveValueList[chapter].stage[stage].bo = 0;
        this.chapterTalkList[chapter].stage[stage] = [];
    }

    /** 章节对话数据回放 */
    public chapterTalkList = {
        1: { stage: { 1: [] } },
        2: { stage: { 1: [] } },
        3: { stage: { 1: [] } },
        4: { stage: { 1: [], 2: [], 3: [] } },
        5: { stage: { 1: [], 2: [], 3: [] } },
        6: { stage: { 1: [], 2: [], 3: [] } },
    };

    public getCurrChapterTalk(): any {
        return this.chapterTalkList[this._currChapter].stage[this._currStage];
    }

    /** 添加对话数据回放 */
    public addTalkPlayerback(operId: number) {
        if (this.chapterTalkList[this._currChapter].stage[this._currStage].indexOf(operId) < 0) {
            this.chapterTalkList[this._currChapter].stage[this._currStage].push(operId);
        }
    }
}