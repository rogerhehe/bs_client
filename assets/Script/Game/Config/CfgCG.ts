/** ID,CG名称,缩放比例,x坐标,y坐标,动作组 */
/** 第一位item类型ID,第二位章节ID,其余为CGID */

let cgObj = {
    //第一幕
    61001: { name: "guku", scale: 1.5, x: 0, y: -1200, act: ["cg_s", "cg_l"] },
    61002: { name: "feiji", scale: 1, x: 0, y: -1180, act: ["cg_s", "cg_l"] },
    //第二幕
    62001: { name: "men", scale: 1, x: -8, y: -1200, act: ["guanmen_s", "guanmen_l"] },
    //第三幕
    63001: { name: "nvzhuchuangtai", scale: 1, x: -300, y: -1200, act: ["cg_s", "cg_l"], aside: 4 },//巴塞罗那落日

    //第四幕程线 shuixia2
    64101: { name: "shuixia2", scale: 0.7, x: 0, y: -1200, act: ["cg_s", "cg_l"], aside: 1 },//水下之吻文字说明
    //第五幕程线
    65101: { name: "shuixia3", scale: 0.7, x: 0, y: -1200, act: ["cg_s", "cg_l"] },
    65102: { name: "tange", scale: 0.82, x: 150, y: -1200, act: ["cg_s", "cg_l"], aside: 5 },//探戈文字说明
    //第六幕程线
    66101: { name: "CHE", scale: 1, x: 0, y: 0, act: [] },
    66102: { name: "CBE", scale: 1, x: 0, y: 0, act: [] },
    //第四幕顾线
    64201: { name: "yangtaisihui", scale: 1.1, x: -20, y: -1200, act: ["cg_s", "cg_l"], aside: 3 },//摩托车文字说明
    64202: { name: "guqin", scale: 1.4, x: 0, y: -1200, act: ["cg_s", "cg_l"], aside: 8 },//年下攻文字
    //第五幕顾线
    65201: { name: "xiannv", scale: 1, x: -2, y: -1200, act: ["cg_s", "cg_l"] },
    65202: { name: "jiuba", scale: 1.1, x: 15, y: -1200, act: ["cg_s", "cg_l"], aside: 6 },//穿越酒吧文字
    //第六幕顾线
    66201: { name: "GUHE", scale: 1.1, x: 0, y: 0, act: [], aside: 10 },//顾线亲亲文字
    66202: { name: "GUBE", scale: 1, x: 0, y: 0, act: [], aside: 7 },//顾线走人文字
    //第四幕博线
    64301: { name: "jiubahuayu", scale: 1.1, x: 0, y: -1200, act: ["cg_s", "cg_l"] },
    64302: { name: "yuexiameiren", scale: 1, x: 0, y: -1200, act: ["cg_s", "cg_l"], aside: 2 },//月下美人文字说明
    64303: { name: "pkiss", scale: 1.1, x: 0, y: 0, act: [] },
    //第五幕博线
    65301: { name: "tianyuan", scale: 1.1, x: 25, y: -1200, act: ["cg_s", "cg_l"] },
    //第六幕博线
    66301: { name: "BOHE", scale: 1.1, x: 0, y: -0, act: [], aside: 9 },//飞机亲亲文字
    66302: { name: "BOBE", scale: 1.1, x: 0, y: -0, act: [] },
    66303: { name: "youting", scale: 1.1, x: 25, y: -1200, act: ["idle_s", "idle_l"] },


}

