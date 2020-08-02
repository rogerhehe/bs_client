import BaseController from "../../../Core/BaseController";
import GameMgr from "../../../GameMgr"
import StoryView from "./StoryView"

/**
 * @name StoryCtr.ts
 * @description 剧情相关逻辑管理
 * @author Created by jun on 2019.10.28
 */

export default class StoryCtr extends BaseController {
    private static _instance: StoryCtr;

    private constructor() {
        super();
    }

    public static getInstance(): StoryCtr {
        if (!StoryCtr._instance) {
            StoryCtr._instance = new StoryCtr();
        }
        return StoryCtr._instance;
    }

    public view: StoryView = null;

    public init() {
        
    }

    public setView(view: StoryView) {
        this.view = view;
    }

    public doAuto(data: any) {
        if (data.pause) {
            // 暂停操作
            cc.tween(this.view.node).stop();
            this.view.canClick = false;
            this.view.isAuto = false;
        } else if (data.speed) {
            // 加速自动操作
            if (GameMgr.mainCtr.speed == 3) {
                this.view.speed = 0.25;
            } else if (GameMgr.mainCtr.speed == 2) {
                this.view.speed = 0.55;
            } else {
                this.view.speed = 1.25;
            }
            this.view.isAuto = true;
            // (<MainView>GameMgr.mainCtr.viewComp).setAuto(true);
            this.doNext();
        }
    }

    public doStory(data: any) {
        console.log("story event = ", data);
        this.view.canClick = true;
        // GameMgr.audioMgr.playMusic("audios/" + this._currBgm);
        if (data.start > 0) {
            // 开始
            if (this.view.currOperId == data.start) {
                this.view.doingNext(null);
                return;
            }
            this.view.nextOperId = Number(data.start);
        } else if (data.cloth) {
            // 换装
            this.view.createNewMask(true);
            // 存档
            if (data.branch > 0) {
                this.view.nextOperId = Number(data.branch);
                GameMgr.playerCtr.playerModel.currOperId = this.view.nextOperId;
                GameMgr.playerCtr.saveChapterCurr();
            }
        } else if (data.phone && data.branch) {
            // 电话
            this.view.createNewMask(true);
            if (data.branch > 0) {
                this.view.nextOperId = Number(data.branch);
            }
        } else if (data.select && data.branch && data.branch > 0) {
            // 选择
            // GameMgr.mainCtr.viewComp.node.active = true;
            this.view.nextOperId = Number(data.branch);
        } else if (data.donext) {
            // 独白
        } else {
            GameMgr.popupCtr.openPopupMask("故事事件错误=" + data);
            return;
        }
        this.view.doingNext(null);
    }

    public doNext() {
        // 是否自动执行下一次操作
        if (this.view.isAuto) {
            this.view.canClick = true;
            cc.tween(this.view.node)
                .delay(this.view.speed)
                .call(() => {
                    if (this.view.checkEnd()) return;
                    let currOperObj = GameMgr.playerCtr.playerModel.getCurrChapterCfg().chapters[this.view.currOperId];
                    if (currOperObj && currOperObj.doing != 4) {
                        this.doNext();
                    }
                })
                .start()
        } else {
            cc.tween(this.view.node)
                .delay(0.5)
                .call(() => { this.view.canClick = true; })
                .start()
        }
    }

    public doMove(data: any) {
        if (data.left) {
            cc.tween(this.view.sprBg.node)
                .to(1, { position: cc.v3(this.view.sprBg.node.x - 40, this.view.sprBg.node.y) }, { easing: 'sineOut' })
                .start()
        } else if (data.right) {
            cc.tween(this.view.sprBg.node)
                .to(1, { position: cc.v3(this.view.sprBg.node.x + 40, this.view.sprBg.node.y) }, { easing: 'sineOut' })
                .start()
        }
    }
}
