import BaseView from "../../../Core/BaseView"
import GameMgr from "../../../GameMgr";
import CfgMgr from "../../Config/CfgMgr";
import UIConfig from "../../../UIConfig";

/**
 * @name RoleInfoView.ts
 * @description 人物介绍
 * @author Created by jun on 2019.10.28
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class RoleInfoView extends BaseView {

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
        this._showRoleInfo(GameMgr.roleInfoCtr.roleInfoId);
    }

    onDestroy() {
        this.sprPortrait.spriteFrame = null;
        this._resMgr.removeAsset(UIConfig.UIRoleInfoPanel.AB, this._portraitUrl, cc.SpriteFrame);
    }

    onClickNext(event: any) {
        event.stopPropagation();
        if (this._canNext) {
            this._audioMgr.defaultSound();
            
            GameMgr.storyCtr.doNext();
            this._uiMgr.closeUI(UIConfig.UIRoleInfoPanel);
        }
    }

    _showRoleInfo(roleInfoId: number) {
        let roleInfoObj = CfgMgr.CfgRoleInfo.roleInfos[roleInfoId];

        this.txtName.string = roleInfoObj.name;
        this.txtAge.string = roleInfoObj.age;
        this.txtStarType.string = roleInfoObj.star;

        this._portraitUrl = "texture/" + roleInfoObj.res;
        this._resMgr.loadAsset(UIConfig.UIRoleInfoPanel.AB, this._portraitUrl, cc.SpriteFrame, (spriteFrame)=>{
            this.sprPortrait.spriteFrame = spriteFrame;
            this._animation.play();
        });
    }

    _showRoleInfoEnd() {
        this._canNext = true;
    }
}
