/** 操作ID,下一步操作ID,场景ID,操作类型,具体操作ID,描述 */
/** 操作类型: -1.无 0.背景移动 1.旁白 2.对话 3.人物介绍 4.分支选择 5.插图 6.CG动画 7.好感度 8.衣服选择 9.电话微信 10.回忆 11.彩蛋*/

let chapterObj = {
    //画室卧室（夜）
    530001: { nxId: 1, scene: 53101, doing: 0, item: 0, music: "bowenlang", sound: "", txt: "背景初始化" },
    530002: { nxId: 1, scene: 53104, doing: 12, item: 125301, music: "", sound: "", txt: "地点介绍" },
    530003: { nxId: 1, scene: 53104, doing: 1, item: 0, music: "", sound: "", txt: "晚上，你留宿在博文朗的画室，回\n忆着白天的经历。" },
    530004: { nxId: 1, scene: 53104, doing: 2, item: 211015, music: "", sound: "knockdoor", txt: "[我]（这一天可真是跌宕起伏啊。）" },
    530005: { nxId: 1, scene: 53104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谁？" },
    530006:  { nxId: 1, scene: 53104, doing: 1, item: 0, music: "", sound: "", txt: "门外传来博文朗的声音：\n是我，博文朗。" },
    530007: { nxId: 1, scene: 53104, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（博文朗……\n   这个时间来找我干什么？）" },
    530008: { nxId: 1, scene: 53104, doing: 1, item: 0, music: "", sound: "", txt: "你低着头看自己的衣服，刚才在床\n上滚来滚去已经被弄皱了。" },
    530009: { nxId: 1, scene: 53104, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（还是换件睡衣吧。）" },

    530010: { nxId: 1, scene: 53104, doing: 4, item: 45301, music: "", sound: "", txt: "分支选择" },
    //A 睡衣线
    530011: { nxId: 1, scene: 53104, doing: 2, item: 211016, music: "", sound: "", txt: "[我]（应该没问题吧？）" , notopen : 1},
    530012: { nxId: 1, scene: 53104, doing: 1, item: 0, music: "", sound: "opendoor", txt: "你打开了房门，博文朗要说出口的\n话被堵住了。", notopen : 1 },
    530013: { nxId: 1, scene: 53104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]你……哇哦……", notopen : 1 },
    530014: { nxId: 1, scene: 53104, doing: 2, item: 211011, music: "", sound: "", txt: "[我]怎么？" , notopen : 1},
    530015: { nxId: 1, scene: 53104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]今晚的你，格外地美丽。", notopen : 1 },
    //博2
    530016: { nxId: 1, scene: 53104, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" , notopen : 1},
    530017: { nxId: 1, scene: 53104, doing: 2, item: 211011, music: "", sound: "", txt: "[我]在你眼里，我什么时候不漂亮？", notopen : 1 },
    530018: { nxId: 530021, scene: 53104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]没有，那种情况不存在。" , notopen : 1},
    //此处接睡衣线衍生

    //B 正常线
    530019: { nxId: 1, scene: 53104, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（算了算了，睡衣好像太夸张了，\n   还是穿这个吧。）" },
    530020: { nxId: 530042, scene: 53104, doing: 1, item: 0, music: "", sound: "opendoor", txt: "你抓抓头发，打开了门。" },
    //此处接正常线衍生

    //睡衣线衍生
    530021: { nxId: 1, scene: 53104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]明天你有什么计划吗？", notopen : 1 },
    530022: { nxId: 1, scene: 53104, doing: 2, item: 211011, music: "", sound: "", txt: "[我]啊？\n暂时还没想好，你有什么建议吗？" , notopen : 1},
    530023: { nxId: 1, scene: 53104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]明天我要去乡下探望我一位朋友，\n也是一名知名的艺术家。", notopen : 1 },//狗日的胡安
    530024: { nxId: 1, scene: 53104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]沿途可以欣赏西班牙的田园风光，\n不知道你有没有兴趣同行？" , notopen : 1},

    530025: { nxId: 1, scene: 53104, doing: 4, item: 45302, music: "", sound: "", txt: "分支选择" , notopen : 1},
    //A 
    530026: { nxId: 1, scene: 53104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]看来我的魅力还比不上乡村的风景。" , notopen : 1},
    530027: { nxId: 530037, scene: 53104, doing: 2, item: 211011, music: "", sound: "", txt: "[我]你们各有千秋。", notopen : 1 },
    //B
    530028: { nxId: 1, scene: 53104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]这是我的荣幸。", notopen : 1 },
    530029: { nxId: 1, scene: 53104, doing: 2, item: 211011, music: "", sound: "", txt: "[我]别高兴地太早，你可要保证明天的\n出行质量。" , notopen : 1},
    530030: { nxId: 530037, scene: 53104, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]当然。" , notopen : 1},
    //C
    530031: { nxId: 1, scene: 53104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]不是男朋友。" , notopen : 1},
    530032: { nxId: 1, scene: 53104, doing: 1, item: 0, music: "", sound: "", txt: "博文朗语义暧昧地看着你。" , notopen : 1},
    530033: { nxId: 1, scene: 53104, doing: 2, item: 211011, music: "", sound: "", txt: "[我]那就是女朋友了？" , notopen : 1},
    530034: { nxId: 1, scene: 53104, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]我能把这看成是在意吗？\n放心吧，只是男性朋友。", notopen : 1 },
    530035: { nxId: 1, scene: 53104, doing: 1, item: 0, music: "", sound: "", txt: "博文朗包容的笑让你感觉隐隐落于\n下风……", notopen : 1 },
    530036: { nxId: 1, scene: 53104, doing: 2, item: 211012, music: "", sound: "", txt: "[我]谁……谁在意了！" , notopen : 1},

    530037: { nxId: 1, scene: 53104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]那么晚安，我会在梦中想你的。", notopen : 1 },
    530038: { nxId: 1, scene: 53104, doing: 1, item: 0, music: "", sound: "", txt: "博文朗忽然上前，亲吻你的脸颊。\n温热的气息让你的脸颊也跟着灼热\n起来。" , notopen : 1},
    530039: { nxId: 1, scene: 53104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]晚安吻。" , notopen : 1},
    530040: { nxId: 1, scene: 53104, doing: 2, item: 211011, music: "", sound: "", txt: "[我]晚安。", notopen : 1 },
    530041: { nxId: 530063, scene: 53104, doing: 1, item: 0, music: "", sound: "closedoor", txt: "你的心怦怦跳着，猛地关上了房门。" , notopen : 1},

    //正常线衍生
    530042: { nxId: 1, scene: 53104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]明天你有什么计划吗？" },
    530043: { nxId: 1, scene: 53104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]啊？\n暂时还没想好，你有什么建议吗？" },
    530044: { nxId: 1, scene: 53104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]明天我要去乡下探望我一位朋友，\n也是一名知名的艺术家。" },//狗日的胡安
    530045: { nxId: 1, scene: 53104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]沿途可以欣赏西班牙的田园风光，\n不知道你有没有兴趣同行？" },

    530046: { nxId: 1, scene: 53104, doing: 4, item: 45303, music: "", sound: "", txt: "分支选择" },
    //A 
    530047: { nxId: 1, scene: 53104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]看来我的魅力还比不上乡村的风景。" },
    530048: { nxId: 530058, scene: 53104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你们各有千秋。" },
    //B
    530049: { nxId: 1, scene: 53104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]这是我的荣幸。" },
    530050: { nxId: 1, scene: 53104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]别高兴地太早，你可要保证明天的\n出行质量。" },
    530051: { nxId: 530058, scene: 53104, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]当然。" },
    //C
    530052: { nxId: 1, scene: 53104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]不是男朋友。" },
    530053: { nxId: 1, scene: 53104, doing: 1, item: 0, music: "", sound: "", txt: "博文朗语义暧昧地看着你。" },
    530054: { nxId: 1, scene: 53104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那就是女朋友了？" },
    530055: { nxId: 1, scene: 53104, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]我能把这看成是在意吗？\n放心吧，只是男性朋友。" },
    530056: { nxId: 1, scene: 53104, doing: 1, item: 0, music: "", sound: "", txt: "博文朗包容的笑让你感觉隐隐落于\n下风……" },
    530057: { nxId: 1, scene: 53104, doing: 2, item: 211002, music: "", sound: "", txt: "[我]谁……谁在意了！" },

    530058: { nxId: 1, scene: 53104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]那么晚安，我会在梦中想你的。" },
    530059: { nxId: 1, scene: 53104, doing: 1, item: 0, music: "", sound: "", txt: "博文朗忽然上前，亲吻你的脸颊。\n温热的气息让你的脸颊也跟着灼热\n起来。" },
    530060: { nxId: 1, scene: 53104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]晚安吻。" },
    530061: { nxId: 1, scene: 53104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]晚安。" },
    530062: { nxId: 1, scene: 53104, doing: 1, item: 0, music: "", sound: "closedoor", txt: "你的心怦怦跳着，猛地关上了房门。" },

    //画室卧室（日）
    530063: { nxId: 1, scene: 53201, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    530064: { nxId: 1, scene: 53204, doing: 1, item: 0, music: "", sound: "", txt: "你被一阵鸟鸣声惊醒，想到今天的\n出行计划，你迫不及待的打开了你\n的衣橱。" },
    //久违的换装
    530065: { nxId: 1, scene: 53204, doing: 8, item: 0, music: "huanzhuang", sound: "", txt: "换装界面" },

    //画室
    530066: { nxId: 1, scene: 43901, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    530067: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "当你走出卧室时，博文朗已经站在\n画室等你了，还提着一个野餐篮。" },
    530068: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这是干什么？" },
    530069: { nxId: 1, scene: 43904, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]美好的风景需要有美食作伴。\n当然，还有美酒和美人。" },
    530070: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]你的这套衣服……" },
    530071: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]怎么，不好看吗？" },
    530072: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]怎么会？我是想一会儿到了那儿，\n胡安怕是要魂不守舍了。" },
    530073: { nxId: 1, scene: 43904, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]也许你应该先帮我挑选衣服。" },
    //博2
    530074: { nxId: 1, scene: 43904, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" },
    530075: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]什么到你嘴里都能说出一朵花来。" },
    530076: { nxId: 1, scene: 43904, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]是你的美丽，给了我机会。" },
    530077: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]放心，\n你根本不需要服装来为你加分。" },
    530078: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]出发吧。" },

    //画室门口老爷车
    530079: { nxId: 1, scene: 53301, doing: 0, item: 0, music: "gutingwei", sound: "", txt: "背景初始化" },
    530080: { nxId: 1, scene: 53304, doing: 1, item: 0, music: "", sound: "", txt: "你跟着博文朗走到门口，一辆破旧\n的车停在了眼前。" },
    530081: { nxId: 1, scene: 53304, doing: 2, item: 211003, music: "", sound: "", txt: "[我]这不会是……你的车吧？看上去比\n你的年纪大多了，开起来安全吗？" },
    530082: { nxId: 1, scene: 53304, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]别担心，它跟我一样，多大\n的年纪都能上路。" },
    530083: { nxId: 1, scene: 53304, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]它叫丘比特，是我的宝贝。" },
    530084: { nxId: 1, scene: 53304, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]八十年代经典车型，车身的彩绘都\n是我亲自画的，跟着我很多年了。" },
    530085: { nxId: 1, scene: 53304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]丘比特，还给车起名字。" },
    530086: { nxId: 1, scene: 53304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]世间一切感情的联系都从名字开始。" },
    530087: { nxId: 1, scene: 53304, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]这车也是我的作品，我对我的作品\n有感情不是很正常嘛？" },
    530088: { nxId: 1, scene: 53304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]嗯，可以理解，我觉得它也挺适合你的。" },
    530089: { nxId: 530998, scene: 53304, doing: 1, item: 0, music: "", sound: "", txt: "博文朗替你拉开了车门，绅士地伸\n手邀你上车。车内有淡淡的香味，\n后视镜上挂着各种小挂件。" },
    //等插图
    530998: { nxId: 530997, scene: 53304, doing: 1, item: 0, music: "", sound: "", txt: "一个手制吊坠引起了你的注意，它\n被刻意隐藏在一堆挂件最深处，上\n面雕刻了一个大写的E。" },
    530997: { nxId: 530996, scene: 53304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哼哼，有故事……" },
    530996: { nxId: 530995, scene: 53304, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]你在嘀咕什么，样子很有趣啊" },
    530995: { nxId: 530090, scene: 53304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没什么……" },

    530090: { nxId: 1, scene: 53304, doing: 4, item: 45304, music: "", sound: "", txt: "分支选择" },
    //A 
    //正常分支
    //博1
    530091: { nxId: 1, scene: 53304, doing: 7, item: 71009, music: "", sound: "", txt: "好感度" },
    530092: { nxId: 1, scene: 53304, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]承蒙夸奖，深感荣幸。" },
    530093: { nxId: 1, scene: 53304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]车身的彩绘，加上车内这些奇怪的\n挂件竟然感觉很搭。" },
    530094: { nxId: 1, scene: 53304, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]这都是我精心的创作，这些挂件大\n部分都是我的珍藏。" },
    530095: { nxId: 530106, scene: 53304, doing: 2, item: 211004, music: "", sound: "", txt: "[我]果然搞艺术的都是怪胎，喜欢奇怪\n的东西，不过倒是很值得观赏。" },
    //正常分支
    //博2
    530096: { nxId: 1, scene: 53304, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" },
    530097: { nxId: 1, scene: 53304, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]承蒙夸奖，深感荣幸。" },
    530098: { nxId: 1, scene: 53304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]车身的彩绘，加上车内这些奇怪的\n挂件竟然感觉很搭。" },
    530099: { nxId: 1, scene: 53304, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]这都是我精心的创作，这些挂件大\n部分都是我的珍藏。" },
    530100: { nxId: 530106, scene: 53304, doing: 2, item: 211004, music: "", sound: "", txt: "[我]果然搞艺术的都是怪胎，喜欢奇怪\n的东西，不过倒是很值得观赏。" },
    //B
    530101: { nxId: 1, scene: 53304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]这叫简约！" },
    530102: { nxId: 1, scene: 53304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那这些奇怪的挂件呢？" },
    530103: { nxId: 1, scene: 53304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]怪诞与简约，\n两美相容不觉得很神奇嘛？" },
    530104: { nxId: 1, scene: 53304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]安全气囊都没有，万一要是磕磕碰\n碰的，我小命都容易搭进去。" },
    530105: { nxId: 1, scene: 53304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我会注意你的安全的，放心吧！" },
    //老车启动音效
    530106: { nxId: 530118, scene: 53304, doing: 1, item: 0, music: "", sound: "oldbus", txt: "博文朗启动了汽车，汽车晃悠着，\n发出巨大的轰鸣，半天才突然冲了\n出去。" },
    //乡间小路
    530118: { nxId: 1, scene: 53401, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    530119: { nxId: 530108, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "你赶紧给自己系上安全带，外面的\n风声哗哗的响。" },
    530108: { nxId: 1, scene: 53404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]老车，隔音系统不太好！" },
    530109: { nxId: 1, scene: 53404, doing: 2, item: 211003, music: "", sound: "", txt: "[我]我后悔了。能不能停一下？\n我想坐到后排去！" },
    530110: { nxId: 1, scene: 53404, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]上了我的贼船，就没机会回头啦！" },
    530111: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "你生无可恋地拉紧安全带，博文朗大\n笑着拉动变速杆，老车发出难听的\n嘎吱声。" },
    530112: { nxId: 1, scene: 53404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈，你这车还会发出驴叫的吗？\n真是闻所未闻！" },
    530113: { nxId: 1, scene: 53404, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]这叫个性，特色，\n你不觉得很可爱吗？" },

    530114: { nxId: 1, scene: 53404, doing: 4, item: 45305, music: "", sound: "", txt: "分支选择" },
    //A 
    530115: { nxId: 1, scene: 53404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]这造型加声音真是我人生中难得一\n次的体验。" },
    530116: { nxId: 1, scene: 53404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈哈哈，如果只听声音的话，\n别人肯定以我们在骑驴。" },
    530117: { nxId: 530127, scene: 53404, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]这叫个性，特色，\n你不觉得很可爱吗？" },
    //B
    530120: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你这小破车每叫一次，仿佛都在告\n诉我“我要报废了”“我要散架了”。" },
    530121: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你说万一这时迎面来了一辆大车，\n你的丘比特应对不住，怎么办？" },
    530122: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]放心，这种乡村小路没什么车，\n车速又不快，要不了你的命的。" },
    530123: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]就算有个万一，我也会保护你的。" },
    530124: { nxId: 530127, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]呸呸呸。" },
    //C
    530125: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]亲爱的，相信我，我不会将你置于\n危险之地的。" },
    530126: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好肉麻，走开。" },

    530127: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "车很快开上了乡村的小路，你也逐\n渐放松下来。" },
    530128: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你总说我是你的缪斯？那是不是你\n的前女友们都是你的缪斯啊？" },
    530129: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]不管她们是与不是，\n都已经是过去式……" },
    530130: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我不追忆过去，\n只专注于眼前……的人。" },
    530131: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我还以为艺术家大都不善言辞，你\n完全颠覆了我的认知。" },
    530132: { nxId: 1, scene: 53404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]事实上，艺术家才是最会用嘴巴骗\n人的专家。" },
    530133: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]毕加索就是一个营销大师，各种故\n事被他用来包装自己的画作，" },
    530134: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]他包装自己的画，\n给每一幅画都赋予一个故事。" },
    530135: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]在出售画之前，\n先办一个画展用来宣传，" },
    530136: { nxId: 1, scene: 53404, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]这样自然而然提高了画的知名度，\n也抬高了画的价钱。" },
    530137: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那你也会营销自己咯？" },
    530138: { nxId: 1, scene: 53404, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]当然了，我也希望得到社会的认可。" },

    530139: { nxId: 1, scene: 53404, doing: 4, item: 45306, music: "", sound: "", txt: "分支选择" },
    //A 
    530140: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我可从来没有什么人设，我只是展\n现了自己。" },
    530141: { nxId: 530147, scene: 53404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]花花公子，四处留情？" },
    //B
    530142: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "博文朗耸耸肩，\n根本不在意你的调侃。" },
    530143: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]这只是实话。" },
    530144: { nxId: 530147, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]稍加粉饰的实话。" },
    //C
    530145: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]当然，艺术家不过是比普通人的感\n情更细腻，对世界的感触更敏感。" },
    530146: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]但是在其他方面，大家都是一样的。" },

    530147: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "你们一路说笑，在一家简陋的加油\n站前，博文朗停下了车。" },

    //加油站
    530148: { nxId: 1, scene: 53501, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    530149: { nxId: 1, scene: 53504, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我去上个洗手间，再给车加点油就\n能继续上路了。" },
    530150: { nxId: 1, scene: 53504, doing: 1, item: 0, music: "", sound: "", txt: "博文朗下了车，熟门熟路地往加油\n站里面走去。" },

    530151: { nxId: 1, scene: 53504, doing: 4, item: 45307, music: "", sound: "", txt: "分支选择" },
    //A 
    530152: { nxId: 1, scene: 53504, doing: 1, item: 0, music: "", sound: "", txt: "你对一旁的工作人员招招手，示意\n要加油。没想到工作人员竟然不会\n英语。" },
    530153: { nxId: 1, scene: 53504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……西班牙语实在是超出了我的能\n力范围啊。" },
    530154: { nxId: 1, scene: 53504, doing: 1, item: 0, music: "", sound: "", txt: "你和工作人员用英语艰难地沟通着，\n加上肢体动作，工作人员终于露出\n了一个笑，给你加上了油。" },
    530155: { nxId: 1, scene: 53504, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（好了！接下来就让我给博文朗展\n   现一下真正的车技吧！）" },//马路杀手的自我修养
    530156: { nxId: 1, scene: 53504, doing: 1, item: 0, music: "", sound: "", txt: "你坐上了驾驶位，你从后视镜里看\n到回来的博文朗，你伸出手挥了挥。" },
    530157: { nxId: 1, scene: 53504, doing: 2, item: 211004, music: "", sound: "", txt: "[我]帅哥，搭个便车吗？" },
    530158: { nxId: 1, scene: 53504, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]美人邀约，我的荣幸。" },
    530159: { nxId: 1, scene: 53504, doing: 1, item: 0, music: "", sound: "", txt: "博文朗和你都笑了起来。" },
    530160: { nxId: 1, scene: 53504, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]手动挡，你行吗？" },
    530161: { nxId: 1, scene: 53504, doing: 2, item: 211004, music: "", sound: "", txt: "[我]大概明白，考驾照的时候学过。你\n在旁边看着点，放心，我会踩刹车。" },
    530162: { nxId: 1, scene: 53504, doing: 1, item: 0, music: "", sound: "oldbus", txt: "博文朗无奈的笑笑坐上了副驾驶，\n你发动了车，一阵颠簸。" },
    530163: { nxId: 1, scene: 53504, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]油门踩轻点！当心！天哪，你真的\n该重新考一下驾照了。" },
    530164: { nxId: 1, scene: 53504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]别紧张，适应，适应一下。" },
    530165: { nxId: 1, scene: 53504, doing: 1, item: 0, music: "", sound: "", txt: "你试图倒车，结果车却总是不听使\n唤，在加油站打着转。" },
    530166: { nxId: 1, scene: 53504, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]还是我帮你吧。" },
    530167: { nxId: 1, scene: 53504, doing: 1, item: 0, music: "", sound: "", txt: "博文朗探过身，温暖的手包着你的\n手，缓缓地转动方向盘。" },
    530168: { nxId: 1, scene: 53504, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]现在，慢慢踩油门。" },
    //开车呢，看路，花痴你妹！
    530169: { nxId: 1, scene: 53504, doing: 1, item: 0, music: "", sound: "", txt: "他低沉的声音像是一把小提琴，震\n动着你的耳膜。你感觉到自己的脸\n开始发烫了。" },
    530170: { nxId: 1, scene: 53504, doing: 2, item: 211005, music: "", sound: "", txt: "[我]（他离我也太近了吧……）" },
    530171: { nxId: 1, scene: 53504, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]好了，\n上了小路了，下面就是直线了。" },

    //乡间小路
    530172: { nxId: 1, scene: 53401, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    530173: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]啊？" },
    530174: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "博文朗又坐回了副驾驶，你的心底\n划过了一丝遗憾。" },
    530175: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]咱们离目的地还有多远啊？" },
    530176: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]大概30公里吧！\n再半小时不到就到了！" },
    530177: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "你看着沿途的风景，\n又开出了一段距离。" },
    530178: { nxId: 1, scene: 53404, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]你怎么越开越慢呢？" },
    530179: { nxId: 1, scene: 53404, doing: 2, item: 211003, music: "", sound: "", txt: "[我]我也不知道啊！" },
    530180: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "unfire", txt: "话音刚落，车发出了一声奇怪的声\n音，车突然停了下来。你试图重新\n点火，但是车却没有反应。" },
    530181: { nxId: 1, scene: 53404, doing: 2, item: 211003, music: "", sound: "", txt: "[我]车……好像坏了。我就觉得你这老\n爷车会出事儿。" },
    530182: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]行了，你下来吧！" },
    530183: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那你来？" },
    530184: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "unfire", txt: "你和博文朗交换了位置，博文朗也\n打火，但是车仍旧是没有反应。" },
    530185: { nxId: 1, scene: 53404, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]怎么不行呢？" },
    530186: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]刚刚加油站出来都好好的，这才多\n久就坏了？" },
    530187: { nxId: 1, scene: 53404, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]不能啊！你刚刚加了什么油，是不\n是汽油？" },
    530188: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]对啊！不然呢！" },
    530189: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "博文朗一副欲言又止的样子。" },
    530190: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]干嘛呀？" },
    530191: { nxId: 1, scene: 53404, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]我这车……是烧柴油的。" },
    530192: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……果然是老爷车啊。" },
    530193: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "博文朗打了救援电话，然后带你到\n路边的树荫下休息。" },
    530194: { nxId: 1, scene: 53404, doing: 2, item: 211003, music: "", sound: "", txt: "[我]对不起，是我的错。修车钱我出。" },
    530195: { nxId: 1, scene: 53404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]不怪你，怪我没提前告诉你。" },
    530196: { nxId: 1, scene: 53404, doing: 2, item: 211003, music: "", sound: "", txt: "[我]你别那么说，更愧疚了。\n你的这个大宝贝不会坏了吧？" },
    530197: { nxId: 1, scene: 53404, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]牡丹花下死，做鬼也风流。丘比特\n会安息的。" },
    530198: { nxId: 530229, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "你无语地瞪着博文朗，博文朗哈哈\n大笑起来。" },

    //B
    530199: { nxId: 1, scene: 53504, doing: 1, item: 0, music: "", sound: "", txt: "博文朗回来之后，加好油上车，你\n们又开上了乡间小路。" },
    //乡间小路
    530200: { nxId: 1, scene: 53401, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    530201: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我们大概还有多久会到呢？" },
    530202: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]半个小时吧。" },
    530203: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "por", sound: "", txt: "寂静的环境让你有些不自在，你打\n开了车内的卡带机。" },
    530204: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这首歌？" },
    530205: { nxId: 1, scene: 53404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]Por una cabeza" },
    530206: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好像在哪听过，一下子想不起来？ " },
    530207: { nxId: 1, scene: 53404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]闻香识女人，最迷人的男人与少女。" },
    530208: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]一个人的歌单印证了他的内心，\n这说明…… " },

    530209: { nxId: 1, scene: 53404, doing: 4, item: 45308, music: "", sound: "", txt: "分支选择" },
    //A 
    530210: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]四处散发荷尔蒙，仗着年纪大欺骗\n人家不谙世事的小姑娘。" },
    530211: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]你这么说不公平。女人需要男人，\n就像男人需要女人一样。" },
    530212: { nxId: 530220, scene: 53404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]我就当你夸我了。" },
    //B
    530213: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]看起来什么都难不倒你，像是无法\n攻破的城池，" },
    530214: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]其实内心还是有被隐藏的柔软角落吧？" },
    530215: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "博文朗沉默了片刻，忽然笑着岔开\n了话题。" },
    530216: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我的弱点大概就是怕跟上校一样瞎\n了吧，毕竟我是画家。" },
    530217: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]没有了双眼，我不知道我活着还有\n什么意义，" },
    530218: { nxId: 1, scene: 53404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]可能比聋了的贝多芬还惨。" },
    530219: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哼，顾左右而言他。" },

    530220: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "突然，丘比特的嘎吱响声越来越大，\n又突然停住了。" },
    530221: { nxId: 1, scene: 53404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈，说什么来什么。老爷车发\n老爷脾气了。" },
    530222: { nxId: 1, scene: 53404, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]没关系，我下车看看。" },
    530223: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "博文朗下车看一下，回到车里。" },
    530224: { nxId: 1, scene: 53404, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]你真是乌鸦嘴。" },
    530225: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我就说你这车不靠谱。" },
    530226: { nxId: 1, scene: 53404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]没关系，现在这个时间，路边很快\n会有人路过的。" },
    530227: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]但愿吧。" },
    530228: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "在舒缓的歌曲中，你们二人闭上眼\n睛靠再座位上。" },

    530229: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "不远处一个村民骑着摩托，赶着两\n头驴子过来了，博文朗迎了上去。" },
    530230: { nxId: 530232, scene: 53404, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（说什么呢？这么起劲。看我干什\n   么？）" },
    530232: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "你还在奇怪，博文朗已经牵着两头\n驴子回来了。" },
    530233: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "haha2", sound: "", txt: "[我]干嘛呀？你牵人家驴子干什么？" },
    530234: { nxId: 1, scene: 53404, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]遇到好心人了，\n他把驴子借给我们代步。" },
    530235: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你是认真的吗？" },
    530236: { nxId: 1, scene: 53404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]当然了，他还愿意回去开车，帮我\n把车送去修。" },
    530237: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我们总不能两条腿走吧！" },
    530238: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我错了。" },
    530239: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]什么？" },
    530240: { nxId: 1, scene: 53404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]你的魅力还真是男女不限啊。" },
    530241: { nxId: 1, scene: 53404, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]哈哈哈哈，\n是加泰罗尼亚乡亲比较热情。" },
    530242: { nxId: 1, scene: 53404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]来吧殿下，上驴了。" },
    530243: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我不要，总觉得怪怪的啊。\n驴子真的能骑吗？" },
    530244: { nxId: 1, scene: 53404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]驴可是加泰罗尼亚的象征，当地人\n把驴看作是家人，所以对驴子要尊重。" },
    530245: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好吧好吧。" },
    530246: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "你伸出一只手去摸驴脑袋，没想到\n驴子伸出长长的舌头，在你的脸上\n舔了一口。" },
    530247: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "黏糊糊的口水糊了你一脸，\n你惊叫着后退。" },
    530248: { nxId: 1, scene: 53404, doing: 2, item: 211003, music: "", sound: "", txt: "[我]妈呀！它舔我！" },
    //驴哥登场，此处应有掌声
    530249: { nxId: 1, scene: 53404, doing: 2, item: 212202, music: "", sound: "lv1", txt: "[栗色驴]嗯啊~嗯啊~" },//补驴叫
    530250: { nxId: 1, scene: 53404, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]哈哈哈哈哈，看来它喜欢你。" },
    530251: { nxId: 1, scene: 53404, doing: 2, item: 212202, music: "", sound: "", txt: "[栗色驴]嗯啊~嗯啊~" },

    530252: { nxId: 1, scene: 53404, doing: 4, item: 45309, music: "", sound: "", txt: "分支选择" },
    //A 
    530253: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "博文朗大笑着，替你擦干净脸。小\n驴走到你身边，蹭了蹭你。" },
    530254: { nxId: 1, scene: 53404, doing: 2, item: 212202, music: "", sound: "lv2", txt: "[栗色驴]嗯啊~嗯啊~" },
    530255: { nxId: 530258, scene: 53404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]好吧好吧，别卖萌！没想到有一天\n我会觉得一头驴可爱。" },
    //B
    530256: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]感觉跟二哈有点像啊……" },
    530257: { nxId: 1, scene: 53404, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]哈哈哈哈，你这个脑回路才适合艺\n术创作呢。" },

    530258: { nxId: 1, scene: 53404, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]我看这只花驴就叫毕加索，那只呆\n的叫胡安好了。" },
    530259: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]什么呀，文绉绉的，一点也不有趣！" },
    530260: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我看这只活泼的叫小苹果，那只安\n静的就叫二哥好了。" },
    530261: { nxId: 1, scene: 53404, doing: 2, item: 212201, music: "", sound: "lv1", txt: "[小苹果]嗯啊啊啊啊啊啊~" },
    530262: { nxId: 1, scene: 53404, doing: 2, item: 212101, music: "", sound: "lv2", txt: "[二哥]昂~" },
    530263: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "二哥和小苹果都凑了过来，二哥紧\n紧地跟在小苹果旁边。" },
    530264: { nxId: 1, scene: 53404, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]看来它很喜欢你起的名字" },
    530265: { nxId: 1, scene: 53404, doing: 2, item: 212201, music: "", sound: "", txt: "[小苹果]嗯啊……" },
    530266: { nxId: 1, scene: 53404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]我们先在路边野餐吃点东西再走吧！" },

    530267: { nxId: 1, scene: 53404, doing: 4, item: 45310, music: "", sound: "", txt: "分支选择" },
    //A 野餐线
    530268: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "博文朗栓了二哥，从篮子里拿出块\n布铺在地上。" },
    530269: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你可真有闲情雅致？" },
    530270: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]那你不饿吗？" },
    530271: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "你把小苹果也栓到了那棵树上，从\n篮子里拿出了一个苹果。" },
    530272: { nxId: 1, scene: 53404, doing: 2, item: 212201, music: "", sound: "", txt: "[小苹果]嗯啊……嗯啊……" },
    530273: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "驴子冲着你直叫。" },
    530274: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你是想吃苹果吗？" },
    530275: { nxId: 1, scene: 53404, doing: 2, item: 212201, music: "", sound: "", txt: "[小苹果]嗯啊~" },
    530276: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好吧，给你一个苹果。" },
    530277: { nxId: 1, scene: 53404, doing: 2, item: 212201, music: "", sound: "", txt: "[小苹果]嗯啊~" },
    530278: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "小苹果吃着苹果，旁边的二哥就看\n着，博文朗也丢了一个苹果过去，\n滚到了二哥面前，但它不为所动。" },
    530279: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]怎么不吃啊？" },
    530280: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "你正准备捡起苹果，二哥却把苹果\n护到了蹄子后面。" },
    530281: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]真奇怪，不吃，还要护着？" },
    530282: { nxId: 1, scene: 53404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]好了，你别管驴子了，\n来一片tapas。" },
    530283: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那是什么？" },
    530284: { nxId: 1, scene: 53404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]这里的一种方便食物，\n跟三明治差不多。" },
    530285: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "你吃着手中的食物，看着周围漫山\n遍野的草地。" },
    530286: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这里怎么不养一些牛羊呢？这么好\n的草场，怪可惜的。" },
    530287: { nxId: 1, scene: 53404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]这里土地是私人的。主人为了土地\n能够保持肥沃，会根据土地状况，" },
    530288: { nxId: 1, scene: 53404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]选择所要耕种的作物，不会揠苗助\n长，过度开发。" },
    530289: { nxId: 1, scene: 53404, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（城市助长人的欲望。人的欲望总\n   是极具破会性。）" },
    530290: { nxId: 1, scene: 53404, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（如果人能懂得控制自己的欲望，\n   也不会酿成那么多惨剧。）" },
    530291: { nxId: 1, scene: 53404, doing: 2, item: 212201, music: "", sound: "lv2", txt: "[小苹果]嗯啊~" },
    530292: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "你一看苹果已经被小苹果吃完了，\n它挣扎着舔着你的篮子。" },
    530293: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]剩下的可不能给你。" },
    530294: { nxId: 1, scene: 53404, doing: 2, item: 212201, music: "", sound: "", txt: "[小苹果]（沮丧）嗯啊……" },
    530295: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "二哥把自己藏的苹果用嘴努了过去，\n小苹果高兴的吃了起来。" },
    530296: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这俩驴子关系这么好啊？" },
    530297: { nxId: 1, scene: 53404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]驴友呗！" },
    530298: { nxId: 1, scene: 53404, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（真羡慕他们如此情深义重，无忧\n   无虑……）" },
    530299: { nxId: 1, scene: 53404, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（如果人与人少一点计较，是不是\n   人际关系就会变得简单一些？）" },
    530300: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "你躺在野餐垫上，博文朗也适时躺\n在了你的身边，一阵风吹过，发丝\n挂在了你的脸上。" },
    530301: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你干什么？" },
    530302: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]别动！" },
    530303: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "博文朗伸手帮你拨开，你们互相看\n着对方的眼睛。\n博文朗慢慢凑了过来……" },
    530304: { nxId: 1, scene: 53404, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（这个男人果然好帅啊！）" },
    530305: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "你感受着他的气息，越来越近……" },
    530306: { nxId: 1, scene: 53404, doing: 6, item: 65301, music: "", sound: "", txt: "CG动画" },//王者的凝视
    530307: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]哎呦！" },
    530308: { nxId: 1, scene: 53404, doing: 2, item: 212201, music: "", sound: "lv1", txt: "[小苹果]嗯啊啊啊啊啊啊~" },
    530309: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "你回过神，发现博文朗苦恼地抱着\n腿，瞪着小苹果。" },
    530310: { nxId: 1, scene: 53404, doing: 2, item: 211003, music: "", sound: "", txt: "[我]怎么了？" },
    530311: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]被驴子踹了一脚。" },

    530312: { nxId: 1, scene: 53404, doing: 4, item: 45311, music: "", sound: "", txt: "分支选择" },
    //A 
    530313: { nxId: 1, scene: 53404, doing: 2, item: 212201, music: "", sound: "", txt: "[小苹果]嗯啊~" },
    530314: { nxId: 1, scene: 53404, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]喜欢我的人可太多了，只是没想到\n连驴子都要排挤我。" },
    530315: { nxId: 530322, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……自恋……" },
    //B
    //正常分支
    530316: { nxId: 1, scene: 53404, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]现在？现在可不是个好时候。" },
    //博3
    530317: { nxId: 1, scene: 53404, doing: 7, item: 71011, music: "", sound: "", txt: "好感度" },
    530318: { nxId: 530322, scene: 53404, doing: 2, item: 211002, music: "", sound: "", txt: "[我]……想什么呢？\n不要脸！活该被驴踢！" },
    //特殊分支
    530319: { nxId: 1, scene: 53404, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]现在？现在可不是个好时候。" },
    //博4
    530320: { nxId: 1, scene: 53404, doing: 7, item: 71012, music: "", sound: "", txt: "好感度" },
    530321: { nxId: 1, scene: 53404, doing: 2, item: 211002, music: "", sound: "", txt: "[我]……想什么呢？\n不要脸！活该被驴踢！" },

    530322: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "小苹果挤了过来，博文朗被推到在\n地。小苹果从野餐篮里又扒拉出一\n个苹果，叼起来跑开了。" },
    530323: { nxId: 1, scene: 53404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]你以前是不是欺负过它啊？" },
    530324: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]怎么可能，我小时见到它们躲都来\n不及。" },
    530325: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我没事了，收拾下我们去镇上！\n惹不起躲得起！" },
    530326: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "博文朗用路边的野花随手扎了一个\n花束。" },

    530327: { nxId: 1, scene: 53404, doing: 4, item: 45312, music: "", sound: "", txt: "分支选择" },
    //A 
    530328: { nxId: 1, scene: 53404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]给人的见面礼，不带点东西总是不\n太好？" },
    530329: { nxId: 530333, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你这一样也没有什么诚意吧？" },
    //B
    530330: { nxId: 1, scene: 53404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]你喜欢啊？" },
    530331: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没有，如果你要给我我肯定不收，\n太没诚意了！" },
    530332: { nxId: 1, scene: 53404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]你要是喜欢我每周给你买？这\n个另有用途！" },

    530333: { nxId: 530336, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]休息差不多了，我们赶紧上路吧。" },

    //B 走人线
    530334: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我不要，我想回去洗脸。" },
    530335: { nxId: 1, scene: 53404, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]好吧好吧，那我们赶紧回去吧。" },

    530336: { nxId: 1, scene: 53404, doing: 1, item: 0, music: "", sound: "", txt: "博文朗解开绳子，把你扶上小苹果，\n你抓着缰绳，悠悠地往前走。" },
    530337: { nxId: 1, scene: 53404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]驾~驾~" },
    530338: { nxId: 1, scene: 53404, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]没想到你车开地摇摇晃晃，驴子骑\n得却不错。" },
    530339: { nxId: 1, scene: 53404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我可不想要这种天赋，\n还有多久到啊？" },
    530340: { nxId: 1, scene: 53404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]十分钟吧！" },

    //艺术堡垒
    530341: { nxId: 1, scene: 53601, doing: 0, item: 0, music: "XS", sound: "", txt: "背景初始化" },
    530342: { nxId: 1, scene: 53604, doing: 1, item: 0, music: "", sound: "", txt: "你们晃晃悠悠地进入镇子。许多人\n家的院子里都种满了美丽的花朵。" },
    530343: { nxId: 1, scene: 53604, doing: 1, item: 0, music: "", sound: "", txt: "博文朗带着你来到一座古旧的石质\n别墅前。" },
    530344: { nxId: 1, scene: 53604, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]我们到了！" },
    530345: { nxId: 1, scene: 53604, doing: 2, item: 211003, music: "", sound: "", txt: "[我]这么大一宅子，你这朋友该不是什\n么贵族吧！" },
    530346: { nxId: 1, scene: 53604, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]这就是普通民宅而已，只不过二百\n多年历史了。" },
    530347: { nxId: 1, scene: 53604, doing: 2, item: 211003, music: "", sound: "", txt: "[我]天呐！那是不是很贵？" },
    530348: { nxId: 1, scene: 53604, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]欧洲的这种房子很便宜的，你要是\n喜欢可以在这多住几天？" },

    530349: { nxId: 1, scene: 53604, doing: 4, item: 45313, music: "", sound: "", txt: "分支选择" },
    //A
    530350: { nxId: 1, scene: 53604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]在都市生活久了，反而有时候会怀\n念乡间的生活，真是惬意的时光。" },
    530351: { nxId: 530363, scene: 53604, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]对！" },
    //B
    530352: { nxId: 1, scene: 53604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]真让我住到这么个乡下一两天大概\n还好，多几个月不得把我憋死？" },
    530353: { nxId: 1, scene: 53604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]手机信号都没有。" },
    530354: { nxId: 530363, scene: 53604, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]我丝毫不担心你会无聊，我们能做\n的事情太多了。" },
    //C
    530355: { nxId: 1, scene: 53604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这样死皮赖脸地住人家家里，这种\n事我可做不出来。" },
    530356: { nxId: 530363, scene: 53604, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]若是这房子的主人硬是要留你呢？\n别担心，他十分好客。" },
    
    //骚包胡安 
    530363: { nxId: 530357, scene: 53604, doing: 1, item: 0, music: "", sound: "", txt: "说话间，别墅大门打开，走出一位\n很英俊的男士。" },
    530357: { nxId: 1, scene: 53604, doing: 2, item: 212402, music: "", sound: "", txt: "[男士]嘿，博文朗！" },
    530358: { nxId: 1, scene: 53604, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]嘿，胡安！这是我的朋友林晓璐。" },
    530359: { nxId: 1, scene: 53604, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]你好，林晓璐。我听博文朗提起你，\n真是比想象中还要美丽啊！" },
    530360: { nxId: 1, scene: 53604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]原来你就是胡安，你好。" },
    530361: { nxId: 1, scene: 53604, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]怎么？" },
    530362: { nxId: 530364, scene: 53604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]他刚刚给这两头驴子起名字，一头\n就打算叫胡安，被我阻止了。" },
    530364: { nxId: 1, scene: 53604, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]你又来这套？" },
    530365: { nxId: 1, scene: 53604, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]玩笑而已。" },
    530366: { nxId: 1, scene: 53604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]小苹果和二哥现在怎么办？" },
    530367: { nxId: 1, scene: 53604, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]你不用管他们，他们本就自由自在\n的生活在这里。" },
    530368: { nxId: 530999, scene: 53604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]天，我都要羡慕起驴子来了！" },
    //石堡内部
    530999: { nxId: 530369, scene: 53701, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    530369: { nxId: 1, scene: 53704, doing: 1, item: 0, music: "", sound: "", txt: "胡安带着你们走进别墅，石质墙壁\n上挂满了各式各样的画。" },
    530370: { nxId: 1, scene: 53704, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]要来点干邑吗?" },
    530371: { nxId: 1, scene: 53704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好的，谢谢，一点点就好。" },
    530372: { nxId: 1, scene: 53704, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我要加点雪碧。" },
    530373: { nxId: 1, scene: 53704, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]没有你的。" },
    530374: { nxId: 1, scene: 53704, doing: 1, item: 0, music: "", sound: "", txt: "胡安倒了酒递给了你，博文朗自己\n熟门熟路地倒了酒。" },

    530375: { nxId: 1, scene: 53704, doing: 4, item: 45314, music: "", sound: "", txt: "分支选择" },
    //A
    530376: { nxId: 1, scene: 53704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我觉得你的画比博文朗的画有意思\n多了。" },
    530377: { nxId: 1, scene: 53704, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]感谢您的夸奖，你可是第一个这么\n说的人。" },
    530378: { nxId: 1, scene: 53704, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]我一直都觉得我的画跟博文朗差的\n很远，我一般都是自我欣赏罢了。" },
    530379: { nxId: 530384, scene: 53704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我就更喜欢你的风格，轻松自在。" },
    //B
    530380: { nxId: 1, scene: 53704, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]他从小就这么喝，改不过来。" },
    530381: { nxId: 1, scene: 53704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是啊，一点也不高级。" },
    530382: { nxId: 1, scene: 53704, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]说什么呢！酒怎么喝还不是自己开\n心就好！" },
    530383: { nxId: 1, scene: 53704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好，你开心就好咯。" },

    530384: { nxId: 1, scene: 53704, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]胡安其实还是一个诗人。" },
    530385: { nxId: 1, scene: 53704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]噢，那我能读读他的诗吗？" },
    530386: { nxId: 1, scene: 53704, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]你应该看不懂，\n他只写本地语的诗歌。" },
    530387: { nxId: 1, scene: 53704, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]一个诗人，不应该用他人的语言玷\n污自己的诗句。" },
    530388: { nxId: 1, scene: 53704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我理解，因为一旦翻译，总会失去\n原来的美。" },
    530389: { nxId: 1, scene: 53704, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]你能理解真是太好了！" },
    530390: { nxId: 1, scene: 53704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那你的诗出版了吗？也许可以给我\n一本以后看？" },
    530391: { nxId: 1, scene: 53704, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]他就没出版过自己的诗。" },
    530392: { nxId: 1, scene: 53704, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]他恨这个世界，所以他的诗只写给\n自己看，以此报复，十足的怪胎。" },
    530393: { nxId: 1, scene: 53704, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]你还说我？你不也一样？是不是要\n我揭穿你才行？" },
    530394: { nxId: 1, scene: 53704, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]那我不说了……" },
    530395: { nxId: 1, scene: 53704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是什么让你这么憎恨这个世界？我\n看不出来啊？" },
    530396: { nxId: 1, scene: 53704, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]你不觉得现在的社会太冰冷了吗？\n人与人之间缺少爱。" },

    530397: { nxId: 1, scene: 53704, doing: 4, item: 45315, music: "", sound: "", txt: "分支选择" },
    //A
    530398: { nxId: 1, scene: 53704, doing: 1, item: 0, music: "", sound: "", txt: "你饶有意味的看着博文朗。" },
    530399: { nxId: 1, scene: 53704, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]对，他这点跟我一样，所以我们才\n能成为好朋友。" },
    530400: { nxId: 1, scene: 53704, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]不然我可忍受不了他这么一个自大\n狂在我身边。" },
    530401: { nxId: 1, scene: 53704, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈哈，其实你们的关系好得很。" },
    //博1
    530402: { nxId: 530411, scene: 53704, doing: 7, item: 71009, music: "", sound: "", txt: "好感度" },
    //B
    530403: { nxId: 1, scene: 53704, doing: 1, item: 0, music: "", sound: "", txt: "胡安耸耸肩，看不出来是不是赞同\n你的观点。" },
    530404: { nxId: 1, scene: 53704, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]可能是我活的太久了。" },
    530405: { nxId: 1, scene: 53704, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]也有可能是你活的太宅了。" },
    //博1
    530406: { nxId: 530411, scene: 53704, doing: 7, item: 71009, music: "", sound: "", txt: "好感度" },
    //C
    530407: { nxId: 1, scene: 53704, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]嘿嘿嘿，这种悲观的态度只适合我\n这样的人。" },
    530408: { nxId: 1, scene: 53704, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]你这样的美丽女士可不能这么想，\n否则世界都会哭泣的。" },
    530409: { nxId: 1, scene: 53704, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈哈，其实你们的关系好得很。" },
    //博1
    530410: { nxId: 1, scene: 53704, doing: 7, item: 71009, music: "", sound: "", txt: "好感度" },

    530411: { nxId: 1, scene: 53704, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]时间差不多了，我去准备下午餐。\n博文朗，你们去完记得回来吃饭。" },
    530412: { nxId: 1, scene: 53704, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]嗯。" },
    530413: { nxId: 1, scene: 53704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]什么事情啊？" },
    530414: { nxId: 1, scene: 53704, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]不知道你愿不愿意跟我一起去拜祭\n我过世的外婆。" },
    530415: { nxId: 1, scene: 53704, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]每次回来，我都会去看她……" },
    530416: { nxId: 1, scene: 53704, doing: 2, item: 211003, music: "", sound: "", txt: "[我]原来你摘花是为了去祭奠亲人啊……" },
    530417: { nxId: 1, scene: 53704, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]对，外婆喜欢花，以前养了很多。" },
    530418: { nxId: 1, scene: 53704, doing: 1, item: 0, music: "", sound: "", txt: "博文朗的神情有一些柔软，和他风\n流的样子一点都不像。" },

    530419: { nxId: 1, scene: 53704, doing: 4, item: 45316, music: "", sound: "", txt: "分支选择" },
    //A 墓地线
    //村口墓地
    530420: { nxId: 1, scene: 53801, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    530421: { nxId: 1, scene: 53804, doing: 1, item: 0, music: "", sound: "", txt: "你跟着博文朗来到镇口，绕过一道\n围墙就是一处公共墓地。" },
    530422: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你们把墓地就建在镇子里的吗？" },
    530423: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]对，每个镇子都有，大概也就几百\n平方米，有的里面种着树。" },
    530424: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这不会埋不下吗？" },//思路清奇啊 
    530425: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]一个人死后能够占多大地方呢？" },
    530426: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]一两平米吧，怎么了？" },
    530427: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]这里的人会把旧的棺椁埋到，更深\n的地方，" },
    530428: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]这样就会有新的位置，可以安葬后\n面去世的人。" },
    530429: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]还能这样吗？" },
    530430: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]生活总是会让人们不断的开发出新\n的想法，去面对一个又一个问题。" },
    530431: { nxId: 1, scene: 53804, doing: 1, item: 0, music: "", sound: "", txt: "你们走到墓碑前，博文朗把花束放\n下，说了一些你听不懂的话。" },

    530432: { nxId: 1, scene: 53804, doing: 4, item: 45317, music: "", sound: "", txt: "分支选择" },
    //A
    //正常分支
    530433: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]虽然我不认识您，您也不认识我，\n但是抚养了博文朗，他很优秀。" },
    530434: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]如果您泉下有知应该会很欣慰吧！" },
    530435: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]谢谢你陪我。" },
    //博2
    530436: { nxId: 530450, scene: 53804, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" },
    //特殊分支
    530437: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]虽然我不认识您，您也不认识我，\n但是抚养了博文朗，他很优秀。" },
    530438: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]如果您泉下有知应该会很欣慰吧！" },
    530439: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]谢谢你陪我。" },
    //博3
    530440: { nxId: 530450, scene: 53804, doing: 7, item: 71011, music: "", sound: "", txt: "好感度" },
    
    //B
    530441: { nxId: 1, scene: 53804, doing: 1, item: 0, music: "", sound: "", txt: "你站在一旁，拍拍博文朗的肩膀。" },
    530442: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]谢谢你陪我。" },
    //博1
    530443: { nxId: 530450, scene: 53804, doing: 7, item: 71009, music: "", sound: "", txt: "好感度" },

    //C
    530444: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我问外婆喜欢我送的花么？" },
    530445: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]她肯定会很高兴你送的花的。" },
    530446: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]也许吧。真是惭愧，其实我并不知\n道外婆的喜好。" },
    530447: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]只要你有这份心意就够了。" },
    530448: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]嗯，谢谢你陪我。" },
    //博1
    530449: { nxId: 1, scene: 53804, doing: 7, item: 71009, music: "", sound: "", txt: "好感度" },

    530450: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]看样子你和外婆感情很好？" },
    530451: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]是的，我对亲情所有的理解，都来\n源于她。" },
    530452: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]跟我说说吧？让我更了解你一点。" },
    530453: { nxId: 1, scene: 53804, doing: 1, item: 0, music: "baby", sound: "", txt: "博文朗拉着你，在一处平整的草地\n上坐下，像是在思考从哪里开始。" },
    530454: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我父亲的那个年代，和一个西班牙\n女人结婚可不是什么幸运的事情。" },
    530455: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]生活不顺，后来母亲也有了情人，\n我只好跟着外婆生活。" },
    530456: { nxId: 1, scene: 53804, doing: 2, item: 211003, music: "", sound: "", txt: "[我]你那时候多大？" },
    530457: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]十二岁。" },
    530458: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我来的时候不会说西班牙语，就像\n个哑巴……" },
    530459: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]对周围的人也很抗拒，包括从未蒙\n面的外婆……" },
    530460: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]她爱我，但是很严厉，这激发了我\n们的矛盾。" },
    530461: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]等我懂事了，她却生病了，很快……" },
    530462: { nxId: 1, scene: 53804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗看着不远处的坟墓。你紧紧\n地握住了他的手。" },
    530463: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]别难过，相信外婆不会怪你的。" },
    530464: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]她当然不会责备我，\n她是一个很好的人。" },
    530465: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]她引导了我的人生，\n是我在责备自己。" },
    530466: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]跟我讲讲你们的事情吧？\n你们是怎么相处的？" },
    530467: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我在这个镇子长大，小时候我最喜\n欢看书，把所有的书都翻烂了。" },
    530468: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]开始我想当作家，但没人教中文，\n我又讨厌西班牙语，就放弃了。" },
    530469: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我还想过搞音乐，我有很多想法，\n情绪，想找个合适方式释放他们。" },
    530470: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]那时候迷茫了好一阵子，后来是外\n婆指引我走上了绘画的道路。" },
    530471: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]她过世后，我才体会到她那一点一\n滴的温柔，可惜什么都晚了……" },
    530472: { nxId: 1, scene: 53804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗怔怔地看着远方，你看着博\n文朗的背影，心也跟着纠了起来。" },

    530473: { nxId: 1, scene: 53804, doing: 4, item: 45318, music: "SP", sound: "", txt: "分支选择" },
    //A
    //正常分支
    530474: { nxId: 1, scene: 53804, doing: 1, item: 0, music: "", sound: "", txt: "你伸手抱住了博文朗的肩膀，他的身\n体僵硬了一瞬间，但很快就靠着你\n的肩膀。" },
    530475: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没关系的，以后我会陪着你的。" },//说话过大脑啊
    530476: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]谢谢。" },
    //博1
    530477: { nxId: 530493, scene: 53804, doing: 7, item: 71009, music: "", sound: "", txt: "好感度" },
    //特殊分支
    530478: { nxId: 1, scene: 53804, doing: 1, item: 0, music: "", sound: "", txt: "你伸手抱住了博文朗的肩膀，他的身\n体僵硬了一瞬间，但很快就靠着你\n的肩膀。" },
    530479: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没关系的，以后我会陪着你的。" },
    530480: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]谢谢。" },
    //博2
    530481: { nxId: 530493, scene: 53804, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" },
    //B
    530482: { nxId: 1, scene: 53804, doing: 1, item: 0, music: "", sound: "", txt: "你紧紧地抓着博文朗的手，想给他\n力量。半晌，博文朗露出一个微笑。" },
    530483: { nxId: 1, scene: 53804, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]让你听了这么无聊的事情……" },
    530484: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不开心就不要笑，没关系的。" },
    530485: { nxId: 1, scene: 53804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗嘴角无力垂下，叹了口气。" },
    530486: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我想念她了。" },
    //博1
    530487: { nxId: 530493, scene: 53804, doing: 7, item: 71009, music: "", sound: "", txt: "好感度" },
    //C
    530488: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]外婆就算是在天堂，也会一直希望\n你开心的。" },
    530489: { nxId: 1, scene: 53804, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]我知道。只是有时候……" },
    530490: { nxId: 1, scene: 53804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗的话停住了，露出了一个勉\n强的笑。" },
    530491: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]谢谢你陪着我。" },
    //博1
    530492: { nxId: 1, scene: 53804, doing: 7, item: 71009, music: "", sound: "", txt: "好感度" },

    530493: { nxId: 1, scene: 53804, doing: 2, item: 211401, music: "Sub", sound: "", txt: "[伊莲娜]你们……" },
    530494: { nxId: 1, scene: 53804, doing: 1, item: 0, music: "", sound: "", txt: "你被声音一惊，看到伊莲娜抱着花\n缓缓走来。" },
    530495: { nxId: 1, scene: 53804, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]我来看看婆婆，\n昨天的事情，很抱歉。" },
    530496: { nxId: 1, scene: 53804, doing: 1, item: 0, music: "", sound: "", txt: "伊莲娜把花束放在了墓前。" },
    530497: { nxId: 1, scene: 53804, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]很抱歉，好久没来看您了……\n很巧，博也来看您了。" },
    530498: { nxId: 1, scene: 53804, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]他这么久没来，这次竟然带着另一个\n女人来看您了？你高兴吗？" },
    530499: { nxId: 1, scene: 53804, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]伊莲娜，够了！" },
    530500: { nxId: 1, scene: 53804, doing: 1, item: 0, music: "", sound: "", txt: "伊莲娜转身对着你，眼中像是在酝\n酿着一场风暴。" },
    530501: { nxId: 1, scene: 53804, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]看来他很喜欢你？" },
    530502: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是吗？" },
    530503: { nxId: 1, scene: 53804, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]除了我以外，你应该是他第一个带\n来这里的女人，" },
    530504: { nxId: 1, scene: 53804, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]他总是不愿意提起自己的过去。" },
    530505: { nxId: 1, scene: 53804, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]伊莲娜！闭嘴！你不该来这里的！" },
    //加泰罗尼亚村姑威武，给你点赞！
    530506: { nxId: 1, scene: 53804, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]你、我、婆婆，我们三个人的关系\n是如此亲密，我为什么不可以来！" },
    530507: { nxId: 1, scene: 53804, doing: 1, item: 0, music: "", sound: "", txt: "伊莲娜不再理会博文朗，而是转向\n你，诚恳的说。" },
    530508: { nxId: 1, scene: 53804, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]昨天吓到你了吧？我也不知道我那\n时候在想什么。" },
    530509: { nxId: 1, scene: 53804, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]这个送给你，\n我亲手做的，当作道歉。" },
    530510: { nxId: 1, scene: 53804, doing: 1, item: 0, music: "", sound: "", txt: "伊莲娜从口袋里拿出一个吊坠，和\n博文朗车上挂的那个一样！" },//等插图
    530511: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……谢谢……" },
    530512: { nxId: 1, scene: 53804, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]说完你可以走了！以后我也不想看\n到你出现在这里！" },

    530513: { nxId: 1, scene: 53804, doing: 4, item: 45319, music: "", sound: "", txt: "分支选择" },
    //A 圣母白莲花走这边
    530514: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你别这样，人家也是一片心意。" },
    530515: { nxId: 530521, scene: 53804, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]没有关系。" },
    //B 自私的恋爱狗走这里
    530516: { nxId: 1, scene: 53804, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]难道我想婆婆了，不能来看她吗？" },
    530517: { nxId: 530521, scene: 53804, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]……你应该去过你自己的生活……" },
    // 田园女权喷子走这里
    530518: { nxId: 1, scene: 53804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你怎么可以这么对女士说话，太没\n绅士风度了！" },
    530519: { nxId: 1, scene: 53804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗沉默不语。" },
    530520: { nxId: 1, scene: 53804, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]没有关系。" },

    530521: { nxId: 1, scene: 53804, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]我明白的，那我走了。" },
    530522: { nxId: 1, scene: 53804, doing: 1, item: 0, music: "", sound: "", txt: "伊莲娜向你们点头致意，看了一眼\n外婆的墓碑，然后转身离开了。" },
    530523: { nxId: 1, scene: 53804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗看着伊莲娜远去的背影，一\n言不发，良久，他才转向你，一脸歉意。" },
    530524: { nxId: 1, scene: 53804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]对不起，我没想到……" },
    530525: { nxId: 1, scene: 53804, doing: 2, item: 211004, music: "", sound: "", txt: "[我]没关系的，我们走吧，胡安和午餐\n还在等我们。" },
    530526: { nxId: 1, scene: 53804, doing: 1, item: 0, music: "", sound: "", txt: "你拉起博文朗的手，一起返回胡安\n别墅。胡安已经做好午餐等你们。" },
    530527: { nxId: 530537, scene: 53804, doing: 1, item: 0, music: "", sound: "", txt: "饭菜可口，美酒香甜，一时间宾主\n尽欢。饭后，博文朗和你坐在没有\n篱笆的后院里，看着成片的田野。" },
    //转乡村漫步

    //B 古宅线
    530528: { nxId: 1, scene: 53704, doing: 1, item: 0, music: "", sound: "", txt: "你独自参观了胡安家这古老的宅子。\n古老的氛围包围着你。" },
    530529: { nxId: 1, scene: 53704, doing: 1, item: 0, music: "", sound: "", txt: "不知过了多久，你在门口看到博文\n朗走了回来，身后跟着气急败坏的\n伊莲娜。" },
    530530: { nxId: 1, scene: 53704, doing: 1, item: 0, music: "", sound: "", txt: "不知博文朗说了什么之后，伊莲娜\n伤心地离开了。" },
    530531: { nxId: 1, scene: 53704, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（怎么又是她……）" },
    530532: { nxId: 1, scene: 53704, doing: 1, item: 0, music: "", sound: "", txt: "博文朗怔怔的看着伊莲娜的背影，\n叹了口气。你赶紧走到了他的身边。" },
    530533: { nxId: 1, scene: 53704, doing: 2, item: 211003, music: "", sound: "", txt: "[我]你怎么样？" },
    530534: { nxId: 1, scene: 53704, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]没事，走吧，尝尝胡安的厨艺。" },
    530535: { nxId: 1, scene: 53704, doing: 2, item: 211004, music: "", sound: "", txt: "[我]好啊。" },
    530536: { nxId: 1, scene: 53704, doing: 1, item: 0, music: "", sound: "", txt: "饭菜可口，美酒香甜，一时间宾主\n尽欢。饭后，博文朗和你坐在没有\n篱笆的后院里，看着成片的田野。" },
    //转乡村漫步

    //乡村漫步
    530537: { nxId: 1, scene: 53901, doing: 0, item: 0, music: "missing", sound: "", txt: "背景初始化" },
    530538: { nxId: 1, scene: 53904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我以前常坐在这个位置就这么看着\n外面。" },
    530539: { nxId: 1, scene: 53904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]既然你外婆葬在这，那你家不应该\n在这吗？" },
    530540: { nxId: 1, scene: 53904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]卖了。" },
    530541: { nxId: 1, scene: 53904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]为什么要卖呢？这不是你长大的房\n子吗？应该有很多回忆啊？" },
    530542: { nxId: 1, scene: 53904, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]回忆大部分的时候都不是那么美好。" },
    530543: { nxId: 1, scene: 53904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]对不起，提起你的伤心事儿了……\n咦，你看，那不是小苹果吗？" },
    530544: { nxId: 1, scene: 53904, doing: 1, item: 0, music: "haha", sound: "", txt: "小苹果和二哥并肩在田野里悠闲的\n溜达着，看到你，它们兴奋的挤了\n过来。" },
    530545: { nxId: 1, scene: 53904, doing: 2, item: 212201, music: "", sound: "lv2", txt: "[小苹果]嗯啊~" },
    530546: { nxId: 1, scene: 53904, doing: 2, item: 211004, music: "", sound: "", txt: "[我]嘿，小苹果！" },
    530547: { nxId: 1, scene: 53904, doing: 1, item: 0, music: "", sound: "", txt: "小苹果探头过来。" },
    530548: { nxId: 1, scene: 53904, doing: 2, item: 211004, music: "", sound: "", txt: "[我]喂，喂，我没有苹果啦！" },
    530549: { nxId: 1, scene: 53904, doing: 2, item: 212201, music: "", sound: "", txt: "[小苹果]嗯啊~" },
    530550: { nxId: 1, scene: 53904, doing: 1, item: 0, music: "", sound: "", txt: "小苹果见没有苹果，便缩了脑袋准\n备离开。" },
    530551: { nxId: 1, scene: 53904, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]哈哈哈。" },
    530552: { nxId: 1, scene: 53904, doing: 1, item: 0, music: "", sound: "", txt: "博文朗从胸口掏出一个新的酒壶刚\n拧开，就被小苹果叼了去，咕嘟咕\n嘟喝完，丢在了地上。" },
    530553: { nxId: 1, scene: 53904, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]我的酒！" },
    530554: { nxId: 1, scene: 53904, doing: 2, item: 212201, music: "", sound: "lv1", txt: "[小苹果]嗯啊~嗯嗯啊~啊啊啊啊~嗯啊~" },
    530555: { nxId: 1, scene: 53904, doing: 2, item: 211003, music: "", sound: "", txt: "[我]小苹果不是喝醉了吧？" },
    530556: { nxId: 1, scene: 53904, doing: 1, item: 0, music: "", sound: "", txt: "小苹果一边叫唤一边摇头晃脑的，\n二哥赶紧到旁边让小苹果靠在自己\n的身上。" },
    530557: { nxId: 1, scene: 53904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]他们俩感情真好，难道是夫妻吗？" },
    530558: { nxId: 1, scene: 53904, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]俩都是公驴。" },
    530559: { nxId: 1, scene: 53904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哦，原来是友情啊！" },
    530560: { nxId: 1, scene: 53904, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]我羡慕他们，感情如此坚定，从他\n们出生就没有分开过。" },
    530561: { nxId: 1, scene: 53904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那你呢？\n是不是也渴求一段稳定的感情？" },
    530562: { nxId: 1, scene: 53904, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]过去没有，现在我想试试，不知道\n某人给不给我机会？" },
    530563: { nxId: 1, scene: 53904, doing: 1, item: 0, music: "", sound: "", txt: "你扭过头，不知什么时候博文朗已\n经把他的脸凑了过来。" },

    530564: { nxId: 1, scene: 53904, doing: 4, item: 45320, music: "", sound: "", txt: "分支选择" },
    //A 
    //博1
    530565: { nxId: 1, scene: 53904, doing: 7, item: 71009, music: "", sound: "", txt: "好感度" },
    530566: { nxId: 1, scene: 53904, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]嘿，嘿，让开。" },
    530567: { nxId: 1, scene: 53904, doing: 2, item: 212201, music: "", sound: "", txt: "[小苹果]嗯嗯啊……" },
    530568: { nxId: 1, scene: 53904, doing: 1, item: 0, music: "", sound: "", txt: "你赶紧睁开眼，小苹果不知道什么\n时候探身过来挡在了你们俩中间，\n隔着你们去咬树上的果子。" },
    530569: { nxId: 530595, scene: 53904, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]这小苹果真是讨厌极了！" },
    //B
    530570: { nxId: 1, scene: 53904, doing: 1, item: 0, music: "", sound: "", txt: "小苹果探身过来挡在了你俩中间。" },
    530571: { nxId: 1, scene: 53904, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]嘿！" },
    530572: { nxId: 1, scene: 53904, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈，你来的真是时候。" },
    530573: { nxId: 1, scene: 53904, doing: 1, item: 0, music: "", sound: "", txt: "小苹果隔着你们去咬树上的果子，\n大口大口地咬着。" },
    530574: { nxId: 530595, scene: 53904, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]这小苹果真是讨厌极了！" },
    //C 
    //正常分支
    530575: { nxId: 1, scene: 53904, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（你也渴望稳定的爱情吗？）" },
    530576: { nxId: 1, scene: 53904, doing: 1, item: 0, music: "", sound: "", txt: "你闭上眼睛，伸手搂住了博文朗的\n脖子。你听到博文朗轻笑了一声。" },
    //博2
    530577: { nxId: 1, scene: 53904, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" },
    530578: { nxId: 1, scene: 53904, doing: 1, item: 0, music: "", sound: "", txt: "你闭着眼睛向前吻去，忽然感觉嘴\n边毛茸茸的一片。" },
    530579: { nxId: 1, scene: 53904, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（嗯？嗯嗯嗯？）" },
    530580: { nxId: 1, scene: 53904, doing: 1, item: 0, music: "", sound: "", txt: "你睁开眼，发现小苹果探身过来挡\n在了你们俩中间。" },
    530581: { nxId: 1, scene: 53904, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]嘿，嘿，让开！" },
    530582: { nxId: 1, scene: 53904, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈，看来小苹果不想我亲你" },
    530583: { nxId: 1, scene: 53904, doing: 2, item: 212201, music: "", sound: "lv1", txt: "[小苹果]嗯啊……" },
    530584: { nxId: 530595, scene: 53904, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]这小苹果真是讨厌极了！" },
    //特殊分支
    530585: { nxId: 1, scene: 53904, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（你也渴望稳定的爱情吗？）" },
    530586: { nxId: 1, scene: 53904, doing: 1, item: 0, music: "", sound: "", txt: "你闭上眼睛，伸手搂住了博文朗的\n脖子。你听到博文朗轻笑了一声。" },
    //博3
    530587: { nxId: 1, scene: 53904, doing: 7, item: 71011, music: "", sound: "", txt: "好感度" },
    530588: { nxId: 1, scene: 53904, doing: 1, item: 0, music: "", sound: "", txt: "你闭着眼睛向前吻去，忽然感觉嘴\n边毛茸茸的一片。" },
    530589: { nxId: 1, scene: 53904, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（嗯？嗯嗯嗯？）" },
    530590: { nxId: 1, scene: 53904, doing: 1, item: 0, music: "", sound: "", txt: "你睁开眼，发现小苹果探身过来挡\n在了你们俩中间。" },
    530591: { nxId: 1, scene: 53904, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]嘿，嘿，让开！" },
    530592: { nxId: 1, scene: 53904, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈，看来小苹果不想我亲你" },
    530593: { nxId: 1, scene: 53904, doing: 2, item: 212201, music: "", sound: "lv1", txt: "[小苹果]嗯啊……" },
    530594: { nxId: 1, scene: 53904, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]这小苹果真是讨厌极了！" },

    530595: { nxId: 1, scene: 53904, doing: 2, item: 212201, music: "", sound: "lv2", txt: "[小苹果]昂……" },
    530596: { nxId: 1, scene: 53904, doing: 1, item: 0, music: "", sound: "", txt: "没几下树上的果子就被啃得七零八落。" },
    530597: { nxId: 1, scene: 53904, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]这些驴子真是太无法无天了……" },
    530598: { nxId: 1, scene: 53904, doing: 2, item: 211004, music: "", sound: "", txt: "[我]那还不是你们惯的，自作自受！哈哈哈！" },
    530599: { nxId: 1, scene: 53904, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]行吧，行吧，哈哈哈哈！" },
    530600: { nxId: 1, scene: 53904, doing: 1, item: 0, music: "", sound: "", txt: "说着，博文朗自己也笑了起来。而\n吃饱喝足的小苹果和二哥一起心满\n意足地离开了。" },
    530601: { nxId: 1, scene: 53904, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]对了，明天有我的画展你来吧！" },
    530602: { nxId: 1, scene: 53904, doing: 2, item: 211004, music: "", sound: "", txt: "[我]好啊，我要看看大画家都是怎么忽\n悠……不，自我营销的……" },
    530603: { nxId: 1, scene: 53904, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]哈哈哈哈哈，\n放心，不会让你失望地。" },
    530604: { nxId: 1, scene: 53904, doing: 1, item: 0, music: "", sound: "", txt: "整个下午，博文朗和你都在小镇中\n漫步，享受安静美好的乡间时光。" },
    530605: { nxId: 1, scene: 53904, doing: 1, item: 0, music: "", sound: "", txt: "晚上，再次品尝完胡安的高超厨艺\n后，你感觉有些疲惫，便打算休息了。" },

    //石堡卧室
    530606: { nxId: 1, scene: 53111, doing: 0, item: 0, music: "bowenlang", sound: "", txt: "背景初始化" },
    530607: { nxId: 1, scene: 53114, doing: 1, item: 0, music: "", sound: "", txt: "胡安把你带进了一间整洁的卧室，\n干净的床铺明显是刚收拾过的。" },
    530608: { nxId: 1, scene: 53114, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]今晚你就睡这间房间吧！" },
    530609: { nxId: 1, scene: 53114, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谢谢你，这里非常棒。" },
    530610: { nxId: 1, scene: 53114, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]用不着谢，有什么事儿你喊一句，\n我会听见。" },
    530611: { nxId: 1, scene: 53114, doing: 1, item: 0, music: "", sound: "", txt: "胡安带上门准备出去，你犹豫了一\n下，叫住了他。" },
    530612: { nxId: 1, scene: 53114, doing: 2, item: 211001, music: "", sound: "", txt: "[我]胡安，你和博文朗认识很久了吗？" },
    530613: { nxId: 1, scene: 53114, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]十几年了，哈，这可真是漫长。" },
    530614: { nxId: 1, scene: 53114, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]我想你想问的是别的吧？博文朗的\n一切我都知道。" },
    530615: { nxId: 1, scene: 53114, doing: 1, item: 0, music: "", sound: "", txt: "胡安促狭地看着你，像是看透了一\n切。" },

    530616: { nxId: 1, scene: 53114, doing: 4, item: 45321, music: "", sound: "", txt: "分支选择" },
    //A  10钻买八卦
    530617: { nxId: 1, scene: 53114, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]其实他刚来的时候比较孤僻，我们\n不搭理他，他也从来不亲近别人。" },
    530618: { nxId: 1, scene: 53114, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]后来有一次，天很晚了他还在镇口\n不回家，我就上前去问了。" },
    530619: { nxId: 1, scene: 53114, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]才知道他在等爸爸妈妈来找他，从\n那以后，我们才变得熟悉起来。" },
    530620: { nxId: 1, scene: 53114, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那他的爸爸妈妈有来过吗？" },
    530621: { nxId: 1, scene: 53114, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]没有，后来他也不再等待了。再后\n来，他对爱情似乎也失去了信心。" },
    530622: { nxId: 1, scene: 53114, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]今天伊莲娜是不是来了？" },
    530623: { nxId: 1, scene: 53114, doing: 2, item: 211001, music: "", sound: "", txt: "[我]对，你怎么知道？" },
    530624: { nxId: 1, scene: 53114, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]博文朗的表情。每次见完伊莲娜，\n他眉头要好久才能消下去。" },
    530625: { nxId: 1, scene: 53114, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]伊莲娜还是那么执着啊，何苦呢？" },
    530626: { nxId: 1, scene: 53114, doing: 2, item: 211001, music: "", sound: "", txt: "[我]他们俩是怎么回事？" },
    530627: { nxId: 530630, scene: 53114, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]不过是一些令人烦恼的执念罢了！\n知道对你没什么好处。" },
    //B
    530628: { nxId: 1, scene: 53114, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]这就容易害羞了？看来博文朗还没\n有让你下定决心啊。" },
    530629: { nxId: 1, scene: 53114, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]等你想了解他的时候，就来找我。" },

    530630: { nxId: 1, scene: 53114, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这样啊，好吧！" },
    530631: { nxId: 1, scene: 53114, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]早点休息吧！明天还要去看画展，\n一早就要出发！" },
    530632: { nxId: 1, scene: 53114, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好的，晚安了。" },

    //加泰罗尼亚服装剧情 略 可惜

    //画展  
    530633: { nxId: 1, scene: 53121, doing: 0, item: 0, music: "t2", sound: "", txt: "背景初始化" },
    530634: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "你们来到会场，现在已经几近开馆\n的时间，门口已经有人排队了。" },
    530635: { nxId: 1, scene: 53124, doing: 2, item: 211004, music: "", sound: "", txt: "[我]没想到你的展览还有人排队，不错\n啊，大艺术家。" },
    //此处博文朗换装
    530636: { nxId: 1, scene: 53124, doing: 2, item: 220023, music: "", sound: "", txt: "[博文朗]都是朋友而已。" },
    530637: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "博文朗挽着你走进展览间，到处都\n挂着各式各样的画作，在最主要的\n位置上有一幅画盖着白布。" },
    530638: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这幅怎么遮着？" },
    530639: { nxId: 1, scene: 53124, doing: 2, item: 220023, music: "", sound: "", txt: "[博文朗]这幅是今天初次展出的新画，一会\n儿会有一个仪式。" },
    530640: { nxId: 1, scene: 53124, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]你们来啦？" },
    530641: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "胡安热情的走过来，大力地拍打着\n博文朗的肩膀。" },
    530642: { nxId: 1, scene: 53124, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]分明是你的主场，\n结果来的比我还晚。" },
    530643: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是我比较磨蹭，对不起。" },
    530644: { nxId: 1, scene: 53124, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]哈哈哈哈，看到你今天如此美丽，\n我们多等待些时间也是值得的。" },
    530645: { nxId: 1, scene: 53124, doing: 2, item: 220025, music: "", sound: "", txt: "[博文朗]准备好了就开门吧！" },
    530646: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "胡安打开了门，人们走进展览，许\n多人都来和博文朗握手，热情地交\n谈着。" },
    530647: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我又听不懂你们说什么，会不会很\n尴尬啊？" },
    530648: { nxId: 1, scene: 53124, doing: 2, item: 220022, music: "", sound: "", txt: "[博文朗]你不需要说话，\n你的美丽已经在为你发言了。" },
    530649: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]嘿，博文朗！\n美丽的小姐，你也在这里呢！" },
    530650: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "你回过头，马丁内斯热情地张开了\n双臂，你和他交换了一个拥抱。" },
    530651: { nxId: 1, scene: 53124, doing: 2, item: 211004, music: "", sound: "", txt: "[我]见到你很高兴，\n可爱的马丁内斯先生。" },
    530652: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]我也很高兴，但是我不高兴见到你\n后面那个男人。" },
    530653: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]博文朗死活要我来，搞得我现在特\n别困。" },
    530654: { nxId: 1, scene: 53124, doing: 2, item: 220023, music: "", sound: "", txt: "[博文朗]难得让你出趟门，至于吗？" },
    530655: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我还想吃你做的炸鱼呢？" },
    530656: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]这还不容易，你来锡切斯，\n或者我把配方写给你。" },
    530657: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好的，有机会我一定去！" },
    530658: { nxId: 1, scene: 53124, doing: 2, item: 220022, music: "", sound: "", txt: "[博文朗]那肯定是少不了我，\n哦，我爱锡切斯。" },
    530659: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]小姐，你可得当心他，整天拿着酒\n壶，不知道哪天喝多就进海里了。" },

    530660: { nxId: 1, scene: 53124, doing: 4, item: 45322, music: "", sound: "", txt: "分支选择" },
    //A  哲学气息
    530661: { nxId: 1, scene: 53124, doing: 2, item: 220023, music: "", sound: "", txt: "[博文朗]马丁，你这句话说的很是顺耳。" },
    530662: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我看的住你吗？" },
    530663: { nxId: 1, scene: 53124, doing: 2, item: 220022, music: "", sound: "", txt: "[博文朗]怎么不能？你可以对我做一切事情。" },
    530664: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我不愿意。" },
    530665: { nxId: 530672, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]哈哈哈哈哈哈。" },
    //B
    530666: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]那真是真棒了，省的我一天到晚还\n会担心他。" },
    530667: { nxId: 1, scene: 53124, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]你们有征求过我的意见吗？" },
    530668: { nxId: 530672, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]你的意见不重要。" },
    //C
    530669: { nxId: 1, scene: 53124, doing: 2, item: 220025, music: "", sound: "", txt: "[博文朗]我可没有一个咒我淹死的朋友。" },
    530670: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]你放心，就算你不认我这个朋友，\n你掉海里，我还是会去捞你的。" },
    530671: { nxId: 1, scene: 53124, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈哈！" },

    530672: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "展厅里人逐渐多了起来，博文朗拉\n着你走到那副没有揭幕的画作前。" },
    530673: { nxId: 1, scene: 53124, doing: 2, item: 220025, music: "", sound: "", txt: "[博文朗]今天有一副全新完成的作品。" },
    530674: { nxId: 1, scene: 53124, doing: 2, item: 220023, music: "", sound: "", txt: "[博文朗]这幅画许多年前，我就已经开始创\n作，直到最近才将它完成。" },

    //判断A
    530675: { nxId: 530677, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "博文朗揭开白布，就是那副未完成\n的肖像画，而那张脸显然就是你！\n画的下面标注着文字，only you！" },
    //判断B
    530676: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "博文朗揭开白布，就是那副未完成\n的肖像画，现在那副画的拥有了一\n个陌生少女的容颜。" },

    530677: { nxId: 1, scene: 53124, doing: 2, item: 220023, music: "", sound: "", txt: "[博文朗]我尤其要感谢我的模特，也是我的\n爱人，林晓璐女士。" },
    530678: { nxId: 1, scene: 53124, doing: 2, item: 220023, music: "", sound: "", txt: "[博文朗]是她给了我灵感……" },
    530679: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]啊……" },
    530680: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "博文朗大步走向你，有力的双臂把\n你拉进了他的怀中。" },
    530681: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "周围爆发出一阵阵掌声，大家都以\n羡慕的眼光看着你。" },
    530682: { nxId: 1, scene: 53124, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你竟然先斩后奏。" },
    530683: { nxId: 1, scene: 53124, doing: 2, item: 220025, music: "", sound: "", txt: "[博文朗]大庭广众，你可不能让我丢脸。" },
    530684: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "你心底一阵欢喜，\n反手抱住了博文朗。" },
    530685: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]哦，博，你可真是太幸运了！" },
    //伊莲娜加油
    530686: { nxId: 1, scene: 53124, doing: 2, item: 211401, music: "Sub", sound: "", txt: "[伊莲娜]不！不是她！这不能是她！" },
    530687: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "人群中忽然响起了一阵尖锐的叫声。" },
    530688: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "你转过头，发现伊莲娜用力地推开\n了人群，冲了过来。" },
    530689: { nxId: 1, scene: 53124, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]伊莲娜，你又想搞什么？" },
    530690: { nxId: 1, scene: 53124, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]你应该是我的！\n这幅画也只能画的是我！" },
    530691: { nxId: 1, scene: 53124, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]我们是那么相爱！我是最懂你的！\n这一定是梦！我要醒过来！" },
    //改用西班牙弯刀，砍死负心汉
    530692: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "伊莲娜从包里掏出了一把刀，作势\n要捅自己，博文朗一把抓住了她的\n手臂。" },
    530693: { nxId: 1, scene: 53124, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]你干什么！" },
    530694: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]天哪，伊莲娜，冷静点！" },
    530695: { nxId: 1, scene: 53124, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]伊莲娜，过来，别激动！" },
    530696: { nxId: 1, scene: 53124, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]放开我！放开我！" },
    //有刀为什么要咬呢 
    530697: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "伊莲娜一口咬在博文朗的手臂上，\n鲜血直流。" },
    530698: { nxId: 1, scene: 53124, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]伊莲娜，把刀给我！" },
    530699: { nxId: 1, scene: 53124, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]不要！\n给了你你就离开我了！我不要！" },
    //早说用西班牙弯刀，这一下基本保证博文朗以后画不了画了
    530700: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "博文朗忍着痛，一只手去夺刀，伊\n莲娜激动地挣扎着，刀刃划过了博\n文朗的手臂。" },
    530701: { nxId: 1, scene: 53124, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]该死！" },
    530702: { nxId: 1, scene: 53124, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]啊啊啊啊，博，你疼么，都怪我，\n都是我的错，我……" },
    530703: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "伊莲娜喃喃自语，忽然把到扎进了\n自己的身体，幸好博文朗及时的抓\n住了她的手，刀扎地不深。" },
    530704: { nxId: 1, scene: 53124, doing: 2, item: 211003, music: "", sound: "", txt: "[我]天哪！" },
    530705: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "刀被博文朗夺下扔在了一旁，周围\n的人赶紧上去控制住了伊莲娜。" },
    530706: { nxId: 1, scene: 53124, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]呜呜呜……" },
    530707: { nxId: 1, scene: 53124, doing: 2, item: 211003, music: "", sound: "", txt: "[我]赶紧叫救护车！" },
    530708: { nxId: 1, scene: 53124, doing: 2, item: 212401, music: "", sound: "", txt: "[胡安]我已经打了！" },
    530709: { nxId: 1, scene: 53124, doing: 2, item: 211003, music: "", sound: "", txt: "[我]你没事吧？" },
    530710: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "你拿出餐巾使劲地按在博文朗的手\n臂上，伤口似乎很深。" },
    530711: { nxId: 1, scene: 53124, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]我没想到，她病得这么严重了！\n对不起，把你吓到了吧？" },
    530712: { nxId: 1, scene: 53124, doing: 2, item: 211003, music: "", sound: "", txt: "[我]我没事，倒是你？" },
    530713: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "伊莲娜被架住，呼呼的喘着气。门\n外很快传来了救护车的声音，医护\n人员抬着担架赶了过来。" },
    530714: { nxId: 1, scene: 53124, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]我不走，我不去医院！博，救我！\n我不去医院！" },
    530715: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "伊莲娜惊恐地挣扎着，博文朗推开\n你，温柔地抱住了她，小声地哄着。" },
    530716: { nxId: 1, scene: 53124, doing: 2, item: 220023, music: "", sound: "", txt: "[博文朗]我陪你去，别怕别怕！" },
    530717: { nxId: 1, scene: 53124, doing: 2, item: 220023, music: "", sound: "", txt: "[博文朗]我跟着去医院看看，她变成这样也\n有我的责任。这里就……" },

    530718: { nxId: 1, scene: 53124, doing: 4, item: 45323, music: "kiss", sound: "", txt: "分支选择" },
    //A 
    530719: { nxId: 1, scene: 53124, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]但是……她需要熟悉的人，\n我没有办法。" },
    530720: { nxId: 1, scene: 53124, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]相信我，我只是去照顾她，你是个\n好姑娘，你能理解的对吗？" },
    530721: { nxId: 1, scene: 53124, doing: 2, item: 211015, music: "", sound: "", txt: "[我]……" },
    530722: { nxId: 530724, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]算了，你去吧。" },
    //B
    530723: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "博文朗紧紧地拥抱了你一下，接着\n转身走进了人群中。" },

    530724: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "博文朗随着医护人员离开了，周围\n的人都在窃窃私语。茫然的你回头\n看着那幅画。" },
    530725: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "博文朗对伊莲娜那温柔的神情又在\n你的脑中闪现。" },
    530726: { nxId: 1, scene: 53124, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（我是输了，还是赢了？）" },
    530727: { nxId: -1, scene: 53124, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（这个男人就像一个黑洞，我最终\n   还是被吸了进去。）" },


}

export class CfgChapter5_3 {
    public chapters: any = chapterObj;
    public endChatuList: string[] = ["old#老爷车", "king#王者的凝视", "tai#加泰罗尼亚风光", "bg_1_4#哭泣角落"];
}