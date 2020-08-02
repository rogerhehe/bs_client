import BaseController from "../../../Core/BaseController";

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
        }
        return PlaceInfoCtr._instance;
    }

    public init() {
        
    }
}
