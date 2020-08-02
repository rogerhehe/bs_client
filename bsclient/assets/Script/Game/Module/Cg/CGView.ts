import GameMgr from "../../../GameMgr";
import CfgMgr from "../../cfg/CfgMgr";

/**
 * @name CGView.ts
 * @description CG界面
 * @author Created by jun on 2019.10.28
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class CGView extends cc.Component {

    /** CG动画 */
    @property(sp.Skeleton)
    spCG: sp.Skeleton = null;

    /** CG图片 */
    @property(cc.Sprite)
    sprCG: cc.Sprite = null;

    /** 旁白内容 */
    @property(cc.Layout)
    layoutAside: cc.Label = null;

    /** 点击提示 */
    @property(cc.Label)
    txtTouch: cc.Label = null;

    _canNext: boolean = false;
    _canAside: boolean = false;
    _cgSprUrl: string = "";
    _cgSpUrl: string = "";

    _txtLableArr = [];
    _cgAsideTxtArr = [];
    _cgAsideStyle = null;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickNext.bind(this))
    }

    start() {
        this.spCG.setEndListener(() => {
            this._tweenTxtTouch();
            let tw = cc.tween;
            tw(this.spCG.node)
                .sequence(
                    tw().to(2, { position: cc.v2(this.spCG.node.x - 3, this.spCG.node.y) }),
                    tw().to(2, { position: cc.v2(this.spCG.node.x + 3, this.spCG.node.y) })
                )
                .repeatForever()
                .start()
        });
        this._cgSpUrl = "";
        this._cgSprUrl = "";
        
        if (this.node["customParam"]) {
            this._showCG(<number>this.node["customParam"]);
        } else {
            GameMgr.storyCtr.doStory({ "donext": true });
            GameMgr.uiMgr.closeUI(GameMgr.cfg.uiCGPanel);
        }
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
        if (this._cgSpUrl != "") {
            GameMgr.releaseSpine(this._cgSpUrl);
        }
        if (this._cgSprUrl != "") {
            this.sprCG.spriteFrame = null;
            GameMgr.releaseImage(this._cgSprUrl);
        }
    }

    onClickNext(event) {
        event.stopPropagation();
        if (this._canAside) {
            if (this._canNext) {
                if (this._cgAsideTxtArr.length > 0) {
                    this._showAside();
                } else {
                    this._endCG();
                }
            }
        } else if (this._canNext) {
            this._endCG();
        }
    }

    _endCG() {
        GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);
        cc.tween(this.spCG.node).stop();
        cc.tween(this.sprCG.node).stop();
        cc.tween(this.txtTouch.node).stop();

        this._txtLableArr = [];
        this._cgAsideTxtArr = [];
        this.layoutAside.node.removeAllChildren();

        // 切换分支
        GameMgr.storyCtr.doStory({ "donext": true });
        GameMgr.uiMgr.closeUI(GameMgr.cfg.uiCGPanel);
    }

    _showCG(cgId: number) {
        this.node.active = true;
        this.spCG.node.active = false;
        this.sprCG.node.active = false;
        this.txtTouch.node.active = false;
        this._canNext = false;
        this._canAside = false;

        this._txtLableArr = [];
        this._cgAsideTxtArr = [];
        this.layoutAside.node.removeAllChildren();
        this.layoutAside.node.active = false;

        let cgObj = CfgMgr.CfgCG.cgs[cgId];
        if (cgObj.act.length > 0) {
            this._cgSpine(cgObj);
        } else {
            this._cgSprite(cgObj);
        }

        if (cgObj.aside) {
            this._cgAsideTxtArr = CfgMgr.CfgCG.cgAside[cgObj.aside];
            this._cgAsideStyle = CfgMgr.CfgCG.cgAsideStyle[cgObj.aside];
            this._canAside = true;
            this.layoutAside.node.active = true;
            this.layoutAside.node.x = this._cgAsideStyle.label.x;
            this.layoutAside.node.y = this._cgAsideStyle.label.y;
        }
    }

    _cgSpine(cgObj) {
        this.spCG.node.x = cgObj.x
        this.spCG.node.y = cgObj.y
        this.spCG.node.scale = cgObj.scale;
        this._cgSpUrl = "spines/cg/" + cgObj.name + "/" + cgObj.name;

        cc.loader.loadRes(this._cgSpUrl, sp.SkeletonData, (err, data) => {
            this.spCG.node.active = true;
            this.spCG.skeletonData = data;
            this.spCG.setAnimation(0, cgObj.act[0], false);
            this.spCG.addAnimation(0, cgObj.act[1], true);
        });
    }

    _cgSprite(cgObj) {
        this.sprCG.node.x = cgObj.x
        this.sprCG.node.y = cgObj.y
        this.sprCG.node.scale = cgObj.scale;
        this._cgSprUrl = "spines/cg/" + cgObj.name;

        cc.loader.loadRes(this._cgSprUrl, cc.SpriteFrame, (err, frame) => {
            this.sprCG.node.active = true;
            this.sprCG.spriteFrame = frame;
            this.scheduleOnce(() => {
                this._tweenTxtTouch();
                let tw = cc.tween;
                tw(this.sprCG.node)
                    .sequence(
                        tw().to(5, { scale: 1.03 }),
                        tw().to(5, { scale: 1.0 })
                    )
                    .repeatForever()
                    .start()
            }, 0.5);
        });
    }

    _tweenTxtTouch() {
        this._canNext = true;
        this.txtTouch.node.active = true;
        let tw = cc.tween;
        tw(this.txtTouch.node)
            .sequence(
                tw().to(3, { scale: 0.9 }),
                tw().to(3, { scale: 1.0 })
            )
            .repeatForever()
            .start()
    }


    _showAside() {
        this._canNext = false;
        this.unscheduleAllCallbacks();
        let txtLable = this._createTxtNode();
        this._txtLableArr.push(txtLable);

        // 计算总高度
        let totalHeight = 0;
        this._txtLableArr.forEach(element => {
            totalHeight += element.node.height;
        });

        // 展示文字
        let content: string = this._cgAsideTxtArr.shift();
        let i = 0;
        this.schedule(() => {
            txtLable.string += content[i];
            i++;
            if (i >= content.length) {
                // TODO
            }
        }, 0.02, content.length - 1);

        // 删除第一行
        if (totalHeight >= this.layoutAside.node.height) {
            let dTxtLabel: cc.Label = this._txtLableArr.shift();
            cc.tween(dTxtLabel.node)
                .to(0.6, { opacity: 0 })
                .call(() => {
                    dTxtLabel.node.active = false;
                    dTxtLabel.destroy();
                })
                .start()
        }

        this.scheduleOnce(() => {
            this._canNext = true;
        }, 1)
    }

    _createTxtNode() {
        var node = new cc.Node('Label');
        node.color = this._cgAsideStyle.label.color;
        // 文本
        let txtLabel: cc.Label = node.addComponent(cc.Label);
        txtLabel.node.x = -400;
        txtLabel.node.setAnchorPoint(cc.v2(0, 1));
        txtLabel.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
        txtLabel.verticalAlign = cc.Label.VerticalAlign.CENTER;
        txtLabel.fontSize = this._cgAsideStyle.label.size;
        txtLabel.lineHeight = 65;
        // 描边
        if (this._cgAsideStyle.outLine) {
            let outLine: cc.LabelOutline = node.addComponent(cc.LabelOutline);
            outLine.color = this._cgAsideStyle.outLine.color;
            outLine.width = this._cgAsideStyle.outLine.width;
        }
        // 阴影
        if (this._cgAsideStyle.shadow) {
            let shadow: cc.LabelShadow = node.addComponent(cc.LabelShadow);
            shadow.color = this._cgAsideStyle.shadow.color;
            shadow.offset = this._cgAsideStyle.shadow.offset;
            shadow.blur = this._cgAsideStyle.shadow.blur;
        }
        node.parent = this.layoutAside.node;
        return txtLabel
    }
}
