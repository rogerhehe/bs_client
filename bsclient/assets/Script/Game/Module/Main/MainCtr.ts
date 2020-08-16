import BaseController from "../../../Core/BaseController"
import MainView from "./MainView"

/**
 * @name MainCtr.ts
 * @description 主界面管理
 * @author Created by jun on 2019.10.28
 */

export default class MainCtr extends BaseController {
    private static _instance: MainCtr;

    private constructor() {
        super();
    }

    public static getInstance(): MainCtr {
        if (!MainCtr._instance) {
            MainCtr._instance = new MainCtr();
            MainCtr._instance.init();
        }
        return MainCtr._instance;
    }

    public init() {
        
    }

    /** 主菜单界面 */
    private _view: MainView = null;
    set view(view: MainView) {
        this._view = view;
        this._speed = 1;
    }

    /** 自动播放速度 */
    private _speed: number = null;
    set speed(speed: number) {
        this._speed = speed;
        this.speed = 1;
    }

    public showMain() {
        if (this._view) {
            this._view.node.active = true;
        }
    }

    public hideMain() {
        if (this._view) {
            this._view.node.active = false;
        }
    }

    public setAuto(auto: boolean) {
        this._view.setAuto(auto);
    }

    public showClothButton(show: number) {
        if (this._view) {
            if (show) {
                this._view.showClothButton(true);
            } else {
                this._view.showClothButton(false);
            }
        }
    }
}