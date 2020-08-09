import BaseView from "../../../Core/BaseView"
import GameMgr from "../../../GameMgr"
import CfgMgr from "../../Config/CfgMgr"
import UIConfig from "../../../UIConfig"
import Config from "../../../Config"


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

    // currOperId: number = 0;
    // nextOperId: number = 0;
    // currBgm: string = "";
    // canClick: boolean = false;
    // isAuto: boolean = false;
    // speed: number = 0.5;

    // _currSceneId: number = 0;

    _currScenePath: string = "";

    onLoad() {
        GameMgr.storyCtr.view = this;
        this.node.on(cc.Node.EventType.TOUCH_END, this.doingNext.bind(this));

        // 加载当前章节
        let abName = "chapter" + GameMgr.playerCtr.playerModel.currChapter;
        this._resMgr.loadAssetBundle(abName, () => {
            // 初始场景
            // let nextOperId = GameMgr.playerCtr.playerModel.currOperId;
            // let nextOperObj = GameMgr.playerCtr.playerModel.getCurrChapterCfg().chapters[nextOperId];
            // let nextSceneObj = CfgMgr.CfgScene.scenes[nextOperObj.scene];
            // let bgPath = "texture/bg/" + nextSceneObj.bg;
            // this._resMgr.loadAsset(abName, bgPath, cc.SpriteFrame, (spriteFrame) => {
            //     this.sprBg.spriteFrame = spriteFrame;
            //     // this.sprBg.node.x = nextSceneObj.initx;
            //     this.currSceneId = nextOperObj.scene;
            // })
        });

        // 女主
        this._resMgr.loadAssetBundle("malisu", (bundle: cc.AssetManager.Bundle) => {
            // this._resMgr.loadAsset(UIConfig.UILoadingPanel.AB, this._bgUrl, cc.SpriteFrame, (spriteFrame) => {
            //     this.sprBg.spriteFrame = <cc.SpriteFrame>spriteFrame;
            // })
        });
        this._resMgr.loadAssetBundle("yangxiaozhan")
        this._resMgr.loadAssetBundle("gutingwei")
        this._resMgr.loadAssetBundle("chengyuchuan")
        this._resMgr.loadAssetBundle("bowenlang")
    }

    start() {

        this._currScenePath = "";

        // this._currSceneId = 0;

        // this.currOperId = 0;
        // this.nextOperId = 0;

        // this.currBgm = "";
        // this.canClick = false;
        // this.isAuto = false;
        // this.speed = 0.5;
    }

    onDestroy() {
        GameMgr.storyCtr.view = null;
    }

    doingNext(event) {
        // // 打断自动操作
        // if (this.isAuto && event) {
        //     this.isAuto = false;
        //     GameMgr.mainCtr.setAuto(false);
        //     return;
        // }

        // // 是否禁用操作
        // if (!this.canClick) return;

        // // 判断是否结束
        // if (this.checkEnd()) return;

        // // 检查场景是否正常
        // let nextOperObj = GameMgr.playerCtr.playerModel.getCurrChapterCfg().chapters[this.nextOperId];
        // let currSceneObj = CfgMgr.CfgScene.scenes[this.currSceneId];
        // let nextSceneObj = CfgMgr.CfgScene.scenes[nextOperObj.scene];

        // // 场景无变化
        // if (this.currSceneId == nextOperObj.scene) {
        //     this.doingOperate(event);
        //     return;
        // }

        // // 场景位移
        // if (currSceneObj && currSceneObj.bg == nextSceneObj.bg) {
        //     this.currSceneId = nextOperObj.scene;
        //     this.doingOperate(event);
        //     return;
        // }

        // // 关闭对话
        // if (this._uiMgr.getOpenUI(UIConfig.UIRoleTalkPanel)) {
        //     this._uiMgr.closeUI(UIConfig.UIRoleTalkPanel)
        // }
        // this.createNewMask(true);

        // // 1.初始场景 2.场景切换
        // let loadCallBack = () => {
        //     // 加载下一场景图
        //     // cc.loader.loadRes("textures/bg/" + nextSceneObj.bg, cc.SpriteFrame, (err, spriteFrame) => {
        //     //     this.sprBg.spriteFrame = spriteFrame;
        //     //     this.sprBg.node.x = nextSceneObj.initx;
        //     //     this.currSceneId = nextOperObj.scene;
        //     //     this.doingOperate(event);
        //     //     // 存档
        //     //     GameMgr.playerCtr.saveChapterCurr();
        //     // });

        //     // this._resMgr.loadAssetBundle("chapter" + GameMgr.playerCtr.playerModel.currChapter, loadBundleCallback)

        //     this.doingOperate(event);
        // }

        // // 卸载当前场景图
        // if (currSceneObj) {
        //     this.sprBg.spriteFrame = null;
        //     // GameMgr.releaseImage("textures/bg/" + currSceneObj.bg);
        //     this.scheduleOnce(loadCallBack, 0.5);
        // } else {
        //     loadCallBack();
        // }
    }

    /**
     * 切换场景
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
                this.sprBg.node.x = sceneObj.initx;
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
     * 场景
     * @param isLeft 是否向左移动
     */
    moveScene(isLeft: boolean) {
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
}
