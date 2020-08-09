import BaseController from "../../../Core/BaseController";
import UIConfig from "../../../UIConfig"

/**
 * @name PlaceInfoCtr.ts
 * @description 地点介绍管理
 * @author Created by jun on 2019.10.28
 */

export default class PlaceInfoCtr extends BaseController {
    private static _instance: PlaceInfoCtr;

    private constructor() {
        super();
    }

    public static getInstance(): PlaceInfoCtr {
        if (!PlaceInfoCtr._instance) {
            PlaceInfoCtr._instance = new PlaceInfoCtr();
            PlaceInfoCtr._instance.init();
        }
        return PlaceInfoCtr._instance;
    }

    public init() {
        
    }

    private _placeId: number = 0;
    /** 地点ID */
    get placeId() { return this._placeId; }

    public openPlaceInfo(placeId: number) {
        this._placeId = placeId;
        this._uiMgr.openUI(UIConfig.UIPlaceInfoPanel);
    }
}
