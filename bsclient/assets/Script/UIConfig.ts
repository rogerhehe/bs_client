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

	//====================CommonAB配置======================//
	/** 弹窗界面1(确定取消) */
	public UIPopupPanel1: IUICfg = { prefab: "prefab/PopupPanel1", AB: "Common", action: true };
	/** 弹窗界面2(tips固定) */
	public UIPopupPanel2: IUICfg = { prefab: "prefab/PopupPanel2", AB: "Common" };
	/** 弹窗界面3(tips漂移) */
	public UIPopupPanel3: IUICfg = { prefab: "prefab/PopupPanel3", AB: "Common" };
	/** 弹窗界面4(倒计时) */
	public UIPopupPanel4: IUICfg = { prefab: "prefab/PopupPanel4", AB: "Common" };
	/** 回放界面 */
	public UIPlaybackPanel: IUICfg = { prefab: "prefab/PlaybackPanel", AB: "Common", zOrder: UIConfig.NORMAL_LAYER };
	/** 独白 */
	public UISoliloquyPanel: IUICfg = { prefab: "prefab/SoliloquyPanel", AB: "Common", zOrder: UIConfig.NORMAL_LAYER };
	/** 过渡遮罩 */
	public UIMaskPanel: IUICfg = { prefab: "prefab/MaskPanel", AB: "Common", zOrder: UIConfig.TOP_LAYER };

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
	public UIEndPanel: IUICfg = { prefab: "prefab/EndPanel", AB: "End", delAB: true, zOrder: UIConfig.TOP_LAYER };
	/** 章节界面 */
	public UIChapterPanel: IUICfg = { prefab: "prefab/ChapterPanel", AB: "Chapter", delAB: true, zOrder: UIConfig.NORMAL_LAYER };
	/** 章节子界面 */
	public UIChapterItem: IUICfg = { prefab: "prefab/ChapterItem", AB: "Chapter" };
	/** 主界面 */
	public UIMainPanel: IUICfg = { prefab: "prefab/MainPanel", AB: "Chapter", delAB: true, zOrder: UIConfig.MAIN_LAYER };
	/** 人物信息 */
	public UIRoleInfoPanel: IUICfg = { prefab: "prefab/RoleInfoPanel", AB: "RoleInfo", delAB: true, zOrder: UIConfig.NORMAL_LAYER };
	/** 主线男主选择界面 */
	public UIRoleBranchPanel: IUICfg = { prefab: "prefab/RoleBranchPanel", AB: "RoleBranch", delAB: true, zOrder: UIConfig.NORMAL_LAYER };

	/** 叙事界面 */
	public static UIStoryPanel: IUICfg = { prefab: "prefab/StoryPanel", AB: "Story", delAB: true, zOrder: UIConfig.BASE_LAYER };
	/** 人物对话 */
	public UIRoleTalkPanel: IUICfg = { prefab: "prefab/RoleTalkPanel", AB: "Story", zOrder: UIConfig.BOTTOM_LAYER };
	/** 选择支线 */
	public UISelectPanel: IUICfg = { prefab: "prefab/SelectPanel", AB: "Story", zOrder: UIConfig.NORMAL_LAYER };
	/** 插图 */
	public UIChatuPanel: IUICfg = { prefab: "prefab/ChatuPanel", AB: "Story", zOrder: UIConfig.NORMAL_LAYER };
	/** CG动画 */
	public UICGPanel: IUICfg = { prefab: "prefab/CGPanel", AB: "Story", zOrder: UIConfig.NORMAL_LAYER };
	/** 地点信息 */
	public UIPlaceInfoPanel: IUICfg = { prefab: "prefab/PlaceInfoPanel", AB: "Story", zOrder: UIConfig.NORMAL_LAYER };
	/** 旁白 */
	public UIAsidePanel: IUICfg = { prefab: "prefab/AsidePanel", AB: "Story", zOrder: UIConfig.HALF_LAYER };
	/** 好感度 */
	public UILoveItem: IUICfg = { prefab: "prefab/LoveItem", AB: "Story" };
}