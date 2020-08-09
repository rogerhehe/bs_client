import BaseView from "../../../Core/BaseView"
import GameMgr from "../../../GameMgr"
import CfgMgr from "../../Config/CfgMgr"
import UIConfig from "../../../UIConfig"


/**
 * @name StoryView.ts
 * @description 叙事界面
 * @author Created by jun on 2018.4.7
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class StoryView extends BaseView {

    /** 剧情背景图 */
    @property(cc.Sprite)
    sprBg: cc.Sprite = null;

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

    _currChapterAB: string = "";
    _currScenePath: string = "";

    _talkContent = "";
    _currRoleObj = null;

    onLoad() {
        GameMgr.storyCtr.view = this;
        this.node.on(cc.Node.EventType.TOUCH_END, this.doingNext.bind(this));

        // 加载当前章节
        this._currChapterAB = "chapter" + GameMgr.playerCtr.playerModel.currChapter;
        this._resMgr.loadAssetBundle(this._currChapterAB);

        // 女主
        this._resMgr.loadAssetBundle("malisu", (bundle: cc.AssetManager.Bundle) => {
            bundle.load("malisu", sp.SkeletonData, (err, asset: sp.SkeletonData) => {
                this._resMgr.addSkeletonData("malisu", asset);
            });
        });
        this._resMgr.loadAssetBundle("yangxiaozhan")
        this._resMgr.loadAssetBundle("gutingwei")
        this._resMgr.loadAssetBundle("chengyuchuan")
        this._resMgr.loadAssetBundle("bowenlang")
    }

    start() {
        this._currScenePath = "";

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
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
        this._talkContent = "";
        if (this._currRoleObj && this._currRoleObj.dir == "M") {
            this.sprCallRole.spriteFrame = null;
            this._resMgr.removeAsset(this._currChapterAB, "textures/role/" + this._currRoleObj.sp, cc.SpriteFrame);
        }
        this._currRoleObj = null;

        GameMgr.storyCtr.view = null;
    }

    reset() {
        this.sprAsideTip.node.active = false;
        this.sprNameBg.node.active = false;
        this.sprDialogueBg.node.active = false;
        this.spLeftRole.node.active = false;
        this.spRightRole.node.active = false;
        this.sprCallRole.node.active = false;
        this.spLeftRole.node.x = -1200;
        this.spRightRole.node.x = 1200;

        this._talkContent = "";
        if (this._currRoleObj && this._currRoleObj.dir == "M") {
            this.sprCallRole.spriteFrame = null;
            this._resMgr.removeAsset(this._currChapterAB, "textures/role/" + this._currRoleObj.sp, cc.SpriteFrame);
        }
        this._currRoleObj = null;
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
        this._resMgr.loadAsset(UIConfig.UIStoryPanel.AB, "atlas/" + nextRoleObj.nbg, cc.SpriteFrame, (spriteFrame) => {
            this.sprNameBg.spriteFrame = <cc.SpriteFrame>spriteFrame;
        })
        // 对话动画
        this._tweenDialogue();
        // 回忆角色动画
        if (nextRoleObj.sp != "malisu" && (!this._currRoleObj || this._currRoleObj.sp != nextRoleObj.sp)) {
            // 卸载上一个角色
            if (this._currRoleObj && this._currRoleObj.sp != "malisu" && this._currRoleObj.sp != nextRoleObj.sp) {
                this.sprCallRole.spriteFrame = null;
                this._resMgr.removeAsset(this._currChapterAB, "textures/role/" + this._currRoleObj.sp, cc.SpriteFrame);
            }
            // 加载下一个角色
            this._resMgr.loadAsset(this._currChapterAB, "textures/role/" + nextRoleObj.sp, cc.SpriteFrame, (spriteFrame) => {
                this.sprCallRole.spriteFrame = spriteFrame;
            })
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
        this._resMgr.loadAsset(UIConfig.UIStoryPanel.AB, "atlas/" + nextRoleObj.nbg, cc.SpriteFrame, (spriteFrame) => {
            this.sprNameBg.spriteFrame = <cc.SpriteFrame>spriteFrame;
        })
        // 对话动画
        this._tweenDialogue();
        // 正常角色动画
        if (nextRoleObj.dir == "L") {
            if (!this._currRoleObj || this._currRoleObj.sp != nextRoleObj.sp) {
                // 右边消失
                cc.tween(this.spRightRole.node)
                    .to(0.2, { position: cc.v3(1200, this.spRightRole.node.y) })
                    .start()
                // 左边出现
                this.spLeftRole.node.x = -1200;
                this.spLeftRole.node.active = true;
                this.spLeftRole.skeletonData = this._resMgr.getSkeletonData(nextRoleObj.sp);

                if (nextRoleObj.skin == "") {
                    this.spLeftRole.setSkin(GameMgr.playerCtr.playerModel.currSkin);
                } else {
                    this.spLeftRole.setSkin(nextRoleObj.skin);
                }
                this.spLeftRole.setAnimation(0, nextRoleObj.act[0], false);
                this.spLeftRole.addAnimation(0, nextRoleObj.act[1], true);
                cc.tween(this.spLeftRole.node)
                    .to(0.2, { position: cc.v3(0, this.spLeftRole.node.y) })
                    .start()
                // 移动背景
                this._moveScene(false);
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
                    this._resMgr.removeAsset(this._currRoleObj.sp, this._currRoleObj.sp, sp.SkeletonData);
                }
                // 左边消失
                cc.tween(this.spLeftRole.node)
                    .to(0.2, { position: cc.v3(-1200, this.spLeftRole.node.y) })
                    .start()
                // 右边出现
                this.spRightRole.node.x = 1200;
                this.spRightRole.node.active = true;
                this._resMgr.loadAsset(nextRoleObj.sp, nextRoleObj.sp, sp.SkeletonData, (data) => {
                    this.spRightRole.skeletonData = data;
                    this.spRightRole.setSkin(nextRoleObj.skin);
                    this.spRightRole.setAnimation(0, nextRoleObj.act[0], false);
                    this.spRightRole.addAnimation(0, nextRoleObj.act[1], true);
                    cc.tween(this.spRightRole.node)
                        .to(0.2, { position: cc.v3(30, this.spRightRole.node.y) })
                        .start()
                    // 移动背景
                    this._moveScene(true);
                });
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

    doingNext(event) {
        // // 打断自动操作
        // if (this.isAuto && event) {
        //     this.isAuto = false;
        //     GameMgr.mainCtr.setAuto(false);
        //     return;
        // }

        // 是否禁用操作
        if (!GameMgr.storyCtr.canClick) return;

        // 判断是否结束
        if (GameMgr.storyCtr.checkEnd()) return;

        GameMgr.storyCtr.doingOperate();
    }

    /**
     * 切换场景
     * @param sceneId 
     * @param callbackFun 
     */
    switchScene(sceneId, callbackFun) {
        let abName = "chapter" + GameMgr.playerCtr.playerModel.currChapter;
        if (this._currScenePath != "") {
            this.sprBg.spriteFrame = null;
            this._resMgr.removeAsset(abName, this._currScenePath, cc.SpriteFrame);
        }

        this.scheduleOnce(() => {
            let sceneObj = CfgMgr.CfgScene.scenes[sceneId];
            let bgPath = "texture/bg/" + sceneObj.bg;
            this._resMgr.loadAsset(abName, bgPath, cc.SpriteFrame, (spriteFrame) => {
                this.sprBg.spriteFrame = spriteFrame;
                // this.sprBg.node.x = sceneObj.initx;
                this._currScenePath = bgPath;
                callbackFun();
            })
        }, 0.5);
    }

    /**
     * 调整当前场景
     * @param currSceneId 当前场景ID
     */
    adjustScene(currSceneId: number) {
        let currSceneObj = CfgMgr.CfgScene.scenes[currSceneId];
        if (currSceneObj.x != 0 && currSceneObj.dt > 0) {
            cc.tween(this.sprBg.node)
                .to(currSceneObj.dt, { position: cc.v3(this.sprBg.node.x + currSceneObj.x, this.sprBg.node.y) }, { easing: 'sineOut' })
                .delay(0.8)
                .call(() => {
                    GameMgr.storyCtr.doingOperate();
                })
                .start()
        } else {
            cc.tween(this.sprBg.node)
                .delay(0.5)
                .call(() => {
                    GameMgr.storyCtr.doingOperate();
                })
                .start()
        }
    }

    /**
     * 震屏效果
     */
    shockScreen() {
        let tw = cc.tween;
        tw(this.sprBg.node)
            .sequence(
                tw().to(0.02, { position: cc.v2(5, 7) }),
                tw().to(0.02, { position: cc.v2(-6, 7) }),
                tw().to(0.02, { position: cc.v2(-13, 3) }),
                tw().to(0.02, { position: cc.v2(3, -6) }),
                tw().to(0.02, { position: cc.v2(-5, 5) }),
                tw().to(0.02, { position: cc.v2(2, -8) }),
                tw().to(0.02, { position: cc.v2(-8, -10) }),
                tw().to(0.02, { position: cc.v2(3, 10) }),
                tw().to(0.02, { position: cc.v2(-5, 8) }),
                tw().to(0.02, { position: cc.v2(0, 0) })
            )
            .repeat(5)
            .start()
    }

    /**
     * 场景
     * @param isLeft 是否向左移动
     */
    _moveScene(isLeft: boolean) {
        if (isLeft) {
            cc.tween(this.sprBg.node)
                .to(1, { position: cc.v3(this.sprBg.node.x - 40, this.sprBg.node.y) }, { easing: 'sineOut' })
                .start()
        } else {
            cc.tween(this.sprBg.node)
                .to(1, { position: cc.v3(this.sprBg.node.x + 40, this.sprBg.node.y) }, { easing: 'sineOut' })
                .start()
        }
    }

}
