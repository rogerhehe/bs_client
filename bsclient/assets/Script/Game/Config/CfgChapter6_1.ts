/** 操作ID,下一步操作ID,场景ID,操作类型,具体操作ID,描述 */
/** 操作类型: -1.无 0.背景移动 1.旁白 2.对话 3.人物介绍 4.分支选择 5.插图 6.CG动画 7.好感度 8.衣服选择 9.电话微信 10.回忆 11.彩蛋*/

let chapterObj = {
    //三号酒店房间（傍晚）
    610001: { nxId: 1, scene: 61101, doing: 0, item: 0, music: "bowenlang", sound: "", txt: "背景初始化" },
    610002: { nxId: 1, scene: 61104, doing: 12, item: 126101, music: "", sound: "", txt: "地点介绍" },
    610003: { nxId: 1, scene: 61104, doing: 1, item: 0, music: "", sound: "", txt: "你删掉了程昱川的电话和微信，换\n了新酒店，不想再为这个人难过。" },
    610004: { nxId: 1, scene: 61104, doing: 1, item: 0, music: "", sound: "", txt: "但一个人坐在酒店的窗前，还是忍\n不住委屈的泪水沿着脸庞滑落。" },
    610005: { nxId: 1, scene: 61104, doing: 1, item: 0, music: "", sound: "", txt: "为什么遇到这种事的，偏偏是你呢？" },
    610006: { nxId: 1, scene: 61104, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（简直不敢相信发生的这一切……\n   几天的时光，都是泡影……）" },
    610007: { nxId: 1, scene: 61104, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（为什么这世界上这么多负心人！）" },
    610008: { nxId: 1, scene: 61104, doing: 1, item: 0, music: "", sound: "lingsheng", txt: "为什么遇到这种事的，偏偏是你呢？" },

    610009: { nxId: 610010, scene: 61104, doing: 9, item: 961001, music: "", sound: "", txt: "电话微信" },

    610010: { nxId: 1, scene: 61104, doing: 1, item: 0, music: "", sound: "", txt: "虽然心里仍然很难受，但此时有个\n倾诉的人，总归比自己一个人默默\n地回顾那些伤痛要好得多。" },
    610011: { nxId: 1, scene: 61104, doing: 1, item: 0, music: "", sound: "", txt: "挂掉了电话，这一天的变故让你十\n分疲惫。很快，你进入了梦乡。" },

    //三号酒店房间（清晨）
    610012: { nxId: 1, scene: 61201, doing: 0, item: 0, music: "SP", sound: "", txt: "背景初始化" },
    610013: { nxId: 1, scene: 61204, doing: 1, item: 0, music: "", sound: "", txt: "你睡眼惺忪地打开手机，发现接你\n的司机已经发来了信息。" },
    610014: { nxId: 1, scene: 61204, doing: 2, item: 211003, music: "", sound: "", txt: "[我]啊，已经这么晚了……" },
    610015: { nxId: 1, scene: 61204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]司机就快到了，赶紧洗刷一下准备\n出发吧。" },
    610016: { nxId: 1, scene: 61204, doing: 1, item: 0, music: "", sound: "", txt: "你洗漱完毕，开始收拾行李。" },

    610017: { nxId: 1, scene: 61204, doing: 4, item: 46101, music: "", sound: "", txt: "分支选择" },
    //A
    610018: { nxId: 1, scene: 61204, doing: 1, item: 0, music: "", sound: "", txt: "你确认了一下你的护照。护照的边\n角上有点烤焦，还好整体没损坏。" },
    610019: { nxId: 1, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（这是那晚酒店失火留下的……）" },
    610020: { nxId: 1, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（虽然程昱川是个渣男，但是那时\n   候的确是他救了我。）" },
    610021: { nxId: 1, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（当时他衣服都来不及穿，就跑进\n   来通知我。）" },
    610022: { nxId: 1, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（还替我挡下燃烧的衣帽架……）" },
    610023: { nxId: 1, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（真的很难想象，一个猎艳的骗子\n   能这么做……）" },
    610024: { nxId: 610030, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（但骗子始终就是骗子！）" },
    //B
    610025: { nxId: 1, scene: 61204, doing: 1, item: 0, music: "", sound: "", txt: "你检查了一下行李有没有收拾好。" },
    610026: { nxId: 1, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（这件衣服……\n   是当时海滩上约会穿的。）" },
    610027: { nxId: 1, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（尽管程昱川满口谎言，但是现在\n   回想起来，）" },
    610028: { nxId: 1, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（他在海滩上诉说自己的成长，感\n   觉十分的真诚。）" },
    610029: { nxId: 1, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（要不是他的消息露馅，几乎就要\n   被这个人完全欺瞒过去。）" },

    610030: { nxId: 1, scene: 61204, doing: 1, item: 0, music: "", sound: "", txt: "你拿好护照证件，整理完衣物，打\n算再清点一下这几天买的东西。" },

    610031: { nxId: 1, scene: 61204, doing: 4, item: 46102, music: "", sound: "", txt: "分支选择" },
    //A
    610032: { nxId: 1, scene: 61204, doing: 1, item: 0, music: "", sound: "", txt: "这些是你在格拉西亚大道血拼的衣\n服。有两件在火灾中烧掉了，还好\n酒店赔偿给你了。" },
    610033: { nxId: 1, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（这是第一天买来的东西。我果然\n   是个剁手狂啊……）" },
    610034: { nxId: 1, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（这也是那个人渣过敏后帮我拿回\n   酒店的。）" },
    610035: { nxId: 1, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（他甚至为了我跟博文朗吃醋……）" },
    610036: { nxId: 610041, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（男人可以对自己不喜欢的女人做\n   到这样吗？）" },
    //B
    610037: { nxId: 1, scene: 61204, doing: 1, item: 0, music: "", sound: "", txt: "照片上是你们在波盖利亚市场，随\n着安娜的小提琴起舞的时候。你请\n路人用你的手机拍下来的。" },
    610038: { nxId: 1, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（我还记得那支舞曲，程昱川那炽\n   热的眼神……）" },
    610039: { nxId: 1, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（如果不是发现了真相，大概这会\n   是一段美妙的回忆吧……）" },
    610040: { nxId: 1, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（女孩子容易被这些东西打动，才\n   会这么轻易地被人欺骗吧。）" },

    610041: { nxId: 1, scene: 61204, doing: 1, item: 0, music: "", sound: "", txt: "正收拾着衣服，这时，你箱子里的\n衣物下露出了一个香水瓶。" },
    //插图香水瓶
    610042: { nxId: 1, scene: 61204, doing: 5, item: 51004, music: "", sound: "", txt: "插图" },

    610043: { nxId: 1, scene: 61204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]诶，这是程昱川之前送我的那瓶稀\n有的香水……" },
    610044: { nxId: 1, scene: 61204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]为了这瓶香水，还跟博文朗先生起\n了冲突。" },
    610045: { nxId: 1, scene: 61204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]要带走这瓶香水吗？" },

    //大结局选项
    610046: { nxId: 1, scene: 61204, doing: 4, item: 46103, music: "", sound: "", txt: "分支选择" },
    //A
    //好结局
    610047: { nxId: 1, scene: 61204, doing: 1, item: 0, music: "", sound: "", txt: "犹豫片刻，你还是把香水拿了起来。" },
    610048: { nxId: 1, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（心里有一种奇怪的感觉，说不清\n   为什么，但是……）" },
    610049: { nxId: 1, scene: 61204, doing: 1, item: 0, music: "", sound: "", txt: "你仔细地看了看香水。" },
    610050: { nxId: 1, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（记得那位博先生说过，这个是叫\n   “少女之颊”来着。）" },
    610051: { nxId: 1, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（我记得他教我用法来着，不妨试\n   一试好了。）" },
    610052: { nxId: 1, scene: 61204, doing: 1, item: 0, music: "", sound: "", txt: "你拿起香水，回忆博文朗的动作，\n先把香水喷在手腕上，然后把香水\n涂在脖子上。" },
    610053: { nxId: 1, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（这种温热而清凉的香调，\n   真是独特。）" },
    610054: { nxId: 1, scene: 61204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（尽管遇到人渣令人心碎，但这段\n   旅程仍然如这香氛一般美妙难忘。）" },
    610055: { nxId: 610999, scene: 61204, doing: 1, item: 0, music: "", sound: "", txt: "你收拾好了行李，转身离开房间。" },

    //酒店门口 公用段 
    610999: { nxId: 610056, scene: 42301, doing: 0, item: 0, music: "missing", sound: "", txt: "背景初始化" },
    610056: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "你来到酒店门口等待司机。这时，\n你看到了一个熟悉的身影。" },
    610057: { nxId: 1, scene: 42304, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]林小姐，没想到又一次遇到你了。" },
    610058: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]博先生，我们还真是有缘。" },
    610059: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我也是这么觉得，你怎么一个人在\n外面？" },
    610060: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我本来就是一个人在旅行。" },
    610061: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "博文朗看向你的眼神有点吃惊，不\n过很快就恢复了平常的神色。" },

    610062: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]人生就是一场一个人的旅行。" },
    610063: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没错。" },
    610064: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]你这是要回国了？" },
    610065: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没错。可我的司机大概半路堵车了。" },
    610066: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]那还真是不幸。嗯？" },
    610067: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]怎么了？有什么问题吗？" },
    610068: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]这个香调，是……“少女之颊”。" },
    610069: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是的。" },
    610070: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "博文朗若有所思地看着你。他奇怪\n的反应让你有点好奇。" },

    610071: { nxId: 1, scene: 42304, doing: 4, item: 46104, music: "", sound: "", txt: "分支选择" },
    //A
    610072: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]博先生，有什么我不知道的事情要\n告诉我吗？" },
    610073: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]只是想起了一些有趣的事情。" },
    610074: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那时候在香水博物馆的事吗？" },
    610075: { nxId: 610080, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]不全是。我们到那边坐下聊聊？" },
    //B
    610076: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]大画家，我的脸上有毕加索的真迹吗？" },
    610077: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]不，没有任何画家能创作出你这么\n美丽的面孔。" },
    610078: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你可真是个会和女人聊天的男士。" },
    610079: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我有些话想跟您说说。我们到那边\n坐下聊聊？" },

    610080: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "你走到街边的休息区坐下，博文朗\n随着你坐在了你的身边。" },
    610081: { nxId: 1, scene: 42304, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]恕我直言，你和程先生之间发生了\n什么？你们之前还在一起来着。" },
    610082: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]现在不是了。或者他在乎的女人也\n不止一个。" },
    610083: { nxId: 1, scene: 42304, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]嗯……我不是牧师，但如果你需要\n倾听，我可以临时充当一下。" },
    610084: { nxId: 1, scene: 42304, doing: 2, item: 211004, music: "", sound: "", txt: "[我]你要是牧师的话，那来祷告的女孩\n子恐怕要排长队了。" },
    610085: { nxId: 1, scene: 42304, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]跟我说说吧，会好受一些。" },
    610086: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]也没什么，我上当了，只是一场喧\n嚣的闹剧。" },
    610087: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]真的是这样吗？那你打算怎么办？" },
    610088: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]今天是我在巴塞罗那的最后一天。\n马上我就要坐飞机回去了。" },
    610089: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]真是太遗憾了。和程先生就这么结\n束，不会后悔吗？" },

    610090: { nxId: 1, scene: 42304, doing: 4, item: 46105, music: "", sound: "", txt: "分支选择" },
    //A
    610091: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是很遗憾。也许他就是个天性风流\n的人，但原谅我无法接受。" },
    610092: { nxId: 610097, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]你的意思是，程先生做了不忠于你\n的事情？" },
    //B
    610093: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我不会为了别人的过错而后悔。" },
    610094: { nxId: 610097, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]这么说，是程先生的问题？" },
    //C
    610095: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]博先生，感情里唯一不能妥协的，\n就是欺骗。" },
    610096: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]这么说，程先生一定做了什么让你\n不可原谅的事。" },

    610097: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]他已经是个陌生人了，我不想谈论\n别人的私事。" },
    610098: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]虽然我和程先生一度有些小矛盾，\n但事情似乎没那么简单。" },
    610099: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你了解什么？" },
    610100: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]程先生送你的这瓶“少女之颊”，\n来自巴塞罗那一位著名收藏家。" },
    610101: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是吗？" },
    610102: { nxId: 1, scene: 42304, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]没错。此人的坏脾气和无所不包的\n收藏品一样著名。" },
    610103: { nxId: 1, scene: 42304, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]以前我也尝试买下他这瓶香水。" },
    610104: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]看来这位收藏家很难打交道。连你\n这样的绅士都无法打动他。" },
    610105: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]是“她”。\n说来难为情，这位老人家声称：" },
    610106: { nxId: 1, scene: 42304, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]这瓶香水属于 “拥有真爱的少年” 。" },
    610107: { nxId: 1, scene: 42304, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]只有他才能得到 “少女之颊” 。" },

    610108: { nxId: 1, scene: 42304, doing: 4, item: 46106, music: "", sound: "", txt: "分支选择" },
    //A
    610109: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]为什么这么说？" },
    610110: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]因为没钱的人没法买，有钱的人又\n没有真心实意。" },
    610111: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]也许我现在很偏激，但是对不起，\n我就是这么认为的。" },
    610112: { nxId: 1, scene: 42304, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]哈哈哈。" },
    610113: { nxId: 1, scene: 42304, doing: 2, item: 211004, music: "", sound: "", txt: "[我]见笑了……" },
    610114: { nxId: 610119, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]她是怎么分辨来买的人是真心的，\n还是假装的呢？" },
    //B
    610115: { nxId: 1, scene: 42304, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]哈哈，很多人的反应都和你一样。" },
    610116: { nxId: 1, scene: 42304, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]不过，我猜是跟这位女士过去的感\n情有关吧。" },
    610117: { nxId: 1, scene: 42304, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]这世上还是有相信爱情的人不是吗？" },
    610118: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我很好奇她怎么分辨真心和演技呢？" },

    610119: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]她要求对方说出自己的爱情故事。" },
    610120: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]这位女士似乎能透视人心，\n总之，没人成功过。" },
    610121: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我不知道程先生用了什么方法，\n但是他的确拿到了这瓶香水。" },//美男计
    610122: { nxId: 1, scene: 42304, doing: 2, item: 211015, music: "", sound: "", txt: "[我]……" },
    610123: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]其实就在昨天，程先生还找到我，\n并租下了我的一间画廊。" },
    610124: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]嗯？我不知道这件事。\n租你的画廊干什么？" },
    610125: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我不能说太多了……" },
    610126: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]如果不是因为看到你，我连这\n个也不该说的。" },
    610127: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "你刚想追问下去，你的手机响了起\n来。低头一看，你的司机到了。" },
    610128: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]抱歉，我得走了。" },
    610129: { nxId: 1, scene: 42304, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]我送你！" },
    610130: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "博文朗帮你将行李放到后备箱，然\n后向你挥手告别。" },
    610131: { nxId: 1, scene: 42304, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]祝你一路平安。" },
    610132: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "车旁的博文朗犹豫了一下，\n然后突然叫住了你。" },
    610133: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]林小姐……" },
    610134: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]怎么了？" },
    610135: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]Nunca juzgue a nadie por la apariencia" },
    610136: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]什么？" },
    610137: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]西班牙谚语，\n永远不要通过表面评判一个人。" },
    610138: { nxId: 1, scene: 42304, doing: 2, item: 211015, music: "", sound: "", txt: "[我]……" },
    610139: { nxId: 1, scene: 42304, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]失礼了，祝你一路顺风。" },
    610140: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "说完这句，\n博文朗微笑着向你挥手告别。" },

    //格拉西亚大道
    610141: { nxId: 1, scene: 24001, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    610142: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "一路上，你还在思考着博文朗最后\n那句话。突然你注意到这似乎不是\n去机场的路。" },
    610143: { nxId: 1, scene: 24004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]先生，这不是去机场的路？" },
    610144: { nxId: 1, scene: 24004, doing: 2, item: 211203, music: "", sound: "", txt: "[司机]抱歉，小姐，\n但是订车的先生改变了路线。" },

    610145: { nxId: 1, scene: 24004, doing: 4, item: 46107, music: "", sound: "", txt: "分支选择" },
    //A
    610146: { nxId: 1, scene: 24004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]您马上改道去机场，\n不然我要报警了。" },
    610147: { nxId: 1, scene: 24004, doing: 2, item: 211203, music: "", sound: "", txt: "[司机]那位先生让我转达一句话。" },
    610148: { nxId: 1, scene: 24004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]什么话？" },
    610149: { nxId: 1, scene: 24004, doing: 2, item: 211203, music: "", sound: "", txt: "[司机]他说，您的航班还早，\n希望有时间让您看一样东西。" },
    610150: { nxId: 610152, scene: 24004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]什么东西？" },
    //B 
    610151: { nxId: 1, scene: 24004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]改变路线？改到哪里？" },

    610152: { nxId: 1, scene: 24004, doing: 2, item: 211203, music: "", sound: "", txt: "[司机]去了您就知道了。" },
    610153: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "你的车开到了巴塞罗那的老城区。\n这里已经有好几百年的历史，充满\n了中世纪的哥特风格建筑。" },
    610154: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "车停在一间房子外，从外面放的许\n多画作来看，是一家画廊。" },
    610155: { nxId: 1, scene: 24004, doing: 2, item: 211203, music: "", sound: "", txt: "[司机]我会在这里等您出来。" },

    //画廊 
    610156: { nxId: 1, scene: 53121, doing: 0, item: 0, music: "XS", sound: "", txt: "背景初始化" },
    610157: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "你一走进画廊，就看到墙上挂满了\n各种尺寸的照片。" },
    610158: { nxId: 1, scene: 53124, doing: 2, item: 211003, music: "", sound: "", txt: "[我]这些是……我和程昱川的合照？" },
    610159: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "你顺着照片墙一张张看过去，有你\n们在格拉西亚大道的合影，有在狮\n子和桑树之家下给你拍的美照，" },
    610160: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "高大壮丽的圣家堂，柔美的巴塞罗\n那海滩……点点滴滴的回忆，涌上了\n你的心头。你不禁有了一些感动。" },
    610161: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "突然，你看到了一张很滑稽的画作。" },
    //插图 灵魂2
    610162: { nxId: 1, scene: 53124, doing: 5, item: 51008, music: "", sound: "", txt: "插图" }, //灵魂画2 待替换

    610163: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……画得这么难看。" },
    610164: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "突然，你感觉背后一暖，一双手从\n背后抱住了你。" },
    610165: { nxId: 1, scene: 53124, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]做坏事的的报应来得真是快。" },
    610166: { nxId: 1, scene: 53124, doing: 2, item: 211003, music: "", sound: "", txt: "[我]程昱川？！ " },
    610167: { nxId: 1, scene: 53124, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]是我，惊喜吗？" },
    610168: { nxId: 1, scene: 53124, doing: 2, item: 211002, music: "", sound: "", txt: "[我]这是怎么回事？ " },
    610169: { nxId: 1, scene: 53124, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]在我回答之前，告诉我，为什么洗\n个澡出来我就被拉黑了？" },
    610170: { nxId: 1, scene: 53124, doing: 2, item: 211002, music: "", sound: "", txt: "[我]问你自己。 " },
    610171: { nxId: 1, scene: 53124, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]天地良心，我可什么事儿都没做。" },
    610172: { nxId: 1, scene: 53124, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]但是我知道肯定是什么地方有问题。" },

    610173: { nxId: 1, scene: 53124, doing: 4, item: 46108, music: "", sound: "", txt: "分支选择" },
    //A
    610174: { nxId: 610180, scene: 53124, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你还有脸问我？那个乔安娜呢，你\n怎么不去找她？ " },
    //B
    610175: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "facehit", txt: "你走过去，一巴掌打在程昱川脸上。" },
    610176: { nxId: 1, scene: 53124, doing: 2, item: 217004, music: "", sound: "", txt: "[程昱川]你干什么？" },
    610177: { nxId: 610180, scene: 53124, doing: 2, item: 211002, music: "", sound: "", txt: "[我]应该是我问你干什么才对。乔安娜\n是你什么人？你说说看！ " },
    //C
    610178: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "你平静的注视着程昱川。" },
    610179: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我看到了乔安娜给你的礼物……\n嗯……你开始解释吧……" },

    610180: { nxId: 1, scene: 53124, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]乔安娜？\n原来你这么生气真的是因为她？" },
    610181: { nxId: 1, scene: 53124, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]我出来看到她的礼物盒放在床上，\n就觉得有可能是因为这个。" },
    610182: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那还能因为什么？ " },
    610183: { nxId: 1, scene: 53124, doing: 2, item: 217002, music: "haha", sound: "", txt: "[程昱川]她是我的表妹啊！" },
    610184: { nxId: 1, scene: 53124, doing: 2, item: 211003, music: "", sound: "", txt: "[我]……表妹？ " },
    610185: { nxId: 1, scene: 53124, doing: 2, item: 211002, music: "", sound: "", txt: "[我]表妹会用这么亲密的口吻？ " },
    610186: { nxId: 1, scene: 53124, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]她和我不一样，在美国长大的啦，\n本来就大大咧咧的……" },
    610187: { nxId: 1, scene: 53124, doing: 2, item: 211002, music: "", sound: "", txt: "[我]那你还送钻石项链给表妹？ " },
    610188: { nxId: 1, scene: 53124, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]她订婚了啊……\n我送礼物祝贺，没什么吧？" },
    610189: { nxId: 1, scene: 53124, doing: 2, item: 211015, music: "", sound: "", txt: "[我]……" },
    610190: { nxId: 1, scene: 53124, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（太尴尬了……\n   是我误会了！林晓璐，怎么办！）" },

    610191: { nxId: 1, scene: 53124, doing: 4, item: 46109, music: "", sound: "", txt: "分支选择" },
    //A
    610192: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是我的错。对不起，我向你道歉。 " },
    610193: { nxId: 1, scene: 53124, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]诶？不对啊。" },
    610194: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]什么不对？ " },
    610195: { nxId: 1, scene: 53124, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]林晓璐就不是个会认错的人啊。" },
    610196: { nxId: 1, scene: 53124, doing: 2, item: 211015, music: "", sound: "", txt: "[我]……" },
    610197: { nxId: 1, scene: 53124, doing: 2, item: 217004, music: "", sound: "", txt: "[程昱川]妖精！你把我的女朋友怎么了？" },
    610198: { nxId: 610204, scene: 53124, doing: 2, item: 211015, music: "", sound: "", txt: "[我]……" },
    //B
    610199: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "你扭过头假装还是很生气。程昱川\n这家伙却狡猾地把脸凑过来，也不\n说话，就是紧盯着你的脸。" },
    610200: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "把脸再移开，他又跟过来。如此三\n番五次，你终于没忍住。" },
    610201: { nxId: 1, scene: 53124, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你走开啦！ " },
    610202: { nxId: 1, scene: 53124, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我就是喜欢看你明知自己无理还要\n取闹的表情……" },
    610203: { nxId: 1, scene: 53124, doing: 2, item: 211002, music: "", sound: "", txt: "[我]程昱川！想死了是不是？ " },

    610204: { nxId: 1, scene: 53124, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]哈哈哈，好了好了。不要闹了。" },
    610205: { nxId: 1, scene: 53124, doing: 2, item: 211002, music: "", sound: "", txt: "[我]都怪你，两个人在一起，\n最重要的是诚实！ " },
    610206: { nxId: 1, scene: 53124, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我没有不诚实啊。" },
    610207: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不管，没告诉我的事就是不诚实。 " },
    610208: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "程昱川俯下身，慢慢地靠近你。他\n离得很近了，你的脸都能感受到他\n的呼吸。" },
    610209: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "lingsheng", txt: "正当你们想要做些什么的时候，\n你的手机很配合的响了……" },
    610210: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]等等…… " },
    610211: { nxId: 1, scene: 53124, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]这谁啊，真会挑时候。" },
    610212: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我妈。 " },
    610213: { nxId: 1, scene: 53124, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]伯母来得正是时候。" },
    610214: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "你白了他一眼，背过身去接听电话。" },

    610215: { nxId: 610216, scene: 53124, doing: 9, item: 961040, music: "", sound: "", txt: "电话微信" },

    610216: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "挂掉电话，\n程昱川一脸神秘地又凑上来。" },
    610217: { nxId: 1, scene: 53124, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]跟伯母说什么了？" },
    610218: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]和你没啥关系。 " },
    610219: { nxId: 1, scene: 53124, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]哦？" },
    610220: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "wechat", txt: "[我]哦什么？ " },
    610221: { nxId: 1, scene: 53124, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]没什么。你有新的微信。" },
    610222: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "你白了一眼程昱川，想象了一下妈\n妈见到高大英俊的程昱川的表情……" },
    610223: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "心里有了一种报复般的快感，\n不禁暗自得意。" },
    610224: { nxId: 1, scene: 53124, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（让我看看，\n   母上这次找来的奇葩男什么样。） " },

    //程昱川照片
    610225: { nxId: 1, scene: 53124, doing: 5, item: 51009, music: "", sound: "", txt: "插图" },

    610226: { nxId: 1, scene: 53124, doing: 2, item: 211015, music: "", sound: "", txt: "[我]？？？ " },
    610227: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "你抬起头，一脸茫然地看向程昱川。" },
    610228: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "这家伙却一脸坏笑地看着你。" },
    610229: { nxId: 1, scene: 53124, doing: 2, item: 211002, music: "", sound: "", txt: "[我](天啊！这混蛋一开始就在逗我玩！) " },
    610230: { nxId: 1, scene: 53124, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]伯母说什么了？" },
    610231: { nxId: 1, scene: 53124, doing: 2, item: 211002, music: "", sound: "", txt: "[我]程昱川！你这个大骗子！ " },
    610232: { nxId: 1, scene: 53124, doing: 2, item: 211002, music: "", sound: "", txt: "[我]原来从一开始，\n你就是我的相亲对象？！！ " },
    610233: { nxId: 1, scene: 53124, doing: 2, item: 211002, music: "", sound: "", txt: "[我]还说什么命运的安排？！ " },
    610234: { nxId: 1, scene: 53124, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]在机场的时候，我真不知道我妈和\n你妈是失散多年的老同学……" },
    610235: { nxId: 1, scene: 53124, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]更不要说她们老姐妹齐心安排的这\n个相亲，我向天发誓！" },
    610236: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那你什么时候知道的？ " },
    610237: { nxId: 1, scene: 53124, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]大概是送你走10分钟后，我收到\n你的照片。" },
    610238: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]然后就一路尾随我到这儿？\n你为什么不早点告诉我！ " },
    610239: { nxId: 1, scene: 53124, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]简单的判断：\n你明知家里安排相亲，却跑到国外，" },
    610240: { nxId: 1, scene: 53124, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]一定和我一样，极其厌恶相亲。" },
    610241: { nxId: 1, scene: 53124, doing: 2, item: 211015, music: "", sound: "", txt: "[我]额…… " },
    610242: { nxId: 1, scene: 53124, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]要是你一开始就知道我是你的相亲\n对象……" },
    610243: { nxId: 1, scene: 53124, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]还追你追到西班牙来，\n你会愿意见我吗？" },
    610244: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好像也对…… " },
    610245: { nxId: 1, scene: 53124, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]最重要的……" },
    610246: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]嗯？ " },
    610247: { nxId: 1, scene: 53124, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我不想让你认为，我和你在一起，\n是因为任何除了你我之外的原因。" },
    610248: { nxId: 1, scene: 53124, doing: 2, item: 211005, music: "", sound: "", txt: "[我]程昱川…… " },
    610249: { nxId: 1, scene: 53124, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]当然，我也很期待看到此刻揭开谜\n底时，你那可爱的表情……" },
    610250: { nxId: 1, scene: 53124, doing: 2, item: 211002, music: "", sound: "", txt: "[我]程昱川！你想死了是吧！是吧！ " },
    610251: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "你追打着程昱川。这个一点不正经\n的家伙，居然瞒着你这么久！" },
    610252: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "但这个狡猾的家伙，一边闪避着你\n的拳头，一边抽冷把你一把推在了\n墙上！" },

    610253: { nxId: 1, scene: 53124, doing: 6, item: 66101, music: "", sound: "", txt: "CG动画" },//壁咚亲 待替换

    610254: { nxId: -1, scene: 53124, doing: 13, item: 11611, music: "", sound: "", txt: "独白" },

    //B
    //坏结局
    610255: { nxId: 1, scene: 61204, doing: 1, item: 0, music: "", sound: "", txt: "你把香水放到一旁的桌子上，\n转身离开房间。" },
    //酒店门口 公用段 
    610256: { nxId: 1, scene: 42301, doing: 0, item: 0, music: "missing", sound: "", txt: "背景初始化" },
    610257: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "你来到酒店门口等待司机。这时，\n你看到了一个熟悉的身影。" },
    610258: { nxId: 1, scene: 42304, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]林小姐，没想到又一次遇到你了。" },
    610259: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]博先生，我们还真是有缘。" },
    610260: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我也是这么觉得，你怎么一个人在\n外面？" },
    610261: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我本来就是一个人在旅行。" },
    610262: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "博文朗看向你的眼神有点吃惊，不\n过很快就恢复了平常的神色。" },

    610263: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]可能是我误解了。" },
    610264: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]不过，真是太遗憾了。和程先生就\n这么结束，不会后悔吗？" },

    610265: { nxId: 1, scene: 42304, doing: 4, item: 46110, music: "", sound: "", txt: "分支选择" },
    //A
    610266: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是很遗憾。也许他就是个天性风流\n的人，但原谅我无法接受。" },
    610267: { nxId: 610272, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]你的意思是，程先生做了不忠于你\n的事情？" },
    //B
    610268: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我不会为了别人的过错而后悔。" },
    610269: { nxId: 610272, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]这么说，是程先生的问题？" },
    //C
    610270: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]博先生，感情里唯一不能妥协的，\n就是欺骗。" },
    610271: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]这么说，程先生一定做了什么让你\n不可原谅的事。" },

    610272: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]他已经是个陌生人了，我不想谈论\n别人的私事。" },
    610273: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "这时，你的手机响了起来。\n低头一看，你的司机到了。" },
    610274: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]抱歉，我得走了。" },
    610275: { nxId: 1, scene: 42304, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]我送你！" },
    610276: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "博文朗帮你将行李放到后备箱，然\n后向你挥手告别。" },
    610277: { nxId: 1, scene: 42304, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]祝你一路平安。" },
    610278: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "车旁的博文朗犹豫了一下，\n然后突然叫住了你。" },
    610279: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]林小姐……" },
    610280: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]怎么了？" },
    610281: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]Nunca juzgue a nadie por la apariencia" },
    610282: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]什么？" },
    610283: { nxId: 1, scene: 42304, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]西班牙谚语，\n永远不要通过表面评判一个人。" },
    610284: { nxId: 1, scene: 42304, doing: 2, item: 211015, music: "", sound: "", txt: "[我]……" },
    610285: { nxId: 1, scene: 42304, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]失礼了，祝你一路顺风。" },
    610286: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "说完这句，\n博文朗微笑着向你挥手告别。" },

    //格拉西亚大道
    610287: { nxId: 1, scene: 24001, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    610288: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "一路上，你还在思考着博文朗最后\n那句话。突然你注意到这似乎不是\n去机场的路。" },
    610289: { nxId: 1, scene: 24004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]先生，这不是去机场的路？" },
    610290: { nxId: 1, scene: 24004, doing: 2, item: 211203, music: "", sound: "", txt: "[司机]抱歉，小姐，\n但是订车的先生改变了路线。" },

    610291: { nxId: 1, scene: 24004, doing: 4, item: 46111, music: "", sound: "", txt: "分支选择" },
    //A
    610292: { nxId: 1, scene: 24004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]您马上改道去机场，\n不然我要报警了。" },
    610293: { nxId: 1, scene: 24004, doing: 2, item: 211203, music: "", sound: "", txt: "[司机]那位先生让我转达一句话。" },
    610294: { nxId: 1, scene: 24004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]什么话？" },
    610295: { nxId: 1, scene: 24004, doing: 2, item: 211203, music: "", sound: "", txt: "[司机]他说，您的航班还早，\n希望有时间让您看一样东西。" },
    610296: { nxId: 610298, scene: 24004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]什么东西？" },
    //B 
    610297: { nxId: 1, scene: 24004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]改变路线？改到哪里？" },

    610298: { nxId: 1, scene: 24004, doing: 2, item: 211203, music: "", sound: "", txt: "[司机]去了您就知道了。" },
    610299: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "你的车开到了巴塞罗那的老城区。\n这里已经有好几百年的历史，充满\n了中世纪的哥特风格建筑。" },
    610300: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "车停在一间房子外，从外面放的许\n多画作来看，是一家画廊。" },
    610301: { nxId: 1, scene: 24004, doing: 2, item: 211203, music: "", sound: "", txt: "[司机]我会在这里等您出来。" },

    //画廊 
    610302: { nxId: 1, scene: 53121, doing: 0, item: 0, music: "bowenlang", sound: "", txt: "背景初始化" },
    610303: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "你一走进画廊，就看到墙上挂满了\n各种尺寸的照片。" },
    610304: { nxId: 1, scene: 53124, doing: 2, item: 211003, music: "", sound: "", txt: "[我]这些是……我和程昱川的合照？" },
    610305: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "你顺着照片墙一张张看过去，有你\n们在格拉西亚大道的合影，有在狮\n子和桑树之家下给你拍的美照，" },
    610306: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "高大壮丽的圣家堂，柔美的巴塞罗\n那海滩……点点滴滴的回忆，涌上了\n你的心头。你不禁有了一些感动。" },
    610307: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "突然，你看到了一张很滑稽的画作。" },
    //插图 灵魂2
    610308: { nxId: 1, scene: 53124, doing: 5, item: 51008, music: "", sound: "", txt: "插图" },//灵魂图2 

    610309: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……画得这么难看。" },
    610310: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "你的目光扫过旁边的桌子，上面有\n一封信，是给你的。" },

    //程昱川信
    610311: { nxId: 1, scene: 53124, doing: 5, item: 51006, music: "", sound: "", txt: "插图" },

    610312: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "林晓璐：不知你为何不告而别，空\n留我惆怅独处。也许你有自己的考\n量，我已无处自诉。" },
    610313: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "我马上要前往美国处理公司要事，\n不知道再见何年何夕。" },
    610314: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "虽然只有短短的几天，但是你给我\n留下了最美好的回忆。\n                             程昱川" },

    610315: { nxId: 1, scene: 53121, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（现在还弄这些，又何必呢？）" },
    610316: { nxId: 1, scene: 53121, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（也许你的确是习惯了万花丛中过……）" },
    610317: { nxId: 1, scene: 53121, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（但我永不接受，\n   成为你袖口旁的残叶。）" },
    610318: { nxId: 1, scene: 53121, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（就让这几天的快乐时光，\n   成为我自己的记忆吧。）" },

    610319: { nxId: 1, scene: 53124, doing: 6, item: 66102, music: "", sound: "", txt: "CG动画" },//飞机换手

    610320: { nxId: -1, scene: 53124, doing: 13, item: 11616, music: "", sound: "", txt: "独白" },











































































}

export class CfgChapter6_1 {
    public chapters: any = chapterObj;
    public endChatuList: string[] = ["bg_1_1#浦东机场", "bg_1_2#老地方", "bg_1_3#检票口", "bg_1_4#哭泣角落"];
}