/** 操作ID,下一步操作ID,场景ID,操作类型,具体操作ID,描述 */
/** 操作类型: -1.无 0.背景移动 1.旁白 2.对话 3.人物介绍 4.分支选择 5.插图 6.CG动画 7.好感度 8.衣服选择 9.电话微信 
 * 10.回忆 11.彩蛋 12.地点介绍  13.独白*/

let chapterObj = {
    100545: { nxId: 100001, scene: 11000, doing: 13, item: 11001, music: "", sound: "", txt: "独白" },
    100001: { nxId: 1, scene: 11001, doing: 12, item: 121001, music: "t2", sound: "", txt: "地点介绍" , notopen: 1  },
    100002: { nxId: 100546, scene: 11002, doing: 0, item: 0, music: "", sound: "", txt: "背景移动",  notopen: 1   },
    100546: { nxId: 100003, scene: 11003, doing: 0, item: 0, music: "", sound: "", txt: "背景移动", notopen: 1   },
    100003: { nxId: 1, scene: 11004, doing: 1, item: 0, music: "", sound: "", txt: "早上九点半的机场大厅，\n来来往往的旅客匆匆走过，\n喧嚣却有序。" , notopen: 1  },

    100004: { nxId: 1, scene: 11004, doing: 2, item: 212002, music: "", sound: "plane", txt: "[杨晓东]表姐，你的航班还早啦！", notopen: 1   },
    100005: { nxId: 1, scene: 11004, doing: 2, item: 212001, music: "", sound: "", txt: "[杨晓东]你说你，大过节的，才刚到家，\n结果第二天这么早就要走人！" , notopen: 1  },
    100006: { nxId: 1, scene: 11004, doing: 2, item: 212001, music: "", sound: "", txt: "[杨晓东]诶？头发怎么乱糟糟的，\n在车上睡的吗？" , notopen: 1  },
    100007: { nxId: 1, scene: 11004, doing: 2, item: 212001, music: "", sound: "", txt: "[杨晓东]这实在不符合你女精英的模样啊，\n赶紧理一理。", notopen: 1   },

    100008: { nxId: 1, scene: 11004, doing: 8, item: 0, music: "huanzhuang", sound: "", txt: "换装界面" },

    100009: { nxId: 1, scene: 11004, doing: 2, item: 212001, music: "t2", sound: "", txt: "[杨晓东]嗯，这样顺眼多了。\n我姐偶尔还是挺有女人味的嘛！" },
    100010: { nxId: 1, scene: 11004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]住嘴，别惹我！\n交代你的事情都明白了？" },
    100011: { nxId: 1, scene: 11004, doing: 2, item: 212002, music: "", sound: "", txt: "[杨晓东]我懂我懂！\n你是因为公务紧急，要马上赶去西班牙。" },
    100012: { nxId: 1, scene: 11004, doing: 2, item: 212001, music: "", sound: "", txt: "[杨晓东]你老板在巴塞罗那有个重要谈判，\n需要你马上到场。" },
    100013: { nxId: 1, scene: 11004, doing: 2, item: 212001, music: "", sound: "", txt: "[杨晓东]表姐你需要赶11点45分的航班。" },
    100014: { nxId: 1, scene: 11004, doing: 2, item: 212001, music: "", sound: "", txt: "[杨晓东]所以来不及跟家里人告别就得动身，\n我记得没错吧？" },
    100015: { nxId: 1, scene: 11004, doing: 2, item: 211001, music: "", sound: "tip", txt: "[我]还行……\n就看你的演技了。" },
    100016: { nxId: 1, scene: 11004, doing: 2, item: 212001, music: "", sound: "", txt: "[杨晓东]包在我身上啦。" },
    100017: { nxId: 1, scene: 11004, doing: 2, item: 212002, music: "", sound: "", txt: "[杨晓东]你也不想想，小时候你闯那么多祸\n谁帮你圆过去的。" },

    100018: { nxId: 1, scene: 11004, doing: 4, item: 41001, music: "", sound: "", txt: "分支选择" },

    100019: { nxId: 100025, scene: 11004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谢啦，表弟！\n姐姐不会忘记你的！" },
    100020: { nxId: 100021, scene: 11004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]切，那在外面还不是我从小罩着你？？" },
    100021: { nxId: 1, scene: 11004, doing: 2, item: 212001, music: "", sound: "", txt: "[杨晓东]从小就是个女汉子还好意思说……" },
    100022: { nxId: 1, scene: 11004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]想讨打请大声点！" },
    100023: { nxId: 1, scene: 11004, doing: 2, item: 212001, music: "", sound: "", txt: "[杨晓东]从小就是个女王真是了不起。" },
    100024: { nxId: 1, scene: 11004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哈，算你识趣！\n总之家里那边就全靠你啦，老弟！" },
    100025: { nxId: 1, scene: 11004, doing: 2, item: 212002, music: "", sound: "", txt: "[杨晓东]放心，表姐从小罩着我，\n这点小事不足挂齿。" },
    100026: { nxId: 1, scene: 11004, doing: 2, item: 212001, music: "", sound: "", txt: "[杨晓东]不过表姐，听说这次介绍给你的对象\n是百里挑一的好男人。" },
    100027: { nxId: 1, scene: 11004, doing: 2, item: 212001, music: "", sound: "", txt: "[杨晓东]你真的一点兴趣都没有？" },
    100028: { nxId: 1, scene: 11004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]得了吧，你妈之前介绍的第一个还说\n是万里挑一。" },
    100029: { nxId: 1, scene: 11004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]后来就成了千里挑一，\n然后是三百里挑一……" },
    100030: { nxId: 1, scene: 11004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]下回该十里挑一了……\n这哪里是介绍对象啊，这是吃鸡！" },
    100031: { nxId: 1, scene: 11004, doing: 2, item: 212001, music: "", sound: "", txt: "[杨晓东]额……一提相亲的事儿，\n你就变成吐槽大会嘉宾了。" },
    100032: { nxId: 1, scene: 11004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]总之我的爱情字典里没有相亲，\n也没有将就！" },
    100033: { nxId: 1, scene: 11004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我这辈子如果按别人的意志而活，\n那就不是我。" },
    100034: { nxId: 1, scene: 11004, doing: 2, item: 212001, music: "", sound: "plane", txt: "[杨晓东]姐，你真的是太霸气了！" },
    100035: { nxId: 1, scene: 11004, doing: 2, item: 212001, music: "", sound: "", txt: "[杨晓东]那我就好奇，\n你理想的另一半是什么样的呢？" },

    100036: { nxId: 1, scene: 11004, doing: 4, item: 41002, music: "", sound: "", txt: "分支选择" },

    100037: { nxId: 100039, scene: 11004, doing: 2, item: 212001, music: "", sound: "", txt: "[杨晓东]原来是这样……" },
    100038: { nxId: 100039, scene: 11004, doing: 2, item: 212003, music: "", sound: "", txt: "[杨晓东]…………" },
    100039: { nxId: 1, scene: 11004, doing: 2, item: 212001, music: "", sound: "", txt: "[杨晓东]对了，姐，你为啥会选择去巴塞罗那？" },
    100040: { nxId: 1, scene: 11004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]一，巴塞罗那我还没去过。" },
    100041: { nxId: 1, scene: 11004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]二，我妈神通广大，\n在国内我怕她随时来找我。" },
    100042: { nxId: 1, scene: 11004, doing: 2, item: 212001, music: "", sound: "", txt: "[杨晓东]有道理。" },
    100043: { nxId: 1, scene: 11004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]三，就算我妈不来找我，" },
    100044: { nxId: 1, scene: 11004, doing: 2, item: 211005, music: "", sound: "", txt: "[我]万一这次介绍的是个贪恋我美色的痴情\n种子怎么办？" },
    100045: { nxId: 1, scene: 11004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]保不准也跟着找上来，就很烦人。" },
    100046: { nxId: 1, scene: 11004, doing: 2, item: 212001, music: "", sound: "", txt: "[杨晓东]姐你多虑了……" },
    100047: { nxId: 1, scene: 11004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你什么意思？" },
    100048: { nxId: 1, scene: 11004, doing: 2, item: 212002, music: "", sound: "", txt: "[杨晓东]没有，没有什么。" },
    100049: { nxId: 1, scene: 11004, doing: 2, item: 212001, music: "", sound: "", txt: "[杨晓东]那祝你西班牙之行多邂逅几个大帅哥！" },
    100050: { nxId: 1, scene: 11004, doing: 2, item: 212001, music: "", sound: "", txt: "[杨晓东]反正你别的运气不行，\n烂桃花运一直都不错！哈哈哈！" },

    100051: { nxId: 1, scene: 11004, doing: 4, item: 41003, music: "", sound: "", txt: "分支选择" },
    //A
    100052: { nxId: 1, scene: 11004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]当然了，你老姐我就是自信的女神。" },
    100053: { nxId: 1, scene: 11004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我能在职场做到最好，\n也能在爱情上做到完美！" },
    100054: { nxId: 100062, scene: 11004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哈，拜了个拜。" },
    //B
    100055: { nxId: 1, scene: 11004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你胡说八道什么……" },
    100056: { nxId: 1, scene: 11004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你姐姐我要是有那能耐，\n还至于现在还孤家寡人一个？" },
    100057: { nxId: 1, scene: 11004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]整天被我妈连珠炮似的轰炸我眼界高。" },
    100058: { nxId: 100062, scene: 11004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哎，说多了都是泪，\n姐姐我心累先跑了。" },
    //C
    100059: { nxId: 1, scene: 11004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]烂桃花也好过你双十一！" },
    100060: { nxId: 1, scene: 11004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]现在是你姐我给你挡枪，\n想想家里下一个被张罗的会是谁？" },
    100061: { nxId: 1, scene: 11004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]得了，不跟你扯了，\n姐姐我先行一步。" },

    100062: { nxId: 1, scene: 11004, doing: 2, item: 212002, music: "", sound: "plane", txt: "[杨晓东]好吧，姐你一路顺利，拜拜！" },
    100063: { nxId: 1, scene: 11004, doing: 2, item: 212001, music: "", sound: "", txt: "[杨晓东](大喊）姐，记得给我带个肤白貌美大\n长腿的西班牙小妞回来哇！！！" },
    100064: { nxId: 1, scene: 11004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]…………" },
    100065: { nxId: 1, scene: 11004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（赶紧走，假装不认识他，\n   太丢人了！）" },

    100066: { nxId: 1, scene: 12001, doing: 1, item: 0, music: "Sub", sound: "", txt: "你拉起拉杆箱，向着柜台走去。\n前方突然响起了一阵喧哗。" },
    //插图
    100067: { nxId: 1, scene: 12004, doing: 5, item: 51001, music: "", sound: "", txt: "插图" },
    100068: { nxId: 1, scene: 12004, doing: 2, item: 214002, music: "", sound: "", txt: "[女孩]不，我不能给你！" },
    100069: { nxId: 1, scene: 12004, doing: 2, item: 213002, music: "", sound: "", txt: "[男孩]你够了没有？松手！" },
    100070: { nxId: 1, scene: 12004, doing: 2, item: 214002, music: "", sound: "", txt: "[女孩]你不要这样啊！求求你了！" },
    100071: { nxId: 1, scene: 12004, doing: 2, item: 213002, music: "", sound: "", txt: "[男孩]住口！" },
    100072: { nxId: 1, scene: 12004, doing: 2, item: 214002, music: "", sound: "", txt: "[女孩]（大哭）顾廷巍，你变了，\n   你以前从来不会这么对我！" },
    100073: { nxId: 1, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "帅气男孩用力一拉女孩的手臂，一\n下就把她拉倒在地，女孩拿着的东\n西飞到了你脚边。" },
    100074: { nxId: 1, scene: 12004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（护照……）" },
    100075: { nxId: 1, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "无视坐在地上嚎哭的女孩，\n男孩径直向你走来。" },
    //特殊分支
    100076: { nxId: 1, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "男孩看到你有点吃惊。" },
    //人物介绍顾
    100077: { nxId: 1, scene: 12004, doing: 3, item: 31001, music: "", sound: "", txt: "人物介绍" },

    100078: { nxId: 1, scene: 12004, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]不好意思，这是我的护照。" },
    100079: { nxId: 1, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "你打开护照，看到上面的照片\n果然是眼前的男孩。" },
    100080: { nxId: 1, scene: 12004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（顾廷巍……\n   这个人才21岁……）" },
    100081: { nxId: 1, scene: 12004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（自己的女友哭成这样，\n   居然还笑嘻嘻的……）" },
    100082: { nxId: 100084, scene: 12004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（这男孩真是够渣的。）" },

    100083: { nxId: 1, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "你决定……" },
    100084: { nxId: 1, scene: 12004, doing: 4, item: 41004, music: "", sound: "", txt: "分支选择" },
    
    100085: { nxId: 1, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍从你手中接过了护照。" },
    //A//正常分支
    //好感
    100086: { nxId: 1, scene: 12004, doing: 7, item: 71002, music: "", sound: "", txt: "好感度" },//顾2
    100087: { nxId: 1, scene: 12004, doing: 2, item: 213001, music: "", sound: "tip", txt: "[顾廷巍]谢谢，\n不好意思打扰你了。" },
    100088: { nxId: 1, scene: 12004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不客气。\n如果你对女士都这么客气的话就更好了。" },
    100089: { nxId: 1, scene: 12004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]……" },
    100090: { nxId: 100125, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍白了你一眼，\n径自走回值机台。" },
    //特殊分支
    //好感
    100091: { nxId: 1, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "接过护照，顾廷巍盯着你看了好一\n会。突然他叹了口气，眉眼低垂下\n来，转身默默走回值机台。" },
    100092: { nxId: 1, scene: 12004, doing: 7, item: 71003, music: "", sound: "", txt: "好感度" },//顾3
    100093: { nxId: 1, scene: 12004, doing: 2, item: 214002, music: "", sound: "", txt: "[女生]不行，我不许你走。" },
    100094: { nxId: 100125, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍用力拽掉了女生的手，\n头也不回，快步离开。" },
    //B//正常分支
    100095: { nxId: 1, scene: 12004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]长得挺像回事，风度倒是一点没有。" },
    100096: { nxId: 1, scene: 12004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你是不是得先把你女朋友扶起来，\n再来拿你的护照 ?" },
    100097: { nxId: 1, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "你指了指还在地上的女生，不料，\n顾廷巍一把将护照从你的手里抽走了。" },
    100098: { nxId: 1, scene: 12004, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]多管闲事…" },
    100099: { nxId: 100125, scene: 12004, doing: 2, item: 211001, music: "", sound: "", txt: "[我] &^#@！" },
    //特殊分支
    100100: { nxId: 1, scene: 12004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]长得挺像回事，风度倒是一点没有。" },
    100101: { nxId: 1, scene: 12004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你是不是得先把你女朋友扶起来，\n再来拿你的护照 ?" },
    100102: { nxId: 1, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍突然直愣愣地盯着你的耳朵。" },
    100103: { nxId: 1, scene: 12004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]？？？怎么了？" },
    100104: { nxId: 1, scene: 12004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]（指指你的耳朵）你摸摸。" },
    100105: { nxId: 1, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "你慌忙伸手去摸自己的耳朵，不料\n趁你不注意，顾廷巍一把将护照从\n你的手里抽走了。" },
    100106: { nxId: 1, scene: 12004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]谢谢！" },
    //好感
    100107: { nxId: 1, scene: 12004, doing: 7, item: 71003, music: "", sound: "", txt: "好感度" }, //顾3
    100108: { nxId: 100125, scene: 12004, doing: 2, item: 211002, music: "", sound: "", txt: "[我] &^#@！" },
    //C//正常分支
    100109: { nxId: 1, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "你去扶起地上的女生，\n她一把抢过护照，抱在怀里。" },
    100110: { nxId: 1, scene: 12004, doing: 2, item: 214002, music: "", sound: "", txt: "[女生]谢谢……" },
    100111: { nxId: 1, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍沉着脸，对女生伸出手。" },
    100112: { nxId: 1, scene: 12004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]给我。" },
    100113: { nxId: 1, scene: 12004, doing: 2, item: 214002, music: "", sound: "", txt: "[女生]不给，我不同意。" },
    100114: { nxId: 1, scene: 12004, doing: 2, item: 214002, music: "", sound: "", txt: "[女生]我们在一起这么久，你就这么绝情吗？" },
    100115: { nxId: 1, scene: 12004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]对！" },
    100116: { nxId: 100125, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍一把抢过女生手上的护照。" },
    //特殊分支
    100117: { nxId: 1, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "你去扶起地上的女生，她一把抢过\n护照，抱在怀里，怀疑的目光在你\n和顾廷巍之间游弋……" },
    100118: { nxId: 1, scene: 12004, doing: 2, item: 214002, music: "", sound: "", txt: "[女生]顾廷巍，她是谁？" },
    100119: { nxId: 1, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍露出厌恶的神色，\n对女生伸出手。" },
    100120: { nxId: 1, scene: 12004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]不关别人的事…给我！" },
    100121: { nxId: 1, scene: 12004, doing: 2, item: 214002, music: "", sound: "", txt: "[女生]不给，我不同意。" },
    100122: { nxId: 1, scene: 12004, doing: 2, item: 214002, music: "", sound: "", txt: "[女生]我们在一起这么久，你就这么绝情吗？" },
    100123: { nxId: 1, scene: 12004, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍] 对！" },
    100124: { nxId: 100125, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍一把抢过女生手上的护照。" },

    100125: { nxId: 1, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "女生坐到了地上，大声哭了起来，\n周围的人纷纷侧目围观。" },
    100126: { nxId: 1, scene: 12004, doing: 2, item: 214002, music: "", sound: "", txt: "[女生]我要死了，要死了。" },
    100127: { nxId: 1, scene: 12004, doing: 2, item: 214002, music: "", sound: "", txt: "[女生]你要是不留下来，我就没法活了。" },
    100128: { nxId: 1, scene: 12004, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]孟淑，大庭广众不要再丢人现眼了。" },
    100129: { nxId: 1, scene: 12004, doing: 2, item: 214001, music: "", sound: "", txt: "[孟淑]那你跟我回去。" },
    100130: { nxId: 1, scene: 12004, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]那你继续丢人好了，我没闲情奉陪。" },
    100131: { nxId: 1, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍拖着行李自顾自地走了。" },
    100132: { nxId: 1, scene: 12004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]这个叫顾廷巍的，真是差劲！" },

    100133: { nxId: 1, scene: 12004, doing: 4, item: 41005, music: "", sound: "", txt: "分支选择" },

    100134: { nxId: 1, scene: 12004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你这人对女孩子就不能有点风度吗？" },
    100135: { nxId: 1, scene: 12004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]那要看对谁了。" },
    100136: { nxId: 1, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "撂下这句话，顾廷巍扬长而去。" },
    100137: { nxId: 100149, scene: 12004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]……真是冷血，白瞎了一张脸。" },

    100138: { nxId: 1, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "你走到孟淑身边，伸出你的手。" },
    100139: { nxId: 1, scene: 12004, doing: 2, item: 211003, music: "", sound: "", txt: "[我]你要不要紧？需要我报警吗？" },
    100140: { nxId: 1, scene: 12004, doing: 2, item: 214001, music: "", sound: "", txt: "[孟淑]不不，没关系。" },
    100141: { nxId: 1, scene: 12004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没关系，他一直对你这样吗？" },
    100142: { nxId: 1, scene: 12004, doing: 2, item: 214001, music: "", sound: "", txt: "[孟淑]不不……他对我一直很好的，别误会……" },
    100143: { nxId: 1, scene: 12004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]…………" },
    100144: { nxId: 1, scene: 12004, doing: 2, item: 214001, music: "", sound: "", txt: "[孟淑]谢谢你。" },
    100145: { nxId: 1, scene: 12004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那你注意一点。" },
    100146: { nxId: 100149, scene: 12004, doing: 2, item: 214001, music: "", sound: "", txt: "[孟淑]嗯。" },

    100147: { nxId: 1, scene: 12004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]（一大早就遇到这么狗血的事……）" },
    100148: { nxId: 100149, scene: 12004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]（算了，少管闲事）" },

    100149: { nxId: 1, scene: 12004, doing: 1, item: 0, music: "", sound: "tip", txt: "孟淑起身，擦着泪默默地往外走。" },
    100150: { nxId: 1, scene: 12004, doing: 1, item: 0, music: "", sound: "", txt: "你叹了口气，开始领登机牌托运行\n李，之后你便信步前往候机区。" },

    //角落
    100151: { nxId: 100153, scene: 13001, doing: 0, item: 0, music: "t2", sound: "", txt: "背景初始化" },
    
    //废
    100152: { nxId: 100547, scene: 13002, doing: 0, item: 0, music: "", sound: "", txt: "背景移动" },
    100547: { nxId: 100153, scene: 13003, doing: 0, item: 0, music: "", sound: "", txt: "背景移动" },

    100153: { nxId: 1, scene: 13004, doing: 1, item: 0, music: "", sound: "", txt: "路过休息区时，在角落里，\n你看到了一个熟悉的身影……" },
    100154: { nxId: 1, scene: 13004, doing: 2, item: 211003, music: "cry", sound: "", txt: "[我]咦，是那个叫顾廷巍的男孩……" },
    //顾哭
    100155: { nxId: 1, scene: 13004, doing: 6, item: 61001, music: "", sound: "", txt: "CG动画" },

    100156: { nxId: 1, scene: 13004, doing: 2, item: 211003, music: "", sound: "", txt: "[我]搞什么鬼啊？\n明明是他抛弃别人啊？" },
    100157: { nxId: 1, scene: 13004, doing: 2, item: 211003, music: "", sound: "", txt: "[我]现在么，又一副可怜兮兮，\n被人抛弃的样子。" },
    100158: { nxId: 1, scene: 13004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不知道的还以为是别人甩了他。" },
    100159: { nxId: 1, scene: 13004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]可能他还是爱他女友的，\n只是口是心非？" },
    100160: { nxId: 1, scene: 13004, doing: 2, item: 211005, music: "", sound: "", txt: "[我]不过话说回来，这孩子还真是帅，\n也难怪那小姑娘这么迷。" },

    100161: { nxId: 1, scene: 13004, doing: 4, item: 41006, music: "", sound: "", txt: "分支选择" },
    //A//正常分支
    100162: { nxId: 1, scene: 13004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]（红眼）：滚。" },
    100163: { nxId: 1, scene: 13004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]什么臭脾气，\n看来我今天真的是善心过头了。" },
    100164: { nxId: 100185, scene: 13004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]及时和你分手，\n真是你女朋友的幸运。" },
    //特殊分支
    100165: { nxId: 1, scene: 13004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍猛地转过头，眼神中透露出\n一种凶狠，看到是你，他眼神中的\n凶戾消散了。" },
    100166: { nxId: 1, scene: 13004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]你是做什么的？" },
    100167: { nxId: 1, scene: 13004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我做什么的和你有什么关系？" },
    100168: { nxId: 1, scene: 13004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]那我的事和你有什么关系？" },
    100169: { nxId: 1, scene: 13004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]可是你的表现和刚才看起来很不一样。" },
    100170: { nxId: 1, scene: 13004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我想知道是什么理由，\n让一个人变成这样。" },
    //顾1
    100171: { nxId: 1, scene: 13004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]……\n我也想知道。" },
    100172: { nxId: 100185, scene: 13004, doing: 7, item: 71001, music: "", sound: "", txt: "好感度" },
    //B//正常分支
    100173: { nxId: 1, scene: 13004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]你管我。" },
    100174: { nxId: 1, scene: 13004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你知不知道你这样说话很没有礼貌。" },
    100175: { nxId: 1, scene: 13004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不过谁让你看起来这么惨，\n姐姐我怎么能坐视不管。" },
    100176: { nxId: 1, scene: 13004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]擦擦眼泪。" },
    100177: { nxId: 1, scene: 13004, doing: 1, item: 0, music: "", sound: "", txt: "你把纸巾递给他，顾廷巍推开你的\n手，拉着行李箱就走。" },
    100178: { nxId: 1, scene: 13004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]喂！" },
    //顾1 
    100179: { nxId: 100185, scene: 13004, doing: 7, item: 71001, music: "", sound: "", txt: "好感度" },
    //特殊分支
    100180: { nxId: 1, scene: 13004, doing: 1, item: 0, music: "", sound: "", txt: "你递出纸巾，顾廷巍经过你的时候，\n狠狠抽走纸巾，并别过脸。" },
    100181: { nxId: 1, scene: 13004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]谢谢你的多管闲事。" },
    //顾3 
    100182: { nxId: 100185, scene: 13004, doing: 7, item: 71003, music: "", sound: "", txt: "好感度" },
    //C//正常分支
    100183: { nxId: 1, scene: 13004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]你知道什么？" },
    100184: { nxId: 1, scene: 13004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你这么凶干嘛？\n算了，算姐姐我多事。" },

    100185: { nxId: 1, scene: 13004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍站起来，自顾自地走了，\n背影充满了落寞的意味。" },
    100186: { nxId: 1, scene: 13004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]唉，现在的小朋友都在想什么。" },
    100187: { nxId: 1, scene: 13004, doing: 1, item: 0, music: "", sound: "", txt: "你看了看时间，\n还有一个多小时才到登机时间。" },
    100188: { nxId: 1, scene: 13004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]（去老地方坐坐好了）" },
    //酒吧
    100189: { nxId: 100191, scene: 14001, doing: 0, item: 0, music: "t2", sound: "", txt: "背景初始化" },

    100190: { nxId: 1, scene: 14002, doing: 0, item: 0, music: "", sound: "", txt: "背景向左移动" },//废

    100191: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "你走进酒吧，里面只有三两人。\n一位西装男士背对你坐在吧台边。\n酒保微笑着向你打招呼。" },

    100192: { nxId: 1, scene: 14004, doing: 2, item: 216001, music: "", sound: "", txt: "[酒保]大忙人，又出差？" },
    100193: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不，是去寻找艳遇。" },
    100194: { nxId: 1, scene: 14004, doing: 2, item: 216001, music: "", sound: "", txt: "[酒保]那出发之前，来一杯合适的酒吧！" },
    //重要选项
    100195: { nxId: 1, scene: 14004, doing: 4, item: 41007, music: "", sound: "", txt: "分支选择" },
    //不醉
    100196: { nxId: 100199, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "不一会儿，\n一杯精致的莫吉托推到了你的面前。" },
    //小醉
    100197: { nxId: 100999, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "不一会儿，\n一杯琴费士推到了你的面前。" },
    //大醉
    100198: { nxId: 100998, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "不一会儿，\n一杯长岛冰茶推到了你的面前。" },

    100199: { nxId: 100200, scene: 14004, doing: 2, item: 216001, music: "", sound: "", txt: "[酒保]请慢用！" },
    //小醉
    100999: { nxId: 100288, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "美酒下肚，你逐渐有些飘飘然，想\n起自己无奈落跑的经历，你不禁有\n些恼怒。" },
    100288: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]脸好烫……不，不能认输！\n小哥，再来一杯！" },
    100289: { nxId: 100291, scene: 14004, doing: 2, item: 216001, music: "", sound: "", txt: "[酒保]小姐，你有些醉了……" },
    100291: { nxId: 1, scene: 14004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]上酒！\n我还能再战三百回合！" },
    100292: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "你身边的西装男士突然笑了一声。" },
    100293: { nxId: 1, scene: 14004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你笑什么？！" },
    100294: { nxId: 1, scene: 14004, doing: 2, item: 217006, music: "", sound: "", txt: "[西装男士]女侠风范！" },
    100295: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "他开玩笑似的对你抱了个拳。" },
    100296: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哼，无聊！" },
    //程1
    100297: { nxId: 100200, scene: 14004, doing: 7, item: 71013, music: "", sound: "", txt: "好感度" },
    //大醉
    100998: { nxId: 100298, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "美酒下肚，醉意朦胧间，你想起自\n己被逼相亲的经历，不禁怒火中烧。" },
    100298: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]单身怎么了！我好的很！" },
    100299: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]就算到了三十、四十、八十，\n我也不将就！" },
    100300: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我就是你们这辈子\n做梦也得不到的女人！" },
    100301: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "吧台边一位西装男士闻声笑了出来。" },
    100302: { nxId: 1, scene: 14004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]喂，你笑什么笑？" },
    100303: { nxId: 1, scene: 14004, doing: 2, item: 217006, music: "", sound: "", txt: "[西装男士]只是觉得你很可爱。" },
    100304: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你是不是在嘲笑我？" },
    100305: { nxId: 1, scene: 14004, doing: 2, item: 217006, music: "", sound: "", txt: "[西装男士]绝无此意。" },
    //程2
    100306: { nxId: 1, scene: 14004, doing: 7, item: 71014, music: "", sound: "", txt: "好感度" },
    100307: { nxId: 1, scene: 14004, doing: 2, item: 216001, music: "", sound: "", txt: "[酒保]美女，你没事吧……" },
    100308: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]再给我来一杯莫吉托！" },
    100309: { nxId: 1, scene: 14004, doing: 2, item: 216001, music: "", sound: "", txt: "[酒保]上飞机前喝这么多吗？" },
    100310: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]本来我只是打算睡一觉，\n但现在我打算醉死在飞机上……" },
    100311: { nxId: 1, scene: 14004, doing: 2, item: 216001, music: "", sound: "", txt: "[酒保]哈，美女，\n你也是一个有故事的人……" },
    100312: { nxId: 100200, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]（有气无力）不，帅哥，\n   我只是一个有事故的人……" },

    100200: { nxId: 100286, scene: 14004, doing: 9, item: 910001, music: "", sound: "lingsheng", txt: "电话微信" },
    //模型
    100201: { nxId: 1, scene: 14004, doing: 10, item: 219001, music: "hao", sound: "", txt: "[相亲男一]林小姐，我们虽然才第一次见面，\n不过我对你还是满意的。" , notopen: 1 },
    //只有对话
    100202: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]（敷衍）是吗？谢谢夸奖！" , notopen: 1 },
    100203: { nxId: 1, scene: 14004, doing: 10, item: 219001, music: "", sound: "", txt: "[相亲男一]我说真的，你看看你，个子高，\n皮肤白，前凸后翘身材很好！", notopen: 1  },
    100204: { nxId: 1, scene: 14004, doing: 10, item: 219001, music: "", sound: "", txt: "[相亲男一]我们的儿子一定白白胖胖的！", notopen: 1  },
    100205: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]咳咳！", notopen: 1  },
    100206: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]等会，咱们才见面一次，\n您这个打算是不是有点仓促？" , notopen: 1 },
    100207: { nxId: 1, scene: 14004, doing: 10, item: 219001, music: "", sound: "", txt: "[相亲男一]我说话的时候不要插嘴！" , notopen: 1 },
    100208: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]……" , notopen: 1 },
    100209: { nxId: 1, scene: 14004, doing: 10, item: 219001, music: "", sound: "", txt: "[相亲男一]我们家在本地也是有头有脸的。\n等结婚了，你也不要出去工作啦！" , notopen: 1 },
    100210: { nxId: 1, scene: 14004, doing: 10, item: 219001, music: "", sound: "", txt: "[相亲男一]女人嘛就得待在家里，\n伺候公婆，照顾孩子！", notopen: 1  },
    100211: { nxId: 1, scene: 14004, doing: 10, item: 219001, music: "", sound: "", txt: "[相亲男一]你呢，读书这么多， \n就在家好好培养咱儿子，将来……" , notopen: 1 },

    100212: { nxId: 1, scene: 14004, doing: 4, item: 41008, music: "", sound: "", txt: "分支选择", notopen: 1  },
    //A
    100213: { nxId: 1, scene: 14004, doing: 10, item: 219001, music: "", sound: "", txt: "[相亲男一]啧，你怎么又插嘴，我们家讲规矩，\n我父母就不像我这么通情达理了。" , notopen: 1 },
    100214: { nxId: 1, scene: 14004, doing: 10, item: 219001, music: "", sound: "", txt: "[相亲男一]等你嫁过来，跟我爸妈说话要注意点，\n知道吗？" , notopen: 1 },
    100215: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]我就想知道，假如生的是个女儿呢？", notopen: 1  },
    100216: { nxId: 1, scene: 14004, doing: 10, item: 219001, music: "", sound: "", txt: "[相亲男一]不行！必须是儿子！\n这个问题，没有商量的余地！", notopen: 1  },
    100217: { nxId: 100223, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]要不……这儿子你自己生？", notopen: 1  },
    //B
    100218: { nxId: 1, scene: 14004, doing: 10, item: 219001, music: "", sound: "", txt: "[相亲男一]嘿，我知道我条件好……\n你不用自卑，你也不错！", notopen: 1  },
    100219: { nxId: 100223, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]对，您的条件太好了！\n我可能配不上您。", notopen: 1  },
    //C
    100220: { nxId: 1, scene: 14004, doing: 10, item: 219001, music: "", sound: "", txt: "[相亲男一]我都给你想好了，有什么说不准的！" , notopen: 1 },
    100221: { nxId: 1, scene: 14004, doing: 10, item: 219001, music: "", sound: "", txt: "[相亲男一]婚后，你辞去工作，\n在家相夫教子，孝敬公婆，就好了。" , notopen: 1 },
    100222: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]男主外，女主内是吧？\n可是如果我不想呢？" , notopen: 1 },

    100223: { nxId: 1, scene: 14004, doing: 10, item: 219001, music: "", sound: "", txt: "[相亲男一]什么？！你什么意思！" , notopen: 1 },
    100224: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]我觉得，您的确跟介绍的一样，\n是个“万里挑一”的“好”男人。" , notopen: 1 },
    100225: { nxId: 1, scene: 14004, doing: 10, item: 219001, music: "", sound: "", txt: "[相亲男一]也不能这么说，我这个人还是很谦虚的，\n要做大事必须要有胸怀……", notopen: 1  },
    100226: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]我们家也有规矩，\n女人说话，男人闭嘴听着！" , notopen: 1 },
    100227: { nxId: 1, scene: 14004, doing: 10, item: 219001, music: "", sound: "", txt: "[相亲男一]你……", notopen: 1  },
    100228: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]万里挑一？是方圆万里寸草不生吧！\n就剩您自己了，这叫万径人踪灭！" , notopen: 1 },
    100229: { nxId: 1, scene: 14004, doing: 10, item: 219001, music: "", sound: "", txt: "[相亲男一]你！你你你！", notopen: 1  },
    100230: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]咱们还是再见，\n不，再也不见！" , notopen: 1 },

    100231: { nxId: 100286, scene: 14004, doing: 9, item: 910018, music: "", sound: "", txt: "电话微信" },

    100232: { nxId: 1, scene: 14004, doing: 10, item: 218001, music: "weisuo", sound: "", txt: "[相亲男二]做销售是真忙，\n甚至有些时候都有些身不由己。" , notopen: 1 },
    100233: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]对，没错。" , notopen: 1 },
    100234: { nxId: 1, scene: 14004, doing: 10, item: 218001, music: "", sound: "", txt: "[相亲男二]我下班有很多应酬，\n经常没什么个人时间，你也是这样吗。", notopen: 1  },
    100235: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]不太一样，我们主要维护大客户，\n不算忙。", notopen: 1  },
    100236: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]最近因为考证，晚上要看书，\n所以没什么时间出去。", notopen: 1  },
    100237: { nxId: 1, scene: 14004, doing: 10, item: 218001, music: "", sound: "", txt: "[相亲男二]你年纪轻轻就做到经理，平时聚会、\n派对、喝喝酒什么的应该挺多的吧。" , notopen: 1 },

    100238: { nxId: 1, scene: 14004, doing: 4, item: 41009, music: "", sound: "", txt: "分支选择", notopen: 1  },
    //A
    100239: { nxId: 1, scene: 14004, doing: 10, item: 218001, music: "", sound: "", txt: "[相亲男二]嗯……我是说，你这么漂亮，\n平时应该挺多男孩子追的吧。", notopen: 1  },
    100240: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]哈！\n如果有，那我们今天还在这干嘛。" , notopen: 1 },
    100241: { nxId: 100248, scene: 14004, doing: 10, item: 218001, music: "", sound: "", txt: "[相亲男二]嗯，我的意思是说……", notopen: 1  },
    //B
    100242: { nxId: 1, scene: 14004, doing: 10, item: 218001, music: "", sound: "", txt: "[相亲男二]真的吗，我以为女销售都是……\n嗯，个人生活比较丰富的……" , notopen: 1 },
    100243: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]呵呵，你自己也是销售，\n还这么歧视自己的行业吗？" , notopen: 1 },
    100244: { nxId: 100248, scene: 14004, doing: 10, item: 218001, music: "", sound: "", txt: "[相亲男二]啊……我不是这个意思……" , notopen: 1 },
    //C
    100245: { nxId: 1, scene: 14004, doing: 10, item: 218001, music: "", sound: "", txt: "[相亲男二]那你认识的男孩子不少啊，\n难道就没有中意的？ " , notopen: 1 },
    100246: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]我都坐在这了，\n还需要回答这个问题嘛。", notopen: 1  },
    100247: { nxId: 1, scene: 14004, doing: 10, item: 218001, music: "", sound: "", txt: "[相亲男二]额，其实我就是…… ", notopen: 1  },

    100248: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]行了，我替你说了吧，\n咱们不合适，对吗？", notopen: 1  },
    100249: { nxId: 1, scene: 14004, doing: 10, item: 218001, music: "", sound: "", txt: "[相亲男二]呃，我是觉得销售这个行业，\n诱惑太多，很容易被社会污染太深。 " , notopen: 1 },
    100250: { nxId: 1, scene: 14004, doing: 10, item: 218001, music: "", sound: "", txt: "[相亲男二]你人很好，\n但我就想找个单纯的女孩子。 " , notopen: 1 },
    100251: { nxId: 1, scene: 14004, doing: 10, item: 218001, music: "", sound: "", txt: "[相亲男二]真是对不起了…… " , notopen: 1 },
    100252: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]？？？\n污染太深？", notopen: 1  },

    100253: { nxId: 100286, scene: 14004, doing: 9, item: 910023, music: "", sound: "", txt: "电话微信" },

    100254: { nxId: 1, scene: 14004, doing: 10, item: 211101, music: "child", sound: "", txt: "[相亲男三]真的很高兴，你能跟我来见面。" , notopen: 1 },
    100255: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]我也很高兴认识你。", notopen: 1  },
    100256: { nxId: 1, scene: 14004, doing: 10, item: 211101, music: "", sound: "", txt: "[相亲男三]说实在的，像你这么漂亮的女孩子，\n我真的没想到会看上我这样的人。", notopen: 1  },
    100257: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]哪里，你不是挺好的吗？" , notopen: 1 },
    100258: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]有一份上升空间不错的工作，\n也有责任心，还挺有绅士风度的。", notopen: 1  },
    100259: { nxId: 1, scene: 14004, doing: 10, item: 211101, music: "", sound: "", txt: "[相亲男三]我不太会说话，\n条件……也不是很好。", notopen: 1  },

    100260: { nxId: 1, scene: 14004, doing: 4, item: 41010, music: "", sound: "", txt: "分支选择" },
    //A
    100261: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]没关系啊，不是每个人都能说会道的，\n也不是每个人天生都家财万贯。" , notopen: 1 },
    100262: { nxId: 100270, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]至于条件……我们都还年轻啊，\n事业都在上升期，可以努力的嘛。" , notopen: 1 },
    //B
    100263: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]女生都喜欢比自己强的男生，\n你这样畏首畏尾的怎么行？" , notopen: 1 },
    100264: { nxId: 1, scene: 14004, doing: 10, item: 211101, music: "", sound: "", txt: "[相亲男三]…………", notopen: 1  },
    100265: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]骗你的啦！\n都跟你出来喝茶了还这么楞，真直男啊！" , notopen: 1 },
    100266: { nxId: 100270, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]你很不错，要自信一些啊！", notopen: 1  },
    //C
    100267: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]我自己有手有脚，又不是指望你养活。" , notopen: 1 },
    100268: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]两个人在一起是为了过得更好，\n不是一个人寄生另一个人。" , notopen: 1 },
    100269: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]另一半的人品才是关键。", notopen: 1  },

    100270: { nxId: 1, scene: 14004, doing: 10, item: 211101, music: "", sound: "", txt: "[相亲男三]你的话，真的让我好感动。\n你跟我以前遇到的女孩子真的不一样。" , notopen: 1 },
    100271: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]可能是我比较善于发现别人身上的优点。", notopen: 1  },
    100272: { nxId: 1, scene: 14004, doing: 10, item: 211101, music: "", sound: "", txt: "[相亲男三]那你这么说，是答应做我女朋友了？" , notopen: 1 },
    100273: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]可以先试着从朋友做起啊。", notopen: 1  },
    100274: { nxId: 1, scene: 14004, doing: 10, item: 211101, music: "", sound: "", txt: "[相亲男三] 太太太太好了！\n  我得打个电话给妈妈告诉她！" , notopen: 1 },
    100275: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]啊？这事儿……\n不用特地打个电话给阿姨吧。" , notopen: 1 },
    100276: { nxId: 1, scene: 14004, doing: 10, item: 211101, music: "", sound: "", txt: "[相亲男三] 不行！从小到大，\n 这些大事都要第一时间报告给妈妈。", notopen: 1  },
    100277: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]……和女生约会，\n   这种事情也要报告给阿姨？", notopen: 1  },
    100278: { nxId: 1, scene: 14004, doing: 10, item: 211101, music: "", sound: "", txt: "[相亲男三] 对啊！逛街，买东西，\n去了哪里，花了多少钱？", notopen: 1  },
    100279: { nxId: 1, scene: 14004, doing: 10, item: 211101, music: "", sound: "", txt: "[相亲男三] 妈妈都会记得清清楚楚。\n  这样才能给我足够的钱下次去约会。" , notopen: 1 },
    100280: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]你等等……你这么大了，\n 每个月的工资都交给你妈妈？", notopen: 1  },
    100281: { nxId: 1, scene: 14004, doing: 10, item: 211101, music: "", sound: "", txt: "[相亲男三] 对啊。" , notopen: 1 },
    100282: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]那要是结婚以后呢？" , notopen: 1 },
    100283: { nxId: 1, scene: 14004, doing: 10, item: 211101, music: "", sound: "", txt: "[相亲男三] 当然是我们把钱都交给妈妈管。\n 这样才是最保险的！", notopen: 1  },
    100284: { nxId: 1, scene: 14004, doing: 10, item: 211011, music: "", sound: "", txt: "[我]……" , notopen: 1 },

    100285: { nxId: 100286, scene: 14004, doing: 9, item: 910029, music: "", sound: "", txt: "电话微信" },

    100286: { nxId: 1, scene: 14001, doing: 0, item: 0, music: "t2", sound: "", txt: "背景初始化" },
    100287: { nxId: 100313, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "你挂了电话，胸中一团无名火，\n拿起桌上剩下的半杯酒，\n 一饮而尽。" },
    //醉酒执行 废
    100290: { nxId: 1, scene: 14004, doing: 11, item: 111001, music: "", sound: "", txt: "分支选择" },

    //万众瞩目皇上登场
    100313: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "随着一阵刺鼻的香味，一个男人砰\n地把豪车钥匙甩在吧台上，一屁股\n坐到你身边。" },
    100314: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我] 啊啾！" },
    100315: { nxId: 1, scene: 14004, doing: 2, item: 215002, music: "huangshang", sound: "", txt: "[油腻男子]给我来一杯跟这位小姐一样的鸡尾酒，\n 顺便她这杯……也记在我的账上。" },
    100316: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……\n 不用了，这位先生，我们认识吗？" },
    100317: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "油腻男士故作帅气地对你笑笑。" },
    100318: { nxId: 1, scene: 14004, doing: 2, item: 215002, music: "", sound: "", txt: "[油腻男子]我姓黄名尚，\n现在我们认识了。" },
    100319: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……“皇上”？\n哈哈，小女子非常荣幸。" },
    100320: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]朋友们也时常这么调侃我。" },
    100321: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]我刚才听到你和伯母的电话，\n相亲奇葩对象就是多，您说是不是？" },
    100322: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没想到陛下的耳朵也这么灵。" },
    100323: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]（盯着你看）……" },
    100324: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]？？？\n我脸上有什么东西吗？" },
    100325: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]你的45°侧面很好看。\n简直是完美的艺术品！" },
    100326: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]（这个石油精是哪来的啊！）\n我是不是该套个画框把自己裱到墙上？" },
    100327: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]如果是这样，\n希望能够挂在我房间里靠窗的地方。" },
    100328: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]你这么好看的人，\n给点阳光一定会更灿烂。" },
    100329: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……（您会说话吗？）\n您要没别的事儿我就先走了。" },
    100330: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]欸！\n别走啊！" },
    100331: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "黄尚嗖一下站起来拦住你，故意把\n他的车钥匙在你面前晃来晃去。" },
    100332: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]美女想去哪儿？\n不如让我送你去吧，嘿嘿。" },

    100333: { nxId: 1, scene: 14004, doing: 4, item: 41012, music: "", sound: "", txt: "分支选择" },
    //A
    100334: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好啊，我要去欧洲，\n也不算远，才小半个地球。" },
    100335: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]师傅，中午能送到吗？" },
    100336: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]……" },
    100337: { nxId: 1, scene: 14004, doing: 2, item: 217007, music: "", sound: "", txt: "[西装男士]噗……" },
    //程1
    100338: { nxId: 100346, scene: 14004, doing: 7, item: 71013, music: "", sound: "", txt: "好感度" },
    //B
    100339: { nxId: 1, scene: 14004, doing: 2, item: 211005, music: "", sound: "", txt: "[我]哇！豪车欸！好有钱！" },
    100340: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]哈哈，我就知道……" },
    100341: { nxId: 1, scene: 14004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]多少钱一天租的？" },
    100342: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]……" },
    100343: { nxId: 1, scene: 14004, doing: 2, item: 217010, music: "", sound: "", txt: "[西装男士]哈哈哈！" },
    //程2
    100344: { nxId: 100346, scene: 14004, doing: 7, item: 71014, music: "", sound: "", txt: "好感度" },
    //C
    100345: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]先生，麻烦你让开！" },

    100346: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]别这么不给面子嘛！" },
    100347: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]在这里遇到，也是一种缘分，\n认识一下嘛！" },
    100348: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]为什么你非得认识我？" },
    100349: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]你有魅力啊！\n谁要你是个高分美女呢？" },

    100350: { nxId: 1, scene: 14004, doing: 4, item: 41013, music: "", sound: "", txt: "分支选择" },
    //A
    100351: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你们男人是不是喜欢给女人打分？" },
    100352: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]嗯？\n是，男人嘛，哈哈哈。" },
    100353: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那你觉得我怎么样？\n如果打分你给我打几分？" },
    100354: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]不能模糊地看，要细看……\n我给你打8分吧。" },
    100355: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]8分？" },
    100356: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]虚心才能有进步，你还能更美。" },
    100357: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你凭什么给女人打分？\n我是一张卷子吗？" },
    100358: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]是我打的分数不对？\n啊，其实你有10分。" },
    100359: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]明明心里就是8分，\n看我生气就说10分，谁稀罕你的分数！" },
    100360: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你以为西装油头，豪车在手，\n女人们就投怀送抱了是吗？" },
    100361: { nxId: 1, scene: 14004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]告诉你，姑娘我不稀罕！！！" },
    100362: { nxId: 100374, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "黄尚愣住当场，一旁的酒保和西装\n男士也没忍住笑了出来。\n黄尚立刻脸上挂不住了。" },
    //B
    100363: { nxId: 1, scene: 14004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]不好意思，\n我现在没什么心情扯这些。" },
    100364: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]我明白，\n家里曾经也给我安排过很多相亲。" },
    100365: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]那些个女孩子张口房子车子票子，\n低俗的很！" },
    100366: { nxId: 1, scene: 14004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你怎么就知道我不关心钱？" },
    100367: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]直觉，直觉告诉我……" },
    100368: { nxId: 100374, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不好意思，我特别在意钱。\n只是我喜欢凭自己本事挣。" },
    //C
    100369: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你们男人是不是都以为，\n在酒吧买醉的女孩子，很好套路？" },
    100370: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]小姐，你对我可能有误会……" },
    100371: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]误会什么？你不就是想着借着酒精，\n发生点龌龊的事情么？" },
    100372: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]我真的只是想和你做个朋友而已！" },
    100373: { nxId: 1, scene: 14004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]那种“朋友”么？不好意思，\n老娘对着你这张脸，提不起兴趣！" },

    100374: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "骂完之后，你通体舒畅许多，拿起\n包，就准备往外走，黄尚却贴过来\n一把拉住你的手臂。" },
    100375: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]小姐，别急着走啊……" },
    100376: { nxId: 1, scene: 14004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]放手！！" },
    100377: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "西装男士不知什么时候站到了你身\n边，一伸手拧开了黄尚的手。" },
    100378: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]什么人！" },
    100379: { nxId: 1, scene: 14004, doing: 2, item: 217040, music: "", sound: "", txt: "[西装男士]我觉得这位小姐并不想搭理你。" },
    100380: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]她、她是我女朋友！\n你少管闲事！" },
    100381: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "西装男士不紧不慢，从兜里掏出手\n机，打开自拍功能对着黄尚。" },
    100382: { nxId: 1, scene: 14004, doing: 2, item: 217040, music: "", sound: "", txt: "[西装男士]你自己看看，我本来以为你只是丑，\n没想到你脸皮还这么厚。" },
    100383: { nxId: 1, scene: 14004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈！" },
    100384: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]你！！" },
    100385: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "sui", txt: "黄尚挥出一拳，男士闪身躲过，\n黄尚撞在了吧台上，杯子都落在地\n上，发出清脆的声响……" },
    100386: { nxId: 1, scene: 14004, doing: 2, item: 216001, music: "", sound: "", txt: "[酒保]先生……\n打碎杯子，80一只……" },
    100387: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]滚！" },
    100388: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "黄尚转过身，恼火地又扑过去。\n西装男士轻松地伸手接住黄尚的拳\n头。转身朝向酒保。" },
    100389: { nxId: 1, scene: 14004, doing: 2, item: 217006, music: "", sound: "", txt: "[西装男士]可以麻烦你通知一下警察吗？很少有\n傻子在机场闹事了，也许他们想见见。" },
    100390: { nxId: 1, scene: 14004, doing: 2, item: 216001, music: "", sound: "", txt: "[酒保]没问题，20秒前我就报警了！" },
    100391: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "听到两人的对话，\n黄尚的动作猛地停下。" },
    100392: { nxId: 1, scene: 14004, doing: 2, item: 215001, music: "", sound: "", txt: "[黄尚]你……你们给我等着！" },
    100393: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "黄尚一边说，一边后退，突然拔腿\n跑了出去，出门的时候险些摔倒，\n很是狼狈。" },
    100394: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "西装男士嘴角勾起一个笑容，\n转过身向你伸出手。" },
    100395: { nxId: 1, scene: 14004, doing: 2, item: 217007, music: "missing", sound: "", txt: "[西装男士]你好，我叫程昱川。" },
    //人物介绍程
    100396: { nxId: 1, scene: 14004, doing: 3, item: 31002, music: "", sound: "", txt: "人物介绍" },

    100397: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我叫林晓璐，刚才谢谢你了。" },
    100398: { nxId: 1, scene: 14004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]小意思。" },
    100399: { nxId: 1, scene: 14004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]不是每天都能遇到这么迷人的姑娘……\n和这么油腻的流氓的。" },
    100400: { nxId: 1, scene: 14004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]噗~" },

    100401: { nxId: 1, scene: 14004, doing: 4, item: 41014, music: "", sound: "", txt: "分支选择" },
    //A
    //正常分支
    100402: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]再次感谢啊！" },
    100403: { nxId: 1, scene: 14004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]哈哈，举手之劳！\n刚才没有伤着你吧？" },
    100404: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]还好，没受伤。" },
    //程2
    100405: { nxId: 100422, scene: 14004, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },
    //特殊分支
    100406: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]再次感谢，骑士大人！" },
    100407: { nxId: 100666, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川听到这句话，微微一笑，向\n你行了一个欧洲宫廷礼，姿势标准\n动作优雅，如同一名真正的骑士。" },
    100666: { nxId: 100408, scene: 14004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]我的荣幸。" },
    //程3
    100408: { nxId: 100422, scene: 14004, doing: 7, item: 71007, music: "", sound: "", txt: "好感度" },
    //B
    100409: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那我怎么知道，\n你不是下一个油腻先生呢？" },
    100410: { nxId: 1, scene: 14004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]油腻先生是我想当就能当的吗？\n你注意到了吗，刚才那位黄尚的头发。" },
    100411: { nxId: 1, scene: 14004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]苍蝇站上去都要摔断腿，\n我可没带那么多的发胶。" },
    100412: { nxId: 1, scene: 14004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈哈！" },
    100413: { nxId: 1, scene: 14004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]你还急着走吗？发胶先生走的还不远，\n如果快一点，也许你还能赶上他。" },

    100414: { nxId: 1, scene: 14004, doing: 4, item: 41015, music: "", sound: "", txt: "分支选择" },
    //A
    //正常分支
    100415: { nxId: 1, scene: 14004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]除非你打算请我喝点什么了。" },
    //程1
    100416: { nxId: 100422, scene: 14004, doing: 7, item: 71005, music: "", sound: "", txt: "好感度" },
    //特殊分支
    100417: { nxId: 1, scene: 14004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]女士，这边请。" },
    //程2
    100418: { nxId: 100422, scene: 14004, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },
    //B
    100419: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]刚才点的一杯酒，我还不想浪费。" },
    100420: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]那介意我坐在你旁边吗？" },
    100421: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]请，我一个人也坐不了这么多凳子。" },

    100422: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "你们两人坐下来，\n你举起手中的杯子向他致谢。" },
    100423: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谢谢你，程先生。\n你可真是个勇敢的绅士。" },
    100424: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]不客气，为女士解围是应当的。" },
    100425: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]话说回来，长途旅行的时候\n喝一点酒挺不错的，有助于睡眠……" },
    100426: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是啊……嗯？" },
    100427: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]到巴塞罗那十几个小时的航班，\n不睡一觉太漫长了。" },
    100428: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]等等……你怎么知道我要去哪里？\n我不记得我有提到过啊？" },
    100429: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川笑了起来。" },
    100430: { nxId: 1, scene: 14004, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]不是什么事情都需要用语言表达的。" },
    100431: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]刚到家没几天就忙着走？\n有什么紧急事情需要处理的么？" },
    100432: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]（惊讶）………\n你是怎么知道的？" },
    100433: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川笑而不语地看着我，\n挤了挤眼睛。" },//去你妈的笑而不语
    100434: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]如果不想让人知道你的行程安排，\n那么……" },
    100435: { nxId: 1, scene: 14004, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]一，记得撕掉你的行李箱上的标签；\n二，不要把出发的机票垫在桌子上。" },

    100436: { nxId: 1, scene: 14004, doing: 4, item: 41016, music: "", sound: "", txt: "分支选择" },
    //A
    100437: { nxId: 1, scene: 14004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]原来如此！\n我是遇到了福尔摩斯先生吗？" },
    100438: { nxId: 100441, scene: 14004, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]嘿嘿，多谢夸奖。" },
    //B
    100439: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]该夸您视力好呢，\n还是怪我自己不小心呢。" },
    100440: { nxId: 1, scene: 14004, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]我的视力的确不错。" },

    100441: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那么你是刚回来吗？" },
    100442: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]是的，回家过节。" },
    100443: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你在国外工作？" },
    100444: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你怎么知道的？" },
    100445: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]只有在国外生活很久的人，\n笑起来才像拍牙膏广告……" },
    100446: { nxId: 1, scene: 14004, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]哈哈哈，你也是女版的福尔摩斯嘛。" },
    100447: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]不过话说回来，\n刚才那位发胶先生真的叫黄尚？" },
    100448: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]他是这么说的。" },
    100449: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]哇哦，当他的朋友一定很吃亏！" },
    100450: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]怎么说？" },
    100451: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]皇上身边的人不是太监就是宫女啊！" },
    100452: { nxId: 1, scene: 14004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈！" },
    100453: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你的选择不错，巴塞是个很美的城市。" },
    100454: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你去过？" },
    100455: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]几年前去看过球。" },
    100456: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]果然男人都是为了足球……" },
    100457: { nxId: 1, scene: 14004, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]就像女人都是为了爱情……" },
    100458: { nxId: 1, scene: 14004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]颇有哲理。" },
    100459: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "笑声中，\n你和这名刚相识的男子一起举杯。" },
    100460: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "不知为何，两人谈笑之间，程昱川\n让你感受到一种莫名的吸引力。不\n知不觉，时间过去了。" },
    100461: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "tip", txt: "[我]（登机时间快到了……\n   跟帅哥聊天时间过得好快啊。）" },
    100462: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]（他去过巴塞，也许能给我点建议？）" },

    100463: { nxId: 1, scene: 14004, doing: 4, item: 41017, music: "", sound: "", txt: "分支选择" },
    //A
    100464: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]对了，你去过巴塞，\n有好的酒店推荐一下，最好靠海近一点。" },
    100465: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你很喜欢海？" },
    100466: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是的，我喜欢清晨的海风……\n对了，还要物美价廉。" },
    100467: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]大过节出国的中国人，\n不是都应该很土豪吗？" },
    100468: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]对啊，因为其他人都是土豪，\n所以只能我做苦命的工薪阶层了呀。" },
    100469: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]好吧，要方便去看景点，\n还要在海边，还不能贵……" },
    100470: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我之前住过一家新开业的酒店还不错，\n我找找他们的联系方式……" },
    100471: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]多谢啦！" },
    100472: { nxId: 1, scene: 14004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]不用客气！" },
    100473: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哎呀，我的航班差不多到时间了。\n很高兴认识你，程先生，但我得走了。" },
    100474: { nxId: 1, scene: 14004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]和认识那位皇上一样高兴？" },
    100475: { nxId: 1, scene: 14004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈！\n和你聊天，是真的很开心！" },
    100476: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]真的吗？" },
    100477: { nxId: 1, scene: 14004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]煮的……" },
    100478: { nxId: 100489, scene: 14004, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]噗~" },
    //B
    100479: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]巴塞罗那有什么不能错过的景点吗？" },
    100480: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]“直线属于人类，曲线归于上帝”。" },
    100481: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]高迪的名言……" },
    100482: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]对，巴塞罗那就是一座高迪之城。" },
    100483: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]现代社会的每个人都天生认为：建筑，\n就该是横平竖直，循规蹈矩的高楼大厦。" },
    100484: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]但高迪却告诉你：曲线的建筑才最美，\n那是上帝的曲线。" },
    100485: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是啊……可惜现实中也满是横平竖直，\n让人忘记了还有上帝的曲线。" },
    100486: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我们也可以找到的，\n路是自己走的不是吗？" },
    100487: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]如果你这么想看高迪的鬼斧神工，\n我推荐你一家位置方便的酒店吧。" },
    100488: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谢谢！" },

    100489: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]对了，请问，\n还有机会再和你聊天吗？" },
    100490: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川又露出了那种狡黠帅气的微\n笑，他嘴角微勾向你挤了挤眼，明\n亮的眼眸毫不避讳地和你对视。" },
    100491: { nxId: 100493, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "那双迷人的眼睛里除了真诚，还有\n期许。你读懂了他的意思，他在等\n待你的回应。" },
    100492: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……" },//废

    100493: { nxId: 1, scene: 14004, doing: 4, item: 41018, music: "", sound: "", txt: "分支选择" },
    //A
    //正常分支
    100494: { nxId: 1, scene: 14004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]这里是我的名片……" },
    //程2
    100495: { nxId: 100499, scene: 14004, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },
    //特殊分支
    100496: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]林晓璐……林间，拂晓，美玉……\n很有意境的名字，我记住了！" },
    //程3
    100497: { nxId: 1, scene: 14004, doing: 7, item: 71007, music: "", sound: "", txt: "好感度" },
    100498: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "你刚起身，程昱川就帮你披上了外\n套。你拉着行李箱走出几步，却回\n头对他笑了笑。" },

    100499: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]程先生，有缘再见……" },
    100500: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]（顽皮地挤挤眼睛）\n   一定会的！" },
    100501: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "time", sound: "", txt: "忽然间，你心中感到一股许久\n不曾有过的萌动泛涌。" },
    100502: { nxId: 1, scene: 14004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（和这个男人短短的相处，已是许久以来\n   我和异性相处最放松的时光。）" },
    100503: { nxId: 1, scene: 14004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（大概等我回来的时候，\n   他也已经踏上返程的旅途……）" },
    100504: { nxId: 1, scene: 14004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（不知道下一次相遇，\n   会是何时何地呢？）" },
    100505: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "一念及此，你开心的向他挥挥手，\n然后步履轻快地向登机口走去……" },
    //飞机
    100506: { nxId: 100557, scene: 14004, doing: 6, item: 61002, music: "", sound: "", txt: "CG动画" },
    100557: { nxId: -1, scene: 14004, doing: -1, item: 211002, music: "", sound: "", txt: "" },

    //B
    //正常分支
    100507: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]记好了，17621507851……" },
    100508: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]收到！" },
    //程2
    100509: { nxId: 100515, scene: 14004, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },
    //特殊分支
    100510: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]记好了，17621507851……" },
    100511: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]收到！" },
    100512: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "你脑补了一下表弟接到这个电话的\n场景，差点笑出声来。" },
    100513: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]（她为什么这么笑……）\n（感觉有点不对劲）" },
    //程3
    100514: { nxId: 1, scene: 14004, doing: 7, item: 71007, music: "", sound: "", txt: "好感度" },

    100515: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谢谢你，程先生，\n有空我们再聊！" },
    100516: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]好！\n期待下一次的见面。" },
    100517: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "你忍住笑转身走向登机口。" },
    100518: { nxId: 1, scene: 14004, doing: 2, item: 211015, music: "time", sound: "", txt: "[我]（虽然与这个男人短短的相处，\n   让我感到了难得的放松一刻。）" },
    100519: { nxId: 1, scene: 14004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（但他那自信又有点爱秀的个性，\n   让我忍不住想捉弄他一下……）" },
    100520: { nxId: 1, scene: 14004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（表弟会留下他的通话记录吧……\n   那个画面想想都觉得有趣。）" },
    100521: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "一念及此，你开心的向他挥挥手，\n然后步履轻快地向登机口走去……" },
    //飞机
    100522: { nxId: 100556, scene: 14004, doing: 6, item: 61002, music: "", sound: "", txt: "CG动画" },
    100556: { nxId: -1, scene: 14004, doing: -1, item: 211002, music: "", sound: "", txt: "" },

    //C
    100523: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]林晓璐，我的名字。" },
    100524: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]……很美的名字。\n我记住了！" },
    100525: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]不过只有一个名字，\n我要怎么再找到你呢？" },
    100526: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]有句古诗说得好：\n相逢何必曾相识。" },
    100527: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]（顽皮地眨了眨眼）\n  蓬门今始为君开？" },
    100528: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]（没想到一个在海外生活的家伙，\n   竟然还能接这种古文梗。）" },
    100529: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你的汉语老师真是不错。" },
    100530: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我妈妈一定很喜欢你对她的评价。" },
    //程2
    100531: { nxId: 1, scene: 14004, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },
    100532: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "你站起来，程昱川拿来了外套。你\n拉着行李箱，对他笑了笑。" },
    100533: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]祝你这趟旅途找到”上帝的曲线”" },
    100534: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]（即使我没有回应他，他仍然如此绅士。\n   只可惜我们的行程南辕北辙。）" },
    100535: { nxId: 1, scene: 14004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我会的，也祝你一切如意。\n节日快乐！" },
    100536: { nxId: 1, scene: 14004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]节日快乐。" },
    100537: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "他眼神中闪过一丝落寞和遗憾。\n你笑了笑，没有再回应他。" },
    100538: { nxId: 1, scene: 14004, doing: 2, item: 211015, music: "time", sound: "", txt: "[我]（和这个男人短短的相处，已是许久\n   以来我和异性相处最放松的时光。）" },
    100539: { nxId: 1, scene: 14004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（但下一次？\n  我都不知道会不会有下一次见面……）" },
    100540: { nxId: 1, scene: 14004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（大概等我回来的时候，\n  他也已经踏上返程的旅途……）" },
    100541: { nxId: 1, scene: 14004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（不过又有什么关系呢，\n  人生本就是不断地相遇和别离……）" },
    100542: { nxId: 1, scene: 14004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（我们都有不得不走下去的横平竖直……\n   其他的，交给命运吧。）" },
    100543: { nxId: 1, scene: 14004, doing: 1, item: 0, music: "", sound: "", txt: "你大步走向登机口，没有回头。" },
    //飞机
    100544: { nxId: 100555, scene: 14004, doing: 6, item: 61002, music: "", sound: "", txt: "CG动画" },
    100555: { nxId: -1, scene: 14004, doing: -1, item: 211002, music: "", sound: "", txt: "" },
}

export class CfgChapter1 {
    public chapters: any = chapterObj;
    public endChatuList: string[] = ["t2#机场大厅", "bar#老地方", "guku#梨花带雨顾廷巍", "bg_1_4#检票口"];
}