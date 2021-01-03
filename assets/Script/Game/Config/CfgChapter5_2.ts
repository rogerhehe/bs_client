/** 操作ID,下一步操作ID,场景ID,操作类型,具体操作ID,描述 */
/** 操作类型: -1.无 0.背景移动 1.旁白 2.对话 3.人物介绍 4.分支选择 5.插图 6.CG动画 7.好感度 8.衣服选择 9.电话微信 10.回忆 11.彩蛋*/

let chapterObj = {
    //酒店房间（日）
    520001: { nxId: 1, scene: 21001, doing: 0, item: 0, music: "gutingwei", sound: "", txt: "背景初始化" , notopen: 1},
    520002: { nxId: 1, scene: 21004, doing: 12, item: 125201, music: "", sound: "", txt: "地点介绍" , notopen: 1},
    520003: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "你睡的半梦半醒，揉了揉头发，刚\n想抬起另一只手，发现自己的手却\n被另一只手抓着动弹不得。" , notopen: 1},
    520004: { nxId: 1, scene: 21004, doing: 2, item: 211016, music: "", sound: "", txt: "[我]（谁的手？）" , notopen: 1},
    520005: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "你睁开眼，看到顾廷巍就躺在你的\n旁边，睡得正香……" , notopen: 1},
    520006: { nxId: 1, scene: 21004, doing: 2, item: 211012, music: "", sound: "", txt: "[我]啊啊啊啊啊！" , notopen: 1},
    520007: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "你赶忙挣脱开被抓着的手，坐了起\n来。顾廷巍也被你的叫声吵醒，慢\n慢睁开了眼。", notopen: 1 },
    520008: { nxId: 1, scene: 21004, doing: 2, item: 211012, music: "", sound: "", txt: "[我]你怎么会在这？", notopen: 1 },
    520009: { nxId: 1, scene: 21004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]我送你回来的时候，你拽着我非要\n我留下来陪你的啊。", notopen: 1 },
    520010: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍起身下床，你下意识低头看\n自己的衣服。", notopen: 1 },
    520011: { nxId: 1, scene: 21004, doing: 2, item: 211016, music: "", sound: "", txt: "[我]（还好，还好，有穿衣服。诶……\n   但谁给我换的睡衣？）" , notopen: 1},
    520012: { nxId: 1, scene: 21004, doing: 2, item: 211012, music: "", sound: "", txt: "[我]我的衣服谁换的！？\n还有，你为什么在我床上！？" , notopen: 1},
    520013: { nxId: 1, scene: 21004, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]你不记得发生什么了？" , notopen: 1},
    520014: { nxId: 1, scene: 21004, doing: 2, item: 211012, music: "", sound: "", txt: "[我]发生了什么？快说呀！", notopen: 1 },
    520015: { nxId: 1, scene: 21004, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]怎么说呢？该发生的，不该发生的，\n好像都发生了。", notopen: 1 },
    
    520016: { nxId: 1, scene: 21004, doing: 4, item: 45201, music: "", sound: "", txt: "分支选择", notopen: 1 },
    //A
    520017: { nxId: 1, scene: 21004, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]干嘛这么凶啊？我逗你玩呢？", notopen: 1 },
    520018: { nxId: 520023, scene: 21004, doing: 2, item: 211012, music: "", sound: "", txt: "[我]我起床气超级大的，尤其今天还受\n到了惊吓，我手机呢？", notopen: 1 },
    //B
    520019: { nxId: 1, scene: 21004, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]你自己不会判断吗？问我？", notopen: 1 },
    520020: { nxId: 520023, scene: 21004, doing: 2, item: 211012, music: "", sound: "", txt: "[我]（我要是记得住我还问你干嘛！）\n   我手机呢？", notopen: 1 },
    //C
    520021: { nxId: 1, scene: 21004, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]你猜？", notopen: 1 },
    520022: { nxId: 1, scene: 21004, doing: 2, item: 211012, music: "", sound: "", txt: "[我]我才不相信你呢，你肯定骗我。\n我手机呢？" , notopen: 1},

    520023: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍拿起你的小包，把里面的手\n机递了给你。", notopen: 1 },
    520024: { nxId: 1, scene: 21004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]早上没电了，我就收到你包里了。" , notopen: 1},
    520025: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "你起身去给手机充电。顾廷巍拧开\n一瓶矿泉水递给了你，然后转身走\n进了卫生间。", notopen: 1 },
    520026: { nxId: 520028, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "你打开手机，看到了老妈的无数个\n电话以及学姐的留言：处的如何？\n到现在都不回我，莫非你们两个……", notopen: 1 },
    520028: { nxId: 520030, scene: 21004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]学姐，你要不要这么料事如神啊？" , notopen: 1},
    520030: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "你带着忐忑的心情回复学姐：我们\n出去喝了点酒，然后迷糊间我们好\n像那个了……怎么办啊学姐？", notopen: 1 },
    520031: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "发完信息你又震惊的发现老妈一堆\n未接电话中的异常。" , notopen: 1},
    520032: { nxId: 1, scene: 21004, doing: 2, item: 211013, music: "", sound: "", txt: "[我]咦，老妈的最后一通电话接听了，\n我不记得啊，难道是……" , notopen: 1},
    520033: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "正在思绪凌乱时，你又想起一事，\n赶紧下意识的摸了胸口，不对劲！" , notopen: 1},
    520034: { nxId: 1, scene: 21004, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]在你枕头边上。" , notopen: 1},
    520035: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "你扭头看到它被叠得方方正正地放\n在那里。" , notopen: 1},
    520036: { nxId: 1, scene: 21004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]所以我们……我……我跟你……" , notopen: 1},
    520037: { nxId: 1, scene: 21004, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]你跟我……", notopen: 1 },
    520038: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍一脸玩弄意味地盯着你。你\n感觉到脸在发烫，抱起怀里的衣物\n冲进了卫生间。" , notopen: 1},

    //酒店卫生间
    520039: { nxId: 1, scene: 41101, doing: 0, item: 0, music: "", sound: "closedoor", txt: "背景初始化", notopen: 1 },
    520040: { nxId: 1, scene: 41104, doing: 1, item: 0, music: "", sound: "", txt: "你看着镜中的自己，脸色羞红，懊\n恼的打开水龙头将水扑在脸上。" , notopen: 1},
    520041: { nxId: 1, scene: 41104, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍的声音又阴魂不散的传进来，\n句句惊心。", notopen: 1 },
    520042: { nxId: 1, scene: 41104, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]衣服是服务员帮你换的啦，我本来\n要走，是你拉着不让我走，还……" , notopen: 1},
    520043: { nxId: 1, scene: 41104, doing: 1, item: 0, music: "", sound: "opendoor", txt: "听到这里，你再也忍不住，急匆匆\n冲出卫生间，一脸严肃地盯着外门\n的顾廷巍。", notopen: 1 },

    //酒店房间（日）
    520044: { nxId: 1, scene: 21001, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" , notopen: 1},
    520045: { nxId: 520047, scene: 21004, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]姐姐你来啦？", notopen: 1 },
    520047: { nxId: 1, scene: 21004, doing: 2, item: 211012, music: "", sound: "", txt: "[我]你！你！" , notopen: 1},

    520048: { nxId: 1, scene: 21004, doing: 4, item: 45202, music: "", sound: "", txt: "分支选择" , notopen: 1},
    //A //酒店清晨
    520049: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍带着毫不掩饰的笑意开始了\n叙述。" , notopen: 1},
    520050: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "时间回到早上，服务员已经给你换\n好了衣服。" , notopen: 1},
    520051: { nxId: 1, scene: 21004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]嗯……", notopen: 1 },
    520052: { nxId: 1, scene: 21004, doing: 2, item: 213016, music: "", sound: "", txt: "[顾廷巍]酒量不行就少喝点嘛……" , notopen: 1},
    520053: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍帮你解开高跟鞋的绑带，小\n心的脱下鞋子。帮你把被子盖好。" , notopen: 1},
    520054: { nxId: 1, scene: 21004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]好热，不舒服。", notopen: 1 },
    520055: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "你坐起身伸手解开内衣抽出来，随\n手扔到了床上。" , notopen: 1},
    520056: { nxId: 1, scene: 21004, doing: 2, item: 211017, music: "", sound: "", txt: "[我]终于舒坦了。", notopen: 1 },
    520057: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍吃惊地看着你，提起内衣帮\n你收了在了床头，再次帮你把被子\n掖好。" , notopen: 1},
    520058: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "kiss", sound: "", txt: "做完这一切，顾廷巍正准备离开，\n你却伸手拉住了他。", notopen: 1 },
    520059: { nxId: 1, scene: 21004, doing: 2, item: 211014, music: "", sound: "", txt: "[我]你别走，别走……" , notopen: 1},
    520060: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍坐回床边握着你的手，眼波\n温柔地看着你。" , notopen: 1},
    520061: { nxId: 1, scene: 21004, doing: 2, item: 213013, music: "", sound: "", txt: "[顾廷巍]我在这呢……", notopen: 1 },
    520062: { nxId: 1, scene: 21004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]你是不是对我有意思？" , notopen: 1},
    520063: { nxId: 1, scene: 21004, doing: 2, item: 213018, music: "", sound: "", txt: "[顾廷巍]……", notopen: 1 },
    520064: { nxId: 1, scene: 21004, doing: 2, item: 211017, music: "", sound: "", txt: "[我]你这个贪财的小鬼，那点小心思姐\n姐我看的明明白白的。", notopen: 1 },
    520065: { nxId: 1, scene: 21004, doing: 2, item: 213018, music: "", sound: "", txt: "[顾廷巍]我……", notopen: 1 },
    520066: { nxId: 1, scene: 21004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]你这个人很令人讨厌。", notopen: 1 },
    520067: { nxId: 1, scene: 21004, doing: 2, item: 213013, music: "", sound: "", txt: "[顾廷巍]许多人这么说……", notopen: 1 },
    520068: { nxId: 1, scene: 21004, doing: 2, item: 211012, music: "", sound: "", txt: "[我]讨厌你长得好看。讨厌你打乱我的\n计划。讨厌你总是挑战我的底线。" , notopen: 1},
    520069: { nxId: 1, scene: 21004, doing: 2, item: 211012, music: "", sound: "", txt: "[我]我最讨厌你，让我怀疑，怀疑自己\n的人生信条。" , notopen: 1},
    520070: { nxId: 1, scene: 21004, doing: 2, item: 211012, music: "", sound: "", txt: "[我]老娘怎么可能喜欢上一个才认识两\n天的人！还是一个小屁孩！", notopen: 1 },
    520071: { nxId: 1, scene: 21004, doing: 2, item: 213016, music: "", sound: "", txt: "[顾廷巍]我不是！", notopen: 1},
    520072: { nxId: 1, scene: 21004, doing: 2, item: 211012, music: "", sound: "", txt: "[我]你就是！" , notopen: 1},
    520073: { nxId: 1, scene: 21004, doing: 2, item: 213016, music: "", sound: "", txt: "[顾廷巍]你醉了，我先回去了。" , notopen: 1},
    520074: { nxId: 1, scene: 21004, doing: 2, item: 211012, music: "", sound: "", txt: "[我]亲我一下，不然不准走！" , notopen: 1},
    520075: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍犹豫了一下，最终伸手撩开\n了你的头发，你眯着眼睛看着他。" , notopen: 1},
    520076: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍伸手轻抚了你的脸颊，然后\n温柔地吻在了你的额头上。", notopen: 1 },
    520077: { nxId: 1, scene: 21004, doing: 2, item: 211017, music: "", sound: "", txt: "[我]哎呀，笨死了，不是这里……" , notopen: 1},
    520078: { nxId: 1, scene: 21004, doing: 2, item: 213016, music: "", sound: "", txt: "[顾廷巍]啊？" , notopen: 1},
    520079: { nxId: 1, scene: 21004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]要这样……", notopen: 1 },
    520080: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "看着他有些错愕的表情，你轻笑一\n声，顺势捧起了顾廷巍的脸，毫不\n迟疑地贴上了他的唇……" , notopen: 1},
    520081: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "随着顾廷巍的叙述，你逐渐想起了\n早上的所作所为。" , notopen: 1},
    520082: { nxId: 1, scene: 21004, doing: 2, item: 211013, music: "gutingwei", sound: "", txt: "[我]所以，是我主动亲了你！？", notopen: 1 },
    520083: { nxId: 1, scene: 21004, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]对啊！很用力！" , notopen: 1},
    520084: { nxId: 1, scene: 21004, doing: 2, item: 211013, music: "", sound: "", txt: "[我]不会的，你肯定是骗我……" },
    520085: { nxId: 1, scene: 21004, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]我有必要撒谎吗，姐姐你好好整理\n下思绪先……", notopen: 1 },
    520086: { nxId: 1, scene: 21004, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]如果实在无法释怀，我，嗯，也是\n可以负责的……" , notopen: 1},
    //顾3
    520087: { nxId: 1, scene: 21004, doing: 7, item: 71003, music: "", sound: "", txt: "好感度" , notopen: 1},
    520088: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍说完转身走进了卫生间，你\n能明显感觉他脚步中的愉快轻松……" , notopen: 1},
    520089: { nxId: 1, scene: 21004, doing: 2, item: 211013, music: "", sound: "", txt: "[我]啊啊啊啊啊啊！我的形象全毁了！", notopen: 1 },
    520090: { nxId: 520094, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "你无助地瘫倒在床上，在羞怯，不\n知所措和微微甜蜜的狂风中凌乱……" , notopen: 1},

    //B
    520091: { nxId: 1, scene: 21004, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]逗你的，你想的事没有发生。" , notopen: 1},
    520092: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍转身走进了卫生间，你则长\n出了一口气……" , notopen: 1},
    520093: { nxId: 1, scene: 21004, doing: 2, item: 211017, music: "", sound: "", txt: "[我]呼！吓死宝宝了，虚惊一场。", notopen: 1 },
    
    520094: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "过了好一会，你的思绪心情才逐渐\n平复，顾廷巍又出现了。", notopen: 1 },
    520095: { nxId: 1, scene: 21004, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]姐姐，下午陪我去打工吧。" , notopen: 1},
    520096: { nxId: 1, scene: 21004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]可以不去吗？" , notopen: 1},
    520097: { nxId: 1, scene: 21004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]很简单的，你扮演个面瘫就好。", notopen: 1 },
    520098: { nxId: 1, scene: 21004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]就是昨天你那种雕像吗？我不，姐\n姐是来旅行的，不是来作死的。" , notopen: 1},
    520099: { nxId: 1, scene: 21004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]没那么恐怖，我都计划好了。", notopen: 1 },

    520100: { nxId: 1, scene: 21004, doing: 4, item: 45203, music: "", sound: "", txt: "分支选择" , notopen: 1},
    //A 
    520101: { nxId: 1, scene: 21004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]我有我今天的旅行计划，要不你陪\n我，就算私人导游，我付钱给你。", notopen: 1 },
    520102: { nxId: 1, scene: 21004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]听上去不错！但是我这个COS体\n验是很不一样的，你应该尝试一下。" , notopen: 1},
    520103: { nxId: 520110, scene: 21004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]那我考虑一下。", notopen: 1 },
    //B
    520104: { nxId: 1, scene: 21004, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]我准备把你扮成印度阿三，头巾一\n裹，面纱一遮，多冷的隆冬……" , notopen: 1},
    520105: { nxId: 1, scene: 21004, doing: 2, item: 211012, music: "", sound: "", txt: "[我]走好不送！", notopen: 1 },
    520106: { nxId: 1, scene: 21004, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]其实我是要把姐姐你扮成仙女的。" , notopen: 1},
    520107: { nxId: 1, scene: 21004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]这还差不多，不过有这么简单吗？", notopen: 1 },
    520108: { nxId: 1, scene: 21004, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]当然，为了让你有仙女的感觉，你\n得绑在一个架子上。", notopen: 1 },
    520109: { nxId: 1, scene: 21004, doing: 2, item: 211012, music: "", sound: "", txt: "[我]果然又是套路，不去！", notopen: 1 },

    520110: { nxId: 1, scene: 21004, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]跟我去，我就告诉你，你妈电话都\n说了什么。" , notopen: 1},
    520111: { nxId: 1, scene: 21004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]……你赢了……" , notopen: 1},

    //兰布拉大道 
    520112: { nxId: 1, scene: 32001, doing: 0, item: 0, music: "cityrun", sound: "", txt: "背景初始化" },
    520113: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你扮成了一个彩衣飘飘的仙子，通\n过木架固定，看上起好像浮在半空\n中，颇有仙气，很敦煌，很飞天。" }, 
    520114: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍正在你面前的地上用粉笔涂\n涂写写。" },

    520115: { nxId: 1, scene: 32004, doing: 4, item: 45204, music: "", sound: "", txt: "分支选择" },
    //A 
    520116: { nxId: 1, scene: 32004, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]一个小时吧，或者赚到200欧元\n的话，也可以提前收工。" },
    520117: { nxId: 520121, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]太狠了，小小年纪，就这么贪财。" },
    //B
    520118: { nxId: 1, scene: 32004, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]介绍啊，得给你一点仪式感。" },
    520119: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那你念给我听听。" },
    520120: { nxId: 1, scene: 32004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]待会儿再念。" },

    520121: { nxId: 1, scene: 32004, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]姐姐你现在可是飞天仙女，跟周围\n这些妖魔鬼怪不一样，要优雅。" },
    520122: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你看了眼周围，有巫师，有恶魔，\n有怪物，果然是各色奇葩云集。" },
    520123: { nxId: 1, scene: 32004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]顾廷巍，你为什么不扮。" },
    520124: { nxId: 1, scene: 32004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]今天的主角是你，我有别的辅助工\n作要做。" },
    520125: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "一种怪异的紧张感袭上你的心头，\n因为那个木架导致你一条腿根本动\n弹不得，微微有些酸痛。" },
    520126: { nxId: 1, scene: 32004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]我怎么就听了你的鬼话。" },
    520127: { nxId: 1, scene: 32004, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]姐姐你很有天赋的，哈哈哈。" },
    520128: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "听到你们的对话，一旁的恶魔扭头\n看向你，猩红的脸上露出诡异的笑。" },
    520129: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……我后悔了，顾廷巍给，你赶紧\n把我弄下来！" },
    520130: { nxId: 1, scene: 32004, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]这都还没开始，你就打退堂鼓啦？\n坚持一下。" },
    520131: { nxId: 1, scene: 32004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]你跟着我的手势做，假装自己是要\n飞升的仙女。" },
    520132: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "说着，顾廷巍开始手比莲花，摆了\n几个婀娜的姿势。" },

    520133: { nxId: 1, scene: 32004, doing: 4, item: 45205, music: "", sound: "", txt: "分支选择" },
    //A 
    520134: { nxId: 1, scene: 32004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]几个动作而已，你做一遍我看看。" },
    520135: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你凭着感觉做了一遍，顾廷巍瞬间\n变身颜艺帝，表情精彩的都可以做\n表情包了。" },
    520136: { nxId: 1, scene: 32004, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]你这是仙女吗！\n你这是大楼外面擦窗户的！" },
    520137: { nxId: 1, scene: 32004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]嫌弃我啊，那换人喽，我觉得你扮\n女装说不定更棒！" },
    520138: { nxId: 520146, scene: 32004, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]我忽然觉得，姐姐你姿势特别美，\n就这样吧。" },
    //B
    520139: { nxId: 1, scene: 32004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]你别说废话，做一下给我看看。" },
    520140: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你回忆着顾廷巍的动作，尽量的比\n划起来。" },
    520141: { nxId: 1, scene: 32004, doing: 2, item: 213020, music: "", sound: "", txt: "[顾廷巍]……" },
    520142: { nxId: 1, scene: 32004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]……" },
    520143: { nxId: 1, scene: 32004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]你知道你像什么吗？" },
    520144: { nxId: 1, scene: 32004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]我又看不见，应该不算太差吧。" },
    520145: { nxId: 1, scene: 32004, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]别人飞天你坠地……\n算了，欺负老外看不懂好了。" },

    520146: { nxId: 1, scene: 32004, doing: 2, item: 213001, music: "cityrun", sound: "", txt: "[顾廷巍]差不多了，姐姐，准备了喔！" },
    520147: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "周围好奇的人群开始向你们聚拢过\n来。顾廷巍从包里不知道拿出什么\n鬼东西朝着空中一按。" },
    520148: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "一堆五颜六色泡泡喷射而出，在阳\n光映衬下熠熠生辉。" },
    520149: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "身处泡泡中的你宛如壁画中的伎乐\n飞天，美艳圣洁，衣袂飘飘，随时\n可能乘风而去。" },
    520150: { nxId: 1, scene: 32004, doing: 6, item: 65201, music: "", sound: "", txt: "CG动画" },//仙女
    520151: { nxId: 1, scene: 32004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]姐姐，跳舞啊！动起来！\n烟火红尘苦，我欲飞天舞。" },
    520152: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍朝你拼命挥手示意。\n你白了他一眼，开始变换姿势。" },
    520153: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "大量行人被神秘的东方风情吸引，\n纷纷簇拥过来。顾廷巍适时拿出竹\n笛，开始演奏一首悠扬的古风曲。" },
    520154: { nxId: 1, scene: 32004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（这小子，音乐素养不错嘛！）" },
    520155: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "一曲毕，周边掌声喝彩口哨并起，\n顾廷巍身边的零钱桶，立刻传来叮\n叮咚咚的声音。" },
    520156: { nxId: 1, scene: 32004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]想要拍照的，10欧元一次哦。" },
    520157: { nxId: 1, scene: 32004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（黑，真黑啊！等下要找他分赃！\n   不能白辛苦。）" },
    520158: { nxId: 1, scene: 32004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]这是一位抛弃凡尘飞升成仙的美丽\n女子，她有着凄美的爱情过往……" },

    520159: { nxId: 1, scene: 32004, doing: 4, item: 45206, music: "", sound: "", txt: "分支选择" },
    //A 
    520160: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]树上的鸟儿成双对，绿水青山带笑\n颜……" },
    520161: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你学着小时候和姥姥一起看的黄梅\n戏天仙配，努力还原着七仙女的唱\n腔和姿态。" },
    520162: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "围观行人用表情告诉你，他们根本\n没听懂你的唱腔，但要求合照的人\n依旧络绎不绝。" },
    520163: { nxId: 1, scene: 32004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（对牛弹琴，难为我这么努力！）" },
    520164: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "就在你微感挫折的时候，顾廷巍看\n你的眼中却有着惊喜与赞赏。" },
    //顾2
    520165: { nxId: 520167, scene: 32004, doing: 7, item: 71002, music: "", sound: "", txt: "好感度" },
    //B
    520166: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "被神秘东方之美吸引的路人纷纷围\n了上来，要跟你合照。" },

    520167: { nxId: 1, scene: 32004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]合照呢，姐姐，专业一点，笑容再\n有感染力一点……" },
    520168: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "就在你一边带着亲切微笑与行人合\n影，一边用眼神杀死顾廷巍之时，\n一个羞涩的小男孩站在了你身边。" },

    520169: { nxId: 1, scene: 32004, doing: 4, item: 45207, music: "", sound: "", txt: "分支选择" },
    //A 
    520170: { nxId: 1, scene: 32004, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]仙女姐姐抱你了哟。" },
    520171: { nxId: 520173, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "小男孩很惊喜，开心地看着你。" },
    //B
    520172: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "小男孩笑得格外羞涩，目光时不时\n盯着你看。" },
    
    520173: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "小男孩的母亲很满意，向你点头致\n意。之后你和行人们不停合照，很\n快一个小时就过去了。" },
    520174: { nxId: 1, scene: 32004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]喂！差不多了吧！\n可以把我放下来了吧。" },
    520175: { nxId: 1, scene: 32004, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]姐姐，我看你根本就是乐在其中啊。" },
    520176: { nxId: 1, scene: 32004, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]扮仙女扮得可开心啊，每个跟你合\n照的人都会忍不住看你呢。" },
    520177: { nxId: 1, scene: 32004, doing: 2, item: 211005, music: "", sound: "", txt: "[我]我本来就是天仙本仙啊，不过本仙\n已经快感觉不到我的一条腿了……" },
    520178: { nxId: 1, scene: 32004, doing: 2, item: 211005, music: "", sound: "", txt: "[我]顾廷巍，要不换你来扮个……" },

    520179: { nxId: 1, scene: 32004, doing: 4, item: 45208, music: "", sound: "", txt: "分支选择" },
    //A 
    520180: { nxId: 1, scene: 32004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]女王陛下，贫僧取经心切，还望陛\n下早日发放通关碟文。" },
    520181: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍说着双掌合十，向你一礼，\n举手投足间还真有点高僧的范儿。" },
    520182: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]御弟哥哥……啊！" },
    520183: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你正要接着演下去，话一出口就发\n现不对，接着就看到顾廷巍一脸坏\n笑看着你……" },
    520184: { nxId: 1, scene: 32004, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]哎！" }, 
    520185: { nxId: 1, scene: 32004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]臭小子，在这等我呢！" },
    520186: { nxId: 1, scene: 32004, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]哈哈哈哈！" },
    //顾1
    520187: { nxId: 520198, scene: 32004, doing: 7, item: 71001, music: "", sound: "", txt: "好感度" },
    //B
    520188: { nxId: 1, scene: 32004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]我要是孙悟空，那你不就是摘桃子\n的仙娥。" },
    520189: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谁要做仙娥啊！还得被你吓唬。" },
    520190: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我要做观音姐姐，不管你怎么兴风\n作浪，一片树叶就能收拾你！" },
    //顾1
    520191: { nxId: 520198, scene: 32004, doing: 7, item: 71001, music: "", sound: "", txt: "好感度" },
    //C
    520192: { nxId: 1, scene: 32004, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]我扮他岂不是浪费我这副好皮囊。" },
    520193: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我觉得你说不定呢？可以考验一下\n你的演技。" },
    520194: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍看着你坏笑的脸，故意迈着\n外八字，挺着肚子，假装肩头扛着\n钉耙目光灼灼地看你。" },
    520195: { nxId: 1, scene: 32004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]女菩萨，俺老猪这，这厢有礼啦……" },
    520196: { nxId: 1, scene: 32004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈哈！\n你真是太棒了，天赋极佳。" },
    //顾1
    520197: { nxId: 1, scene: 32004, doing: 7, item: 71001, music: "", sound: "", txt: "好感度" },

    520198: { nxId: 1, scene: 32004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]看你这生龙活虎的样子，一点都不\n像瘸了的样子。" },
    520199: { nxId: 1, scene: 32004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你再不放我下来，我就真要瘸了。" },
    520200: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍把你从架子上解放了下来，\n你们收拾好东西便走到附近的椅子\n上坐了下来，顾廷巍埋头数着钱。" },
    520201: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]看上去挣了不少啊。" },
    520202: { nxId: 1, scene: 32004, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]是，比平时还多了不少，\n都超200欧了呢。" },
    520203: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]分我一半！" },
    520204: { nxId: 1, scene: 32004, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]美得你，我带你玩，不得花钱啊？" },

    520205: { nxId: 1, scene: 32004, doing: 4, item: 45209, music: "", sound: "", txt: "分支选择" },
    //A 
    520206: { nxId: 1, scene: 32004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]真是不知足，姐姐你今天能美出新\n高度，还不是我给你创造的机会。" },
    520207: { nxId: 1, scene: 32004, doing: 2, item: 211005, music: "", sound: "", txt: "[我]什么叫你创造的机会，本天仙从来\n都是美美哒！" },
    520208: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你一个伸手过去想抓一把钱。可是\n顾廷巍反应更快，一扭身让你扑了\n个空。" },
    520209: { nxId: 520211, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "然后变戏法似的把零钱桶塞进了背\n包，接着又变出了一个白色的胶布\n状的东西。" },
    //B
    520210: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你扭了扭酸痛的脚，顾廷巍扭身从\n背包里翻出一个白色的胶布状的东\n西递给你。" },

    520211: { nxId: 1, scene: 32004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]足贴给你，贴在脚底你就好了。" },
    520212: { nxId: 1, scene: 32004, doing: 2, item: 211003, music: "", sound: "", txt: "[我]大庭广众的，你要我脱袜子脱鞋，\n不好吧。" },
    520213: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍一把拿过足贴，蹲到你面前\n脱下了你的鞋子和船袜。" },
    520214: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]其实不用，就算不贴我也能走路的\n好吗？" },
    520215: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍没有搭理你，自顾自地帮你\n贴好了足贴。" },
    520216: { nxId: 1, scene: 32004, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]你不想贴是你的事，\n但我看不惯你一瘸一拐。" },
    520217: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "一阵清凉感从脚底传来，酸痛感淡\n去了不少。" },
    520218: { nxId: 1, scene: 32004, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]走，请你吃晚饭。" },
    520219: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍背上包就走，你无奈的跟了\n过去。" },
    520220: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]去哪吃啊？还有赶紧告诉我，我妈\n电话里说了什么……" },

    //顾廷巍走道
    520221: { nxId: 1, scene: 52101, doing: 0, item: 0, music: "gutingwei", sound: "", txt: "背景初始化" },
    520222: { nxId: 1, scene: 52104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你就住在这种地方啊。" },
    520223: { nxId: 1, scene: 52104, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍埋头翻包，摸了半天。" },
    520224: { nxId: 1, scene: 52104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你不会没带钥匙吧。" },
    520225: { nxId: 1, scene: 52104, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]好像还真没带！不过没关系。" },
    520226: { nxId: 1, scene: 52104, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍敲响了隔壁门，一个老伯打\n开了门。" },
    520227: { nxId: 1, scene: 52104, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]你上周刚爬过一回，这才过了几天。" },
    520228: { nxId: 1, scene: 52104, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]而且你还打断了我的美梦，你知道\n梦中我正在和我的女神……" },
    520229: { nxId: 1, scene: 52104, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]老伯，停停停，我身边还有人呢。" },
    520230: { nxId: 1, scene: 52104, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]这个漂亮的姑娘是谁啊？" },
    520231: { nxId: 1, scene: 52104, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]我朋友，林晓璐。" },
    520232: { nxId: 1, scene: 52104, doing: 1, item: 0, music: "", sound: "", txt: "老伯热情地拥抱了你，还在你脸上\n贴了三下，他的胡子扎得你有些痒。" },
    520233: { nxId: 1, scene: 52104, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]如果我年轻个20岁，我一定要与\n你约会。" },

    520234: { nxId: 1, scene: 52104, doing: 4, item: 45210, music: "", sound: "", txt: "分支选择" },
    //A
    520235: { nxId: 520237, scene: 52104, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]我可是认真的！" },
    //B
    520236: { nxId: 1, scene: 52104, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]老咯！森林已经不属于我了。" },

    520237: { nxId: 1, scene: 52104, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]美丽的东方女孩儿，来我家坐坐，\n我给你说说西班牙的传奇故事。" },
    520238: { nxId: 1, scene: 52104, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍大声的咳了一下，老伯很不\n悦的转向顾廷巍。" },
    520239: { nxId: 1, scene: 52104, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]这是最后一次啊。门口随便找个地\n方，钥匙放里面，别再来麻烦我。" },
    520240: { nxId: 1, scene: 52104, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]如果我还忘带钥匙，我就跟你写一\n个免责声明，不过她你还是算了。" },
    520241: { nxId: 1, scene: 52104, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍走进房间，就留你和老\n伯在门口。" },
    520242: { nxId: 1, scene: 52104, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]你是他第一个带回来的女孩子，\n女朋友吗？" },
 
    520243: { nxId: 1, scene: 52104, doing: 4, item: 45211, music: "", sound: "", txt: "分支选择" },
    //A
    520244: { nxId: 1, scene: 52104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我们只是朋友而已。" },
    520245: { nxId: 520249, scene: 52104, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]唔，在他心里你可不只是朋友。" },
    //B
    520246: { nxId: 1, scene: 52104, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]那以后就是了。我就知道，这小子\n跟那个闹腾的姑娘迟早分手。" },
    520247: { nxId: 520249, scene: 52104, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]每次打电话都吵的不可开交，这可\n不是爱情该有的样子。" },
    //C
    520248: { nxId: 1, scene: 52104, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]这不明摆着吗？我约会过的女孩子\n比你们俩加起来的岁数都多。" },

    520249: { nxId: 1, scene: 52104, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]这小子需要个人管管，家里的钥匙\n也一定要拿好。" },
    520250: { nxId: 1, scene: 52104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]他这是去干嘛？" },
    520251: { nxId: 1, scene: 52104, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]从我家窗户翻过去开门。" },
    520252: { nxId: 1, scene: 52104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这不是很危险吗？\n要不我们过去看看吧？万一……" },
    520253: { nxId: 1, scene: 52104, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]没事儿，这小子早就熟练了……" },
    520254: { nxId: 1, scene: 52104, doing: 1, item: 0, music: "", sound: "opendoor", txt: "说话间，顾廷巍的房门打开了。" },
    520255: { nxId: 1, scene: 52104, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]进来吧！今天让你尝尝我的手艺。" },
    520256: { nxId: 1, scene: 52104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]老伯，再见。" },
    520257: { nxId: 1, scene: 52104, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]老伯，待会儿我给你送一份过去。" },
    520258: { nxId: 1, scene: 52104, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]不用了，这才几点，吃饭还早呢！\n况且你们中国人的东西我吃不惯。" },
    520259: { nxId: 1, scene: 52104, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]你们两个，待会儿动静别太大啊。" },
    520260: { nxId: 1, scene: 52104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]老伯，别误会，不是你想的那样！" },
    520261: { nxId: 1, scene: 52104, doing: 1, item: 0, music: "", sound: "", txt: "老伯笑笑，\n没有搭理你自顾自关了门。" },
    520262: { nxId: 1, scene: 52104, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]他就这样，年轻的时候风流得很。" },
    520263: { nxId: 1, scene: 52104, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]房里挂的都是他和女孩子的合影什\n么的，就以为别人都跟他一样。" },

    520264: { nxId: 1, scene: 52104, doing: 4, item: 45212, music: "", sound: "", txt: "分支选择" },
    //A
    520265: { nxId: 1, scene: 52104, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]有吗？" },//你全家都是直男癌
    520266: { nxId: 1, scene: 52104, doing: 2, item: 211004, music: "", sound: "", txt: "[我]不严重，还有救！" },
    520267: { nxId: 520276, scene: 52104, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]好吧，请姐姐一定救我……" },
    //B
    //正常分支
    520268: { nxId: 1, scene: 52104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你最纯情了。" },
    520269: { nxId: 1, scene: 52104, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]你这语气听起来像在嘲讽我。" },
    520270: { nxId: 1, scene: 52104, doing: 2, item: 211004, music: "", sound: "", txt: "[我]你最纯情了。" },
    //顾1
    520271: { nxId: 520276, scene: 52104, doing: 7, item: 71001, music: "", sound: "", txt: "好感度" },
    //特殊分支
    520272: { nxId: 1, scene: 52104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你最纯情了。" },
    520273: { nxId: 1, scene: 52104, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]你这语气听起来像在嘲讽我。" },
    520274: { nxId: 1, scene: 52104, doing: 2, item: 211004, music: "", sound: "", txt: "[我]你最纯情了。" },
    //顾2
    520275: { nxId: 1, scene: 52104, doing: 7, item: 71002, music: "", sound: "", txt: "好感度" },

    520276: { nxId: 1, scene: 52104, doing: 1, item: 0, music: "", sound: "", txt: "说笑间，你跟着顾廷巍走进了他的\n公寓。" },

    //顾廷巍公寓
    520277: { nxId: 1, scene: 52201, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    520278: { nxId: 1, scene: 52204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]请进！" },
    520279: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没想到你整理得很干净嘛。" },
    520280: { nxId: 1, scene: 52204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]不然呢？狗窝吗？我可是受不了。" },
    520281: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "阳台的门打开着，窗帘在微风的吹\n拂下不断摆动。" },
    520282: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍翻箱倒柜拿了一堆东西放在\n料理台上。" },
    520283: { nxId: 1, scene: 52204, doing: 2, item: 211004, music: "", sound: "", txt: "[我]你要做什么大餐？和你说我嘴可刁\n了，不是好东西我不会满足的。" },
    520284: { nxId: 1, scene: 52204, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]我正在思考。" },
    520285: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "你走进一看，一袋冰冻的杂菜，四\n五个鸡蛋，还有两袋泡面。" },
    520286: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]要不还是姐姐请你出去吃吧，别勉\n强自己。" },
    520287: { nxId: 1, scene: 52204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]不勉强，我已经想到做什么了。" },
    520288: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]可我不想勉强我自己啊！" },
    520289: { nxId: 1, scene: 52204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]放心绝对能吃就是了。" },
    520290: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]能吃？我刚刚说什么来着。" },
    520291: { nxId: 1, scene: 52204, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]保证好吃。" },
    520292: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你要是毒害我，\n我做鬼都不会放过你。" },
    520293: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍从冰箱里拿出饮料递给你。" },
    520294: { nxId: 1, scene: 52204, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]先喝点东西，坐一会儿，马上好。" },
    520295: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "你看着眼前饮料上的日期，确定没\n过期才敢喝。" },
    520296: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]很多乐器呢，都是你的？" },
    520297: { nxId: 1, scene: 52204, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]对，他们花了我不少钱。" },
    520298: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]说起来，你到底是学什么的？" },
    520299: { nxId: 1, scene: 52204, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]这不是很明显吗？" },

    520300: { nxId: 1, scene: 52204, doing: 4, item: 45213, music: "", sound: "", txt: "分支选择" },
    //A
    520301: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]对，没错。" },
    520302: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]学音乐不是应该去法国，德国，奥\n地利之类的地方吗？" },
    520303: { nxId: 520309, scene: 52204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]西班牙也有很好的音乐学府的。" },
    //B
    520304: { nxId: 1, scene: 52204, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]你故意的是不是。" },
    520305: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]怎么可能，我都是大胆猜测，小心\n求证啊。" },
    520306: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]分明我就是学音乐的！" },
    520307: { nxId: 1, scene: 52204, doing: 2, item: 211004, music: "", sound: "", txt: "[我]学就学呗，琵琶二胡还是唢呐？" },
    520308: { nxId: 1, scene: 52204, doing: 2, item: 213020, music: "", sound: "", txt: "[顾廷巍]……" },

    520309: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "不一会，开放式的厨房传来油锅的\n爆响，淡淡的食物香味飘散过来。" },
    520310: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "lingsheng", txt: "你的手机这时响起，却是学姐。" },

    520311: { nxId: 520312, scene: 52204, doing: 9, item: 952011, music: "", sound: "", txt: "电话微信" },

    520312: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "你抬眼看着正在忙碌的顾廷巍，他\n穿着围裙娴熟地拿着平底锅，认真\n地看着锅里颠着蛋甚是可爱。" },
    520313: { nxId: 1, scene: 52204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（难道我喜欢他吗？\n   那他……会喜欢我吗？）" },
    520314: { nxId: 1, scene: 52204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]你看着我干什么？" },
    520315: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]盯着你，以防你给我下毒。" },
    520316: { nxId: 1, scene: 52204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]放心，你没看到我刚刚试吃过了。" },
    520317: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "bowenlang", sound: "", txt: "正要说话，你却瞥见了垃圾桶中撕\n碎了的照片，是顾廷巍和那个叫孟\n淑的女孩的合照。" },

    520318: { nxId: 1, scene: 52204, doing: 4, item: 45214, music: "", sound: "", txt: "分支选择" },
    //A
    520319: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]有个问题我想问你。" },
    520320: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]你说。" },
    520321: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]如果你不想回答的话就当我没问。" },
    520322: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]你想知道我和孟淑的事情是吧。" },
    520323: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]对，有点好奇……" },
    520324: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]我不怎么想说，感觉是在别人背后\n说坏话。不过既然你想知道……" },
    520325: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]按照孟淑自己的说法，她是一个小\n公主，是需要别人捧着的。" },

    520326: { nxId: 1, scene: 52204, doing: 4, item: 45215, music: "", sound: "", txt: "分支选择" },
    //A
    520327: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]这方面我不太懂，\n不过我觉得我尽力了。" },
    520328: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我也相信你努力了。" },
    //顾1
    520329: { nxId: 520336, scene: 52204, doing: 7, item: 71001, music: "", sound: "", txt: "好感度" },
    //B
    520330: { nxId: 1, scene: 52204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]我觉得你比我更有生活能力。" },
    520331: { nxId: 1, scene: 52204, doing: 2, item: 211004, music: "", sound: "", txt: "[我]以后有机会露一手，你就知道我多\n厉害了。" },
    //顾1
    520332: { nxId: 520336, scene: 52204, doing: 7, item: 71001, music: "", sound: "", txt: "好感度" },
    //C
    520333: { nxId: 1, scene: 52204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]你是为了不让我难过，\n才故意这么说吗？" },
    520334: { nxId: 1, scene: 52204, doing: 2, item: 211004, music: "", sound: "", txt: "[我]你这么理解，也可以。" },
    //顾1
    520335: { nxId: 1, scene: 52204, doing: 7, item: 71001, music: "", sound: "", txt: "好感度" },

    520336: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]我们是高中同学，虽然不常见面，\n也好几年了。" },
    520337: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]经济问题导致这几年我没法回去，\n但我一直相信我们的感情依旧。" },
    520338: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那为什么分手呢？" },
    520339: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]前不久是她的生日，我想给她一个\n惊喜，就买了机票提前回去了。" },
    520340: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]一切准备就绪我跟她确认好，就在\n她回家的必经之路等她……" },
    520341: { nxId: 1, scene: 52204, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]然而那一晚她没有回家……" },
    520342: { nxId: 1, scene: 52204, doing: 2, item: 211003, music: "", sound: "", txt: "[我]你等了一晚上？" },
    520343: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]也没有，大概就到凌晨3，4点吧。" },
    520344: { nxId: 1, scene: 52204, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]她说她在家没人陪孤单……\n说自己要早睡……" },

    520345: { nxId: 1, scene: 52204, doing: 4, item: 45216, music: "", sound: "", txt: "分支选择" },
    //A
    520346: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]当时我也这么想，但之后我发现，\n她朋友我一个都不认识。" },
    520347: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那她父母呢？" },
    520348: { nxId: 520350, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]她在学校外面租房子，一个人住。" },
    //B
    520349: { nxId: 1, scene: 52204, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]姐姐，你猜对了！" },//绿帽少年顾廷巍

    520350: { nxId: 1, scene: 52204, doing: 2, item: 211003, music: "", sound: "", txt: "[我]后来呢……" },
    520351: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]第二天我就和她见面了，但我始终\n放不下这件事。" },
    520352: { nxId: 1, scene: 52204, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]之后我趁她睡着的时候，\n看了她的手机……" },
    520353: { nxId: 1, scene: 52204, doing: 2, item: 211003, music: "", sound: "", txt: "[我]找到证据了？" },
    520354: { nxId: 1, scene: 52204, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]她有好几个暧昧的对象，那天跟其\n中一个在酒店。" },//此处应有田园女权杠精出没
    520355: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍低下头沉默不语，你走上前\n去温柔地抱住了他。" },
    520356: { nxId: 1, scene: 52204, doing: 2, item: 211003, music: "", sound: "", txt: "[我]这事憋了几天，说出来会好过一点。" },
    520357: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]谢谢你……" },
    //顾3
    520358: { nxId: 520360, scene: 52204, doing: 7, item: 71003, music: "", sound: "", txt: "好感度" },

    //B
    520359: { nxId: 1, scene: 52204, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]做好了！" },

    520360: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "饭香飘来，你和顾廷巍相视一笑，\n顾廷巍准备去搬椅子，你起身帮忙。" },
    520361: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "gutingwei", sound: "", txt: "[我]我来吧，放哪？" },
    520362: { nxId: 1, scene: 52204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]就放在阳台。" },
    520363: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍盛好了菜，端着盘子放到了\n小桌上。" },
    520364: { nxId: 1, scene: 52204, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]嗒嗒！\n顾氏意大利风味炒泡面配欧姆蛋。" },

    //顾廷巍阳台
    520365: { nxId: 1, scene: 52301, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    520366: { nxId: 1, scene: 52304, doing: 1, item: 0, music: "", sound: "", txt: "坐进顾廷巍为你安排的位置，眼前\n的美食卖相十分好。" },
    520367: { nxId: 1, scene: 52304, doing: 1, item: 0, music: "", sound: "", txt: "欧姆蛋像一个大饺子，里面混了杂\n菜，上面还撒了欧芹碎和擦丝的芝\n士，泡面的味道也不差。" },
    520368: { nxId: 1, scene: 52304, doing: 2, item: 211005, music: "", sound: "", txt: "[我]我还以为你会端出什么黑暗料理？\n没想到还不错啊。" },
    520369: { nxId: 1, scene: 52304, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]你不知道每个留学生出国第一件事\n就是学会做饭吗？" },
    520370: { nxId: 1, scene: 52304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]听说过，现在终于眼见为实了。" },
    520371: { nxId: 1, scene: 52304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不过，是什么让你变得如此优秀？\n是压力吗？是爱好吗？" },
    520372: { nxId: 1, scene: 52304, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]是穷！" },
    520373: { nxId: 1, scene: 52304, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈！" },
    520374: { nxId: 1, scene: 52304, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]真该让你去试试周围的中餐馆，\n你就知道国内有多好了。" },
    520375: { nxId: 1, scene: 52304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我懂得。" },
    520376: { nxId: 1, scene: 52304, doing: 1, item: 0, music: "missing", sound: "", txt: "顾廷巍拿起手机链接到附近的音箱\n上。一首优美的小夜曲，很好听，\n也很下饭。" },
    520377: { nxId: 1, scene: 52304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你这套房子很棒啊。" },
    520378: { nxId: 1, scene: 52304, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]我搬了5次家才找到这里。" },
    520379: { nxId: 1, scene: 52304, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]这片住宅最吸引我的就是阳台，能\n养花花草草，还能落座品茶。" },
    520380: { nxId: 1, scene: 52304, doing: 1, item: 0, music: "", sound: "", txt: "你放眼望去，一个男人正在浇花，\n撒到了楼下路过的老太太。老太太\n骂骂咧咧地按着楼下的门铃。" },
    520381: { nxId: 1, scene: 52304, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈哈，好有生活气息。" },
    520382: { nxId: 1, scene: 52304, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]喝点不？" },
    520383: { nxId: 1, scene: 52304, doing: 1, item: 0, music: "", sound: "", txt: "你扭头一看，老伯拿着一瓶酒提溜\n着两个杯子在隔壁阳台上冲你笑。" },

    520384: { nxId: 1, scene: 52304, doing: 4, item: 45217, music: "", sound: "", txt: "分支选择" },
    //A
    520385: { nxId: 1, scene: 52304, doing: 1, item: 0, music: "", sound: "", txt: "老伯斟了一杯酒，递了过来。" },
    520386: { nxId: 1, scene: 52304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]李子和紫罗兰的香气，不过，还是\n一如既往浓重的皮革味。" },
    520387: { nxId: 1, scene: 52304, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]小姐，看不出来你很懂啊？\n我们西班牙的酒不错吧。" },
    520388: { nxId: 1, scene: 52304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]对，很有特点。" },
    520389: { nxId: 1, scene: 52304, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]嘿嘿，莎士比亚说过，我们的酒是\n“装在瓶子里的西班牙阳光”。" },
    520390: { nxId: 1, scene: 52304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]名副其实。" },
    520391: { nxId: 1, scene: 52304, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]你可悠着点，\n别喝醉了又整出什么幺蛾子来。" },
    520392: { nxId: 520394, scene: 52304, doing: 2, item: 211004, music: "", sound: "", txt: "[我]那你帮我喝。" },
    520394: { nxId: 520397, scene: 52304, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]太酸了，我受不了。" },
    //B
    520395: { nxId: 1, scene: 52304, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]太遗憾了，这可是一瓶好酒啊。" },
    520396: { nxId: 1, scene: 52304, doing: 1, item: 0, music: "", sound: "", txt: "老伯又自饮自酌了一大杯，眼神飘\n忽地看着对面阳台。" },

    520397: { nxId: 1, scene: 52304, doing: 2, item: 211801, music: "haha", sound: "", txt: "[老伯]我的海伦来了！" },
    520398: { nxId: 1, scene: 52304, doing: 1, item: 0, music: "", sound: "", txt: "对面一个布置精致的阳台上，走出\n一个气质高雅的老太太，老伯痴迷\n地看着她。" },
    520399: { nxId: 1, scene: 52304, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]你声音小点，给海伦发现你又偷看\n她，她儿子可又要上门削你。" },
    520400: { nxId: 1, scene: 52304, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]我又不是偷窥，我是这里的合法居\n民，就正好看到了而已。" },
    520401: { nxId: 1, scene: 52304, doing: 1, item: 0, music: "", sound: "", txt: "老伯说着拿出了一张纸片。" },
    520402: { nxId: 1, scene: 52304, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]我为她新写了一首情诗，听我念啊。" },
    520403: { nxId: 1, scene: 52304, doing: 1, item: 0, music: "", sound: "", txt: "老伯激情四溢的朗诵着，虽然你不\n大听得懂内容，但你能感受到言语\n中炽烈的情感。" },
    520404: { nxId: 1, scene: 52304, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]（省略千字）爱我吧，伴侣，别弃\n我，跟随我，在这苦恼的波上……" },
    520405: { nxId: 1, scene: 52304, doing: 1, item: 0, music: "", sound: "", txt: "老伯念完，摆了个夸张的老派谢幕\n造型，一派情圣大诗人的风采。" },
    520406: { nxId: 1, scene: 52304, doing: 2, item: 211004, music: "", sound: "", txt: "[我]老伯，念得好！" },
    520407: { nxId: 1, scene: 52304, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]谢谢，这可是我灵魂的耳语啊。" },
    520408: { nxId: 1, scene: 52304, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]你别夸他，\n他呀，就是拿别人的诗改改而已。" },
    520409: { nxId: 1, scene: 52304, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]你这小猴子！啊，对了！" },
    520410: { nxId: 1, scene: 52304, doing: 1, item: 0, music: "", sound: "", txt: "老伯从房里拿出一个无人机。" },
    520411: { nxId: 1, scene: 52304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]老伯，你还挺潮的啊！\n还会操控无人机。" },
    520412: { nxId: 1, scene: 52304, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]与时俱进嘛。" },
    520413: { nxId: 1, scene: 52304, doing: 1, item: 0, music: "", sound: "", txt: "老伯把情诗吊在无人机下面，然后\n把操作器递给了顾廷巍。" },
    520414: { nxId: 1, scene: 52304, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]你帮我买的，你也帮我送过去。" },
    520415: { nxId: 1, scene: 52304, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]都教你几个礼拜了，你现在跟我装\n不会！你自己操作。" },
    520416: { nxId: 1, scene: 52304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你就帮帮老人家呗。" },
    520417: { nxId: 1, scene: 52304, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]你们中国人造的无人机，我怎么搞\n得来。" },
    520418: { nxId: 1, scene: 52304, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍接过控制器，夹在手机上打\n开了软件，无人机慢慢地飞了起来\n朝着对面飘了过去。" },
    520419: { nxId: 1, scene: 52304, doing: 1, item: 0, music: "", sound: "", txt: "老奶奶取下无人机下面的情诗，当\n着一直招手的老伯的面，看都不看\n就扔下了阳台……" },
    520420: { nxId: 1, scene: 52304, doing: 2, item: 211801, music: "", sound: "", txt: "[老伯]我的情诗！" },
    520421: { nxId: 1, scene: 52304, doing: 1, item: 0, music: "", sound: "", txt: "老伯飞奔进房间。" },
    520422: { nxId: 1, scene: 52304, doing: 2, item: 211003, music: "", sound: "", txt: "[我]他没事吧？\n你要不要去看看，安慰安慰他。" },
    520423: { nxId: 1, scene: 52304, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]没事的，\n这也不是第一次被人家拒绝了。" },
    520424: { nxId: 1, scene: 52304, doing: 1, item: 0, music: "", sound: "", txt: "老伯出现在了楼下，到处寻找掉落\n的情书，过马路的时险些被撞到。" },
    520425: { nxId: 1, scene: 52304, doing: 2, item: 211003, music: "", sound: "", txt: "[我]当心！在那边。" },
    520426: { nxId: 1, scene: 52304, doing: 1, item: 0, music: "", sound: "", txt: "你指着情诗掉落的方向，老伯依着\n你的指示找了过去。路人帮他捡了\n起来，他拿到时高兴得像个孩子。" },
    520427: { nxId: 1, scene: 52304, doing: 2, item: 211001, music: "bowenlang", sound: "", txt: "[我]老伯跟海伦到底是怎么回事啊。" },
    520428: { nxId: 1, scene: 52304, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]年轻的时候老伯辜负了人家，老了\n又想重归于好，人家当然不肯。" },
    520429: { nxId: 1, scene: 52304, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]可他不死心，就搬到了人家对面天\n天看，最近人家老伴过世。" },
    520430: { nxId: 1, scene: 52304, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]他感觉机会来了，变得特别殷勤。" },
    520431: { nxId: 1, scene: 52304, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]我觉得感情这件事，错过了，就是\n错过了，现在这样，何必呢。" },

    520432: { nxId: 1, scene: 52304, doing: 4, item: 45218, music: "", sound: "", txt: "分支选择" },
    //A
    520433: { nxId: 1, scene: 52304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]该珍惜的时候就要珍惜，不要到失\n去了才追悔莫及，老伯也是……" },
    520434: { nxId: 520440, scene: 52304, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]在我看来，那个奶奶也不是完无动\n全于衷的，要不然早就搬走了。" },
    //B
    520435: { nxId: 1, scene: 52304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这个年纪，还能勇于追求自己的爱\n情，有些人一辈子都做不到这点。" },
    520436: { nxId: 1, scene: 52304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]老伯也算是很有勇气了，\n难道你不应该鼓励一下他。" },
    520437: { nxId: 1, scene: 52304, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]那你是没见过奶奶那个练空手道黑\n带的儿子。" },
    520438: { nxId: 1, scene: 52304, doing: 2, item: 211004, music: "", sound: "", txt: "[我]额，这也太戏剧化了吧。" },
    520439: { nxId: 1, scene: 52304, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]老伯他有自己的想法，我不鼓励或\n者阻止。毕竟看他自己怎么想。" },

    520440: { nxId: 1, scene: 52304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]感情的事，哎……" },
    520441: { nxId: 1, scene: 52304, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]行了，戏看完了，\n人家都没怎样你倒唉声叹气的。" },

    //顾廷巍公寓
    520442: { nxId: 1, scene: 52201, doing: 0, item: 0, music: "gutingwei", sound: "", txt: "背景初始化" },
    520443: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍拿起空盘子往厨房走去，你\n跟着走了进去。" },
    520444: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "厨房的水槽里堆满了盘子，顾廷巍\n把脏盘子继续垒了上去。" },
    520445: { nxId: 1, scene: 52204, doing: 2, item: 211003, music: "", sound: "", txt: "[我]你多久没洗过了？" },
    520446: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]等干净盘子都用完了，我会洗的。" },

    520447: { nxId: 1, scene: 52204, doing: 4, item: 45219, music: "", sound: "", txt: "分支选择" },
    //A
    //正常分支
    520448: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]天啊，我来洗盘子吧！" },
    520449: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]不用，还没满呢。" },
    520450: { nxId: 1, scene: 52204, doing: 2, item: 211003, music: "", sound: "", txt: "[我]你这习惯得改，不卫生不健康，早\n知道你这样，我哪敢吃你做的饭。" },
    520451: { nxId: 520454, scene: 52204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]那我自己来吧。" },
    520454: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]行了，你让开吧，你做饭我洗碗也\n不算白吃你一顿。有没有手套？" },
    520455: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]我拿给你。" },
    520456: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "你带上手套，拿起洗碗擦。" },
    520457: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]如果你不喜欢洗碗，考虑买个洗碗\n机。这个东西国外不是很普及嘛。" },
    520458: { nxId: 1, scene: 52204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]知道了。" },
    //顾2
    520459: { nxId: 520471, scene: 52204, doing: 7, item: 71002, music: "", sound: "", txt: "好感度" },
    //特殊分支
    520460: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]天啊，我来洗盘子吧！" },
    520461: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]不用，还没满呢。" },
    520462: { nxId: 1, scene: 52204, doing: 2, item: 211003, music: "", sound: "", txt: "[我]你这习惯得改，不卫生不健康，早\n知道你这样，我哪敢吃你做的饭。" },
    520463: { nxId: 1, scene: 52204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]那我自己来吧。" },
    520464: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]行了，你让开吧，你做饭我洗碗也\n不算白吃你一顿。有没有手套？" },
    520465: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]我拿给你。" },
    520466: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "你带上手套，拿起洗碗擦。" },
    520467: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]如果你不喜欢洗碗，考虑买个洗碗\n机。这个东西国外不是很普及嘛。" },
    520468: { nxId: 1, scene: 52204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]知道了。" },
    //顾3
    520469: { nxId: 520471, scene: 52204, doing: 7, item: 71003, music: "", sound: "", txt: "好感度" },

    //B
    520470: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "你看着顾廷巍在你的面前的带上手\n套，拿起洗碗擦。" },

    520471: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那老伯就没有孩子吗？" },
    520472: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]他没提起过，我也从没见过，他总\n是一个人独来独往。" },
    520473: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这样想来，\n我的父母算是相爱一生了。" },
    520474: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]那你很幸运。" },
    520475: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "haha2", sound: "", txt: "[我]啊！我妈和你说了什么，卖了一天\n关子了!现在可以说了吧。" },
    520476: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]姐姐那会你睡得和死……睡得很沉，\n伯母电话来了好多次，我就接了。" },
    520477: { nxId: 1, scene: 52204, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你接啦？你就接啦！你说什么了？" },
    520478: { nxId: 1, scene: 52204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]直说喽，说你在宴席上不胜酒力，\n我正在送你回住的酒店……" },
    520479: { nxId: 1, scene: 52204, doing: 2, item: 211003, music: "", sound: "", txt: "[我]然后呢，然后呢！" },
    520480: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]然后伯母就问这位先生，你是谁，\n怎么认识我家女儿之类……" },
    520481: { nxId: 1, scene: 52204, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你怎么回她的！？" },
    520482: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]我说我在机场受过你的帮助，然后\n在巴塞罗那又再次相遇。" },
    520483: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]蛮有缘分的，就一起结伴游玩，然\n后伯母就问了很多我个人的问题。" },
    520484: { nxId: 1, scene: 52204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（不好的预感）" },
    520485: { nxId: 1, scene: 52204, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]我和伯母聊的很愉快啊，听得出来\n伯母很高兴……" },
    520486: { nxId: 1, scene: 52204, doing: 2, item: 211015, music: "", sound: "", txt: "[我]……" },
    520487: { nxId: 1, scene: 52204, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]伯母拜托我，小顾啊，我家女儿给\n你添麻烦了，以后还要请你多照顾。" },
    520488: { nxId: 1, scene: 52204, doing: 2, item: 211003, music: "", sound: "", txt: "[我]……然后……" },
    520489: { nxId: 1, scene: 52204, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]然后我说手机要没电了，就挂断了，\n临挂断前我听见伯母……" },
    520490: { nxId: 1, scene: 52204, doing: 2, item: 211002, music: "", sound: "", txt: "[我]说什么！" },
    520491: { nxId: 1, scene: 52204, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]别激动，姐姐，我听见伯母和应该\n是伯父说：嫁出去就好，女大三……" },
    520492: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "说完顾廷巍一脸严肃的看着你，但\n是眼中的笑意，瞎子都看得出来。" },
    520493: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "不知道是害臊还是羞愤，你感觉自\n己脸好红，根本没办法正视顾廷巍，\n只想拿起手边的东西扔向他。" },
    520494: { nxId: 1, scene: 52204, doing: 2, item: 211002, music: "", sound: "", txt: "[我]顾廷巍，你纳命来吧！" },
    520495: { nxId: 1, scene: 52204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]姐姐，放下盘子，咱有话好好说！" },
    520496: { nxId: 1, scene: 52204, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你，你要怎么负……怎么赔我……" },
    520497: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "你走到他身边，顺手揪住了他的两\n只耳朵。" },
    520498: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]啊！疼！你别激动啊！我补偿！" },
    520499: { nxId: 1, scene: 52204, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]晚上有我的演出，我请你去看？\nVIP待遇，怎么样？" },
    520500: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]演出？" },

    //电音酒吧
    520501: { nxId: 1, scene: 52401, doing: 0, item: 0, music: "cityrun", sound: "", txt: "背景初始化" },
    520502: { nxId: 1, scene: 52404, doing: 1, item: 0, music: "", sound: "", txt: "霓虹色的光向你射来，天幕上还挂\n着银白的小球，反射着激光。" },
    520503: { nxId: 1, scene: 52404, doing: 1, item: 0, music: "", sound: "", txt: "台上DJ正在演奏，台下的观众随着\n节奏摇摆，气氛热烈。" },
    520504: { nxId: 1, scene: 52404, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]怎么样？" },    
    520505: { nxId: 1, scene: 52404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]这里好嗨啊！\n我还是头一次来这种酒吧。" },
    520506: { nxId: 1, scene: 52404, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]抓紧我！" },
    520507: { nxId: 520509, scene: 52404, doing: 6, item: 65202, music: "", sound: "", txt: "CG动画" },//电音酒吧

    520508: { nxId: 1, scene: 52404, doing: 1, item: 0, music: "", sound: "", txt: "人群摩肩接踵，顾廷巍拉起你的手\n穿过人群，你仿佛进入了一个新的\n世界。" },//废

    520509: { nxId: 1, scene: 52404, doing: 1, item: 0, music: "", sound: "", txt: "你们穿越舞池来到里面的一个沙发\n卡座，一个外国人站起来和顾廷巍\n打了个招呼。" },
    520510: { nxId: 1, scene: 52404, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]嘿，安东尼奥。" },
    520511: { nxId: 1, scene: 52404, doing: 2, item: 211901, music: "", sound: "", txt: "[安东尼奥]嘿，兄弟！这位是？" },

    520512: { nxId: 1, scene: 52404, doing: 4, item: 45220, music: "", sound: "", txt: "分支选择" },
    //A
    //正常分支
    520513: { nxId: 1, scene: 52404, doing: 2, item: 211901, music: "", sound: "", txt: "[安东尼奥]你女朋友不是在中国不肯来吗？\n怎么突然就带过来了？" },
    520514: { nxId: 1, scene: 52404, doing: 2, item: 213020, music: "", sound: "", txt: "[顾廷巍]……" },
    520515: { nxId: 1, scene: 52404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那个已经是老黄历了，我是顾廷巍\n新任女友，这次特地来陪他的。" },
    520516: { nxId: 1, scene: 52404, doing: 2, item: 211901, music: "", sound: "", txt: "[安东尼奥]顾，你真是太幸运了，居然有这么\n漂亮的女朋友。一直以为你吹牛。" },
    520517: { nxId: 1, scene: 52404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]在我眼里他很优秀。" },
    520518: { nxId: 1, scene: 52404, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍有意无意地看着你。" },
    520519: { nxId: 1, scene: 52404, doing: 2, item: 211901, music: "", sound: "", txt: "[安东尼奥]是，他可是这里最棒的DJ。你会\n为他的音乐疯狂的。" },
    520520: { nxId: 1, scene: 52404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我是要好好感受一下。" },
    //顾2
    520521: { nxId: 520533, scene: 52404, doing: 7, item: 71002, music: "", sound: "", txt: "好感度" },
    //特殊分支
    520522: { nxId: 1, scene: 52404, doing: 2, item: 211901, music: "", sound: "", txt: "[安东尼奥]你女朋友不是在中国不肯来吗？\n怎么突然就带过来了？" },
    520523: { nxId: 1, scene: 52404, doing: 2, item: 213020, music: "", sound: "", txt: "[顾廷巍]……" },
    520524: { nxId: 1, scene: 52404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那个已经是老黄历了，我是顾廷巍\n新任女友，这次特地来陪他的。" },
    520525: { nxId: 1, scene: 52404, doing: 2, item: 211901, music: "", sound: "", txt: "[安东尼奥]顾，你真是太幸运了，居然有这么\n漂亮的女朋友。一直以为你吹牛。" },
    520526: { nxId: 1, scene: 52404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]在我眼里他很优秀。" },
    520527: { nxId: 1, scene: 52404, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍有意无意地看着你。" },
    520528: { nxId: 1, scene: 52404, doing: 2, item: 211901, music: "", sound: "", txt: "[安东尼奥]是，他可是这里最棒的DJ。\n你会为他的音乐疯狂的。" },
    520529: { nxId: 1, scene: 52404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我是要好好感受一下。" },
    //顾3
    520530: { nxId: 520533, scene: 52404, doing: 7, item: 71003, music: "", sound: "", txt: "好感度" },

    //B
    520531: { nxId: 1, scene: 52404, doing: 1, item: 0, music: "", sound: "", txt: "安东尼奥向你伸出手来，\n你礼貌地握了握手。" },
    520532: { nxId: 1, scene: 52404, doing: 2, item: 211901, music: "", sound: "", txt: "[安东尼奥]你好，美丽的姑娘，\n看来我没有什么机会了呢。" },

    520533: { nxId: 1, scene: 52404, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]安东尼奥，都准备好了吗？" },
    520534: { nxId: 1, scene: 52404, doing: 2, item: 211901, music: "", sound: "", txt: "[安东尼奥]当然了。" },
    520535: { nxId: 1, scene: 52404, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍转向你，把自己的背包还有\n手机都交给你，然后温柔的说。" },
    520536: { nxId: 1, scene: 52404, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]我去换衣服啦，今天的演出，为你！" },
    520537: { nxId: 1, scene: 52404, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍消失在后台，安东尼奥拿起\n一杯酒递给你。" },
    520538: { nxId: 1, scene: 52404, doing: 2, item: 211901, music: "", sound: "", txt: "[安东尼奥]别紧张，放轻松。一会见。" },
    520539: { nxId: 1, scene: 52404, doing: 1, item: 0, music: "", sound: "", txt: "安东尼奥在去后台的路上和一众美\n女拥抱亲吻，场面热烈。" },
    520540: { nxId: 1, scene: 52404, doing: 1, item: 0, music: "", sound: "", txt: "你看着有些不适应。而下面的人们\n一脸迷醉的模样，相拥接吻的画面\n随处可见。" },
    520541: { nxId: 1, scene: 52404, doing: 1, item: 0, music: "", sound: "lingsheng", txt: "你撇过头抿了一口酒，顾廷巍的手\n机响起，是一个陌生的号码。" },
    520542: { nxId: 1, scene: 52404, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（……天道好轮回，报复一下？\n   算了，他不仁我不能不义……）" },
    520543: { nxId: 1, scene: 52404, doing: 1, item: 0, music: "", sound: "lingsheng", txt: "你无视电话，继续喝酒。但是电话\n不停的响，你在酒吧内望了一圈，\n没看到顾廷巍的身影……" },
    520544: { nxId: 1, scene: 52404, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（这么急啊，也许谁有急事找顾廷\n   巍，接一下好了。）" },
    520545: { nxId: 1, scene: 52404, doing: 1, item: 0, music: "", sound: "", txt: "你走向附近的安静角落，\n接听了电话。" },

    520546: { nxId: 520547, scene: 52404, doing: 9, item: 952019, music: "Sub", sound: "", txt: "电话微信" },

    520547: { nxId: 1, scene: 52404, doing: 1, item: 0, music: "", sound: "", txt: "你挂断电话，那个号码又打了进来，\n你直接拉进了黑名单。" },
    520548: { nxId: 1, scene: 52404, doing: 1, item: 0, music: "", sound: "", txt: "周围突然传来巨大的报幕声：现在\n有请，人气DJ组合，日冕。" },
    520549: { nxId: 1, scene: 52404, doing: 1, item: 0, music: "", sound: "", txt: "你看到顾廷巍和安东尼奥走上台，\n安东尼奥给他递了一个药片，\n两人吃了下去。" },
    520550: { nxId: 1, scene: 52404, doing: 2, item: 211003, music: "", sound: "", txt: "[我]他这是吃的什么？难道是……" },
    520551: { nxId: 1, scene: 52404, doing: 1, item: 0, music: "", sound: "", txt: "躁动的音乐开始了，年轻人们舞动\n起来，那音乐让你的内心变得烦躁\n不安。" },
    520552: { nxId: 1, scene: 52404, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]SHOW ME YOU HANDS！" },
    520553: { nxId: 1, scene: 52404, doing: 1, item: 0, music: "", sound: "", txt: "观众齐齐把手举了起来，从台下升\n起了好几个脱衣舞娘，亲密环绕着\n顾廷巍。" },
    520554: { nxId: 1, scene: 52404, doing: 1, item: 0, music: "", sound: "", txt: "她们妖娆地扭动着，你胸中莫名的\n烦躁升腾，你把顾廷巍的背包和手\n机扔到沙发上，转身离开了酒吧。" },

    //酒吧门口
    520555: { nxId: 1, scene: 52501, doing: 0, item: 0, music: "XS", sound: "", txt: "背景初始化" },
    520556: { nxId: 1, scene: 52504, doing: 1, item: 0, music: "", sound: "", txt: "酒吧门口，夜晚微凉的海风拂过，\n让你的烦躁愤怒冷却了不少。\n你拿起自己的手机，打给了学姐。" },

    520557: { nxId: 520558, scene: 52504, doing: 9, item: 952031, music: "", sound: "", txt: "电话微信" },

    520558: { nxId: 1, scene: 52504, doing: 1, item: 0, music: "time", sound: "", txt: "挂了电话，学姐的话让你沉默。海\n风又吹过，而你的心已不再炽热，\n反而有些冰冷。" },//
    520559: { nxId: 1, scene: 52504, doing: 1, item: 0, music: "", sound: "", txt: "酒吧内的音乐声此起彼伏，你看着\n里面的光景，却没有勇气再走进去。" },
    520560: { nxId: 1, scene: 52504, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（那些在舞台下癫狂的年轻人，他\n   们摇晃着身体，亲密地互动着。）" },
    520561: { nxId: 1, scene: 52504, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（我无法想象如何成为他们中的一\n   员，做出那样的表情。）" },
    520562: { nxId: 1, scene: 52504, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（也许学姐说的对，这对我来说只\n   是一场梦，该醒了。）" },
    520563: { nxId: -1, scene: 52504, doing: -1, item: 211002, music: "", sound: "", txt: "" },

    520564: { nxId: 1, scene: 52504, doing: 2, item: 211022, music: "", sound: "", txt: "[我]（也许学姐说的对，这对我来说只\n   是一场梦，该醒了。）" },//废
   
}

export class CfgChapter5_2 {
    public chapters: any = chapterObj;
    public endChatuList: string[] = ["xiannv#天仙本仙", "gudoor#小屁孩家", "bar3#吵闹的酒吧", "bg_1_4#哭泣角落"];
}