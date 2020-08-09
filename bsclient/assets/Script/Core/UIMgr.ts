import ResMgr from "./ResMgr"

/**
 * @name UIMgr.ts
 * @description 界面管理
 * @author Created by jun on 2018.4.7
 */

export default class UIMgr {
    private static _instance: UIMgr;

    private constructor() {
        this._openUIObjMap = {};
        this._openUICfgMap = {};
    }

    public static getInstance(): UIMgr {
        if (!UIMgr._instance) {
            UIMgr._instance = new UIMgr();
        }
        return UIMgr._instance;
    }

    /** 根节点容器 */
    private _rootHolder: cc.Node;

    /** 打开的UI对象存储Map */
    private _openUIObjMap: { [key: string]: cc.Node; };

    /** 打开的UI配置存储Map */
    private _openUICfgMap: { [key: string]: IUICfg; };

    /**
     * 初始化根容器
     * @param rootNode UI根节点
     */
    public initRootHolder(rootNode: cc.Node) {
        // this._rootHolder = cc.find("UIRoot");
        this._rootHolder = rootNode;
    }

    /**
     * 关闭所有已经打开的UI
     */
    public closeAllUI(ignore) {
        if (this._rootHolder) {
            for (const key in this._openUIObjMap) {
                if (key != ignore && this._openUIObjMap[key]) {
                    console.log("UiMgr closeAllUI,  key: " + key);
                    if (this._openUICfgMap[key]) {
                        this.closeUI(this._openUICfgMap[key]);
                    }
                }
            }
        }
    }

    /**
     * 获得打开的UI对象
     * @param uiCfg UI配置结构体 IUICfg
     */
    public getOpenUI(uiCfg: IUICfg): cc.Node {
        return this._openUIObjMap[uiCfg.prefab];
    }

    /**
     * 打开指定界面 
     * @param uiCfg UI配置结构体 IUICfg
     */
    public openUI(uiCfg: IUICfg, customParam?: any) {
        if (this._rootHolder === null) {
            console.warn("openUI _rootHolder is null!");
            return
        }

        if (uiCfg === undefined) {
            console.warn("openUI uiCfg is undefined!");
            return;
        }

        if (this._openUIObjMap[uiCfg.prefab]) {
            console.warn("openUI ui ", uiCfg.prefab, " is opened already!");
            this.closeUI(uiCfg);
        }

        if (uiCfg.AB) {
            // 加载AssetBundle
            ResMgr.getInstance().loadAssetBundle(uiCfg.AB, (bundle: cc.AssetManager.Bundle) => {
                // 加载Prefab
                ResMgr.getInstance().loadAsset(uiCfg.AB, uiCfg.prefab, cc.Prefab, (prefab: cc.Prefab) => {
                    let newNode = cc.instantiate(prefab);
                    if (uiCfg.zOrder) {
                        newNode.zIndex = uiCfg.zOrder;
                    }
                    newNode.setContentSize(this._rootHolder.getContentSize())
                    newNode.position = new cc.Vec3(0, 0, 0);
                    newNode.parent = this._rootHolder;
                    this._openUIObjMap[uiCfg.prefab] = newNode;
                    this._openUICfgMap[uiCfg.prefab] = uiCfg;
                    if (uiCfg.action != undefined && uiCfg.action) {
                        this.showTween(newNode);
                    }
                });
            });
            console.log("UiMgr openUI: ", uiCfg.prefab, " ok!");
        } else {
            console.warn("UiMgr openUI: ", uiCfg.prefab, " fail!");
        }
    }

    /**
     * 关闭指定界面
     * @param uiCfg  指定UI配置结构体 IUICfg
     */
    public closeUI(uiCfg: IUICfg) {
        if (this._rootHolder === null) {
            console.warn("closeUI _rootHolder is null!");
            return
        }

        if (uiCfg === undefined) {
            console.warn("closeUI uiCfg is undefined!");
            return;
        }

        if (this._openUIObjMap[uiCfg.prefab] === undefined) {
            console.warn("closeUI ", uiCfg.prefab, "is undefined");
            return;
        }

        if (this._openUIObjMap[uiCfg.prefab] === null) {
            console.warn("closeUI ", uiCfg.prefab, "is null");
            return;
        }

        this._openUIObjMap[uiCfg.prefab].destroy();
        this._openUIObjMap[uiCfg.prefab] = null;
        this._openUICfgMap[uiCfg.prefab] = null;
        ResMgr.getInstance().removeAsset(uiCfg.AB, uiCfg.prefab, cc.Prefab);
        if (uiCfg.delAB != undefined && uiCfg.delAB) {
            ResMgr.getInstance().removeAssetBundle(uiCfg.AB);
        }
        console.log("UiMgr closeUI: ", uiCfg.prefab, " ok!");
    }

    /**
     * 打开展示特效
     * @param target  目标对象 
     */
    private showTween(target: cc.Node) {
        target.scale = 0.8;
        cc.tween(target)
            .to(0.05, { scale: 1.1 })
            .to(0.05, { scale: 1.0 })
            .start()
    }
}
