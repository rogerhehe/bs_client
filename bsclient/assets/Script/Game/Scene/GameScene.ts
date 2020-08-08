import UIMgr from "../../Core/UIMgr"
import UIConfig from "../../UIConfig"
import GameMgr from "../../GameMgr"
import Config from "../../Config"
import ResMgr from "../../Core/ResMgr"

/**
 * @name GameScene.ts
 * @description 游戏场景
 * @author Created by jun on 2018.4.7
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {

    onLoad() {
        UIMgr.getInstance().openUI(UIConfig.UILoadingPanel);
        if (this.checkSdkData()) {
            UIMgr.getInstance().openUI(UIConfig.UILoginPanel);
            UIMgr.getInstance().openUI(UIConfig.UIStoryPanel);
        }
        // 女主
        let loadBundleCallback = (bundle: cc.AssetManager.Bundle) => {
            // this._resMgr.getAsset(UIConfig.UILoadingPanel.AB, this._bgUrl, cc.SpriteFrame, (spriteFrame) => {
            //     this.sprBg.spriteFrame = <cc.SpriteFrame>spriteFrame;
            // })
        }
        ResMgr.getInstance().getAssetBundle("malisu", loadBundleCallback)
        ResMgr.getInstance().getAssetBundle("yangxiaozhan")
        ResMgr.getInstance().getAssetBundle("gutingwei")
        ResMgr.getInstance().getAssetBundle("chengyuchuan")
        ResMgr.getInstance().getAssetBundle("bowenlang")

        // cc.loader.loadRes("spines/role/malisu/malisu", sp.SkeletonData, (err, skeletonData) => {
        //     GameMgr.resCache.addSkeletonData("malisu", skeletonData);
        // });

        // // 好感度
        // cc.loader.loadRes(GameMgr.cfg.uiLoveItem.prefabUrl, (err, prefab) => {
        //     GameMgr.resCache.addPrefab(GameMgr.cfg.uiLoveItem.prefabUrl, prefab)
        // });

        // // 遮罩
        // cc.loader.loadRes(GameMgr.cfg.uiMaskPanel.prefabUrl, (err, prefab) => {
        //     GameMgr.resCache.addPrefab(GameMgr.cfg.uiMaskPanel.prefabUrl, prefab)
        // });
    }

    start() {
        
    }

    onDestroy() {

    }

    checkSdkData() {
        // SDK校验
        if (!Config.DEBUG && GameMgr.playerCtr.playerModel.code != 0) {
            GameMgr.popupCtr.openPopupMask("SDK校验失败, code=" + GameMgr.playerCtr.playerModel.code);
            return false;
        }

        // 新手玩家，初始化
        if (GameMgr.playerCtr.playerModel.currChapter <= 1 && GameMgr.playerCtr.playerModel.currOperId <= 0) {
            GameMgr.playerCtr.playerModel.currChapter = 1;
            GameMgr.playerCtr.playerModel.currStage = 1;
            GameMgr.playerCtr.playerModel.currOperId = 100545;
            // 存档
            GameMgr.playerCtr.saveChapterCurr();
            GameMgr.playerCtr.reportChapterOpen(101);
        }
        return true;
    }
}