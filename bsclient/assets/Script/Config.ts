/**
 * @name Config.ts
 * @description 全局配置文件
 * @author Created by jun on 2018.4.7
 */

export default class Config {
	/** 恋旅行 书籍id:665  厂商id:58  测试环境二*/
	public static DEBUG: boolean = true;
	/** 书籍id */
	public static BOOKID: number = 665;
	/** 厂商id */
	public static COMPANYID: number = 58;

	/** 版本号 */
	public static VERSION: string = "0.0.0";
	/** 服务器地址 */
	public static HOST: string = "ws://127.0.0.1";
	/** 服务器端口 */
	public static PORT: string = "9001";

	/** 当前章节 */
	public static CURR_CHAPTER: number = 1;
	/** 当前章节阶段 */
	public static CURR_STAGE: number = 1;
	/** 当前操作ID */
	public static CURR_OPER_ID: number = 100079;

	//==================音效資源路径配置====================//
	/** 音乐大小本地存储key */
	public static MUSIC_VOLUME: string = "MusicVolume";
	/** 音效大小本地存储key */
	public static SOUND_VOLUME: string = "SoundVolume";

	//====================场景名称配置======================//
	/** 启动场景 */
	public static LAUNCH_SCENE: string = "Launching";
	/** 加载场景 */
	public static LOADING_SCENE: string = "Loading";
	/** 游戏场景 */
	public static GAME_SCENE: string = "Gameing";
}