let cgAsideObj = {
    1: ["一瞬间，全世界的海水都静止了一般", "他双唇传来的温热蔓延全身，驱走了\n夜晚有海水的冰凉", "我好奇着这时候程昱川的表情，于是\n偷偷半睁着双眼", "原来他也偷偷地在看我，海面透进来\n的光不停地闪烁着，唇际传来的爱意\n越加炽热", "不知过了多久，我们随着水流慢慢朝\n着海面浮去", "好像做了一个永恒的梦", "哪怕醒来了，梦里的爱意和灼热，也\n是永恒的"],
    2: ["你站在月光之下，红色的长裙像环绕\n在你身上的玫瑰的长河", "点点星光之中，你整个人都镀上了一\n层皎洁的银辉", "你看到了博文朗眼中的惊艳，他的瞳\n孔仿佛是你的镜子", "那里面的你是热烈的、绽放的、自由的，\n仿佛卡门的化身"],
    3: ["顾廷巍开着一辆黑色的摩托，手上拿\n着头盔，抬头对你微笑。", "你印象里的那个大孩子，现在却突然\n充满了男子力", "你感到一股滚烫的热流从胸口直冲脑门", "你的心跳得比平时快了"],
    4: ["看着夕阳慢慢沉入大海", "带着咸味的微风轻拂发梢", "夜色逐渐染满了你的房间"],
    5: ["你看着程昱川的眼睛\n他也看着你", "你能感觉到他呼吸的气流\n掌心的温度", "你的心跳的很快"],
    6: ["人群摩肩接踵\n顾廷巍拉起你的手带你往里面走", "你随着他穿越人群\n仿佛进入了一个新的世界"],
    7: ["结束了", "昨晚的告别，冲动的他却意外的安静", "“原谅我这个自私的姐姐吧……”", "你的心底一阵紧缩，像是被一只手摘\n走了一部分", "你知道\n这一部分，永远地留在了巴塞罗那"],
    8: ["嘴被堵住，你感觉嘴里甜甜的酒味一\n下子变得浓郁了起来", "仿佛回到校园的感觉，青涩的甜蜜的\n像刚刚的那颗糖", "他的吻肆无忌惮，他的目光澄澈，没\n有一丝世俗和算计", "我喜欢他被我逗弄脸红还要跟我拌嘴\n的样子", "我喜欢他"],
    9: ["旁边的乘客们都起哄般地鼓起掌来", "你的脸霎时飞上了红霞", "这些好事的乘客们，和小苹果也差不\n多了", "不过，那似乎也不重要了"],
    10: ["顾廷巍没有给你解释的机会\n吻住了你", "这个人\n怎么就不懂得听人把话说完呢", "不过，似乎那也不重要了", "围在他的臂弯里，能闻到他身上那股\n淡淡的、干净的味道", "看见他那清澈狡黠的眼睛\n你感觉自己融化了"],
}

// 0: { 文本 label: { x: -50, y: -300, color: cc.color(248, 248, 255, 255), size: 36 }, 
//      描边 outLine: { color: cc.color(255, 255, 255, 255), width: 0 }, 
//      阴影 shadow: { color: cc.color(0, 0, 0, 255), offset: cc.v2(5, -3), blur: 3 } },
let asideStyleObj = {
    1: { label: { x: -50, y: -300, color: cc.color(248, 248, 255, 255), size: 36 }, shadow: { color: cc.color(0, 0, 0, 255), offset: cc.v2(5, -3), blur: 3 } },
    2: { label: { x: -50, y: -500, color: cc.color(248, 248, 255, 255), size: 40 }, shadow: { color: cc.color(0, 0, 0, 255), offset: cc.v2(5, -3), blur: 3 } },
    3: { label: { x: -50, y: -600, color: cc.color(248, 248, 255, 255), size: 40 }, shadow: { color: cc.color(0, 0, 0, 255), offset: cc.v2(5, -3), blur: 3 } },
    4: { label: { x: -50, y: -700, color: cc.color(248, 248, 255, 255), size: 40 }, shadow: { color: cc.color(0, 0, 0, 255), offset: cc.v2(5, -3), blur: 3 } },
    5: { label: { x: -50, y: -600, color: cc.color(248, 248, 255, 255), size: 40 }, shadow: { color: cc.color(0, 0, 0, 255), offset: cc.v2(5, -3), blur: 3 } },
    6: { label: { x: -50, y: -600, color: cc.color(248, 248, 255, 255), size: 40 }, shadow: { color: cc.color(0, 0, 0, 255), offset: cc.v2(5, -3), blur: 3 } },
    7: { label: { x: -50, y: -500, color: cc.color(151, 255, 230, 255), size: 40 }, shadow: { color: cc.color(0, 0, 0, 255), offset: cc.v2(5, -3), blur: 3 } },
    8: { label: { x: -50, y: -450, color: cc.color(248, 248, 255, 255), size: 40 }, shadow: { color: cc.color(0, 0, 0, 255), offset: cc.v2(5, -3), blur: 3 } },
    9: { label: { x: -50, y: -600, color: cc.color(106, 229, 234, 255), size: 40 }, shadow: { color: cc.color(0, 0, 0, 255), offset: cc.v2(5, -3), blur: 3 } },
    10: { label: { x: -50, y: -450, color: cc.color(248, 248, 255, 255), size: 40 }, shadow: { color: cc.color(0, 0, 0, 255), offset: cc.v2(5, -3), blur: 3 } },
}

export class CfgCG {
    public cg_spine: string[] = []; // 不用预加载了
    public cgs: any = cgObj;
    public cgAside: any = cgAsideObj;
    public cgAsideStyle: any = asideStyleObj;
}