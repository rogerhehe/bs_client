import BaseView from "../../../Core/BaseView"
import GameMgr from "../../../GameMgr"
import CfgMgr from "../../Config/CfgMgr"
import UIConfig from "../../../UIConfig"

/**
 * @name CallView.ts
 * @description 电话界面
 * @author Created by jun on 2020.1.12
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class CallView extends BaseView {

    /** 分支容器 */
    @property(cc.Layout)
    layoutSelectHolder: cc.Layout = null;

    /** 分支选择按钮 */
    @property(cc.Button)
    btnSelect: cc.Button[] = [];

    /** 分支选择按钮描述 */
    @property(cc.Label)
    txtSelect: cc.Label[] = [];

    /** 接听按钮 */
    @property(cc.Button)
    btnAnswer: cc.Button = null;

    /** 挂断按钮 */
    @property(cc.Button)
    btnHangup: cc.Button = null;

    // /** 挂断按钮亮起 */
    @property(cc.Sprite)
    sprHangup: cc.Sprite = null;

    /** 头像 */
    @property(cc.Sprite)
    sprHeadIcon: cc.Sprite = null;

    /** 名字 */
    @property(cc.Label)
    txtName: cc.Label = null;

    /** 对面说话 */
    @property(cc.Label)
    txtOther: cc.Label = null;

    /** 我说话 */
    @property(cc.Label)
    txtSelf: cc.Label = null;

    /** 动画组件 */
    @property(cc.Animation)
    _animation: cc.Animation = null;

    _currId = 0;
    _canClick = false;
    _lastTxt = "";
    _selectObj = null;
    _currHeadUrl = "";

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick.bind(this))
        this._animation = this.getComponent(cc.Animation);
    }

    start() {
        this._selectObj = null;
        this._canClick = false;
        this._animation.play();
        this.btnSelect.forEach(element => {
            element.node.active = false;
        });
        this._currId = GameMgr.callCtr.startId;
        if (GameMgr.callCtr.switchBranch) {
            this.autoAnswer();
        }
        this._checkHead();
    }

    onDestroy() {
        this.sprHeadIcon.spriteFrame = null;
        this.sprHangup.spriteFrame = null;
        this._resMgr.removeAsset(UIConfig.UICallPanel.AB, this._currHeadUrl, cc.SpriteFrame);
        this._resMgr.removeAsset(UIConfig.UICallPanel.AB, "th_hang_up_ico1", cc.SpriteFrame);
    }

    _checkHead() {
        let msgObj = CfgMgr.CfgMessage.msgs[this._currId];
        this.txtName.string = msgObj.name;
        this._currHeadUrl = "atlas/" + msgObj.head;
        this._resMgr.loadAsset(UIConfig.UICallPanel.AB, this._currHeadUrl, cc.SpriteFrame, (spriteFrame) => {
            this.sprHeadIcon.spriteFrame = spriteFrame;
        })
    }

    onClick(event: any) {
        if (event) {
            event.stopPropagation();
        }
        if (!this._canClick) return;
        // GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);

        // 判断是否结束
        if (this._currId <= 0) {
            this.autoHangup()
            return;
        }

        // 校对操作
        let msgObj = CfgMgr.CfgMessage.msgs[this._currId];
        if (!msgObj) {
            this.autoHangup()
            return;
        }
        let currId = this._currId;
        if (msgObj.nxId == 1) {
            ++this._currId;
        } else {
            this._currId = msgObj.nxId;
        }
        console.log("currId =", currId, "nextId =", this._currId, "item =", msgObj.item);

        // 执行操作
        this._canClick = false;
        if (msgObj.doing == 0) {
            // 1.对话
            this.txtOther.string = this._lastTxt;
            this.txtSelf.string = msgObj.txt;
            this._lastTxt = msgObj.txt;
            GameMgr.playerCtr.playerModel.addTalkPlayerback(currId);

            this.scheduleOnce(() => {
                this._canClick = true;
            }, 0.5);
        } else if (msgObj.doing == 1) {
            // 1.分支
            this._selectObj = CfgMgr.CfgMessage.selects[msgObj.item];
            for (let index = 0; index < this._selectObj.count && this.btnSelect.length; index++) {
                this.txtSelect[index].string = this._selectObj.txt[index];
                this.btnSelect[index].node.active = true;
            }
        }
    }

    onClickSelect(event, data) {
        event.stopPropagation();
        // GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);

        // 关闭选择
        this.btnSelect.forEach(element => {
            element.node.active = false;
        });

        // 跳转回忆分支
        let branchId = 0;
        if (this._selectObj && data < this._selectObj.list.length) {
            // GameMgr.audioMgr.playSound("audios/" + this._selectObj.sound[data]);

            branchId = this._selectObj.list[data];
            if (branchId > 0) {
                GameMgr.callCtr.switchBranch = true;
                this.switchBranch(branchId);
            } else {
                this._canClick = true;
            }
        } else {
            GameMgr.popupCtr.openPopupMask("下标越界 index=" + data);
        }
    }

    onClickAnswer(event) {
        event.stopPropagation();
        // GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);
        // GameMgr.audioMgr.stopSound();
        this.autoAnswer();
    }

    onClickHangup(event) {
        event.stopPropagation();
        // GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);
        GameMgr.callCtr.switchBranch = false;
        this.switchBranch(-1);
    }

    autoHangup() {
        this._canClick = false;
        this.txtOther.string = "";
        this.txtSelf.string = "";
        this.btnHangup.interactable = true;
        this._resMgr.loadAsset(UIConfig.UICallPanel.AB, "atlas/th_hang_up_ico1", cc.SpriteFrame, (spriteFrame) => {
            this.sprHangup.spriteFrame = spriteFrame;
        })
    }

    autoAnswer() {
        this._canClick = true;
        this.txtOther.string = "";
        this.txtSelf.string = "";
        this._animation.stop();

        this.btnAnswer.node.active = false;
        this.btnHangup.node.active = true;
        this.btnHangup.interactable = false;

        this.onClick("");
    }

    switchBranch(branchId: number) {
        this._uiMgr.closeUI(UIConfig.UICallPanel);
        GameMgr.storyCtr.doCallStory(branchId);
    }
}