/**
 * @name UIConfig.ts
 * @description UI配置文件
 * @author Created by jun on 2018.4.7
 */

export default class UIConfig {
	/** 通用资源 */
	public static COMMON_AB: string = "Common";

	/** UI层级 */
	public static BASE_LAYER: number = 5;
	public static BOTTOM_LAYER: number = UIConfig.BASE_LAYER + 1;
	public static HALF_LAYER: number = UIConfig.BOTTOM_LAYER + 1;
	public static MAIN_LAYER: number = UIConfig.HALF_LAYER + 1;
	public static NORMAL_LAYER: number = UIConfig.MAIN_LAYER + 1;
	public static TOP_LAYER: number = UIConfig.NORMAL_LAYER + 1;

	//====================CommonAB配置======================//
	/** 弹窗界面1(确定取消) */
	public static UIPopupPanel1: IUICfg = { prefab: "prefab/PopupPanel1", AB: UIConfig.COMMON_AB, zOrder: cc.macro.MAX_ZINDEX, action: true };
	/** 弹窗界面2(tips固定) */
	public static UIPopupPanel2: IUICfg = { prefab: "prefab/PopupPanel2", AB: UIConfig.COMMON_AB, zOrder: cc.macro.MAX_ZINDEX };
	/** 弹窗界面3(tips漂移) */
	public static UIPopupPanel3: IUICfg = { prefab: "prefab/PopupPanel3", AB: UIConfig.COMMON_AB, zOrder: cc.macro.MAX_ZINDEX };
	/** 弹窗界面4(倒计时) */
	public static UIPopupPanel4: IUICfg = { prefab: "prefab/PopupPanel4", AB: UIConfig.COMMON_AB, zOrder: cc.macro.MAX_ZINDEX };
	/** 过渡遮罩 */
	public static UIMaskPanel: IUICfg = { prefab: "prefab/MaskPanel", AB: UIConfig.COMMON_AB, zOrder: UIConfig.TOP_LAYER };

	//====================其他AB配置======================//
	/** 加载界面 */
	public static UILoadingPanel: IUICfg = { prefab: "prefab/LoadingPanel", AB: "Loading", delAB: true, zOrder: UIConfig.TOP_LAYER };
	/** 登录界面 */
	public static UILoginPanel: IUICfg = { prefab: "prefab/LoginPanel", AB: "Login", delAB: true, zOrder: UIConfig.NORMAL_LAYER };
	/** 换装界面 */
	public static UIClothPanel: IUICfg = { prefab: "prefab/ClothPanel", AB: "Cloth", delAB: true, zOrder: UIConfig.NORMAL_LAYER };
	/** 电话界面 */
	public static UICallPanel: IUICfg = { prefab: "prefab/CallPanel", AB: "Call", delAB: true, zOrder: UIConfig.NORMAL_LAYER };
	/** 结束界面 */
	public static UIEndPanel: IUICfg = { prefab: "prefab/EndPanel", AB: "End", delAB: true, zOrder: UIConfig.TOP_LAYER };
	/** 章节界面 */
	public static UIChapterPanel: IUICfg = { prefab: "prefab/ChapterPanel", AB: "Chapter", delAB: true, zOrder: UIConfig.NORMAL_LAYER };
	/** 章节子界面 */
	public static UIChapterItem: IUICfg = { prefab: "prefab/ChapterItem", AB: "Chapter" };
	/** 主界面 */
	public static UIMainPanel: IUICfg = { prefab: "prefab/MainPanel", AB: "Main", delAB: true, zOrder: UIConfig.MAIN_LAYER };
	/** 人物信息 */
	public static UIRoleInfoPanel: IUICfg = { prefab: "prefab/RoleInfoPanel", AB: "RoleInfo", delAB: true, zOrder: UIConfig.NORMAL_LAYER };
	/** 主线男主选择界面 */
	public static UIRoleBranchPanel: IUICfg = { prefab: "prefab/RoleBranchPanel", AB: "RoleBranch", delAB: true, zOrder: UIConfig.NORMAL_LAYER };
	/** 回放界面 */
	public static UIPlaybackPanel: IUICfg = { prefab: "prefab/PlaybackPanel", AB: "Soliloquy", delAB: true, zOrder: UIConfig.NORMAL_LAYER };
	/** 独白 */
	public static UISoliloquyPanel: IUICfg = { prefab: "prefab/SoliloquyPanel", AB: "Soliloquy", delAB: true, zOrder: UIConfig.NORMAL_LAYER };

	/** 叙事界面 */
	public static UIStoryPanel: IUICfg = { prefab: "prefab/StoryPanel", AB: "Story", delAB: true, zOrder: UIConfig.BASE_LAYER };
	/** 选择支线 */
	public static UISelectPanel: IUICfg = { prefab: "prefab/SelectPanel", AB: "Story", zOrder: UIConfig.NORMAL_LAYER };
	/** 插图 */
	public static UIChatuPanel: IUICfg = { prefab: "prefab/ChatuPanel", AB: "Story", zOrder: UIConfig.NORMAL_LAYER };
	/** CG动画 */
	public static UICGPanel: IUICfg = { prefab: "prefab/CGPanel", AB: "Story", zOrder: UIConfig.NORMAL_LAYER };
	/** 地点信息 */
	public static UIPlaceInfoPanel: IUICfg = { prefab: "prefab/PlaceInfoPanel", AB: "Story", zOrder: UIConfig.NORMAL_LAYER };
	/** 旁白 */
	public static UIAsidePanel: IUICfg = { prefab: "prefab/AsidePanel", AB: "Story", zOrder: UIConfig.HALF_LAYER };
	/** 好感度 */
	public static UILoveItem: IUICfg = { prefab: "prefab/LoveItem", AB: "Story" };
}