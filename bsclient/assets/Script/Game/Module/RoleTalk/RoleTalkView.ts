import GameMgr from "../../../GameMgr";
import CfgMgr from "../../cfg/CfgMgr";

/**
 * @name RoleTalkView.ts
 * @description 对话界面
 * @author Created by jun on 2019.10.28
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class RoleTalkView extends cc.Component {

    /** 名字背景 */
    @property(cc.Sprite)
    sprNameBg: cc.Sprite = null;

    /** 名字文本 */
    @property(cc.Label)
    txtName: cc.Label = null;

    /** 对话背景 */
    @property(cc.Sprite)
    sprDialogueBg: cc.Sprite = null;

    /** 对话文本 */
    @property(cc.Label)
    txtDialogue: cc.Label = null;

    /** 左边角色 */
    @property(sp.Skeleton)
    spLeftRole: sp.Skeleton = null;

    /** 右边角色 */
    @property(sp.Skeleton)
    spRightRole: sp.Skeleton = null;

    /** 回忆角色 */
    @property(cc.Sprite)
    sprCallRole: cc.Sprite = null;

    /** 点击提示 */
    @property(cc.Sprite)
    sprAsideTip: cc.Sprite = null;

    _talkContent = "";
    _currRoleObj = null;

    onLoad() {
        GameMgr.roleTalkCtr.viewComp = this;
    }

    start() {
        this.sprAsideTip.node.active = false;
        this.sprNameBg.node.active = false;
        this.sprDialogueBg.node.active = false;
        this.spLeftRole.node.active = false;
        this.spRightRole.node.active = false;
        this.sprCallRole.node.active = false;
        this._talkContent = "";
        this._currRoleObj = null;
        this.spLeftRole.node.x = -1200;
        this.spRightRole.node.x = 1200;

        if (this.node["customParam"]) {
            let data = this.node["customParam"];
            if (data.memory) {
                this.showMemory(data.roleId, data.txt);
            } else {
                this.showDialogue(data.roleId, data.txt);
            }
        } else {
            GameMgr.uiMgr.closeUI(GameMgr.cfg.uiRoleTalkPanel);
            GameMgr.storyCtr.doNextStory();
        }
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
        this._talkContent = "";
        if (this._currRoleObj && this._currRoleObj.dir == "M") {
            this.sprCallRole.spriteFrame = null;
            GameMgr.releaseImage("textures/role/" + this._currRoleObj.sp);
        }
        this._currRoleObj = null;
        GameMgr.roleTalkCtr.viewComp = null;
    }

    showMemory(roleId: number, content: string) {
        this.unscheduleAllCallbacks();
        this.txtDialogue.string = "";
        this.sprNameBg.node.active = true;
        this.sprDialogueBg.node.active = true;
        this.sprAsideTip.node.active = false;
        // 隐藏正常角色
        this.spLeftRole.node.active = false;
        this.spRightRole.node.active = false;
        // 激活回忆角色
        this.sprCallRole.node.active = true;
        // 对话
        this._talkContent = content.split("]")[1];
        // 角色名
        let nextRoleObj = CfgMgr.CfgRole.roles[roleId];
        this.txtName.string = nextRoleObj.name;
        // 角色名背景
        let atlasUrl = GameMgr.cfg.resUiCommon;
        this.sprNameBg.spriteFrame = GameMgr.resCache.getSpriteFrame(atlasUrl, nextRoleObj.nbg);
        // 对话动画
        this._tweenDialogue();
        // 回忆角色动画
        if (nextRoleObj.sp != "malisu" && (!this._currRoleObj || this._currRoleObj.sp != nextRoleObj.sp)) {
            // 卸载上一个角色
            if (this._currRoleObj && this._currRoleObj.sp != "malisu" && this._currRoleObj.sp != nextRoleObj.sp) {
                this.sprCallRole.spriteFrame = null;
                GameMgr.releaseImage("textures/role/" + this._currRoleObj.sp);
            }
            // 加载下一个角色
            cc.loader.loadRes("textures/role/" + nextRoleObj.sp, cc.SpriteFrame, (err, spriteFrame) => {
                this.sprCallRole.spriteFrame = spriteFrame;
            });
        }
        this._currRoleObj = nextRoleObj;

        this.scheduleOnce(() => {
            GameMgr.storyCtr.doNext();
            this.sprAsideTip.node.active = true;
        }, 0.5);
    }

    showDialogue(roleId: number, content: string) {
        this.unscheduleAllCallbacks();
        this.txtDialogue.string = "";
        let nextRoleObj = CfgMgr.CfgRole.roles[roleId];
        this.sprNameBg.node.active = true;
        this.sprDialogueBg.node.active = true;
        this.sprAsideTip.node.active = false;
        // 隐藏回忆角色
        this.sprCallRole.node.active = false;
        // 对话
        this._talkContent = content.split("]")[1];
        // 角色名
        this.txtName.string = nextRoleObj.name;
        // 角色名背景
        let atlasUrl = GameMgr.cfg.resUiCommon;
        this.sprNameBg.spriteFrame = GameMgr.resCache.getSpriteFrame(atlasUrl, nextRoleObj.nbg);
        // 对话动画
        this._tweenDialogue();
        // 正常角色动画
        if (nextRoleObj.dir == "L") {
            if (!this._currRoleObj || this._currRoleObj.sp != nextRoleObj.sp) {
                // 右边消失
                cc.tween(this.spRightRole.node)
                    .to(0.2, { position: cc.v2(1200, this.spRightRole.node.y) })
                    .start()
                // 左边出现
                this.spLeftRole.node.x = -1200;
                this.spLeftRole.node.active = true;
                this.spLeftRole.skeletonData = GameMgr.resCache.getSkeletonData(nextRoleObj.sp);
                if (nextRoleObj.skin == "") {
                    this.spLeftRole.setSkin(GameMgr.playerCtr.playerModel.currSkin);
                } else {
                    this.spLeftRole.setSkin(nextRoleObj.skin);
                }
                this.spLeftRole.setAnimation(0, nextRoleObj.act[0], false);
                this.spLeftRole.addAnimation(0, nextRoleObj.act[1], true);
                cc.tween(this.spLeftRole.node)
                    .to(0.2, { position: cc.v2(0, this.spLeftRole.node.y) })
                    .start()
                // 移动背景
                GameMgr.storyCtr.doMove({ "right": true });
            } else {
                if (nextRoleObj.skin != "" && this._currRoleObj.skin != nextRoleObj.skin) {
                    this.spLeftRole.setSkin(nextRoleObj.skin);
                }
                if (nextRoleObj.act[0] != this._currRoleObj.act[0]) {
                    this.spLeftRole.setAnimation(0, nextRoleObj.act[0], false);
                    this.spLeftRole.addAnimation(0, nextRoleObj.act[1], true);
                }
            }

        } else if (nextRoleObj.dir == "R") {
            if ((!this._currRoleObj || this._currRoleObj.sp != nextRoleObj.sp)) {
                // 卸载上一个角色
                if (this._currRoleObj && this._currRoleObj.sp != "malisu" && this._currRoleObj.sp != nextRoleObj.sp && this.spRightRole.skeletonData) {
                    cc.loader.releaseRes("spines/role/" + this._currRoleObj.sp + "/" + this._currRoleObj.sp, sp.SkeletonData);
                }
                // 左边消失
                cc.tween(this.spLeftRole.node)
                    .to(0.2, { position: cc.v2(-1200, this.spLeftRole.node.y) })
                    .start()
                // 右边出现
                this.spRightRole.node.x = 1200;
                this.spRightRole.node.active = true;
                cc.loader.loadRes("spines/role/" + nextRoleObj.sp + "/" + nextRoleObj.sp, sp.SkeletonData, (err, data) => {
                    this.spRightRole.skeletonData = data;
                    this.spRightRole.setSkin(nextRoleObj.skin);
                    this.spRightRole.setAnimation(0, nextRoleObj.act[0], false);
                    this.spRightRole.addAnimation(0, nextRoleObj.act[1], true);
                    cc.tween(this.spRightRole.node)
                        .to(0.2, { position: cc.v2(30, this.spRightRole.node.y) })
                        .start()
                    // 移动背景
                    GameMgr.storyCtr.doMove({ "left": true });
                })
            } else {
                if (nextRoleObj.skin != "" && this._currRoleObj.skin != nextRoleObj.skin) {
                    this.spRightRole.setSkin(nextRoleObj.skin);
                }
                if (nextRoleObj.act[0] != this._currRoleObj.act[0]) {
                    this.spRightRole.setAnimation(0, nextRoleObj.act[0], false);
                    this.spRightRole.addAnimation(0, nextRoleObj.act[1], true);
                }
            }
        }
        this._currRoleObj = nextRoleObj;

        this.scheduleOnce(() => {
            GameMgr.storyCtr.doNext();
            this.sprAsideTip.node.active = true;
        }, 0.5);
    }

    _tweenDialogue() {
        this.sprDialogueBg.node.scaleY = 0.1
        cc.tween(this.sprDialogueBg.node)
            .to(0.1, { scaleY: 1 })
            .call(() => {
                this.txtDialogue.string = "";
                let i = 0;
                this.schedule(() => {
                    this.txtDialogue.string += this._talkContent[i];
                    i++;
                    if (i >= this._talkContent.length) {
                        // TODO
                    }
                }, 0.01, this._talkContent.length - 1);
            })
            .start()
    }
}
