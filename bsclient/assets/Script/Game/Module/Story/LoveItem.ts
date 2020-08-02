import GameMgr from "../../../GameMgr";
import CfgMgr from "../../cfg/CfgMgr";

/**
 * @name LoveItem.ts
 * @description 好感度组件
 * @author Created by jun on 2019.10.28
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoveItem extends cc.Component {

    /** 提示图标 */
    @property(cc.Sprite)
    sprIcon: cc.Sprite = null;

    /** 提示内容 */
    @property(cc.Label)
    txtContent: cc.Label = null;

    onLoad() {

    }

    start() {

    }

    onDestroy() {

    }

    showLove(loveId: number) {
        let loveObj = CfgMgr.CfgLove.loves[loveId];
        let atlasUrl = GameMgr.cfg.resUiCommon;

        // 加好感度
        if (loveObj.role == "gu") {
            GameMgr.playerCtr.playerModel.addLoveGuValue(loveObj.value);
        } else if (loveObj.role == "cheng") {
            GameMgr.playerCtr.playerModel.addLoveChengValue(loveObj.value);
        } else if (loveObj.role == "bo") {
            GameMgr.playerCtr.playerModel.addLoveBoValue(loveObj.value);
        }
        // 存档
        GameMgr.playerCtr.saveLoveValue(loveObj.role, loveObj.value);

        // 显示桃心
        this.txtContent.string = loveObj.txt;
        this.sprIcon.spriteFrame = GameMgr.resCache.getSpriteFrame(atlasUrl, loveObj.icon);

        cc.tween(this.node)
            .to(2.5, { position: cc.v2(this.node.x, this.node.y + 700), opacity: 0 }, { easing: 'sineOut' })
            .call(() => {
                this.node.destroy();
            })
            .start()

        GameMgr.storyCtr.doNext();
    }
}
