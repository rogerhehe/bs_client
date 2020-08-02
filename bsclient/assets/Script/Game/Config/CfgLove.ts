/** ID,好感类型,好感图标资源,好感描述 */
/** 第一位item类型ID,第二位章节ID,其余为好感ID */

let loveObj = {
    71001: { type: "small", icon: "ty_feel_small_ico", txt: "顾廷巍对你的好感略微增加了", value: 1, role: "gu"},
    71002: { type: "psmall", icon: "ty_feel_psmall_ico", txt: "顾廷巍对你的好感增加了", value: 2, role: "gu" },
    71003: { type: "mid", icon: "ty_feel_mid_ico", txt: "顾廷巍对你的好感大大提高了", value: 3,  role: "gu"},
    71004: { type: "big", icon: "ty_feel_big_ico", txt: "顾廷巍对你的好感极大提高了", value: 4,  role: "gu"},
    //增补
    71021: { type: "big", icon: "ty_feel_big_ico", txt: "顾廷巍对你的好感极大提高了", value: 5,  role: "gu"},
    71022: { type: "big", icon: "ty_feel_big_ico", txt: "顾廷巍对你的好感极大提高了", value: 7,  role: "gu"},
    71023: { type: "big", icon: "ty_feel_big_ico", txt: "顾廷巍对你的好感极大提高了", value: 9,  role: "gu"},

    //程昱川
    71005: { type: "small", icon: "ty_feel_small_ico", txt: "程昱川对你的好感略微增加了", value: 1, role: "cheng"},
    71006: { type: "psmall", icon: "ty_feel_psmall_ico", txt: "程昱川对你的好感增加了", value: 2, role: "cheng" },
    71007: { type: "mid", icon: "ty_feel_mid_ico", txt: "程昱川对你的好感大大提高了", value: 3,  role: "cheng"},
    71008: { type: "big", icon: "ty_feel_big_ico", txt: "程昱川对你的好感极大提高了", value: 4,  role: "cheng"},
    //博文朗
    71009: { type: "small", icon: "ty_feel_small_ico", txt: "博文朗对你的好感略微增加了", value: 1, role: "bo"},
    71010: { type: "psmall", icon: "ty_feel_psmall_ico", txt: "博文朗对你的好感增加了", value: 2, role: "bo" },
    71011: { type: "mid", icon: "ty_feel_mid_ico", txt: "博文朗对你的好感大大提高了", value: 3,  role: "bo"},
    71012: { type: "big", icon: "ty_feel_big_ico", txt: "博文朗对你的好感极大提高了", value: 4,  role: "bo"},
    //增补
    71031: { type: "big", icon: "ty_feel_big_ico", txt: "博文朗对你的好感极大提高了", value: 5,  role: "bo"},
    71032: { type: "big", icon: "ty_feel_big_ico", txt: "博文朗对你的好感极大提高了", value: 7,  role: "bo"},
    //西装男士
    71013: { type: "small", icon: "ty_feel_small_ico", txt: "西装男士对你的好感略微增加了", value: 1, role: "cheng"},
    71014: { type: "psmall", icon: "ty_feel_psmall_ico", txt: "西装男士对你的好感增加了", value: 2, role: "cheng" },
    71015: { type: "mid", icon: "ty_feel_mid_ico", txt: "西装男士对你的好感大大提高了", value: 3,  role: "cheng"},
    71016: { type: "big", icon: "ty_feel_big_ico", txt: "西装男士对你的好感极大提高了", value: 4,  role: "cheng"},
    //外国人
    71017: { type: "small", icon: "ty_feel_small_ico", txt: "外国人对你的好感略微增加了", value: 1, role: "bo"},
    71018: { type: "psmall", icon: "ty_feel_psmall_ico", txt: "外国人对你的好感增加了", value: 2, role: "bo" },
    71019: { type: "mid", icon: "ty_feel_mid_ico", txt: "外国人对你的好感大大提高了", value: 3,  role: "bo"},
    71020: { type: "big", icon: "ty_feel_big_ico", txt: "外国人对你的好感极大提高了", value: 4,  role: "bo"},
}

export class CfgLove {
    public loves: any = loveObj;
    /** 顾好感度阀值 */
	public guLoveValue: number = 25;
	/** 程好感度阀值 */
	public chengLoveValue: number = 35;
	/** 博好感度阀值 */
	public boLoveValue: number = 25;
}