import BaseView from "../../../Core/BaseView"
import GameMgr from "../../../GameMgr";
import CfgMgr from "../../Config/CfgMgr";
import ClothDescItem from "./ClothDescItem";
import UIConfig from "../../../UIConfig"
import Config from "../../../Config"

/**
 * @name ReplacementView.ts
 * @description 换装界面
 * @author Created by jun on 2020.1.12
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class ReplacementView extends BaseView {

    /** 镜子背景 */
    @property(cc.Sprite)
    sprBg: cc.Sprite = null;

    /** 镜子spine */
    @property(sp.Skeleton)
    spMirror: sp.Skeleton = null;

    /** 角色spine */
    @property(sp.Skeleton)
    spRole: sp.Skeleton = null;

    /** 描述子组件 */
    @property(cc.Sprite)
    sprDescItem: cc.Sprite = null;

    /** 购买选择按钮 */
    @property(cc.Button)
    btnBuy: cc.Button = null;

    /** 购买按钮背景 */
    @property(cc.Sprite)
    sprPrice: cc.Sprite = null

    /** 购买价格 */
    @property(cc.Label)
    txtPrice: cc.Label = null

    /** 描述展示按钮 */
    @property(cc.Button)
    btnDescTip: cc.Button = null;

    /** 左按钮 */
    @property(cc.Button)
    btnLeft: cc.Button = null;

    /** 右按钮 */
    @property(cc.Button)
    btnRight: cc.Button = null;

    /** 服装信息描述组件 */
    _clothDescItem: ClothDescItem = null;

    /** 动画组件 */
    @property(cc.Animation)
    _animation: cc.Animation = null;

    _modelCount = 5;
    _currModel = 0;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickNext.bind(this))
        this._animation = this.getComponent(cc.Animation);
        this._clothDescItem = this.sprDescItem.getComponent("ClothDescItem");

        this.spMirror.setAnimation(0, 'idle_s', false);
        this.spMirror.addAnimation(0, "idle_l", true);

        this.spRole.skeletonData = this._resMgr.getSkeletonData("malisu");
        this._changeModel();
    }

    start() {
        this.sprDescItem.node.active = false;
    }

    onDestroy() {
        this.sprPrice.spriteFrame = null;
        this._resMgr.removeAsset(UIConfig.UIClothPanel.AB, "atlas/hz_price_btn", cc.SpriteFrame);
        this._resMgr.removeAsset(UIConfig.UIClothPanel.AB, "atlas/hz_price_btn_pay", cc.SpriteFrame);
    }

    onClickNext(event: any) {
        event.stopPropagation();
        this._clothDescItem.hideDesc();
    }

    onClickBuy(event: any) {
        event.stopPropagation();
        this._audioMgr.playDefaultSound();

        let clothId = this._currModel + 1;
        let clothObj = CfgMgr.CfgCloth.cloths[clothId]

        // 成功回调
        let buyCallBack = (isBuy) => {
            this._uiMgr.closeUI(UIConfig.UIClothPanel);

            // 是否购买回调
            if (isBuy) {
                GameMgr.playerCtr.playerModel.clothList.push(clothId);
            }

            // 存档
            GameMgr.playerCtr.playerModel.currClothId = clothId;
            GameMgr.playerCtr.saveClothCurr();

            // 换装完成
            GameMgr.storyCtr.endClothStory(clothObj.nxId, clothObj.skin);
        }

        // 是否付费
        if (clothObj.price > 0 && GameMgr.playerCtr.playerModel.clothList.indexOf(clothId) < 0) {
            // 调用购买接口
            if (Config.DEBUG) {
                buyCallBack(true);
            } else {
                GameMgr.playerCtr.purchaseGoods(clothObj.goodsId, buyCallBack);
            }
        } else {
            buyCallBack(false);
        }
    }

    onClickDescTip(event: any) {
        event.stopPropagation();
        this._audioMgr.playDefaultSound();

        this._clothDescItem.showDesc(this._currModel + 1);
    }

    onClickLeft(event: any) {
        event.stopPropagation();
        this._audioMgr.playDefaultSound();

        this._clothDescItem.hideDesc();
        this._animation.playAdditive("mirror_role_left");

        this._leftCheckChapter();
    }

    onClickRight(event: any) {
        event.stopPropagation();
        this._audioMgr.playDefaultSound();

        this._clothDescItem.hideDesc();
        this._animation.playAdditive("mirror_role_right");

        this._rightCheckChapter();
    }

    _leftCheckChapter() {
        --this._currModel;
        if (this._currModel < 0) {
            this._currModel = this._modelCount - 1;
        }

        let clothObj = CfgMgr.CfgCloth.cloths[(this._currModel + 1)];
        if (clothObj.chId > 0) {
            let charpterId = Math.floor(clothObj.chId / 10);
            let stageId = clothObj.chId % 10;
            if (charpterId != GameMgr.playerCtr.playerModel.currChapter || stageId != GameMgr.playerCtr.playerModel.currStage) {
                this._leftCheckChapter();
                return;
            }
        }

        this._changeModel();
    }

    _rightCheckChapter() {
        ++this._currModel;
        if (this._currModel >= this._modelCount) {
            this._currModel = 0;
        }

        let clothObj = CfgMgr.CfgCloth.cloths[(this._currModel + 1)];
        if (clothObj.chId > 0) {
            let charpterId = Math.floor(clothObj.chId / 10);
            let stageId = clothObj.chId % 10;
            if (charpterId != GameMgr.playerCtr.playerModel.currChapter || stageId != GameMgr.playerCtr.playerModel.currStage) {
                this._rightCheckChapter();
                return;
            }
        }

        this._changeModel();
    }

    _changeModel() {
        let clothId = this._currModel + 1;
        let clothObj = CfgMgr.CfgCloth.cloths[clothId];

        this.spRole.skeletonData = this.spRole.skeletonData;
        this.spRole.setSkin(clothObj.skin);
        this.spRole.setAnimation(0, 'idle_l', true);

        let atlasUrl = "atlas/hz_price_btn";
        let txtPrice = "确 定";
        if (clothObj.price > 0 && GameMgr.playerCtr.playerModel.clothList.indexOf(clothId) < 0) {
            atlasUrl = "atlas/hz_price_btn_pay";
            txtPrice = clothObj.price.toString();
        }

        this._resMgr.loadAsset(UIConfig.UIClothPanel.AB, atlasUrl, cc.SpriteFrame, (spriteFrame) => {
            this.sprPrice.spriteFrame = <cc.SpriteFrame>spriteFrame;
            this.txtPrice.string = txtPrice;
        })
    }
}