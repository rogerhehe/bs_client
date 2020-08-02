import GameMgr from "../../../GameMgr";

/**
 * @name AsideView.ts
 * @description 地点介绍界面
 * @author Created by jun on 2020.3.27
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class AsideView extends cc.Component {

    /** 旁白内容 */
    @property(cc.Label)
    txtContent: cc.Label = null;

    onLoad() {
        GameMgr.asideCtr.viewComp = this;
    }

    start() {
        if (this.node["customParam"]) {
            let data = this.node["customParam"];
            this.showAside(data.txt, data.operId);
        } else {
            GameMgr.storyCtr.doStory({ "donext": true });
            GameMgr.uiMgr.closeUI(GameMgr.cfg.uiAsidePanel);
        }
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
        GameMgr.asideCtr.viewComp = null;
    }

    showAside(content: string, operId: number) {
        this.unscheduleAllCallbacks()
        this.txtContent.string = "";
        // 特殊处理 
        if (this.txtContent.fontSize != 45) {
            this.txtContent.fontSize = 45;
        }

        let i = 0;
        this.schedule(() => {
            this.txtContent.string += content[i];
            i++;
            if (i >= content.length) {
                // 特殊处理 
                if (operId == 300627 || operId == 300628 || operId == 300666) {
                    this.txtContent.fontSize = 48;
                }
            }
        }, 0.01, content.length - 1);

        this.scheduleOnce(() => {
            GameMgr.storyCtr.doNext();
        }, 0.5);
    }
}