import ResMgr from "./ResMgr"
import UIMgr from "./UIMgr"

/**
 * @name BaseController.ts
 * @description 控制器基类
 * @author Created by jun on 2018.4.7
 */

export default abstract class BaseController {
    protected constructor() { }

    /**
     * 注册消息处理器
     */
    public abstract init(): void;

    /** 资源管理器 */
    protected _resMgr: ResMgr = ResMgr.getInstance();

    /** UI管理器 */
    protected _uiMgr: UIMgr = UIMgr.getInstance();
}