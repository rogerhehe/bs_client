import GameMgr from "../../../GameMgr";
import ChapterItem from "./ChapterItem";

/**
 * @name ChapterView.ts
 * @description 章节界面
 * @author Created by jun on 2019.10.28
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class ChapterView extends cc.Component {

    @property(cc.ScrollView)
    scrollViewStage: cc.ScrollView = null;

    _chapterItems: ChapterItem[] = [];
    _loadedNum: number = 0;

    onLoad() {
        GameMgr.chapterCtr.viewComp = this;
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick.bind(this))
    }

    start() {
        GameMgr.roleBranchCtr.fromChapterView = false;
        this._loadedNum = 0;
        // 平台控制开启章数
        let openChapterCount: number = 6;
        let cfg = GameMgr.playerCtr.readConfigInfo;
        if (cfg.isLimitByUpdate > 0 && cfg.lastUpdateChapterId < 500) {
            openChapterCount = 4;
        } else {
            openChapterCount = 6;
        }
        cc.loader.loadRes(GameMgr.cfg.uiChapterItem.prefabUrl, (err, prefab) => {
            for (let index = 0, chapterId = 1; index < openChapterCount; index++, chapterId++) {
                let item: cc.Node = cc.instantiate(prefab);
                this.scrollViewStage.content.addChild(item);
                let height: number = item.getContentSize().height * chapterId + index * 10;
                this.scrollViewStage.content.setContentSize(item.getContentSize().width, height);
                item.setPosition(0, -index * (item.getContentSize().height + 10));
                let itemComp: ChapterItem = item.getComponent("ChapterItem");
                itemComp.setChapterId(chapterId, this);
                this._chapterItems.push(itemComp);
                this._loadedNum++;
                // 设置默认分支
                if (this._loadedNum >= openChapterCount) {
                    this._selectBranch();
                }
            }
        })
    }

    onClick(event: any) {
        event.stopPropagation();
    }

    scrollCallback(scrollview, eventType, customEventData) {
        // 这里 scrollview 是一个 Scrollview 组件对象实例
        // 这里的 eventType === cc.ScrollView.EventType enum 里面的值
        // 这里的 customEventData 参数就等于你之前设置的 "foobar"
    }

    syncBranch(itemId: number) {
        this._chapterItems.forEach(item => {
            if (item._chapterId > 3) {
                item.changeRole(itemId);
            }
        });
    }

    syncDisableClick() {
        this._chapterItems.forEach(item => {
            item.disableClick();
        });
    }

    _selectBranch() {
        // 1-程 2-顾 3-博，正在进行的 --> 已完成的 --> 未解锁的，都没有选程
        let itemId: number = 1;
        let chapterObj = GameMgr.playerCtr.playerModel.chapterList[4]; 
        if (chapterObj.stage[1].operateId > 0) {
            itemId = 1;
        } else if (chapterObj.stage[2].operateId > 0) {
            itemId = 2;
        } else if (chapterObj.stage[3].operateId > 0) {
            itemId = 3;
        } else if (chapterObj.stage[1].playCount > 0) {
            itemId = 1;
        } else if (chapterObj.stage[2].playCount > 0) {
            itemId = 2;
        } else if (chapterObj.stage[3].playCount > 0) {
            itemId = 3;
        }
        this.syncBranch(itemId);
    }
}
