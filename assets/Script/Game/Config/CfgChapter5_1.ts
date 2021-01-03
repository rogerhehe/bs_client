/** 操作ID,下一步操作ID,场景ID,操作类型,具体操作ID,描述 */
/** 操作类型: -1.无 0.背景移动 1.旁白 2.对话 3.人物介绍 4.分支选择 5.插图 6.CG动画 7.好感度 8.衣服选择 9.电话微信 10.回忆 11.彩蛋*/

let chapterObj = {
    510001: { nxId: 510888, scene: 51101, doing: 0, item: 0, music: "kiss", sound: "", txt: "背景初始化" },
    510888: { nxId: 510889, scene: 51104, doing: 1, item: 0, music: "", sound: "", txt: "程昱川向你游过来，他一改往日的\n轻佻逗趣，神情温柔地望着你。" },
    510889: { nxId: 1, scene: 51104, doing: 1, item: 0, music: "", sound: "", txt: "“程昱川？”\n你张口想说话，却发现自己在海里\n张不开嘴。" },
    510890: { nxId: 510003, scene: 51104, doing: 1, item: 0, music: "", sound: "", txt: "“你感觉呼吸越来越艰难，但程昱川\n却笑嘻嘻地看着你，毫无想要帮忙\n的意思。" },
    //新酒店房间(女主) //睡衣部分
    510003: { nxId: 1, scene: 41401, doing: 0, item: 0, music: "haha", sound: "", txt: "背景初始化", notopen: 1 },
    510004: { nxId: 1, scene: 41404, doing: 12, item: 125101, music: "", sound: "", txt: "地点介绍", notopen: 1 },
    510005: { nxId: 1, scene: 41404, doing: 2, item: 211011, music: "", sound: "", txt: "[我]啊！是昨天晚上的事情……" , notopen: 1},
    510006: { nxId: 1, scene: 41404, doing: 2, item: 211014, music: "", sound: "", txt: "[我]现在回想起来，\n真的就像是梦一样……", notopen: 1 },
    510007: { nxId: 1, scene: 41404, doing: 2, item: 211012, music: "", sound: "", txt: "[我]都是程昱川这家伙弄的。" , notopen: 1},
    510008: { nxId: 1, scene: 41404, doing: 1, item: 0, music: "", sound: "", txt: "昨晚你们二人从海滩回来之后，因\n为酒会上喝得有点过头，你回房间\n休息，程昱川睡在隔壁房间了。", notopen: 1 },
    510009: { nxId: 1, scene: 41404, doing: 2, item: 211011, music: "", sound: "", txt: "[我]不知道他现在在干嘛呢？", notopen: 1 },

    510010: { nxId: 1, scene: 41404, doing: 4, item: 45101, music: "", sound: "", txt: "分支选择", notopen: 1 },
    //A
    510011: { nxId: 510012, scene: 41404, doing: 9, item: 951001, music: "", sound: "", txt: "电话微信" , notopen: 1},
    //B
    //新卧室（程日）//正常衣服
    510012: { nxId: 1, scene: 51201, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    510013: { nxId: 1, scene: 51204, doing: 1, item: 0, music: "", sound: "", txt: "你走进另外一间房间，程昱川盖着\n毯子睡着，脸有点红。" },
    510014: { nxId: 1, scene: 51204, doing: 1, item: 0, music: "", sound: "", txt: "你伸手摸了一下程昱川的额头，有\n点热。" },
    510015: { nxId: 1, scene: 51204, doing: 2, item: 211002, music: "", sound: "", txt: "[我]程昱川！" },
    510016: { nxId: 1, scene: 51204, doing: 1, item: 0, music: "", sound: "", txt: "程昱川一惊，翻身掉下了床。" },
    510017: { nxId: 1, scene: 51204, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你睡觉怎么不穿衣服？？" },
    510018: { nxId: 1, scene: 51204, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]我习惯……你为什么还管别人睡觉\n穿不穿？！" },
    510019: { nxId: 1, scene: 51204, doing: 2, item: 211002, music: "", sound: "", txt: "[我]被我看见了就是不对！" },
    510020: { nxId: 1, scene: 51204, doing: 2, item: 217021, music: "", sound: "", txt: "[程昱川]你不瞎闯人家房间能看见吗！" },
    510021: { nxId: 1, scene: 51204, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你赶紧把衣服穿上！" },

    510022: { nxId: 1, scene: 51204, doing: 4, item: 45102, music: "", sound: "", txt: "分支选择" },
    //A
    510023: { nxId: 1, scene: 51204, doing: 2, item: 211002, music: "", sound: "", txt: "[我]快穿衣服，臭流氓！穿好赶紧出来！" },
    510024: { nxId: 510027, scene: 51204, doing: 1, item: 0, music: "", sound: "", txt: "你把衣服扔给程昱川，转身走出房间。" },
    //B
    510025: { nxId: 1, scene: 51204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我去外面等你。" },
    510026: { nxId: 1, scene: 51204, doing: 1, item: 0, music: "", sound: "", txt: "你转身走出了房间。" },
    
    //新酒店房间(女主)
    510027: { nxId: 1, scene: 41401, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    510028: { nxId: 1, scene: 41404, doing: 1, item: 0, music: "", sound: "", txt: "过了一会，程昱川打开了门，整整\n齐齐地站在你面前。" },  
    510029: { nxId: 1, scene: 41404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我有个问题想请教一下。" },  
    510030: { nxId: 1, scene: 41404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你说说看姑娘我爱不爱回答。" },
    510031: { nxId: 1, scene: 41404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]你是不是一直这么没……\n嗯，风风火火的？" },  
    510032: { nxId: 1, scene: 41404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你本来想说我没头没脑的是吧？" },
    510033: { nxId: 1, scene: 41404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]你多心了，嘿嘿。" },  
    510034: { nxId: 1, scene: 41404, doing: 1, item: 0, music: "", sound: "", txt: "你刚想发作，程昱川抢先一步把你\n搂住，一双狡黠的大眼睛笑眯眯地\n盯住你的脸。" },  
    510035: { nxId: 1, scene: 41404, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]要不要再重演一次。" },  
    510036: { nxId: 1, scene: 41404, doing: 2, item: 211002, music: "", sound: "", txt: "[我]谁要跟你重演啊，哼！" },
    510037: { nxId: 1, scene: 41404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]你这个人，就是嘴硬。" }, 
    510038: { nxId: 1, scene: 41404, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你还好意思说，昨晚那么深的水，\n我差点窒息好吗。" },
    510039: { nxId: 1, scene: 41404, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]我也差点窒息。\n不过是因为你，哈哈。" }, 
    510040: { nxId: 1, scene: 41404, doing: 1, item: 0, music: "", sound: "", txt: "说完程昱川俯身在你脸上亲了一下。" },  
    510041: { nxId: 1, scene: 41404, doing: 2, item: 211003, music: "", sound: "", txt: "[我]你不对劲啊，嘴唇怎么这么烫？" },//hot不好么
    510042: { nxId: 1, scene: 41404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]是吗？" }, 
    510043: { nxId: 1, scene: 41404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你自己感觉不到？" },
    510044: { nxId: 1, scene: 41404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我身体健康得很，感觉不到。\n不过好像是有点晕。" }, 
    510045: { nxId: 1, scene: 41404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你快躺下休息，我会照顾你的。" },
    510046: { nxId: 1, scene: 41404, doing: 1, item: 0, music: "", sound: "", txt: "程昱川听见你这话，眼前一亮，\n瞬间躺到了沙发上，\n摆出一副虚弱的样子。" },    
    510047: { nxId: 1, scene: 41404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]请帮我削个苹果。谢谢。" }, 
    510048: { nxId: 1, scene: 41404, doing: 2, item: 211015, music: "", sound: "", txt: "[我]……" },
    510049: { nxId: 1, scene: 41404, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]刚才某人说了要照顾我的。" }, 
    510050: { nxId: 1, scene: 41404, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（好你个得寸进尺的家伙……）" },

    510051: { nxId: 1, scene: 41404, doing: 4, item: 45103, music: "", sound: "", txt: "分支选择" },
    //A
    510052: { nxId: 1, scene: 41404, doing: 1, item: 0, music: "", sound: "", txt: "你白了他一眼，削好苹果拿给他。" },  
    510053: { nxId: 1, scene: 41404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]你削的苹果真好吃。" }, 
    510054: { nxId: 510064, scene: 41404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我也要吃一块。" },  
    //B
    510055: { nxId: 1, scene: 41404, doing: 1, item: 0, music: "", sound: "", txt: "你默默地削起了苹果。" },  
    510056: { nxId: 1, scene: 41404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]嘿嘿，不错……嗯？够了吧……" },
    510057: { nxId: 1, scene: 41404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]等会，你削这么多干什么？" },
    510058: { nxId: 1, scene: 41404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]诶诶！够了够了！实在太多了啊！" },
    510059: { nxId: 1, scene: 41404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]这都是我的心意，你不准浪费。" },  
    510060: { nxId: 510064, scene: 41404, doing: 2, item: 217009, music: "", sound: "", txt: "[程昱川]……" },
    //C
    510061: { nxId: 1, scene: 41404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]生病了吃什么苹果？多喝热水。" }, 
    510062: { nxId: 1, scene: 41404, doing: 2, item: 217009, music: "", sound: "", txt: "[程昱川]呃？" },
    510063: { nxId: 1, scene: 41404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]你们男人不是最喜欢要女孩子多喝\n热水嘛！" }, 

    510064: { nxId: 1, scene: 41404, doing: 1, item: 0, music: "", sound: "", txt: "过了一会儿……" },  
    510065: { nxId: 1, scene: 41404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好了，你体温降下来了，\n估计也就是着凉。" }, 
    510066: { nxId: 1, scene: 41404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]抱歉耽误你逛巴塞的时间了。" },
    510067: { nxId: 1, scene: 41404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没关系。" }, 
    510068: { nxId: 1, scene: 41404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我躺着就好，你自己出去玩吧。\n我没问题的。" },

    510069: { nxId: 1, scene: 41404, doing: 4, item: 45104, music: "", sound: "", txt: "分支选择" },
    //A
    //正常分支
    //程1
    510070: { nxId: 1, scene: 41404, doing: 7, item: 71005, music: "", sound: "", txt: "好感度" },
    510071: { nxId: 1, scene: 41404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]有你的关心就够了！" },
    510072: { nxId: 1, scene: 41404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]而且再过两天你就要回国了。\n出来玩一趟最重要要尽兴。" },
    510073: { nxId: 1, scene: 41404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]大道理说的一套一套的，自己一点\n也不注意……" }, 
    510074: { nxId: 1, scene: 41404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]失火那晚要你去医院就推三托四。" }, 
    510075: { nxId: 1, scene: 41404, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]哈哈。那我也不能耽误了你啊。" },
    510076: { nxId: 1, scene: 41404, doing: 1, item: 0, music: "", sound: "", txt: "程昱川深呼吸几口气，站了起来。" },  
    510077: { nxId: 1, scene: 41404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]我好得也差不多了，出去走走吧。" },
    510078: { nxId: 1, scene: 41404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你可别逞强。" }, 
    510079: { nxId: 510114, scene: 41404, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]呼吸一下新鲜空气有助于痊愈。" },
    //特殊分支
    //程2
    510080: { nxId: 1, scene: 41404, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },
    510081: { nxId: 1, scene: 41404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]有你的关心就够了！" },
    510082: { nxId: 1, scene: 41404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]而且再过两天你就要回国了。\n出来玩一趟最重要要尽兴。" },
    510083: { nxId: 1, scene: 41404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]大道理说的一套一套的，自己一点\n也不注意……" }, 
    510084: { nxId: 1, scene: 41404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]失火那晚要你去医院就推三托四。" }, 
    510085: { nxId: 1, scene: 41404, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]哈哈。那我也不能耽误了你啊。" },
    510086: { nxId: 1, scene: 41404, doing: 1, item: 0, music: "", sound: "", txt: "程昱川深呼吸几口气，站了起来。" },  
    510087: { nxId: 1, scene: 41404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]我好得也差不多了，出去走走吧。" },
    510088: { nxId: 1, scene: 41404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你可别逞强。" }, 
    510089: { nxId: 510114, scene: 41404, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]呼吸一下新鲜空气有助于痊愈。" },
    //B
    510090: { nxId: 1, scene: 41404, doing: 1, item: 0, music: "", sound: "", txt: "听闻此言，程昱川一个利索的翻身\n站起来。" },  
    510091: { nxId: 1, scene: 41404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我没问题了，可以出门了。" },
    510092: { nxId: 1, scene: 41404, doing: 2, item: 211015, music: "", sound: "", txt: "[我]……\n（幼稚的男人啊。）" }, 
    510093: { nxId: 510114, scene: 41404, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]呼吸一下室外的新鲜空气，也有助\n于恢复。走吧。" },
    //C
    //正常分支
    //程1
    510096: { nxId: 1, scene: 41404, doing: 7, item: 71005, music: "", sound: "", txt: "好感度" },
    510097: { nxId: 1, scene: 41404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你真好。" },
    510098: { nxId: 1, scene: 41404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]知道本姑娘的好了吧？" }, 
    510099: { nxId: 1, scene: 41404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]不但知道，还深有体会。" },
    510100: { nxId: 1, scene: 41404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]就算是个流浪的小猫小狗受伤了，\n我也不会抛弃它们的。" }, 
    510101: { nxId: 510103, scene: 41404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]何况是这么大个人。" }, 
    510103: { nxId: 510104, scene: 41404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你这个比喻有点一言难尽……" },
    510104: { nxId: 510114, scene: 41404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]不过我感觉好多了，出去呼吸呼吸\n新鲜空气吧！" },
    //特殊分支
    //程2
    510105: { nxId: 1, scene: 41404, doing: 7, item: 71005, music: "", sound: "", txt: "好感度" },
    510106: { nxId: 1, scene: 41404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你真好。" },
    510107: { nxId: 1, scene: 41404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]知道本姑娘的好了吧？" }, 
    510108: { nxId: 1, scene: 41404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]不但知道，还深有体会。" },
    510109: { nxId: 1, scene: 41404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]就算是个流浪的小猫小狗受伤了，\n我也不会抛弃它们的。" }, 
    510110: { nxId: 1, scene: 41404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]何况是这么大个人。" }, 
    510111: { nxId: 510113, scene: 41404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你这个比喻有点一言难尽……" },
    510113: { nxId: 1, scene: 41404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]不过我感觉好多了，出去呼吸呼吸\n新鲜空气吧！" },

    510114: { nxId: 1, scene: 41404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我不信，让我摸摸你的额头。" }, 
    510115: { nxId: 1, scene: 41404, doing: 1, item: 0, music: "", sound: "", txt: "你伸手往程昱川额头探去。突然你\n感觉手心一痒，被这家伙闪开亲了\n一下你的手掌。" },  
    510116: { nxId: 1, scene: 41404, doing: 2, item: 211002, music: "", sound: "", txt: "[我]喂！" }, 
    510117: { nxId: 1, scene: 41404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]走啦走啦！" },
    510118: { nxId: 1, scene: 41404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]我们一起去加泰罗尼亚广场吧？\n听音乐，看看鸽子，很惬意的。" },
    510119: { nxId: 1, scene: 41404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]听起来不错。等我换件衣服就出发。" }, 

    510120: { nxId: 1, scene: 41404, doing: 8, item: 0, music: "huanzhuang", sound: "", txt: "换装界面" },

    //加泰罗尼亚广场
    510121: { nxId: 1, scene: 51301, doing: 0, item: 0, music: "haha2", sound: "", txt: "背景初始化" },
    510122: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "你们来到加泰罗尼亚广场，程昱川\n给你带来一包鸽子食。" },  //鸽子屎
    510123: { nxId: 1, scene: 51304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]来来来，给你！" },
    510124: { nxId: 1, scene: 51304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那我喂鸽子，你帮我拍几张照片。" }, 
    510125: { nxId: 1, scene: 51304, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]你放心，一定帮你拍得美美的！" },
    510126: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "你蹲下洒了一些食物，鸽子都飞到\n你的身边。你摆了半天姿势，但是\n程昱川那边却没有动静。" }, 
    510127: { nxId: 1, scene: 51304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你拍了没有啊？" }, 
    510128: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "你转过头，发现程昱川还在站着那\n摆弄手机。" },
    510129: { nxId: 1, scene: 51304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]程昱川，你在干什么？" }, 
    510130: { nxId: 1, scene: 51304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]不是很理想。稍等一会。" },
    510131: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "你走到程昱川身边，发现程昱川把\n你拍得又糊又怪。" },
    510132: { nxId: 1, scene: 51304, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你拍的这个是什么？你是魔鬼吗？" }, 
    510133: { nxId: 1, scene: 51304, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]我觉得挺可爱的，你不要的话，我\n自己留着看行吗？" },
    510134: { nxId: 1, scene: 51304, doing: 2, item: 211002, music: "", sound: "", txt: "[我]不行！被你气死了。" }, 
    510135: { nxId: 1, scene: 51304, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]等等等等，\n你看到那边那位画家了吗？" },
    510136: { nxId: 1, scene: 51304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]怎么？" }, 
    510137: { nxId: 1, scene: 51304, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]我将功补过，我去给你画幅画。" },

    510138: { nxId: 1, scene: 51304, doing: 4, item: 45105, music: "", sound: "", txt: "分支选择" },
    //A
    510139: { nxId: 1, scene: 51304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]相信我就对了，绝对不会后悔的。" },
    510140: { nxId: 1, scene: 51304, doing: 2, item: 211002, music: "", sound: "", txt: "[我]不要找借口！快把照片给我删掉！" }, 
    510141: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "程昱川悻悻地删掉照片。" },
    510142: { nxId: 510243, scene: 51304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你们男人真是不懂，拍个好照片对\n女孩子多重要！" }, 

    //B
    //正常分支
    //程3
    510143: { nxId: 1, scene: 51304, doing: 7, item: 71007, music: "", sound: "", txt: "好感度" },
    510144: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "程昱川走到一位画家旁边，不知说\n了什么。画家把画笔递给了程昱川。" },
    510145: { nxId: 1, scene: 51304, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（竟然还真得被他说动了）" }, 
    510146: { nxId: 1, scene: 51304, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（程昱川这个流氓，画画的样子还\n   挺像回事。）" }, 
    510147: { nxId: 1, scene: 51304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好了没有？" }, 
    510148: { nxId: 1, scene: 51304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]再过一会儿。" },
    510149: { nxId: 1, scene: 51304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]很累啊……" }, 
    510150: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "你一边洒着鸟食，鸽子被走过的行\n人惊起又落下，一只鸽子落在了你\n的头上。" },
    510151: { nxId: 1, scene: 51304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]不要动！" },
    510152: { nxId: 1, scene: 51304, doing: 2, item: 211002, music: "", sound: "", txt: "[我]干什么？它在啄我！" }, 
    510153: { nxId: 1, scene: 51304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]没有没有，\n这个鸽子很亲人的，它跟你有缘。" },
    510154: { nxId: 1, scene: 51304, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]不然为什么那么多人，\n只飞到你头上。" }, 
    510155: { nxId: 1, scene: 51304, doing: 2, item: 211003, music: "", sound: "", txt: "[我]我感到它对我充满了恶意！" }, 
    510156: { nxId: 1, scene: 51304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]这个画面很好看，我得画下来……\n十分钟，不，五分钟就好。" }, 
    510157: { nxId: 1, scene: 51304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]真的吗？" }, 
    510158: { nxId: 1, scene: 51304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我保证我给你画的特别好看。" }, 
    510159: { nxId: 1, scene: 51304, doing: 2, item: 211003, music: "", sound: "", txt: "[我]那你快点，它刚刚吃了很多东西，\n我很担心啊……" }, 
    510160: { nxId: 1, scene: 51304, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]你身体不要那么僵硬，\n摆个美一点的姿势嘛。" }, 
    510161: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "你一个趔趄，鸽子被惊走了，有什\n么东西掉了下来……" },
    510162: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "你伸手摸摸头发，却在头顶摸到了\n一颗鸽子食。" },
    510163: { nxId: 1, scene: 51304, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（刚刚程昱川摸了我的头……）" }, 
    510164: { nxId: 1, scene: 51304, doing: 2, item: 211002, music: "", sound: "", txt: "[我]程、昱、川！\n你竟然在我的头上喂鸽子？！" }, 
    510165: { nxId: 1, scene: 51304, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]哈哈哈哈！\n不然鸽子怎么会落在你头上呢！" }, 
    510166: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "你气呼呼地赶走鸽子。" },
    510167: { nxId: 1, scene: 51304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]让我看看你画了什么。" }, 
    510168: { nxId: 1, scene: 51304, doing: 2, item: 217009, music: "", sound: "", txt: "[程昱川]额……" }, 
    510169: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "你走到程昱川身边，程昱川赶紧扯\n下画纸叠了起来。" },
    510170: { nxId: 1, scene: 51304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]干嘛呀，为什么不给我看？" }, 
    510171: { nxId: 1, scene: 51304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]额，我把你的照片删了。\n这个就给我自己独自欣赏吧。" }, 
    510172: { nxId: 1, scene: 51304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你画了什么？快给我看！" }, 
    510173: { nxId: 1, scene: 51304, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]咳咳，\n我们还是去下一个景点打卡吧。" }, 
    510174: { nxId: 1, scene: 51304, doing: 2, item: 211002, music: "", sound: "", txt: "[我]给！我！看！" }, 
    510175: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "程昱川勉为其难地把画递给了你。" },
    //插图神鸟图，等待替换
    510176: { nxId: 1, scene: 51304, doing: 5, item: 51007, music: "", sound: "", txt: "插图" },

    510177: { nxId: 1, scene: 51304, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你就给我画了这个？" }, 
    510178: { nxId: 1, scene: 51304, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]我挺喜欢的。\n你不觉得有种毕加索的神韵吗？" }, 
    510179: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "你低头仔细看了看画，完全就是涂\n鸦。你抬头想要质问程昱川，却发\n现他已经在往远处逃走……" },
    510180: { nxId: 1, scene: 51304, doing: 2, item: 211002, music: "", sound: "", txt: "[我]来，你过来！" }, 
    510181: { nxId: 1, scene: 51304, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]不去！" }, 
    510182: { nxId: 1, scene: 51304, doing: 2, item: 211005, music: "", sound: "", txt: "[我]怕什么，我把画还给你啊！" },
    510183: { nxId: 1, scene: 51304, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]你说什么……\n我听不见，今天风好大啊……" }, 
    510184: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "程昱川边说边退，你也不再言语，\n冷笑一声，起身追杀程昱川去了。" },
    510185: { nxId: 510243, scene: 51304, doing: 2, item: 212403, music: "", sound: "", txt: "[画家]等等，嘿！你们，把笔还给我啊！" },

    //特殊分支
    //程4
    510186: { nxId: 1, scene: 51304, doing: 7, item: 71008, music: "", sound: "", txt: "好感度" },
    510187: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "程昱川走到一位画家旁边，不知说\n了什么。画家把画笔递给了程昱川。" },
    510188: { nxId: 1, scene: 51304, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（竟然还真得被他说动了）" }, 
    510189: { nxId: 1, scene: 51304, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（程昱川这个流氓，画画的样子还\n   挺像回事。）" }, 
    510190: { nxId: 1, scene: 51304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好了没有？" }, 
    510191: { nxId: 1, scene: 51304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]再过一会儿。" },
    510192: { nxId: 1, scene: 51304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]很累啊……" }, 
    510193: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "你一边洒着鸟食，鸽子被走过的行\n人惊起又落下，一只鸽子落在了你\n的头上。" },
    510194: { nxId: 1, scene: 51304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]不要动！" },
    510195: { nxId: 1, scene: 51304, doing: 2, item: 211002, music: "", sound: "", txt: "[我]干什么？它在啄我！" }, 
    510196: { nxId: 1, scene: 51304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]没有没有，\n这个鸽子很亲人的，它跟你有缘。" },
    510197: { nxId: 1, scene: 51304, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]不然为什么那么多人，\n只飞到你头上。" }, 
    510198: { nxId: 1, scene: 51304, doing: 2, item: 211003, music: "", sound: "", txt: "[我]我感到它对我充满了恶意！" }, 
    510199: { nxId: 1, scene: 51304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]这个画面很好看，我得画下来……\n十分钟，不，五分钟就好。" }, 
    510200: { nxId: 1, scene: 51304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]真的吗？" }, 
    510201: { nxId: 1, scene: 51304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我保证我给你画的特别好看。" }, 
    510202: { nxId: 1, scene: 51304, doing: 2, item: 211003, music: "", sound: "", txt: "[我]那你快点，它刚刚吃了很多东西，\n我很担心啊……" }, 
    510203: { nxId: 1, scene: 51304, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]你身体不要那么僵硬，\n摆个美一点的姿势嘛。" }, 
    510204: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "你一个趔趄，鸽子被惊走了，有什\n么东西掉了下来……" },
    510205: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "你伸手摸摸头发，却在头顶摸到了\n一颗鸽子食。" },
    510206: { nxId: 1, scene: 51304, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（刚刚程昱川摸了我的头……）" }, 
    510207: { nxId: 1, scene: 51304, doing: 2, item: 211002, music: "", sound: "", txt: "[我]程、昱、川！\n你竟然在我的头上喂鸽子？！" }, 
    510208: { nxId: 1, scene: 51304, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]哈哈哈哈！\n不然鸽子怎么会落在你头上呢！" }, 
    510209: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "你气呼呼地赶走鸽子。" },
    510210: { nxId: 1, scene: 51304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]让我看看你画了什么。" }, 
    510211: { nxId: 1, scene: 51304, doing: 2, item: 217009, music: "", sound: "", txt: "[程昱川]额……" }, 
    510212: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "你走到程昱川身边，程昱川赶紧扯\n下画纸叠了起来。" },
    510213: { nxId: 1, scene: 51304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]干嘛呀，为什么不给我看？" }, 
    510214: { nxId: 1, scene: 51304, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]额，我把你的照片删了。\n这个就给我自己独自欣赏吧。" }, 
    510215: { nxId: 1, scene: 51304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你画了什么？快给我看！" }, 
    510216: { nxId: 1, scene: 51304, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]咳咳，\n我们还是去下一个景点打卡吧。" }, 
    510217: { nxId: 1, scene: 51304, doing: 2, item: 211002, music: "", sound: "", txt: "[我]给！我！看！" }, 
    510218: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "程昱川勉为其难地把画递给了你。" },
    //插图神鸟图，等待替换
    510219: { nxId: 1, scene: 51304, doing: 5, item: 51007, music: "", sound: "", txt: "插图" },

    510220: { nxId: 1, scene: 51304, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你就给我画了这个？" }, 
    510221: { nxId: 1, scene: 51304, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]我挺喜欢的。\n你不觉得有种毕加索的神韵吗？" }, 
    510222: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "你低头仔细看了看画，完全就是涂\n鸦。你抬头想要质问程昱川，却发\n现他已经在往远处逃走……" },
    510223: { nxId: 1, scene: 51304, doing: 2, item: 211002, music: "", sound: "", txt: "[我]来，你过来！" }, 
    510224: { nxId: 1, scene: 51304, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]不去！" }, 
    510225: { nxId: 1, scene: 51304, doing: 2, item: 211005, music: "", sound: "", txt: "[我]怕什么，我把画还给你啊！" },
    510226: { nxId: 1, scene: 51304, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]你说什么……\n我听不见，今天风好大啊……" }, 
    510227: { nxId: 1, scene: 51304, doing: 1, item: 0, music: "", sound: "", txt: "程昱川边说边退，你也不再言语，\n冷笑一声，起身追杀程昱川去了。" },
    510228: { nxId: 510243, scene: 51304, doing: 2, item: 212403, music: "", sound: "", txt: "[画家]等等，嘿！你们，把笔还给我啊！" },

    //小火车上
    510243: { nxId: 510229, scene: 51401, doing: 0, item: 0, music: "haha2", sound: "", txt: "背景初始化" },
    510229: { nxId: 1, scene: 51404, doing: 1, item: 0, music: "", sound: "", txt: "一辆小火车慢悠悠地开过来，停靠\n在站台。程昱川拉着你跳了上去。" }, //补小火车音效
    510230: { nxId: 1, scene: 51404, doing: 2, item: 217004, music: "", sound: "", txt: "[程昱川]唔，这个状况……" },
    510231: { nxId: 1, scene: 51404, doing: 1, item: 0, music: "", sound: "", txt: "你环顾四周，车厢里多是卿卿我我\n的情侣。" },
    510232: { nxId: 1, scene: 51404, doing: 2, item: 211003, music: "", sound: "", txt: "[我]虐狗圣地啊……" },
    510233: { nxId: 1, scene: 51404, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]幸好……咱俩看起来也是一对。" },

    510234: { nxId: 1, scene: 51404, doing: 4, item: 45106, music: "", sound: "", txt: "分支选择" },
    //A
    510235: { nxId: 1, scene: 51404, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]哈哈，我可以耐心的等到那个时候。" },
    510236: { nxId: 510244, scene: 51404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哼，迷之自信。" },
    //B
    //正常分支
    510237: { nxId: 1, scene: 51404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]晓璐……其实我想说，\n跟你在一起真的挺开心。" },
    510238: { nxId: 1, scene: 51404, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（这是要对我表白了吗？）" },
    //程2
    510239: { nxId: 510244, scene: 51404, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },
    //特殊分支
    510240: { nxId: 1, scene: 51404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]晓璐……其实我想说，\n跟你在一起真的挺开心。" },
    510241: { nxId: 1, scene: 51404, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（这是要对我表白了吗？）" },
    //程3
    510242: { nxId: 510244, scene: 51404, doing: 7, item: 71007, music: "", sound: "", txt: "好感度" },

    510244: { nxId: 1, scene: 51404, doing: 1, item: 0, music: "", sound: "", txt: "一阵风吹过，你忽的打了个冷战，\n手一滑，你的手机掉出了窗外。" }, 
    510245: { nxId: 1, scene: 51404, doing: 2, item: 211003, music: "", sound: "", txt: "[我]我的手机！" },
    510246: { nxId: 1, scene: 51404, doing: 2, item: 217004, music: "", sound: "", txt: "[程昱川]我去捡！" },
    510247: { nxId: 1, scene: 51404, doing: 1, item: 0, music: "", sound: "", txt: "程昱川一个箭步下了车，就去捡你\n的手机。他刚跳下车，小火车一声\n鸣笛，慢悠悠地开了起来。" },//补鸣笛
    510248: { nxId: 1, scene: 51404, doing: 2, item: 211003, music: "", sound: "", txt: "[我]程昱川！" },
    510249: { nxId: 1, scene: 51404, doing: 1, item: 0, music: "", sound: "", txt: "你探头看着窗外，程昱川拿着手机\n追了几步，但明显快不过火车。只\n能眼睁睁地看着你的方向。" }, 
    510250: { nxId: 1, scene: 51404, doing: 2, item: 211003, music: "", sound: "", txt: "[我]这怎么办！" },
    510251: { nxId: 1, scene: 51404, doing: 1, item: 0, music: "", sound: "", txt: "小火车驶过一个弯道，你还在焦急\n地想着要不要下一站先下车，突然\n听见了一阵自行车铃声。" },//自行车铃声
    510252: { nxId: 1, scene: 51404, doing: 1, item: 0, music: "", sound: "", txt: "你看着窗外，程昱川飞快地骑着一\n辆自行车，嘴里叼着一枝不知道哪\n来的花。 " },
    510253: { nxId: 1, scene: 51404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]程昱川？！" },
    510254: { nxId: 1, scene: 51404, doing: 1, item: 0, music: "", sound: "", txt: "车靠站了，程昱川抛下自行车跳上\n了火车，将花递到你面前。 " },
    510255: { nxId: 1, scene: 51404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]你听一下。" },
    510256: { nxId: 1, scene: 51404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]听什么？" },
    510257: { nxId: 1, scene: 51404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]花在跟你说话啊。" },
    510258: { nxId: 1, scene: 51404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]噗……好吧，它说什么？" },
    510259: { nxId: 1, scene: 51404, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]它在说，小仙女下午好啊！" },
    510260: { nxId: 1, scene: 51404, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]请问你掉的手机，是金手机呢，还\n是银手机呢？" },

    510261: { nxId: 1, scene: 51404, doing: 4, item: 45107, music: "", sound: "", txt: "分支选择" },
    //A
    510262: { nxId: 1, scene: 51404, doing: 1, item: 0, music: "", sound: "", txt: "程昱川把手机递给了你。 " },
    510263: { nxId: 1, scene: 51404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]你可真是个老实孩子。" },
    510264: { nxId: 1, scene: 51404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哼，你这个人花招太多。\n我偏不给你得逞。" },
    510265: { nxId: 1, scene: 51404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]哈哈，其实昨天晚宴的时候，嗯……" },
    510266: { nxId: 1, scene: 51404, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]我是真的收到了两个当答谢礼物的\n手机呢。" },
    510267: { nxId: 1, scene: 51404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那么，河神程先生啊，我现在再掉\n一次还来得及吗？" },
    510268: { nxId: 1, scene: 51404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]不了，河神踩单车踩得腿疼！" },
    510269: { nxId: 510274, scene: 51404, doing: 1, item: 0, music: "", sound: "", txt: "你们二人放声大笑起来。 " },
    //B
    510270: { nxId: 1, scene: 51404, doing: 1, item: 0, music: "", sound: "", txt: "程昱川笑嘻嘻地把手机还给你。 " },
    510271: { nxId: 1, scene: 51404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]昨晚晚宴的时候，我是真的收到了\n两个当答谢礼物的手机。" },
    510272: { nxId: 1, scene: 51404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你刚才说了，现在都是我的了。" },
    510273: { nxId: 1, scene: 51404, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]没问题！" },
   
    510274: { nxId: 1, scene: 51404, doing: 4, item: 45108, music: "", sound: "", txt: "分支选择" },
    //A
    510275: { nxId: 1, scene: 51404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我一时吃不准你这是在表扬我，还\n是打算黑我。" },
    510276: { nxId: 1, scene: 51404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这时候倒谦虚了？" },
    510277: { nxId: 1, scene: 51404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我只是舍得用心来对喜欢的人而已。" },
    510278: { nxId: 1, scene: 51404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]这世界上没有不会哄女孩的男人。\n只有用不用心的差别。" },
    510279: { nxId: 1, scene: 51404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]嗯，难得听到你说一句这么有道理\n的话。" },
    510280: { nxId: 1, scene: 51404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]嗯？岂有此理，\n你意思是我不讲道理咯？" },
    510281: { nxId: 1, scene: 51404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]你本来就是个不讲道理的坏人啊。" },
    510282: { nxId: 510292, scene: 51404, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]好吧。\n恋爱中本来也不用讲道理嘛！" },
    //B
    510283: { nxId: 1, scene: 51404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]我盲猜一下，你刚才打算这一站下\n车等我。" },
    510284: { nxId: 1, scene: 51404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]聪明！" },
    510285: { nxId: 1, scene: 51404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]是你聪明……掉了手机的情况下，\n最理性的选择就是这个了。" },
    510286: { nxId: 1, scene: 51404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]太理性的女孩，男人都不太喜欢吧。" },
    510287: { nxId: 1, scene: 51404, doing: 1, item: 0, music: "", sound: "", txt: "程昱川坐了下来，握住你的手。 " },
    510288: { nxId: 1, scene: 51404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]理性也好，感性也好，是因为喜欢\n她，才会喜欢她的感性或者理性，" },
    510289: { nxId: 1, scene: 51404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]而不是反过来……\n为什么要算计那么多呢？" },
    510290: { nxId: 1, scene: 51404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]这话姑娘我爱听。赏！" },
    510291: { nxId: 1, scene: 51404, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]哈哈哈！" },

    510292: { nxId: 1, scene: 51404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]对了，你这自行车哪来的？" },
    510293: { nxId: 1, scene: 51404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]买的啊。" },
    510294: { nxId: 1, scene: 51404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这么快？谁卖给你啊？" },
    510295: { nxId: 1, scene: 51404, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]钱能通神嘛。\n200欧的自行车，没见过吧。" },
    510296: { nxId: 1, scene: 51404, doing: 2, item: 211002, music: "", sound: "", txt: "[我]200欧就这么扔了？\n这么冤大头的人，我也没见过……" },
    510297: { nxId: 1, scene: 51404, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]还不是因为你丢了手机？" },
    510298: { nxId: 1, scene: 51404, doing: 1, item: 0, music: "", sound: "", txt: "也许是你俩笑得太开心了，周围的\n乘客都转过头，笑嘻嘻看着你们。 " },
    510299: { nxId: 1, scene: 51404, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]你看，变成我们虐狗了。" },
    510300: { nxId: 1, scene: 51404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我不要跟你坐一起！" },
    510301: { nxId: 1, scene: 51404, doing: 1, item: 0, music: "", sound: "", txt: "在笑声中，小火车一路叮叮当当的\n开向目的地。 " },

    //波盖利亚市场
    510302: { nxId: 1, scene: 51501, doing: 0, item: 0, music: "gutingwei", sound: "", txt: "背景初始化" },
    510303: { nxId: 1, scene: 51504, doing: 1, item: 0, music: "", sound: "", txt: "映入眼帘的是一座五颜六色的市场。" }, 
    510304: { nxId: 1, scene: 51504, doing: 1, item: 0, music: "", sound: "", txt: "鳞次栉比的摊位上，各色水果、饮\n料、小吃、肉食琳琅满目，人群熙\n熙攘攘，摩肩接踵。" }, 
    510305: { nxId: 1, scene: 51504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这看上去像个菜市场啊！" },
    510306: { nxId: 1, scene: 51504, doing: 2, item: 217004, music: "", sound: "", txt: "[程昱川]不能这么说。" },
    510307: { nxId: 1, scene: 51504, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]这里可是有着近200年历史的……\n菜市场。" },
    510308: { nxId: 1, scene: 51504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……\n好在这里没有异味。都是果香啊！" },
    510309: { nxId: 1, scene: 51504, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]进去尝尝吧，\n这里的小吃非常有名哦。" },
    510310: { nxId: 1, scene: 51504, doing: 2, item: 211004, music: "", sound: "", txt: "[我]好啊好啊！" },
    510311: { nxId: 1, scene: 51504, doing: 1, item: 0, music: "", sound: "", txt: "这时一个扛着一扇猪肉的大汉从你\n们身边走过。" }, 
    510312: { nxId: 1, scene: 51504, doing: 2, item: 211004, music: "", sound: "", txt: "[我]？？？\n真的是菜市场诶！" },
    510313: { nxId: 1, scene: 51504, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]西班牙是著名的农业大国，这里也\n是巴塞新鲜食材的汇聚地。" },
    510314: { nxId: 1, scene: 51504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]真是佩服欧洲人，菜市场也能弄成\n旅游景点。" },
    510315: { nxId: 1, scene: 51504, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]哈哈，商业意识嘛。" },
    510316: { nxId: 1, scene: 51504, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]来波盖利亚的话，饮料、火腿、生\n蚝都要试一试。物美价廉哦！" },

    510317: { nxId: 1, scene: 51504, doing: 4, item: 45109, music: "", sound: "", txt: "分支选择" },
    //A
    510318: { nxId: 1, scene: 51504, doing: 1, item: 0, music: "", sound: "", txt: "你放眼望去，\n各个摊位上都有着价格表。" }, 
    510319: { nxId: 1, scene: 51504, doing: 1, item: 0, music: "", sound: "", txt: "果汁大概1欧多，火腿1到2欧，\n炸过的海鲜包一大包5到6欧，生\n蚝6到7欧，比你想象的便宜。" }, 
    510320: { nxId: 1, scene: 51504, doing: 2, item: 211003, music: "", sound: "", txt: "[我]上次在格拉西亚大道，\n已经重创了我的荷包……" },
    510321: { nxId: 510327, scene: 51504, doing: 2, item: 211003, music: "", sound: "", txt: "[我]这里怕是要重创我的胃了……" },
    //B
    510322: { nxId: 1, scene: 51504, doing: 1, item: 0, music: "", sound: "", txt: "你一眼看过去，水果、五颜六色的\n面包，还有各种油炸的小吃。" }, 
    510323: { nxId: 1, scene: 51504, doing: 1, item: 0, music: "", sound: "", txt: "还有五彩塑料一样的糖果。最著名\n的西班牙火腿，在很多摊位上挂得\n到处都是。" }, 
    510324: { nxId: 1, scene: 51504, doing: 1, item: 0, music: "", sound: "", txt: "橱窗里摆放着各种配好面包片、水\n果块的薄如蝉翼的火腿片，或者和\n饼干、薯条卷成手卷的形状。" }, 
    510325: { nxId: 1, scene: 51504, doing: 2, item: 211003, music: "", sound: "", txt: "[我]上次在格拉西亚大道，\n已经重创了我的荷包……" },
    510326: { nxId: 1, scene: 51504, doing: 2, item: 211003, music: "", sound: "", txt: "[我]这里怕是要重创我的胃了……" },

    510327: { nxId: 1, scene: 51504, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]想好了先来点啥？" },
    510328: { nxId: 1, scene: 51504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]感觉选择好多，你有什么推荐？" },
    510329: { nxId: 1, scene: 51504, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]试试生蚝？欧洲人最自豪的美食。" },

    510330: { nxId: 1, scene: 51504, doing: 4, item: 45110, music: "", sound: "", txt: "分支选择" },
    //A
    510331: { nxId: 1, scene: 51504, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]哈哈，没错。" },
    510332: { nxId: 1, scene: 51504, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]欧洲人认为，不做任何加工的“生”\n蚝才是最纯粹的。" },
    510333: { nxId: 1, scene: 51504, doing: 2, item: 211015, music: "", sound: "", txt: "[我]……" },
    510334: { nxId: 1, scene: 51504, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]甚至有不少美食家，喜欢在海边直\n接吃生蚝。" },
    510335: { nxId: 1, scene: 51504, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]为了那种带腥味的海的味道。" },
    510336: { nxId: 510998, scene: 51504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谢谢你，彻底打消了我尝试的勇气。" },
    //B
    510337: { nxId: 1, scene: 51504, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]那我买两个，我们一人一个。" },
    510338: { nxId: 1, scene: 51504, doing: 1, item: 0, music: "", sound: "", txt: "你拿起这个无比新鲜的生蚝，学着\n程昱川仰头一饮而尽。" }, 
    510339: { nxId: 1, scene: 51504, doing: 1, item: 0, music: "", sound: "", txt: "一股难以名状的咸腥味直冲喉咙，\n你硬着头皮吞了下去。" }, 
    510340: { nxId: 1, scene: 51504, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]哈哈，怎么样？" },
    510341: { nxId: 510998, scene: 51504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]真是难以忘怀。" },

    //波盖利亚市场内
    510998: { nxId: 510342, scene: 51601, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    510342: { nxId: 1, scene: 51604, doing: 1, item: 0, music: "", sound: "", txt: "你们二人继续往前走，来到了一个\n漂亮的火腿摊前。" }, 
    510343: { nxId: 1, scene: 51604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]来西班牙就是为了这个。" },
    510344: { nxId: 1, scene: 51604, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]没错，西班牙火腿闻名于世。\n不过它们也是生吃的。" },
    510345: { nxId: 1, scene: 51604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这我倒知道，配红酒或者奶酪都是\n绝佳的美味啊。" },
    510346: { nxId: 1, scene: 51604, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]说得没错。入乡随俗，来试试吧。" },
    510347: { nxId: 1, scene: 51604, doing: 1, item: 0, music: "", sound: "", txt: "程昱川点了火腿片配香草芝士，薄\n得透明的火腿片放在芝士上，和烤\n的香喷喷的面包片一起。" }, 
    510348: { nxId: 1, scene: 51604, doing: 1, item: 0, music: "", sound: "", txt: "火腿那咸鲜的清香，在浓郁的芝士\n和焦香的面包的衬托下，在整个口\n腔化开了来，" }, 
    510349: { nxId: 1, scene: 51604, doing: 1, item: 0, music: "", sound: "", txt: "脆、柔、鲜、香，一股脑在你的舌\n尖打起转来。" }, 
    510350: { nxId: 1, scene: 51604, doing: 2, item: 211005, music: "", sound: "", txt: "[我]哇……" },
    510351: { nxId: 1, scene: 51604, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]是不是很棒？" },
    510352: { nxId: 1, scene: 51604, doing: 2, item: 211004, music: "", sound: "", txt: "[我]果然美食还是要到当地吃呀。" },
    510353: { nxId: 1, scene: 51604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我送你一些回去当礼物好了。" },
    510354: { nxId: 1, scene: 51604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]火腿？" },
    510355: { nxId: 1, scene: 51604, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]没错。\n毕竟，我可是火腿的行家呀。" },

    510356: { nxId: 1, scene: 51604, doing: 4, item: 45111, music: "", sound: "", txt: "分支选择" },
    //A
    510357: { nxId: 510371, scene: 51604, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]那咱们去试试这里的海鲜饭吧。" },
    //B
    510358: { nxId: 1, scene: 51604, doing: 1, item: 0, music: "", sound: "", txt: "程昱川拉着你，你们两人一本正经\n地挑选起了火腿。" }, 
    510359: { nxId: 1, scene: 51604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你先去旁边逛逛吧。" },
    510360: { nxId: 1, scene: 51604, doing: 1, item: 0, music: "", sound: "", txt: "程昱川推着你离开，你在附近闲逛\n着。过了一会儿，程昱川拿着一盒\n片好的火腿走过来。" }, 
    510361: { nxId: 1, scene: 51604, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]这是我精心为你挑选的上等火腿哦。" },
    510362: { nxId: 1, scene: 51604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]真的好香，这不便宜吧？" },
    510363: { nxId: 1, scene: 51604, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]老板看我长得帅，给了我友情价，\n只要二百欧。" },
    510364: { nxId: 1, scene: 51604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我查了一下，国内五六公斤的整条\n火腿加上包装费也就1500块。" },
    510365: { nxId: 1, scene: 51604, doing: 2, item: 217004, music: "", sound: "", txt: "[程昱川]什么？" },
    510366: { nxId: 1, scene: 51604, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈，你看看周围，" },
    510367: { nxId: 1, scene: 51604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这里都是游客，老板见到了你这样\n的，一看就是人傻钱多的类型。" },
    510368: { nxId: 1, scene: 51604, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你不能拿批发比零售啊，而且你也\n不确定正不正宗嘛……" },
    510369: { nxId: 1, scene: 51604, doing: 2, item: 211001, music: "", sound: "", txt: "[我]刚刚是谁在吹……" },
    510370: { nxId: 1, scene: 51604, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]咳咳，你肚子也饿了吧，咱们去吃\n吃正宗的海鲜饭如何？" },

    //波盖利亚市场外
    510371: { nxId: 1, scene: 51801, doing: 0, item: 0, music: "haha", sound: "", txt: "背景初始化" },
    510372: { nxId: 1, scene: 51804, doing: 1, item: 0, music: "", sound: "", txt: "程昱川和你你走进了市场深处，这\n里都是各种美食店。" },
    510373: { nxId: 1, scene: 51804, doing: 1, item: 0, music: "", sound: "", txt: "薄薄的肉片，油脂化开，榛子的香\n气混合着肉的鲜美，在海鲜饭里随\n着热气肆意沸腾；" },
    510374: { nxId: 1, scene: 51804, doing: 1, item: 0, music: "", sound: "", txt: "Q弹的大米，雪白的虾仁，新鲜的\n牡蛎和乌鱼脚交错混合，还有土豆\n浓汤，腊肠和土豆融合在一起，" },
    510375: { nxId: 510927, scene: 51804, doing: 1, item: 0, music: "", sound: "e", txt: "再撒上一把辣椒粉，热腾腾地来一\n口，令人难忘。" },
    //海鲜饭
    510927: { nxId: 510376, scene: 51804, doing: 5, item: 51010, music: "", sound: "", txt: "插图" },
    510376: { nxId: 1, scene: 51804, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]这么一盘，香不香？" },
    510377: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]一香胖十斤啊……" },
    510378: { nxId: 1, scene: 51804, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]你可以吃一点，剩下的给我。" },
    510379: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那好吧。" },
    510380: { nxId: 1, scene: 51804, doing: 1, item: 0, music: "", sound: "", txt: "一刻钟后。" },
    510381: { nxId: 1, scene: 51804, doing: 2, item: 211005, music: "", sound: "", txt: "[我]哇！好吃！" },
    510382: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]……\n你全吃完了。一点没剩。" },
    510383: { nxId: 1, scene: 51804, doing: 2, item: 211002, music: "", sound: "", txt: "[我]还不都是因为你。" },

    510384: { nxId: 1, scene: 51804, doing: 4, item: 45112, music: "", sound: "", txt: "分支选择" },
    //A
    510385: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]……\n人在家中坐，锅从天上来……" },
    510386: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不是你带我来吃，我能凭空多长这\n么多肉肉？" },
    510387: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你之前说过，伯母是个扣锅高手。" },
    510388: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没错。怎么了？" },
    510389: { nxId: 1, scene: 51804, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]没什么，\n只是觉得，你尽得伯母真传。" },
    510390: { nxId: 510393, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哼！" },
    //B
    510391: { nxId: 1, scene: 51804, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]还算有自知之明嘛。" },
    510392: { nxId: 1, scene: 51804, doing: 2, item: 211004, music: "", sound: "", txt: "[我]要吃饱了才有力气减肥嘛！" },//似曾相识

    510393: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你已经玩了几天，觉得巴塞怎么样？" },
    510394: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]挺喜欢的，很文艺的城市，但这个\n市场里，又有这么重的烟火气。" },
    510395: { nxId: 1, scene: 51804, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]我猜也是。" },
    510396: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哼，马后炮。" },
    510397: { nxId: 1, scene: 51804, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]哈哈，看你这么开心，就知道你喜\n欢。不要质疑我的观察力哦。" },
    510398: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这倒是，你的眼力劲儿是挺不错。" },
    510399: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]看到那边的女士没有。" },
    510400: { nxId: 1, scene: 51804, doing: 1, item: 0, music: "", sound: "", txt: "程昱川示意你看前桌的女士，她一\n个人坐在座位上。" },
    510401: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]怎么了？" },
    510402: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你看出什么了吗？" },
    510403: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]额……很漂亮？" },
    510404: { nxId: 1, scene: 51804, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]……\n她是拉小提琴的。" },
    510405: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你怎么看出来的？" },
    510406: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]首先你看她的坐姿，手肘，肩部自\n然下沉，挺背含胸。" },
    510407: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]但凡学过仪态的，都会这样吧。" },
    510408: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]没错。但她的肩膀却不一样高……" },
    510409: { nxId: 1, scene: 51804, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]这是因为她经常一侧肩膀受力。" },
    510410: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]真的诶。" },
    510411: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]还有，你看她的左手指甲，\n修的很短……" },
    510412: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]右手的指甲却没有这么短，左手除\n了拇指，都有茧子。" },
    510413: { nxId: 1, scene: 51804, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]这是因为她的左手需要按弦，而右\n手不需要！" },

    510414: { nxId: 1, scene: 51804, doing: 4, item: 45113, music: "", sound: "", txt: "分支选择" },
    //A
    510415: { nxId: 1, scene: 51804, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]一般一般，我的确是有那么一点敏\n锐，跟我的眼光一样。" },
    510416: { nxId: 510426, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……还有你的自恋也是。" },
    //B
    510417: { nxId: 1, scene: 51804, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]嗯？你在意吗？" },
    510418: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我是为小姐姐担心。毕竟你是一个\n这么危险的人。" },
    510419: { nxId: 510426, scene: 51804, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]你看上去倒是很像吃醋的人。" },
    //C
    510420: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我什么乐器不会啊，不过，这小提\n琴我还真没怎么碰过。" },
    510421: { nxId: 1, scene: 51804, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]我当时往那一站，把小提琴往肩上\n一抗，拉动琴弓……" },
    510422: { nxId: 1, scene: 51804, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]我妈就嘲笑我像锯木头的工人……" },
    510423: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]伯母真有幽默感。\n不过，看你那么专业的样子……" },
    510424: { nxId: 1, scene: 51804, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]没吃过猪肉还没见过猪跑吗？" },
    510425: { nxId: 1, scene: 51804, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈哈！" },

    510426: { nxId: 1, scene: 51804, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]但是呢，\n这些都还不是最重要的判断依据。" },
    510427: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那什么才是？" },
    510428: { nxId: 1, scene: 51804, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]最重要的是，\n她的脚边放着小提琴盒子……" },
    510429: { nxId: 1, scene: 51804, doing: 2, item: 211002, music: "", sound: "", txt: "[我]……你这个骗子！！" },
    510430: { nxId: 1, scene: 51804, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]怪我么？这么大个提琴盒子自己不\n注意，哈哈哈！还有，她叫安娜！" },
    510431: { nxId: 1, scene: 51804, doing: 1, item: 0, music: "", sound: "", txt: "这次你学精了，在小提琴盒子上搜\n索到了名字，安娜。" },
    510432: { nxId: 1, scene: 51804, doing: 2, item: 211002, music: "", sound: "", txt: "[我]哼！" },
    510433: { nxId: 1, scene: 51804, doing: 1, item: 0, music: "", sound: "", txt: "这时，安娜拿出自己的小提琴，站\n到街边一个显眼的位置，像是要开\n始演奏了。" },
    510434: { nxId: 1, scene: 51804, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]想不想听一曲？" },
    510435: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你要干什么？" },
    510436: { nxId: 1, scene: 51804, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]就说想不想嘛。" },
    510437: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]想。" },
    510438: { nxId: 1, scene: 51804, doing: 1, item: 0, music: "", sound: "", txt: "程昱川拉着你走到安娜身边。" },
    510439: { nxId: 1, scene: 51804, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]您似乎是一位精通小提琴的行家。" },
    510440: { nxId: 1, scene: 51804, doing: 2, item: 212301, music: "", sound: "", txt: "[安娜]爱好而已，不是那么精通。" },
    510441: { nxId: 1, scene: 51804, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]我猜您正在想《哈巴涅拉舞曲》。" },
    510442: { nxId: 1, scene: 51804, doing: 2, item: 212301, music: "", sound: "", txt: "[安娜]您是怎么猜到的？真不可思议！" },
    510443: { nxId: 1, scene: 51804, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]哈哈我有超能力。\n这是我的女朋友。" },
    510444: { nxId: 1, scene: 51804, doing: 2, item: 212301, music: "", sound: "", txt: "[安娜]她真是个美人儿。" },
    510445: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]程昱川，你这个家伙。" },
    510446: { nxId: 1, scene: 51804, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]我想邀请她跳一段舞，不知能否请\n您帮我们演奏浪漫的一曲呢？ " },
    510447: { nxId: 1, scene: 51804, doing: 2, item: 212301, music: "", sound: "", txt: "[安娜]很荣幸。 " },
    510448: { nxId: 1, scene: 51804, doing: 1, item: 0, music: "", sound: "", txt: "安娜架起了小提琴，\n而程昱川绅士的对你伸出手。" },

    510449: { nxId: 1, scene: 51804, doing: 4, item: 45114, music: "XS", sound: "", txt: "分支选择" },
    //A
    510450: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我怕我踩你的脚……" },
    510451: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]尽量踩。" },
    510452: { nxId: 1, scene: 51804, doing: 2, item: 211003, music: "", sound: "", txt: "[我]我还是有点害怕……" },
    510453: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]怕什么？" },
    510454: { nxId: 1, scene: 51804, doing: 2, item: 211003, music: "", sound: "", txt: "[我]我跳得很糟糕，跳错了很丢人吧。" },
    510455: { nxId: 1, scene: 51804, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]跳舞嘛，开心就好。\n谁在意跳得对不对呢。" },
    510456: { nxId: 1, scene: 51804, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]相信我，他们只会注意你的魅力，\n而不是你的舞步。" },
    510457: { nxId: 510462, scene: 51804, doing: 1, item: 0, music: "", sound: "", txt: "你犹豫着伸出手，程昱川彬彬有礼\n地执过你的手，将你带到街边空地。" },

    //B
    //正常分支
    510458: { nxId: 1, scene: 51804, doing: 1, item: 0, music: "", sound: "", txt: "你大方地伸出手，程昱川彬彬有礼\n地执过你的手，将你带到街边空地。" },
    //程1
    510459: { nxId: 510462, scene: 51804, doing: 7, item: 71005, music: "", sound: "", txt: "好感度" },
    //特殊分支
    510460: { nxId: 1, scene: 51804, doing: 1, item: 0, music: "", sound: "", txt: "你大方地伸出手，程昱川彬彬有礼\n地执过你的手，将你带到街边空地。" },
    //程2
    510461: { nxId: 1, scene: 51804, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },

    510462: { nxId: 1, scene: 51804, doing: 1, item: 0, music: "", sound: "", txt: "程昱川搂住你的腰肢，带着你在阳\n光下旋转。你的裙摆翩跹，周围的\n卖艺人也跟着一起奏响了音乐。" },
    510463: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你怎么知道安娜在想那首曲子？" },
    510464: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]因为她的脚尖和手指一直在打这个\n曲子的拍子。" },
    510465: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你这根本就是占便宜嘛……" },
    510466: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我这是观察细致入微。" },
    510467: { nxId: 1, scene: 51804, doing: 1, item: 0, music: "", sound: "", txt: "程昱川揽着你的腰，转了一个圈。" },
    510468: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你真的是第一次跳吗？" },
    510469: { nxId: 1, scene: 51804, doing: 2, item: 211004, music: "", sound: "", txt: "[我]怎么样？" },
    510470: { nxId: 1, scene: 51804, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]你很聪明，学的很快。" },
    510471: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你节奏这么慢，要是还跟不上，\n简直就是傻瓜了。" },
    510472: { nxId: 1, scene: 51804, doing: 6, item: 65102, music: "", sound: "", txt: "CG动画" },//街边乱舞
    510473: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]晓璐，虽然时间很短，但我们一起\n经历也不少了……" },
    510474: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]过两天你就要回国了，以后见面不\n知道什么时候。" },
    510475: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]有句话我一直犹豫着要不要告诉你。" },
    510476: { nxId: 1, scene: 51804, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（终于！）" },

    510477: { nxId: 1, scene: 51804, doing: 4, item: 45115, music: "", sound: "", txt: "分支选择" },
    //A
    510478: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我想请你做我的女朋友，可以吗？" },
    510479: { nxId: 1, scene: 51804, doing: 2, item: 211004, music: "", sound: "", txt: "[我]我可以拒绝吗？" },
    510480: { nxId: 1, scene: 51804, doing: 1, item: 0, music: "", sound: "", txt: "程昱川狡黠地笑了起来。" },
    510481: { nxId: 1, scene: 51804, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]不可以。" },
    510482: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]真是不讲理。" },
    510483: { nxId: 1, scene: 51804, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]爱就是不讲理的啊。" },
    510484: { nxId: 510492, scene: 51804, doing: 1, item: 0, music: "", sound: "", txt: "程昱川笑了。他带你的舞步变得更\n加温柔，但却更加有力。" },
    //B
    510485: { nxId: 1, scene: 51804, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]哇，那我可不可以要求……" },
    510486: { nxId: 1, scene: 51804, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你想清楚再开口哦。" },
    510487: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]……请你做我的女朋友。" },
    510488: { nxId: 1, scene: 51804, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这还差不多。" },
    510489: { nxId: 1, scene: 51804, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]那么说，你是答应了？" },
    510490: { nxId: 1, scene: 51804, doing: 2, item: 211004, music: "", sound: "", txt: "[我]嗯！" },
    510491: { nxId: 1, scene: 51804, doing: 1, item: 0, music: "", sound: "", txt: "程昱川笑了。他带你的舞步变得更\n加温柔，但却更加有力。" },

    //新酒店房间（程日）
    510492: { nxId: 1, scene: 51701, doing: 0, item: 0, music: "haha", sound: "", txt: "背景初始化" },
    510493: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "接下来的两天，你在程昱川的陪伴\n下，徜徉在巴塞罗那，享受着爱情\n的无限甜美。" },
    510494: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "相处的时间如此美好，但很快，归\n家的日子到了……" },
    510495: { nxId: 1, scene: 51704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]酒店给你换的这房间还挺不错嘛。" },
    510496: { nxId: 1, scene: 51704, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]其实我更想念我们一起住的那间。" },
    510497: { nxId: 1, scene: 51704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哼哼……你那点坏心思……" },
    510498: { nxId: 1, scene: 51704, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]晓璐，你明天就要走了。" },
    510499: { nxId: 1, scene: 51704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是啊，等会我就要回房间收拾行李。" },
    510500: { nxId: 1, scene: 51704, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]嗯，美好的时光总是短暂啊……" },
    510501: { nxId: 1, scene: 51704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]嗯，是啊……" },
    510502: { nxId: 1, scene: 51704, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你是不是已经开始舍不得我了？" },
    510503: { nxId: 1, scene: 51704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]呸，你还是快点去洗洗睡吧。" },
    510504: { nxId: 1, scene: 51704, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]一个人洗澡，我害怕。" },
    510505: { nxId: 1, scene: 51704, doing: 2, item: 211002, music: "", sound: "", txt: "[我]流氓！想的美！" },
    510506: { nxId: 1, scene: 51704, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]我还没说我要干嘛呢！" },
    510507: { nxId: 1, scene: 51704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我还不知道你吗？" },
    510508: { nxId: 1, scene: 51704, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]对了，你回家后打算怎么跟伯母介\n绍我呀？" },

    510509: { nxId: 1, scene: 51704, doing: 4, item: 45116, music: "", sound: "", txt: "分支选择" },
    //A
    510510: { nxId: 1, scene: 51704, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]这样啊……" },
    510511: { nxId: 510522, scene: 51704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你还想怎么样？\n我给她编个故事？快洗澡去。" },
    //B
    510512: { nxId: 1, scene: 51704, doing: 2, item: 217009, music: "", sound: "", txt: "[程昱川]……" },
    510513: { nxId: 1, scene: 51704, doing: 2, item: 211004, music: "", sound: "", txt: "[我]反正我妈妈眼里，是个男的就行。\n我都麻木了。" },
    510514: { nxId: 1, scene: 51704, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]哈哈哈。" },
    510515: { nxId: 1, scene: 51704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]再说你这么能侃会说的，我妈肯定\n被你糊弄得开开心心。" },
    510516: { nxId: 1, scene: 51704, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]把我形容得像个推销保健品的。" },
    510517: { nxId: 510522, scene: 51704, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你觉得你跟他们有很大差别？\n快给我洗澡去！" },
    //C
    510518: { nxId: 1, scene: 51704, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]这样啊……" },
    510519: { nxId: 1, scene: 51704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]毕竟我们交往时间这么短，\n没必要那么快。" },
    510520: { nxId: 1, scene: 51704, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]你说得也有道理。" },
    510521: { nxId: 1, scene: 51704, doing: 2, item: 211002, music: "", sound: "", txt: "[我]有什么道理？\n你快给我洗澡去！" },

    510522: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "你把程昱川推进了浴室，很快，里\n面就传来了水声和程昱川的歌声。" },
    510523: { nxId: 1, scene: 51704, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（搞什么啊，这人的行李箱就这么\n   乱七八糟地扔在这。）" },
    510524: { nxId: 1, scene: 51704, doing: 2, item: 211015, music: "", sound: "doorcell", txt: "[我]（给他收拾一下吧，真是的。）" },
    510525: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "你打开门，酒店服务员站在门外，\n拿着一个包装好的礼物盒。" },
    510526: { nxId: 1, scene: 51704, doing: 2, item: 211501, music: "", sound: "", txt: "[酒店员工]您好，这是程昱川先生的包裹。" },
    510527: { nxId: 1, scene: 51704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好的，我代他收下吧。" },
    510528: { nxId: 1, scene: 51704, doing: 2, item: 211501, music: "", sound: "", txt: "[酒店员工]咦，您是几天前程先生的女朋友？" },
    510529: { nxId: 1, scene: 51704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]什么叫几天前……" },
    510530: { nxId: 1, scene: 51704, doing: 2, item: 211501, music: "", sound: "", txt: "[酒店员工]啊，抱歉。" },
    510531: { nxId: 1, scene: 51704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谢谢。" },
    510532: { nxId: 1, scene: 51704, doing: 2, item: 211501, music: "", sound: "", txt: "[酒店员工]不客气，再见。" },
    510533: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "closedoor", txt: "你关上门。" },
    510534: { nxId: 1, scene: 51704, doing: 2, item: 211501, music: "", sound: "", txt: "[酒店员工]一会要一起的房间，一会又要分开\n的房间，现在又在一起，搞什么？" },
    510535: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "你拿着礼盒回到房间。发现上面别\n着一张卡片，上面是娟秀的女性的\n字体。你一时好奇拿起来看了看。" },
    //乔安娜礼物盒
    510536: { nxId: 1, scene: 51704, doing: 5, item: 51005, music: "", sound: "", txt: "插图" },
    510537: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "亲爱的昱哥哥：\n自从你回到自己家的公司之后，\n我们已经有很久没见面了呢！" },
    510538: { nxId: 510540, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "非常想念我们一起在公路上飙车，\n在学校一起喝酒的时候呢！\n那时我们在一起真的特别开心！" },

    510539: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "" },//废

    510540: { nxId: 510542, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "知道你一直很喜欢St.Vincent，\n我特意去伦敦淘了她的黑胶送你！\n                             爱你的乔安娜" },
    
    510541: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "" },//废

    510542: { nxId: 1, scene: 51704, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这个乔安娜……" },

    510543: { nxId: 1, scene: 51704, doing: 4, item: 45117, music: "", sound: "", txt: "分支选择" },
    //A
    510544: { nxId: 1, scene: 51704, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（一定是他的前女友，这么亲热的\n   口吻，实在太不正常了！）" },
    510545: { nxId: 510549, scene: 51704, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（现在想起来，实在太可疑了，好\n   你个程昱川，你这个混蛋！）" },
    //B
    510546: { nxId: 1, scene: 51704, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（这个口吻有点奇怪，有点小迷妹\n   的感觉啊。）" },
    510547: { nxId: 1, scene: 51704, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（他这样的男人，有几个追求者也\n   属正常吧……）" },
    510548: { nxId: 1, scene: 51704, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（虽然心里很不爽，哼！）" },

    510549: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "wechat", txt: "就在这时，程昱川的手机不断有微\n信提示传来，让本就不安的你更加\n烦躁。" },
    510550: { nxId: 1, scene: 51704, doing: 2, item: 211002, music: "", sound: "wechat", txt: "[我]谁的信息？声音好吵啊。" },
    510551: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "wechat", txt: "你在程昱川床头拿起手机。刚准备\n关掉声音，却不小心看到了弹出来\n的微信信息。" },
    510552: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "乔安娜：\n又错过了见你的机会，这次我会在\n国内等你，真怀念我们……" },//偷看技能get
    510553: { nxId: 1, scene: 51704, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（又是这个乔安娜？）" },
    510554: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "这时你听到程昱川在浴室里叫你：\n晓璐，帮我送一下我的小叮当吧。\n在那个黑色的壁柜里。" },
    510555: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "你打开壁柜，看到夹层里有一个盒\n子的形状。" },
    510556: { nxId: 510999, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "那条微信信息在你的脑海里闪过，\n在你想清楚之前，你已经从夹层中\n找到了一个礼物盒和卡片。" },//偷窃技能get
    //程昱川信
    510999: { nxId: 510557, scene: 51704, doing: 5, item: 51006, music: "", sound: "", txt: "插图" },

    510557: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "To 乔安娜：半年不见，甚是想念。\n礼物是我特意挑给你的。我觉得很\n适合你，希望你喜欢。" },
    510558: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "巴塞的风景很不错，下次可以与你\n一起重游。" },
    510559: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "你打开礼物盒，看到里面是一条钻\n石项链。" },
    510560: { nxId: 1, scene: 51704, doing: 2, item: 211015, music: "Sub", sound: "", txt: "[我]（一起重游……这几天的事情，对\n   他来说根本无足轻重吧。）" },
    510561: { nxId: 1, scene: 51704, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（谁知道他在这里，和多少女人\n   说过一样的话。）" },
    510562: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "你努力地平复呼吸，却发现卡片上\n多了水滴。" },
    510563: { nxId: 1, scene: 51704, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（眼睛怎么这么酸，眼泪怎么那么\n   不听话。）" },
    510564: { nxId: 1, scene: 51704, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（林晓璐，别傻了，他甚至没对你\n   做出任何承诺。）" },
    510565: { nxId: 1, scene: 51704, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（他这样的男人，逢场作戏吧。）" },
    510566: { nxId: 1, scene: 51704, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（冷静，林晓璐……\n   先离开这里。）" },

    510567: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "wechat", txt: "这时程昱川的手机又一连串提示音\n响了起来。" },
    510568: { nxId: 1, scene: 51704, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（要看他的消息吗……）" },

    510569: { nxId: 1, scene: 51704, doing: 4, item: 45118, music: "", sound: "", txt: "分支选择" },
    //A
    510570: { nxId: 510577, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "你不理会刺耳的提示音，胸中的怒\n火已经难以抑制。你努力压抑着要\n爆炸的情绪向门口走去。" },
    //B
    510571: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "你拿过手机。\n然而，看到的消息令你心碎。" },//偷看技能Levelup
    510572: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "乔安娜：\n昱哥哥，我明天就到国内了，我等\n你过来找我哦，一定要来哈。" },
    510573: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "记得你答应我的事情，\n一件也不许落下！" },
    510574: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "还有，昱哥哥，你在巴塞刚认识的\n这位女孩子，你打算什么时候才告\n诉人家真相呀？哈哈哈。" },
    510575: { nxId: 510577, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "你的大脑已经一片空白，胸中的怒\n火已经难以抑制。你努力压抑着要\n爆炸的情绪向门口走去。" },
    //C
    510576: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "你抄过他的手机扔出了窗外，努力\n压抑着要爆炸的情绪向门口走去。" },

    510577: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "经过浴室时，程昱川又在呼唤你：\n晓璐，我的小叮当呢？\n还是……你想我就这么出去？" },

    510578: { nxId: 1, scene: 51704, doing: 4, item: 45119, music: "", sound: "", txt: "分支选择" },
    //A
    510579: { nxId: 1, scene: 51704, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（程昱川，\n   这种感情游戏，你自己玩吧！）" },
    510580: { nxId: 1, scene: 51704, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（在你身上浪费的时间，就当我自\n   己犯蠢吧！）" },
    510581: { nxId: 1, scene: 51704, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（我不要这个人再来找到我。我要\n   去别的酒店，再也不想看到他！）" },
    510582: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "你愤恨难平的回到自己房间。收拾\n完，头也不回的走出了酒店。" },
    510583: { nxId: -1, scene: 51704, doing: -1, item: 211002, music: "", sound: "", txt: "" },
    //B
    510584: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "你一把把浴室门反锁上，还不够解\n恨。环顾周围，看到了门口的健力\n器，一把拉下来紧紧捆在门把上。" },
    510585: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "浴室里不断传来程昱川的声音：\n亲爱的你怎么了？门怎么锁上了？\n晓璐？晓璐！" },
    510586: { nxId: 1, scene: 51704, doing: 2, item: 211002, music: "", sound: "", txt: "[我]谁是你亲爱的？" },
    510587: { nxId: 1, scene: 51704, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（我不要这个人再来找到我。我要\n   去别的酒店，再也不想看到他！）" },
    510588: { nxId: 1, scene: 51704, doing: 1, item: 0, music: "", sound: "", txt: "你愤恨难平的回到自己房间。收拾\n完，头也不回的走出了酒店。" },
    510589: { nxId: -1, scene: 51704, doing: -1, item: 211002, music: "", sound: "", txt: "" },


}

export class CfgChapter5_1 {
    public chapters: any = chapterObj;
    public endChatuList: string[] = ["100#百年菜市场", "fan#波盖利亚海鲜饭", "dance#告白", "bg_1_4#哭泣角落"];
}