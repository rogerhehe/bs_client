/** 操作ID,下一步操作ID,场景ID,操作类型,具体操作ID,描述 */
/** 操作类型: -1.无 0.背景移动 1.旁白 2.对话 3.人物介绍 4.分支选择 5.插图 6.CG动画 7.好感度 8.衣服选择 9.电话微信 10.回忆 11.彩蛋*/

let chapterObj = {
   //酒吧门口
   620001: { nxId: 1, scene: 52501, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
   620002: { nxId: 1, scene: 52504, doing: 12, item: 126201, music: "", sound: "", txt: "地点介绍" },
   620003: { nxId: 1, scene: 52504, doing: 1, item: 0, music: "", sound: "", txt: "街道上都是一些三三两两拎着酒瓶\n的红男绿女，你烦躁地朝着人少的\n方向走去。" },
   //小巷
   620004: { nxId: 1, scene: 62101, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
   620005: { nxId: 1, scene: 62104, doing: 1, item: 0, music: "Sub", sound: "", txt: "不知不觉间，你走到了一处无人的\n深巷，就在这时，你发现脚下身后\n慢慢浮现出两个影子。" },
   620006: { nxId: 1, scene: 62104, doing: 1, item: 0, music: "", sound: "", txt: "影子离你越来越近，身后传来不紧\n不慢的脚步声。" },
   620007: { nxId: 1, scene: 62104, doing: 2, item: 211003, music: "", sound: "", txt: "[我]谁跟我，不会……" },

   620008: { nxId: 1, scene: 62104, doing: 4, item: 46201, music: "", sound: "", txt: "分支选择" },
   //A
   620009: { nxId: 1, scene: 62104, doing: 1, item: 0, music: "", sound: "", txt: "身后是两个高大壮实的外国人，他\n们下意识停顿了一下，但是很快丢\n掉了手里的烟朝着你快步走来。" },
   620010: { nxId: 1, scene: 62104, doing: 2, item: 211003, music: "", sound: "", txt: "[我]完了，完了……" },
   620011: { nxId: 1, scene: 62104, doing: 1, item: 0, music: "", sound: "", txt: "你加快了脚步，然而身后的人也加\n快了脚步。" },
   620012: { nxId: 620015, scene: 62104, doing: 2, item: 211002, music: "", sound: "", txt: "[我]我干嘛要乱跑啊，这下糟了。" },
   //B
   620013: { nxId: 1, scene: 62104, doing: 1, item: 0, music: "", sound: "", txt: "你加快了脚步，随着身后传来的脚\n步声频率加快，你的心也跳的越来\n越快。" },
   620014: { nxId: 1, scene: 62104, doing: 2, item: 211002, music: "", sound: "", txt: "[我]怎么办，怎么办？" },

   620015: { nxId: 1, scene: 62104, doing: 1, item: 0, music: "", sound: "lingsheng", txt: "就在这个时候，你的手机响了，你\n赶忙接听。" },

   620016: { nxId: 620017, scene: 62104, doing: 9, item: 962001, music: "", sound: "", txt: "电话微信" },

   620017: { nxId: 1, scene: 62104, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍的声音让你感到安全，你精\n神为之一振。就在这时，你感觉到\n一只手搭在了你的肩膀上。" },
   620018: { nxId: 1, scene: 62104, doing: 2, item: 211002, music: "", sound: "", txt: "[我]啊啊啊，别碰我。" },
   620019: { nxId: 1, scene: 62104, doing: 1, item: 0, music: "", sound: "", txt: "你身躯一紧，用力挣脱开那只手，\n卖力地向前冲。" },
   620020: { nxId: 1, scene: 62104, doing: 1, item: 0, music: "", sound: "", txt: "跑了一阵，你扭头看向身后的两人，\n他们停在那里似乎在讨论什么。" },
   620021: { nxId: 1, scene: 62104, doing: 2, item: 211003, music: "", sound: "", txt: "[我]顾廷巍，我跑不动了，你还有多久啊。" },
   620022: { nxId: 1, scene: 62104, doing: 1, item: 0, music: "", sound: "", txt: "剧烈的奔跑，让你呼吸变得越来越\n急促，你感到小腿异常地沉重……" },
   620023: { nxId: 1, scene: 62104, doing: 1, item: 0, music: "", sound: "", txt: "此时你已经跑不动了，就连快走都\n很勉强，后面的两个男人突然追上\n了你，。" },
   620024: { nxId: 620999, scene: 62104, doing: 1, item: 0, music: "", sound: "", txt: "你拼命地挣脱开来，发现周摆放着\n几个空花盆，你随手拿起就向后甩\n了出去……" },
   620999: { nxId: 620025, scene: 62104, doing: 1, item: 0, music: "", sound: "", txt: "哎呀。你听到背后隐约传来声音，\n应该是砸中谁了！" },
   620025: { nxId: 1, scene: 62104, doing: 2, item: 211002, music: "", sound: "", txt: "[我]流氓！混蛋！敢打老娘的主意！" },
   620026: { nxId: 1, scene: 62104, doing: 1, item: 0, music: "", sound: "", txt: "这时你看到后面摩托车灯的亮光，\n顾廷巍一声大喊，摩托车朝着你\n疾驶而来。" },
   620027: { nxId: 1, scene: 62104, doing: 2, item: 211003, music: "", sound: "", txt: "[我]顾廷巍，你来了，呜呜呜。" },
   620028: { nxId: 1, scene: 62104, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]上车！" },  
   620029: { nxId: 1, scene: 62104, doing: 1, item: 0, music: "", sound: "moto", txt: "你跨上摩托，顾廷巍加大油门，冲\n开拦路的两人，带着你飞驰而去。" },

   //酒吧门口
   620030: { nxId: 1, scene: 52501, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
   620031: { nxId: 1, scene: 52504, doing: 1, item: 0, music: "XS", sound: "", txt: "顾廷巍载着你来到酒吧门口，安东\n尼奥和几个小伙子看到你们没事，\n向顾廷巍点点头，才各自散去了。" },
   620032: { nxId: 1, scene: 52504, doing: 1, item: 0, music: "", sound: "", txt: "一场惊吓，过了许久，你才放开紧\n抱顾廷巍的手，这时你注意到她的\n脸颊上满是鲜血。" },
   620033: { nxId: 1, scene: 52504, doing: 2, item: 211003, music: "", sound: "", txt: "[我]天啊，你受伤了。" },
   620034: { nxId: 1, scene: 52504, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]刚刚不知道哪里飞来一个花盆砸在\n我头上，难得一次没戴头盔。" }, 
   620035: { nxId: 1, scene: 52504, doing: 1, item: 0, music: "", sound: "", txt: "你心虚的看着顾廷巍，支支吾吾。" },
   620036: { nxId: 1, scene: 52504, doing: 2, item: 211003, music: "", sound: "", txt: "[我]唔……疼么，\n满脸都是血，让我看看。" },
   620037: { nxId: 1, scene: 52504, doing: 1, item: 0, music: "", sound: "", txt: "你赶紧从包里拿出了纸巾给顾廷巍\n按住伤口。" },
   620038: { nxId: 1, scene: 52504, doing: 2, item: 211003, music: "", sound: "", txt: "[我]伤口这么深，还是去医院吧。" },
   620039: { nxId: 1, scene: 52504, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]一个小伤口，不碍事，先回酒吧。" }, 

   620040: { nxId: 1, scene: 52504, doing: 4, item: 46202, music: "", sound: "", txt: "分支选择" },
   //A
   620041: { nxId: 1, scene: 52504, doing: 2, item: 211002, music: "", sound: "", txt: "[我]小伤口也不行，现在光线看着暗，\n万一伤口深，感染怎么办？" },
   620042: { nxId: 1, scene: 52504, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]没事的，最多就一道小疤嘛？\n男人留疤才有气概啊！" }, 
   620043: { nxId: 1, scene: 52504, doing: 2, item: 211002, music: "", sound: "", txt: "[我]不行。我看着不顺眼。" },
   620044: { nxId: 1, scene: 52504, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]我……" }, 
   620045: { nxId: 620053, scene: 52504, doing: 2, item: 211002, music: "", sound: "", txt: "[我]不行，必须去！" },
   //B
   620046: { nxId: 1, scene: 52504, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]酒吧那边表演还没完呢……" }, 
   620047: { nxId: 1, scene: 52504, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你都受伤了，还去酒吧。" },
   620048: { nxId: 1, scene: 52504, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]还有大事没完成……" }, 
   620049: { nxId: 1, scene: 52504, doing: 2, item: 211002, music: "", sound: "", txt: "[我]什么大事？钱吗？你能不能不要总\n想着赚钱，顾好自己才是头等大事！" },
   620050: { nxId: 1, scene: 52504, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]不是。是，是惊喜。" }, 
   620051: { nxId: 1, scene: 52504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]什么惊喜，你要去是吗？那我不管\n你了，你自己看着办！" },
   620052: { nxId: 1, scene: 52504, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]惊喜是给你的。你不去，那还谈什\n么啊……" }, 

   620053: { nxId: 1, scene: 52504, doing: 1, item: 0, music: "", sound: "", txt: "说着，你拉起顾廷巍的手就往前走。" },
   620054: { nxId: 1, scene: 52504, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]你往哪去啊？" }, 
   620055: { nxId: 1, scene: 52504, doing: 2, item: 211002, music: "", sound: "", txt: "[我]医院！说什么都不行，必须去医院！" },
   620056: { nxId: 1, scene: 52504, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]……医院是在这边……" }, 
   620057: { nxId: 1, scene: 52504, doing: 2, item: 211015, music: "", sound: "", txt: "[我]……" },
   620058: { nxId: 1, scene: 52504, doing: 2, item: 213020, music: "", sound: "", txt: "[顾廷巍]……" },
   620059: { nxId: 1, scene: 52504, doing: 2, item: 211002, music: "", sound: "", txt: "[我]闭嘴！开车！去医院！" },
   620060: { nxId: 1, scene: 52504, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]我没说话……" }, 
   620061: { nxId: 1, scene: 52504, doing: 2, item: 211002, music: "", sound: "", txt: "[我]心里也不许说，快开车！" },

   //医院房间
   620062: { nxId: 1, scene: 62201, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
   620063: { nxId: 1, scene: 62204, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]哎呦！嘶！" }, 
   620064: { nxId: 1, scene: 62204, doing: 1, item: 0, music: "", sound: "", txt: "医生正拿着钩针给顾廷巍缝合伤口。" },

   620065: { nxId: 1, scene: 62204, doing: 4, item: 46203, music: "", sound: "", txt: "分支选择" },
   //A
   620066: { nxId: 1, scene: 62204, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]姐姐你的良心呢，我是为了救谁啊！" }, 
   620067: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那也别叫啊，这是医院。" },
   620068: { nxId: 1, scene: 62204, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]你真是翻脸堪比翻书，比上我妈了。" }, 
   620069: { nxId: 1, scene: 62204, doing: 2, item: 211004, music: "", sound: "", txt: "[我]是吗？我像你妈妈？" },
   620070: { nxId: 620085, scene: 62204, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]是的，像！" },
   //B
   //正常分支
   620071: { nxId: 1, scene: 62204, doing: 1, item: 0, music: "", sound: "", txt: "医生看着急得快要掉眼泪的你，笑\n了笑，下手又重了几分。" },
   620072: { nxId: 1, scene: 62204, doing: 2, item: 211003, music: "", sound: "", txt: "[我]还疼吗？" },
   620073: { nxId: 1, scene: 62204, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍用另一只手将你拉近，环抱\n住你。" },
   620074: { nxId: 1, scene: 62204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]疼。不过，姐姐，你好像……" }, 
   620075: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好像什么？" },
   620076: { nxId: 1, scene: 62204, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]好像有小肚子。" }, 
   //顾1
   620077: { nxId: 620085, scene: 62204, doing: 7, item: 71001, music: "", sound: "", txt: "好感度" },
   //特殊分支
   620078: { nxId: 1, scene: 62204, doing: 1, item: 0, music: "", sound: "", txt: "医生看着急得快要掉眼泪的你，笑\n了笑，动作轻柔了很多。" },//轻柔动作，只给付费的你
   620079: { nxId: 1, scene: 62204, doing: 2, item: 211003, music: "", sound: "", txt: "[我]还疼吗？" },
   620080: { nxId: 1, scene: 62204, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍用另一只手将你拉近，环抱\n住你。" },
   620081: { nxId: 1, scene: 62204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]疼。不过，姐姐，你好像……" }, 
   620082: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好像什么？" },
   620083: { nxId: 1, scene: 62204, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]好像有小肚腩。" }, 
   //顾2
   620084: { nxId: 1, scene: 62204, doing: 7, item: 71002, music: "", sound: "", txt: "好感度" },

   620085: { nxId: 1, scene: 62204, doing: 2, item: 211002, music: "", sound: "", txt: "[我]臭小子还敢嫌弃我？也不知道是谁\n一路逞能装硬汉，现在叫唤啥！" },
   620086: { nxId: 1, scene: 62204, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]刚刚……不知道……是谁……在电\n话里……大喊……救我……" }, 
   620087: { nxId: 1, scene: 62204, doing: 1, item: 0, music: "", sound: "", txt: "也许是扯到了伤口，顾廷巍咬着牙\n说话变得有些吃力。" },
   620088: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]行了，你别说话了。" },
   620089: { nxId: 1, scene: 62204, doing: 1, item: 0, music: "", sound: "", txt: "医生缝好伤口，在上面贴了一大块\n纱布。顾廷巍捂着额头。" },
   620090: { nxId: 1, scene: 62204, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]我这可是没有打麻药，你行吗？" }, 
   620091: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我不行，我怕疼不是应该的嘛。" },
   620092: { nxId: 1, scene: 62204, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]你刚刚怎么突然走了？" }, 

   620093: { nxId: 1, scene: 62204, doing: 4, item: 46204, music: "", sound: "", txt: "分支选择" },
   //A
   620094: { nxId: 1, scene: 62204, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]吵吗？我还以为你会喜欢呢？" }, 
   620095: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谁说我会喜欢的。" },
   620096: { nxId: 1, scene: 62204, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]我以为音乐和节奏可以让你放松心\n情，所以……" }, 
   620097: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]并没有好吗？" },
   620098: { nxId: 1, scene: 62204, doing: 2, item: 213005, music: "", sound: "", txt: "[顾廷巍]那你出来也应该和我说一下啊。" }, 
   620099: { nxId: 620110, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]说什么？怎么说？" },
   //B
   620100: { nxId: 1, scene: 62204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]电话？谁的电话啊？" }, 
   620101: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没有谁。" },
   620102: { nxId: 1, scene: 62204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]到底是谁啊？" }, 
   620103: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我妈妈行了吧。" },
   620104: { nxId: 1, scene: 62204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]伯母？找你干嘛？" }, 
   620105: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]还能干嘛，催我回去。" },
   620106: { nxId: 1, scene: 62204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]明天吗？好吧，对了，你刚刚想和\n我说什么。" }, 
   620107: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没什么。" },
   620108: { nxId: 1, scene: 62204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]你能正常一点嘛？脸都耷拉成这样\n了。说，到底怎么了。" }, 
   620109: { nxId: 1, scene: 62204, doing: 2, item: 211002, music: "", sound: "", txt: "[我]说什么啊，你让我说什么？" },

   620110: { nxId: 1, scene: 62204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]说为什么不告而别？" }, 
   620111: { nxId: 1, scene: 62204, doing: 2, item: 211002, music: "", sound: "", txt: "[我]我就不明白，为什么会有性感女郎\n贴在你身旁呢？" },
   620112: { nxId: 1, scene: 62204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]那不是我要求的，是主办方的标配，\n都是专业的，用来烘托气氛。" }, 
   620113: { nxId: 1, scene: 62204, doing: 2, item: 211002, music: "", sound: "", txt: "[我]好吧，那你上台的时候，吃的药片\n是什么。" },
   620114: { nxId: 1, scene: 62204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]那是无糖润喉糖。我喜欢吃糖你是\n知道的。" }, 
   620115: { nxId: 1, scene: 62204, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍从兜里拿出一个小袋子，递\n给了你一片。" },
   620116: { nxId: 1, scene: 62204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]就是这个，你尝尝。" }, 
   620117: { nxId: 1, scene: 62204, doing: 1, item: 0, music: "", sound: "", txt: "你塞进嘴里，一股清凉的味道在你\n的口腔里散逸开来。" },
   620118: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]确实是糖。" },
   620119: { nxId: 1, scene: 62204, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]姐姐，你不会是吃醋吧？" }, 

   620120: { nxId: 1, scene: 62204, doing: 4, item: 46205, music: "", sound: "", txt: "分支选择" },
   //A
   620121: { nxId: 1, scene: 62204, doing: 2, item: 211002, music: "", sound: "", txt: "[我]是又怎样！她们穿成那样，还贴着\n你！你让我看什么呢？" },
   620122: { nxId: 1, scene: 62204, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]没有啊，我很开心。" }, 
   //顾2
   620123: { nxId: 620134, scene: 62204, doing: 7, item: 71002, music: "", sound: "", txt: "好感度" },
   //B
   620124: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]怎么可能，我就是好奇。" },
   620125: { nxId: 1, scene: 62204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]这有什么好奇的，国外都这样，国\n内酒吧也是有这样啊。" }, 
   620126: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你怎么知道国内酒吧也这样？难不\n成一回国就扎进去？" },
   620127: { nxId: 1, scene: 62204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]和别人没什么兴趣，不如，我们下\n次一起。" }, 
   620128: { nxId: 620130, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]想得美！" },
   620130: { nxId: 1, scene: 62204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]我想看姐姐的舞姿。" }, 
   620131: { nxId: 1, scene: 62204, doing: 2, item: 211004, music: "", sound: "", txt: "[我]今天还没看够，还想看？" },
   620132: { nxId: 1, scene: 62204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]嗯，想一直看……" }, 
   //顾2
   620133: { nxId: 1, scene: 62204, doing: 7, item: 71002, music: "", sound: "", txt: "好感度" },

   620134: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]懒得理你……" },
   620135: { nxId: 1, scene: 62204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]你是不是应该补偿我，我为了你跑\n出来，老板那边估计要炸锅了。" },
   620136: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你想呗，我还有什么可说的。" }, 
   620137: { nxId: 1, scene: 62204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]那你能不能多留下一天。" },

   //大结局
   620138: { nxId: 1, scene: 62204, doing: 4, item: 46206, music: "", sound: "", txt: "分支选择" },

   //A
   620139: { nxId: 1, scene: 62204, doing: 2, item: 213003, music: "gutingwei", sound: "", txt: "[顾廷巍]那太好了，我还有点勇气去面对酒\n吧老板的狂风暴雨。" },

   //顾5
   620555: { nxId: 620140, scene: 62204, doing: 7, item: 71021, music: "", sound: "", txt: "好感度" },//废

   620140: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]对不起，给你带来麻烦了。你说想\n去哪姐姐请你。" }, 
   620141: { nxId: 1, scene: 62204, doing: 1, item: 0, music: "", sound: "lingsheng", txt: "这时你的手机响了，是学姐打来的\n电话。" },
   620142: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我出去接个电话。" }, 
   620143: { nxId: 620144, scene: 62204, doing: 9, item: 962011, music: "", sound: "", txt: "电话微信" },
   620144: { nxId: 620152, scene: 62204, doing: 1, item: 0, music: "", sound: "", txt: "你挂了电话，深吸一口气，正在犹\n豫着要不要推门进去，顾廷巍却已\n经打开了门。" },

   //B
   620145: { nxId: 620147, scene: 62204, doing: 2, item: 213001, music: "bowenlang", sound: "", txt: "[顾廷巍]这样吗？好啊！" },

   620146: { nxId: 1, scene: 62204, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍眼神很落寞。" },//废

   620147: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]嗯……" }, 
   620148: { nxId: 1, scene: 62204, doing: 1, item: 0, music: "", sound: "lingsheng", txt: "这时你的手机响了，是学姐打来的\n电话。" },
   620149: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我出去接个电话。" }, 
   620150: { nxId: 620151, scene: 62204, doing: 9, item: 962011, music: "", sound: "", txt: "电话微信" },
   620151: { nxId: 620300, scene: 62204, doing: 1, item: 0, music: "", sound: "", txt: "你挂了电话，深吸一口气，正在犹\n豫着要不要推门进去，顾廷巍却已\n经打开了门。" },

   //好结局
   620152: { nxId: 1, scene: 62204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]我正要出来找你呢，我想好了。" },
   620153: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]嗯？" }, 
   620154: { nxId: 1, scene: 62204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]作为补偿，今晚你就住我家好了。" },
   620155: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你家就一张床，我睡哪啊。" }, 
   620156: { nxId: 1, scene: 62204, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]我自有办法。" },

   //顾廷巍卧室
   620157: { nxId: 1, scene: 62301, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
   620158: { nxId: 1, scene: 62304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我睡哪，我声明我可不睡沙发。" }, 
   620159: { nxId: 1, scene: 62304, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]当然啦，你睡床。" },
   620160: { nxId: 1, scene: 62304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那你呢。" }, 
   620161: { nxId: 1, scene: 62304, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]我也睡床啊。" },

   620162: { nxId: 1, scene: 62304, doing: 4, item: 46207, music: "", sound: "", txt: "分支选择" },
   //A
   620163: { nxId: 1, scene: 62304, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]是你问我的，现在又说我。" },
   620164: { nxId: 1, scene: 62304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你们这些少年现在脑子里都在想些\n什么。" }, 
   620165: { nxId: 620170, scene: 62304, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]我可纯洁了。" },
   //B
   620166: { nxId: 1, scene: 62304, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]你突然这样，让我还有点不适应。" },
   620167: { nxId: 1, scene: 62304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]怎么了，爱睡不睡。" }, 
   620168: { nxId: 1, scene: 62304, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]睡睡睡，我可睡不惯沙发。" },
   620169: { nxId: 1, scene: 62304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不过，保持距离。" }, 

   620170: { nxId: 1, scene: 62304, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍拿出一条毯子放在床上。" },
   620171: { nxId: 1, scene: 62304, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]一人一条。" },
   620172: { nxId: 1, scene: 62304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这还差不多。" }, 
   620173: { nxId: 1, scene: 62304, doing: 1, item: 0, music: "", sound: "", txt: "你梳洗完毕，顾廷巍已经侧躺在了\n床上的一头。你小心翼翼地躺上去\n也侧过身背对着背。" },
   620174: { nxId: 1, scene: 62304, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]你放心啦。" },
   620175: { nxId: 1, scene: 62304, doing: 1, item: 0, music: "", sound: "", txt: "你闭着眼睛，周围静到只剩下你们\n彼此的呼吸和心跳声。" },
   620176: { nxId: 1, scene: 62304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你在紧张什么，你让我放心，结果\n你自己心跳得这么快。" }, 
   620177: { nxId: 1, scene: 62304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]别去想那些少儿不宜的事情好吗？" }, 
   620178: { nxId: 1, scene: 62304, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]我没有，你管我，你睡你的。" },
   620179: { nxId: 1, scene: 62304, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍心跳得更快了，你扭过头在\n他耳边吹了口气。顾廷巍一下子就\n坐了起来。" },
   620180: { nxId: 1, scene: 62304, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]你干什么？" },
   620181: { nxId: 1, scene: 62304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]让你冷静一下啊，不然你在我旁边\n咚咚咚打鼓，我怎么睡得着。" }, 
   620182: { nxId: 1, scene: 62304, doing: 2, item: 213001, music: "missing", sound: "", txt: "[顾廷巍]我好歹是个男人，你的行为是在玩火。" },//喔喔喔，霸总台词

   620183: { nxId: 1, scene: 62304, doing: 4, item: 46208, music: "", sound: "", txt: "分支选择" },
   //A 
   620184: { nxId: 1, scene: 62304, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]你什么意思？" },  
   620185: { nxId: 1, scene: 62304, doing: 1, item: 0, music: "", sound: "", txt: "你站起身，手指在顾廷巍的锁骨处\n打了个圈，绕到他身后伏在他的耳\n边轻声。" }, 
   620186: { nxId: 1, scene: 62304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没什么意思。" }, 
   620187: { nxId: 1, scene: 62304, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍一把将你扑回床上。" }, 
   620188: { nxId: 1, scene: 62304, doing: 2, item: 211004, music: "", sound: "", txt: "[我]诶呦，弟弟，脸红了呢！" }, 
   620189: { nxId: 1, scene: 62304, doing: 1, item: 0, music: "", sound: "", txt: "你伸手拦住顾廷巍的脖子，\n与你贴近。" }, 
   620190: { nxId: 620197, scene: 62304, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]你……不能这样。" },  
   //B
   620191: { nxId: 1, scene: 62304, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]我最近在学校练新歌，\n刚刚是在想节奏。" },  
   620192: { nxId: 1, scene: 62304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是吗？" }, 
   620193: { nxId: 1, scene: 62304, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]当然啊，我自己都有心跳的感觉的\n话，那台下观众肯定有共鸣啊！" }, 
   620194: { nxId: 620197, scene: 62304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]行行行，不过，你安生一点，我要\n睡觉。" },  
   //C
   620195: { nxId: 1, scene: 62304, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]你不知道道男人是经不起撩拨的么？" },  
   620196: { nxId: 1, scene: 62304, doing: 2, item: 211004, music: "", sound: "", txt: "[我]开个玩笑嘛！干嘛生气。" }, 

   620197: { nxId: 1, scene: 62304, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]床你睡，我睡沙发。" },  //废物，注孤生，凭实力单身
   620198: { nxId: 1, scene: 62304, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍郁闷地抱着毯子走向沙发。" }, 
   620199: { nxId: 1, scene: 62304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这可是你自己放弃的啊。" }, 
   620200: { nxId: 1, scene: 62304, doing: 1, item: 0, music: "", sound: "", txt: "你按住自己悸动的心，长舒一口气。" }, 
   620201: { nxId: 1, scene: 62304, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（他刚刚的话什么意思？不对不对，\n   你在想什么？睡觉睡觉。）" }, 

   //顾廷巍公寓
   620202: { nxId: 1, scene: 52201, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
   620203: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "你悠悠地醒来，一看手机时间已经是\n下午了。" }, 
   620204: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "你走到客厅，顾廷巍正窝在沙发上，\n看样子还没有要醒的意思。" }, 

   620205: { nxId: 1, scene: 52204, doing: 4, item: 46209, music: "", sound: "", txt: "分支选择" },
   //A 
   620206: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]真能睡，像个孩子一样。" }, 
   620207: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "你伸手想要轻触顾廷巍的脸，但是\n又停下，低下头，看着他。" }, 
   620208: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]皮肤真好，五官嘛！也还不错。" }, 
   620209: { nxId: 620216, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "你用手轻碰着顾廷巍的面庞，指尖\n停在了他的嘴唇。" }, 
   //B
   620210: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "你小心翼翼地将他的手拉开，屏住\n呼吸，慢慢地钻进他的怀里。" }, 
   620211: { nxId: 620216, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "突然，被你拉开的那只手将你抱紧，\n你们两人的身体紧紧地贴合在一起。" }, 
   //C
   620212: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "你蹲了下来，向他靠近。他的睡颜\n近在咫尺，长长的睫毛在眼下覆上\n一层阴影。" }, 
   620213: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "你视线往下，挺立的鼻子下是淡粉\n色的嘴唇，阳光下像果冻一样晶莹\n透亮。" }, 
   620214: { nxId: 1, scene: 52204, doing: 2, item: 211005, music: "", sound: "", txt: "[我]这不是引我犯罪嘛？" }, 
   620215: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "你撅起了嘴，慢慢靠近。" }, 

   620216: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]姐姐，这么主动不好吧。" },  
   620217: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "", sound: "", txt: "你赶忙收回手起身，顾廷巍先你一\n步抓住了你的手。" }, 
   620218: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]现在怎么不害羞了。" }, 
   620219: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]我想通了，怎么能被你调戏呢！" },  
   620220: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这才一个晚上，你就想通了？" }, 
   620221: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]昨晚我只是有些异常罢了。" },  
   620222: { nxId: 1, scene: 52204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那好吧，你打算带我去哪。" }, 
   620223: { nxId: 1, scene: 52204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]一会儿去看喷泉吧！" },  
   620224: { nxId: 1, scene: 52204, doing: 1, item: 0, music: "gutingwei", sound: "", txt: "顾廷巍陪着你回酒店收拾了东西，\n你们早早来到了喷泉所在的广场，\n现场挤满了游客。" }, 

   //不喷
   620225: { nxId: 1, scene: 62501, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
   620226: { nxId: 1, scene: 62504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好多人啊。" }, 
   620227: { nxId: 1, scene: 62504, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]所以嘛，如果我不来，你就只能看\n别人的后脑勺了。" }, 
   620228: { nxId: 1, scene: 62504, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍拉着你往前走，你们挤到一\n个石头墩子上面。" },  
   620229: { nxId: 1, scene: 62504, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]就是这里了。" }, 
   620230: { nxId: 1, scene: 62504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这哪里是最佳观景点啊，你不是要\n我站上去吧。" }, 
   620231: { nxId: 1, scene: 62504, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]对，当地人都是这么干的。" }, 
   620232: { nxId: 1, scene: 62504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这不好吧。" }, 
   620233: { nxId: 1, scene: 62504, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍不由分说一把把你抱了起来，\n放到了石墩上面。" },  
   620234: { nxId: 1, scene: 62504, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你干什么！放我下来。" }, 
   620235: { nxId: 1, scene: 62504, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]别乱动。" }, 
   620236: { nxId: 1, scene: 62504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我看到老伯了，还有老婆婆也在那边。" }, 
   620237: { nxId: 1, scene: 62504, doing: 1, item: 0, music: "", sound: "", txt: "老伯频繁的献殷勤，老婆婆爱理不\n理，你看着两个人的有爱互动，笑\n出了声。" },  
   620238: { nxId: 1, scene: 62504, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]看着没戏啊。" }, 
   620239: { nxId: 1, scene: 62504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你就不懂女人，老太太嘴上不承认\n但是接受老伯了。" }, 
   620240: { nxId: 1, scene: 62504, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]你们都是这样的吗？" }, 
   620241: { nxId: 1, scene: 62504, doing: 2, item: 211004, music: "", sound: "", txt: "[我]看情况啦。" }, 
   620242: { nxId: 1, scene: 62504, doing: 1, item: 0, music: "", sound: "", txt: "你身后的喷泉飞起，灯光映射着喷\n泉格外美丽。" },  

   //喷
   620243: { nxId: 1, scene: 62401, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
   620244: { nxId: 1, scene: 62404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]原来喷泉还可以这样，五光十色的。" }, 
   620245: { nxId: 1, scene: 62404, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]这个音乐灯光喷泉秀要持续十几分\n钟，也是巴塞罗那必看的景点之一。" }, 
   620246: { nxId: 1, scene: 62404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]幸亏我多留下一天，要不然现在我\n应该是在飞机上蹲监狱了。" }, 
   620247: { nxId: 1, scene: 62404, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]总不能让你白赔了飞机票钱。" }, 
   620248: { nxId: 1, scene: 62404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你别说，我还是很心疼的啊。" }, 
   620249: { nxId: 1, scene: 62404, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]要不……我来买回去的机票吧。" }, 
   620250: { nxId: 1, scene: 62404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这哪轮得到你，\n晚一天是我自己的决定。" }, 
   620251: { nxId: 1, scene: 62404, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]对了，过段时间我学校放假，\n我想去找你，你有时间吗？" }, 

   620252: { nxId: 1, scene: 62404, doing: 4, item: 46210, music: "", sound: "", txt: "分支选择" },
   //A 
   620253: { nxId: 1, scene: 62404, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]吃饭的时间总有吧。" }, 
   620254: { nxId: 1, scene: 62404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你可以找你国内的朋友啊，他们可\n以陪你。" }, 
   620255: { nxId: 1, scene: 62404, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]难道，我回国，你不打算见我？" }, 
   620256: { nxId: 1, scene: 62404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我们生活状态不一样啊，而且，到\n时候我可能在哪里都不确定。" }, 
   620257: { nxId: 1, scene: 62404, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]那好吧。" }, 
   620258: { nxId: 1, scene: 62404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]骗你的啦，只要你来，我一定有空！" }, 
   620259: { nxId: 620262, scene: 62404, doing: 2, item: 213003, music: "", sound: "", txt: "[顾廷巍]说定了喔！" }, 
   //B
   620260: { nxId: 1, scene: 62404, doing: 2, item: 211002, music: "", sound: "", txt: "[我]好，那到时候我来找你。" }, 
   620261: { nxId: 1, scene: 62404, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]你先专心看表演吧。我扶着你。" },

   620262: { nxId: 1, scene: 62404, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]你在这看节目，我离开一下，\n你在这等我。" },
   620263: { nxId: 1, scene: 62404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哦，你赶紧回来啊。" }, 
   620264: { nxId: 1, scene: 62404, doing: 1, item: 0, music: "", sound: "", txt: "时间过去，演出已结束，人群逐渐\n散去，你望着逐渐空旷的广场，四\n下里却看不到顾廷巍的身影。" },  
   620265: { nxId: 1, scene: 62404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这小子搞什么，还要老娘在这等。" }, 
   620266: { nxId: 1, scene: 62404, doing: 1, item: 0, music: "", sound: "", txt: "夜晚的广场逐渐平静下来，你还在\n原地痴痴的等。" },
   620267: { nxId: 1, scene: 62404, doing: 2, item: 211001, music: "cry", sound: "", txt: "[我]顾廷巍！" }, 
   620268: { nxId: 1, scene: 62404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你在哪！" }, 
   620269: { nxId: 1, scene: 62404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你别搞了！" }, 
   620270: { nxId: 1, scene: 62404, doing: 1, item: 0, music: "", sound: "", txt: "周围的人用奇怪的眼神看着你……" },
   620271: { nxId: 1, scene: 62404, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你别躲在那笑了，我看见你了。" }, 
   620272: { nxId: 1, scene: 62404, doing: 1, item: 0, music: "", sound: "", txt: "不远处出现一个跑动的人影，是顾\n廷巍，他喘着粗气跑到你的跟前。" },
   620273: { nxId: 1, scene: 62404, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你跑哪去了！你知道我有多担心吗？" }, 
   620274: { nxId: 1, scene: 62404, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]对不起，对不起，我想起一个东西\n想要买来送给你。" },
   620275: { nxId: 1, scene: 62404, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]回来的路上手机被贼摸走了，于是\n我去追，好半天才……" },
   620276: { nxId: 1, scene: 62404, doing: 1, item: 0, music: "", sound: "", txt: "你一把抱住顾廷巍。" },
   620277: { nxId: 1, scene: 62404, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]这个……" },
   620278: { nxId: 1, scene: 62404, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍从兜里掏出一颗宝石糖，戴\n在了你的手上。" },
   620279: { nxId: 1, scene: 62404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你干嘛，这么折腾就为买这个。" }, 
   620280: { nxId: 1, scene: 62404, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]我喜欢你。" },
   620281: { nxId: 1, scene: 62404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我可不想异地恋，而且我们还差好\n几岁呢，等我一回国你就都忘了。" }, 
   620282: { nxId: 1, scene: 62404, doing: 2, item: 213006, music: "", sound: "", txt: "[顾廷巍]我不会忘记的，而且我不在乎年纪，\n我喜欢你，就是喜欢你！" },
   620283: { nxId: 1, scene: 62404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]问题不止这些啊!" }, 
   620284: { nxId: 1, scene: 62404, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]你说，女人都是口是心非的。" },
   620285: { nxId: 1, scene: 62404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我那是……" }, 
   620286: { nxId: 1, scene: 62404, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]所以你是喜欢我的。" },
   620287: { nxId: 1, scene: 62404, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你这怎么能这么想，我……" }, 

   620288: { nxId: 1, scene: 62404, doing: 6, item: 66201, music: "", sound: "", txt: "CG动画" },//大结局亲亲
   620289: { nxId: -1, scene: 62404, doing: 13, item: 11621, music: "", sound: "", txt: "独白" },

   //坏结局
   620300: { nxId: 1, scene: 62204, doing: 1, item: 0, music: "", sound: "", txt: "他笑起来，带着一丝丝悲伤。" },
   620301: { nxId: 1, scene: 62204, doing: 2, item: 211003, music: "", sound: "", txt: "[我]你都听到了？" }, 
   620302: { nxId: 1, scene: 62204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]本来想明天晚上带你去个地方的，\n看来我们只能现在去了。" },
   620303: { nxId: 1, scene: 62204, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]没关系吧？虽然有点晚了。" },
   620304: { nxId: 1, scene: 62204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没关系，反正明天下午的飞机。" }, 

   //不喷
   620305: { nxId: 1, scene: 62501, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
   620306: { nxId: 1, scene: 62504, doing: 1, item: 0, music: "", sound: "", txt: "你和顾廷巍并排走着，街灯忽闪忽\n闪地亮着，黄色的光衬着你们的影\n子拉得很长。" },
   620307: { nxId: 1, scene: 62504, doing: 1, item: 0, music: "", sound: "", txt: "彼此的脚步声在街道上回响着，不\n久你们来到一座喷泉前，顾廷巍停\n下脚步。" },
   620308: { nxId: 1, scene: 62504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这里是？" }, 
   620309: { nxId: 1, scene: 62504, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]魔幻喷泉，每年的一小段时间里，\n晚上8：30的时候这里会有灯光喷泉。" },
   620310: { nxId: 1, scene: 62504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那真是太遗憾了，估计我没有机会\n看到这喷泉喷涌而出的样子了。" }, 
   620311: { nxId: 1, scene: 62504, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]如果你多留一天，就能看到。" },
   620312: { nxId: 1, scene: 62504, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]这里平时人非常多……\n但我知道哪里视野最好，而且不挤。" },

   620313: { nxId: 1, scene: 62504, doing: 4, item: 46211, music: "", sound: "", txt: "分支选择" },
   //A 
   620314: { nxId: 1, scene: 62504, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]这总比不上你亲自看来的有感触。" },
   620315: { nxId: 1, scene: 62504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]可你不是别人啊，你不是说会挑最\n好的角度嘛。" }, 
   620316: { nxId: 1, scene: 62504, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]是的，包在我身上。" },
   620317: { nxId: 620323, scene: 62504, doing: 2, item: 211004, music: "", sound: "", txt: "[我]嗯，我等着。" }, 
   //B
   620318: { nxId: 1, scene: 62504, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]是嘛，可我就是什么都想要来着。" }, 
   620319: { nxId: 620323, scene: 62504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那是因为你还没有成熟，你会知道\n什么属于你，什么不属于你。" }, 
   //C
   620320: { nxId: 1, scene: 62504, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]其实周围还有很多地方可以去，\n你可以多来几次啊。" }, 
   620321: { nxId: 1, scene: 62504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]怎么，我来你给我出飞机票啊。" }, 
   620322: { nxId: 1, scene: 62504, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]可以，如果你给我时间的话。" }, 

   620323: { nxId: 1, scene: 62504, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍一脸惆怅的看着喷泉。" },
   620324: { nxId: 1, scene: 62504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]顾廷巍。" }, 
   620325: { nxId: 1, scene: 62504, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]嗯……" }, 

   620326: { nxId: 1, scene: 62504, doing: 4, item: 46212, music: "", sound: "", txt: "分支选择" },
   //A
   620327: { nxId: 1, scene: 62504, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍楞在原地没有说话。" },
   620328: { nxId: 1, scene: 62504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]对不起，我有点自说自话，可我觉\n得这就是对你最好的补偿。" }, 
   620329: { nxId: 620334, scene: 62504, doing: 1, item: 0, music: "", sound: "", txt: "你淡淡的笑起来，风吹拂你的发丝，\n顾廷巍扶住你的秀发，温柔的回吻\n了你。" },
   620334: { nxId: 620341, scene: 62504, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]很晚了，我送你回去。" }, 
   //B
   620330: { nxId: 1, scene: 62504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]别傻了，虽然有很多小插曲，可这\n几天我们不都很高兴嘛。" }, 
   620331: { nxId: 1, scene: 62504, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]嗯，你说的对。" }, 
   620332: { nxId: 1, scene: 62504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哪，很晚了，刚刚才经历过危机事\n件，你是不是应该送我回酒店。" }, 
   620333: { nxId: 620341, scene: 62504, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]嗯，我送你回去。" }, 
   //C
   620335: { nxId: 1, scene: 62504, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你又在胡思乱想什么呢？" }, 
   620336: { nxId: 1, scene: 62504, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]没什么。" }, 
   620337: { nxId: 1, scene: 62504, doing: 2, item: 211004, music: "", sound: "", txt: "[我]等你毕业回国再来找姐姐，\n姐姐带你玩。" }, 
   620338: { nxId: 1, scene: 62504, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]一定。" }, 
   620339: { nxId: 1, scene: 62504, doing: 1, item: 0, music: "", sound: "", txt: "你笑着看着顾廷巍，他也慢慢笑了\n起来。" },
   620340: { nxId: 1, scene: 62504, doing: 2, item: 213001, music: "", sound: "", txt: "[顾廷巍]不早了，我送你回去吧。" }, 

   620341: { nxId: 1, scene: 62504, doing: 1, item: 0, music: "", sound: "", txt: "街灯把你们两人的身影映照的晦暗\n不明，归途之上，无人言语……" },
   620342: { nxId: 620888, scene: 62504, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍就在你身边，但是你却感觉\n他遥不可及，就连你自己，你都觉得\n是那么的不真实……" },

   //酒店大门夜景
   620888: { nxId: 620343, scene: 42101, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
   620343: { nxId: 1, scene: 42104, doing: 2, item: 213001, music: "time", sound: "", txt: "[顾廷巍]姐姐，到了。" }, 
   620344: { nxId: 1, scene: 42104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]啊，啊，好……" }, 
   620345: { nxId: 1, scene: 42104, doing: 1, item: 0, music: "", sound: "", txt: "回过神的你才发现已经站在酒店门\n口，顾廷巍笑着向你挥了挥手。" },
   620346: { nxId: 1, scene: 42104, doing: 2, item: 213004, music: "", sound: "", txt: "[顾廷巍]姐姐，再见！" }, 
   620347: { nxId: 1, scene: 42104, doing: 1, item: 0, music: "", sound: "", txt: "看着眼前的人，一瞬间你有种想要\n抛开一切冲上去拥抱他的冲动……" },
   620348: { nxId: 1, scene: 42104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……保重……\n……谢谢你……" }, 
   620349: { nxId: 1, scene: 42104, doing: 1, item: 0, music: "", sound: "", txt: "但最终，你只说出了这几个字。" },
   620350: { nxId: 1, scene: 42104, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍微笑着，冲你点点头，转身\n离去。" },
   620351: { nxId: 1, scene: 42104, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍渐行渐远，最终消失在夜色\n之中，你看着他离去的背影，笑了\n笑，像是告诉自己一样轻声说。" },
   620352: { nxId: 1, scene: 42104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……顾廷巍……\n……再见……" }, 

   620353: { nxId: 1, scene: 42104, doing: 6, item: 66202, music: "", sound: "", txt: "CG动画" },//大结局走人 
   620354: { nxId: -1, scene: 42104, doing: 13, item: 11626, music: "", sound: "", txt: "独白" },






















}

export class CfgChapter6_2 {
    public chapters: any = chapterObj;
    public endChatuList: string[] = ["bg_1_1#浦东机场", "bg_1_2#老地方", "bg_1_3#检票口", "bg_1_4#哭泣角落"];
}