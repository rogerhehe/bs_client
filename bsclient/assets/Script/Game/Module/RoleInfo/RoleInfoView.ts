import GameMgr from "../../../GameMgr";
import CfgMgr from "../../cfg/CfgMgr";

/**
 * @name RoleInfoView.ts
 * @description 人物介绍
 * @author Created by jun on 2019.10.28
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class RoleInfoView extends cc.Component {

    /** 半身像 */
    @property(cc.Sprite)
    sprPortrait: cc.Sprite = null;

    /** 名字 */
    @property(cc.Label)
    txtName: cc.Label = null;

    /** 年龄 */
    @property(cc.Label)
    txtAge: cc.Label = null;

    /** 星座 */
    @property(cc.Label)
    txtStarType: cc.Label = null;

    /** 动画组件 */
    @property(cc.Animation)
    _animation: cc.Animation = null;

    _canNext: boolean = false;
    _portraitUrl: string = "";

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickNext.bind(this))
        this._animation = this.getComponent(cc.Animation);
    }

    start() {
        this._canNext = false;

        if (this.node["customParam"]) {
            this._showRoleInfo(<number>this.node["customParam"]);
        } else {
            GameMgr.uiMgr.closeUI(GameMgr.cfg.uiRoleInfoPanel);
            GameMgr.storyCtr.doStory({ "donext": true });
        }
    }

    onDestroy() {
        this.sprPortrait.spriteFrame = null;
        GameMgr.releaseImage(this._portraitUrl);
    }

    onClickNext(event: any) {
        event.stopPropagation();
        if (this._canNext) {
            GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);
            GameMgr.storyCtr.doNext();
            GameMgr.uiMgr.closeUI(GameMgr.cfg.uiRoleInfoPanel);
        }
    }

    _showRoleInfo(roleInfoId: number) {
        let roleInfoObj = CfgMgr.CfgRoleInfo.roleInfos[roleInfoId];

        this.txtName.string = roleInfoObj.name;
        this.txtAge.string = roleInfoObj.age;
        this.txtStarType.string = roleInfoObj.star;

        this._portraitUrl = "textures/role/" + roleInfoObj.res;
        cc.loader.loadRes(this._portraitUrl, cc.SpriteFrame, (err, spriteFrame) => {
            this.sprPortrait.spriteFrame = spriteFrame;
            this._animation.play();
        });
    }

    _showRoleInfoEnd() {
        this._canNext = true;
    }
}
