/**
 * @name ResourceCache.ts
 * @description 资源管理
 * @author Created by jun on 2018.6.12
 */

export default class ResourceCache {
    private static _instance: ResourceCache;

    private constructor() {
        this._spriteFrameMap = {};
        this._prefabMap = {};
        this._skeletonDataMap = {};
    }

    public static getInstance(): ResourceCache {
        if (!ResourceCache._instance) {
            ResourceCache._instance = new ResourceCache();
        }
        return ResourceCache._instance;
    }

    /** 位图资源容器 */
    private _spriteFrameMap: { [key: string]: Array<cc.SpriteFrame>; };

    /** 预制资源 */
    private _prefabMap: { [key: string]: cc.Prefab; };

    /** spine数据资源 */
    private _skeletonDataMap: { [key: string]: sp.SkeletonData; };

    /**
     * 缓存资源
     * @param key 资源名
     * @param res 资源数组
     */
    public addSpriteFrame(key: string, res: Array<cc.SpriteFrame>) {
        // res.forEach(element => {
        //     element.addRef();
        // });
        this._spriteFrameMap[key] = res;
    }

    /**
     * 移除缓存资源
     * @param key 资源名
     */
    public removeSpriteFrame(key: string) {
        // this._spriteFrameMap[key].forEach(element => {
        //     element.decRef();
        // });
        this._spriteFrameMap[key] = null;
    }

    /**
     * 获取资源贴图
     * @param key 资源名
     * @param resName 贴图名
     */
    public getSpriteFrame(key: string, resName: string): cc.SpriteFrame {
        if (this._spriteFrameMap[key] != null) {
            for (const iterator of this._spriteFrameMap[key]) {
                if (iterator.name === resName) {
                    return iterator;
                }
            }
        }
        return null;
    }

    /**
     * 缓存预制资源
     * @param key 预制资源唯一标识
     * @param prefab 预制资源对象
     */
    public addPrefab(key: string, prefab: cc.Prefab) {
        this._prefabMap[key] = prefab;
    }

    /**
     * 移除缓存资源
     * @param key 预制资源唯一标识
     */
    public removePrefab(key: string) {
        this._prefabMap[key] = null;
    }

    /**
     * 获取缓存的预制资源
     * @param key 预制资源唯一标识
     */
    public getPrefab(key: string): cc.Prefab {
        if (this._prefabMap[key] != null) {
            return this._prefabMap[key];
        }
        return null;
    }

    /**
     * 缓存spine资源
     * @param key spine资源唯一标识
     * @param skeletonData spine资源对象
     */
    public addSkeletonData(key: string, skeletonData: sp.SkeletonData) {
        this._skeletonDataMap[key] = skeletonData;
    }

    /**
     * 移除缓存资源
     * @param key spine资源唯一标识
     */
    public removeSkeletonData(key: string) {
        this._skeletonDataMap[key] = null;
    }

    /**
     * 获取缓存的spine资源
     * @param key spine资源唯一标识
     */
    public getSkeletonData(key: string): sp.SkeletonData {
        if (this._skeletonDataMap[key] != null) {
            return this._skeletonDataMap[key];
        }
        return null;
    }

    /**
     * 获取AssetBundle资源
     * @param bundleName AssetBundle名称
     * @param callbackFun 加载完成后回调函数
     */
    public loadAssetBundle(bundleName: string, callbackFun?: any) {
        let bundle: cc.AssetManager.Bundle = cc.assetManager.getBundle(bundleName);
        if (bundle && callbackFun) {
            callbackFun(bundle);
        } else {
            cc.assetManager.loadBundle(bundleName, (err, bundle) => {
                console.log("loadAssetBundle => loadBundle => " + bundleName)
                if (callbackFun) {
                    callbackFun(bundle);
                }
            });
        }
    }

    /**
     * 释放所有属于AssetBundle的资源
     * @param bundleName AssetBundle名称
     */
    public removeAssetBundle(bundleName: string) {
        let bundle = cc.assetManager.getBundle(bundleName);
        if (bundle) {
            bundle.releaseAll();
            cc.assetManager.removeBundle(bundle);
            console.log("removeAssetBundle => removeBundle => " + bundleName)
        }
    }

    /**
     * 获得AssetBundle内指定资源
     * @param bundleName AssetBundle名称
     * @param assetPath 资源路径
     * @param assetType 资源类型
     * @param callbackFun 加载完成后回调函数
     */
    public loadAsset(bundleName: string, assetPath: string, assetType: typeof cc.Asset, callbackFun: any, tryAB?: boolean) {
        let bundle = cc.assetManager.getBundle(bundleName);
        if (bundle) {
            bundle.load(assetPath, assetType, (err, asset: cc.Asset) => {
                if (callbackFun) {
                    callbackFun(asset);
                }
                console.log("from [" + bundleName + "AB] load asset [" + assetPath + "] succ");
            });
        } else {
            if (tryAB) {
                this.loadAssetBundle(bundleName, (bundle) => {
                    bundle.load(assetPath, assetType, (err, asset: cc.Asset) => {
                        if (callbackFun) {
                            callbackFun(asset);
                        }
                        console.log("from [" + bundleName + "AB] load asset [" + assetPath + "] succ");
                    });
                })
            } else {
                console.warn("[" + bundleName + "AB] not exist, load asset [" + assetPath + "] fail");
            }
        }
    }

    /**
     * 释放AssetBundle内指定资源
     * @param bundleName AssetBundle名称
     * @param assetPath 资源路径
     * @param assetType 资源类型
     */
    public removeAsset(bundleName: string, assetPath: string, assetType: typeof cc.Asset, tryAB?: boolean) {
        let bundle = cc.assetManager.getBundle(bundleName);
        // 释放AssetBundle内指定路径的资源
        if (bundle) {
            let asset = bundle.get(assetPath, assetType);
            if (asset) {
                asset.decRef();
                cc.assetManager.releaseAsset(asset);
                console.log("from [" + bundleName + "AB] remove asset [" + assetPath + "] succ");
            }
            if (tryAB) {
                this.removeAssetBundle(bundleName);
            }
        }
    }
}