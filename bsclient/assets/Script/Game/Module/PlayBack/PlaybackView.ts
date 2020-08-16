import BaseView from "../../../Core/BaseView"
import UIConfig from "../../../UIConfig"
import CfgMgr from "../../Config/CfgMgr"
import GameMgr from "../../../GameMgr"

/**
 * @name PlaybackView.ts
 * @description 回放对话界面
 * @author Created by jun on 2020.2.29
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlaybackView extends BaseView {

    /** 背景 */
    @property(cc.Sprite)
    sprBg: cc.Sprite = null;

    /** 对话 */
    @property(cc.ScrollView)
    scrollViewTalk: cc.ScrollView = null;

    /** 对话 */
    @property(cc.Label)
    txtTalk: cc.Label = null;

    /** 返回按钮 */
    @property(cc.Button)
    btnReturn: cc.Button = null;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickNext.bind(this))
    }

    start() {
        this.txtTalk.string = "";
        this.btnReturn.node.active = false;
        this.scheduleOnce(() => {
            this.showContent();
            this.btnReturn.node.active = true;
        }, 0.5)
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
        this.sprBg.spriteFrame = null;
    }

    onClickNext(event: any) {
        event.stopPropagation();
    }

    onClickReturn(event, data) {
        event.stopPropagation();
        this._audioMgr.defaultSound();
        
        // 恢复
        this._uiMgr.closeUI(UIConfig.UIPlaybackPanel);
        GameMgr.storyCtr.doStartStory(GameMgr.playerCtr.playerModel.currOperId);
    }

    scrollCallback(scrollview, eventType, customEventData) {
        // 这里 scrollview 是一个 Scrollview 组件对象实例
        // 这里的 eventType === cc.ScrollView.EventType enum 里面的值
        // 这里的 customEventData 参数就等于你之前设置的 "foobar"
    }

    showContent() {
        let chapterObj = GameMgr.playerCtr.playerModel.getCurrChapterCfg()
        let talkList: [] = GameMgr.playerCtr.playerModel.getCurrChapterTalk();

        let row: number = 0;
        talkList.forEach(element => {
            let operObj = chapterObj.chapters[element];
            let content = "";
            if (operObj) {
                content = operObj.txt.replace("\n", "");
                content = content.replace("[", "");
                content = content.replace("]", ": ");
            } else {
                let msgObj = CfgMgr.CfgMessage.msgs[element];
                content = msgObj.txt.replace("\n", "");
                content = content.replace("（", "");
                content = content.replace("）", ": ");
            }

            if (content.length > 20) {
                ++row;
            }
            this.txtTalk.string += content + "\n\n";
        });

        let height: number = this.txtTalk.node.height * talkList.length * 2 + this.txtTalk.node.height * row;
        this.scrollViewTalk.content.setContentSize(this.scrollViewTalk.content.width, height);
        this.scrollViewTalk.scrollToBottom(0.8);
    }
}