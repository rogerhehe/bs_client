import GameMgr from "../../../GameMgr";
import CfgMgr from "../../cfg/CfgMgr";

/**
 * @name PlaceInfoView.ts
 * @description 地点介绍界面
 * @author Created by jun on 2020.3.27
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlaceInfoView extends cc.Component {

    /** 时间信息 */
    @property(cc.Label)
    txtTime: cc.Label = null;

    /** 地点信息 */
    @property(cc.Label)
    txtPlace: cc.Label = null;

    _canNext: boolean = false;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickNext.bind(this))
    }

    start() {
        if (this.node["customParam"]) {
            this._showPlaceInfo(<number>this.node["customParam"]);
        } else {
            GameMgr.uiMgr.closeUI(GameMgr.cfg.uiPlaceInfoPanel);
            GameMgr.storyCtr.doStory({ "donext": true });
        }
    }

    onDestroy() {

    }

    onClickNext(event: any) {
        event.stopPropagation();
        if (this._canNext) {
            GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);
            this._switchBranch();
        }
    }

    _showPlaceInfo(placeId: number) {
        this._canNext = false;
        let placeObj = CfgMgr.CfgPlace.places[placeId];
        this.txtPlace.string = placeObj.name;
        this.txtTime.string = placeObj.time;

        this.scheduleOnce(() => {
            this._canNext = true;
            this._switchBranch();
        }, 1.8);
    }

    _switchBranch() {
        // 切换分支
        GameMgr.uiMgr.closeUI(GameMgr.cfg.uiPlaceInfoPanel);
        GameMgr.storyCtr.doStory({ "donext": true });
    }
}