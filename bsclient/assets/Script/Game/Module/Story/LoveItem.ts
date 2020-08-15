import BaseView from "../../../Core/BaseView"
import GameMgr from "../../../GameMgr"
import CfgMgr from "../../Config/CfgMgr"
import UIConfig from "../../../UIConfig"

/**
 * @name LoveItem.ts
 * @description 好感度组件
 * @author Created by jun on 2019.10.28
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoveItem extends BaseView {

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
        this.sprIcon.spriteFrame = this._resMgr.getSpriteFrame(UIConfig.UIStoryPanel.AB, loveObj.icon);

        cc.tween(this.node)
            .to(2.5, { position: cc.v3(this.node.x, this.node.y + 700), opacity: 0 }, { easing: 'sineOut' })
            .call(() => {
                this.node.destroy();
                this._resMgr.removeAsset(UIConfig.UIStoryPanel.AB, "prefab/LoveItem", cc.Prefab);
            })
            .start()

        GameMgr.storyCtr.doNext();
    }
}
