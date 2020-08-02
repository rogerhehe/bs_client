import GameMgr from "../../../GameMgr";
import CfgMgr from "../../cfg/CfgMgr";

/**
 * @name SoliloquyItem.ts
 * @description 独白界面
 * @author Created by jun on 2020.4.4
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class SoliloquyItem extends cc.Component {

    /** 背景 */
    @property(cc.Sprite)
    sprBg: cc.Sprite = null;

    /** 声音图标 */
    @property(cc.Sprite)
    sprSoundIcon: cc.Sprite = null;

    /** 独白 */
    @property(cc.Label)
    txtDialogue: cc.Label = null;

    /** 提示 */
    @property(cc.Sprite)
    sprAsideTip: cc.Sprite = null;

    _canNext: boolean = false;
    _end: boolean = false;
    _currId: number = 0;
    _bgUrl: string = "textures/ui/hf_bg";

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickNext.bind(this))
    }

    start() {
        if (this.node["customParam"]) {
            this._showSoliloquy(<number>this.node["customParam"]);
        } else {
            GameMgr.uiMgr.closeUI(GameMgr.cfg.uiSoliloquyPanel);
            GameMgr.storyCtr.doStory({ "donext": true });
        }
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
        this.sprBg.spriteFrame = null;
        GameMgr.releaseImage(this._bgUrl);
    }

    onClickNext(event: any) {
        event.stopPropagation();
        if (this._canNext) {
            if (this._end) {
                GameMgr.audioMgr.stopSound();
                // 切换分支
                GameMgr.uiMgr.closeUI(GameMgr.cfg.uiSoliloquyPanel);
                GameMgr.storyCtr.doStory({ "donext": true });
            } else {
                this._showContent();
            }
        }
    }

    _showSoliloquy(soliloquyId: number) {
        this._currId = soliloquyId;
        this._canNext = false;
        this._end = false;
        this.txtDialogue.string = "";

        cc.loader.loadRes(this._bgUrl, cc.SpriteFrame, (err, spriteFrame) => {
            this.sprBg.spriteFrame = spriteFrame;
            this._showContent();
        });
    }

    _showContent() {
        this.unscheduleAllCallbacks();
        this.txtDialogue.string = "";
        let soliloquyObj = CfgMgr.CfgSoliloquy.soliloquy[this._currId];
        if (soliloquyObj.sound != "") {
            GameMgr.audioMgr.stopSound();
            GameMgr.audioMgr.playSound("audios/" + soliloquyObj.sound);
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