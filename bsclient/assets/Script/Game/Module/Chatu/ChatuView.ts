import GameMgr from "../../../GameMgr";
import CfgMgr from "../../cfg/CfgMgr";

/**
 * @name ChatuItem.ts
 * @description 插图界面
 * @author Created by jun on 2019.10.28
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class ChatuItem extends cc.Component {

    /** 插图背景 */
    @property(cc.Sprite)
    sprBg: cc.Sprite = null;

    /** 插图 */
    @property(cc.Sprite)
    sprChatu: cc.Sprite = null;

    /** 动画组件 */
    @property(cc.Animation)
    _animation: cc.Animation = null;

    _canNext: boolean = false;
    _chatuUrl: string = "";

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickNext.bind(this))
        this._animation = this.getComponent(cc.Animation);
    }

    start() {
        this.sprBg.node.active = false;
        this.sprChatu.node.active = false;

        if (this.node["customParam"]) {
            this._showChatu(<number>this.node["customParam"]);
        } else {
            GameMgr.storyCtr.doStory({ "donext": true });
            GameMgr.uiMgr.closeUI(GameMgr.cfg.uiChatuPanel);
        }
    }

    onDestroy() {
        this.sprChatu.spriteFrame = null;
        GameMgr.releaseImage(this._chatuUrl);
    }

    onClickNext(event: any) {
        event.stopPropagation();
        if (this._canNext) {
            GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);
            if (this.sprBg.node.active) {
                cc.tween(this.sprBg.node)
                    .to(0.5, { opacity: 0 })
                    .call(() => {
                        this._animation.resume();
                    })
                    .start();
            } else {
                this._animation.resume();
            }
        }
    }

    _showChatu(chatuId: number) {
        this._canNext = false;
        let chatuObj = CfgMgr.CfgChatu.chatus[chatuId];

        this.sprChatu.node.x = chatuObj.x;
        this.sprChatu.node.y = chatuObj.y;
        this.sprChatu.node.scale = chatuObj.scale;
        this._chatuUrl = "textures/chatu/" + chatuObj.name;

        cc.loader.loadRes(this._chatuUrl, cc.SpriteFrame, (err, frame) => {
            if (chatuObj.act == "chatu_scale") {
                this.sprBg.node.active = true;
                this.sprBg.node.opacity = 0;
                cc.tween(this.sprBg.node)
                    .to(0.5, { opacity: 130 })
                    .call(() => {
                        this.sprChatu.node.active = true;
                        this.sprChatu.spriteFrame = frame;
                        this._animation.play(chatuObj.act);
                    })
                    .start();
            } else {
                this.sprChatu.node.active = true;
                this.sprChatu.spriteFrame = frame;
                this._animation.play(chatuObj.act);
            }
        });
    }

    _showChatuPause() {
        this._animation.pause();
        this._canNext = true;
        this.scheduleOnce(() => {
            if (this.sprBg.node.active) {
                cc.tween(this.sprBg.node)
                    .to(0.5, { opacity: 0 })
                    .call(() => {
                        this._animation.resume();
                    })
                    .start();
            } else {
                this._animation.resume();
            }
        }, 0.8);
    }

    _showChatuEnd() {
        // 切换分支
        GameMgr.uiMgr.closeUI(GameMgr.cfg.uiChatuPanel);
        GameMgr.storyCtr.doStory({ "donext": true });
    }
}