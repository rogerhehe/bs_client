/** 操作ID,下一步操作ID,场景ID,操作类型,具体操作ID,描述 */
/** 操作类型: -1.无 0.背景移动 1.旁白 2.对话 3.人物介绍 4.分支选择 5.插图 6.CG动画 7.好感度 8.衣服选择 9.电话微信 10.回忆 11.彩蛋*/

let chapterObj = {
    //画展
    630001: { nxId: 1, scene: 53121, doing: 0, item: 0, music: "SP", sound: "", txt: "背景初始化" },
    630002: { nxId: 1, scene: 53124, doing: 12, item: 126301, music: "", sound: "", txt: "地点介绍" },
    630003: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "一场闹剧之后，画展的客人逐渐散\n去，只剩下了一片空寂。" },
    630004: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "你看着博文朗离去的方向，脑子里\n一片空白。" },
    630005: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]你没事吧？" },
    630006: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我还好。" },
    630007: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]伊莲娜，唉，原本那么有魅力，我\n以前经常梦到她。" },
    630008: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]啊，我的意思是……" },
    630009: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没关系……\n我也认为她是个美丽的女人。" },
    630010: { nxId: 1, scene: 53124, doing: 2, item: 211003, music: "", sound: "", txt: "[我]你知道她为什么会变成现在这样吗？" },
    630011: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]我知道一些，但是不完全，你最好\n还是去问博文朗。" },
    630012: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没关系，你告诉我你知道的部分，\n我好有些心理准备。" },
    630013: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]他们啊，博文朗也是不想让你想太\n多才选择不告诉你的。" },

    630014: { nxId: 1, scene: 53124, doing: 4, item: 46301, music: "", sound: "", txt: "分支选择" },
    //A 八卦线 马丁内斯好口才
    630015: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我大概也有所了解，但是，\n我总觉得他有所隐瞒。" },
    630016: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你是他的好朋友，我希望能从你这\n里更了解他……" },
    630017: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这样两个人也许……\n能长久的在一起吧！" },
    630018: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]好吧，不过，你千万别告诉博文朗\n是我告诉你的。" },
    630019: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我不说。" },
    630020: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]他们俩算是青梅竹马吧。" },
    630021: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]伊莲娜成名早，她靠自己的才华和\n能力把博文朗的画推销了出去。" },
    630022: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]伊莲娜自己也是画家，在她的帮助\n下博文朗的画技也精进了许多。" },
    630023: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]恋爱中的他们都是彼此的灵感，那\n是他们创造出了很多美丽的作品。" },
    630024: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……\n伊莲娜才是他最重要的缪斯……" },
    630025: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]别这么说，博文朗很看重你。" },
    630026: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没关系，你继续说吧。" },
    630027: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]后来博文朗出名了，他长得好，又\n有才华，很多女孩子欣赏他……" },
    630028: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]就算他自己不去招惹，也会有女孩\n子主动迎上来……" },
    630029: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]伊莲娜开始展现可怕的控制欲，她\n要掌控博文朗的一切才能安心。" },
    630030: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]那段时间，他们经常吵架，伊莲娜\n吃药，动刀，她的爱太可怕了。" },
    630031: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "马丁内斯叹了口气，继续说道。" },//是的，是我看着你累，硬加这句旁白让你歇一会
    630032: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]她担心自己癫狂之下会伤害到博文\n朗，于是选择离开嫁人……" },
    630033: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]博文朗过了很久，才开始和女孩子\n们交往，直到遇见了你。" },

    630034: { nxId: 1, scene: 53124, doing: 4, item: 46302, music: "", sound: "", txt: "分支选择" },
    //A
    630035: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]或许我和那些女人没什么分别。虽\n然不是我主动招惹他的……" },
    630036: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]但是，新鲜感也许让他错意了他对\n我的感觉。" },
    630037: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]相信我，他看你的眼神与看别的女\n士是不一样的。" },
    630038: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]他过去从来没有带女人参加这样的\n活动，更别提向公众介绍了。" },
    630039: { nxId: 1, scene: 53124, doing: 2, item: 211002, music: "", sound: "", txt: "[我]可他房里有那么多女人的画像……" },
    630040: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]你该给他多一点信任，要不，你去\n医院看看？" },
    630041: { nxId: 630062, scene: 53124, doing: 2, item: 211002, music: "", sound: "", txt: "[我]我想想吧……" },
    //B
    630042: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]你真的很不一样！你知道吗？博文\n朗初见你时，就跟我提起你。" },
    //马丁，博文朗给你多少钱，我程昱川出三倍
    630043: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]他几乎用了所有美好的形容词。这\n让我对你也产生了好奇心。" },
    630044: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是吗？见到我之后是否跌破眼镜呢？" },
    630045: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]自信，有趣，美丽，\n一如他的形容一般。" },
    630046: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]在你身边，我看到了不一样的博文\n朗，他会下意识的想去亲近你。" },
    630047: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这样好的形容，愧不敢当啊。" },
    630048: { nxId: 630062, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不过谢谢你告诉我这些，我觉得我\n该去医院了。" },

    //B 自问线
    630049: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]别想那么多，他过去从来没有带过\n女人出席这样的场合，" },
    630050: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]就凭这一点，你就是与众不同的。" },
    630051: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谢谢你，马丁内斯。" },
    630052: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]去吧，如果真的放心不下，\n就去问问他。" },
    630053: { nxId: 630062, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好。" },

    //C 童年线
    630054: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]别想那么多，博文朗的身世背景比\n较复杂。" },

    630055: { nxId: 1, scene: 53124, doing: 4, item: 46303, music: "", sound: "", txt: "分支选择" },
    //A
    630056: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]他童年发生了什么？" },
    630057: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]他不是不信任你，只是害怕。小时\n候他受过伤害，所以敏感多疑。" },
    630058: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]既渴望亲密关系，又本能恐惧与人\n过分亲近。" },
    630059: { nxId: 630062, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]我只能说到这里了，如果你想了解\n更多，我建议你自己去问问他。" },
    //B
    630060: { nxId: 1, scene: 53124, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我心里很乱，不知怎么办。" },
    630061: { nxId: 1, scene: 53124, doing: 2, item: 211301, music: "", sound: "", txt: "[马丁内斯]那就去见见他吧，或许一切都会迎\n刃而解。" },

    630062: { nxId: 1, scene: 53124, doing: 1, item: 0, music: "", sound: "", txt: "你打开微信，打电话给闺蜜，电话\n那头非常的嘈杂。" },

    630063: { nxId: 630064, scene: 53124, doing: 9, item: 963001, music: "", sound: "", txt: "电话微信" },

    //医院走廊
    630064: { nxId: 1, scene: 63101, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    630065: { nxId: 1, scene: 63104, doing: 1, item: 0, music: "", sound: "", txt: "医院里浓浓的消毒水味让你的心情\n更加抑郁了。" },
    630066: { nxId: 1, scene: 63104, doing: 1, item: 0, music: "Sub", sound: "", txt: "根据护士的指引你来到了伊莲娜所\n在的房间外，很远你就听到了他俩\n的交谈声。" },//偷听技能习得
    630067: { nxId: 1, scene: 63104, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]你为什么要自杀，还在那种场合，\n真是蠢到家了！" },
    630068: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]曾经你和我是那么契合，我怎么会\n眼睁睁的看你去爱那样的女人！" },
    630069: { nxId: 1, scene: 63104, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]她很好，她是个很好的女人！" },
    630070: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]你们才认识多久？你了解她吗？" },
    630071: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]她知道你的过往吗？她能理解你吗？" },
    630072: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]只有我才能包容你的一切帮助你，\n让你画作更加完美！" },
    630073: { nxId: 1, scene: 63104, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]她是个聪明，有魅力……" },
    630074: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]光彩夺目吗？这不是像你当时和我\n说一样的话吗？" },
    630075: { nxId: 1, scene: 63104, doing: 1, item: 0, music: "", sound: "", txt: "你透过门缝，看到伊莲娜拔掉了受\n伤的吊针，起身想要去抓博文朗。" },
    630076: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]我知道，你终究是爱我的，" },
    630077: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]你只是在她们身上寻找我的影子而\n已，我可以做回从前的我……" },
    630078: { nxId: 1, scene: 63104, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]你够了，她和你不一样……" },
    630079: { nxId: 1, scene: 63104, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]她向往自由的灵魂，她有自己的想\n法，但她不会如你一般的癫狂！" },
    630080: { nxId: 1, scene: 63104, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]而且我也不再是那个什么都不懂的\n博文朗，我们不可能再回到从前！" },
    630081: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]癫狂？！我做的一切都是为了你！" },
    630082: { nxId: 1, scene: 63104, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]你自杀说是为了我，真是荒谬！" },
    630083: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]是你对我不负责任，现在又说这样\n的话，我不会让你们舒心的！" },
    630084: { nxId: 1, scene: 63104, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]我们早已经没有任何关系，我对你\n更没有什么责任可言。" },
    630085: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]但我们根本没有忘记彼此，不是吗？" },
    630086: { nxId: 1, scene: 63104, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]你哪看出来我还记着你，难道非要\n我对你不客气吗？" },
    630087: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]我知道的，我给你的吊坠你还挂在\n车上，你还记挂着我们的曾经！" },
    630088: { nxId: 1, scene: 63104, doing: 2, item: 220026, music: "", sound: "", txt: "[博文朗]……" },
    630089: { nxId: 1, scene: 63104, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]我一会儿就会扔掉它！" },
    630090: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]都是因为那个女人，你才会这样。" },
    630091: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]你只是因为新鲜感而已，过不了多\n久你就会厌倦……" },
    630092: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]然后抛弃她回到我身边，你会明白\n你最爱的还是我！" },
    630093: { nxId: 1, scene: 63104, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]你在说什么疯话？" },
    630094: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]我没病，我只要你回到我的身边！" },
    630095: { nxId: 1, scene: 63104, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]以前你是这样现在还是！" },
    630096: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]难道你不是处处留情吗！" },
    630097: { nxId: 1, scene: 63104, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]在你的眼里全天下的女人都和我有\n着不清不楚的关系……" },
    630098: { nxId: 1, scene: 63104, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]你这是妄想症，\n我不想跟你浪费时间了。" },
    630099: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]你曾经那么喜欢我让你捉摸不定的\n心情……" },
    630100: { nxId: 1, scene: 63104, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]那只是忍受而已。" },
    630101: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]忍受？我帮你的时候你怎么不说是\n忍受？" },
    630102: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]你的风格，看待事物的方式不都是\n从我这剽窃去的，" },
    630103: { nxId: 630105, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]你功成名就了，就忍受不了了，原\n本我的优点又都变成了缺点，" },
    630105: { nxId: 1, scene: 63104, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]我不否认受你极大影响，而且我感\n谢你给我的帮助！" },
    630106: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]伪君子！" },
    630107: { nxId: 1, scene: 63104, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]随你怎么想，但是不要再说这些荒\n谬的话和做一些愚蠢的行为……" },
    630108: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]你总是说一些看似好听的话，但是\n你到底真正爱上过谁？" },
    630109: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]只要有女孩子爱上你，\n你就抛弃她们！" },
    630110: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]我一直以为你爱的是我，你也只能\n选择我，只有我能包容你！" },
    630111: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]可是呢？你终究是谁都不爱！" },
    630112: { nxId: 1, scene: 63104, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]我承认，我确实不敢爱别人……" },
    630113: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]你怕了，你竟然害怕了，你从来都\n是在逃避这个问题！" },
    630114: { nxId: 1, scene: 63104, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]今天你竟然承认了，真是可笑！\n懦夫，你终于有勇气了吗！" },
    630115: { nxId: 1, scene: 63104, doing: 1, item: 0, music: "", sound: "", txt: "你愣怔的站在门口，不知道到底要\n不要进去。" },
    630116: { nxId: 1, scene: 63104, doing: 1, item: 0, music: "", sound: "", txt: "面对这么一段纷乱的关系，你不知\n所措……" },

    //大结局分支
    630117: { nxId: 1, scene: 63104, doing: 4, item: 46304, music: "", sound: "", txt: "分支选择" },
    //A
    //医院房间
    630301: { nxId: 1, scene: 63201, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    630302: { nxId: 1, scene: 63204, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]你来的正好，你应该要知道他到底\n是什么样的。" },
    630303: { nxId: 1, scene: 63204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你的手臂没事吧？" },
    630304: { nxId: 1, scene: 63204, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]没事，消毒包扎过了，我们走吧，\n别听她的。" },
    630305: { nxId: 1, scene: 63204, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]不行，你们不能走，不能走，他就\n是，一个骗子，一个无赖！" },
    630306: { nxId: 1, scene: 63204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你是这样的人吗？" },
    630307: { nxId: 1, scene: 63204, doing: 1, item: 0, music: "", sound: "", txt: "你看着博文朗。" },
    630308: { nxId: 1, scene: 63204, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]那是很久之前的事了，我可以解释。" },
    630309: { nxId: 1, scene: 63204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我不在乎。" },
    630310: { nxId: 1, scene: 63204, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]什么？你刚刚都听到了吧！我们也\n曾经如你们现在一般，" },
    630311: { nxId: 1, scene: 63204, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]可现在呢！他厌弃我，总有一天，\n他也会厌弃你！" },
    630312: { nxId: 1, scene: 63204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]为什么要为了别人，把自己折腾成\n现在这样？" },
    630313: { nxId: 1, scene: 63204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没错，我是一个传统的中国女性，\n但是我有我独立的人格和思想。" },
    630314: { nxId: 1, scene: 63204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我不是你，我不会为他而活，更不\n会像你一样卑微。" },
    630315: { nxId: 1, scene: 63204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我清楚一个人要如何幸福地活下去！" },
    630316: { nxId: 1, scene: 63204, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]你的意思是你会把他让给我吗？" },//一口价，成交
    630317: { nxId: 1, scene: 63204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]博文朗又不是个东西，我说让给你\n了，他就会属于你吗？" },
    630318: { nxId: 1, scene: 63204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你应该想清楚这件事，他也有他自\n己的思想……" },
    630319: { nxId: 1, scene: 63204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]而你，也该放下了，做回自己。" },
    630320: { nxId: 1, scene: 63204, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]我好羡慕你，这么洒脱。" },
    630321: { nxId: 1, scene: 63204, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我只是明白舍得，属于我的我会争\n取，不属于我的我绝不强求。" },
    630322: { nxId: 1, scene: 63204, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]博文朗，难道你要跟她回中国\n去吗？你舍得放下这里的一切？" },
    630323: { nxId: 1, scene: 63204, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]这是我自己的事，我对你已经\n仁至义尽了。" },//这嘴脸
    630324: { nxId: 1, scene: 63204, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]我们走吧！" },
    
    //公用段 
    //医院走廊
    630325: { nxId: 1, scene: 63101, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    630326: { nxId: 1, scene: 63104, doing: 1, item: 0, music: "XS", sound: "", txt: "博文朗拉着你离开了病房。" },
    630327: { nxId: 1, scene: 63104, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]对不起，没想到发生这样的事情，\n还把你卷进来。" },
    630328: { nxId: 1, scene: 63104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谁知道会这样呢，这不是你的错。\n我的假期也要结束了……" },
    630329: { nxId: 1, scene: 63104, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]你可以晚几天回去吗？发生这样的\n事情，我不强求你留下来……" },
    630330: { nxId: 1, scene: 63104, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]但是，我想要……补偿些什么。" },
    630331: { nxId: 1, scene: 63104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]博文朗，你做的一切，都很打动我。" },
    630332: { nxId: 1, scene: 63104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]甚至之前我都还在幻想着，也许你\n会同我回到中国。" },
    630333: { nxId: 1, scene: 63104, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]对不起，没想到发生这样的事情，\n还把你卷进来。" },
    630334: { nxId: 1, scene: 63104, doing: 1, item: 0, music: "", sound: "", txt: "博文朗怔怔得看着你，一言不发。\n你深呼一口气，眼眶里不知道什么\n时候溢满了泪水。" },
    630335: { nxId: 1, scene: 63104, doing: 1, item: 0, music: "", sound: "", txt: "你赶紧抬头不让眼泪流下来，然后\n用衣角擦了一下。" },
    630336: { nxId: 1, scene: 63104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]其实就这两天的经历，已经够让我\n和小姐妹吹个把月了……" },
    630337: { nxId: 1, scene: 63104, doing: 2, item: 211004, music: "", sound: "", txt: "[我]我很开心，这已经足够了……" },
    630338: { nxId: 1, scene: 63104, doing: 2, item: 211004, music: "", sound: "", txt: "[我]我要回酒店去赶飞机了，\n所以，我先走了。" },
    630339: { nxId: 1, scene: 63104, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]我送你。" },
    630340: { nxId: 1, scene: 63104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不用了，打车很方便的。" },
    630341: { nxId: 1, scene: 63104, doing: 2, item: 220025, music: "", sound: "", txt: "[博文朗]这也许是我最后可以帮你做的了。\n不要拒绝我，好吗？" },
    630342: { nxId: 1, scene: 63104, doing: 1, item: 0, music: "", sound: "", txt: "博文朗拽住你，那双湛蓝色的眼里\n满是卑微的祈求。" },
    630343: { nxId: 1, scene: 63104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好吧。" },
    //酒店大门
    630344: { nxId: 1, scene: 42301, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    630345: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "一路无言，博文朗开车把你送到了\n酒店门口，一家三口嬉笑着从你们\n车旁走过。" },
    630346: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "一直沉默的博文朗看着一家三口，\n开口说道。" },
    630347: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]你知道吗？小时候我多么羡慕那些\n有父母的小朋友。" },//渣男亲情牌
    630348: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "你诧异地望向博文朗，\n他的脸阴晴不定。" },
    630349: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]小的时候，在我眼里我的父母感情\n很好，我以为爱情就是那样。" },
    630350: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]但是后来，一夜崩塌。" },
    630351: { nxId: 1, scene: 42304, doing: 2, item: 211003, music: "", sound: "", txt: "[我]发生了什么？" },
    630352: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]也许是荷尔蒙的作用结束了，大家\n重新认识了彼此和彼此的爱……" },
    630353: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]有一天我醒来，家里一片狼藉，父\n母都不见了，他们没有回来。" },
    630354: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]第二天，我外婆来接走了我。" },
    630355: { nxId: 1, scene: 42304, doing: 2, item: 211003, music: "", sound: "", txt: "[我]你的父母呢？他们……抛弃你了？" },
    630356: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "博文朗苦笑了一下。" },
    630357: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]他们的说法是追求新生活，追求自\n由的爱情。" },
    630358: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]开始的时候，我深夜听到电话，我\n急忙下床去偷听……" },
    630359: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]听到的只是外婆朋友打来的电话。" },
    630360: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]我是个被遗弃的孤僻者，学校里也\n没人喜欢我。" },
    630361: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]……这就是我对感情的恐惧……" },
    630362: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "你握住博文朗手，博文朗紧紧反握住。" },
    630363: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我也许无法感同身受，但是……" },
    630364: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我明白，你心疼你，所以，我也希\n望，你不要再封闭自己。" },
    630365: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]就像你所说的过去的早已过去，你\n应该更加珍爱自己。" },
    630366: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]马丁、胡安，还有我……我们都很\n担心你……" },
    630367: { nxId: 1, scene: 42304, doing: 2, item: 220023, music: "", sound: "", txt: "[博文朗]你……遇见你，真的是我的幸运。" },
    630368: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "你的心中还有无数的话想说，但是\n处于混乱的情感旋涡中，你却不知\n要怎么开口。" },
    630369: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "bell", txt: "街边教堂的钟声响起，一声声不断\n提醒着你，你们已经没有时间了。" },

    //好结局
    630370: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "博文朗陪你在楼上收拾好行李，又\n陪着你走到大堂办手续，他哀伤的\n眼神一直看着你。" },
    630371: { nxId: 1, scene: 42304, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（别这么看着我了……你这样让我\n   会不忍心离开的）" },
    630372: { nxId: 1, scene: 42304, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（这复杂的关系对我来说太难了）" },//脑容量不够了么，辛苦了，玛丽苏
    630373: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我好像落了东西在楼上了，你能帮\n我去看看吗？" },
    630374: { nxId: 1, scene: 42304, doing: 2, item: 220023, music: "", sound: "", txt: "[博文朗]好。" },
    630375: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "你看着博文朗上楼的背影，抹掉眼\n角的泪水，赶紧走到门口叫了车。" },
    630376: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]再见，博文朗。" },
    630377: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "车慢慢远去，你从后视镜里看到博\n文朗跑了出来，看着远去的你。" },
    //考虑用电话
    630378: { nxId: 630379, scene: 42304, doing: 9, item: 963020, music: "", sound: "lingsheng", txt: "电话微信" },

    //机场
    630379: { nxId: 1, scene: 63301, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    630380: { nxId: 1, scene: 63304, doing: 1, item: 0, music: "", sound: "", txt: "你来到了机场办理了登机，正准备\n过关，一阵吵闹声引起了你的注意。" },
    630381: { nxId: 1, scene: 63304, doing: 1, item: 0, music: "", sound: "", txt: "你回过头，看到伊莲娜正在和警察\n拉拉扯扯中。" },//Nemesis
    630382: { nxId: 1, scene: 63304, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（伊莲娜，她来干什么？）" },
    630383: { nxId: 1, scene: 63304, doing: 1, item: 0, music: "", sound: "", txt: "伊莲娜看到了你，指着你大喊。" },//追追
    630384: { nxId: 1, scene: 63304, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]放开我，我就是来找她的！" },
    630385: { nxId: 1, scene: 63304, doing: 1, item: 0, music: "", sound: "", txt: "警察一脸狐疑地看着伊莲娜，询问\n了你是不是认识这个女人。" },

    630386: { nxId: 1, scene: 63304, doing: 4, item: 46306, music: "", sound: "", txt: "分支选择" },
    //A
    630387: { nxId: 1, scene: 63304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你还有什么事吗？" },
    630388: { nxId: 1, scene: 63304, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]你能不能留下来，陪在他身边，给\n他一点时间？" },//编剧杀啊
    630389: { nxId: 1, scene: 63304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你不是那么爱他，\n现在你劝我留下来？" },
    630390: { nxId: 1, scene: 63304, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]你就当我是疯了吧……" },
    630391: { nxId: 1, scene: 63304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你不是疯了，你是爱他。" },
    630392: { nxId: 1, scene: 63304, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]对，我爱他，所以了解他。在你还\n没有进来之前，他说他怕了……" },
    630393: { nxId: 1, scene: 63304, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]我从来没有见过他那样，他从来没\n有对我示弱过。" },
    630394: { nxId: 1, scene: 63304, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]他和那些女人调笑，我虽然生气，\n但是我心里知道，他不会动心的。" },
    630395: { nxId: 1, scene: 63304, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]可是，\n他是真的爱你，害怕辜负你……" },//完全不符合思维和行为逻辑
    630396: { nxId: 1, scene: 63304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谢谢，但我们都需要想清楚很多事……" },
    630397: { nxId: 1, scene: 63304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]也许有一天想通了，我会来找他，\n或者他来找我……" },
    630398: { nxId: 1, scene: 63304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]无论如何，谢谢你和说这些……" },
    630399: { nxId: 1, scene: 63304, doing: 1, item: 0, music: "", sound: "", txt: "伊莲娜看着你欲言又止，最终一言不\n发地拥抱了你。" },
    630400: { nxId: 630405, scene: 63304, doing: 1, item: 0, music: "", sound: "", txt: "告别了伊莲娜，你登上飞机坐在窗\n边，你最后一次看着这个给了你难\n忘记忆的城市。" },

    //B
    630401: { nxId: 1, scene: 63304, doing: 1, item: 0, music: "", sound: "", txt: "警卫抓住伊莲娜，\n伊莲娜发疯似的喊叫着。" },
    630402: { nxId: 1, scene: 63304, doing: 2, item: 211401, music: "", sound: "", txt: "[伊莲娜]你要离开吗？你这个绝情的女人，\n你会后悔的！" },
    630403: { nxId: 1, scene: 63304, doing: 1, item: 0, music: "", sound: "", txt: "你不再去看她，转身离开。" },
    630404: { nxId: 1, scene: 63304, doing: 1, item: 0, music: "", sound: "", txt: "很快，你登上了飞机。坐在窗边，\n你最后一次看着这个给了你难忘记\n忆的城市。" },

    //飞机上
    630405: { nxId: 1, scene: 63401, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    630406: { nxId: 1, scene: 63404, doing: 2, item: 211015, music: "cry", sound: "", txt: "[我]（就这么走吗？真的没有告别，我\n   真的不会后悔吗？）" },
    630407: { nxId: 1, scene: 63404, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（不，至少要和博文朗说清楚！）" },
    630408: { nxId: 1, scene: 63404, doing: 1, item: 0, music: "", sound: "", txt: "你解开安全带，准备下飞机，却被\n眼前的一幕惊住了。" },
    630409: { nxId: 1, scene: 63404, doing: 2, item: 220023, music: "", sound: "", txt: "[博文朗]不好意思，帮我拿一下花好吗？" },
    630410: { nxId: 1, scene: 63404, doing: 2, item: 211003, music: "", sound: "", txt: "[我]你……你怎么来了？" },
    630411: { nxId: 1, scene: 63404, doing: 1, item: 0, music: "", sound: "", txt: "你呆呆地接过了博文朗手里的花。\n博文朗和善地和你的邻座打招呼。" },
    630412: { nxId: 1, scene: 63404, doing: 2, item: 220023, music: "", sound: "", txt: "[博文朗]不好意思，她是我的爱人，我能不\n能跟你换个位置？" },
    630413: { nxId: 1, scene: 63404, doing: 1, item: 0, music: "", sound: "", txt: "博文朗顺利的换到了你的旁边，又\n把你也拉到座位上。" },
    630414: { nxId: 1, scene: 63404, doing: 2, item: 220023, music: "", sound: "", txt: "[博文朗]既然你不能留在巴塞罗那，那我为\n什么不能回到中国去？" },
    630415: { nxId: 1, scene: 63404, doing: 2, item: 211003, music: "", sound: "", txt: "[我]可是你……" },
    630416: { nxId: 1, scene: 63404, doing: 2, item: 220023, music: "", sound: "", txt: "[博文朗]以前那里没有我牵挂的人，所以我\n不知道回去的意义是什么。" },
    630417: { nxId: 1, scene: 63404, doing: 2, item: 220023, music: "", sound: "", txt: "[博文朗]现在那里有我牵挂的人，是你给那\n里赋予了意义。" },
    630418: { nxId: 1, scene: 63404, doing: 1, item: 0, music: "", sound: "", txt: "博文朗坦然自信地看着你，\n眼神交会的那一瞬，\n你觉得你真正看清了这个男人……" },
    630419: { nxId: 1, scene: 63404, doing: 1, item: 0, music: "", sound: "", txt: "之前种种的迷惑猜疑都消失了，前\n所未有的轻松感觉从心中涌出，让\n你充满了勇气。" },
    630420: { nxId: 1, scene: 63404, doing: 2, item: 211004, music: "", sound: "", txt: "[我]幸好小苹果不在这里。" },
    630421: { nxId: 1, scene: 63404, doing: 2, item: 220025, music: "", sound: "", txt: "[博文朗]什么意思？" },
    630422: { nxId: 1, scene: 63404, doing: 1, item: 0, music: "", sound: "", txt: "你把花扔开，\n托着博文朗的脸，\n亲吻了上去！" },

    630423: { nxId: 1, scene: 63404, doing: 6, item: 66301, music: "", sound: "", txt: "CG动画" },//大结局 亲亲亲

    630424: { nxId: -1, scene: 63404, doing: 13, item: 11631, music: "", sound: "", txt: "独白" },

    //B
    630118: { nxId: 1, scene: 63104, doing: 1, item: 0, music: "", sound: "", txt: "你愣了一下，手机响起，你准备\n按掉。" },
    630119: { nxId: 1, scene: 63104, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]你什么时候到的？" },
    630120: { nxId: 1, scene: 63104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]嗯，有一会了。" },
    630121: { nxId: 1, scene: 63104, doing: 2, item: 220024, music: "", sound: "", txt: "[博文朗]你都听到了？" },
    630122: { nxId: 1, scene: 63104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]也只是听到了你们的争吵而已。" },
    630123: { nxId: 1, scene: 63104, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]你听我解释。" },//你听我狡辩
    630124: { nxId: 1, scene: 63104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好了，博文朗，在画廊我很感动，\n可是我也有我自己的思虑。" },

    //公用段 
    //医院走廊
    630125: { nxId: 1, scene: 63104, doing: 2, item: 220021, music: "bowenlang", sound: "", txt: "[博文朗]对不起，没想到发生这样的事情，\n还把你卷进来。" },
    630126: { nxId: 1, scene: 63104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谁知道会这样呢，这不是你的错。\n我的假期也要结束了……" },
    630127: { nxId: 1, scene: 63104, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]你可以晚几天回去吗？发生这样的\n事情，我不强求你留下来……" },
    630128: { nxId: 1, scene: 63104, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]但是，我想要……补偿些什么。" },
    630129: { nxId: 1, scene: 63104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]博文朗，你做的一切，都很打动我。" },
    630130: { nxId: 1, scene: 63104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]甚至之前我都还在幻想着，也许你\n会同我回到中国。" },
    630131: { nxId: 1, scene: 63104, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]对不起，没想到发生这样的事情，\n还把你卷进来。" },
    630132: { nxId: 1, scene: 63104, doing: 1, item: 0, music: "", sound: "", txt: "博文朗怔怔得看着你，一言不发。\n你深呼一口气，眼眶里不知道什么\n时候溢满了泪水。" },
    630133: { nxId: 1, scene: 63104, doing: 1, item: 0, music: "", sound: "", txt: "你赶紧抬头不让眼泪流下来，然后\n用衣角擦了一下。" },
    630134: { nxId: 1, scene: 63104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]其实就这两天的经历，已经够让我\n和小姐妹吹个把月了……" },
    630135: { nxId: 1, scene: 63104, doing: 2, item: 211004, music: "", sound: "", txt: "[我]我很开心，这已经足够了……" },
    630136: { nxId: 1, scene: 63104, doing: 2, item: 211004, music: "", sound: "", txt: "[我]我要回酒店去赶飞机了，\n所以，我先走了。" },
    630137: { nxId: 1, scene: 63104, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]我送你。" },
    630138: { nxId: 1, scene: 63104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不用了，打车很方便的。" },
    630139: { nxId: 1, scene: 63104, doing: 2, item: 220025, music: "", sound: "", txt: "[博文朗]这也许是我最后可以帮你做的了。\n不要拒绝我，好吗？" },
    630140: { nxId: 630142, scene: 63104, doing: 1, item: 0, music: "", sound: "", txt: "博文朗拽住你，那双湛蓝色的眼里\n满是卑微的祈求。" },
    630142: { nxId: 1, scene: 63104, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好吧。" },
    //酒店大门
    630143: { nxId: 1, scene: 42301, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    630144: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "一路无言，博文朗开车把你送到了\n酒店门口，一家三口嬉笑着从你们\n车旁走过。" },
    630145: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "一直沉默的博文朗看着一家三口，\n开口说道。" },
    630146: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]你知道吗？小时候我多么羡慕那些\n有父母的小朋友。" },//渣男亲情牌
    630147: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "你诧异地望向博文朗，\n他的脸阴晴不定。" },
    630148: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]小的时候，在我眼里我的父母感情\n很好，我以为爱情就是那样。" },
    630149: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]但是后来，一夜崩塌。" },
    630150: { nxId: 1, scene: 42304, doing: 2, item: 211003, music: "", sound: "", txt: "[我]发生了什么？" },
    630151: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]也许是荷尔蒙的作用结束了，大家\n重新认识了彼此和彼此的爱……" },
    630152: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]有一天我醒来，家里一片狼藉，父\n母都不见了，他们没有回来。" },
    630153: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]第二天，我外婆来接走了我。" },
    630154: { nxId: 1, scene: 42304, doing: 2, item: 211003, music: "", sound: "", txt: "[我]你的父母呢？他们……抛弃你了？" },
    630155: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "博文朗苦笑了一下。" },
    630156: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]他们的说法是追求新生活，追求自\n由的爱情。" },
    630157: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]开始的时候，我深夜听到电话，我\n急忙下床去偷听……" },
    630158: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]听到的只是外婆朋友打来的电话。" },
    630159: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]我是个被遗弃的孤僻者，学校里也\n没人喜欢我。" },
    630160: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]……这就是我对感情的恐惧……" },
    630161: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "你握住博文朗手，博文朗紧紧反握住。" },
    630162: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我也许无法感同身受，但是……" },
    630163: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我明白，你心疼你，所以，我也希\n望，你不要再封闭自己。" },
    630164: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]就像你所说的过去的早已过去，你\n应该更加珍爱自己。" },
    630165: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]马丁、胡安，还有我……我们都很\n担心你……" },
    630166: { nxId: 1, scene: 42304, doing: 2, item: 220023, music: "", sound: "", txt: "[博文朗]你……遇见你，真的是我的幸运。" },
    630167: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "", txt: "你的心中还有无数的话想说，但是\n处于混乱的情感旋涡中，你却不知\n要怎么开口。" },
    630168: { nxId: 1, scene: 42304, doing: 1, item: 0, music: "", sound: "bell", txt: "街边教堂的钟声响起，一声声不断\n提醒着你，你们已经没有时间了。" },

    //坏结局
    630169: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那么我走了……" },
    630170: { nxId: 1, scene: 42304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]那我就不送你了，我还有点事。" },
    630171: { nxId: 1, scene: 42304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]再见。" },

    //机场
    630172: { nxId: 1, scene: 63301, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    630173: { nxId: 1, scene: 63304, doing: 1, item: 0, music: "", sound: "", txt: "你办完值机，转头却看到博文朗，\n他的手上拿着一副打包好的画。" },
    630174: { nxId: 1, scene: 63304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]你的画。" },
    630175: { nxId: 1, scene: 63304, doing: 1, item: 0, music: "", sound: "", txt: "你接过画，原来是你们初见时，博\n文朗画的你。" },
    630176: { nxId: 1, scene: 63304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你是去拿这个了？\n我还以为你已经忘了。" },
    630177: { nxId: 1, scene: 63304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]我怎么可能会忘记，\n我没有对你撒过谎……" },
    630178: { nxId: 1, scene: 63304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]我希望你能考虑留下，在巴塞罗那。" },
    630179: { nxId: 1, scene: 63304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]我的问题我会尽量去克服和改变，\n只要有你和我在一起的话……" },

    630180: { nxId: 1, scene: 63304, doing: 4, item: 46305, music: "", sound: "", txt: "分支选择" },
    //A
    630181: { nxId: 1, scene: 63304, doing: 2, item: 211004, music: "", sound: "", txt: "[我]博文朗，谢谢你这几天的照顾，我\n很开心！" },
    630182: { nxId: 1, scene: 63304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]但是，我也有我的家人和生活，我\n不能用他们，来赌一个未知的你。" },
    630183: { nxId: 1, scene: 63304, doing: 1, item: 0, music: "", sound: "", txt: "博文朗怔怔地看着你，他眼中的难\n过几乎要让你一起心碎。" },
    630184: { nxId: 630193, scene: 63304, doing: 2, item: 211004, music: "", sound: "", txt: "[我]博文朗，遇到你我真的很高兴。" },
    //B
    630185: { nxId: 1, scene: 63304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你一直是一个成熟的人，这些需要\n你自己克服。" },
    630186: { nxId: 1, scene: 63304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你不能这么自私，让我陪你一起进\n行一场豪赌。" },
    630187: { nxId: 1, scene: 63304, doing: 1, item: 0, music: "", sound: "", txt: "博文朗怔怔地看着你。" },
    630188: { nxId: 1, scene: 63304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]我知道了，如果我做到了，我会去\n中国找你的……" },
    630189: { nxId: 630193, scene: 63304, doing: 1, item: 0, music: "", sound: "", txt: "你笑了笑，没有说话。" },
    //C
    630190: { nxId: 1, scene: 63304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]她对你的情感，你对她的依赖，博\n文朗，你忽略不了的。" },
    630191: { nxId: 1, scene: 63304, doing: 2, item: 220021, music: "", sound: "", txt: "[博文朗]我们……" },
    630192: { nxId: 1, scene: 63304, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不要轻易地说，答案在你心里。" },

    630193: { nxId: 1, scene: 63304, doing: 1, item: 0, music: "", sound: "tip", txt: "登机时间到了，\n你轻吻了博文朗，\n你拿起画转身离开。" },

    630194: { nxId: 1, scene: 63304, doing: 6, item: 66302, music: "", sound: "", txt: "CG动画" },//大结局飞机凝视
    630195: { nxId: 1, scene: 63304, doing: 6, item: 66303, music: "", sound: "", txt: "CG动画" },//大结局帆船我爱你

    630196: { nxId: -1, scene: 63304, doing: 13, item: 11636, music: "", sound: "", txt: "独白" },

    630501: { nxId: 1, scene: 63404, doing: 2, item: 212501, music: "", sound: "", txt: "[神秘女士]愿天下有情人终成眷属，\n接下来，是我的故事了……" },





    











    













}

export class CfgChapter6_3 {
    public chapters: any = chapterObj;
    public endChatuList: string[] = ["bg_1_1#浦东机场", "bg_1_2#老地方", "bg_1_3#检票口", "bg_1_4#哭泣角落"];
}