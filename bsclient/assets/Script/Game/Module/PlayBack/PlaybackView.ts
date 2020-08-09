import GameMgr from "../../../GameMgr";
import CfgMgr from "../../cfg/CfgMgr";

/**
 * @name PlaybackView.ts
 * @description 回放对话界面
 * @author Created by jun on 2020.2.29
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlaybackView extends cc.Component {

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

    _bgUrl: string = "textures/ui/hf_bg";

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickNext.bind(this))
    }

    start() {
        this.txtTalk.string = "";
        this.btnReturn.node.active = false;
        cc.loader.loadRes(this._bgUrl, cc.SpriteFrame, (err, spriteFrame) => {
            this.sprBg.spriteFrame = spriteFrame;
            this.scheduleOnce(() => {
                this.showContent();
                this.btnReturn.node.active = true;
            }, 0.5)
        });
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
        this.sprBg.spriteFrame = null;
        GameMgr.releaseImage(this._bgUrl);
    }

    onClickNext(event: any) {
        event.stopPropagation();
    }

    onClickReturn(event, data) {
        event.stopPropagation();
        GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);
        // 恢复
        GameMgr.uiMgr.closeUI(GameMgr.cfg.uiPlaybackPanel);
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