import ResMgr from "./ResMgr"
import UIMgr from "./UIMgr"
import AudioMgr from "./AudioMgr"


/**
 * @name BaseView.ts
 * @description 界面基类
 * @author Created by jun on 2018.4.7
 */

export default class BaseView extends cc.Component {

    /** 资源管理器 */
    protected _resMgr: ResMgr = ResMgr.getInstance();

    /** UI管理器 */
    protected _uiMgr: UIMgr = UIMgr.getInstance();

    /** 音效管理器 */
    protected _audioMgr: AudioMgr = AudioMgr.getInstance();
}