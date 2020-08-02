import SceneMgr from "../../Core/SceneMgr"
import Config from "../../Config"

/**
 * @name LoadingScene.ts
 * @description 游戏加载场景
 * @author Created by jun on 2018.4.7
 */

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoadingScene extends cc.Component {

    onLoad() {
        
    }

    start() {
        console.log("=========start()=========" + this.name);

        this.scheduleOnce(this._switchScene, 0.5);
    }

    onDestroy() {
        console.log("=========onDestroy()=========" + this.name);
    }

    _switchScene() {
        SceneMgr.getInstance().switchScene(Config.GAME_SCENE);
    }
}