import BaseController from "../../../Core/BaseController";

/**
 * @name PlaybackCtr.ts
 * @description 回放对话管理
 * @author Created by jun on 2019.10.28
 */

export default class PlaybackCtr extends BaseController {
    private static _instance: PlaybackCtr;

    private constructor() {
        super();
    }

    public static getInstance(): PlaybackCtr {
        if (!PlaybackCtr._instance) {
            PlaybackCtr._instance = new PlaybackCtr();
            PlaybackCtr._instance.init();
        }
        return PlaybackCtr._instance;
    }

    public init() {

    }
}
