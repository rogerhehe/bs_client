import BaseView from "../../../Core/BaseView"
import GameMgr from "../../../GameMgr";
import CfgMgr from "../../Config/CfgMgr";
import UIConfig from "../../../UIConfig"
import Config from "../../../Config"

/**
 * @name SelectView.ts
 * @description 分支选择界面
 * @author Created by jun on 2020.1.12
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class SelectView extends BaseView {

    /** 分支选择按钮 */
    @property(cc.Button)
    btnSelect: cc.Button[] = [];

    /** 分支选择按钮皮肤 */
    @property(cc.Sprite)
    sprSelect: cc.Sprite[] = [];

    /** 分支选择按钮描述 */
    @property(cc.Label)
    txtSelect: cc.Label[] = []

    /** 分支选择付费描述 */
    @property(cc.Label)
    txtPay: cc.Label[] = []

    /** 动画组件 */
    @property(cc.Animation)
    _animation: cc.Animation = null;

    _selectId = 0;
    _selectObj = null;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick.bind(this))
        this._animation = this.getComponent(cc.Animation);
    }

    start() {
        this._showSelect(GameMgr.selectCtr.selectId);
        this._animation.play();
    }

    onDestroy() {

    }

    onClick(event: any) {
        event.stopPropagation();
    }

    onClickSelect(event, custom_data) {
        event.stopPropagation();

        let data = Number(custom_data)
        if (data > this._selectObj.count) {
            console.log("SelectItem select error, id=", data, "len=", this._selectObj.list.length);
            GameMgr.popupCtr.openPopupMask("选择错误, id=" + data + "len=" + this._selectObj.list.length);
            return;
        }

        if (this._selectObj.list.length != this._selectObj.count || this._selectObj.pay.length != this._selectObj.count) {
            console.log("CfgSelect error, count=", this._selectObj.count, "len=", this._selectObj.list.length);
            GameMgr.popupCtr.openPopupMask("配置错误, count=" + this._selectObj.count + "len=" + this._selectObj.list.length);
            return;
        }

        // 选择声音
        // GameMgr.audioMgr.playSound("audios/" + this._selectObj.sound[data]);

        // 分支选择
        let branch = this._selectObj.list[data];
        let branchId = Number(branch.split("#")[0]);

        // 成功回调
        let buyCallBack = (isBuy) => {
            // 是否购买回调
            if (isBuy) {
                // 存档
                GameMgr.playerCtr.playerModel.selectList.push(branchId);
                GameMgr.playerCtr.saveBranch(branchId);
            }

            // 追加彩蛋
            if (this._selectObj.egg.length > 0) {
                // 存档
                GameMgr.playerCtr.playerModel.egg = GameMgr.playerCtr.playerModel.egg.concat(this._selectObj.egg);
                GameMgr.playerCtr.saveEgg(GameMgr.playerCtr.playerModel.egg.toString());
            }

            // 衣服特殊分支
            if (this._selectObj.cloth.length > 0 && this._selectObj.cloth.indexOf(GameMgr.playerCtr.playerModel.currClothId) >= 0) {
                branchId = Number(branch.split("#")[1]);
            }

            // 大结局分支选择, 1.是否正确选项  2.好感度是否达标
            if (this._selectObj.ending && data <= 0) {
                // 选择角色线，1-程 2-顾 3-博
                let loveVaule = 0;
                let lovaeVauleMax = 0;
                if (GameMgr.playerCtr.playerModel.currStage == 1) {
                    loveVaule = GameMgr.playerCtr.playerModel.getLoveChengValue();
                    lovaeVauleMax = CfgMgr.CfgLove.chengLoveValue;
                } else if (GameMgr.playerCtr.playerModel.currStage == 2) {
                    loveVaule = GameMgr.playerCtr.playerModel.getLoveGuValue();
                    lovaeVauleMax = CfgMgr.CfgLove.guLoveValue;
                } else if (GameMgr.playerCtr.playerModel.currStage == 3) {
                    loveVaule = GameMgr.playerCtr.playerModel.getLoveBoValue();
                    lovaeVauleMax = CfgMgr.CfgLove.boLoveValue;
                }
                // 判断是否命中完美结局
                if (loveVaule >= lovaeVauleMax) {
                    branchId = Number(branch.split("#")[0]);
                } else {
                    branchId = Number(branch.split("#")[1]);
                }
            }

            // 切换分支
            this._uiMgr.closeUI(UIConfig.UISelectPanel);
            GameMgr.storyCtr.endSelectStory(branchId);

            // 上报
            GameMgr.playerCtr.reportSelectEvent(isBuy, this._selectId, branchId);
        }

        // 是否付费
        if (this._selectObj.pay[data] > 0 && GameMgr.playerCtr.playerModel.selectList.indexOf(branchId) < 0) {
            // 调用购买接口
            if (Config.DEBUG) {
                buyCallBack(true);
            } else {
                GameMgr.playerCtr.purchaseGoods(this._selectObj.goodsId[data], buyCallBack);
            }
        } else {
            buyCallBack(false);
        }
    }

    _showSelect(selectId: number) {
        this.btnSelect.forEach(element => {
            element.node.active = false;
        });

        this._selectId = selectId;
        this._selectObj = CfgMgr.CfgSelect.selects[selectId];

        for (let index = 0; index < this._selectObj.count && this.btnSelect.length; index++) {
            this.txtSelect[index].string = this._selectObj.txt[index];
            // 是否付费
            let branchId = Number(this._selectObj.list[index].split("#")[0]);
            
            let bgName = "story_select_btn1";
            let txtPay = ""
            if (this._selectObj.pay[index] > 0 && GameMgr.playerCtr.playerModel.selectList.indexOf(branchId) < 0) {
                bgName = "story_select_btn1_pay";
                txtPay = this._selectObj.pay[index].toString();
            }
            this.txtPay[index].string = txtPay;
            this.sprSelect[index].spriteFrame = this._resMgr.getSpriteFrame(UIConfig.UIStoryPanel.AB, bgName);
            this.btnSelect[index].node.active = true;
        }
    }
}