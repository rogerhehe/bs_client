import UIMgr from "./UIMgr";

/**
 * @name SceneMgr.ts
 * @description 场景管理
 * @author Created by jun on 2018.4.7
 */

export default class SceneMgr {
    private static _instance: SceneMgr;

    private constructor() { }

    public static getInstance(): SceneMgr {
        if (!SceneMgr._instance) {
            SceneMgr._instance = new SceneMgr();
        }
        return SceneMgr._instance;
    }

    /** 上一场景 */
    private _prevScene: string = "";
    /** 当前场景 */
    private _currScene: string = "";

    /**
     * 关闭所有已经打开的UI
     */
    public switchScene(sceneName: string) {
        UIMgr.getInstance().closeAllUI("");

        cc.director.loadScene(sceneName, () => {
            this._prevScene = this._currScene;
            this._currScene = sceneName;
            console.log("SceneMgr switchScene: prev=" + this._prevScene + ", curr=" + this._currScene);
        });
    }
}