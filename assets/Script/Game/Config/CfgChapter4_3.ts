/** 操作ID,下一步操作ID,场景ID,操作类型,具体操作ID,描述 */
/** 操作类型: -1.无 0.背景移动 1.旁白 2.对话 3.人物介绍 4.分支选择 5.插图 6.CG动画 7.好感度 8.衣服选择 9.电话微信 10.回忆 11.彩蛋*/

let chapterObj = {
    430001: { nxId: 1, scene: 21001, doing: 0, item: 0, music: "t2", sound: "", txt: "背景初始化", notopen: 1 },  
    430002: { nxId: 430777, scene: 21002, doing: 0, item: 0, music: "", sound: "", txt: "背景移动" , notopen: 1},
    430777: { nxId: 430778, scene: 21003, doing: 0, item: 0, music: "", sound: "", txt: "背景移动" , notopen: 1},
    430778: { nxId: 430003, scene: 21004, doing: 12, item: 124301, music: "", sound: "", txt: "地点介绍" , notopen: 1},
    430003: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "又一个明媚的早晨，你伸了个懒腰，\n看着窗外的景色，心情不错。" , notopen: 1},
    430004: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "随即你想起今日和博文朗一同出游，\n心中竟然有几分心神不宁。" , notopen: 1},
    430005: { nxId: 1, scene: 21004, doing: 2, item: 211016, music: "", sound: "", txt: "[我]（啊，感情问题问专家啊！）", notopen: 1 },

    430006: { nxId: 430007, scene: 21004, doing: 9, item: 940010, music: "", sound: "", txt: "电话微信" , notopen: 1},

    430007: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "你挂了电话，想想刚才的对话，\n对这一天充满了期待。", notopen: 1 },
    430008: { nxId: 1, scene: 21004, doing: 2, item: 211016, music: "", sound: "", txt: "[我]（主动出击啊！换衣服！）", notopen: 1 },

    430009: { nxId: 1, scene: 35004, doing: 8, item: 0, music: "huanzhuang", sound: "", txt: "换装界面" },
    //火车
    430010: { nxId: 1, scene: 43101, doing: 0, item: 0, music: "t2", sound: "", txt: "背景初始化" },
    430011: { nxId: 1, scene: 43104, doing: 1, item: 0, music: "", sound: "qidi", txt: "你和博文朗在火车站汇合。才坐下\n火车便缓缓地开动起来。" },
    430012: { nxId: 1, scene: 43104, doing: 1, item: 0, music: "", sound: "xingshi", txt: "你刚坐下，正在欣赏车站景色，却\n发现博文朗不停打量你。" },

    430013: { nxId: 1, scene: 43104, doing: 4, item: 44301, music: "", sound: "", txt: "分支选择" },
    //A
    //正常分支
    430014: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]你今天的衣服…… " },
    430015: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]怎么了？有什么不对劲吗？\n这是我非常喜欢的一套衣服。" },
    430016: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]看得出来。我现在就想\n找个大斗篷将你藏起来 。" },
    430017: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]啊？" },
    430018: { nxId: 1, scene: 43104, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]好让别人看不见你的美。" },
    //博1
    430019: { nxId: 430030, scene: 43104, doing: 7, item: 71009, music: "", sound: "", txt: "好感度" },
    //特殊分支
    430020: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我现在真想回家去一趟，\n可惜时间来不及了。 " },
    430021: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]怎么了？什么东西忘带了吗？" },
    430022: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]不是，是你太美丽了。 " },
    430023: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]让我觉得我的打扮有些不合时宜，\n不配站在你的身边。 " },
    430024: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你说的太夸张了。" },
    430025: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]真的，好多人都在偷偷看你。 " },
    430026: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]别说了，你再这样我都想从火车上\n跳下去了。" },
    430027: { nxId: 1, scene: 43104, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]好，让他们羡慕去吧！ " },
    //博2
    430028: { nxId: 430030, scene: 43104, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" },
    //B
    430029: { nxId: 1, scene: 43104, doing: 1, item: 0, music: "", sound: "", txt: "想到这里，你立马就要拿出镜子，\n对面的博文朗却身体前探，他的脸\n几乎挨到你的脸。" },

    430030: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "xingshi", txt: "[博文朗]你今天的一切都很完美，除了一点…… " },
    430031: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]什么？" },
    430032: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]化妆包带了吗？借我用一下。 " },
    430033: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]带了，你要干什么？" },
    430034: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]不会害你的。 " },
    430035: { nxId: 1, scene: 43104, doing: 1, item: 0, music: "", sound: "", txt: "你把化妆包递了过去，博文朗拿出\n了美妆蛋，沾着定妆粉在你脸侧轻\n轻得划了一道直线。" },
    430036: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]闭上眼睛。 " },
    430037: { nxId: 1, scene: 43104, doing: 1, item: 0, music: "", sound: "", txt: "闭上眼睛，你能感觉到粉刷在你脸\n上反复的扫过，博文朗温热的鼻息，\n还有他炽热的目光……" },
    430038: { nxId: 1, scene: 43104, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]你看看，这下完美了。 " },
    430039: { nxId: 1, scene: 43104, doing: 1, item: 0, music: "", sound: "", txt: "你看着定妆粉盒子里的小镜子，\n自己的脸小了很多。" },
    430040: { nxId: 1, scene: 43104, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]替你修饰了一下，\n这样脸会显得更加小巧动人。 " },

    430041: { nxId: 1, scene: 43104, doing: 4, item: 44302, music: "", sound: "xingshi", txt: "分支选择" },
    //A
    430042: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]你只是可以更完美。 " },
    430043: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]避重就轻！" },
    430044: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]太过美丽的人，会让男人失去追求\n的勇气，白璧微瑕会让我更爱你。 " },
    430045: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]花言巧语。" },
    430046: { nxId: 430085, scene: 43104, doing: 1, item: 0, music: "", sound: "", txt: "你看着博文朗灼热真挚的眼睛，\n放弃了探究。" },
    //B
    //正常分支
    430047: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]化妆不过是在脸上作画而已，\n有什么大不了的。" },
    430048: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]一般男人可做不到。" },
    430049: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我也不是一般男人，讨得了女士的\n欢心，这也不算什么难事。" },
    430050: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你这话真是又自大又让人无法讨厌。" },
    430051: { nxId: 1, scene: 43104, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]相信我，你会发现更多。\n欣赏我吧！然后慢慢爱上我。" },
    430052: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那我期待你的表现了" },
    //博1
    430053: { nxId: 430085, scene: 43104, doing: 7, item: 71009, music: "", sound: "", txt: "好感度" },
    //特殊分支
    430054: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]化妆不过是在脸上作画而已，\n有什么大不了的。" },
    430055: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]一般男人可做不到。" },
    430056: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我也不是一般男人，讨得了女士的\n欢心，这也不算什么难事。" },
    430057: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你这话真是又自大又让人无法讨厌。" },
    430058: { nxId: 1, scene: 43104, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]相信我，你会发现更多。\n欣赏我吧！然后慢慢爱上我。" },
    430059: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那我期待你的表现了。" },
    //博2
    430060: { nxId: 430085, scene: 43104, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" },
    //C
    //正常分支
    430061: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]我可以理解为你在为我吃醋吗？" },
    //博2
    430062: { nxId: 1, scene: 43104, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" },
    430063: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我不喜欢和女人牵扯过多的男人" },
    430064: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我从不和过去牵扯。" },
    430065: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哈，避重就轻。\n那就是说，你有很多过去了？" },
    430066: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]不算很多，我只是在不同的时间爱\n上了不同的人而已。" },
    430067: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]听起来像是渣男的借口。" },
    430068: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]爱情是让人捉摸不定的精灵！" },
    430069: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]当它来临时，我的感情是真挚的，\n但是一旦它离去，我也无法阻止。" },
    430070: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你还真是渣地坦坦荡荡啊！" },
    430071: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我不赞同你的观点，\n我认为这是对爱情的另一种负责。" },
    430072: { nxId: 430085, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]爱她的时候就奋力追逐，\n无法给她感情就放手。" },
    //特殊分支
    430073: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]我可以理解为你在为我吃醋吗？" },
    //博3
    430074: { nxId: 1, scene: 43104, doing: 7, item: 71011, music: "", sound: "", txt: "好感度" },
    430075: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我不喜欢和女人牵扯过多的男人" },
    430076: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我从不和过去牵扯。" },
    430077: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哈，避重就轻。\n那就是说，你有很多过去了？" },
    430078: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]不算很多，我只是在不同的时间爱\n上了不同的人而已。" },
    430079: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]听起来像是渣男的借口。" },
    430080: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]爱情是让人捉摸不定的精灵！" },
    430081: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]当它来临时，我的感情是真挚的，\n但是一旦它离去，我也无法阻止。" },
    430082: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你还真是渣地坦坦荡荡啊！" },
    430083: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我不赞同你的观点，\n我认为这是对爱情的另一种负责。" },
    430084: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]爱她的时候就奋力追逐，\n无法给她感情就放手。" },

    430085: { nxId: 1, scene: 43104, doing: 4, item: 44303, music: "", sound: "xingshi", txt: "分支选择" },
    //A
    //正常分支
    430086: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]至少喜欢的时候就要去追，\n谁知道这份感情会不会走到最后呢。" },
    430087: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]是啊，你永远无法预期到谁才是陪\n你到最后的人，所以都不能错过。" },
    //博1
    430088: { nxId: 430101, scene: 43104, doing: 7, item: 71009, music: "", sound: "", txt: "好感度" },
    //特殊分支
    430089: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]至少喜欢的时候就要去追，\n谁知道这份感情会不会走到最后呢。" },
    430090: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]是啊，你永远无法预期到谁才是陪\n你到最后的人，所以都不能错过。" },
    //博2
    430091: { nxId: 1, scene: 43104, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" },
    430092: { nxId: 430101, scene: 43104, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（至少对我这种性格来说，\n有追逐的勇气已经很了不起了）" },
    //B
    430093: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]那就是我不停追逐爱情的原因，\n我相信总有那么一个人存在。" },
    430094: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]所以我也只是你追逐的一个目标？" },
    430095: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]只有我踏进坟墓前，\n我才能回答你这个问题。" },
    430096: { nxId: 430101, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]轻浮的许诺才是最大的谎言，\n但此时我的心希望你是。" },
    //C
    430097: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我从来没有骗过任何一个人。" },
    430098: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你这种坦荡的态度更容易吸引女人。" },
    430099: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]让别人深陷泥潭，自己抽身离开，\n难道不过分吗？" },
    430100: { nxId: 1, scene: 43104, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]这一点上，\n看来我们很难在达成一致了。" },

    430101: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "xingshi", txt: "[博文朗]你没吃饭吧！我带了包子，油条，\n还有豆浆，你要吗？" },
    430102: { nxId: 1, scene: 43104, doing: 1, item: 0, music: "", sound: "", txt: "他一样样拿出包子、油条、豆浆。" },
    430103: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]给我个包子……你怎么会吃这些？" },
    430104: { nxId: 1, scene: 43104, doing: 1, item: 0, music: "", sound: "", txt: "博文朗给你递了个包子，\n自己则斯文优雅地撕着油条。" },
    430105: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]我可是在上海读的小学，巴塞罗那\n的早餐可没有四大金刚吸引我。" },
    430106: { nxId: 1, scene: 43104, doing: 1, item: 0, music: "", sound: "", txt: "你被博文朗逗笑，咬了口包子。" },
    430107: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]有点好奇。你这样的大艺术家，童\n年是什么样的？" },
    430108: { nxId: 1, scene: 43104, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]泥巴、冰棍、连环画、逃学、翘课\n打群架，和一般孩子一样。" },
    430109: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我还以为艺术家的童年有多不同呢。" },
    430110: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]别提我了，说说你自己。\n巴塞罗那给你什么样的感觉？" },

    430111: { nxId: 1, scene: 43104, doing: 4, item: 44304, music: "", sound: "xingshi", txt: "分支选择" },
    //A
    430112: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]街边的卖艺人、墙角的涂鸦，奇异\n的建筑，整个城市都活在浪漫之中。" },
    430113: { nxId: 430117, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]你很了解巴塞。" },
    //B
    430114: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我看到了她的美丽。建筑、风景、\n甚至连风都是美好的味道。" },
    430115: { nxId: 430117, scene: 43104, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]说得真好，值得我们干一杯。" },
    //C
    430116: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]即使是对爱情失望透顶的人，只要\n站在这座城市中，也会渴望爱情。" },

    430117: { nxId: 1, scene: 43104, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]不过在我眼里，\n巴塞罗那缺少爱情……" },
    430118: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]爱情？" },
    430119: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]对。她有着各种风情的艺术作品，\n建筑、绘画、雕塑等等，甚至阳台。" },
    430120: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]但是她始终缺少爱的滋养，\n所以它的美是不完整的。" },
    430121: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你的脑回路真是独特。" },
    430122: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]难道不是吗？男人和女人，才是这\n个世界上最让人着迷的主题。" },
    430123: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]想象一下，香唇，轻轻黏上你的\n就像越过沙漠后，喝下的第一口美酒。" },
    430124: { nxId: 1, scene: 43104, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]啊！我需要来一口。" },

    430125: { nxId: 1, scene: 43104, doing: 4, item: 44305, music: "", sound: "xingshi", txt: "分支选择" },
    //A
    430126: { nxId: 1, scene: 43104, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]早上怎么了？" },
    430127: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]有谁早上就喝酒的？" },
    430128: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]在我眼里喝酒不用分时间场合，\n只看我的心情而已。" },
    430129: { nxId: 1, scene: 43104, doing: 1, item: 0, music: "", sound: "", txt: "博文朗从衣兜里掏出酒壶美美的喝\n上了一口，然后斜靠在座椅上炽热\n的望着你。" },
    //B
    430130: { nxId: 1, scene: 43104, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]你确定？" },
    430131: { nxId: 1, scene: 43104, doing: 2, item: 211004, music: "", sound: "", txt: "[我]咋！只许州官放火，不许百姓点灯？" },
    430132: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]其实我有一个更好的建议：\n比美酒更美味的是香吻。" },
    430133: { nxId: 1, scene: 43104, doing: 2, item: 211004, music: "", sound: "", txt: "[我]你也真的是想得美。给我！" },
    430134: { nxId: 1, scene: 43104, doing: 1, item: 0, music: "", sound: "", txt: "博文朗从衣兜里掏出酒壶美美的喝\n上了一口，然后你接过酒壶也喝了\n一口。" },
    //C
    430135: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]你要不要来一点？我喜欢分享。" },
    430136: { nxId: 1, scene: 43104, doing: 2, item: 211004, music: "", sound: "", txt: "[我]虽然我喜欢酒，但我不想一大早就\n把自己弄得迷迷糊糊。" },
    430137: { nxId: 1, scene: 43104, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]哈哈哈，你跟别的女人不一样，\n我很欣赏。" },
    430138: { nxId: 1, scene: 43104, doing: 1, item: 0, music: "", sound: "", txt: "博文朗从衣兜里掏出酒壶美美的喝\n上了一口，然后斜靠在座椅上眯着\n眼看你。" },

    430139: { nxId: 1, scene: 43104, doing: 2, item: 220001, music: "", sound: "xingshi", txt: "[博文朗]你知道还有许多与之相关的东西。" },
    430140: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]这其中的美妙，\n是人生当中最精彩的一部分。" },
    430141: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我] 能把一个城市说的这么的情色，\n也真有你的。" },
    430142: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我] 你是不是把城市也当成女人了？" },
    430143: { nxId: 1, scene: 43104, doing: 1, item: 0, music: "", sound: "", txt: "博文朗靠着椅背，慵懒地摇摇手指。" },
    430144: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]每一个城市本就是一个女人，\n发现这一点，才能更有灵感。" },
    430145: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我记得你昨天说，我缺少爱的滋润\n又说我能给你灵感，哪句是真话？" },
    430146: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]都是实话，我拯救不了巴塞罗那，\n但是我可以把爱赋予你。" },
    430147: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是吗？\n我看你是想把爱播撒给每个人吧！" },
    430148: { nxId: 1, scene: 43104, doing: 1, item: 0, music: "", sound: "qidi", txt: "博文朗刚要说些什么，忽然眼前一\n黑，火车进入了隧道……" },
    //所谓 酒壮怂人胆
    430149: { nxId: 1, scene: 43104, doing: 1, item: 0, music: "cry", sound: "", txt: "一对冰凉的唇附在你的嘴唇上，你\n正准备反抗，巨大的力道将你压在\n座椅上动弹不得。" },
    430150: { nxId: 1, scene: 43104, doing: 1, item: 0, music: "", sound: "", txt: "火车开出了山洞，光线射进来，\n你的心扑通直跳，怒视着博文朗。\n博文朗无辜地看着你。" },
    430151: { nxId: 1, scene: 43104, doing: 2, item: 211002, music: "", sound: "", txt: "[我]喂！博文朗！" },
    430152: { nxId: 1, scene: 43104, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]抱歉，我有些情不自禁……" },

    430153: { nxId: 1, scene: 43104, doing: 4, item: 44306, music: "", sound: "xingshi", txt: "分支选择" },
    //A
    430154: { nxId: 1, scene: 43104, doing: 2, item: 211002, music: "", sound: "", txt: "[我]胡说八道，我看你就是早有预谋！" },
    430155: { nxId: 1, scene: 43104, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]不管你信不信，这真的是我的真心\n话，不如给你补偿？" },
    430156: { nxId: 1, scene: 43104, doing: 2, item: 211002, music: "", sound: "", txt: "[我]怎么补偿？" },
    430157: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]想对我做什么，我一定不反抗？" },
    430158: { nxId: 430162, scene: 43104, doing: 2, item: 211002, music: "", sound: "", txt: "[我]白痴啊！" },
    //B
    430159: { nxId: 1, scene: 43104, doing: 2, item: 211002, music: "", sound: "facehit", txt: "[我]每个人都得为他的行为付出代价，\n这就是我的情不自禁！" },
    430160: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]甜美的代价。" },
    430161: { nxId: 1, scene: 43104, doing: 2, item: 211002, music: "", sound: "", txt: "[我]真想再抽你一次，\n可这会弄痛我的手。" },

    430162: { nxId: 1, scene: 43104, doing: 2, item: 220003, music: "t2", sound: "jinzhan", txt: "[博文朗]如果你不解气，看看这景色，\n锡切斯，我心目中第二的美好。" },
    430163: { nxId: 1, scene: 43104, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]我把它献给你，以表达我的歉意。" },
    430164: { nxId: 1, scene: 43104, doing: 1, item: 0, music: "", sound: "", txt: "你转头看着窗外，那已是澄澈的天\n与粼粼的海，确实让你凌乱的心情\n好了几分。" },
    430165: { nxId: 1, scene: 43104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你可真会占便宜……\n这地方跟你有关系吗？" },

    //锡切斯街道（雨）
    430166: { nxId: 1, scene: 43201, doing: 0, item: 0, music: "bowenlang", sound: "", txt: "背景初始化" },
    430167: { nxId: 1, scene: 43204, doing: 1, item: 0, music: "", sound: "", txt: "一出火车站，外面就是瓢泼大雨，\n路上都是奔跑躲雨的行人。" },
    430168: { nxId: 1, scene: 43204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这就是你献给我的锡切斯？" },
    430169: { nxId: 1, scene: 43204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]真是遗憾，\n看来老天并不想让我原谅你。" },
    430170: { nxId: 1, scene: 43204, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]别担心，地中海的雨来的猛烈，\n但是去的也快。" },
    430171: { nxId: 1, scene: 43204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那现在怎么办？在这干等吗？" },
    430172: { nxId: 1, scene: 43204, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]不用，我带伞了。" },
    430173: { nxId: 1, scene: 43204, doing: 1, item: 0, music: "", sound: "", txt: "博文朗从包里翻出一把小伞，\n撑开只能遮住你的肩膀。" },
    430174: { nxId: 1, scene: 43204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这是女式用伞吧？" },
    430175: { nxId: 1, scene: 43204, doing: 1, item: 0, music: "", sound: "", txt: "博文朗搂着你的肩膀，把你带进了\n大雨之中。风一吹，你的肩膀就湿\n了一半。" },
    430176: { nxId: 1, scene: 43204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你这伞也太小了……\n我们还是在这等等吧！" },
    430177: { nxId: 1, scene: 43204, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]没关系，你这么娇小，刚好可以。" },
    430178: { nxId: 1, scene: 43204, doing: 1, item: 0, music: "rain", sound: "", txt: "博文朗把雨伞都罩在了你的头顶。" },
    430179: { nxId: 1, scene: 43204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]怎么能就我一个人打伞呢？" },
    430180: { nxId: 1, scene: 43204, doing: 1, item: 0, music: "", sound: "", txt: "你把伞推了过去，冰冷的雨水站在\n你的皮肤上，让你一阵颤栗。博文\n朗又推回来。" },
    430181: { nxId: 1, scene: 43204, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]淋点雨算什么！再说了，所有人都\n在躲雨，雨也会难过。" },
    430182: { nxId: 1, scene: 43204, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]为了安慰它，我总是会为它唱歌。" },
    //雨中曲音乐
    430183: { nxId: 1, scene: 43204, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]I am singing in the rain, \n just singing in the rain……" },
    430184: { nxId: 1, scene: 43204, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]一起来？" },

    430185: { nxId: 1, scene: 43204, doing: 4, item: 44307, music: "", sound: "", txt: "分支选择" },
    //A
    430186: { nxId: 1, scene: 43204, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]谁有管得着呢？我只想自己开心。" },
    430187: { nxId: 1, scene: 43204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那你千万别跳舞啊！\n我马上假装不认识你。" },
    430188: { nxId: 1, scene: 43204, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]天才和疯子只是一线之间，\n也许对于天才名作我还差一步，" },
    430189: { nxId: 1, scene: 43204, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]但是在那之前，\n我情愿当一个称职的疯子。" },
    430190: { nxId: 1, scene: 43204, doing: 1, item: 0, music: "", sound: "", txt: "远处的酒吧传来相同曲调的音乐。" },
    430191: { nxId: 430210, scene: 43204, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]哈哈哈，\n看来这样的疯子不止我一个。" },
    //B
    //正常分支
    //博2
    430192: { nxId: 1, scene: 43204, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" },
    430193: { nxId: 1, scene: 43204, doing: 1, item: 0, music: "", sound: "", txt: "博文朗唱着歌，拉住了你的手，踢\n踏着雨水。" },
    430194: { nxId: 1, scene: 43204, doing: 1, item: 0, music: "", sound: "", txt: "你转过头，看到他眼中的快乐，纯\n粹，竟然还有几分天真。" },
    430195: { nxId: 1, scene: 43204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（这到底是是个什么样的男人啊？）" },
    430196: { nxId: 1, scene: 43204, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]I’m happy again" },
    430197: { nxId: 1, scene: 43204, doing: 2, item: 211004, music: "", sound: "", txt: "[我]I’m laughing at clouds" },
    430198: { nxId: 1, scene: 43204, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]So dark up above" },
    430199: { nxId: 1, scene: 43204, doing: 1, item: 0, music: "", sound: "", txt: "远处的酒吧传来相同曲调的音乐。" },
    430200: { nxId: 430210, scene: 43204, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]哈哈哈，\n看来想到这首歌的不止我一个。" },
     //特殊分支
     //博3
    430201: { nxId: 1, scene: 43204, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" },
    430202: { nxId: 1, scene: 43204, doing: 1, item: 0, music: "", sound: "", txt: "博文朗唱着歌，拉住了你的手，踢\n踏着雨水。" },
    430203: { nxId: 1, scene: 43204, doing: 1, item: 0, music: "", sound: "", txt: "你转过头，看到他眼中的快乐，纯\n粹，竟然还有几分天真。" },
    430204: { nxId: 1, scene: 43204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（这到底是是个什么样的男人啊？）" },
    430205: { nxId: 1, scene: 43204, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]I’m happy again" },
    430206: { nxId: 1, scene: 43204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]I’m laughing at clouds" },
    430207: { nxId: 1, scene: 43204, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]So dark up above" },
    430208: { nxId: 1, scene: 43204, doing: 1, item: 0, music: "", sound: "", txt: "远处的酒吧传来相同曲调的音乐。" },
    430209: { nxId: 1, scene: 43204, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]哈哈哈，\n看来想到这首歌的不止我一个。" },
 
    430210: { nxId: 1, scene: 43204, doing: 1, item: 0, music: "", sound: "", txt: "不远处的酒吧门口，\n一个大叔对着博文朗用力挥手。" },

    //酒吧门口
    430211: { nxId: 1, scene: 43301, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    430212: { nxId: 1, scene: 43304, doing: 1, item: 0, music: "", sound: "", txt: "大叔拿着毛巾递给你和博文朗。" },
    430213: { nxId: 1, scene: 43304, doing: 2, item: 211302, music: "", sound: "", txt: "[大叔]嘿！博文朗！" },
    430214: { nxId: 1, scene: 43304, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]好久不见了，老规矩，老位置。" },
    430215: { nxId: 1, scene: 43304, doing: 2, item: 211302, music: "", sound: "", txt: "[大叔]先进来再说。" },

    //马丁内斯酒吧
    430216: { nxId: 1, scene: 43401, doing: 0, item: 0, music: "rain", sound: "", txt: "背景初始化" },
    430217: { nxId: 1, scene: 43404, doing: 1, item: 0, music: "", sound: "", txt: "你们走进酒吧，博文朗把雨伞收了\n起来，放在了门口的桶里。" },
    430218: { nxId: 1, scene: 43404, doing: 2, item: 211302, music: "", sound: "", txt: "[大叔]咦？这位漂亮的女士是……" },
    430219: { nxId: 1, scene: 43404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]我的……" },
    430220: { nxId: 1, scene: 43404, doing: 1, item: 0, music: "", sound: "", txt: "博文朗停顿了一下看你……" },
    430221: { nxId: 1, scene: 43404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]女朋友，带她来锡切斯欣赏风景。\n这位是这的老板，马丁内斯。" },

    430222: { nxId: 1, scene: 43404, doing: 4, item: 44308, music: "", sound: "", txt: "分支选择" },
    //A
    430223: { nxId: 1, scene: 43404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你好，马丁内斯，\n别听他瞎说，只是朋友而已。" },
    430224: { nxId: 1, scene: 43404, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]哈，第一个在博文朗面前自称朋友\n的漂亮女士。" },
    430225: { nxId: 1, scene: 43404, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]博文朗，你也遭遇滑铁卢了啊！" },
    430226: { nxId: 1, scene: 43404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]她是我正在追求的女朋友。" },
    430227: { nxId: 430238, scene: 43404, doing: 2, item: 211015, music: "", sound: "", txt: "[我]……" },
    //B
    430228: { nxId: 1, scene: 43404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我只是在抓住一切机会。" },
    430229: { nxId: 1, scene: 43404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]万一在这一刻我可以打动你，\n错失机会岂不是一大遗憾。" },
    430230: { nxId: 430238, scene: 43404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……把占便宜说的这么清新脱俗。" },
    //C
    //正常分支
    430231: { nxId: 1, scene: 43404, doing: 1, item: 0, music: "", sound: "", txt: "你没有否认的态度让马丁内斯流露\n出了暧昧地神情。" },
    430232: { nxId: 1, scene: 43404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]哈，我的女朋友。" },
    //博1
    430233: { nxId: 430238, scene: 43404, doing: 7, item: 71009, music: "", sound: "", txt: "好感度" },
    //特殊分支
    430234: { nxId: 1, scene: 43404, doing: 1, item: 0, music: "", sound: "", txt: "你没有否认的态度让马丁内斯流露\n出了暧昧地神情。" },
    430235: { nxId: 1, scene: 43404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]哈，我的女朋友。" },
    //博2
    430236: { nxId: 1, scene: 43404, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" },
    430237: { nxId: 1, scene: 43404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没完了吧。" },

    430238: { nxId: 1, scene: 43404, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]要我说，从你来了之后，\n锡切斯最美的风景就变成了你。" },
    430239: { nxId: 1, scene: 43404, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]嘿，你想喝点什么？我请客。" },
    430240: { nxId: 1, scene: 43404, doing: 1, item: 0, music: "", sound: "", txt: "你看着菜单踌躇了一会儿。" },
    430241: { nxId: 1, scene: 43404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]百利甜拿铁，谢谢！" },
    430242: { nxId: 1, scene: 43404, doing: 1, item: 0, music: "", sound: "", txt: "你坐了下来，博文朗没有管自己滴\n水的头发，先来擦干你的头发。" },
    430243: { nxId: 1, scene: 43404, doing: 1, item: 0, music: "", sound: "", txt: "他修长的手指穿过你的发丝，\n像是情人般缠绵。" },
    430244: { nxId: 1, scene: 43404, doing: 1, item: 0, music: "", sound: "", txt: "马丁内斯端着盘子过来了，一杯咖\n啡，一大杯冒着气泡的葡萄酒。" },
    430245: { nxId: 1, scene: 43404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你可真爱喝酒。" },
    430246: { nxId: 1, scene: 43404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]别的都没法吸引我。" },
    430247: { nxId: 1, scene: 43404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你倒是品味专一，\n这可不像你的外在。" },
    430248: { nxId: 1, scene: 43404, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]怎么，\n难道我的外在给了你很多错觉？" },
    430249: { nxId: 1, scene: 43404, doing: 1, item: 0, music: "", sound: "", txt: "你耸了耸肩，这个动作让博文朗哈\n哈大笑起来。" },
    430250: { nxId: 1, scene: 43404, doing: 1, item: 0, music: "", sound: "", txt: "你端起咖啡，带着奶油香和淡淡的\n酒味，邻座的人时不时的看着你们。" },
    430251: { nxId: 1, scene: 43404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]人家总是在往我们这看呢？" },
    430252: { nxId: 1, scene: 43404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]毕竟美好的存在总是让人向往。" },
    430253: { nxId: 1, scene: 43404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]拜托你别再这么夸我了，\n我都要肉麻死了。" },
    430254: { nxId: 1, scene: 43404, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]我只是单纯说着我的真情实感。" },
    430255: { nxId: 1, scene: 43404, doing: 1, item: 0, music: "", sound: "", txt: "阳光打在桌上，折射出七彩的光。" },
    430256: { nxId: 1, scene: 43404, doing: 2, item: 220005, music: "bowenlang", sound: "", txt: "[博文朗]看，雨停了，彩虹。" },
    //酒吧彩虹
    430257: { nxId: 1, scene: 43404, doing: 6, item: 64301, music: "", sound: "", txt: "CG动画" },
    430258: { nxId: 1, scene: 43404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]真美啊……\n可惜美好总是太短暂了。" },
    430259: { nxId: 1, scene: 43404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]那可不一定，我爸爸跟我说，只要\n你想，你就可以得到一切美好。" },

    430260: { nxId: 1, scene: 43404, doing: 4, item: 44309, music: "", sound: "", txt: "分支选择" },
    //A
    430261: { nxId: 1, scene: 43404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]当然，只要你喜欢。" },
    430262: { nxId: 1, scene: 43404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]你知道吗？小时候只要我央求，\n父亲总是这么说。" },
    430263: { nxId: 1, scene: 43404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那你父亲肯定很爱你吧？" },
    430264: { nxId: 1, scene: 43404, doing: 1, item: 0, music: "", sound: "", txt: "博文朗没有回答，\n眼神飘忽地看着前方。" },
    430265: { nxId: 1, scene: 43404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]你可以自己试试。" },
    430266: { nxId: 1, scene: 43404, doing: 1, item: 0, music: "", sound: "", txt: "博文朗起身拿了一个喷水壶过来。\n抓住你的手，和你一起喷洒水雾。" },
    430267: { nxId: 1, scene: 43404, doing: 1, item: 0, music: "", sound: "", txt: "水雾迎着阳光喷射，\n还真变成了一道迷你的彩虹。" },
    430268: { nxId: 430275, scene: 43404, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]现在这道彩虹是你的了。" },
    //B
    430269: { nxId: 1, scene: 43404, doing: 1, item: 0, music: "", sound: "", txt: "博文朗看着远处，\n露出了一个没有几分真意的笑。" },
    430270: { nxId: 1, scene: 43404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]曾经好过吧。" },
    430271: { nxId: 1, scene: 43404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]抱歉，我是提到了你的伤心事吗？" },
    430272: { nxId: 1, scene: 43404, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]也算不上吧，只是不在意了。\n他有他的追求，母亲也有她的爱情。" },
    430273: { nxId: 1, scene: 43404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我……我也会有我的爱情与家庭。" },
    430274: { nxId: 1, scene: 43404, doing: 1, item: 0, music: "", sound: "", txt: "博文朗似乎低沉了一下，但很快又\n抬起头，露出了他常见的笑。" },

    430275: { nxId: 1, scene: 43404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]马丁内斯，准备一下一会儿见。" },
    430276: { nxId: 1, scene: 43404, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]好嘞！" },
    430277: { nxId: 1, scene: 43404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]所以，我们要去哪里？" },
    430278: { nxId: 1, scene: 43404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]一个本土活动，你会喜欢的。" },
    430279: { nxId: 1, scene: 43404, doing: 1, item: 0, music: "", sound: "", txt: "博文朗走到你面前，绅士地把自己\n的胳膊递给你。你忍着笑，挎着他\n的胳膊。" },
    430280: { nxId: 1, scene: 43404, doing: 1, item: 0, music: "", sound: "", txt: "你刚走到门口，就看到一个美丽的\n女人，抚摸着博文朗的小伞。" },
    430281: { nxId: 1, scene: 43404, doing: 2, item: 211402, music: "", sound: "", txt: "[美丽女士]没想到你还带着它，博。" },
    430282: { nxId: 1, scene: 43404, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]方便携带而已。" },
    430283: { nxId: 1, scene: 43404, doing: 2, item: 211402, music: "", sound: "", txt: "[美丽女士]既然不喜欢，还带着做什么？" },
    430284: { nxId: 1, scene: 43404, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]现在物归原主了。" },
    430285: { nxId: 1, scene: 43404, doing: 1, item: 0, music: "", sound: "", txt: "女人楞了一下，随即珍惜地拿着伞\n离开。走了几步，又回头，眼神缱\n绻地看了一眼博文朗。" },
    430286: { nxId: 1, scene: 43404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]（看上去关系不一般啊）\n   这人是谁啊？" },
    430287: { nxId: 1, scene: 43404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]记得我的单身魔咒吗？她就是其中之一。" },

    430288: { nxId: 1, scene: 43404, doing: 4, item: 44310, music: "", sound: "", txt: "分支选择" },
    //A
    430289: { nxId: 1, scene: 43404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哦，原来是前女友啊！" },
    430290: { nxId: 1, scene: 43404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]很久以前的事情了，\n而且据我所知她已经再婚了。" },
    430291: { nxId: 1, scene: 43404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]再婚？" },
    430292: { nxId: 1, scene: 43404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我们在一年前离婚了。" },
    430293: { nxId: 1, scene: 43404, doing: 1, item: 0, music: "", sound: "", txt: "博文朗又露出了笑容。" },
    430294: { nxId: 1, scene: 43404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]不管怎样，都是过去的事了。\n我爱过她，但我们的感情结束了。" },
    430295: { nxId: 1, scene: 43404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]说的这么坦荡？" },
    430296: { nxId: 430309, scene: 43404, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我从不留恋过去。" },
    //B
    //正常分支
    430297: { nxId: 1, scene: 43404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你别难过啊，那些都过去了。" },
    430298: { nxId: 1, scene: 43404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]是啊，都过去了。" },
    //博2
    430299: { nxId: 430309, scene: 43404, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" },
    //特殊分支
    430300: { nxId: 1, scene: 43404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你别难过啊，那些都过去了。" },
    430301: { nxId: 1, scene: 43404, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]是啊，都过去了。" },
    //博3
    430302: { nxId: 1, scene: 43404, doing: 7, item: 71011, music: "", sound: "", txt: "好感度" },
    430303: { nxId: 1, scene: 43404, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]我只觉得自己的心，\n从很早的时候就空了一块……" },
    430304: { nxId: 1, scene: 43404, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]需要很多很多爱去填满，\n她们想要爱，我给了她们……" },
    430305: { nxId: 1, scene: 43404, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]然后她们就会想要更多，\n变成我不认识的样子……" },
    430306: { nxId: 1, scene: 43404, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]那个样子的她们，\n就像张开了血盆大口的怪兽……" },
    430307: { nxId: 1, scene: 43404, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]让我害怕，想让我逃离。" },
    430308: { nxId: 1, scene: 43404, doing: 1, item: 0, music: "", sound: "", txt: "你有些心疼，本想开口再说几句劝\n慰的话，话到嘴边却有种无力感。" },

    //锡切斯街道
    430309: { nxId: 1, scene: 43501, doing: 0, item: 0, music: "gutingwei", sound: "", txt: "背景初始化" },
    430310: { nxId: 1, scene: 43504, doing: 1, item: 0, music: "", sound: "bell", txt: "出了酒吧，你们沿着街道向前，\n远处传来古老的钟声，海鸟掠过你\n的头顶，鼻端都是海浪的咸味。" },
    430311: { nxId: 1, scene: 43504, doing: 2, item: 220003, music: "", sound: "seabird", txt: "[博文朗]我们在哪？锡切斯的中心，\n海滨大道，我的灵感来源。" },
    430312: { nxId: 1, scene: 43504, doing: 2, item: 211005, music: "", sound: "", txt: "[我]真美啊……" },
    430313: { nxId: 1, scene: 43504, doing: 1, item: 0, music: "", sound: "", txt: "你望着远处的海岸线，手机响起，\n你一看是母亲的消息，还有陌生男\n人的照片。" },
    430314: { nxId: 1, scene: 43504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]唉……" },
    430315: { nxId: 1, scene: 43504, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]怎么了，你现在的样子就好像身后\n背了一个乌龟壳。" },

    430316: { nxId: 1, scene: 43504, doing: 4, item: 44311, music: "", sound: "seabird", txt: "分支选择" },
    //A
    430317: { nxId: 1, scene: 43504, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]是很可爱的小乌龟，\n背着沉重的壳往前挪。" },
    430318: { nxId: 1, scene: 43504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不过是一些生活琐事。" },
    430319: { nxId: 1, scene: 43504, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]这是巴塞罗那，\n你的烦恼不应该追过来。" },
    430320: { nxId: 1, scene: 43504, doing: 1, item: 0, music: "", sound: "", txt: "博文朗抢过你的手机。" },
    430321: { nxId: 1, scene: 43504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]喂，你干嘛？" },
    430322: { nxId: 1, scene: 43504, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]我不希望你被打扰，也希望我们在\n一起的时光不被打扰。" },
    430323: { nxId: 430332, scene: 43504, doing: 2, item: 211004, music: "", sound: "", txt: "[我]行吧行吧！那我就认认真真做个任\n性的小仙女！" },
    //B
    430324: { nxId: 1, scene: 43504, doing: 1, item: 0, music: "", sound: "", txt: "你把手机给博文朗看。" },
    430325: { nxId: 1, scene: 43504, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]这些是你母亲给你安排的相亲对象\n吗？哈哈哈……他们都很可爱啊……" },
    430326: { nxId: 1, scene: 43504, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]神情里缺少自信，情趣，对感情一\n脸的懵懂，就像一群牵线木偶……" },
    430327: { nxId: 1, scene: 43504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那你觉得我适合怎样的男人？" },
    430328: { nxId: 1, scene: 43504, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]这个需要问你自己了。重点是：\n遇到感觉不错的，不要瞻前顾后。" },
    430329: { nxId: 1, scene: 43504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]如果不合适呢？" },
    430330: { nxId: 1, scene: 43504, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]什么事情不需要试错呢？\n不合适就分开。" },
    430331: { nxId: 1, scene: 43504, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈，说得好！\n我要做个随心所欲的小仙女！" },

    430332: { nxId: 1, scene: 43504, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]所以去他的责任感！\n去他的别人的看法！" },
    430333: { nxId: 1, scene: 43504, doing: 2, item: 211004, music: "", sound: "", txt: "[我]对！去他的！" },
    430334: { nxId: 430336, scene: 43504, doing: 1, item: 0, music: "", sound: "", txt: "远处传来马丁内斯的声音，你循声\n望去，马丁内斯站在一艘游艇上冲\n着你们挥手。" },

    430335: { nxId: 1, scene: 43504, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]嘿嘿！博！准备好了！" },//废

    430336: { nxId: 1, scene: 43504, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]好！我们这就来。" },


    //码头
    430337: { nxId: 1, scene: 43601, doing: 0, item: 0, music: "t2", sound: "", txt: "背景初始化" },
    430338: { nxId: 1, scene: 43604, doing: 2, item: 211001, music: "", sound: "seabird", txt: "[我]这是要出海？" },
    430339: { nxId: 1, scene: 43604, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]对，带你出去海钓。" },
    430340: { nxId: 1, scene: 43604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我没出过海，有点害怕。" },
    430341: { nxId: 1, scene: 43604, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]那就更得试试了，这就像是博彩，\n大海里能钓上什么只有上帝才知道。" },
    430342: { nxId: 1, scene: 43604, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]而且你不会才好，我才能手把手教\n你，那会非常有意思的，对吧？" },

    430343: { nxId: 1, scene: 43604, doing: 4, item: 44312, music: "", sound: "", txt: "分支选择" },
    //A 海滩线
    430344: { nxId: 1, scene: 43604, doing: 1, item: 0, music: "", sound: "", txt: "博文朗耸耸肩，对马丁内斯挥挥手。" },
    430345: { nxId: 1, scene: 43604, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]嘿，马丁，你自己去吧。\n我留在这里陪我女朋友。" },
    430346: { nxId: 1, scene: 43604, doing: 2, item: 211015, music: "", sound: "", txt: "[我]……" },
    430347: { nxId: 1, scene: 43604, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]又是你自己在脑补吧？" },
    430348: { nxId: 1, scene: 43604, doing: 1, item: 0, music: "", sound: "", txt: "马丁内斯给你们拿下了鱼竿，\n又自己跳上了游艇。" },
    430349: { nxId: 1, scene: 43604, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]回头见，两位。" },
    430350: { nxId: 1, scene: 43604, doing: 1, item: 0, music: "", sound: "", txt: "马丁内斯哈哈大笑，\n游艇击打着水花离开。\n博文朗和你走向沙滩。" },

    //沙滩
    430351: { nxId: 1, scene: 43701, doing: 0, item: 0, music: "bowenlang", sound: "", txt: "背景初始化" },
    430352: { nxId: 1, scene: 43704, doing: 2, item: 211001, music: "", sound: "seabird", txt: "[我]这天气变化的可真快，刚刚还乌云\n密布的，现在又是大晴空。" },
    430353: { nxId: 1, scene: 43704, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]好事,要不然这里就会挤满晒太阳\n的英国佬，一群没见过太阳的家伙。" },
    430354: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "你深呼吸，新鲜的海的味道顺着风\n重进你的鼻腔，你的精神振奋起来。" },
    430355: { nxId: 1, scene: 43704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]真好啊，\n在巴塞的海边好像只能闻到机油味。" },
    430356: { nxId: 1, scene: 43704, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]这就是锡切斯的真谛。" },
    430357: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "你们脱了鞋，走在海边，海水浸没\n你脚掌，你感受到一阵凉意。" },
    430358: { nxId: 1, scene: 43704, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]沙滩是很好的画布，\n不管你怎么折腾，都会恢复原样。" },
    430359: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "一个大浪而来，你忽的有些趔趄,\n博文朗一把把你抱在怀里。" },
    430360: { nxId: 1, scene: 43704, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]看来大海都属意你了。" },
    430361: { nxId: 1, scene: 43704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]在你眼里我是不是就是个万人迷。" },
    430362: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "你挣脱开来。博文朗找了个地方，\n下好了鱼竿。" },
    430363: { nxId: 1, scene: 43704, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]当然，你现在可是我的缪斯。" },
    430364: { nxId: 1, scene: 43704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你真是会哄我开心。" },
    430365: { nxId: 1, scene: 43704, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]趁现在没有人，\n我们可以独享锡切斯的海了。" },
    430366: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "博文朗飞快跑开，带回了沙滩椅，\n还拎着酒瓶。" },
    430367: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "你躺在博文朗安排的沙滩椅上，喝\n了两杯酒。温暖的阳光洒在你们的\n身上，身体都变得懒洋洋。" },
    430368: { nxId: 1, scene: 43704, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]这会是一个美妙的下午。\n阳光，美景，美酒，美人。" },
    430369: { nxId: 1, scene: 43704, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]啊，这一段记忆值得我珍藏。" },
    430370: { nxId: 1, scene: 43704, doing: 2, item: 211004, music: "", sound: "", txt: "[我]你真是太浮夸了，\n嘴里没一句正经话。" },
    430371: { nxId: 1, scene: 43704, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]哈哈哈哈哈，我说的都是实话。" },
    //共用部分 沙滩段
    430372: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "笑声停止，博文朗专注地看着你，\n迷人的眼眸里盛满了甜情蜜意。" },
    430373: { nxId: 1, scene: 43704, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我想你做我的女朋友。" },
    430374: { nxId: 1, scene: 43704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哪有才认识第二天就表白，\n让别人做女朋友的！" },
    430375: { nxId: 1, scene: 43704, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]看着我的表！" },
    430376: { nxId: 1, scene: 43704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]看你的表干什么？" },
    430377: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "博文郎探身过来让你看着他的表，\n你屏住呼吸几十秒过去了，前面的\n鱼竿忽然剧烈的抖动起来。" },
    430378: { nxId: 1, scene: 43704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]有鱼！" },
    430379: { nxId: 1, scene: 43704, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]赶紧拉起来！" },
    430380: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "你拼命拽线，\n但是鱼的力气比你想象中大很多。" },
    430381: { nxId: 1, scene: 43704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我拉不动，你快帮帮我啊！" },
    430382: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "博文郎随你一起拉着鱼竿，前面的\n力道突然消失了，你们俩一同往后\n摔在地上，你跌坐在博文郎怀里。" },
    430383: { nxId: 1, scene: 43704, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]看来是一条大鱼，把线都绷断了！" },
    430384: { nxId: 1, scene: 43704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]现在应该都不止一分钟了，\n你到底想干嘛？" },
    430385: { nxId: 1, scene: 43704, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]今天是4号，\n2019年5月4日，下午3点18分……" },
    430386: { nxId: 1, scene: 43704, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]这一分钟里，你是我的女朋友！" },
    430387: { nxId: 1, scene: 43704, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]因为你，我会记住这一分钟，\n还有那条没钓上来的鱼……" },
    430388: { nxId: 1, scene: 43704, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]我们曾经是一分钟的情侣，\n这是你改变不了的事实。" },
    430389: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "博文郎悠悠的把线收了回来，熟练\n的换上了新的钩子挂上了饵料，" },
    430390: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "然后再次把线甩了出去。\n他甩线的动作潇洒自由，\n带着无拘无束的笑。" },
    430391: { nxId: 1, scene: 43704, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（我不知道他会不会记住这一分钟\n   但是我知道我再也不会忘记这一刻）" },
    //微信替代
    430392: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "wechat", txt: "你的手机微信响起，是学姐：\n来张帅哥的照片啊！" },

    430393: { nxId: 1, scene: 43704, doing: 4, item: 44313, music: "", sound: "", txt: "分支选择" },
    //A 
    430394: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "你若无其事地微微侧着身体偷拍博\n文朗。博文朗一脸严肃地看着海面。" },
    430395: { nxId: 1, scene: 43704, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（这严肃的样子还挺……咳咳，\n   正经起来挺帅啊。）" },
    430396: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "就在你按下快门的那一刻，博文朗\n突然回头对你露出了得意的笑。" },
    430397: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "随即博文朗张开双臂，翘着嘴角，\n摆出各种姿势。" },
    430398: { nxId: 1, scene: 43704, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]大方一点拍嘛。" },
    430399: { nxId: 1, scene: 43704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谁、谁拍你了？自恋！" },
    430400: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "博文朗哈哈大笑，大声喊着。" },
    430401: { nxId: 430423, scene: 43704, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]我喜欢你，你答应了，又不吃亏。" },
    //B
    //正常分支
    430402: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "你掏出手机，打开相机，\n递给了博文朗。" },
    430403: { nxId: 1, scene: 43704, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]这是干什么？" },
    430404: { nxId: 1, scene: 43704, doing: 2, item: 211004, music: "", sound: "", txt: "[我]我告诉我朋友，我在巴塞遇到了一\n个帅哥，她想看看帅哥的样子。" },
    430405: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "博文朗楞了一下，\n随即笑意盈满了他的眼睛。" },
    430406: { nxId: 1, scene: 43704, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]现在我们的世界开始交融了。" },
    //博2
    430407: { nxId: 430423, scene: 43704, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" },
    //特殊分支
    430408: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "你掏出手机，打开相机，\n递给了博文朗。" },
    430409: { nxId: 1, scene: 43704, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]这是干什么？" },
    430410: { nxId: 1, scene: 43704, doing: 2, item: 211004, music: "", sound: "", txt: "[我]我告诉我朋友，我在巴塞遇到了一\n个帅哥，她想看看帅哥的样子。" },
    430411: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "博文朗楞了一下，\n随即笑意盈满了他的眼睛。" },
    430412: { nxId: 1, scene: 43704, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]现在我们的世界开始交融了。" },
    //博3
    430413: { nxId: 1, scene: 43704, doing: 7, item: 71011, music: "", sound: "", txt: "好感度" },
    430414: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "博文朗举起你的手机，手臂自然地\n环绕着你的腰，手却并未接触到。" },
    430415: { nxId: 1, scene: 43704, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（看起来挺风流的，其实骨子里还\n   是很绅士嘛。）" },
    430416: { nxId: 1, scene: 43704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你不是不喜欢拍照吗？" },
    430417: { nxId: 1, scene: 43704, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]是啊，别人我都不愿意被拍到。" },
    430418: { nxId: 1, scene: 43704, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]但和你合照，我丝毫不觉得难受，\n这是怎么回事呢？" },
    430419: { nxId: 1, scene: 43704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我怎么知道？" },
    430420: { nxId: 1, scene: 43704, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]我知道答案就好。来，看镜头。" },
    430421: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "你犹豫着，靠近了博文朗，看着镜\n头露出了微笑。“咔嚓”一声，两\n张笑脸定格在这个时空。" },
    430422: { nxId: 1, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "博文朗的笑容让你有些招架不住，\n你用手背给自己的脸降温，躲到了\n一旁。" },

    430423: { nxId: 430600, scene: 43704, doing: 1, item: 0, music: "", sound: "", txt: "一下午的钓鱼收获不算丰厚，收拾\n了装备，你便跟着博文朗来到了他\n的画室。" },
    
    //B  海钓线
    430424: { nxId: 1, scene: 43801, doing: 0, item: 0, music: "gutingwei", sound: "", txt: "背景初始化" },
    430425: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "seabird", txt: "博文朗脱了鞋，跨上游艇。" },
    430426: { nxId: 1, scene: 43804, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]来，鞋脱了，游艇上不能穿鞋。" },
    430427: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗伸手把你也拉了上去，\n帮你穿好了救生衣。" },
    430428: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "衣服有些大，博文朗费了好些时间\n把各处的搭钩拉紧。" },
    430429: { nxId: 1, scene: 43804, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]我的天，\n我就没见过你这么娇小的女士。" },
    430430: { nxId: 1, scene: 43804, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]好了。" },
    430431: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗趁着给你整救生衣的档口，\n在你额头亲了一下。" },

    430432: { nxId: 1, scene: 43804, doing: 4, item: 44314, music: "", sound: "", txt: "分支选择" },
    //A 
    430433: { nxId: 1, scene: 43804, doing: 2, item: 211002, music: "", sound: "", txt: "[我]第二次了。" },
    430434: { nxId: 1, scene: 43804, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]随你处罚。" },
    430435: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "push", txt: "你一把将博文朗推进了海里。" },
    430436: { nxId: 1, scene: 43804, doing: 2, item: 211002, music: "", sound: "", txt: "[我]那你就在海里清醒一下吧！" }, 
    430437: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗在水里，还冲着你笑。一阵\n浪花过后，博文朗消失在水面上。" },

    430438: { nxId: 1, scene: 43804, doing: 4, item: 44315, music: "", sound: "", txt: "分支选择" },
    //a
    //正常分支
    430439: { nxId: 1, scene: 43804, doing: 2, item: 211003, music: "", sound: "", txt: "[我]博文朗，你快点上来。" },
    430440: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "push", txt: "回答你的只有翻腾的波涛。你的心\n逐渐下沉，翻身跳下了海面。" },
    430441: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "你忍住和水面撞击的晕眩，努力观\n察着水面之下，但是什么都没有。" },
    430442: { nxId: 1, scene: 43804, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（怎么回事？）" },
    430443: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "一双手突然抱住了你，\n把你带上了水面。" },
    430444: { nxId: 1, scene: 43804, doing: 2, item: 211002, music: "", sound: "", txt: "[我]博文朗你个大骗子！" },
    430445: { nxId: 1, scene: 43804, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]没想到你竟然愿意冒险找我。" },
    //博1
    430446: { nxId: 430502, scene: 43804, doing: 7, item: 71009, music: "", sound: "", txt: "好感度" },
    //特殊分支
    430447: { nxId: 1, scene: 43804, doing: 2, item: 211003, music: "", sound: "", txt: "[我]博文朗，你快点上来。" },
    430448: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "push", txt: "回答你的只有翻腾的波涛。你的心\n逐渐下沉，翻身跳下了海面。" },
    430449: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "你忍住和水面撞击的晕眩，努力观\n察着水面之下，但是什么都没有。" },
    430450: { nxId: 1, scene: 43804, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（怎么回事？）" },
    430451: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "一双手突然抱住了你，\n把你带上了水面。" },
    430452: { nxId: 1, scene: 43804, doing: 2, item: 211002, music: "", sound: "", txt: "[我]博文朗你个大骗子！" },
    430453: { nxId: 1, scene: 43804, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]没想到你竟然愿意冒险找我。" },
    //博2
    430454: { nxId: 1, scene: 43804, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" },
    430455: { nxId: 1, scene: 43804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……我只是负责而已。" },
    430456: { nxId: 430502, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "你们上了甲板，博文朗拿起水管把\n你们全身冲了一遍。" },

    //b
    //正常分支
    430457: { nxId: 1, scene: 43804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……我只是负责而已。" },
    430458: { nxId: 1, scene: 43804, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]别理他，老毛病又犯了。" },
    430459: { nxId: 1, scene: 43804, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]马丁，你太不够意思了。" },
    430460: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗浮上水面，在海中左右摆臂\n游来游去，好不悠闲。" },
    430461: { nxId: 1, scene: 43804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]让你玩，赶紧上来吧。水那么冷。" },
    430462: { nxId: 1, scene: 43804, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]关心我啊？" },
    //博1
    430463: { nxId: 430502, scene: 43804, doing: 7, item: 71009, music: "", sound: "", txt: "好感度" },
    //特殊分支
    430464: { nxId: 1, scene: 43804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……我只是负责而已。" },
    430465: { nxId: 1, scene: 43804, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]别理他，老毛病又犯了。" },
    430466: { nxId: 1, scene: 43804, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]马丁，你太不够意思了。" },
    430467: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗浮上水面，在海中左右摆臂\n游来游去，好不悠闲。" },
    430468: { nxId: 1, scene: 43804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]让你玩，赶紧上来吧。水那么冷。" },
    430469: { nxId: 1, scene: 43804, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]关心我啊？" },
    //博2
    430470: { nxId: 1, scene: 43804, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" },
    430471: { nxId: 430502, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗上了甲板，拿起水龙头把自\n己全身冲了一遍。" },

    //c
    //正常分支
    430472: { nxId: 1, scene: 43804, doing: 2, item: 211003, music: "", sound: "", txt: "[我]博文朗，你别吓我，我有心脏病……" },
    430473: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "你捂着心口踉跄了几步，倒在甲板\n上，装出一副难受的样子。" },
    430474: { nxId: 1, scene: 43804, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]你们的伎俩我和我妻子多少年前就\n玩过了，还玩？" },
    430475: { nxId: 1, scene: 43804, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]你们随意，不打扰你们了……" },
    430476: { nxId: 1, scene: 43804, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]马丁，那伎俩还是我教你的。" },
    430477: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗浮上水面，在海中左右摆臂\n游来游去，好不悠闲。" },
    430478: { nxId: 1, scene: 43804, doing: 2, item: 211002, music: "", sound: "", txt: "[我]老套！" },
    430479: { nxId: 1, scene: 43804, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]但女士不都喜欢这种老套的伎俩。" },
    //博1
    430480: { nxId: 430502, scene: 43804, doing: 7, item: 71009, music: "", sound: "", txt: "好感度" },
    //特殊分支
    430481: { nxId: 1, scene: 43804, doing: 2, item: 211003, music: "", sound: "", txt: "[我]博文朗，你别吓我，我有心脏病……" },
    430482: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "你捂着心口踉跄了几步，倒在甲板\n上，装出一副难受的样子。" },
    430483: { nxId: 1, scene: 43804, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]你们的伎俩我和我妻子多少年前就\n玩过了，还玩？" },
    430484: { nxId: 1, scene: 43804, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]你们随意，不打扰你们了……" },
    430485: { nxId: 1, scene: 43804, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]马丁，那伎俩还是我教你的。" },
    430486: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗浮上水面，在海中左右摆臂\n游来游去，好不悠闲。" },
    430487: { nxId: 1, scene: 43804, doing: 2, item: 211002, music: "", sound: "", txt: "[我]老套！" },
    430488: { nxId: 1, scene: 43804, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]但女士不都喜欢这种老套的伎俩。" },
    //博1
    430489: { nxId: 1, scene: 43804, doing: 7, item: 71009, music: "", sound: "", txt: "好感度" },
    430490: { nxId: 1, scene: 43804, doing: 2, item: 211002, music: "", sound: "", txt: "[我]我可不是一般女人！" },
    430491: { nxId: 1, scene: 43804, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]你是个有趣的女人。" },
    430492: { nxId: 430502, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗上了甲板，拿起水龙头把自\n己全身冲了一遍。" },

    //B
    430493: { nxId: 1, scene: 43804, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你干什么？\n又占我便宜，今天都第二次了！" },
    430494: { nxId: 1, scene: 43804, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]对不起，对不起，没忍住。" },
    430495: { nxId: 1, scene: 43804, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你要再这样，我就把你推进海里！" },
    430496: { nxId: 430502, scene: 43804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我一定控制好我自己。" },

    //C
    430497: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "facehit", txt: "你抽了博文朗一巴掌。" },
    430498: { nxId: 1, scene: 43804, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你干什么？又占我便宜，\n你知道这一巴掌算是轻的了。" },
    430499: { nxId: 1, scene: 43804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]对不起，对不起，没忍住。" },
    430500: { nxId: 1, scene: 43804, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你要再这样，我就把你推进海里！" },
    430501: { nxId: 1, scene: 43804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我一定控制好我自己。" },

    430502: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "游艇发出隆隆的声响，\n你们颠簸着向深海驶去，" },
    430503: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "你扶着栏杆，随着风浪起伏，\n你感到一阵阵的晕眩。" },
    430504: { nxId: 1, scene: 43804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]你没事吧，是不是晕船？脸好白。" },
    430505: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "你说不出话，忍着难受点了点头。" },
    430506: { nxId: 1, scene: 43804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我去拿药。" },
    430507: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗给你带来了水和药，你靠着\n他的肩膀，吃了两片药。" },
    430508: { nxId: 1, scene: 43804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]闭上眼睛，休息一会。\n马丁内斯，找个平静的地方停下。" },
    430509: { nxId: 1, scene: 43804, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]你会习惯的，和大海的斗争会让人\n肾上腺素飙升的。" },
    430510: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "船停了下来，船身也不再摇晃，\n你感到好受了许多。" },
    430511: { nxId: 1, scene: 43804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]好点没？" },
    430512: { nxId: 1, scene: 43804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好多了。" },
    430513: { nxId: 1, scene: 43804, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]现在得找点事情做，分散注意力。\n来看我们钓鱼吧。" },
    430514: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "马丁内斯笑嘻嘻的看着你们，博文\n朗也走到船边，熟练地把两根肉条\n挂在了鱼钩上。" },
    430515: { nxId: 1, scene: 43804, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]马丁，今晚做什么口味？" },
    430516: { nxId: 1, scene: 43804, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]香煎呗！新鲜的食材简单的烹饪，\n配上一瓶好酒，完美！" },
    430517: { nxId: 1, scene: 43804, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]你是忘了那条香煎鳗鱼吗？\n我的老天，那是个灾难……" },
    430518: { nxId: 1, scene: 43804, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]每个人的第一次都值得原谅，\n你不能这么刻薄，博。" },
    430519: { nxId: 1, scene: 43804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]咱们也赶紧下钩吧！握住这里，\n然后像这样，向前面甩，就是这样。" },
    430520: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗把鱼竿塞在你手里握住你的\n手，带着你的手臂挥动鱼竿，" },
    430521: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "鱼钩似乎飞出去了很远，\n只能依稀看见浮在水面上的浮标。" },
    430522: { nxId: 1, scene: 43804, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]很棒。现在我们可以把它放在前面\n的架子上，等着就好了。" },
    430523: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "和预想的不一样，这一个下午异常\n的平静，包括你们的鱼竿。最有规\n律的就是马丁内斯的呼噜声。" },
    430524: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "你靠在船头，让和煦的海风吹拂在\n你的脸上，博文郎凑近过来，吓了\n你一跳。" },
    430525: { nxId: 1, scene: 43804, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你干什么！又打什么坏主意？" },
    430526: { nxId: 1, scene: 43804, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]别睡着，鱼会跑的。" },
    430527: { nxId: 1, scene: 43804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]怕什么？不是你还醒着嘛。" },
    430528: { nxId: 1, scene: 43804, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]我怕你睡着的时候梦见我。" },

    430529: { nxId: 1, scene: 43804, doing: 4, item: 44316, music: "", sound: "", txt: "分支选择" },
    //A
    430530: { nxId: 1, scene: 43804, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]我觉得你一定会梦见我。" },
    430531: { nxId: 1, scene: 43804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你这自信哪里来的？" },
    430532: { nxId: 1, scene: 43804, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]你的脸很红啊！怎么了？" },
    430533: { nxId: 1, scene: 43804, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你别管。" },
    430534: { nxId: 430548, scene: 43804, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]哈哈哈哈！" },
    //B
    //正常分支
    430535: { nxId: 1, scene: 43804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]大概我会梦到你会变成一只兔子。" },
    430536: { nxId: 1, scene: 43804, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]我在你心目中这么可爱吗？" },
    //博1
    430537: { nxId: 430548, scene: 43804, doing: 7, item: 71009, music: "", sound: "", txt: "好感度" },
    //特殊分支
    430538: { nxId: 1, scene: 43804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]大概我会梦到你会变成一只兔子。" },
    430539: { nxId: 1, scene: 43804, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]我在你心目中这么可爱吗？" },
    //博2
    430540: { nxId: 1, scene: 43804, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" },
    430541: { nxId: 1, scene: 43804, doing: 2, item: 211004, music: "", sound: "", txt: "[我]不是可爱，是可口，\n把你做成冷吃兔。" },
    430542: { nxId: 430548, scene: 43804, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]哈哈哈哈！" },
    //C
    430543: { nxId: 1, scene: 43804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我会梦到到你变成了金钱豹……" },
    430544: { nxId: 1, scene: 43804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不停的追我，\n然后我问你为什么追我？" },
    430545: { nxId: 1, scene: 43804, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]那梦里的我肯定会说，\n我是被你的美丽所吸引。" },
    430546: { nxId: 1, scene: 43804, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈，不是。\n你会说因为你要XX糖浆！哈哈哈。" },
    430547: { nxId: 1, scene: 43804, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]虽然不知知道你在说什么，\n不过很有趣，哈哈哈哈。" },

    //共用部分 海钓段
    430548: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "bowenlang", sound: "", txt: "笑声停止，博文朗专注地看着你，\n迷人的眼眸里盛满了甜情蜜意。" },
    430549: { nxId: 1, scene: 43804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我想你做我的女朋友。" },
    430550: { nxId: 1, scene: 43804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哪有才认识第二天就表白，\n让别人做女朋友的！" },
    430551: { nxId: 1, scene: 43804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]看着我的表！" },
    430552: { nxId: 1, scene: 43804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]看你的表干什么？" },
    430553: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "博文郎探身过来让你看着他的表，\n你屏住呼吸几十秒过去了，前面的\n鱼竿忽然剧烈的抖动起来。" },
    430554: { nxId: 1, scene: 43804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]有鱼！" },
    430555: { nxId: 1, scene: 43804, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]赶紧拉起来！" },
    430556: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "你拼命拽线，\n但是鱼的力气比你想象中大很多。" },
    430557: { nxId: 1, scene: 43804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我拉不动，你快帮帮我啊！" },
    430558: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "博文郎随你一起拉着鱼竿，前面的\n力道突然消失了，你们俩一同往后\n摔在地上，你跌坐在博文郎怀里。" },
    430559: { nxId: 1, scene: 43804, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]看来是一条大鱼，把线都绷断了！" },
    430560: { nxId: 1, scene: 43804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]现在应该都不止一分钟了，\n你到底想干嘛？" },
    430561: { nxId: 1, scene: 43804, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]今天是4号，\n2019年5月4日，下午3点18分……" },
    430562: { nxId: 1, scene: 43804, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]这一分钟里，你是我的女朋友！" },
    430563: { nxId: 1, scene: 43804, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]因为你，我会记住这一分钟，\n还有那条没钓上来的鱼……" },
    430564: { nxId: 1, scene: 43804, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]我们曾经是一分钟的情侣，\n这是你改变不了的事实。" },
    430565: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "博文郎悠悠的把线收了回来，熟练\n的换上了新的钩子挂上了饵料，" },
    430566: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "然后再次把线甩了出去。\n他甩线的动作潇洒自由，\n带着无拘无束的笑。" },
    430567: { nxId: 1, scene: 43804, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（我不知道他会不会记住这一分钟\n   但是我知道我再也不会忘记这一刻）" },
    //微信替代
    430568: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "wechat", txt: "你的手机微信响起，是学姐：\n来张帅哥的照片啊！" },

    430569: { nxId: 1, scene: 43804, doing: 4, item: 44317, music: "", sound: "", txt: "分支选择" },
    //A 
    430570: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "你若无其事地微微侧着身体偷拍博\n文朗。博文朗一脸严肃地看着海面。" },
    430571: { nxId: 1, scene: 43804, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（这严肃的样子还挺……咳咳，\n   正经起来挺帅啊。）" },
    430572: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "就在你按下快门的那一刻，博文朗\n突然回头对你露出了得意的笑。" },
    430573: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "随即博文朗张开双臂，翘着嘴角，\n摆出各种姿势。" },
    430574: { nxId: 1, scene: 43804, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]大方一点拍嘛。" },
    430575: { nxId: 1, scene: 43804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谁、谁拍你了？自恋！" },
    430576: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗哈哈大笑，大声喊着。" },
    430577: { nxId: 430599, scene: 43804, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]我喜欢你，你答应了，又不吃亏。" },
    //B
    //正常分支
    430578: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "你掏出手机，打开相机，\n递给了博文朗。" },
    430579: { nxId: 1, scene: 43804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]这是干什么？" },
    430580: { nxId: 1, scene: 43804, doing: 2, item: 211004, music: "", sound: "", txt: "[我]我告诉我朋友，我在巴塞遇到了一\n个帅哥，她想看看帅哥的样子。" },
    430581: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗楞了一下，\n随即笑意盈满了他的眼睛。" },
    430582: { nxId: 1, scene: 43804, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]现在我们的世界开始交融了。" },
    //博2
    430583: { nxId: 430599, scene: 43804, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" },
    //特殊分支
    430584: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "你掏出手机，打开相机，\n递给了博文朗。" },
    430585: { nxId: 1, scene: 43804, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]这是干什么？" },
    430586: { nxId: 1, scene: 43804, doing: 2, item: 211004, music: "", sound: "", txt: "[我]我告诉我朋友，我在巴塞遇到了一\n个帅哥，她想看看帅哥的样子。" },
    430587: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗楞了一下，\n随即笑意盈满了他的眼睛。" },
    430588: { nxId: 430599, scene: 43804, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]现在我们的世界开始交融了。" },
    //博3
    430589: { nxId: 1, scene: 43804, doing: 7, item: 71011, music: "", sound: "", txt: "好感度" },
    430590: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗举起你的手机，手臂自然地\n环绕着你的腰，手却并未接触到。" },
    430591: { nxId: 1, scene: 43804, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（看起来挺风流的，其实骨子里还\n   是很绅士嘛。）" },
    430592: { nxId: 1, scene: 43804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你不是不喜欢拍照吗？" },
    430593: { nxId: 1, scene: 43804, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]是啊，别人我都不愿意被拍到。" },
    430594: { nxId: 1, scene: 43804, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]但和你合照，我丝毫不觉得难受，\n这是怎么回事呢？" },
    430595: { nxId: 1, scene: 43804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我怎么知道？" },
    430596: { nxId: 1, scene: 43804, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]我知道答案就好。来，看镜头。" },
    430597: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "你犹豫着，靠近了博文朗，看着镜\n头露出了微笑。“咔嚓”一声，两\n张笑脸定格在这个时空。" },
    430598: { nxId: 1, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "博文朗的笑容让你有些招架不住，\n你用手背给自己的脸降温，躲到了\n一旁。" },

    430599: { nxId: 430600, scene: 43804, doing: 1, item: 0, music: "", sound: "", txt: "一下午的收获不算丰厚，在尝过马\n丁的手艺之后，你跟着博文朗来到\n了他的画室。" },


    //画室
    430600: { nxId: 1, scene: 43901, doing: 0, item: 0, music: "missing", sound: "", txt: "背景初始化" },
    430601: { nxId: 1, scene: 43904, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]地方比较乱，你随意。" },
    430602: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我还以为你这儿会有很多画呢？" },
    430603: { nxId: 1, scene: 43904, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]大都拿去画廊挂着了，\n这画不拿去卖，我吃什么？" },

    430604: { nxId: 1, scene: 43904, doing: 4, item: 44318, music: "", sound: "", txt: "分支选择" },
    //A 
    430605: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]除了极少数的天才，所有说不在意\n钱财的艺术家都是骗子。" },
    430606: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]谁能不在意世人的眼光？又有谁能\n在饥寒交迫中继续创作？" },
    430607: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]只有有了足够的物质基础，\n才能保障自己的创作环境。" },
    430608: { nxId: 1, scene: 43904, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]这是事实，没什么好羞愧的。" },
    430609: { nxId: 430612, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]说的也对。只有有了足够的资本，\n才能更好地创作自己的作品。" },
    //B
    430610: { nxId: 1, scene: 43904, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]即使梵高，他也为了市场作画，\n只是没卖出去而已。" },
    430611: { nxId: 1, scene: 43904, doing: 2, item: 211004, music: "", sound: "", txt: "[我]就是嘛，大师也是要恰饭的嘛。" },

    430612: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "你漫步在客厅里，看到墙壁上桌子\n上放着许多女人的画像。" },
    430613: { nxId: 1, scene: 43904, doing: 2, item: 211005, music: "", sound: "", txt: "[我]这些画中的女人都好美。" },
    430614: { nxId: 1, scene: 43904, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]她们代表着不同时期的我，\n你看画法也不一样。" },
    430615: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]2……4……6……" },
    430616: { nxId: 1, scene: 43904, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]你在数什么？" },

    430617: { nxId: 1, scene: 43904, doing: 4, item: 44319, music: "", sound: "", txt: "分支选择" },
    //A
    430618: { nxId: 1, scene: 43904, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]不一定我画的人就是我的女朋友吧！" },
    430619: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我可不觉得你是那种人，\n都画人家了还不发生点什么？" },
    430620: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]而且我觉得你说得对，至\n少在和交往的时候，你爱她们。" },
    430621: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你的笔触暴露了你的心事。" },
    430622: { nxId: 430630, scene: 43904, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]我就当你是在夸我画的好。" },
    //B
    430623: { nxId: 1, scene: 43904, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]哈哈哈哈。" },
    430624: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]画法的确各不相同，\n看来你十分善变。" },
    430625: { nxId: 1, scene: 43904, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]每段时期经历造就不同的我，不同\n的我笔下的人物自然风格迥异。" },
    430626: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那现在呢？你是什么时期？" },
    430627: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]迷惘期……" },
    430628: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我总觉得我一直没有变，还是那个\n渴望爱情滋润的孤单灵魂……" },
    430629: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]典型的艺术家。" },

    430630: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "Sub", sound: "", txt: "你继续欣赏，漫步向前，却发现在\n房间尽头，站着一个女人！" },
    430631: { nxId: 1, scene: 43904, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（是上午的那个女人！）" },
    430632: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "女人和博文朗的视线相对时，\n有些心虚地移开了目光。" },
    430633: { nxId: 1, scene: 43904, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]伊莲娜，我们说好的：\n不再打搅彼此的生活。" },
    430634: { nxId: 1, scene: 43904, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]我只是……我回来拿一点东西。\n我马上走。" },
    430635: { nxId: 1, scene: 43904, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]等等，你手上拿的什么？" },
    430636: { nxId: 1, scene: 43904, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]没什么，我的画，我忘了拿我的画。" },
    430637: { nxId: 1, scene: 43904, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]给我看看！" },
    430638: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "伊莲娜把画捂在胸口，博文朗伸出手。\n伊莲娜的突然情绪激动起来。" },
    430639: { nxId: 1, scene: 43904, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]这是我的画。" },
    430640: { nxId: 1, scene: 43904, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]可你画的是我！是我！就是我！" },
    430641: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]没有，不是你。\n给自己留一点尊严好吗？伊莲娜。" },
    430642: { nxId: 1, scene: 43904, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]博文朗，难道我连一副属于自己的\n肖像画都不配拥有吗？" },
    430643: { nxId: 1, scene: 43904, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]你到底有没有爱过我？\n以前你画的我都到那里去了？" },
    430644: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]你和我，早已结束。" },
    430645: { nxId: 1, scene: 43904, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]结束？你几个字就想让以前的一切\n被掩埋吗？我到底算什么？" },
    430646: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "伊莲娜的声音尖锐起来，挥舞着双\n手，脸上显出几分癫狂。" },
    430647: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "博文朗抓着她的胳膊，轻轻安抚她。" },
    430648: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]伊莲娜，你需要医生……" },
    430649: { nxId: 1, scene: 43904, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]你以前说我只需要你，\n医生都是骗子……" },
    430650: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "伊莲娜把手里的画扔在地上，冷酷\n的眼神盯着你，吓得你一机灵。" },
    430651: { nxId: 1, scene: 43904, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]你也一样，对他来说什么也不是！" },
    430652: { nxId: 1, scene: 43904, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]我们都是傻瓜，\n都将会是被抛弃的下场。" },
    430653: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "说完，伊莲娜转身离开了。" },
    430654: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "XS", sound: "", txt: "[我]你和她到底是怎么回事？" },
    430655: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]相信我，我和她已经结束了。" },
    430656: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]只是，最近她情绪有些不稳定……" },
    430657: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你怎么知道她现在精神不稳定？" },
    430658: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]她总是在我常去的地方出现……\n就像刚刚……" },
    430659: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我刚开始做画家时她帮了我许多，\n我不能那么绝情……" },
    430660: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]对不起……" },

    430661: { nxId: 1, scene: 43904, doing: 4, item: 44320, music: "", sound: "", txt: "分支选择" },
    //A
    430662: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]不，我不爱了。" },
    430663: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这种反应就说明你还对她还有依恋。" },
    430664: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]不，没有，我对她的爱没有了。" },
    430665: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]她刚刚对我说的话？" },
    430666: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我希望你不要去在意她的话，\n我们分开是我们之间出了问题。" },
    430667: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]什么问题？" },
    430668: { nxId: 430688, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]愤怒和嫉恨占据了我们所有情绪，\n所以，分开对彼此都好！" },
    //B
    //正常分支
    430669: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我和她一起生活了很久，\n到现在我依旧尊重她。" },
    430670: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]虽然我们不再相爱，但她\n永远是我生命里无法抹去的一部分。" },
    430671: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我原本以为，\n你会是一个更加轻浮浪荡的人。" },
    430672: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]追求爱情，就是轻浮吗？" },
    430673: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你真是复杂……" },
    //博2
    430674: { nxId: 430688, scene: 43904, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" },
    //特殊分支
    430675: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我和她一起生活了很久，\n到现在我依旧尊重她。" },
    430676: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]虽然我们不再相爱，但她\n永远是我生命里无法抹去的一部分。" },
    430677: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我原本以为，\n你会是一个更加轻浮浪荡的人。" },
    430678: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]追求爱情，就是轻浮吗？" },
    430679: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你真是复杂……" },
    //博3
    430680: { nxId: 430688, scene: 43904, doing: 7, item: 71011, music: "", sound: "", txt: "好感度" },
    //C
    430681: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]可那样的爱让我害怕。" },
    430682: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你这算喜新厌旧吗？" },
    430683: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你对我的喜欢，\n只是你想在我身上寻求新鲜感吧。" },
    430684: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我希望你不要去在意她的话。" },
    430685: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]你对我来说，与她们不一样，\n你是第一个让我主动接近的女人。" },
    430686: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我的理性告诉我不要相信你，\n但感性却让我不由自主向你靠近，" },
    430687: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你真是个危险的男人，博文朗。" },

    430688: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "你捡起了地上的画，是一个身姿曼\n妙的女人，却没有面孔。" },
    430689: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这幅画为什么没有脸？" },
    430690: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]伊莲娜给了我灵感，\n让我画出了我心中女神的身姿。" },
    430691: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]但是不够，\n她无法让我描绘出女神的面容。" },
    430692: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]这是我最重要的创作，\n所以她总觉得这说明了什么。" },
    430693: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "博文朗把画放到了一旁的箱子里，\n你注意到箱子里有一条和画中人一\n样的裙子。" },
    430694: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这就是她给你灵感时穿的裙子吗？" },
    430695: { nxId: 430702, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]是的。" },
   

    430702: { nxId: 1, scene: 43904, doing: 4, item: 44321, music: "", sound: "", txt: "分支选择" },
    //A
    //正常分支
    430696: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "kiss", sound: "", txt: "你的指尖抚摸着裙子柔软的布料，\n想象着伊莲娜穿上裙子，在博文朗\n的笔触下获得新生的样子。" },
    430697: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "一种从未有过的、想要替代一个她\n的强烈情感在你的心中激荡不停……" },
    430698: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]曾经，一个女人在你的生命中留下\n了不可磨灭的痕迹……" },
    430699: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]但会有另一个女人，她将如奔涌的\n潮汐一般冲刷激荡你的灵魂……" },
    430700: { nxId: 430989, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]她会让你的过往全部消失……\n让你重生！让你重新认识美好！" },
    430989: { nxId: 430701, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那个女人，是我！" },
    430701: { nxId: 430703, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "你看着画中人的空白脸孔，那空白\n脸孔也在看着你，仿佛有种无言的\n急迫情感在催促和鼓动着你……" },
    
    430703: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]拿起你的画笔。" },
    430704: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]什么？" },
    430705: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你不是需要女神做你的模特么？" },
    430706: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "你脱下衣裙，换上红色的长裙，裙\n摆翩跹，犹如女人的战衣。在博文\n朗惊讶的眼光中，你走向了露台。" },
    430707: { nxId: 430713, scene: 43904, doing: 6, item: 64302, music: "", sound: "", txt: "CG动画" },//月下美人

    //废
    430708: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "你站在月光之下，柔和的灯光在你\n的裙摆上镀了一层光晕。" },
    430709: { nxId: 430713, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "你看到了博文朗眼中的惊艳，\n嘴角露出了微笑。" },

    //博4
    430713: { nxId: 1, scene: 43904, doing: 7, item: 71012, music: "", sound: "", txt: "好感度" },
    430714: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "博文朗突然跳了起来，身体带到身\n边的画，哗啦啦地摔了一地，但是\n他完全不在意。" },
    430715: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "博文朗从箱子里拿起画，抓过画笔\n开始勾勒，不时地与你目光相接，\n眼中闪着爱意。" },
    430716: { nxId: 1, scene: 43904, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（很好，这就是我要的，学姐说得\n   对，主动了才有故事。）" },
    430717: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "不知过了多久，博文朗终于放下了\n画笔，端详着眼前的画，半晌，嘴\n角露出了满意的笑。" },
    430718: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好了吗？" },
    430719: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "你活动着酸疼的脚，想走下露台，\n却看到博文朗三两步走到你身边，\n俯身吻住了你。" },
    430720: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "他有力的臂膀揽着你的腰，你们的\n胸腔紧紧贴着，你能感受到他激烈\n的心跳。" },
    //惊现2B霸总发言
    430721: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]你撩动了我，休想轻易离开。\n这一次，你可不能再拒绝我了。" },
    430722: { nxId: 430844, scene: 43904, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（我干什么还要拒绝啊）" },
    430844: { nxId: 430725, scene: 43904, doing: 6, item: 64303, music: "", sound: "", txt: "CG动画" },//额外亲亲

    //废
    430723: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "灼热急切的吻，成年人的情欲，你\n迷失在他的吻里，不堪一击，他攥\n着你一起沉溺……" },
    430724: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "你闭上眼睛，回吻了博文朗。" },

    430725: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "不知过了多久，你推开了博文朗，\n理智终于回了你的大脑。" },
    430726: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]咳咳，我们回去吧。" },
    430727: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]等等，我还有话要对你说。" },//你丫废话真多
    //博3
    430728: { nxId: 1, scene: 43904, doing: 7, item: 71011, music: "", sound: "", txt: "好感度" },
    430729: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]初次相遇，你身上独有的气质就吸\n引了我……" },
    430730: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]精致，细腻，多愁善感，\n渴望爱情的滋养……" },
    430731: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]那一刻，我心中那副没有脸的画终\n于有了大致轮廓！" },
    430732: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]但我仍不能确信，\n可能是对自己的不自信！" },
    430733: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我可能失去了爱人的能力，\n过于亲密的关系，让我感到窒息。" },
    430734: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我恐惧、我逃离，\n直至方才，我终于确认自己的心。" },
    430735: { nxId: -1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我害怕过于亲密的关系，但若是你\n请允许我向你，一步步走近……" },
    
    //特殊分支
    430991: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "kiss", sound: "", txt: "你的指尖抚摸着裙子柔软的布料，\n想象着伊莲娜穿上裙子，在博文朗\n的笔触下获得新生的样子。" },
    430992: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "一种从未有过的、想要替代一个她\n的强烈情感在你的心中激荡不停……" },
    430993: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]曾经，一个女人在你的生命中留下\n了不可磨灭的痕迹……" },
    430994: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]但会有另一个女人，她将如奔涌的\n潮汐一般冲刷激荡你的灵魂……" },
    430995: { nxId: 430988, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]她会让你的过往全部消失……\n让你重生，让你重新认识美好！" },
    430988: { nxId: 430996, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那个女人，是我！" },
    430996: { nxId: 430736, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "你看着画中人的空白脸孔，那空白\n脸孔也在看着你，仿佛有种无言的\n急迫情感在催促和鼓动着你……" },
    
    430736: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]拿起你的画笔。" },
    430737: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]什么？" },
    430738: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你不是需要女神做你的模特么？" },
    430739: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "你脱下衣裙，换上红色的长裙，裙\n摆翩跹，犹如女人的战衣。在博文\n朗惊讶的眼光中，你走向了露台。" },
    430740: { nxId: 430746, scene: 43904, doing: 6, item: 64302, music: "", sound: "", txt: "CG动画" },//月下美人

    //废
    430741: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "你站在月光之下，柔和的灯光在你\n的裙摆上镀了一层光晕。" },
    430742: { nxId: 430746, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "你看到了博文朗眼中的惊艳，\n嘴角露出了微笑。" },

    //博5
    430746: { nxId: 1, scene: 43904, doing: 7, item: 71031, music: "", sound: "", txt: "好感度" },
    430747: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "博文朗突然跳了起来，身体带到身\n边的画，哗啦啦地摔了一地，但是\n他完全不在意。" },
    430748: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "博文朗从箱子里拿起画，抓过画笔\n开始勾勒，不时地与你目光相接，\n眼中闪着爱意。" },
    430749: { nxId: 1, scene: 43904, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（很好，这就是我要的，学姐说得\n   对，主动了才有故事。）" },
    430750: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "不知过了多久，博文朗终于放下了\n画笔，端详着眼前的画，半晌，嘴\n角露出了满意的笑。" },
    430751: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好了吗？" },
    430752: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "你活动着酸疼的脚，想走下露台，\n却看到博文朗三两步走到你身边，\n俯身吻住了你。" },
    430753: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "他有力的臂膀揽着你的腰，你们的\n胸腔紧紧贴着，你能感受到他激烈\n的心跳。" },
    //惊现2B霸总发言
    430754: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]你撩动了我，休想轻易离开。\n这一次，你可不能再拒绝我了。" },
    430755: { nxId: 430845, scene: 43904, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（我干什么还要拒绝啊）" },
    430845: { nxId: 430758, scene: 43904, doing: 6, item: 64303, music: "", sound: "", txt: "CG动画" },//额外亲亲

    //废
    430756: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "灼热急切的吻，成年人的情欲，你\n迷失在他的吻里，不堪一击，他攥\n着你一起沉溺……" },
    430757: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "你闭上眼睛，回吻了博文朗。" },

    430758: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "不知过了多久，你推开了博文朗，\n理智终于回了你的大脑。" },
    430759: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]咳咳，我们回去吧。" },
    430760: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]等等，我还有话要对你说。" },//你丫废话真多
    //博4
    430761: { nxId: 1, scene: 43904, doing: 7, item: 71012, music: "", sound: "", txt: "好感度" },
    430762: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]初次相遇，你身上独有的气质就吸\n引了我……" },
    430763: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]精致，细腻，多愁善感，\n渴望爱情的滋养……" },
    430764: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]那一刻，我心中那副没有脸的画终\n于有了大致轮廓！" },
    430765: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]但我仍不能确信，\n可能是对自己的不自信！" },
    430766: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我可能失去了爱人的能力，\n过于亲密的关系，让我感到窒息。" },
    430767: { nxId: 1, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我恐惧、我逃离，\n直至方才，我终于确认自己的心。" },
    430768: { nxId: 430775, scene: 43904, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我害怕过于亲密的关系，但若是你\n请允许我向你，一步步走近……" },
    430775: { nxId: -1, scene: 43904, doing: -1, item: 211002, music: "", sound: "", txt: "" },

    //B
    430769: { nxId: 1, scene: 43904, doing: 2, item: 220003, music: "bowenlang", sound: "", txt: "[博文朗]怎么了？" },
    430770: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没什么，我就在想谁会成为这画中\n的人？" },
    430771: { nxId: 1, scene: 43904, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]我也希望早点完成它，\n要不要喝一杯？" },
    430772: { nxId: 1, scene: 43904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好啊！" },
    430773: { nxId: 1, scene: 43904, doing: 1, item: 0, music: "", sound: "", txt: "月光下，你与博文朗小酌清谈，\n度过了一夜。" },
    430774: { nxId: -1, scene: 43904, doing: -1, item: 211002, music: "", sound: "", txt: "" },


}

export class CfgChapter4_3 {
    public chapters: any = chapterObj;
    public endChatuList: string[] = ["xi#锡切斯", "tea#雨后彩虹", "boat#海钓", "bg_1_4#哭泣角落"];
}