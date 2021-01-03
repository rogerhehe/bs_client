/** ID,名字,名字背景资源,spine资源名,出现方向,出现动作,出现皮肤 */
/** 第一位item类型ID,第二位章节ID,第三位类型ID,其余为角色动作类型ID */
// 1.malisu 2.yangxiaozhan 3.gutingwei 4.mengshu 5.huangshang 6.jiubao 7.chengyuchuan 
// 8.weisuonan2 9.youqianyin2 10.youzhinan2 11.bowenlang 12.daoyou  13.madingneisi  
// 14.yilianna 15.dama 16.daye 17.fuwu 18.andongniao 19.xiannv 20.laotou

let roleObj = {
    //女主
    211001: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["idle_s", "idle_l"], skin: "" },
    211002: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["shout_s", "shout_l"], skin: "" },//怒
    211003: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["danxin_s", "danxin_l"], skin: "" },//担心
    211004: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["daxiao_s", "daxiao_l"], skin: "" },//大笑
    211005: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["xindong_s", "xindong_l"], skin: "" },//发骚
    211015: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["idle_l", "idle_l"], skin: "" },//正常无言
    211006: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["idle_s", "idle_l"], skin: "t3" },
    211007: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["idle_s", "idle_l"], skin: "t4" },
    211008: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["idle_s", "idle_l"], skin: "t5" },
    211009: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["idle_s", "idle_l"], skin: "xiaoxiangfeng" },//小香风
    
    211011: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["idle_s", "idle_l"], skin: "shuiyi" },//睡衣
    211012: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["shout_s", "shout_l"], skin: "shuiyi" },//睡衣怒
    211013: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["danxin_s", "danxin_l"], skin: "shuiyi" },//睡衣担心
    211014: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["xindong_s", "xindong_l"], skin: "shuiyi" },//睡衣发骚 
    211016: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["idle_l", "idle_l"], skin: "shuiyi" },//睡衣无言
    211017: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["daxiao_s", "daxiao_l"], skin: "shuiyi" },//睡衣大笑

    211021: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["idle_s", "idle_l"], skin: "yijin" },//浴巾
    211022: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["shout_s", "shout_l"], skin: "yijin" },//怒
    211023: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["danxin_s", "danxin_l"], skin: "yijin" },//担心
    211024: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["daxiao_s", "daxiao_l"], skin: "yijin" },//大笑
    211025: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["xindong_s", "xindong_l"], skin: "yijin" },//发骚
    211026: { name: "我", nbg: "story_nbg_nv", sp: "malisu", dir: "L", act: ["idle_l", "idle_l"], skin: "yijin" },//浴巾无言

    //程昱川
    217001: { name: "程昱川", nbg: "story_nbg_cheng", sp: "chengyuchuan", dir: "R", act: ["idle_s", "idle_l"], skin: "t1" },
    217002: { name: "程昱川", nbg: "story_nbg_cheng", sp: "chengyuchuan", dir: "R", act: ["daxiao_s", "daxiao_l"], skin: "t1" },//大笑
    217003: { name: "程昱川", nbg: "story_nbg_cheng", sp: "chengyuchuan", dir: "R", act: ["smile_s", "smile_l"], skin: "t1" },//微笑
    217004: { name: "程昱川", nbg: "story_nbg_cheng", sp: "chengyuchuan", dir: "R", act: ["zhoumei_s", "zhoumei_l"], skin: "t1" },//皱眉
    217005: { name: "程昱川", nbg: "story_nbg_cheng", sp: "chengyuchuan", dir: "R", act: ["zixin_s", "zixin_l"], skin: "t1" },//自信
    217006: { name: "西装男士", nbg: "story_nbg_cheng", sp: "chengyuchuan", dir: "R", act: ["idle_s", "idle_l"], skin: "t1" },
    217007: { name: "西装男士", nbg: "story_nbg_cheng", sp: "chengyuchuan", dir: "R", act: ["smile_s", "smile_l"], skin: "t1" },//微笑
    217040: { name: "西装男士", nbg: "story_nbg_cheng", sp: "chengyuchuan", dir: "R", act: ["zixin_s", "zixin_l"], skin: "t1" },//自信
    
    217009: { name: "程昱川", nbg: "story_nbg_cheng", sp: "chengyuchuan", dir: "R", act: ["idle_l", "idle_l"], skin: "t1" },//无言
    217010: { name: "西装男士", nbg: "story_nbg_cheng", sp: "chengyuchuan", dir: "R", act: ["daxiao_s", "daxiao_l"], skin: "t1" },//大笑

    217021: { name: "程昱川", nbg: "story_nbg_cheng", sp: "chengyuchuan", dir: "R", act: ["idle_s", "idle_l"], skin: "t3" },//哆啦A梦
    217022: { name: "程昱川", nbg: "story_nbg_cheng", sp: "chengyuchuan", dir: "R", act: ["daxiao_s", "daxiao_l"], skin: "t3" },//大笑
    217023: { name: "程昱川", nbg: "story_nbg_cheng", sp: "chengyuchuan", dir: "R", act: ["smile_s", "smile_l"], skin: "t3" },//微笑
    217024: { name: "程昱川", nbg: "story_nbg_cheng", sp: "chengyuchuan", dir: "R", act: ["zhoumei_s", "zhoumei_l"], skin: "t3" },//皱眉
    217025: { name: "程昱川", nbg: "story_nbg_cheng", sp: "chengyuchuan", dir: "R", act: ["idle_l", "idle_l"], skin: "t3" },//无言

    217031: { name: "程昱川", nbg: "story_nbg_cheng", sp: "chengyuchuan", dir: "R", act: ["idle_s", "idle_l"], skin: "t2" },//特殊红西装
    217032: { name: "程昱川", nbg: "story_nbg_cheng", sp: "chengyuchuan", dir: "R", act: ["daxiao_s", "daxiao_l"], skin: "t2" },//大笑
    217033: { name: "程昱川", nbg: "story_nbg_cheng", sp: "chengyuchuan", dir: "R", act: ["smile_s", "smile_l"], skin: "t2" },//微笑
    217034: { name: "程昱川", nbg: "story_nbg_cheng", sp: "chengyuchuan", dir: "R", act: ["zhoumei_s", "zhoumei_l"], skin: "t2" },//皱眉
    217035: { name: "程昱川", nbg: "story_nbg_cheng", sp: "chengyuchuan", dir: "R", act: ["idle_l", "idle_l"], skin: "t2" },//无言

    //顾廷巍
    213001: { name: "顾廷巍", nbg: "story_nbg_gu", sp: "gutingwei", dir: "R", act: ["idle_s", "idle_l"], skin: "t1" },
    213002: { name: "帅气男孩", nbg: "story_nbg_gu", sp: "gutingwei", dir: "R", act: ["idle_s", "idle_l"], skin: "t1" },
    213003: { name: "顾廷巍", nbg: "story_nbg_gu", sp: "gutingwei", dir: "R", act: ["daxiao_s", "daxiao_l"], skin: "t1" },//大笑
    213004: { name: "顾廷巍", nbg: "story_nbg_gu", sp: "gutingwei", dir: "R", act: ["smile_s", "smile_l"], skin: "t1" },//微笑
    213005: { name: "顾廷巍", nbg: "story_nbg_gu", sp: "gutingwei", dir: "R", act: ["zhoumei_s", "zhoumei_l"], skin: "t1" },//皱眉
    213006: { name: "顾廷巍", nbg: "story_nbg_gu", sp: "gutingwei", dir: "R", act: ["zixin_s", "zixin_l"], skin: "t1" },//自信
    213020: { name: "顾廷巍", nbg: "story_nbg_gu", sp: "gutingwei", dir: "R", act: ["idle_l", "idle_l"], skin: "t1" },//无言

    213007: { name: "锦衣卫", nbg: "story_nbg_gu", sp: "gutingwei", dir: "R", act: ["idle_s", "idle_l"], skin: "t2" },//有面具
    213008: { name: "顾廷巍", nbg: "story_nbg_gu", sp: "gutingwei", dir: "R", act: ["idle_s", "idle_l"], skin: "t3" },//无面具
    213009: { name: "顾廷巍", nbg: "story_nbg_gu", sp: "gutingwei", dir: "R", act: ["daxiao_s", "daxiao_l"], skin: "t3" },//大笑
    213010: { name: "顾廷巍", nbg: "story_nbg_gu", sp: "gutingwei", dir: "R", act: ["smile_s", "smile_l"], skin: "t3" },//微笑
    213011: { name: "顾廷巍", nbg: "story_nbg_gu", sp: "gutingwei", dir: "R", act: ["zhoumei_s", "zhoumei_l"], skin: "t3" },//皱眉
    213012: { name: "顾廷巍", nbg: "story_nbg_gu", sp: "gutingwei", dir: "R", act: ["zixin_s", "zixin_l"], skin: "t3" },//自信 废

    213013: { name: "顾廷巍", nbg: "story_nbg_gu", sp: "gutingwei", dir: "R", act: ["idle_s", "idle_l"], skin: "t4" },//机车服
    213014: { name: "顾廷巍", nbg: "story_nbg_gu", sp: "gutingwei", dir: "R", act: ["daxiao_s", "daxiao_l"], skin: "t4" },//机车服大笑
    213015: { name: "顾廷巍", nbg: "story_nbg_gu", sp: "gutingwei", dir: "R", act: ["smile_s", "smile_l"], skin: "t4" },//机车服微笑
    213016: { name: "顾廷巍", nbg: "story_nbg_gu", sp: "gutingwei", dir: "R", act: ["zhoumei_s", "zhoumei_l"], skin: "t4" },//机车服皱眉
    213017: { name: "顾廷巍", nbg: "story_nbg_gu", sp: "gutingwei", dir: "R", act: ["zixin_s", "zixin_l"], skin: "t4" },//机车服自信 废
    213018: { name: "顾廷巍", nbg: "story_nbg_gu", sp: "gutingwei", dir: "R", act: ["idle_l", "idle_l"], skin: "t4" },//机车服无言
    //博文朗
    220001: { name: "博文朗", nbg: "story_nbg_bo", sp: "bowenlang", dir: "R", act: ["idle_s", "idle_l"], skin: "t1" },
    220002: { name: "博文朗", nbg: "story_nbg_bo", sp: "bowenlang", dir: "R", act: ["daxiao_s", "daxiao_l"], skin: "t1" },//大笑
    220003: { name: "博文朗", nbg: "story_nbg_bo", sp: "bowenlang", dir: "R", act: ["smile_s", "smile_l"], skin: "t1" },//微笑
    220004: { name: "博文朗", nbg: "story_nbg_bo", sp: "bowenlang", dir: "R", act: ["zhoumei_s", "zhoumei_l"], skin: "t1" },//皱眉
    220005: { name: "博文朗", nbg: "story_nbg_bo", sp: "bowenlang", dir: "R", act: ["zixin_s", "zixin_l"], skin: "t1" },//自信
    220007: { name: "外国人", nbg: "story_nbg_bo", sp: "bowenlang", dir: "R", act: ["idle_s", "idle_l"], skin: "t1" },//外国人
    220008: { name: "外国人", nbg: "story_nbg_bo", sp: "bowenlang", dir: "R", act: ["daxiao_s", "daxiao_l"], skin: "t1" },//外国人大笑
    220009: { name: "外国人", nbg: "story_nbg_bo", sp: "bowenlang", dir: "R", act: ["smile_s", "smile_l"], skin: "t1" },//外国人微笑
    220010: { name: "外国人", nbg: "story_nbg_bo", sp: "bowenlang", dir: "R", act: ["zhoumei_s", "zhoumei_l"], skin: "t1" },//外国人皱眉
    220011: { name: "外国人", nbg: "story_nbg_bo", sp: "bowenlang", dir: "R", act: ["zixin_s", "zixin_l"], skin: "t1" },//外国人自信
    220012: { name: "外国人", nbg: "story_nbg_bo", sp: "bowenlang", dir: "R", act: ["idle_l", "idle_l"], skin: "t1" },//外国人无言
    220013: { name: "博文朗", nbg: "story_nbg_bo", sp: "bowenlang", dir: "R", act: ["idle_s", "idle_l"], skin: "t1" },//博文朗无言

    220021: { name: "博文朗", nbg: "story_nbg_bo", sp: "bowenlang", dir: "R", act: ["idle_s", "idle_l"], skin: "t2" },//休闲西装正常
    220022: { name: "博文朗", nbg: "story_nbg_bo", sp: "bowenlang", dir: "R", act: ["daxiao_s", "daxiao_l"], skin: "t2" },//休闲西装大笑
    220023: { name: "博文朗", nbg: "story_nbg_bo", sp: "bowenlang", dir: "R", act: ["smile_s", "smile_l"], skin: "t2" },//休闲西装微笑
    220024: { name: "博文朗", nbg: "story_nbg_bo", sp: "bowenlang", dir: "R", act: ["zhoumei_s", "zhoumei_l"], skin: "t2" },//休闲西装皱眉
    220025: { name: "博文朗", nbg: "story_nbg_bo", sp: "bowenlang", dir: "R", act: ["zixin_s", "zixin_l"], skin: "t2" },//休闲西装自信
    220026: { name: "博文朗", nbg: "story_nbg_bo", sp: "bowenlang", dir: "R", act: ["idle_s", "idle_l"], skin: "t2" },//休闲西装无言


    //杨晓东
    212001: { name: "杨晓东", nbg: "story_nbg_nan", sp: "yangxiaozhan", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    212002: { name: "杨晓东", nbg: "story_nbg_nan", sp: "yangxiaozhan", dir: "R", act: ["xixiao_s", "xixiao_l"], skin: "default" },
    212003: { name: "杨晓东", nbg: "story_nbg_nan", sp: "yangxiaozhan", dir: "R", act: ["xixiao_l", "xixiao_l"], skin: "default" },   
    //孟淑
    214001: { name: "孟淑", nbg: "story_nbg_nv", sp: "mengshu", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    214002: { name: "女孩", nbg: "story_nbg_nv", sp: "mengshu", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    //黄尚
    215001: { name: "黄尚", nbg: "story_nbg_gu", sp: "huangshang", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    215002: { name: "油腻男士", nbg: "story_nbg_gu", sp: "huangshang", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    //酒保   
    216001: { name: "酒保", nbg: "story_nbg_nan", sp: "jiubao", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },   
    //相亲男
    218001: { name: "相亲男二", nbg: "story_nbg_nan", sp: "weisuonan", dir: "M", act: [], skin: "" },
    219001: { name: "相亲男一", nbg: "story_nbg_nan", sp: "tuhaonan", dir: "M", act: [], skin: "" },
    211101: { name: "相亲男三", nbg: "story_nbg_nan", sp: "youzhinan", dir: "M", act: [], skin: "" },
    //导游
    211201: { name: "汤米", nbg: "story_nbg_nan", sp: "daoyou", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    211202: { name: "工作人员", nbg: "story_nbg_nan", sp: "daoyou", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    211203: { name: "司机", nbg: "story_nbg_nan", sp: "daoyou", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    //马丁内斯
    211301: { name: "马丁内斯", nbg: "story_nbg_nan", sp: "madingneisi", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    211302: { name: "大叔", nbg: "story_nbg_nan", sp: "madingneisi", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    //伊莲娜
    211401: { name: "伊莲娜", nbg: "story_nbg_nv", sp: "yilianna", dir: "R", act: ["idle_s", "idle_l"], skin: "t1" },
    211402: { name: "美丽女士", nbg: "story_nbg_nv", sp: "yilianna", dir: "R", act: ["idle_s", "idle_l"], skin: "t1" },
    //酒店员工
    211501: { name: "酒店员工", nbg: "story_nbg_nan", sp: "fuwu", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    //大爷
    211601: { name: "大叔", nbg: "story_nbg_nan", sp: "daye", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    //大妈
    211701: { name: "大妈", nbg: "story_nbg_nv", sp: "dama", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    //顾线老头
    211801: { name: "老伯", nbg: "story_nbg_nan", sp: "laotou", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    //安东尼奥
    211901: { name: "安东尼奥", nbg: "story_nbg_nan", sp: "andongnio", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    //驴A
    212101: { name: "二哥", nbg: "story_nbg_nan", sp: "lvzil", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    //驴B
    212201: { name: "小苹果", nbg: "story_nbg_nan", sp: "lvzih", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    212202: { name: "栗色驴", nbg: "story_nbg_nan", sp: "lvzih", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    //安娜（小提琴妹）
    212301: { name: "安娜", nbg: "story_nbg_nv", sp: "xiaotiqin", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    //胡安
    212401: { name: "胡安", nbg: "story_nbg_nan", sp: "huan", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    212402: { name: "男士", nbg: "story_nbg_nan", sp: "huan", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    212403: { name: "画家", nbg: "story_nbg_nan", sp: "huan", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },
    //神秘测试
    212501: { name: "神秘女士", nbg: "story_nbg_nv", sp: "nvzhu_s", dir: "R", act: ["idle_s", "idle_l"], skin: "default" },


}

export class CfgRole {
    // 只有女主角需要预加载
    public role_spine: string[] = ["malisu"];
    public roles: any = roleObj;
}