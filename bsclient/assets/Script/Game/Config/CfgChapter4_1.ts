/** 操作ID,下一步操作ID,场景ID,操作类型,具体操作ID,描述 */
/** 操作类型: -1.无 0.背景移动 1.旁白 2.对话 3.人物介绍 4.分支选择 5.插图 6.CG动画 7.好感度 8.衣服选择 9.电话微信 10.回忆 11.彩蛋*/

let chapterObj = {
    410001: { nxId: 410777, scene: 41101, doing: 0, item: 0, music: "gutingwei", sound: "", txt: "背景初始化", notopen: 1 },
    410777: { nxId: 410002, scene: 41101, doing: 12, item: 124101, music: "", sound: "", txt: "地点介绍" , notopen: 1},
    410002: { nxId: 1, scene: 41104, doing: 1, item: 0, music: "", sound: "", txt: "你试了试浴缸中的水温，吹散手里\n白色绵密的泡泡，空气里弥漫着精\n油散发出的芳香。" , notopen: 1},
    410003: { nxId: 1, scene: 41104, doing: 2, item: 211024, music: "", sound: "", txt: "[我]嗯，一天结束，能洗个泡泡浴，\n真是最高的享受啊！" , notopen: 1},
    410004: { nxId: 1, scene: 41104, doing: 1, item: 0, music: "", sound: "", txt: "你放下浴巾，正要进入水气氤氲的\n泡泡浴中，隐约听见走廊外有人大\n步走动和急促说话的声音。" , notopen: 1},
    410005: { nxId: 1, scene: 41104, doing: 1, item: 0, music: "", sound: "breakdoor", txt: "突然，一阵急促暴躁的敲门声传来\n随即你听到大门被撞开的声音。", notopen: 1 },
    410006: { nxId: 1, scene: 41104, doing: 1, item: 0, music: "", sound: "", txt: "忽如其来的变故，让你一惊，你下\n意识的抓起浴巾裹在身上。" , notopen: 1},
    410007: { nxId: 1, scene: 41104, doing: 2, item: 211023, music: "", sound: "", txt: "[我]啊？什么情况？！", notopen: 1 },
    410008: { nxId: 1, scene: 41104, doing: 1, item: 0, music: "", sound: "", txt: "这时门外传来了程昱川的声音：\n是我，我进来啦！", notopen: 1 },

    410009: { nxId: 1, scene: 41104, doing: 4, item: 44101, music: "", sound: "", txt: "分支选择", notopen: 1 },
    //A //B //C
    410010: { nxId: 1, scene: 41104, doing: 2, item: 217024, music: "", sound: "", txt: "[程昱川]现在不是说这个的时候！" , notopen: 1},
    410011: { nxId: 1, scene: 41104, doing: 1, item: 0, music: "", sound: "", txt: "说话间，程昱川已经打开门进入浴\n室，站在了你面前。" , notopen: 1},

    410012: { nxId: 1, scene: 41104, doing: 4, item: 44102, music: "", sound: "", txt: "分支选择", notopen: 1 },
    //A 
    410013: { nxId: 1, scene: 41104, doing: 1, item: 0, music: "", sound: "", txt: "程昱川半裸着上身冲了进来。他的\n胸膛和头发上还滴水，像是刚从浴\n室跑出来的。" , notopen: 1},
    410014: { nxId: 1, scene: 41104, doing: 2, item: 217024, music: "", sound: "", txt: "[程昱川]赶紧走啊！", notopen: 1 },
    410015: { nxId: 1, scene: 41104, doing: 2, item: 211022, music: "", sound: "", txt: "[我]神经病！臭流氓！出去！" , notopen: 1},
    410016: { nxId: 1, scene: 41104, doing: 2, item: 217024, music: "Sub", sound: "", txt: "[程昱川]冷静听我说：现在酒店着火了，不\n知道有多严重，赶紧逃命！", notopen: 1 },
    410017: { nxId: 1, scene: 41104, doing: 2, item: 211023, music: "", sound: "", txt: "[我]啊？" , notopen: 1},
    410018: { nxId: 1, scene: 41104, doing: 1, item: 0, music: "", sound: "", txt: "说罢程昱川拉着你的手就往外走。\n走了没两步，你甩开了他的手。" , notopen: 1},
    410019: { nxId: 1, scene: 41104, doing: 2, item: 211023, music: "", sound: "", txt: "[我]穿浴巾出门？太丢人了，不能等我\n换好衣服再走吗？", notopen: 1 },
    410020: { nxId: 1, scene: 41104, doing: 2, item: 217024, music: "", sound: "", txt: "[程昱川]要脸还是要命？" , notopen: 1},
    410021: { nxId: 1, scene: 41104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]要命……", notopen: 1 },
    410022: { nxId: 1, scene: 41104, doing: 1, item: 0, music: "", sound: "", txt: "你可怜巴巴的小声说，\n这时你突然注意到……" , notopen: 1},
    410023: { nxId: 1, scene: 41104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]（他竟然穿小叮当内裤？！）\n   你的短裤……" , notopen: 1},
    410024: { nxId: 1, scene: 41104, doing: 2, item: 217024, music: "", sound: "", txt: "[程昱川]这是问这种问题的时候吗？", notopen: 1 },
    410025: { nxId: 1, scene: 41104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]只是好奇……", notopen: 1 },
    410026: { nxId: 420777, scene: 41104, doing: 1, item: 0, music: "", sound: "", txt: "听到这话，程昱川一脸无奈，\n一把拉起你的手出了浴室。" , notopen: 1},

    //B
    410027: { nxId: 1, scene: 41104, doing: 1, item: 0, music: "", sound: "", txt: "你慵懒地看着程昱川，他半裸着上\n身冲了进来。他的胸膛和头发上还\n滴水，像是刚从浴室跑出来的。 " , notopen: 1},
    410028: { nxId: 1, scene: 41104, doing: 2, item: 217024, music: "Sub", sound: "", txt: "[程昱川]冷静听我说：现在酒店着火了，\n等等，你那眼神是几个意思？", notopen: 1 },
    410029: { nxId: 1, scene: 41104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]没，没什么。怎么会突然着火了？", notopen: 1 },
    410030: { nxId: 1, scene: 41104, doing: 2, item: 217024, music: "", sound: "", txt: "[程昱川]我也不知道，\n但我们必须马上离开这里！" , notopen: 1},
    410031: { nxId: 1, scene: 41104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]我们可以一直躲在浴缸里吗？", notopen: 1 },
    410032: { nxId: 1, scene: 41104, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]你认真的？这个浴缸到时候怕是要\n跟火锅一样烫……" , notopen: 1},
    410033: { nxId: 1, scene: 41104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]……我马上出来……嗯，你站这是\n要看我换衣服吗？" , notopen: 1},
    410034: { nxId: 1, scene: 41104, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]如果不是今天这个情况……\n我很乐意啊。", notopen: 1 },
    410035: { nxId: 1, scene: 41104, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]再不走，这恐怕就是我们这辈子最\n后一次对话了！" , notopen: 1},
    410036: { nxId: 1, scene: 41104, doing: 1, item: 0, music: "", sound: "", txt: "说罢程昱川拉着你的手就往外走。\n你突然注意到……" , notopen: 1},
    410037: { nxId: 1, scene: 41104, doing: 2, item: 211024, music: "", sound: "", txt: "[我]（他竟然穿小叮当内裤？！）\n   哈哈哈哈，你的裤子是哆啦A梦？", notopen: 1 },
    410038: { nxId: 1, scene: 41104, doing: 2, item: 217024, music: "", sound: "", txt: "[程昱川]我说你这个女人，\n现在是说这个的时候吗？", notopen: 1 },
    410039: { nxId: 420777, scene: 41104, doing: 1, item: 0, music: "", sound: "", txt: "程昱川哭笑不得的回头看了看你，\n默默拉起你的手出了浴室。", notopen: 1 },


    //酒店房间夜
    420777: { nxId: 1, scene: 61301, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化", notopen: 1 },
    420778: { nxId: 410041, scene: 61304, doing: 1, item: 0, music: "", sound: "fire", txt: "刚打开房门，外面走廊上已经满是\n浓烟，刺鼻的塑料焦糊味四处弥漫\n程昱川一把甩上了门。" , notopen: 1},

    410041: { nxId: 1, scene: 61304, doing: 2, item: 217024, music: "", sound: "", txt: "[程昱川]什么都看不清楚，太危险了。\n这样冲出去跟送死没区别。" , notopen: 1},

    410042: { nxId: 1, scene: 61304, doing: 4, item: 44103, music: "", sound: "", txt: "分支选择" , notopen: 1},
    //A 
    410043: { nxId: 410048, scene: 61304, doing: 2, item: 217024, music: "", sound: "", txt: "[程昱川]说什么蠢话，\n有我在不会让你出事的！" , notopen: 1},
    //B
    410044: { nxId: 410048, scene: 61304, doing: 2, item: 217024, music: "", sound: "", txt: "[程昱川]无论如何我不会让你出事的。\n我以我的生命保证。" , notopen: 1},
    //C
    410045: { nxId: 1, scene: 61304, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]说的对，\n人在危险的时候最容易失去理智。", notopen: 1 },
    410046: { nxId: 1, scene: 61304, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]冷静点，我们还有机会。", notopen: 1 },
    //程1
    410047: { nxId: 1, scene: 61304, doing: 7, item: 71005, music: "", sound: "", txt: "好感度" , notopen: 1},

    410048: { nxId: 1, scene: 61304, doing: 2, item: 211023, music: "Sub", sound: "", txt: "[我]咳咳，烟进来了。" , notopen: 1},
    410049: { nxId: 1, scene: 61304, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]把床单系在栏杆上，我们爬下去。" , notopen: 1},
    410050: { nxId: 1, scene: 61304, doing: 1, item: 0, music: "", sound: "", txt: "程昱川走到你的床前，\n你赶紧去收起床上的内衣。" , notopen: 1},
    410051: { nxId: 1, scene: 61304, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]你还有心思顾这些？", notopen: 1 },
    410052: { nxId: 1, scene: 61304, doing: 2, item: 211021, music: "", sound: "", txt: "[我]本能反应……", notopen: 1 },
    410053: { nxId: 1, scene: 61304, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]快过来！" , notopen: 1},
    //此处有震屏
    410054: { nxId: 1, scene: 61304, doing: 1, item: 0, music: "", sound: "down", txt: "一股热浪袭来，旁边的衣帽架倒下\n来，程昱川一把把你拉到怀里，自\n己挡住了滚烫的衣帽架。", effect: ["shockscreen"] , notopen: 1},
    410055: { nxId: 1, scene: 61304, doing: 2, item: 211023, music: "", sound: "", txt: "[我]程昱川！你没事吧？" , notopen: 1},
    410056: { nxId: 1, scene: 61304, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]没事，快点去阳台！", notopen: 1 },
    410057: { nxId: 1, scene: 61304, doing: 1, item: 0, music: "", sound: "", txt: "你走到阳台边往下看，\n床单在风中颤颤巍巍地摇晃。" , notopen: 1},
    410058: { nxId: 1, scene: 61304, doing: 2, item: 211023, music: "", sound: "", txt: "[我]翻下去好像很危险，\n不然还是等消防员吧……" , notopen: 1},
    410059: { nxId: 1, scene: 61304, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]消防员等到的可能是我们的遗体。", notopen: 1 },
    410060: { nxId: 1, scene: 61304, doing: 1, item: 0, music: "", sound: "fire", txt: "你回头看，门缝里一股股的黑烟就\n往房间里钻，把你逼退。" , notopen: 1},
    410061: { nxId: 1, scene: 61304, doing: 2, item: 211023, music: "", sound: "", txt: "[我]怎么办啊现在……", notopen: 1 },
    410062: { nxId: 1, scene: 61304, doing: 2, item: 217024, music: "", sound: "", txt: "[程昱川]不要犹豫了！赶紧下去！" , notopen: 1},
    410063: { nxId: 1, scene: 61304, doing: 2, item: 211023, music: "", sound: "", txt: "[我]不行，我们一起！", notopen: 1 },
    410064: { nxId: 1, scene: 61304, doing: 2, item: 217024, music: "", sound: "", txt: "[程昱川]再犹豫，我们都要被烧死在这里了！", notopen: 1 },
    410065: { nxId: 1, scene: 61304, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]床单承受不住我们两个人的重量，\n听话，先下去！", notopen: 1 },

    410066: { nxId: 1, scene: 61304, doing: 4, item: 44104, music: "", sound: "", txt: "分支选择", notopen: 1 },
    //A 
    410067: { nxId: 1, scene: 61304, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]我先下去，在下面接你。" , notopen: 1},
    410068: { nxId: 1, scene: 61304, doing: 2, item: 211023, music: "", sound: "", txt: "[我]你小心啊……", notopen: 1 },
    410069: { nxId: 1, scene: 61304, doing: 1, item: 0, music: "", sound: "", txt: "程昱川翻过栏杆，顺着床单往下滑，\n整个人被吊在空中晃晃悠悠的。" , notopen: 1},//风吹屁屁凉
    410070: { nxId: 1, scene: 61304, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]对了，有件事跟你说……", notopen: 1 },
    410071: { nxId: 1, scene: 61304, doing: 2, item: 211021, music: "", sound: "", txt: "[我]都什么时候了……", notopen: 1 },
    410072: { nxId: 1, scene: 61304, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]你那套红色的内衣挺不错的。" , notopen: 1},
    410073: { nxId: 1, scene: 61304, doing: 2, item: 211026, music: "", sound: "", txt: "[我]……" , notopen: 1},
    410074: { nxId: 1, scene: 61304, doing: 1, item: 0, music: "", sound: "", txt: "程昱川滑到二楼，抬头对你一笑。", notopen: 1 },
    410075: { nxId: 1, scene: 61304, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]别怕，你看很容易的。" , notopen: 1},
    410076: { nxId: 1, scene: 61304, doing: 1, item: 0, music: "", sound: "", txt: "程昱川把床单在二楼的栏杆上又系\n了一道。", notopen: 1 },
    410077: { nxId: 1, scene: 61304, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]不要怕，来我这里。" , notopen: 1},
    410078: { nxId: 1, scene: 61304, doing: 1, item: 0, music: "", sound: "", txt: "背后的温度越来越高，你深吸一口\n气，翻过栏杆小心翼翼往下探。" , notopen: 1},
    410079: { nxId: 1, scene: 61304, doing: 1, item: 0, music: "", sound: "", txt: "刚抓住床单，失重感就抓住了你。\n你不敢往下看，闭着眼睛，机械地\n往下移动。", notopen: 1 },
    410080: { nxId: 1, scene: 61304, doing: 1, item: 0, music: "", sound: "", txt: "当你快要接近地面时，\n床单却已经到了尽头。", notopen: 1 },
    410081: { nxId: 1, scene: 61304, doing: 2, item: 211023, music: "", sound: "", txt: "[我]程昱川，床单不够长了，怎么办。" , notopen: 1},
    410082: { nxId: 1, scene: 61304, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]没时间了，跳下来！", notopen: 1 },
    410083: { nxId: 1, scene: 61304, doing: 1, item: 0, music: "", sound: "", txt: "你看着地面，只觉得眩晕。程昱川\n在下面伸手，对你露出微笑。", notopen: 1 },
    410084: { nxId: 1, scene: 61304, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]不用怕，\n只有一点高度了，我接得住你。", notopen: 1 },
    410085: { nxId: 1, scene: 61304, doing: 2, item: 211023, music: "", sound: "", txt: "[我]你确定？那我跳了！", notopen: 1 },
    410086: { nxId: 1, scene: 61304, doing: 1, item: 0, music: "", sound: "", txt: "你闭着眼睛，松开抓住床单的手。\n一双宽厚温暖的手接住了你，你被\n拉进了一个宽阔的胸膛。" , notopen: 1},
    410087: { nxId: 1, scene: 61304, doing: 1, item: 0, music: "", sound: "", txt: "一番天旋地转，你睁开眼，发现程\n昱川被你压在身下，充当了人肉坐\n垫。", notopen: 1 },
    410088: { nxId: 1, scene: 61304, doing: 2, item: 211023, music: "", sound: "", txt: "[我]程昱川，你没事吧？", notopen: 1 },
    410089: { nxId: 1, scene: 61304, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]没事……\n都怪这条浴巾太重了。", notopen: 1 },
    410090: { nxId: 1, scene: 61304, doing: 2, item: 211022, music: "", sound: "", txt: "[我]程昱川！" , notopen: 1},
    410091: { nxId: 1, scene: 61304, doing: 2, item: 217022, music: "", sound: "", txt: "[程昱川]现在没事了，真的没事了……", notopen: 1 },
    410092: { nxId: 410110, scene: 61304, doing: 1, item: 0, music: "", sound: "", txt: "你和程昱川都笑了起来。" , notopen: 1},

    //B
    410093: { nxId: 1, scene: 61304, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]记住不要往下看" , notopen: 1},
    410094: { nxId: 1, scene: 61304, doing: 2, item: 211021, music: "", sound: "", txt: "[我]你不要说啊，越说我越忍不住……" , notopen: 1},
    410095: { nxId: 1, scene: 61304, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]有句话我觉得现在不说，\n可能就没机会了……", notopen: 1 },
    410096: { nxId: 1, scene: 61304, doing: 2, item: 211021, music: "", sound: "", txt: "[我]什么？", notopen: 1 },
    410097: { nxId: 1, scene: 61304, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]红色的内衣挺不错的。", notopen: 1 },
    410098: { nxId: 1, scene: 61304, doing: 2, item: 211022, music: "", sound: "", txt: "[我]你这个人！什么时候了还耍流氓！" , notopen: 1},
    410099: { nxId: 1, scene: 61304, doing: 2, item: 211022, music: "", sound: "", txt: "[我]哈哈，下去的时候抓紧啊。", notopen: 1 },
    410100: { nxId: 1, scene: 61304, doing: 1, item: 0, music: "", sound: "", txt: "你紧紧地抓住床单向下探，小风吹\n过，床单细微的晃动被无限放大，\n你的腿在发软，整个人都在颤抖。" , notopen: 1},
    410101: { nxId: 1, scene: 61304, doing: 1, item: 0, music: "", sound: "", txt: "抬起头，你发现程昱川一脸关切地\n看着你，他皱着眉头，眼神里写满\n了担忧。", notopen: 1 },
    410102: { nxId: 1, scene: 61304, doing: 2, item: 211021, music: "", sound: "", txt: "[我]林晓璐，不能怕啊，\n程昱川还看着呢。" , notopen: 1},
    410103: { nxId: 1, scene: 61304, doing: 1, item: 0, music: "", sound: "", txt: "你闭着眼睛，慢慢地下移，等到你\n踩上坚硬的地面，你讶异的睁开眼。", notopen: 1 },
    410104: { nxId: 1, scene: 61304, doing: 2, item: 211024, music: "", sound: "", txt: "[我]程昱川，我做到了！\n我真是太厉害了，哈哈哈。" , notopen: 1},
    410105: { nxId: 1, scene: 61304, doing: 1, item: 0, music: "", sound: "fire", txt: "正当你激动不已的时候，楼上的火\n势已经越来越大，烈火夹杂着浓烟\n滚滚而出。", notopen: 1 },
    410106: { nxId: 1, scene: 61304, doing: 2, item: 211023, music: "", sound: "", txt: "[我]程昱川，你快下来！快！" , notopen: 1},
    410107: { nxId: 1, scene: 61304, doing: 1, item: 0, music: "", sound: "", txt: "程昱川矫健地抓住床单，顺着床单\n下滑，转瞬之间来到你的面前。" , notopen: 1},
    410108: { nxId: 1, scene: 61304, doing: 1, item: 0, music: "", sound: "", txt: "刚经历过死后劫生的你心还是扑通\n扑通地跳。或许只有危险擦肩而过\n的时候，人才会意识到生命宝贵。" , notopen: 1},
    410109: { nxId: 1, scene: 61304, doing: 1, item: 0, music: "", sound: "", txt: "你感到很幸运，\n有这个男人在身边……", notopen: 1 },

    //酒店大门（夜）
    410110: { nxId: 410112, scene: 42101, doing: 0, item: 0, music: "haha", sound: "", txt: "背景初始化", notopen: 1 },
    
    410111: { nxId: 1, scene: 42102, doing: 0, item: 0, music: "", sound: "", txt: "背景向左移动" },//废

    410112: { nxId: 1, scene: 42104, doing: 1, item: 0, music: "", sound: "", txt: "逃出来的住客们围在酒店旁，衣不\n蔽体的不在少数，你和程昱川的穿\n着也就显得没什么奇怪。", notopen: 1 },
    410113: { nxId: 1, scene: 42104, doing: 1, item: 0, music: "", sound: "", txt: "过不多久，消防车就赶到了，消防\n员们把逃出来的人们带到了一旁。", notopen: 1 },
    410114: { nxId: 1, scene: 42104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]程昱川，刚才真是谢谢你了。" , notopen: 1},
    410115: { nxId: 1, scene: 42104, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]没什么，难道我还能扔下你不管？", notopen: 1 },
    410116: { nxId: 1, scene: 42104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]总之就是感谢你了。", notopen: 1 },
    410117: { nxId: 1, scene: 42104, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]那你是不是应该表示表示？" , notopen: 1},

    410118: { nxId: 1, scene: 42104, doing: 4, item: 44105, music: "", sound: "", txt: "分支选择", notopen: 1 },
    //A 
    410119: { nxId: 1, scene: 42104, doing: 2, item: 217022, music: "", sound: "", txt: "[程昱川]喏，抱一下。", notopen: 1 },
    410120: { nxId: 1, scene: 42104, doing: 2, item: 211022, music: "", sound: "", txt: "[我]你想得美！", notopen: 1 },
    410121: { nxId: 1, scene: 42104, doing: 1, item: 0, music: "", sound: "", txt: "程昱川上前一步，就抱住了你。温\n暖的胸膛贴着你，就像一堵围墙，\n把周围嘈杂的声音隔离在外面。", notopen: 1 },
    410122: { nxId: 1, scene: 42104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]其实刚刚有一点觉得，\n自己会死在这里……" , notopen: 1},
    410123: { nxId: 410132, scene: 42104, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]放心，有我在不会发生这种事的！" , notopen: 1},
    //B
    410124: { nxId: 1, scene: 42104, doing: 1, item: 0, music: "", sound: "", txt: "你轻轻地亲在了程昱川的额头上。", notopen: 1 },
    410125: { nxId: 1, scene: 42104, doing: 2, item: 217025, music: "", sound: "", txt: "[程昱川]……", notopen: 1 },
    410126: { nxId: 1, scene: 42104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]怎么了？" , notopen: 1},
    410127: { nxId: 1, scene: 42104, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]没怎么。有点突然。" , notopen: 1},
    //程3
    410128: { nxId: 410132, scene: 42104, doing: 7, item: 71007, music: "", sound: "", txt: "好感度", notopen: 1 },
    //C
    410129: { nxId: 1, scene: 42104, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]我什么都还没说哪……" , notopen: 1},
    410130: { nxId: 1, scene: 42104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]可是我已经猜到了。哼！" , notopen: 1},
    410131: { nxId: 1, scene: 42104, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]你这是以小人之心度君子之腹。" , notopen: 1},

    410132: { nxId: 1, scene: 42104, doing: 1, item: 0, music: "", sound: "", txt: "你突然感觉胸口有点冷，发现浴巾\n松开了一点，赶紧系紧了。" , notopen: 1},
    410133: { nxId: 1, scene: 42104, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]别担心，往好处想，\n大家都不认识你。" , notopen: 1},
    410134: { nxId: 1, scene: 42104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]多亏了你的推荐，\n我现在才这么狼狈。" , notopen: 1},
    410135: { nxId: 1, scene: 42104, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]怎么怪我了……" , notopen: 1},
    410136: { nxId: 1, scene: 42104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]是你介绍这家酒店的。", notopen: 1 },
    410137: { nxId: 1, scene: 42104, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]物美价廉，能看到高迪的建筑，还\n能吹到海风，完全符合你的要求啊。" , notopen: 1},
    410138: { nxId: 1, scene: 42104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]也许以后我应该加一条：\n“不用半夜被火烧死。”", notopen: 1 },
    410139: { nxId: 1, scene: 42104, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]其实这个火势也没有那么夸张。" , notopen: 1},
    410140: { nxId: 1, scene: 42104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]还有，\n“洗澡的时候不会有人闯进来。”" , notopen: 1},
    410141: { nxId: 1, scene: 42104, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]如果不是我闯进去，你现在就危险\n了，所以这两个要求是冲突的。" , notopen: 1},
    410142: { nxId: 1, scene: 42104, doing: 2, item: 211022, music: "", sound: "", txt: "[我]总之不准到处跟人说这个事。" , notopen: 1},
    410143: { nxId: 1, scene: 42104, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]哪件事？" , notopen: 1},
    410144: { nxId: 1, scene: 42104, doing: 2, item: 211022, music: "", sound: "", txt: "[我]一个哆啦A梦救了我的事。", notopen: 1 },
    410145: { nxId: 1, scene: 42104, doing: 2, item: 217025, music: "", sound: "", txt: "[程昱川]……" , notopen: 1},
    410146: { nxId: 1, scene: 42104, doing: 1, item: 0, music: "", sound: "", txt: "这时，一个穿着酒店员工制服的人\n向你们走来。" , notopen: 1},
    //缺酒店员工 酒保替换 
    410147: { nxId: 1, scene: 42104, doing: 2, item: 211501, music: "", sound: "", txt: "[酒店员工]两位，请问你们是305和304房\n的客人吗。", notopen: 1},
    410148: { nxId: 1, scene: 42104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]是的。" , notopen: 1},
    410149: { nxId: 1, scene: 42104, doing: 2, item: 211501, music: "", sound: "", txt: "[酒店员工]非常抱歉让两位遇到这样的事情……", notopen: 1 },
    410150: { nxId: 1, scene: 42104, doing: 2, item: 211501, music: "", sound: "", txt: "[酒店员工]酒店已经为你们安排了新的住处，\n请随我来。", notopen: 1 },
    410151: { nxId: 1, scene: 42104, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]我们俩的房间还在一起吗？", notopen: 1 },
    410152: { nxId: 1, scene: 42104, doing: 2, item: 211022, music: "", sound: "", txt: "[我]你想干嘛？", notopen: 1 },
    410153: { nxId: 1, scene: 42104, doing: 2, item: 211501, music: "", sound: "", txt: "[酒店员工]呃……先生，现在房间很紧张，\n给你们的是一个套房。", notopen: 1 },
    410154: { nxId: 1, scene: 42104, doing: 2, item: 217025, music: "", sound: "", txt: "[程昱川]……" , notopen: 1},
    410155: { nxId: 1, scene: 42104, doing: 2, item: 211026, music: "", sound: "", txt: "[我]……" , notopen: 1},
    410156: { nxId: 1, scene: 42104, doing: 2, item: 211501, music: "", sound: "", txt: "[酒店员工]你们不是一起的吗？", notopen: 1 },

    410157: { nxId: 1, scene: 42104, doing: 4, item: 44106, music: "", sound: "", txt: "分支选择" , notopen: 1},
    //A 
    //程2
    410158: { nxId: 1, scene: 42104, doing: 7, item: 71006, music: "", sound: "", txt: "好感度", notopen: 1 },
    410159: { nxId: 1, scene: 42104, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]林晓璐……" , notopen: 1},
    410160: { nxId: 1, scene: 42104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]临时情况，没关系了。你睡地板！" , notopen: 1},
    410161: { nxId: 1, scene: 42104, doing: 2, item: 217022, music: "", sound: "", txt: "[程昱川]没问题。", notopen: 1 },
    410162: { nxId: 1, scene: 42104, doing: 2, item: 211024, music: "", sound: "", txt: "[我]不对，我突然想到，哆啦A梦应该\n睡壁橱啊，哈哈哈。" , notopen: 1},
    410163: { nxId: 410170, scene: 42104, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]……你这个女人。" , notopen: 1},
    //B
    410164: { nxId: 1, scene: 42104, doing: 2, item: 217025, music: "", sound: "", txt: "[程昱川]额……", notopen: 1 },
    410165: { nxId: 1, scene: 42104, doing: 2, item: 211501, music: "", sound: "", txt: "[酒店员工]可是现在突发情况，\n没有其他房间了。", notopen: 1 },
    410166: { nxId: 1, scene: 42104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]程昱川！都是你害的！", notopen: 1 },
    410167: { nxId: 1, scene: 42104, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]我哪知道有火灾啊。" , notopen: 1},
    410168: { nxId: 1, scene: 42104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]可恶，这大半夜的，\n也没法去其他酒店……" , notopen: 1},
    410169: { nxId: 1, scene: 42104, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]既来之则安之吧。" , notopen: 1},

    410170: { nxId: 1, scene: 42104, doing: 2, item: 211501, music: "", sound: "", txt: "[酒店员工]先生？您受伤了？" , notopen: 1},
    410171: { nxId: 1, scene: 42104, doing: 1, item: 0, music: "", sound: "", txt: "你看向程昱川的后背，发现他的背\n后有一道巨大的淤青，覆盖着擦伤\n灼伤和灰尘。" , notopen: 1},
    410172: { nxId: 1, scene: 42104, doing: 2, item: 211023, music: "", sound: "", txt: "[我]啊？是刚才帮我挡住的衣帽架……", notopen: 1 },
    410173: { nxId: 1, scene: 42104, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]没事，不怎么疼。", notopen: 1 },
    410174: { nxId: 1, scene: 42104, doing: 2, item: 211023, music: "", sound: "", txt: "[我]看上去很严重啊！" , notopen: 1},
    410175: { nxId: 1, scene: 42104, doing: 2, item: 217022, music: "", sound: "", txt: "[程昱川]那你帮我上药。" , notopen: 1},

    410176: { nxId: 1, scene: 42104, doing: 4, item: 44107, music: "", sound: "", txt: "分支选择", notopen: 1 },
    //A 
    410177: { nxId: 1, scene: 42104, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]我累了不想去。", notopen: 1 },
    410178: { nxId: 1, scene: 42104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]万一感染了就不好了，\n换身衣服，我送你去医院。", notopen: 1 },
    410179: { nxId: 1, scene: 42104, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]不去！" , notopen: 1},
    410180: { nxId: 1, scene: 42104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]你这时候就不要胡闹了。" , notopen: 1},
    410181: { nxId: 1, scene: 42104, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]不用大惊小怪，我的身体我清楚，\n拿个急救包过来就好。", notopen: 1 },
    410182: { nxId: 1, scene: 42104, doing: 2, item: 211022, music: "", sound: "", txt: "[我]不行！你给我老实去医院！", notopen: 1 },
    410183: { nxId: 1, scene: 42104, doing: 2, item: 211501, music: "", sound: "", txt: "[酒店员工]没错，先生，有一些受伤的房客要\n去医院，顺路检查一下吧。" , notopen: 1},
    410184: { nxId: 1, scene: 42104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]就这么定了。", notopen: 1 },
    410185: { nxId: 1, scene: 42104, doing: 2, item: 217025, music: "", sound: "", txt: "[程昱川]额……" , notopen: 1},
    410186: { nxId: 1, scene: 42104, doing: 2, item: 211501, music: "", sound: "", txt: "[酒店员工]不过您不能上救护车，小姐。" , notopen: 1},
    410187: { nxId: 1, scene: 42104, doing: 2, item: 211026, music: "", sound: "", txt: "[我]……", notopen: 1 },
    410188: { nxId: 1, scene: 42104, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]她不去我也不去。", notopen: 1 },
    410189: { nxId: 1, scene: 42104, doing: 2, item: 211022, music: "", sound: "", txt: "[我]少啰嗦，上车吧你。\n不然天亮我就搬到别的酒店去。" , notopen: 1},
    410190: { nxId: 1, scene: 42104, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]好好好，听你的还不行吗？\n那你好好休息，明见！", notopen: 1 },
    410191: { nxId: 1, scene: 42104, doing: 1, item: 0, music: "", sound: "", txt: "看着这个不省心的家伙上了车，\n我才放心去了新的房间。" , notopen: 1},
    
    //新房间（夜）
    410192: { nxId: 1, scene: 41201, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" , notopen: 1},
    410193: { nxId: 410228, scene: 41204, doing: 1, item: 0, music: "", sound: "", txt: "经过这趟火灾，你又累又困。\n刚躺下，很快进入了梦乡。" , notopen: 1},
    
    //B
    410194: { nxId: 1, scene: 42104, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]虽然你笨手笨脚的，但是我的伤势\n也不严重，没问题。", notopen: 1 },
    410195: { nxId: 1, scene: 42104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]既然不严重，那你自己来？" , notopen: 1},
    410196: { nxId: 1, scene: 42104, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]……哎呀，好疼好疼，\n你房间在哪儿呢？" , notopen: 1},
    410197: { nxId: 1, scene: 42104, doing: 2, item: 211021, music: "", sound: "", txt: "[我]……戏精……" , notopen: 1},
    410198: { nxId: 1, scene: 42104, doing: 1, item: 0, music: "", sound: "", txt: "程昱川催着工作人员带路，你只能\n跟在他后面，进入新房间。", notopen: 1 },
    //新房间（夜）
    410199: { nxId: 1, scene: 41301, doing: 0, item: 0, music: "haha2", sound: "", txt: "背景初始化" , notopen: 1},
    410200: { nxId: 1, scene: 41304, doing: 1, item: 0, music: "", sound: "", txt: "你拿出药箱中的棉棒，\n开始为程昱川处理伤口。" , notopen: 1},
    410201: { nxId: 1, scene: 41304, doing: 1, item: 0, music: "", sound: "", txt: "消毒药水碰上红肿的伤口，程昱川\n瑟缩了一下，倒抽了一口气。", notopen: 1 },
    410202: { nxId: 1, scene: 41304, doing: 2, item: 211021, music: "", sound: "", txt: "[我]是不是很疼啊？", notopen: 1 },
    410203: { nxId: 1, scene: 41304, doing: 1, item: 0, music: "", sound: "", txt: "程昱川的声音故作轻松。" , notopen: 1},
    410204: { nxId: 1, scene: 41304, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]小意思。" , notopen: 1},
    410205: { nxId: 1, scene: 41304, doing: 2, item: 211021, music: "", sound: "", txt: "[我]你也就是嘴皮子厉害。" , notopen: 1},
    410206: { nxId: 1, scene: 41304, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]这点伤算什么，我以前在国外，\n受多大的伤都没哼过一声。", notopen: 1 },
    410207: { nxId: 1, scene: 41304, doing: 2, item: 211021, music: "", sound: "", txt: "[我]吹牛吧？" , notopen: 1},
    410208: { nxId: 1, scene: 41304, doing: 2, item: 217022, music: "", sound: "", txt: "[程昱川]哈哈，其实是因为在国外自己一个\n人。疼给谁看啊。", notopen: 1 },
    410209: { nxId: 1, scene: 41304, doing: 2, item: 211026, music: "", sound: "", txt: "[我]……（他说得轻松，\n但想必当时也很孤独吧。）", notopen: 1 },
    410210: { nxId: 1, scene: 41304, doing: 1, item: 0, music: "", sound: "", txt: "你的动作变得更轻柔了。程昱川也\n不再多话。你们静静地坐着擦完了\n药水。" , notopen: 1},
    //程2
    410211: { nxId: 1, scene: 41304, doing: 7, item: 71006, music: "", sound: "", txt: "好感度", notopen: 1 },
    410212: { nxId: 1, scene: 41304, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]你处理伤口的技术不错嘛，谢谢。", notopen: 1 },
    410213: { nxId: 1, scene: 41304, doing: 2, item: 211021, music: "", sound: "", txt: "[我]主要是病患比较配合。", notopen: 1 },
    410214: { nxId: 1, scene: 41304, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]那我们早点休息吧。我睡沙发。", notopen: 1 },

    410215: { nxId: 1, scene: 41304, doing: 4, item: 44108, music: "", sound: "", txt: "分支选择" , notopen: 1},
    //A 
    410216: { nxId: 1, scene: 41304, doing: 1, item: 0, music: "", sound: "", txt: "程昱川充耳不闻你的话，径直走向\n了沙发，铺好了毯子。" , notopen: 1},
    410217: { nxId: 1, scene: 41304, doing: 2, item: 211021, music: "", sound: "", txt: "[我]装什么硬汉……", notopen: 1 },
    410218: { nxId: 1, scene: 41304, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]只有一种情况下我会去床上睡。" , notopen: 1},
    410219: { nxId: 1, scene: 41304, doing: 2, item: 211021, music: "", sound: "", txt: "[我]好了，我知道了，晚安。" , notopen: 1},
    410220: { nxId: 1, scene: 41304, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]我还没说是什么情况呢。", notopen: 1},
    410221: { nxId: 1, scene: 41304, doing: 2, item: 211021, music: "", sound: "", txt: "[我]不用说。我知道。不可能。" , notopen: 1},
    410222: { nxId: 1, scene: 41304, doing: 2, item: 217025, music: "", sound: "", txt: "[程昱川]……", notopen: 1 },
    410223: { nxId: 1, scene: 41304, doing: 2, item: 211022, music: "", sound: "", txt: "[我]脑子里也不准想！", notopen: 1 },
    410224: { nxId: 410226, scene: 41304, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]这你也管！" , notopen: 1},
    //B
    410225: { nxId: 1, scene: 41304, doing: 2, item: 217023, music: "", sound: "", txt: "[程昱川]晚安！" , notopen: 1},

    //新房间（夜）
    410226: { nxId: 1, scene: 41201, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" , notopen: 1},
    410227: { nxId: 1, scene: 41204, doing: 1, item: 0, music: "", sound: "", txt: "经过半晚上的折腾，你又累又困。\n躺下不久，你就进入了梦乡。" , notopen: 1},

    //新房间（晨）
    410228: { nxId: 1, scene: 41401, doing: 0, item: 0, music: "t2", sound: "", txt: "背景初始化" , notopen: 1},
    410229: { nxId: 410231, scene: 41404, doing: 2, item: 211026, music: "", sound: "", txt: "[我]（呼，睡得好香）", notopen: 1 },
    410230: { nxId: 1, scene: 41404, doing: 1, item: 0, music: "", sound: "", txt: "你环顾房间，程昱川已经不见了。", notopen: 1 },
    410231: { nxId: 1, scene: 41404, doing: 2, item: 211021, music: "", sound: "", txt: "[我]程昱川怎么样了，嗯，反正一会就\n见到了。先去吃早饭吧。" , notopen: 1},

    410232: { nxId: 1, scene: 41404, doing: 8, item: 0, music: "huanzhuang", sound: "", txt: "换装界面" },

    //酒店餐厅
    410233: { nxId: 1, scene: 41501, doing: 0, item: 0, music: "haha", sound: "", txt: "背景初始化" },
    410234: { nxId: 1, scene: 41504, doing: 1, item: 0, music: "", sound: "", txt: "一进餐厅，\n你就看到博文朗向你你招手。" },
    410235: { nxId: 1, scene: 41504, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]林晓璐小姐，你好啊。" },
    410236: { nxId: 1, scene: 41504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]博先生，你怎么在这里？" },
    410237: { nxId: 1, scene: 41504, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我看到新闻，说酒店失火了。\n我担心你们的安危，就过来看看。" },
    410238: { nxId: 1, scene: 41504, doing: 2, item: 211004, music: "", sound: "", txt: "[我]谢谢你啊！" },
    410239: { nxId: 1, scene: 41504, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]那你有没有受伤？\n我看新闻里的场面很乱……" },
    410240: { nxId: 1, scene: 41504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没有，一点伤都没有。" },
    410241: { nxId: 1, scene: 41504, doing: 1, item: 0, music: "", sound: "", txt: "突然，程昱川从你的背后闪出，\n走到你的身边。" },
    410242: { nxId: 1, scene: 41504, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]原来是有约啊！" },
    410243: { nxId: 1, scene: 41504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]程昱川？你怎么神出鬼没的。" },
    410244: { nxId: 1, scene: 41504, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]不想影响你休息。" },
    410245: { nxId: 1, scene: 41504, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]二位昨晚在一起吗？\n看来两位关系进展得真快……" },
    410246: { nxId: 410999, scene: 41504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]昨晚他在火灾中救了我。" },
    //程2
    410999: { nxId: 410247, scene: 41504, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },
    410247: { nxId: 1, scene: 41504, doing: 2, item: 217032, music: "", sound: "", txt: "[程昱川]举手之劳……" },
    410248: { nxId: 1, scene: 41504, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]幸好有这位先生在。" },
    410249: { nxId: 1, scene: 41504, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]同样情景，相信你也会去救她的。" },
    410250: { nxId: 1, scene: 41504, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]当然。看到二位安全我就放心了。" },
    410251: { nxId: 1, scene: 41504, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]如果在巴塞罗那有什么需要的话，\n请随时找我。" },
    410252: { nxId: 1, scene: 41504, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]不打扰你们用餐了，再见。" },
    410253: { nxId: 1, scene: 41504, doing: 1, item: 0, music: "", sound: "", txt: "博文朗向你们道别，离开了餐厅。" },
    410254: { nxId: 1, scene: 41504, doing: 2, item: 217034, music: "", sound: "", txt: "[程昱川]终于走了……" },
    410255: { nxId: 1, scene: 41504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你在嘀咕什么？" },
    410256: { nxId: 1, scene: 41504, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]没什么。酒店的人来过了，昨晚的\n火情并不大，只烧掉了一间客房。" },
    410257: { nxId: 1, scene: 41504, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]我们的行李也都找回来了，\n或者说，大部分找回来了。" },
    410258: { nxId: 1, scene: 41504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]证件呢？" },
    410259: { nxId: 1, scene: 41504, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]都在。" },
    410260: { nxId: 1, scene: 41504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]还有别的吗？" },
    410261: { nxId: 1, scene: 41504, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]我找酒店单独要了一个房间，\n不用睡沙发了。" },

    410262: { nxId: 1, scene: 41504, doing: 4, item: 44109, music: "", sound: "", txt: "分支选择" },
    //A 
    410263: { nxId: 1, scene: 41504, doing: 2, item: 217032, music: "", sound: "", txt: "[程昱川]哈哈哈。如果我想要跟你在一起，\n房间也不能阻隔什么。" },
    410264: { nxId: 1, scene: 41504, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]不过我知道，你一定是在逗我。\n你这聪明的小狐狸。" },
    410265: { nxId: 1, scene: 41504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]其实……" },
    410266: { nxId: 410273, scene: 41504, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]先吃点东西吧，我都饿坏了。" },
    //B
    410267: { nxId: 1, scene: 41504, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]你真聪明。" },
    410268: { nxId: 1, scene: 41504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我太了解你了。" },
    410269: { nxId: 410273, scene: 41504, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]先吃点东西吧，我都饿坏了。" },
    //C
    410270: { nxId: 1, scene: 41504, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]看到你解脱的样子我也很开心。" },
    410271: { nxId: 1, scene: 41504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我也很感谢你啦。\n不过还是有点怪怪的不是吗。" },
    410272: { nxId: 1, scene: 41504, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]没关系。我有的是耐心呢。\n先吃点东西吧，我都饿坏了。" },

    410273: { nxId: 1, scene: 41504, doing: 1, item: 0, music: "", sound: "", txt: "吃完早餐，你询问程昱川今天的安\n排，他故作神秘的笑笑。" },
    410274: { nxId: 1, scene: 41504, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]跟我来就对了。" },

    //医院门口
    410275: { nxId: 1, scene: 41601, doing: 0, item: 0, music: "XS", sound: "", txt: "背景初始化" },
    410276: { nxId: 1, scene: 41604, doing: 1, item: 0, music: "", sound: "", txt: "你和程昱川站在圣十字和保罗医院\n的大门外。" },
    410277: { nxId: 1, scene: 41604, doing: 2, item: 211005, music: "", sound: "", txt: "[我]这里怎么看都不像是医院啊，\n太奢华了!" },
    410278: { nxId: 1, scene: 41604, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]这可是世界上最美丽的医院，\n联合国认证的世界文化遗产。" },
    410279: { nxId: 1, scene: 41604, doing: 2, item: 211004, music: "", sound: "", txt: "[我]环境很不错啊，在这里住院的话，\n感觉三五个月都不会烦。" },
    410280: { nxId: 1, scene: 41604, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]就是设计师的初衷，度假式住院。" },
    410281: { nxId: 1, scene: 41604, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]不过现在不行了，09年开始，\n这里就被政府保护起来了。" },
    410282: { nxId: 1, scene: 41604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]啊？为什么啊？" },
    410283: { nxId: 1, scene: 41604, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]旅游的都跑过来，\n病人哪里受得了……" },
    410284: { nxId: 1, scene: 41604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]也是喔……" },

    //医院回廊
    410285: { nxId: 1, scene: 41701, doing: 0, item: 0, music: "haha2", sound: "", txt: "背景初始化" },
    410286: { nxId: 1, scene: 41704, doing: 1, item: 0, music: "", sound: "", txt: "你和程昱川转入偏厅回廊，趁着阳\n光漫步，欣赏着墙上的雕像。" },
    410287: { nxId: 1, scene: 41704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这里好安静啊，\n呆在这里，人都变得平静了。" },
    410288: { nxId: 1, scene: 41704, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]以前这里治愈人的肉体，\n现在可以治疗人的灵魂。" },
    410289: { nxId: 1, scene: 41704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]以前就不治愈灵魂了？" },
    410290: { nxId: 1, scene: 41704, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]以前没那气氛，毕竟是医院。" },
    410291: { nxId: 1, scene: 41704, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]你会在别人生病的地方，\n和男朋友你侬我侬吗？" },
    410292: { nxId: 1, scene: 41704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你倒是想的很多嘛。" },
    410293: { nxId: 1, scene: 41704, doing: 1, item: 0, music: "", sound: "", txt: "程昱川突然一把拉住了你的肩膀。" },
    410294: { nxId: 1, scene: 41704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]干什么！" },
    410295: { nxId: 1, scene: 41704, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]嘘！" },
    410296: { nxId: 1, scene: 41704, doing: 1, item: 0, music: "", sound: "", txt: "寂静无人的回廊上，\n突然回响起一阵不规则的声音。" },
    410297: { nxId: 1, scene: 41704, doing: 2, item: 211003, music: "", sound: "", txt: "[我]妈呀，什么鬼啊。" },
    410298: { nxId: 1, scene: 41704, doing: 2, item: 217034, music: "", sound: "", txt: "[程昱川]听说这里以前有很多士兵惨死啊。" },
    410299: { nxId: 1, scene: 41704, doing: 1, item: 0, music: "", sound: "", txt: "你听着忽然感觉阴风阵阵。\n心里顿时发毛。" },
    410300: { nxId: 1, scene: 41704, doing: 2, item: 211003, music: "", sound: "", txt: "[我]啊！你闭嘴！别说了。" },
    410301: { nxId: 1, scene: 41704, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]不用怕，有我在呢！" },
    410302: { nxId: 1, scene: 41704, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你看我像是害怕的样子吗？" },
    410303: { nxId: 1, scene: 41704, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]好像确实不太像。" },
    410304: { nxId: 1, scene: 41704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]大白天的，有什么可怕的！" },
    410305: { nxId: 1, scene: 41704, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]但是我很害怕。" },
    410306: { nxId: 1, scene: 41704, doing: 1, item: 0, music: "", sound: "", txt: "程昱川淡定地和你换了个位置，\n抱着你的腰。" },

    410307: { nxId: 1, scene: 41704, doing: 4, item: 44110, music: "", sound: "", txt: "分支选择" },
    //A 
    410308: { nxId: 1, scene: 41704, doing: 2, item: 211002, music: "", sound: "", txt: "[我]我不会再上当了！" },
    410309: { nxId: 1, scene: 41704, doing: 1, item: 0, music: "", sound: "", txt: "你想推开程昱川，\n程昱川却牢牢地搂住你的腰。" },
    410310: { nxId: 410320, scene: 41704, doing: 2, item: 217034, music: "", sound: "", txt: "[程昱川]来了来了来了。" },
    //B
    //正常分支
    410311: { nxId: 1, scene: 41704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哼，放心吧，我保护你！" },
    410312: { nxId: 1, scene: 41704, doing: 1, item: 0, music: "", sound: "", txt: "你握住了程昱川的手，\n程昱川反握住你的手。" },
    //程2
    410313: { nxId: 410320, scene: 41704, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },
    //特殊分支
    410314: { nxId: 1, scene: 41704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哼，放心吧，我保护你！" },
    410315: { nxId: 1, scene: 41704, doing: 1, item: 0, music: "", sound: "", txt: "你握住了程昱川的手，\n程昱川反握住你的手。" },
    //程3
    410316: { nxId: 410320, scene: 41704, doing: 7, item: 71007, music: "", sound: "", txt: "好感度" },
    //C
    410317: { nxId: 1, scene: 41704, doing: 2, item: 211002, music: "", sound: "", txt: "[我]臭流氓，你又趁机占我便宜！" },
    410318: { nxId: 1, scene: 41704, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]可我害怕啊……" },
    410319: { nxId: 1, scene: 41704, doing: 2, item: 211002, music: "", sound: "", txt: "[我]信你有鬼！" },

    410320: { nxId: 1, scene: 41704, doing: 1, item: 0, music: "", sound: "", txt: "这时你听到了背后传来了一阵苍老\n但开朗的笑声。你推开程昱川，看\n到一位慈祥的大叔在对你招手。" },
    410321: { nxId: 1, scene: 41704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]他是在向我们招手呢。" },
    410322: { nxId: 1, scene: 41704, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]却之不恭。过去聊聊吧。" },

    //薰衣草花田
    410323: { nxId: 1, scene: 41801, doing: 0, item: 0, music: "bowenlang", sound: "", txt: "背景初始化" },
    410324: { nxId: 1, scene: 41804, doing: 1, item: 0, music: "", sound: "", txt: "在庭院的薰衣草花田旁，两位精神\n矍铄的老人正随着收音机中舒缓的\n音乐，慢慢舞动着。" },
    410325: { nxId: 1, scene: 41804, doing: 2, item: 211601, music: "", sound: "", txt: "[大叔]嘿，年轻人，过来一起跳舞吧！" },
    410326: { nxId: 1, scene: 41804, doing: 2, item: 211701, music: "", sound: "", txt: "[大妈]约会不能只有寂静的回廊，\n还得要鲜艳的花朵。" },
    410327: { nxId: 1, scene: 41804, doing: 1, item: 0, music: "", sound: "", txt: "大叔弯腰向大妈行了一个绅士礼。" },
    410328: { nxId: 1, scene: 41804, doing: 2, item: 211601, music: "", sound: "", txt: "[大叔]亲爱的，可以邀请你跳一支舞吗？" },
    410329: { nxId: 1, scene: 41804, doing: 2, item: 211701, music: "", sound: "", txt: "[大妈]上次腰闪了躺了2个月，\n还没躺够啊。" },
    410330: { nxId: 1, scene: 41804, doing: 2, item: 211601, music: "", sound: "", txt: "[大叔]那只是个意外……" },
    410331: { nxId: 1, scene: 41804, doing: 2, item: 211701, music: "", sound: "", txt: "[大妈]你还是省省吧，今天我很想和这位\n英俊年轻人共舞，可以吗，先生？" },
    410332: { nxId: 1, scene: 41804, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]我的荣幸。" },
    410333: { nxId: 1, scene: 41804, doing: 1, item: 0, music: "", sound: "", txt: "大妈和程昱川走到花田旁，程昱川\n微微弯下腰，迁就着老太太的身高。" },
    410334: { nxId: 1, scene: 41804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你们二位的感情真好！" },
    410335: { nxId: 1, scene: 41804, doing: 2, item: 211601, music: "", sound: "", txt: "[大叔]当然了，哈哈哈，艾玛是上帝赐予\n我最好的礼物！" },
    410336: { nxId: 1, scene: 41804, doing: 2, item: 211701, music: "", sound: "", txt: "[大妈]年轻人，你是上帝派来的吗？\n真是个帅气的小伙子！" },
    410337: { nxId: 1, scene: 41804, doing: 2, item: 211601, music: "", sound: "", txt: "[大叔]哼，女人，明明早上还说我是天下\n最帅的人！" },
    410338: { nxId: 1, scene: 41804, doing: 2, item: 211015, music: "", sound: "", txt: "[我]……" },
    410339: { nxId: 1, scene: 41804, doing: 2, item: 211601, music: "", sound: "", txt: "[大叔]你为什么不去和你的爱人跳舞？" },

    410340: { nxId: 1, scene: 41804, doing: 4, item: 44111, music: "", sound: "", txt: "分支选择" },
    //A 
    410341: { nxId: 1, scene: 41804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]什么？我想您误会了。\n我们只是结伴出来玩。" },
    410342: { nxId: 1, scene: 41804, doing: 2, item: 211601, music: "", sound: "", txt: "[大叔]嗯……" },
    410343: { nxId: 1, scene: 41804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]您想说什么？" },
    410344: { nxId: 1, scene: 41804, doing: 2, item: 211601, music: "", sound: "", txt: "[大叔]年轻人青春洋溢，骄傲在你们的血\n液中奔腾，还不知道诚实的可贵。" },
    410345: { nxId: 1, scene: 41804, doing: 1, item: 0, music: "", sound: "", txt: "你看着大叔，\n若有所思地咀嚼着他的这番话。" },
    410346: { nxId: 410353, scene: 41804, doing: 2, item: 211601, music: "", sound: "", txt: "[大叔]不过他们也跳得太久了！" },
    //B
    410347: { nxId: 1, scene: 41804, doing: 1, item: 0, music: "", sound: "", txt: "大叔固执地摇摇头。" },
    410348: { nxId: 1, scene: 41804, doing: 2, item: 211601, music: "", sound: "", txt: "[大叔]别误会，美丽的姑娘。你有着让年\n轻男人们魂牵梦绕的魅力。" },
    410349: { nxId: 1, scene: 41804, doing: 2, item: 211601, music: "", sound: "", txt: "[大叔]但从我认识艾玛之后的四十年，\n我从未与别人共舞。" },
    410350: { nxId: 1, scene: 41804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那您为什么让她和别人跳舞呢？" },
    410351: { nxId: 410353, scene: 41804, doing: 2, item: 211601, music: "", sound: "", txt: "[大叔]因为艾玛喜欢跳舞。我喜欢看见她\n开心。不过他们也跳得太久了！" },
    //C
    410352: { nxId: 1, scene: 41804, doing: 2, item: 211601, music: "", sound: "", txt: "[大叔]不用了，他们跳得够久了！" },

    410353: { nxId: 1, scene: 41804, doing: 2, item: 211004, music: "", sound: "", txt: "[我]噗……好吧……" },
    410354: { nxId: 1, scene: 41804, doing: 1, item: 0, music: "", sound: "", txt: "一支舞结束，你赶紧拉住了程昱川。" },
    410355: { nxId: 1, scene: 41804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]程昱川，我们该走了。去吃饭！" },
    410356: { nxId: 1, scene: 41804, doing: 2, item: 211701, music: "", sound: "", txt: "[大妈]是时候把这个英俊男士还回去了。" },
    410357: { nxId: 1, scene: 41804, doing: 1, item: 0, music: "", sound: "", txt: "大妈松开程昱川的手，\n大爷立刻上前握住了。" },
    410358: { nxId: 1, scene: 41804, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（噗……真是可爱的大叔。）" },
    410359: { nxId: 1, scene: 41804, doing: 1, item: 0, music: "", sound: "", txt: "随着音乐，两位老人慢慢地晃着身\n体，你则拉着程昱川静静离开。" },
    410360: { nxId: 1, scene: 41804, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（岁月静好，执子偕老……）" },
    410361: { nxId: 1, scene: 41804, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（这简单的愿望，在今天这个忙碌\n   的世界里，又有多少人能实现呢？）" },
    410362: { nxId: 1, scene: 41804, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（看着两位异国的老人，我真心希\n   望他们的世界里永远如此温柔宁静。）" },

    //海滩饭店
    410363: { nxId: 1, scene: 41901, doing: 0, item: 0, music: "t2", sound: "", txt: "背景初始化" },
    410364: { nxId: 1, scene: 41904, doing: 1, item: 0, music: "", sound: "", txt: "傍晚时分，你们来到了举办派对的\n海边酒店。这里人们摩肩接踵，觥\n筹交错。" },
    410365: { nxId: 1, scene: 41904, doing: 1, item: 0, music: "", sound: "", txt: "人流之间，程昱川不见了，你张望\n过去，希望在人群中找到程昱川。" },
    410366: { nxId: 1, scene: 41904, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]在找我吗？" },
    410367: { nxId: 1, scene: 41904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你还真是来去如风啊。" },
    410368: { nxId: 1, scene: 41904, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]好歹是我们公司办的，\n我总要跟人打个招呼啊。" },
    410369: { nxId: 1, scene: 41904, doing: 2, item: 211004, music: "", sound: "", txt: "[我]好啦好啦，知道你很忙，大总裁！\n多谢你邀请我来派对。" },
    410370: { nxId: 1, scene: 41904, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]跟我还客气什么？" },

    410371: { nxId: 1, scene: 41904, doing: 4, item: 44112, music: "", sound: "", txt: "分支选择" },
    //A
    //正常分支
    //程1
    410372: { nxId: 1, scene: 41904, doing: 7, item: 71005, music: "", sound: "", txt: "好感度" },
    410373: { nxId: 1, scene: 41904, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]你这是在关心我咯？" },
    410374: { nxId: 1, scene: 41904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]毕竟是你救了我。\n顺便问一句也没什么。" },
    410375: { nxId: 1, scene: 41904, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]我就喜欢你这假装不关心的样子。" },
    410376: { nxId: 1, scene: 41904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]呕……" },
    410377: { nxId: 1, scene: 41904, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]连你假装反感我的样子也很有趣。" },
    410378: { nxId: 1, scene: 41904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]受不了你。" },
    410379: { nxId: 1, scene: 41904, doing: 2, item: 217032, music: "", sound: "", txt: "[程昱川]哈哈哈哈！" },
    410380: { nxId: 410398, scene: 41904, doing: 1, item: 0, music: "", sound: "", txt: "程昱川大笑起来，这时，一串娴熟\n的电吉他声穿透了派对的嘈杂。" },
    //特殊分支
    //程2
    410381: { nxId: 1, scene: 41904, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },
    410382: { nxId: 1, scene: 41904, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]你这是在关心我咯？" },
    410383: { nxId: 1, scene: 41904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]毕竟是你救了我。\n顺便问一句也没什么。" },
    410384: { nxId: 1, scene: 41904, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]我就喜欢你这假装不关心的样子。" },
    410385: { nxId: 1, scene: 41904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]呕……" },
    410386: { nxId: 1, scene: 41904, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]连你假装反感我的样子也很有趣。" },
    410387: { nxId: 1, scene: 41904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]受不了你。" },
    410388: { nxId: 1, scene: 41904, doing: 2, item: 217032, music: "", sound: "", txt: "[程昱川]哈哈哈哈！" },
    410389: { nxId: 410398, scene: 41904, doing: 1, item: 0, music: "", sound: "", txt: "程昱川大笑起来，这时，一串娴熟\n的电吉他声穿透了派对的嘈杂。" },

    //B
    410390: { nxId: 410398, scene: 41904, doing: 1, item: 0, music: "", sound: "", txt: "程昱川刚想开口说话，一串娴熟的\n电吉他声穿透了派对的嘈杂。" },

    //C
    410391: { nxId: 1, scene: 41904, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]嘘……说到客户，我在这个派对上\n最不想见到的就是他们了。" },
    410392: { nxId: 1, scene: 41904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]为什么？" },
    410393: { nxId: 1, scene: 41904, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]因为西班牙人会一直拉着我跳舞。" },
    410394: { nxId: 1, scene: 41904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你不会跳舞吗？" },
    410395: { nxId: 1, scene: 41904, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]那要看跟谁了。\n如果是你，我也勉强能答应。" },
    410396: { nxId: 1, scene: 41904, doing: 2, item: 211002, music: "", sound: "", txt: "[我]给你一个机会再说一次！" },
    410397: { nxId: 1, scene: 41904, doing: 1, item: 0, music: "", sound: "", txt: "程昱川大笑起来，这时，一串娴熟\n的电吉他声穿透了派对的嘈杂。" },

    410398: { nxId: 1, scene: 41904, doing: 1, item: 0, music: "", sound: "", txt: "你们二人向声音的方向看去。一个\n年轻的小伙子正在台上拿起话筒。" },
    410399: { nxId: 1, scene: 41904, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]先生们女士们，欢迎来到派对！" },
    410400: { nxId: 1, scene: 41904, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]让我们感谢主办派对的程先生！" },
    410401: { nxId: 1, scene: 41904, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍伸手向程昱川示意，\n人们也纷纷举杯向程昱川致敬。" },
    410402: { nxId: 1, scene: 41904, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]音乐！" },
    410403: { nxId: 1, scene: 41904, doing: 1, item: 0, music: "", sound: "", txt: "接着音乐响起，\n顾廷巍随音乐开始了激情的演唱。" },
    410404: { nxId: 1, scene: 41904, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]Olvidando，olvidando！\n   （忘记，忘记！）" },
    410405: { nxId: 1, scene: 41904, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]bailando，bailando！\n   （舞蹈，舞蹈！）" },
    410406: { nxId: 1, scene: 41904, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]Y así hasta el amanecer！\n   （狂欢到黎明！）" },
    410407: { nxId: 1, scene: 41904, doing: 1, item: 0, music: "", sound: "", txt: "在顾廷巍煽动性的演唱下，人们的\n激情被点燃了。人们挥舞着手臂跟\n 着顾廷巍放声高唱。" },
    410408: { nxId: 1, scene: 41904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没想到这孩子……" },
    410409: { nxId: 1, scene: 41904, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]不错吧？只是一个留学生，但是很\n有演出天赋。" },
    410410: { nxId: 1, scene: 41904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]嗯，我昨天在街上还见过他。" },
    410411: { nxId: 410422, scene: 41904, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍激情一曲终了，下台直奔你\n们而来。" },
    410422: { nxId: 1, scene: 41904, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]Hi，小姐姐！Hi，程先生！" },
    410423: { nxId: 1, scene: 41904, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]你们认识啊？" },

    410424: { nxId: 1, scene: 41904, doing: 4, item: 44113, music: "", sound: "", txt: "分支选择" },
    //A
    410425: { nxId: 1, scene: 41904, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]是啊，小姐姐和我还真是有缘。\n这是第三次见了吧？" },
    410426: { nxId: 1, scene: 41904, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]是吗？我都有点妒忌了。" },//吸管醋王
    410427: { nxId: 1, scene: 41904, doing: 2, item: 211015, music: "", sound: "", txt: "[我]……" },
    410428: { nxId: 1, scene: 41904, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]哈哈哈，程先生太幽默了。\n真没想到，原来你和程先生……" },
    410429: { nxId: 1, scene: 41904, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]你说的非常对！今晚派对可都交给\n你了，酬劳我会提高的。" },
    410430: { nxId: 1, scene: 41904, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]太感谢啦！" },
    410431: { nxId: 410445, scene: 41904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]额，你们这些幼稚的男人……" },
    //B
    410432: { nxId: 1, scene: 41904, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]啊？程先生叫我来做DJ，可没说\n要调查我的私生活。" },
    410433: { nxId: 1, scene: 41904, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]的确没有这个要求。\n这只是满足她的好奇心。" },
    410434: { nxId: 1, scene: 41904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我也没有强迫你。" },
    410435: { nxId: 1, scene: 41904, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]如果你非要知道的话，我们分手了。" },
    410436: { nxId: 1, scene: 41904, doing: 2, item: 217034, music: "", sound: "", txt: "[程昱川]这实在不是一个应景的话题。" },
    410437: { nxId: 1, scene: 41904, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]不如咱们好好享受派对，\n忘记这些往事。怎么样？" },
    410438: { nxId: 1, scene: 41904, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]我同意！" },
    410439: { nxId: 410445, scene: 41904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]OK！" },
    //C
    410440: { nxId: 1, scene: 41904, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]这下我非常有兴趣了解一下你们的\n关系了。" },
    410441: { nxId: 1, scene: 41904, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]小姐姐，你可真是太会开玩笑了。" },
    410442: { nxId: 1, scene: 41904, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]程先生别误会，我们只是一面之缘\n最多两面。好吧算上这次第三面。" },
    410443: { nxId: 1, scene: 41904, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈，别紧张。我们只是偶然碰\n见。你这么在意吗？" },
    410444: { nxId: 1, scene: 41904, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]这不好笑。下次不准这样了。" },

    410445: { nxId: 1, scene: 41904, doing: 1, item: 0, music: "", sound: "", txt: "这时舞台旁边的观众骚动了起来。" },
    410446: { nxId: 1, scene: 41904, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]两位，我得回到台上去了，\n希望你们今晚玩得愉快！" },
    410447: { nxId: 1, scene: 41904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你也是！" },
    410448: { nxId: 1, scene: 41904, doing: 1, item: 0, music: "", sound: "", txt: "这个活力四射的小伙子一溜烟跑回\n了舞台。" },
    410449: { nxId: 1, scene: 41904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你为什么要办这个派对？" },
    410450: { nxId: 1, scene: 41904, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]答谢一下我们的销售商。" },
    410451: { nxId: 1, scene: 41904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]所以你真的从顶级学校出来，\n但选择了回到家族企业？" },
    410452: { nxId: 1, scene: 41904, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]简单的说，是的。虽然这不是我的\n初衷，甚至我还一度特别反感。" },
    410453: { nxId: 1, scene: 41904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]为什么？\n是什么让你改变了主意呢？" },
    410454: { nxId: 1, scene: 41904, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]这是一个不短的故事哦，\n你确定你想听？" },

    410455: { nxId: 1, scene: 41904, doing: 4, item: 44114, music: "", sound: "", txt: "分支选择" },
    //A
    410456: { nxId: 410543, scene: 41904, doing: 2, item: 217032, music: "", sound: "", txt: "[程昱川]好，那就让我们享受欢乐派对吧！" },

    //B 
    410457: { nxId: 1, scene: 41904, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]好，现在这个时间，\n海边正是最漂亮的时候。" },
    410458: { nxId: 1, scene: 41904, doing: 2, item: 211001, music: "", sound: "", txt: "[我]走吧。" },
    410459: { nxId: 1, scene: 41904, doing: 1, item: 0, music: "", sound: "", txt: "你们二人悄悄离开了喧嚣的派对，\n走到了海滩上。" },

    //奥林匹克港 海滩线
    410460: { nxId: 410462, scene: 41111, doing: 0, item: 0, music: "bowenlang", sound: "", txt: "背景初始化" },

    410461: { nxId: 1, scene: 41112, doing: 0, item: 0, music: "", sound: "", txt: "背景向左移动" },//废

    410462: { nxId: 1, scene: 41114, doing: 1, item: 0, music: "", sound: "", txt: "夜色下的奥林匹克港，路边来往的\n车灯时不时照过船帆。" },
    410463: { nxId: 1, scene: 41114, doing: 1, item: 0, music: "", sound: "", txt: "海水轻轻地摇动着帆船，细碎的浪\n花破裂开来，有如轻吟的小夜曲。" },
    410464: { nxId: 1, scene: 41114, doing: 1, item: 0, music: "", sound: "", txt: "你和程昱川漫步港湾，柔和的海风\n轻抚脸颊，温柔而动人。" },
    410465: { nxId: 1, scene: 41114, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]大约三十年前，这里是巴塞罗那奥\n运村的中心，所以叫奥林匹克港。" },
    410466: { nxId: 1, scene: 41114, doing: 2, item: 211005, music: "", sound: "", txt: "[我]这里好美。" },
    410467: { nxId: 1, scene: 41114, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]有句俗话怎么说的？\n夜不醉人人自醉。" },
    410468: { nxId: 1, scene: 41114, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那是酒不醉人人自醉！" },
    410469: { nxId: 1, scene: 41114, doing: 2, item: 217032, music: "", sound: "", txt: "[程昱川]啊，对。我喝多了，哈哈哈！" },
    410470: { nxId: 1, scene: 41114, doing: 2, item: 211001, music: "", sound: "", txt: "[我]真是的……" },
    410471: { nxId: 1, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]不过在你身边，\n不管什么人也都会醉吧。" },
    410472: { nxId: 1, scene: 41114, doing: 2, item: 211001, music: "", sound: "", txt: "[我]程昱川……" },
    410473: { nxId: 1, scene: 41114, doing: 1, item: 0, music: "", sound: "", txt: "程昱川看着夜幕下的大海，眼神逐\n渐深邃……" },
    410474: { nxId: 1, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]小时候，我家就在海边。\n但我很少到海边去玩。" },
    410475: { nxId: 1, scene: 41114, doing: 2, item: 211001, music: "", sound: "", txt: "[我]为什么？" },
    410476: { nxId: 1, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]我父亲是个严厉的人。" },
    410477: { nxId: 1, scene: 41114, doing: 2, item: 211001, music: "", sound: "", txt: "[我]望子成龙。你的压力一定很大。" },
    410478: { nxId: 1, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]他觉得自己受教育太少是个遗憾。" },
    410479: { nxId: 1, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]所以把全部的热情，\n都投入到了我的学业上。" },
    410480: { nxId: 1, scene: 41114, doing: 2, item: 211001, music: "", sound: "", txt: "[我]想必你被盯得很紧。" },
    410481: { nxId: 1, scene: 41114, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]我几乎连出去玩的时间都没有。" },
    410482: { nxId: 1, scene: 41114, doing: 2, item: 211004, music: "", sound: "", txt: "[我]但我看你不是能老老实实的主儿。" },
    410483: { nxId: 1, scene: 41114, doing: 2, item: 217032, music: "", sound: "", txt: "[程昱川]哈哈，的确。\n我背着父亲溜出去几次。" },
    410484: { nxId: 1, scene: 41114, doing: 2, item: 211004, music: "", sound: "", txt: "[我]一顿竹笋炒肉？" },
    410485: { nxId: 1, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]哈哈，那倒没。但是他让镇里其他\n家的孩子都不要来找我。" },
    410486: { nxId: 1, scene: 41114, doing: 2, item: 211003, music: "", sound: "", txt: "[我]啊？这也太可怜了。\n那不是等于被孤立了吗。" },
    410487: { nxId: 1, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]所以，你理解我了吧。" },
    410488: { nxId: 1, scene: 41114, doing: 2, item: 211001, music: "", sound: "", txt: "[我]难怪你说之前你不想继承家业。" },
    410489: { nxId: 1, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]没错。" },

    410490: { nxId: 1, scene: 41114, doing: 4, item: 44115, music: "", sound: "", txt: "分支选择" },
    //A
    410491: { nxId: 1, scene: 41114, doing: 1, item: 0, music: "", sound: "", txt: "你轻轻地握了握程昱川的手。他惊\n讶地转过身来，眼神里满是温柔。" },
    //程2
    410492: { nxId: 1, scene: 41114, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },
    410493: { nxId: 1, scene: 41114, doing: 2, item: 211001, music: "", sound: "", txt: "[我]都过去了不是吗。" },
    410494: { nxId: 1, scene: 41114, doing: 1, item: 0, music: "", sound: "", txt: "程昱川笑了起来，\n他也轻轻地握了握你的手。" },
    410495: { nxId: 410498, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]是啊。都过去了……" },
    //B
    410496: { nxId: 1, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]以前有吧，现在不再有了。" },
    410497: { nxId: 1, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]虽然不一定对，但对他来说，\n这是唯一能表达爱的方式。" },

    410498: { nxId: 1, scene: 41114, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那后来你为什么又回去了呢？" },
    410499: { nxId: 1, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]三年前，我父亲得了一场大病。\n我赶回国去看他。" },
    410500: { nxId: 1, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]在病房里，\n我平生第一次看见他流泪，" },
    410501: { nxId: 1, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]他跟我说了很多事，从认识我妈妈\n到我出生前……" },
    410502: { nxId: 1, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]如何白手起家，又如何看我长大。" },
    410503: { nxId: 1, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]那一刻我才意识到，他严厉的面孔\n下，其实是一颗慈爱的心。" },
    410504: { nxId: 1, scene: 41114, doing: 2, item: 211003, music: "", sound: "", txt: "[我]真的很感人……" },
    410505: { nxId: 1, scene: 41114, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（想到我的妈妈，\n   她何尝不是爱我的呢？）" },
    410506: { nxId: 1, scene: 41114, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（虽然找来那么多奇葩是有点。）" },
    410507: { nxId: 1, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]无论怎么说，家人就是家人。" },
    410508: { nxId: 1, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]他们的爱也许不那么合乎我们的口\n味，但我们可以试着更理解对方。" },
    410509: { nxId: 1, scene: 41114, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我们不能选择家人，\n但我们可以选择爱的方式。" },
    410510: { nxId: 1, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]那天起，我决定继承父亲的事业。" },
    410511: { nxId: 1, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]因为这是父亲的志向所在，但我会\n按我的想法重塑它。" },
    410512: { nxId: 1, scene: 41114, doing: 2, item: 211001, music: "", sound: "", txt: "[我]重塑？" },
    410513: { nxId: 1, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]吸管是塑料做的。你知道一年全世\n界有多少塑料被扔进大海吗？" },

    410514: { nxId: 1, scene: 41114, doing: 4, item: 44116, music: "", sound: "", txt: "分支选择" },
    //A //B
    410515: { nxId: 410518, scene: 41114, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]错了。" },
    //C
    410516: { nxId: 410518, scene: 41114, doing: 2, item: 217032, music: "", sound: "", txt: "[程昱川]没错！你真聪明！" },
    //D
    410517: { nxId: 1, scene: 41114, doing: 2, item: 217035, music: "", sound: "", txt: "[程昱川]嗯……" },
    
    410518: { nxId: 1, scene: 41114, doing: 2, item: 217034, music: "", sound: "", txt: "[程昱川]全世界每年扔进海洋的塑料垃圾有\n800万吨！" },
    410519: { nxId: 1, scene: 41114, doing: 2, item: 217034, music: "", sound: "", txt: "[程昱川]这样下去，到2050年，我们海\n洋中塑料垃圾的重量将超过鱼。" },
    410520: { nxId: 1, scene: 41114, doing: 2, item: 211003, music: "", sound: "", txt: "[我]啊？这么严重……" },
    410521: { nxId: 1, scene: 41114, doing: 1, item: 0, music: "", sound: "", txt: "程昱川变魔术一般，\n拿出一根透明的小管。" },
    410522: { nxId: 1, scene: 41114, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]这根小小的吸管是我开发的。" },
    410523: { nxId: 1, scene: 41114, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]材料是玉米，扔进土里或者海里，\n很快就分解成二氧化碳和水。" },
    410524: { nxId: 1, scene: 41114, doing: 2, item: 211001, music: "", sound: "", txt: "[我]真厉害！" },
    410525: { nxId: 1, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]如果我不回去我曾经瞧不起的家族\n企业，这一切都不会发生。" },
    410526: { nxId: 1, scene: 41114, doing: 2, item: 211001, music: "", sound: "", txt: "[我]嗯……没想到你平时没个正经，\n其实还这么有才干。" },
    //程2
    410527: { nxId: 1, scene: 41114, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },
    410528: { nxId: 1, scene: 41114, doing: 2, item: 217032, music: "haha", sound: "", txt: "[程昱川]是不是对我刮目相看了呢？" },

    410529: { nxId: 1, scene: 41114, doing: 4, item: 44117, music: "", sound: "", txt: "分支选择" },
    //A 
    410530: { nxId: 1, scene: 41114, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]真的只有一点点？" },
    410531: { nxId: 1, scene: 41114, doing: 2, item: 211004, music: "", sound: "", txt: "[我]看你这么努力，好吧，\n两点点，不能再多了……" },
    410532: { nxId: 410888, scene: 41114, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]对整个吸管产业而言，\n这只是小小的肯定。" },
    410888: { nxId: 1, scene: 41114, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]但对我个人而言，\n这是灵魂级别的伟大认同！" },
    410889: { nxId: 1, scene: 41114, doing: 2, item: 217032, music: "", sound: "", txt: "[程昱川]听到这句话，\n我觉得我整个人都升华了……" },
    410890: { nxId: 410533, scene: 41114, doing: 2, item: 211004, music: "", sound: "", txt: "[我]程昱川，你怎么这么贫啊！" },
    //程2
    410533: { nxId: 410542, scene: 41114, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },
    //B
    410534: { nxId: 1, scene: 41114, doing: 1, item: 0, music: "", sound: "", txt: "程昱川笑呵呵的看着你，\n一脸看破不说破的表情。" },
    410535: { nxId: 1, scene: 41114, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你这个表情，真的让人有种……" },
    410536: { nxId: 1, scene: 41114, doing: 2, item: 217032, music: "", sound: "", txt: "[程昱川]想打是吗？哈哈哈哈！" },
    410537: { nxId: 1, scene: 41114, doing: 2, item: 211002, music: "", sound: "", txt: "[我]……程昱川，你过来，\n我保证不打死你……" },
    410538: { nxId: 1, scene: 41114, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]女侠饶命啊！" },
    410539: { nxId: 1, scene: 41114, doing: 1, item: 0, music: "", sound: "", txt: "程昱川边喊边跑开了，你也顾不得\n形象，追了上去……" },
    //程2
    410540: { nxId: 410542, scene: 41114, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },

    410541: { nxId: 1, scene: 41114, doing: 1, item: 0, music: "", sound: "", txt: "海风吹拂下，灯火摇曳的城市和悠\n远深邃的大海构成了绝美的画面。" },
    410542: { nxId: 410544, scene: 41114, doing: 1, item: 0, music: "", sound: "", txt: "你和程昱川细语呢喃，谈笑风生中，\n不知不觉走了很远……" },
    //接派对线
    410543: { nxId: 1, scene: 41904, doing: 1, item: 0, music: "", sound: "", txt: "欢乐的时光转瞬即逝，你和程昱川\n在派对上玩的很开心，随后你们趁\n着兴致来到了海滩上。" },

    //巴塞罗那海滩
    410544: { nxId: 410546, scene: 41121, doing: 0, item: 0, music: "missing", sound: "", txt: "背景初始化" },

    410545: { nxId: 1, scene: 41122, doing: 0, item: 0, music: "", sound: "", txt: "背景向左移动" },//废

    410546: { nxId: 1, scene: 41124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哎呀！好痛！" },
    410547: { nxId: 1, scene: 41124, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]怎么了，脚磕到什么了吗？\n还是穿上鞋吧。" },
    410548: { nxId: 1, scene: 41124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不要，穿鞋就不好玩了，你看，\n原来磕到的是贝壳！好漂亮……" },
    410549: { nxId: 1, scene: 41124, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]你喜欢贝壳？我去捡多些给你。" },
    410550: { nxId: 1, scene: 41124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不用啦，有一个就够了……" },
    410551: { nxId: 1, scene: 41124, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]快过来看！这边好多！" },
    410552: { nxId: 1, scene: 41124, doing: 1, item: 0, music: "", sound: "", txt: "说着程昱川走进了海水里，\n海水瞬间蔓延到了他的膝盖。" },
    410553: { nxId: 1, scene: 41124, doing: 2, item: 211003, music: "", sound: "", txt: "[我]别走那么远，那边水深。" },
    410554: { nxId: 1, scene: 41124, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]但是这里有心形的贝壳噢，不想看看？" },
    410555: { nxId: 1, scene: 41124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]真的？快给我看看！" },
    410556: { nxId: 1, scene: 41124, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]你过来点，没事的。" },
    410557: { nxId: 1, scene: 41124, doing: 1, item: 0, music: "", sound: "", txt: "程昱川笑着对你招手，你犹豫了一\n下，也踩进了清凉的水里。" },
    410558: { nxId: 1, scene: 41124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]在哪里？" },
    410559: { nxId: 1, scene: 41124, doing: 1, item: 0, music: "", sound: "", txt: "你低头寻找着，却感到身上一凉，\n原来是程昱川正在向你泼水。" },
    410560: { nxId: 1, scene: 41124, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哇！程昱川你好啊！\n敢泼我！看招！" },
    410561: { nxId: 1, scene: 41124, doing: 2, item: 217032, music: "", sound: "", txt: "[程昱川]泼不到，泼不到，哎呀！" },//加起来三岁
    410562: { nxId: 1, scene: 41124, doing: 1, item: 0, music: "", sound: "push", txt: "程昱川向后躲闪时，脚下一滑，\n摔进了海里。" },
    410563: { nxId: 1, scene: 41124, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈摔倒了吧，让你泼我，\n喂，程昱川……" },
    410564: { nxId: 1, scene: 41124, doing: 1, item: 0, music: "", sound: "", txt: "你的呼喊良久无人回应，\n程昱川消失在了水面之下。" },
    410565: { nxId: 1, scene: 41124, doing: 2, item: 211003, music: "", sound: "", txt: "[我]（他不是溺水了吧？！）\n   程昱川！" },
    410566: { nxId: 1, scene: 41124, doing: 2, item: 211003, music: "", sound: "", txt: "[我]（我的天，赶紧下去看看！）\n   程昱川！！！" },
    410567: { nxId: 410666, scene: 41124, doing: 1, item: 0, music: "", sound: "", txt: "你焦急地冲进海里，\n一头扎向海水深处。" }, 
    //海底图
    410666: { nxId: 410568, scene: 51101, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    410568: { nxId: 1, scene: 51104, doing: 2, item: 211003, music: "", sound: "", txt: "[我]（水下好黑啊，眼睛要睁不开了）" },
    410569: { nxId: 1, scene: 51104, doing: 2, item: 211003, music: "", sound: "", txt: "[我]（程昱川……你在哪？）" },
    410570: { nxId: 1, scene: 51104, doing: 1, item: 0, music: "", sound: "", txt: "突然间一双温暖的大手从后背环绕\n而来，温柔而有力地包围了你整个\n身体。" },
    410571: { nxId: 1, scene: 51104, doing: 1, item: 0, music: "", sound: "", txt: "你转过头去，程昱川温柔的双眸映\n入眼帘。虽然水中无法说话，但你\n似乎读懂了他的眼神。" },

    410572: { nxId: 1, scene: 51104, doing: 4, item: 44118, music: "", sound: "", txt: "分支选择" },
    //A 
    410573: { nxId: 1, scene: 51104, doing: 6, item: 64101, music: "bowenlang", sound: "", txt: "CG动画" },//水下之吻
    //程4
    410574: { nxId: 410589, scene: 51104, doing: 7, item: 71008, music: "", sound: "", txt: "好感度" },

    //废
    410575: { nxId: 1, scene: 41124, doing: 1, item: 0, music: "", sound: "", txt: "一瞬间，全世界的海水都静止了一\n般，一切都来得那么自然。" },
    410576: { nxId: 1, scene: 41124, doing: 1, item: 0, music: "", sound: "", txt: "他双唇传来的温热蔓延全身，\n驱走了夜晚海水的冰凉。" },
    410577: { nxId: 1, scene: 41124, doing: 1, item: 0, music: "", sound: "", txt: "你好奇这时候程昱川的表情，于是\n偷偷半睁着双眼，原来他也偷偷地\n在看你。" },
    410578: { nxId: 1, scene: 41124, doing: 1, item: 0, music: "", sound: "", txt: "海面透进来的光不停地闪烁着，他\n吻得更用力了，唇际传来的爱意越\n加炽热。" },
    410579: { nxId: 1, scene: 41124, doing: 1, item: 0, music: "", sound: "", txt: "不知过了多久，我们随着水流慢慢\n朝着海面浮去，好像做了一个永恒\n的梦……" },
    410580: { nxId: 410589, scene: 41124, doing: 1, item: 0, music: "", sound: "", txt: "哪怕醒来了，梦里的爱意和灼热，\n也是永恒。" },

    410589: { nxId: -1, scene: 51104, doing: -1, item: 211002, music: "", sound: "", txt: "" },
    //B
    410581: { nxId: 410665, scene: 41121, doing: 1, item: 0, music: "", sound: "", txt: "程昱川带着你朝水面游去。" },
    410665: { nxId: 410582, scene: 41124, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    410582: { nxId: 1, scene: 41124, doing: 2, item: 217031, music: "", sound: "", txt: "[程昱川]你没事吧？不会水你下来干什么！" },
    410583: { nxId: 1, scene: 41124, doing: 2, item: 211002, music: "", sound: "", txt: "[我]还不是因为你，不会水又嘚瑟什么啊！" },
    410584: { nxId: 1, scene: 41124, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]没想到你都愿意和我同生共死了！" },
    410585: { nxId: 1, scene: 41124, doing: 2, item: 211002, music: "", sound: "", txt: "[我]才没有！" },
    410586: { nxId: 1, scene: 41124, doing: 2, item: 217033, music: "", sound: "", txt: "[程昱川]口是心非，我知道的……" },
    410587: { nxId: 1, scene: 41124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]啊，看，星星，好漂亮！" },
    410588: { nxId: -1, scene: 41124, doing: -1, item: 211002, music: "", sound: "", txt: "" },


}

export class CfgChapter4_1 {
    public chapters: any = chapterObj;
    public endChatuList: string[] = ["hos#圣保罗十字医院", "walk#午后回廊", "hotel#夜晚沙滩", "bg_1_4#哭泣角落"];
}