/**
 * @name UIConfig.ts
 * @description UI配置文件
 * @author Created by jun on 2018.4.7
 */

export default class UIConfig {
	/** 通用资源 */
	public static COMMON_ASSET: string = "Common";
	
    /** UI层级 */
	public static BASE_LAYER: number = 5;
	public static BOTTOM_LAYER: number = UIConfig.BASE_LAYER + 1;
	public static HALF_LAYER: number = UIConfig.BOTTOM_LAYER + 1;
	public static MAIN_LAYER: number = UIConfig.HALF_LAYER + 1;
	public static NORMAL_LAYER: number = UIConfig.MAIN_LAYER + 1;
    public static TOP_LAYER: number = UIConfig.NORMAL_LAYER + 1;
    
    /** 加载界面 */
    public static UILoadingPanel: IUICfg = { prefab: "prefab/LoadingPanel", assetBundle: "Loading", atlas: "LoadingAtlas", zOrder: UIConfig.TOP_LAYER };
    /** 登录界面 */
	public static UILoginPanel: IUICfg = { prefab: "prefab/LoginPanel", assetBundle: "Login", zOrder: UIConfig.NORMAL_LAYER };
	/** 叙事界面 */
	public static UIStoryPanel: IUICfg = { prefab: "prefab/StoryPanel", assetBundle: "Story", zOrder: UIConfig.BASE_LAYER };


	
}