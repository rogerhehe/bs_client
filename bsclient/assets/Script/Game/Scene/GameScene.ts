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
        if (!GameMgr.GAME_INIT_FIN) {
            // 加载通用AssetBundle
            ResMgr.getInstance().loadAssetBundle(UIConfig.COMMON_ASSET, (bundle: cc.AssetManager.Bundle) => {
                UIMgr.getInstance().openUI(UIConfig.UILoadingPanel);
                if (this._checkSdkData()) {
                    UIMgr.getInstance().openUI(UIConfig.UILoginPanel);
                    UIMgr.getInstance().openUI(UIConfig.UIStoryPanel);
                }
            });
        }

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

    private _checkSdkData() {
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