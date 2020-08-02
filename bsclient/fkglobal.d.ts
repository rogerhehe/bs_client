/**
 * My fuck game global declare file.
 If you has properties exposed on a global variable, place them here.
 You should also place types (interfaces and type alias) here.
 */

declare interface IUICfg {
	/** 名称 */
	name?: string;
	/** 预制资源路径 */
	prefab: string;
	/** AssetBundle路径 */
	assetBundle: string;
	/** 贴图资源路径 */
	atlas?: string;
	/** 附加参数 */
	customParam?: any;
	/** 展示动画 */
	action?: boolean;
	/** 层级 */
	zOrder?: number;
}

declare interface IPopupParam {
	/** 提示内容; */
	txtContent: any;
	/** 确定按钮描述; */
	txtSure?: string;
	/** 取消按钮描述; */
	txtCancel?: string;
	/** 确定回调; */
	callbackSure?: () => void;
	/** 取消回调; */
	callbackCancle?: () => void;
}