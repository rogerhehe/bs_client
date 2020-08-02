import BaseController from "../../../Core/BaseController";
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
        }
        return MainCtr._instance;
    }

    public view: MainView = null;
    public speed: number = 1;

    public init() {
        this.speed = 1;
    }

    public setView(view: MainView) {
        this.view = view;
        this.speed = 1;
    }

    public setAuto(auto: boolean) {
        this.view.setAuto(auto);
    }

    public showClothButton(show: boolean) {
        this.view.showClothButton(show);
    }
}
