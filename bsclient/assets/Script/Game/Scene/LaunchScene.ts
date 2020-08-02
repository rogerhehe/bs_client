import SceneMgr from "../../Core/SceneMgr"
import UIMgr from "../../Core/UIMgr"
import Config from "../../Config"
import GameMgr from "../../GameMgr"

/**
 * @name LaunchScene.ts
 * @description 游戏启动场景
 * @author Created by jun on 2018.4.7
 */

const {ccclass, property} = cc._decorator;

@ccclass
export default class LaunchScene extends cc.Component {

    /** UI常驻根结点 */
    @property(cc.Node)
    uiRootNode: cc.Node = null;

    onLoad() {
        GameMgr.GAME_INIT_FIN = false
        // 设置UI常驻结点
        cc.game.addPersistRootNode(this.uiRootNode);
        UIMgr.getInstance().initRootHolder(this.uiRootNode);
        GameMgr.getInstance().init();
    }

    start() {
        console.log("=========start()=========" + this.name);
        this.scheduleOnce(this._switchScene, 1.5);
    }

    onDestroy() {
        console.log("=========onDestroy()=========" + this.name);
    }

    _switchScene() {
        SceneMgr.getInstance().switchScene(Config.LOADING_SCENE);
    }
}