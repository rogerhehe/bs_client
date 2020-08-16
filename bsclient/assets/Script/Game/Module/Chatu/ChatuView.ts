import BaseView from "../../../Core/BaseView"
import GameMgr from "../../../GameMgr";
import CfgMgr from "../../Config/CfgMgr";
import UIConfig from "../../../UIConfig"

/**
 * @name ChatuItem.ts
 * @description 插图界面
 * @author Created by jun on 2019.10.28
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class ChatuItem extends BaseView {

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
        this._showChatu(GameMgr.chatuCtr.chatuId);
    }

    onDestroy() {
        this.sprChatu.spriteFrame = null;
        this._resMgr.removeAsset(GameMgr.storyCtr.currChapterAB, this._chatuUrl, cc.SpriteFrame);
    }

    onClickNext(event: any) {
        event.stopPropagation();
        if (this._canNext) {
            this._audioMgr.defaultSound();
            
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
        this._chatuUrl = "texture/chatu/" + chatuObj.name;

        this._resMgr.loadAsset(GameMgr.storyCtr.currChapterAB, this._chatuUrl, cc.SpriteFrame, (spriteFrame) => {
            if (chatuObj.act == "chatu_scale") {
                this.sprBg.node.active = true;
                this.sprBg.node.opacity = 0;
                cc.tween(this.sprBg.node)
                    .to(0.5, { opacity: 130 })
                    .call(() => {
                        this.sprChatu.node.active = true;
                        this.sprChatu.spriteFrame = spriteFrame;
                        this._animation.play(chatuObj.act);
                    })
                    .start();
            } else {
                this.sprChatu.node.active = true;
                this.sprChatu.spriteFrame = spriteFrame;
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
        this._uiMgr.closeUI(UIConfig.UIChatuPanel);
        GameMgr.storyCtr.doingNextOperate();
    }
}