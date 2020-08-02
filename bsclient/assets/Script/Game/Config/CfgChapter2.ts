/** 操作ID,下一步操作ID,场景ID,操作类型,具体操作ID,描述 */
/** 操作类型: -1.无 0.背景移动 1.旁白 2.对话 3.人物介绍 4.分支选择 5.插图 6.CG动画 7.好感度 8.衣服选择 9.电话微信 10.回忆 11.彩蛋*/

let chapterObj = {
    //酒店房间（日）
    200001: { nxId: 200888, scene: 21001, doing: 0, item: 0, music: "Holiday", sound: "", txt: "背景初始化", notopen: 1 },
    200888: { nxId: 200002, scene: 21001, doing: 12, item: 122001, music: "", sound: "", txt: "地点介绍", notopen: 1 },
    200002: { nxId: 200777, scene: 21002, doing: 0, item: 0, music: "", sound: "", txt: "背景移动", notopen: 1 },
    200777: { nxId: 200003, scene: 21003, doing: 0, item: 0, music: "", sound: "", txt: "背景移动", notopen: 1 },
    200003: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "你拉开窗帘，\n俯视着蓝色的海面，\n风吹起一阵阵的浪花。", notopen: 1 },

    200004: { nxId: 1, scene: 21004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]哇！好美！蓝天大海阳光！\n没有老妈的唠叨！这种自由的感觉真好！", notopen: 1 },
    200005: { nxId: 1, scene: 21004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]不过这个酒店的睡衣…风格也太大胆了，\n竟然是半透明的丝质，嗯……", notopen: 1 },
    200006: { nxId: 1, scene: 21004, doing: 2, item: 211014, music: "", sound: "", txt: "[我]林晓璐，你看看你自己，\n真是太性感啦！", notopen: 1 },
    200007: { nxId: 1, scene: 21004, doing: 2, item: 211016, music: "", sound: "lingsheng", txt: "[我]（诶，陌生号码？这是谁？）", notopen: 1 },

    200008: { nxId: 200009, scene: 21004, doing: 9, item: 920001, music: "", sound: "", txt: "电话微信" },

    200009: { nxId: 1, scene: 21004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]搞什么？突然挂断，信号不好么？", notopen: 1 },
    200010: { nxId: 1, scene: 21004, doing: 2, item: 211011, music: "", sound: "doorcell", txt: "[我]（欸？奇怪，我没有叫客房服务啊。）", notopen: 1 },
    200011: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "门铃响起，\n疑惑的你放下电话前去开门。", notopen: 1 },
    //酒店走廊
    200012: { nxId: 1, scene: 22001, doing: 0, item: 0, music: "", sound: "opendoor", txt: "背景初始化", notopen: 1 },
    200013: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "haha", sound: "", txt: "[程昱川]因为现在是早上，\n巴塞罗那的晚餐时间和国内不一样。", notopen: 1 },
    200014: { nxId: 1, scene: 22004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]一般是8点之后。\n如果等到那时候，就太久了。", notopen: 1 },
    200015: { nxId: 1, scene: 22004, doing: 1, item: 0, music: "", sound: "", txt: "你看着门口出现的人，\n惊讶得半天说不出话。", notopen: 1 },
    200016: { nxId: 1, scene: 22004, doing: 2, item: 211013, music: "", sound: "", txt: "[我]（程昱川？！\n   他不是昨天刚下飞机吗？！）", notopen: 1 },
    200017: { nxId: 1, scene: 22004, doing: 2, item: 211016, music: "", sound: "", txt: "[我]……", notopen: 1 },
    //一关门
    200018: { nxId: 1, scene: 22004, doing: 6, item: 62001, music: "", sound: "hitdoor", txt: "CG动画", notopen: 1 },

    200019: { nxId: 1, scene: 22004, doing: 2, item: 217009, music: "", sound: "", txt: "[程昱川]……", notopen: 1 },
    200020: { nxId: 1, scene: 22004, doing: 2, item: 211012, music: "", sound: "opendoor", txt: "[我]你为什么在这里！", notopen: 1 },
    200021: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我为什么不能在这里？", notopen: 1 },
    200022: { nxId: 1, scene: 22004, doing: 2, item: 211012, music: "", sound: "", txt: "[我]我是问为什么我飞了一万多公里，\n一大早你还在我门外！", notopen: 1 },
    200023: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]因为在机场见到你之后，\n我始终无法忘记你的笑容……", notopen: 1 },
    200024: { nxId: 1, scene: 22004, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]所以我决定追随你到天涯海角，\n也许这就是一见钟情吧。", notopen: 1 },
    200025: { nxId: 1, scene: 22004, doing: 2, item: 211016, music: "", sound: "", txt: "[我]…………", notopen: 1 },
    200026: { nxId: 1, scene: 22004, doing: 2, item: 217009, music: "", sound: "", txt: "[程昱川]…………", notopen: 1 },
    200027: { nxId: 1, scene: 22004, doing: 2, item: 211016, music: "", sound: "", txt: "[我]…………", notopen: 1 },
    200028: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]…………\n好吧，开个玩笑，别紧张。", notopen: 1 },
    200029: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]其实，是因为我有紧急公务。\n我们刚告别，我就接到电话要来西班牙。", notopen: 1 },
    200030: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]老板有个重要会议需要我出席。\n所以我就来了。", notopen: 1 },
    200031: { nxId: 1, scene: 22004, doing: 2, item: 211016, music: "", sound: "", txt: "[我]…………\n（为什么听起来这么耳熟。）", notopen: 1 },
    200032: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你怎么在发呆？", notopen: 1 },
    200033: { nxId: 1, scene: 22004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]嗯，没什么！\n那么，你怎么知道我住哪里？", notopen: 1 },
    200034: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]嗯……\n昨天给你推荐酒店的人就是我。", notopen: 1 },
    200035: { nxId: 1, scene: 22004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]额……我被你吓糊涂了。\n那你怎么知道我住这个房间的？", notopen: 1 },
    200036: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]这个是秘密。", notopen: 1 },
    200037: { nxId: 1, scene: 22004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]秘密？", notopen: 1 },
    200038: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]秘密！", notopen: 1 },
    200039: { nxId: 1, scene: 22004, doing: 2, item: 211012, music: "", sound: "", txt: "[我]拜拜，秘密先生！", notopen: 1 },
    //二关门
    200040: { nxId: 1, scene: 22004, doing: 6, item: 62001, music: "", sound: "hitdoor", txt: "CG动画", notopen: 1 },

    200041: { nxId: 1, scene: 22004, doing: 2, item: 217009, music: "", sound: "", txt: "[程昱川]…………", notopen: 1 },
    200042: { nxId: 1, scene: 22004, doing: 1, item: 0, music: "", sound: "doorcell", txt: "叮咚。\n门铃声传来……\n你又打开了门。", notopen: 1 },
    200043: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "opendoor", txt: "[程昱川]开个玩笑，别生气。\n我不过是咨询了一下前台。", notopen: 1 },
    200044: { nxId: 1, scene: 22004, doing: 2, item: 211012, music: "", sound: "", txt: "[我]前台为什么会把我的房间号告诉你？", notopen: 1 },
    200045: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]……我跟前台说，我和你吵架了。\n所以我要一早带着鲜花找你道歉。", notopen: 1 },

    200046: { nxId: 1, scene: 22004, doing: 4, item: 42001, music: "", sound: "", txt: "分支选择", notopen: 1 },
    //A
    200047: { nxId: 1, scene: 22004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]我就知道！", notopen: 1 },
    200048: { nxId: 1, scene: 22004, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]这可是西班牙，\n人们对浪漫故事有着很高的包容心。", notopen: 1 },
    200049: { nxId: 1, scene: 22004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]包括警察吗？要不要我报个警，\n看看这个浪漫故事的结局？", notopen: 1 },
    200050: { nxId: 1, scene: 22004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川被你逗笑了，\n他装出一副一本正经的样子。", notopen: 1 },
    200051: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]……哦，警官先生，就算您能带走我，\n却无法带走我牵挂这位美人的灵魂。", notopen: 1 },
    //嵌套1
    200052: { nxId: 1, scene: 22004, doing: 4, item: 42002, music: "", sound: "", txt: "分支选择", notopen: 1 },
    //a
    200053: { nxId: 200065, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]嘿嘿，那你先收下花。\n不如我们去楼下吃个早餐怎么样？", notopen: 1 },
    //b
    200054: { nxId: 1, scene: 22004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川耸耸肩。", notopen: 1 },
    200055: { nxId: 200065, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你刚起床早餐都没吃，能吐出什么？\n不如跟我去享用一顿丰盛的brunch吧。", notopen: 1 },
    //B
    200056: { nxId: 1, scene: 22004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]程先生，\n你可真是个浑身是戏的男人。", notopen: 1 },
    200057: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]谢谢。对于一个从小希望当演员的\n人来说，这是我听过的最高赞扬。", notopen: 1 },
    //嵌套2
    200058: { nxId: 1, scene: 22004, doing: 4, item: 42003, music: "", sound: "", txt: "分支选择", notopen: 1 },
    //a
    200059: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]还非常体贴呢。" , notopen: 1},
    200060: { nxId: 1, scene: 22004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川把花递给了你。" , notopen: 1},
    200061: { nxId: 200065, scene: 22004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]从现在起，\n女士你可以履行跟我一起吃饭的承诺了。", notopen: 1 },
    //b
    200062: { nxId: 1, scene: 22004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]……哈哈。\n真是个口才出众的姑娘。", notopen: 1 },
    200063: { nxId: 1, scene: 22004, doing: 1, item: 0, music: "", sound: "", txt: "程捧起手中的花束，递了过来。", notopen: 1 },
    200064: { nxId: 1, scene: 22004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]刚才电话里还答应，\n跟我一起用餐的哦。", notopen: 1 },

    200065: { nxId: 1, scene: 22004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]你这个人实在是有点可疑……", notopen: 1 },
    200066: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]别这么冷漠嘛,\n我可是会行走的巴塞罗那攻略。", notopen: 1 },
    200067: { nxId: 1, scene: 22004, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]哪里有好吃的，什么地方最好玩，\n我都很清楚，免费的向导哦。", notopen: 1 },
    200068: { nxId: 1, scene: 22004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]你不是说有紧急公务？\n耽误了会议你们老板会放过你？", notopen: 1 },
    200069: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]嗯……\n我想他一定不会为难我的。", notopen: 1 },

    200070: { nxId: 1, scene: 22004, doing: 4, item: 42004, music: "", sound: "", txt: "分支选择", notopen: 1 },
    //A
    200071: { nxId: 1, scene: 22004, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]哈哈，他知道你这么说应该会挺开心，\n那么，我们就下楼去？", notopen: 1 },
    200072: { nxId: 200080, scene: 22004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]（有个免费的导游也不错）\nOK，今天天气这么好，就一块去走走。", notopen: 1 },
    //B
    200073: { nxId: 1, scene: 22004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川笑嘻嘻的望着你，俏皮又放\n松。但是鬼才相信他的话！跟你溜\n出门的借口一模一样！", notopen: 1 },
    200074: { nxId: 1, scene: 22004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]根本就没有什么商务会议对吧？", notopen: 1 },
    200075: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你疑心太重了吧。\n 为什么这么问？", notopen: 1 },
    200076: { nxId: 1, scene: 22004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]我跟我妈也是这么说的。", notopen: 1 },
    200077: { nxId: 1, scene: 22004, doing: 2, item: 217009, music: "", sound: "", txt: "[程昱川]额……\n 这就是英雄所见略同。", notopen: 1 },
    200078: { nxId: 1, scene: 22004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]你到底来这干什么？", notopen: 1 },
    200079: { nxId: 1, scene: 22004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川的眼中闪过一丝狡黠……", notopen: 1 },

    200080: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]有句话我不知道当讲不……", notopen: 1 },
    200081: { nxId: 1, scene: 22004, doing: 2, item: 211012, music: "", sound: "", txt: "[我]不当讲。", notopen: 1 },
    200082: { nxId: 1, scene: 22004, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]但我一定要讲：\n你的睡衣真不错。", notopen: 1 },
    200083: { nxId: 1, scene: 22004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]咦？", notopen: 1 },
    200084: { nxId: 1, scene: 22004, doing: 1, item: 0, music: "", sound: "", txt: "你低下头，\n半透明的睡衣下，\n内衣若隐若现……", notopen: 1 },
    200085: { nxId: 1, scene: 22004, doing: 1, item: 0, music: "", sound: "", txt: "天哪！你只顾着吃惊，完全没注意\n到，自己穿着这么件透明的睡袍，\n跟一个刚认识的男性聊了半天！", notopen: 1 },
    200086: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]那我就在这里等……", notopen: 1 },
    //三关门
    200087: { nxId: 1, scene: 22004, doing: 6, item: 62001, music: "", sound: "hitdoor", txt: "CG动画", notopen: 1 },
    200088: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]……等你换好衣服出来吧。", notopen: 1 },
    //换装
    200089: { nxId: 1, scene: 22004, doing: 8, item: 0, music: "huanzhuang", sound: "", txt: "换装界面" },

    //布丁餐厅
    200090: { nxId: 200092, scene: 23001, doing: 0, item: 0, music: "haha2", sound: "", txt: "背景初始化" },

    200091: { nxId: 1, scene: 23002, doing: 0, item: 0, music: "", sound: "", txt: "背景向左移动" },//废

    200092: { nxId: 1, scene: 23004, doing: 1, item: 0, music: "", sound: "", txt: "你换好衣服气哼哼地下楼，\n却看见露天餐厅里，\n程昱川正在向你招手……" },

    200093: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我点了松饼和柠檬蛋糕，\n还有这里招牌的牛奶麦片。" },
    200094: { nxId: 1, scene: 23004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]……" },
    200095: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]怎么，还在生气？" },
    200096: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没有……" },
    200097: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]竟然没有反唇相讥？\n看来是真生气了。" },
    200098: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我只是一开始被吓着了，\n才忘记了还穿着睡衣的事。" },
    200099: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]拜托，那是睡衣，又不是内衣。" },
    200100: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]酒店服务员不也经常看到客人穿着\n睡衣么，不用耿耿于怀啊。" },

    200101: { nxId: 1, scene: 23004, doing: 4, item: 42005, music: "", sound: "", txt: "分支选择" },
    //A
    200102: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]对不起。\n我真诚地向你道歉。" },
    200103: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我们的关系还没好到那个地步。" },
    200104: { nxId: 200119, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]作为赔礼，这顿我请了。\n尽管这本来是你感谢我的回报。" },
    //B
    //正常分支
    200105: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]啊？嗯……" },
    200106: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]这真是个刁难人的问题啊，\n说没有的话我就是在撒谎了……" },
    200107: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]但是我更希望，这发生在不会让你\n觉得尴尬的场合。" },
    200108: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]嗯，这个回答还挺绅士的。" },
    //程2
    200109: { nxId: 200119, scene: 23004, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },
    //特殊分支
    200110: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]啊？嗯……" },
    200111: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]这真是个刁难人的问题啊，\n说没有的话我就是在撒谎了……" },
    200112: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]但是我更希望，这发生在不会让你\n觉得尴尬的时间和场合下。" },
    200113: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]嗯，绅士的回答。" },
    //程3
    200114: { nxId: 200119, scene: 23004, doing: 7, item: 71007, music: "", sound: "", txt: "好感度" },
    //C
    200115: { nxId: 1, scene: 23004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]停！\n不准再讨论刚才的事情！" },
    200116: { nxId: 1, scene: 23004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]好……哈哈。" },
    200117: { nxId: 1, scene: 23004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]我警告你程昱川，\n连想也不准想！！！" },
    200118: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]明明是你自己在提……" },

    200119: { nxId: 1, scene: 23004, doing: 1, item: 0, music: "", sound: "", txt: "服务员给你们端上了餐点。两块柠\n檬蛋糕，两块松饼，一杯冒着热气\n的咖啡，还有一杯果汁。" },
    200120: { nxId: 1, scene: 23004, doing: 1, item: 0, music: "", sound: "", txt: "绵软的蛋糕表面淋着微黄的果酱，\n一股清新的水果味勾起了你的食欲。" },
    200121: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]看起来挺丰盛。" },
    200122: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]早午餐嘛，巴塞罗那这边一般\n到1点~3点才吃午餐，晚餐就更晚啦。" },
    200123: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]难怪你说他们8点后才是晚餐时间。" },
    200124: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]没错。我刚来的时候还闹过笑话，\n约人6点一起晚餐，对方满脸都是问号。" },
    200125: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]看来跟中国的习惯都不太一样。" },
    200126: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]是的。" },
    200127: { nxId: 1, scene: 23004, doing: 1, item: 0, music: "", sound: "", txt: "他舀了一勺蛋糕，递到你嘴边。" },
    200128: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]尝尝。\n这个是这家店的招牌特色。" },

    200129: { nxId: 1, scene: 23004, doing: 4, item: 42006, music: "", sound: "", txt: "分支选择" },
    //A
    //正常分支
    200130: { nxId: 1, scene: 23004, doing: 1, item: 0, music: "", sound: "", txt: "你大方地吃了下了程昱川递过来的\n这一口蛋糕，口感绵密，混合着柠\n檬皮的苦与香草籽的香气。" },
    200131: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]怎么样？" },
    200132: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]确实，挺好吃的。" },
    //程1
    200133: { nxId: 200141, scene: 23004, doing: 7, item: 71005, music: "", sound: "", txt: "好感度" },
    //特殊分支
    200134: { nxId: 1, scene: 23004, doing: 1, item: 0, music: "", sound: "", txt: "你大方地吃了下了程昱川递过来的\n这一口蛋糕，口感绵密，混合着柠\n檬皮的苦与香草籽的香气。" },
    200135: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]怎么样？" },
    200136: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]确实，挺好吃的。" },
    //程2
    200137: { nxId: 200141, scene: 23004, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },
    //B
    200138: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我一直在控制饮食，\n吃不了这么高热量的东西。" },
    200139: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你这身材，就吃一次也不会胖的，\n人嘛，最重要的就是开心！" },
    200140: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]什么时候都需要自律，不用了！" },

    200141: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]对了，程先生，你是做什么工作的？" },
    200142: { nxId: 1, scene: 23004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川指了指你的果汁。" },
    200143: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]做这个。" },
    200144: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没明白。\n卖果汁？做玻璃杯？种水果？" },
    200145: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]哈哈哈。是吸管。" },
    200146: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哦？" },
    200147: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你面前的这根吸管，\n有90%的可能是我们公司生产的。" },
    200148: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]为什么是90%的可能性？" },
    200149: { nxId: 1, scene: 23004, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]只是一个简单的推算：\n因为全世界90%的吸管产自我们公司。" },
    200150: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哇喔！\n那你在你们公司是做什么的？" },
    200151: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]什么都做。" },
    200152: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]一般会这么说自己的只有两种人：\n不说实话的骗子，或者是老板。" },
    200153: { nxId: 1, scene: 23004, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]你说的这不就是一个人吗？" },
    200154: { nxId: 1, scene: 23004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]啊哈哈！" },

    200155: { nxId: 1, scene: 23004, doing: 4, item: 42007, music: "", sound: "", txt: "分支选择" },
    //A
    200156: { nxId: 1, scene: 23004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]我们已经到了可以\n互相说过往的关系了吗？" },
    200157: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]随口问问，现在不想听了。" },
    200158: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]晚了，我这性格随我妈，\n从小她就教我，做人一定要想办法开心。" },
    200159: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]让自己开心，也让别人开心，\n在哈佛的时候，我还是脱口秀演员呢。" },
    200160: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哈佛这么厉害？你学的什么专业？" },
    200161: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]人工智能学科。" },
    200162: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哦！好酷!\n那你为什么会有一家吸管公司？" },
    200163: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]现在说不上是我的，是我父亲的产业。\n两年前我才开始接手公司的一些管理。" },
    200164: { nxId: 200168, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那不就等于是你的么？" },
    //B
    200165: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]严格来说，还不算是，我爸才是。" },
    200166: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我很小就出去留学了,\n两年前才回到国内。" },
    200167: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……原来还是个大少爷。\n那你为什么一直呆在国外？" },

    200168: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]小时候我很不喜欢家族生意。\n而且这还意味着一个强势的父亲。" },
    200169: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]绝大部分人都会羡慕你的家境。" },
    200170: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我不能虚伪的说不。\n但从小对我的管束实在太多了。" },
    200171: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]永远都有补不完的课，读不完的书。" },
    200172: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]所以你并不想回家继承公司？" },
    200173: { nxId: 1, scene: 23004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]毕业后，我在美国办了一家小公司。\n我还是想做点自己喜欢的事情。" },
    200174: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不知道怎么说你们这些富家子弟，\n有钱玩起叛逆来都叫理想主义。" },
    200175: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]要是换了我，嗯……\n我肯定对家里言听计从。" },
    200176: { nxId: 1, scene: 23004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川放下手上的咖啡杯，认真地\n盯着你的脸看了一会。你被他看得\n有点心慌。" },
    200177: { nxId: 1, scene: 23004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你……你看什么……" },
    200178: { nxId: 1, scene: 23004, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]希望伯母下次打电话给你的时候，\n你也能对她老人家言听计从。" },
    200179: { nxId: 1, scene: 23004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]额……" },
    200180: { nxId: 1, scene: 23004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（可恶的程昱川！都怪老妈的催命\n   相亲call，这下丢人丢大发了啊！）" },
    200181: { nxId: 1, scene: 23004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川将了你一军很得意。和你有\n说有笑地吃完了早餐，好久没有过\n这样有趣的聊天了。" },
    200182: { nxId: 1, scene: 23004, doing: 1, item: 0, music: "", sound: "", txt: "谈话间，你听从了程昱川的建议，\n准备前往著名商业街格拉西亚大道。" },
    //格拉西亚大道
    200183: { nxId: 200185, scene: 24001, doing: 0, item: 0, music: "SP", sound: "", txt: "背景初始化" },
    //200184: { nxId: 1, scene: 24002, doing: 0, item: 0, music: "", sound: "", txt: "背景向左移动" },
    200185: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "一踏上格拉西亚大道，你立刻感觉\n到了浓烈的西班牙风情。" },

    200186: { nxId: 1, scene: 24004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]格拉西亚大道，西班牙的第五大道，\n巴塞罗那最著名的大街。" },
    200187: { nxId: 1, scene: 24004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]这条街上有两座世界文化遗产，\n以及好几座西班牙国家遗产。" },
    200188: { nxId: 1, scene: 24004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]同时也是时尚与艺术之街，\n女士们的购物天堂。" },
    200189: { nxId: 1, scene: 24004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]听上去我的钱包要遭殃的样子。" },
    200190: { nxId: 1, scene: 24004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]怎么你打算疯狂购物吗？" },
    200191: { nxId: 1, scene: 24004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没有。贫穷使我自律。" },
    200192: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "说话之间，你们的车到了。" },
    200193: { nxId: 1, scene: 24004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我来吧，和美女同行，\n怎么能让美女付钱？" },

    200194: { nxId: 1, scene: 24004, doing: 4, item: 42008, music: "", sound: "", txt: "分支选择" },
    //A
    //正常分支
    200195: { nxId: 1, scene: 24004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你跟一般的女生真的不一样。" },
    200196: { nxId: 1, scene: 24004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]怎么，你了解很多女生？" },
    200197: { nxId: 1, scene: 24004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]不不不，我自小在山里长大，\n女人是什么，一无所知。" },
    200198: { nxId: 1, scene: 24004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]就你贫！" },
    //程1
    200199: { nxId: 200208, scene: 24004, doing: 7, item: 71005, music: "", sound: "", txt: "好感度" },
    //特殊分支
    200200: { nxId: 1, scene: 24004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你跟一般的女生真的不一样。" },
    200201: { nxId: 1, scene: 24004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]怎么，你了解很多女生？" },
    200202: { nxId: 1, scene: 24004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]不不不，我自小在山门里长大，\n女人是什么，一无所知。" },
    200203: { nxId: 1, scene: 24004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]就你贫！" },
    200204: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "你掏出钱包，付了钱。" },
    //程2
    200205: { nxId: 200208, scene: 24004, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },
    //B
    200206: { nxId: 1, scene: 24004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是你展现绅士风度的时候了。" },
    200207: { nxId: 1, scene: 24004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我的荣幸。" },

    200208: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川率先下了车，\n绅士地对你伸出手。" },
    200209: { nxId: 1, scene: 24004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]小心脚下，我扶着你。" },

    200210: { nxId: 1, scene: 24004, doing: 4, item: 42009, music: "", sound: "", txt: "分支选择" },
    //A
    200211: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "你把手放在了程昱川温暖有力的掌\n心，忽然感到自己掌心被轻轻地挠\n了一下。" },
    200212: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "你反射性地握紧了手，\n却抓住了程昱川的手指。" },
    200213: { nxId: 1, scene: 24004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]哇哦，林晓璐，你占我便宜！" },
    200214: { nxId: 200219, scene: 24004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]喂，程昱川！\n你贼喊抓贼啊！" },
    //B
    200215: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "你无视程昱川的手，穿着高跟鞋跳\n下车，稳稳地站着。" },
    200216: { nxId: 1, scene: 24004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谢谢，\n不过我喜欢自己来！" },
    200217: { nxId: 1, scene: 24004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]偶尔也给我一点表现的机会吧……" },
    200218: { nxId: 1, scene: 24004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]你用得着吗？你一个人可以演完全场。" },
    //格拉西亚街道
    200219: { nxId: 1, scene: 25001, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    200220: { nxId: 1, scene: 25004, doing: 1, item: 0, music: "", sound: "", txt: "街边贴着五彩碎瓷片的长椅，造型\n繁复的铸铁街灯，精美的铁艺栏杆\n像从混凝土长出来的一样。" },
    200221: { nxId: 1, scene: 25004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这里好多大品牌店啊。会有打折吗？" },
    200222: { nxId: 1, scene: 25004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]刚才谁说什么什么自律来着？\n现在就把持不住了？" },

    200223: { nxId: 1, scene: 25004, doing: 4, item: 42010, music: "", sound: "", txt: "分支选择" },
    //A
    200224: { nxId: 200230, scene: 25004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]程先生，\n本小姐看上去是那么肤浅的女人吗？" },
    //B
    200225: { nxId: 1, scene: 25004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]程昱川先生，\n恐怕你需要好好了解一下女性了。" },
    200226: { nxId: 1, scene: 25004, doing: 2, item: 211005, music: "", sound: "", txt: "[我]对女人而言，\n购物也是一种精神追求。" },
    200227: { nxId: 1, scene: 25004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不然为什么艺术博物馆\n总是和奢侈品建在一起呢？" },
    200228: { nxId: 1, scene: 25004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]……\n我一时失言，请勿见怪。" },
    200229: { nxId: 1, scene: 25004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没关系。\n放心吧，我懂得凡事适可而止。" },
    //商店1
    200230: { nxId: 1, scene: 26001, doing: 0, item: 0, music: "shopping", sound: "", txt: "背景初始化" },
    200231: { nxId: 1, scene: 26004, doing: 2, item: 211005, music: "", sound: "", txt: "[我]哇！\n今春的新款！太漂亮了！" },
    200232: { nxId: 1, scene: 26004, doing: 2, item: 217009, music: "", sound: "", txt: "[程昱川]……" },
    //商店2
    200233: { nxId: 1, scene: 27001, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    200234: { nxId: 1, scene: 27004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]等我一下！\n打折季打折季！！" },
    200235: { nxId: 1, scene: 27004, doing: 2, item: 217009, music: "", sound: "", txt: "[程昱川]……" },
    //商店3
    200236: { nxId: 1, scene: 28001, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    200237: { nxId: 1, scene: 28004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哇！\n我的购物之魂在燃烧！" },
    200238: { nxId: 1, scene: 28004, doing: 2, item: 217009, music: "", sound: "", txt: "[程昱川]……" },
    //格拉西亚街道
    200239: { nxId: 1, scene: 25001, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    200240: { nxId: 1, scene: 25004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你还真是精力旺盛……" },
    200241: { nxId: 1, scene: 25004, doing: 2, item: 211005, music: "", sound: "", txt: "[我]实在是不好意思，\n但是这里真的太棒啦！" },
    200242: { nxId: 1, scene: 25004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]我又超支了……没关系！\n赚钱嘛就是为了让自己开心！" },
    200243: { nxId: 1, scene: 25004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]女人购物的亢奋，我是不能理解了……" },
    200244: { nxId: 1, scene: 25004, doing: 2, item: 211001, music: "SP", sound: "", txt: "[我]咦？\n这里是什么地方？" },
    //War
    200245: { nxId: 1, scene: 29001, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    200246: { nxId: 1, scene: 29004, doing: 1, item: 0, music: "", sound: "", txt: "你的眼前出现了一片看上去非常奇\n怪的建筑群。" },
    200247: { nxId: 1, scene: 29004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]著名的\n“Manzana de la Discordia”" },
    200248: { nxId: 1, scene: 29004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]什么？" },
    200249: { nxId: 1, scene: 29004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]翻译过来就是“不和谐街区”" },
    200250: { nxId: 1, scene: 29004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]西班牙语中，Manzana既是\n街区的意思，又有苹果的意思。" },
    200251: { nxId: 1, scene: 29004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]所以，这里也有\n“导致纷争的金苹果”的含义。" },

    200252: { nxId: 1, scene: 29004, doing: 4, item: 42011, music: "", sound: "", txt: "分支选择" },
    //A
    200253: { nxId: 1, scene: 29004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我听过这故事，希腊神话里的三个女神，\n为一个“给最美女神”的金苹果明争暗斗。" },
    200254: { nxId: 1, scene: 29004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]把特洛伊城都毁掉了，\n但跟这有什么关系？" },
    200255: { nxId: 200270, scene: 29004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]因为和金苹果的故事一样，\n需要争夺“谁是最美的”。" },
    //B
    200256: { nxId: 1, scene: 29004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]金苹果？" },
    200257: { nxId: 1, scene: 29004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]希腊神话中，天后赫拉，\n智慧女神雅典娜和美神阿佛洛狄特。" },
    200258: { nxId: 1, scene: 29004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]在别人的婚礼上，为抢一个金苹果，\n分别向特洛伊的王子帕里斯许愿。" },
    200259: { nxId: 1, scene: 29004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]天后赫拉许以他至高的权力，\n雅典娜许以他无上的智慧……" },
    200260: { nxId: 1, scene: 29004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]而美神，\n许诺让他娶世上最美的女人。" },
    200261: { nxId: 1, scene: 29004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我猜一下，\n这男人选了最后一个？" },
    200262: { nxId: 1, scene: 29004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]真聪明。" },
    200263: { nxId: 1, scene: 29004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是能写进神话里的男人都太好猜了。" },
    200264: { nxId: 1, scene: 29004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]哈哈哈，对，\n帕里斯的愿望达成了，" },
    200265: { nxId: 1, scene: 29004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]他拐跑了最美的女人海伦，\n海伦当时已经是另一位国王的妻子。" },
    200266: { nxId: 1, scene: 29004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我原来只以为神话里的男人蠢，\n没想到口味还这么重。" },
    200267: { nxId: 1, scene: 29004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]最后希腊大军压境，\n特洛伊城被一把火烧光了。" },
    200268: { nxId: 1, scene: 29004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这个苹果有什么特殊的魅力吗？" },
    200269: { nxId: 1, scene: 29004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]得到这枚苹果，\n就能得到“最美的女神”的称号！" },

    200270: { nxId: 1, scene: 29004, doing: 4, item: 42012, music: "", sound: "", txt: "分支选择" },
    //A
    200271: { nxId: 1, scene: 29004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]为什么要在意这种无意义的称谓，\n美本来就应该是多元的。" },
    200272: { nxId: 1, scene: 29004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]是，你说的对，\n她们就是太在意皮囊了。" },
    200273: { nxId: 1, scene: 29004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]难道你不在意外貌吗？" },
    200274: { nxId: 1, scene: 29004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]在意。但是我同样看中才华和人品。" },
    200275: { nxId: 200278, scene: 29004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]虚伪！\n你还是说说这里为什么叫金苹果吧。" },
    //B
    200276: { nxId: 1, scene: 29004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]金苹果这个故事最好的地方，\n就是说明颜值即正义。" },
    200277: { nxId: 1, scene: 29004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]只要你足够好看，\n不但可以倾国倾城，还能祸害苍生。" },

    200278: { nxId: 1, scene: 29004, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]哈哈哈，这个比喻用在这里，\n是因为这有三位建筑大师的杰作，" },
    200279: { nxId: 1, scene: 29004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]就像这三位女神争夺的头衔一样，\n不分伯仲。" },
    //狮子与桑树之家
    200280: { nxId: 1, scene: 21101, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    200281: { nxId: 1, scene: 21104, doing: 1, item: 0, music: "", sound: "", txt: "程昱川走到街边的一栋建筑前，指\n向这栋缠绕着美丽装饰的房子，讲\n述了起来……" },
    200282: { nxId: 1, scene: 21104, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]狮子与桑树之家（Casa Lleó Morera），\n争夺金苹果的第一位女神。" },
    200283: { nxId: 1, scene: 21104, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]设计者是号称“花之建筑师”的大\n建筑师蒙达内尔。" },
    200284: { nxId: 1, scene: 21104, doing: 1, item: 0, music: "", sound: "", txt: "你抬起头，果然，屋子栏杆，墙壁\n和柱顶上的雕刻，都是桑树叶和桑\n树花的造型。" },
    200285: { nxId: 1, scene: 21104, doing: 1, item: 0, music: "", sound: "", txt: "这些极其精致华美的铁艺，在绿树\n蓬荫衬托之下，显得格外庄重华丽。" },
    200286: { nxId: 1, scene: 21104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]为什么叫狮子与桑树之家？\n是因为雕花里这些桑树和狮子吗？" },
    200287: { nxId: 1, scene: 21104, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]是，房子是一位母亲留给儿子的遗产，\n他就叫莫雷拉.利奥。" },
    200288: { nxId: 1, scene: 21104, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]莫雷拉（Morera）是主人的姓氏，\n同时也是桑树的意思，" },
    200289: { nxId: 1, scene: 21104, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]而利奥（Lleó ），也是狮子的意思。\n所以雕花里就有桑叶和狮子喽。" },

    200290: { nxId: 1, scene: 21104, doing: 4, item: 42013, music: "", sound: "", txt: "分支选择" },
    //A
    200291: { nxId: 1, scene: 21104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你对这些历史建筑很了解嘛。" },
    200292: { nxId: 1, scene: 21104, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]过奖，只是一点业余爱好而已。" },
    200293: { nxId: 200296, scene: 21104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]看不出来啊，你还真懂不少！" },
    //B
    200294: { nxId: 1, scene: 21104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我很喜欢这个名字，\n翻译过来格外有一种汉语的美感。" },
    200295: { nxId: 1, scene: 21104, doing: 1, item: 0, music: "", sound: "", txt: "程昱川走到你身边，\n抬起头仰望着建筑感慨地说。" },

    200296: { nxId: 1, scene: 21104, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]可惜，现在的业主已经把这里关掉了，\n我们只能在外面看看。" },
    200297: { nxId: 1, scene: 21104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]房子里面还有什么吗？" },
    200298: { nxId: 200300, scene: 21104, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]有非常漂亮的彩色画廊，\n还有主人为了纪念孩子而刻的故事浮雕。" },
    200300: { nxId: 1, scene: 21104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]故事浮雕？" },
    200301: { nxId: 1, scene: 21104, doing: 2, item: 217001, music: "baby", sound: "", txt: "[程昱川]传说当时有一个贵族去打猎，\n留下奶妈照看刚出生不久的孩子。" },
    200302: { nxId: 1, scene: 21104, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]结果奶妈睡着了，\n壁炉的火烧了毯子，孩子葬身火中。" },
    200303: { nxId: 1, scene: 21104, doing: 2, item: 211003, music: "", sound: "", txt: "[我]怎么会这样？\n孩子好可怜……后来怎么样了？" },
    200304: { nxId: 1, scene: 21104, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]奶妈醒过来吓坏了，" },
    200305: { nxId: 1, scene: 21104, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]她无法原谅自己的过失，\n不停的向圣母祈祷。" },
    200306: { nxId: 1, scene: 21104, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]最后，圣母被她打动，于是把孩子\n复活了。" },
    200307: { nxId: 1, scene: 21104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]还好是个美好的结局。" },
    200308: { nxId: 1, scene: 21104, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]但是事实从来不会像传说那么美好……" },
    200309: { nxId: 1, scene: 21104, doing: 2, item: 211003, music: "", sound: "", txt: "[我]你是说……" },
    200310: { nxId: 1, scene: 21104, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]屋主之所以把这个故事刻在客厅里，\n就是为了纪念自己失去的孩子。" },
    200311: { nxId: 1, scene: 21104, doing: 2, item: 211003, music: "", sound: "", txt: "[我]原来这里竟然发生过这么悲惨的故事。" },
    200312: { nxId: 1, scene: 21104, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]是啊，这位父亲把这个故事刻在客厅里，" },
    200313: { nxId: 1, scene: 21104, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]他多么希望有一天，\n自己的孩子能重回自己身边，" },
    200314: { nxId: 1, scene: 21104, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]看着孩子在膝下嬉戏欢笑，\n然后叫自己一声爸爸呢？" },
    200315: { nxId: 1, scene: 21104, doing: 1, item: 0, music: "", sound: "", txt: "说到这里，你望向程昱川。他望着\n狮子与桑树之家陷入了沉思，脸上\n没有平常的调侃，反而格外肃穆。" },
    200316: { nxId: 1, scene: 21104, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（这人平时看起来没个正经，\n   没想到也有如此感性的一面。）" },
    200317: { nxId: 1, scene: 21104, doing: 1, item: 0, music: "", sound: "", txt: "片刻的沉默之后，\n程昱川回过神来，看着你一笑。" },
    200318: { nxId: 1, scene: 21104, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]想起了一些事，真是不好意思。\n跟我来吧。" },
    //阿马特耶之家
    200319: { nxId: 1, scene: 21201, doing: 0, item: 0, music: "house", sound: "", txt: "背景初始化" },
    200320: { nxId: 1, scene: 21204, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]这是阿玛特耶之家（Casa Amatller）\n金苹果之争的第二位女神。" },
    200321: { nxId: 1, scene: 21204, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]这栋楼的故事就……更加八卦了。" },
    200322: { nxId: 1, scene: 21204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]八卦？快说！" },
    200323: { nxId: 1, scene: 21204, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]原本这里只是个破旧的楼房，\n巧克力大亨阿玛特耶买下了它，" },
    200324: { nxId: 1, scene: 21204, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]请了建筑大师卡达法尔克，\n把原本普通的建筑翻新成了现在的样子。" },

    200325: { nxId: 1, scene: 21204, doing: 4, item: 42014, music: "", sound: "", txt: "分支选择" },
    //A
    200326: { nxId: 1, scene: 21204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这栋建筑才是“不和谐”的根源吧，\n尤其这个顶，难看死了。" },
    200327: { nxId: 1, scene: 21204, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]那个顶按今天的标准，\n就是个违章建筑。" },
    200328: { nxId: 200332, scene: 21204, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]当初是房主想做这条街上最高的建筑，\n建筑师才额外在外面加了这么一圈。" },
    //B
    200329: { nxId: 1, scene: 21204, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]有眼光，\n阿马特耶之家确实有着浓郁的中东特色，" },
    200330: { nxId: 1, scene: 21204, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]当然，在那个时代的西班牙，\n中东风是流行的时尚。" },
    200331: { nxId: 1, scene: 21204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]难怪。" },

    200332: { nxId: 1, scene: 21204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你不是说这里有八卦故事？\n快说说！" },
    200333: { nxId: 1, scene: 21204, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]边走边说吧。\n我们要不要买票进去看看？" },
    //场景分支
    200334: { nxId: 1, scene: 21204, doing: 4, item: 42015, music: "", sound: "", txt: "分支选择" },
    //大A 切换阿马特耶之家内部
    200335: { nxId: 1, scene: 21301, doing: 0, item: 0, music: "haha2", sound: "", txt: "背景初始化" },
    200336: { nxId: 1, scene: 21304, doing: 2, item: 211002, music: "", sound: "", txt: "[我]什么！24欧！抢劫啊！" },
    200337: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]嗯，因为是星期天，比平时还贵了5欧。" },
    200338: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]刚才是谁说要进来看的？" },
    200339: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你看我干什么？是你自己啊。" },
    200340: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我的钱钱！" },
    200341: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你这么心疼，不如我来买……" },
    200342: { nxId: 1, scene: 21304, doing: 2, item: 211002, music: "", sound: "", txt: "[我]程昱川你给我住手。\n你想干什么？" },
    200343: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]什么我想干什么？" },
    200344: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你们这些人，有钱了不起是吧？" },
    200345: { nxId: 1, scene: 21304, doing: 2, item: 211002, music: "", sound: "", txt: "[我]看不起我们穷人是不是？\n我不允许你这么羞辱我！" },
    200346: { nxId: 1, scene: 21304, doing: 2, item: 217009, music: "", sound: "", txt: "[程昱川]你这个反应是不是有点……" },
    200347: { nxId: 1, scene: 21304, doing: 2, item: 211002, music: "", sound: "", txt: "[我]我不允许你用这么点钱羞辱我！\n 哼！" },
    200348: { nxId: 1, scene: 21304, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]……\n我忽然觉得你也很有脱口秀天赋。" },
    200349: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我钱都掏了，\n你赶紧说这个房子的八卦。" },
    200350: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "SP", sound: "", txt: "[程昱川]好，不过这个故事有点长。\n最早的巴塞罗那，只有现在的老城区，" },
    200351: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]现在这条格拉西亚大道，于1860年扩建，\n当时还是一个偏僻的村庄。" },
    200352: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]让我想起了上海的浦东新区。" },
    200353: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]没错，新城区吸引的，就是工业革\n命中钱包鼓起来的新贵们。" },
    200354: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这栋房子的主人是？" },
    200355: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]房主是西班牙最早的巧克力大亨，\n安东尼奥.阿马特耶。" },
    200356: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]巧克力？\n我就超爱吃。" },
    200357: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]阿马特耶先生不但腰缠万贯，\n有美丽的妻子和可爱的女儿，" },
    200358: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]自己还是一位得过很多大奖的摄影师。" },

    200359: { nxId: 1, scene: 21304, doing: 4, item: 42016, music: "", sound: "", txt: "分支选择" },
    //A 
    200360: { nxId: 200362, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我在等你的“但是”……" },
    //B
    200361: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]农夫，山泉，有点田。\n这阿马特耶先生也太幸福了啊。" },

    200362: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]但是，有一天，\n他老婆突然跟一个意大利男高音跑了。" },
    200363: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]啥？然后呢？" },
    200364: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]没然后了。\n阿马特耶夫人再也没有回来。" },
    200365: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]额，我还以为是个最终挽回了爱情\n的故事。" },
    200366: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你想想看，一个整天不是在工厂里，" },
    200367: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]就是到处摄影的男人，\n能有多少在家的时间？" },

    200368: { nxId: 1, scene: 21304, doing: 4, item: 42017, music: "", sound: "", txt: "分支选择" },
    //A
    200369: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]原来是这样。" },
    200370: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你看这个房子，典型的哥特风格。\n全是大石头建筑，是不是感觉很阴郁？" },
    200371: { nxId: 200374, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]她常年住在这里，只有女儿相伴，\n想必十分的寂寞吧。" },
    //B
    200372: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]难怪大家说单反穷三代，摄影毁一生。\n还蛮有道理的。" },
    200373: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]哈哈哈。" },

    200374: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]再甜美的巧克力，\n也没能留住他的巧克力夫人……" },
    200375: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那后来呢，\n阿玛特耶先生去找过自己的太太吗？" },
    200376: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]可能有吧，\n但是奇怪的是，这家人也没怎么变化。" },
    200377: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]阿玛特耶先生该赚钱赚钱，该摄影摄影，\n也没有再结婚。" },
    200378: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]他老了之后，把宅子留给了他的女儿。\n而阿玛特耶小姐，也终生未婚。" },
    200379: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]可怜的阿玛特耶小姐，\n因为父母，对爱情失望了吧……" },
    200380: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]这都要怪夫人的绝情，\n或者是意大利男高音太好听？" },

    200381: { nxId: 1, scene: 21304, doing: 4, item: 42018, music: "", sound: "", txt: "分支选择" },
    //A
    //正常分支
    200382: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不好意思，把自己另一半扔在空房\n子里就没责任了？" },
    200383: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]守活寡才是有良心，\n去寻求自己的爱情就是绝情？" },
    200384: { nxId: 1, scene: 21304, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]哎呦！看来你是个暴躁的爱情自\n由主义者呢。" },
    //程1
    200385: { nxId: 200406, scene: 21304, doing: 7, item: 71005, music: "", sound: "", txt: "好感度" },
    //特殊分支
    200386: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不好意思，凭什么把自己另一半\n扔在空房子里就是没问题？" },
    200387: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]去寻求自己的爱情就是绝情？" },
    200388: { nxId: 1, scene: 21304, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]哎呦！\n看来你是个暴躁的爱情自由主义者呢。" },
    200389: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不，我很尊重感情中的忠诚和责任……" },
    200390: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]但是这种一年四季不在身边的生活，\n就先不尊重另一半了。" },
    200391: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]那如果未来，\n你的另一半这么对你的话？" },
    200392: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那就不再是我的另一半了……" },
    //程2
    200393: { nxId: 200406, scene: 21304, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },
    //B
    200394: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不管是怎样，抛下自己的家庭，\n就是不忠诚了。" },
    200395: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我不完全同意，在那个年代的女性，\n也没有更多选择的权力。" },
    200396: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]虽然是这样没错，\n不回家的丈夫也很气人。" },
    200397: { nxId: 200406, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]但是这样的结局，\n只能说夫人太自私了。" },
    //C
    //正常分支
    200398: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]真是凄凉的故事……" },
    200399: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]两个不负责任的父母，\n给孩子带去了终生的阴影。" },
    200400: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]虽然这栋豪宅如此高大豪华，\n但却成了主人一生回忆的冰冷牢笼。" },
    //程1
    200401: { nxId: 200406, scene: 21304, doing: 7, item: 71005, music: "", sound: "", txt: "好感度" },
    //特殊分支
    200402: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]真是凄凉的故事……" },
    200403: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]两个不负责任的父母，\n给孩子带去了终生的阴影。" },
    200404: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]虽然这栋豪宅如此高大豪华，\n但却成了主人一生回忆的冰冷牢笼。" },
    //程2
    200405: { nxId: 1, scene: 21304, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },

    200406: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]不过这阿玛特耶家的\n巧克力却一直流传到了今天。" },
    200407: { nxId: 1, scene: 21304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我们可以领一杯赠送的巧克力，\n他家巧克力可是巴塞最棒伴手礼之一。" },
    200408: { nxId: 1, scene: 21304, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]一楼就是他们的店铺，要不要尝尝？" },
    200409: { nxId: 1, scene: 21304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]当然要尝尝，走！" },

    //巧克力店
    200410: { nxId: 1, scene: 21401, doing: 0, item: 0, music: "missing", sound: "", txt: "背景初始化" },
    200411: { nxId: 1, scene: 21404, doing: 1, item: 0, music: "", sound: "", txt: "你跟着程昱川走到了一楼，阳光穿\n过彩色玻璃，洒在立柱与走廊之间。" },
    200412: { nxId: 1, scene: 21404, doing: 1, item: 0, music: "", sound: "", txt: "一间咖啡厅安静的的出现在眼前。" },
    200413: { nxId: 1, scene: 21404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]整个一楼现在都是咖啡馆啊！" },
    200414: { nxId: 200299, scene: 21404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]对，你看，这就是欧洲最古老的\n巧克力品牌。" },
    200299: { nxId: 200415, scene: 21404, doing: 1, item: 0, music: "", sound: "", txt: "程昱川指了指墙上的巧克力海报，\n你顺着他的指向看去。" },
    //插图
    200415: { nxId: 1, scene: 21404, doing: 5, item: 51002, music: "", sound: "", txt: "插图" },
    200416: { nxId: 1, scene: 21404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好漂亮的插画啊。" },
    200417: { nxId: 1, scene: 21404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]阿尔方斯.穆夏的作品，\n你看着有没有感觉眼熟？" },
    200418: { nxId: 1, scene: 21404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]有一点，但说不出来。" },
    200419: { nxId: 1, scene: 21404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]是不是很像民国时期，\n老上海月历插画的样子？" },
    200420: { nxId: 1, scene: 21404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你这么一说的确是像啊。\n虽然一个是欧洲女性，一个是中国女性。" },
    200421: { nxId: 1, scene: 21404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]那是因为，\n穆夏是现代商业插画的鼻祖。" },
    200422: { nxId: 1, scene: 21404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是吗？" },
    200423: { nxId: 1, scene: 21404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]穆夏也是被阿玛特耶先生帮助过的艺术\n家之一。" },
    200424: { nxId: 1, scene: 21404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你看，会摄影的话还是有些好处的。" },

    200425: { nxId: 1, scene: 21404, doing: 4, item: 42019, music: "", sound: "", txt: "分支选择" },
    //A
    //正常分支
    200426: { nxId: 1, scene: 21404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这个送给你。" },
    200427: { nxId: 1, scene: 21404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]嗯？送给我的？" },
    200428: { nxId: 1, scene: 21404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]看不上就算了。" },
    200429: { nxId: 1, scene: 21404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]不不不，要！！！" },
    200430: { nxId: 1, scene: 21404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]晚了！这么犹犹豫豫的，\n突然就觉得不值得。" },
    200431: { nxId: 1, scene: 21404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]别这样，主要是关系发展得太快，\n我还没做好心理准备。" },
    200432: { nxId: 1, scene: 21404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]切，你还好意思说心理准备？\n早上你敲门的时候怎么没给我心理准备？" },
    200433: { nxId: 1, scene: 21404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我可是在门口等你换衣服，\n等了足足……15分钟！" },
    200434: { nxId: 1, scene: 21404, doing: 2, item: 211002, music: "", sound: "", txt: "[我]说了不准提衣服的事情，\n你还提！" },
    200435: { nxId: 1, scene: 21404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我没这个意思啊……\n都是你自己在提……" },
    200436: { nxId: 1, scene: 21404, doing: 2, item: 211002, music: "", sound: "", txt: "[我]巧克力没有了！" },
    200437: { nxId: 1, scene: 21404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]别，别这样！\n等等我啊！" },
    //程3
    200438: { nxId: 200453, scene: 21404, doing: 7, item: 71007, music: "", sound: "", txt: "好感度" },
    //特殊分支
    200439: { nxId: 1, scene: 21404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这个巧克力送给你。" },
    200440: { nxId: 1, scene: 21404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]嗯？送给我的？" },
    200441: { nxId: 1, scene: 21404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]看不上就算了。" },
    200442: { nxId: 1, scene: 21404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]不不不，我要。" },
    200443: { nxId: 1, scene: 21404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]晚了！突然就觉得不值得。" },
    200444: { nxId: 1, scene: 21404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]别这样，主要是关系发展得太快，\n我还没做好心理准备。" },
    200445: { nxId: 1, scene: 21404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]切，你还好意思说？早上你敲门的\n时候给我心理准备了？" },
    200446: { nxId: 1, scene: 21404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我可是在门口等你换衣服，\n等了足足15分钟。" },
    200447: { nxId: 1, scene: 21404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]说了不准提衣服的事情，你还提！" },
    200448: { nxId: 1, scene: 21404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我没这个意思啊……\n都是你自己在提……" },
    200449: { nxId: 1, scene: 21404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]巧克力没有了！" },
    200450: { nxId: 1, scene: 21404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]别，别这样！等等我啊！" },
    //程4
    200451: { nxId: 200453, scene: 21404, doing: 7, item: 71008, music: "", sound: "", txt: "好感度" },
    //B
    200452: { nxId: 1, scene: 21404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这里也参观得差不多了，走吧。" },

    //巴特罗之家
    //大B 切换巴特罗之家
    200453: { nxId: 1, scene: 21501, doing: 0, item: 0, music: "SP", sound: "", txt: "背景初始化" },
    200454: { nxId: 1, scene: 21504, doing: 1, item: 0, music: "", sound: "", txt: "你们离开阿马特耶之家，\n旁边就是著名的巴特罗之家。" },
    200455: { nxId: 1, scene: 21504, doing: 1, item: 0, music: "", sound: "", txt: "它是全球被拍摄最多的建筑之一，\n也是那个时代巴塞罗那的华丽象征。" },
    200456: { nxId: 200998, scene: 21504, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]这就是西班牙最伟大的建筑师\n安东尼奥.高迪建造的巴特罗之家，" },
    200998: { nxId: 200457, scene: 21504, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]也是争夺金苹果的最后一位女神！" },
    200457: { nxId: 1, scene: 21504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]真是太漂亮了……柱子外墙，窗户，\n阳台，真的一根直线都没有！" },
    200458: { nxId: 1, scene: 21504, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]这个造型的灵感，\n来自圣乔治屠龙的故事，" },
    200459: { nxId: 1, scene: 21504, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]房子的外墙就是恶龙的彩色鳞片，\n而上面的屋脊就是恶龙了。" },
    200460: { nxId: 1, scene: 21504, doing: 1, item: 0, music: "", sound: "", txt: "你抬头，看到高耸的屋顶波浪状起\n伏，搭配着五彩斑斓的色彩，的确\n很像一条盘踞在屋顶的龙。" },
    //场景分支
    200461: { nxId: 1, scene: 21504, doing: 4, item: 42020, music: "", sound: "", txt: "分支选择" },
    //大A //切换巴特罗之家内部
    200462: { nxId: 1, scene: 21601, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    200463: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没想到连屋子里，\n也都没有一点直线……" },
    200464: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]这就是高迪的风格。" },
    200465: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]果然再著名的景点，\n都是要自己来看才有意思。" },
    200466: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]百闻不如一见嘛。" },
    200467: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]但是你看这些波纹一样的屋顶，\n扭来扭去的门框……" },
    200468: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]如果想象自己住在这里面，\n就跟住在一个山洞里一样啊。" },
    200469: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哎呀！", effect: ["shockscreen"] },
    //立绘下消失，震屏
    200470: { nxId: 200997, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]小心！" },
    //背景再载入
    200997: { nxId: 200471, scene: 21604, doing: 1, item: 0, music: "", sound: "", txt: "你只顾着看房内的华丽装饰，一不\n留神脚下打滑，重重的扭了一下。" },
    200471: { nxId: 200999, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哎呦呦……" },
    200999: { nxId: 200472, scene: 21604, doing: 1, item: 0, music: "", sound: "", txt: "程昱川赶紧扶你坐到长凳上，\n蹲在你身前关切的看着你。" },
    200472: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你可能崴着脚了，鞋脱了我看看。" },

    200473: { nxId: 1, scene: 21604, doing: 4, item: 42021, music: "haha2", sound: "", txt: "分支选择" },
    //A 
    200474: { nxId: 1, scene: 21604, doing: 2, item: 211002, music: "", sound: "", txt: "[我]不行！" },
    200475: { nxId: 1, scene: 21604, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]为什么不行？" },
    200476: { nxId: 1, scene: 21604, doing: 2, item: 211002, music: "", sound: "", txt: "[我]男女授受不亲，\n凭什么让你碰我的脚？" },
    200477: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]都什么时候了？\n我要看看你骨头有没有事。" },
    200478: { nxId: 1, scene: 21604, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你隔着鞋也可以摸啊！" },
    200479: { nxId: 1, scene: 21604, doing: 1, item: 0, music: "", sound: "", txt: "程昱川不由分说一把拉过你的脚，\n小心地把鞋子除掉。" },
    200480: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]痛痛痛！" },
    200481: { nxId: 1, scene: 21604, doing: 1, item: 0, music: "", sound: "", txt: "你一喊痛，程昱川的动作立刻停住。" },
    200482: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]没有伤着骨头，只是轻微的扭伤。" },
    200483: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]程昱川，\n你对女士就这么粗暴的吗？" },
    200484: { nxId: 1, scene: 21604, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]扭伤的时候要尽早处理，\n要不然痛到走不了路就晚了。" },
    200485: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]异国他乡就医很麻烦的。现在粗鲁\n一点，总比去看医生强吧。" },
    200486: { nxId: 200509, scene: 21604, doing: 2, item: 211015, music: "", sound: "", txt: "[我]哼！" },
    //B
    //正常分支
    200487: { nxId: 1, scene: 21604, doing: 1, item: 0, music: "", sound: "", txt: "你伸出脚，脑子里迅速回想平时练\n习的pose，脚尽量往前伸，身\n体后倾，摆出一个妩媚撩人的造型。" },
    200488: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]……\n你到底脚是真痛还是假痛？" },
    200489: { nxId: 1, scene: 21604, doing: 2, item: 211002, music: "", sound: "", txt: "[我]当然是真痛啦！" },
    200490: { nxId: 1, scene: 21604, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（你是个什么傻子！）" },
    200491: { nxId: 1, scene: 21604, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]你扭成这个样子，\n看起来不像是很痛啊？" },
    200492: { nxId: 1, scene: 21604, doing: 2, item: 211002, music: "", sound: "", txt: "[我]痛也要痛得好看，怎么了？" },
    200493: { nxId: 1, scene: 21604, doing: 1, item: 0, music: "", sound: "", txt: "程昱川被你呛声，也很无语。他俯\n下身，小心地把你的鞋子除掉。" },
    200494: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]痛痛痛！" },
    200495: { nxId: 1, scene: 21604, doing: 1, item: 0, music: "", sound: "", txt: "你一喊痛，程昱川的动作立刻停住，\n但是他忍不住笑了起来。" },
    //程2
    200496: { nxId: 200509, scene: 21604, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },
    //特殊分支
    200497: { nxId: 1, scene: 21604, doing: 1, item: 0, music: "", sound: "", txt: "你伸出脚，脑子里迅速回想平时练\n习的pose，脚尽量往前伸，身\n体后倾，摆出一个妩媚撩人的造型。" },
    200498: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]……\n你到底脚是真痛还是假痛？" },
    200499: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]当然是真痛啦！" },
    200500: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]（你是个什么傻子！）" },
    200501: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]那你还扭成这个样子？" },
    200502: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]痛也要痛得好看，\n怎么了？" },
    200503: { nxId: 1, scene: 21604, doing: 1, item: 0, music: "", sound: "", txt: "程昱川小心地把你的鞋子除掉。" },
    200504: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]痛痛痛！" },
    200505: { nxId: 1, scene: 21604, doing: 1, item: 0, music: "", sound: "", txt: "你一喊痛，程昱川的动作立刻停住\n但是他忍不住笑了起来。" },
    200506: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]幸好没什么大碍。" },
    200507: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那就好。" },
    //程3
    200508: { nxId: 1, scene: 21604, doing: 7, item: 71007, music: "", sound: "", txt: "好感度" },

    200509: { nxId: 1, scene: 21604, doing: 1, item: 0, music: "", sound: "", txt: "程昱川又在你脚上按了几下，他很\n注意力度，每按一下，都回头关心\n地看看你的反应。" },
    200510: { nxId: 1, scene: 21604, doing: 1, item: 0, music: "", sound: "", txt: "你感受到了他对你的关心，\n似乎脚也没那么疼了。" },
    200511: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]怎么样？还疼吗？" },

    200512: { nxId: 1, scene: 21604, doing: 4, item: 42022, music: "", sound: "", txt: "分支选择" },
    //A 
    //正常分支
    200513: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你趁机吃我豆腐是吧？" },
    200514: { nxId: 1, scene: 21604, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]要吃豆腐也是摸手，\n摸脚是怎么回事？" },
    200515: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谁知道你是不是恋足癖？" },
    200516: { nxId: 1, scene: 21604, doing: 1, item: 0, music: "", sound: "", txt: "听你这么说，\n程昱川又好气又好笑。" },
    //程2
    200517: { nxId: 200539, scene: 21604, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },
    //特殊分支
    200518: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你趁机吃我豆腐是吧？" },
    200519: { nxId: 1, scene: 21604, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]要吃豆腐也是摸手，摸脚是怎么回事？" },
    200520: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谁知道你是不是恋足癖？" },
    200521: { nxId: 1, scene: 21604, doing: 1, item: 0, music: "", sound: "", txt: "听你这么说，程昱川又好气又好笑。" },
    200522: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我真是要被你气死。" },
    200523: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]算了，被你这么一捏，\n本姑娘也没那么疼了。" },
    //程3
    200524: { nxId: 200539, scene: 21604, doing: 7, item: 71007, music: "", sound: "", txt: "好感度" },
    //B
    //正常分支
    200525: { nxId: 1, scene: 21604, doing: 2, item: 211004, music: "", sound: "", txt: "[我]有帅哥给按摩按摩的确不疼了。" },
    200526: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]行，还这么有兴致，看来是没事了。" },
    //程3
    200527: { nxId: 200539, scene: 21604, doing: 7, item: 71007, music: "", sound: "", txt: "好感度" },
    //特殊分支
    200528: { nxId: 1, scene: 21604, doing: 2, item: 211004, music: "", sound: "", txt: "[我]有帅哥给按摩按摩的确不疼了。" },
    200529: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]行，还这么有兴致，看来是真没事了。" },
    200530: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]师傅，脚背麻烦也按按。\n高跟鞋穿久了，有点挤脚。" },
    200531: { nxId: 1, scene: 21604, doing: 1, item: 0, music: "", sound: "", txt: "程昱川哭笑不得，只好一边摇头一\n边真的给你按起了脚背。" },
    200532: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你这手法很娴熟啊？\n以前经常跟异性练习？" },
    200533: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]不是，是因为我厨艺练习得好。" },
    200534: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]厨艺？什么鬼。" },
    200535: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我喜欢吃猪排，经常买来自己做。\n解冻的猪排处理不好就比较难做。" },
    200536: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]所以我给它们按摩按摩，\n这样肉质细嫩可口，入口即化。" },
    200537: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好你个程昱川，\n指桑骂槐啊！" },
    //程4
    200538: { nxId: 1, scene: 21604, doing: 7, item: 71008, music: "", sound: "", txt: "好感度" },

    200539: { nxId: 1, scene: 21604, doing: 1, item: 0, music: "", sound: "", txt: "按摩了一阵，你感觉好多了。程昱\n川站起身，伸手把你拉起来。" },
    200540: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]起来走两步，我看看。" },
    200541: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好像没事了。多谢你！" },
    200542: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]没关系，再摔倒我还继续扶你。" },
    200543: { nxId: 200996, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]借您吉言，我不想再来一遍了。" },
    200996: { nxId: 200544, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]话说，这些建筑都设计的像童话世界，\n有什么原因吗？" },
    200544: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]嗯，狮子与桑树，阿玛特耶，巴特罗。\n这些大富翁们的豪宅，只是为了炫富。" },
    200545: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没想到炫出个文化遗产。" },
    200546: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]不止是炫富。他们还违章搭建呢。" },
    200547: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]阿玛特耶之家修建的时候，\n想修成这个街区最高的房子。" },
    200548: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]但是市政府不允许，\n于是他们就搭了刚才你看到的尖顶。" },
    200549: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没人管吗？" },
    200550: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]尖顶不算屋顶。" },
    200551: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]钻空子嘛这是……" },
    200552: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]后来巴特罗之家也盖了，有样学样。" },
    200553: { nxId: 1, scene: 21604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]高迪给房子加了一个高高的屋顶，\n就是外墙上那个龙鳞一样的部分。" },
    200554: { nxId: 1, scene: 21604, doing: 2, item: 211004, music: "", sound: "", txt: "[我]所以两个文化遗产都是违章建筑？" },
    200555: { nxId: 1, scene: 21604, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]嗯哼。所以说，\n文明都是不经意间的产物。" },

    200556: { nxId: 1, scene: 21604, doing: 4, item: 42023, music: "", sound: "", txt: "分支选择" },
    //A 
    200557: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]可以啊，程昱川，\n当得起博学这个词。" },
    200558: { nxId: 1, scene: 21604, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]哼，过奖了！\n你的脚还痛吗？" },
    200559: { nxId: 200564, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没什么大碍了，咱们继续逛……" },
    //B
    200560: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]每个建筑的背后都有个故事啊。" },
    200561: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我真怀疑故事的本身就是为了营销，\n赚取游客的钱钱和眼球。" },
    200562: { nxId: 1, scene: 21604, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]哈哈哈，你的角度这么清奇吗。" },
    200563: { nxId: 1, scene: 21604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我脚也差不多不疼了，\n咱们上楼去看看吧。" },
    //好感度达成
    200564: { nxId: 1, scene: 21604, doing: 1, item: 0, music: "", sound: "", txt: "你们兴致勃勃地在巴特罗之家上上\n下下转了一圈，像在童话世界里穿\n行的孩子一样。" },
    200565: { nxId: 1, scene: 21604, doing: 1, item: 0, music: "", sound: "", txt: "不知不觉，你对程昱川已经放下了\n心理的堤防，这个陌生人今天给你\n带来的快乐，比什么都要多。" },
    200566: { nxId: 200569, scene: 21604, doing: 1, item: 0, music: "", sound: "", txt: "时间过得飞快，\n你心情愉悦地离开了巴特罗之家。" },
    //好感度未达成
    200567: { nxId: 1, scene: 21604, doing: 1, item: 0, music: "", sound: "", txt: "你们兴致勃勃地在巴特罗之家上上\n下下转了一圈，像在童话世界里穿\n行的孩子一样。" },
    200568: { nxId: 1, scene: 21604, doing: 1, item: 0, music: "", sound: "", txt: "时间过得飞快，\n你心情愉悦地离开了巴特罗之家。" },
    //大B//切换格拉西亚街道
    200569: { nxId: 1, scene: 25006, doing: 0, item: 0, music: "SP", sound: "", txt: "背景初始化" },
    200570: { nxId: 1, scene: 25004, doing: 1, item: 0, music: "", sound: "", txt: "离开不和谐街区，你和程昱川继续\n沿着格拉西亚大道前行。" },
    200571: { nxId: 1, scene: 25004, doing: 1, item: 0, music: "", sound: "", txt: "你们肩并着肩，漫步在异国的街道。\n街边的雕花栏杆和马赛克瓷片在阳\n光的映衬下，犹如闪光的精灵。" },
    200572: { nxId: 200995, scene: 25004, doing: 1, item: 0, music: "", sound: "", txt: "有多久没有这样悠闲地散步了……\n你感到时间变得缓慢，程昱川的声\n音也变得渐渐柔和……" },
    200995: { nxId: 200994, scene: 25004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]接下来要不要去休息一下，\n吃点东西呢？" },
    200994: { nxId: 200573, scene: 25004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]早上才吃了那么多，现在又要……" },
    200573: { nxId: 1, scene: 25004, doing: 1, item: 0, music: "", sound: "", txt: "忽然，一阵若有若无的暗香飘过，\n打断了你。路边一间独特的商店吸\n引了你的目光。" },
    200574: { nxId: 1, scene: 25004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]怎么了？" },
    200575: { nxId: 1, scene: 25004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这里是？" },
    200576: { nxId: 1, scene: 25004, doing: 2, item: 211005, music: "", sound: "", txt: "[我]好好闻的香气！\n居然是一家香水博物馆！" },
    200577: { nxId: 1, scene: 25004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]这些香水瓶都古色古香的，\n看起来很有年头了。" },
    200578: { nxId: 1, scene: 25004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我想进去看看，可以吗？" },
    200579: { nxId: 1, scene: 25004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]额……" },
    200580: { nxId: 1, scene: 25004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你不愿意？" },
    200581: { nxId: 1, scene: 25004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]不是不是，只是……" },
    200582: { nxId: 1, scene: 25004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那还等什么，走吧走吧！" },
    200583: { nxId: 1, scene: 25004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]哎……等等我！" },
    200584: { nxId: -1, scene: 25004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川无奈的摸了摸鼻子，也追进\n了香水博物馆。" },

}

export class CfgChapter2 {
    public chapters: any = chapterObj;
    public endChatuList: string[] = ["street1#格拉西亚大道", "lion#狮子与桑树之家", "muxia#阿尔方斯穆夏", "bg_1_4#哭泣角落"];
}