import BaseView from "../../../Core/BaseView"
import GameMgr from "../../../GameMgr"
import CfgMgr from "../../Config/CfgMgr"
import UIConfig from "../../../UIConfig"

/**
 * @name SoliloquyView.ts
 * @description 独白界面
 * @author Created by jun on 2020.4.4
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class SoliloquyView extends BaseView {

    /** 声音图标 */
    @property(cc.Sprite)
    sprSoundIcon: cc.Sprite = null;

    /** 独白 */
    @property(cc.Label)
    txtDialogue: cc.Label = null;

    /** 提示 */
    @property(cc.Sprite)
    sprAsideTip: cc.Sprite = null;

    private _canNext: boolean = false;
    private _end: boolean = false;
    private _currId: number = 0;

    onLoad() {
        GameMgr.soliloquyCtr.view = this;
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickNext.bind(this))
    }

    start() {
        this._showSoliloquy(GameMgr.soliloquyCtr.soliloquyId);
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
        GameMgr.soliloquyCtr.view = null;
    }

    onClickNext(event: any) {
        event.stopPropagation();
        if (this._canNext) {
            if (this._end) {
                this._audioMgr.stopSound();
                // 切换分支
                this._uiMgr.closeUI(UIConfig.UISoliloquyPanel);
                GameMgr.storyCtr.doingNextOperate();
            } else {
                this._showContent();
            }
        }
    }

    private _showSoliloquy(soliloquyId: number) {
        this._currId = soliloquyId;
        this._canNext = false;
        this._end = false;
        this.txtDialogue.string = "";
        this._showContent();
    }

    private _showContent() {
        this.unscheduleAllCallbacks();
        this.txtDialogue.string = "";
        let soliloquyObj = CfgMgr.CfgSoliloquy.soliloquy[this._currId];
        if (soliloquyObj.sound != "") {
            this._audioMgr.stopSound();
            this._audioMgr.playSound(UIConfig.UISoliloquyPanel.AB, soliloquyObj.sound);
        }

        let content = soliloquyObj.txt;
        this.sprAsideTip.node.active = false;
        this.sprSoundIcon.node.active = true;

        if (soliloquyObj.nxId > 0) {
            this._currId = soliloquyObj.nxId;
        } else {
            this._end = true;
        }

        let i = 0;
        this.schedule(() => {
            this.txtDialogue.string += content[i];
            i++;
            if (i >= content.length) {
                this._canNext = true;
                this.sprAsideTip.node.active = true;
                this.sprSoundIcon.node.active = false;
                if (soliloquyObj.nxId <= 0) {
                    this._end = true;
                }
            }
        }, 0.05, content.length - 1, 0);
    }
}