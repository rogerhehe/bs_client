/** 操作ID,下一步操作ID,场景ID,操作类型,具体操作ID,描述 */
/** 操作类型: -1.无 0.背景移动 1.旁白 2.对话 3.人物介绍 4.分支选择 5.插图 6.CG动画 7.好感度 8.衣服选择 9.电话微信 10.回忆 11.彩蛋*/

let chapterObj = {
    //香水博物馆 男人的修罗场
    300001: { nxId: 300888, scene: 31001, doing: 0, item: 0, music: "haha", sound: "", txt: "背景初始化" },
    300888: { nxId: 300002, scene: 31001, doing: 12, item: 123001, music: "", sound: "", txt: "地点介绍" },
    300002: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "店铺内氤氲着淡淡的香味，但是又\n难以分辨出其中的任何一种。" },
    300003: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "香水瓶上标着西语，你随便拿了几\n个试了试香，程昱川赶紧往后退。" },
    300004: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你躲这么远干什么？" },
    300005: { nxId: 1, scene: 31004, doing: 2, item: 217004, music: "", sound: "", txt: "[程昱川]我鼻子不太好，\n香水味会让我打喷嚏！" },
    300006: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川想抬手，但是又怕失礼，\n只能皱了皱鼻子。" },
    300007: { nxId: 1, scene: 31004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]哈哈，也有你怕的东西。\n快来闻闻这个，是柑橘香调的！" },
    300008: { nxId: 1, scene: 31004, doing: 2, item: 217004, music: "", sound: "", txt: "[程昱川]不了，不了……你喜欢就好！" },
    300009: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "你把香水瓶凑到程昱川面前，\n程昱川连忙后退。" },
    300010: { nxId: 1, scene: 31004, doing: 2, item: 217004, music: "", sound: "", txt: "[程昱川]……阿嚏！" },
    300011: { nxId: 1, scene: 31004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]站住，别跑！" },
    300012: { nxId: 1, scene: 31004, doing: 2, item: 217004, music: "", sound: "", txt: "[程昱川]饶了我吧，我真的有点过敏……\n阿嚏……" },
    300013: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "这时程昱川的手机响了。" },
    300014: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我去接个电话，顺便远离这味道……\n阿嚏……" },
    300015: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川说完，一边捂住自己的口鼻\n一边逃一般地走出了门口。" },
    300016: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哼，真是靠不住的家伙。\n我自己看看。" },
    300017: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "店内陈列的各种香水瓶让你目不暇\n接，精致的洛可可风，异域情调的\n中东风，你甚至还看到了中式玉瓶。" },
    300018: { nxId: 1, scene: 31004, doing: 2, item: 211005, music: "", sound: "", txt: "[我]……好漂亮啊！" },
    300019: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "XS", sound: "", txt: "[我]咦！这一瓶……" },
    //插图
    300020: { nxId: 1, scene: 31004, doing: 5, item: 51004, music: "", sound: "", txt: "插图" },
    300021: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "众多的香水陈列中，\n一瓶香水引起了你的注意。" },
    300022: { nxId: 1, scene: 31004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（有种熟悉的感觉，\n    莫非这就是传说中的眼缘？）" },
    300023: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "你正伸手准备去试试，另一只手也\n伸了过来，你们的手碰撞在一起。" },
    300024: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "你收手时看向对方，\n一个帅气的外国人，似乎还是个混\n血。你示意他先请。" },
    300025: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]不好意思。女士优先。" },
    300026: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谢谢。" },
    300027: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "你拿起香水瓶仔细观看。那外国男\n人深邃的目光看着你，似乎在观察。" },
    300028: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]这款香水制作工艺非常的考究：\n前调是黑加仑、橙花，" },
    300029: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]中调是茉莉，后调是广藿香、香根草、\n香草和白麝香。" },
    300030: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你会说中文？" },
    300031: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]我算半个中国人。" },
    300032: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "他熟练的把香水喷在卡纸上，拿起\n来在你的鼻子前面轻轻的晃了几下。" },
    300033: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]虽然我不了解，但是这种感觉真不错。" },
    300034: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]其实它的味道不仅如此。\n可以为您做一下示范吗？" },
    300035: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "这个男人点了点自己的脖子，看着\n你，像是在征询你的意见。" },

    300036: { nxId: 1, scene: 31004, doing: 4, item: 43001, music: "", sound: "", txt: "分支选择" },
    //A
    //正常分支
    300037: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "他用熟练的动作揽起自己的袖子，\n把香水喷在了手腕上，然后伸手在\n你脖颈处抹开，你感受到了温暖。" },
    300038: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "一瞬间，你感到自己的两颊有点温\n热，又有点清凉，一股花与阳光般\n慵懒的香氛淡淡地包裹住了你。" },
    300039: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]在体温的作用下，\n味道才会真正地展现出来。" },
    //博1
    300040: { nxId: 300045, scene: 31004, doing: 7, item: 71017, music: "", sound: "", txt: "好感度" },
    //特殊分支
    300041: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "他用熟练的动作揽起自己的袖子，\n把香水喷在了手腕上，然后伸手在\n你脖颈处抹开，你感受到了温暖。" },
    300042: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "一瞬间，你感到自己的两颊有点温\n热，又有点清凉，一股花与阳光般\n慵懒的香氛淡淡地包裹住了你。" },
    300043: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]在体温的作用下，\n味道才会真正地展现出来。" },
    //博2
    300044: { nxId: 300045, scene: 31004, doing: 7, item: 71018, music: "", sound: "", txt: "好感度" },
    
    300045: { nxId: 1, scene: 31004, doing: 4, item: 43002, music: "", sound: "", txt: "分支选择" },
    //a
    300046: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谢谢你的推荐，这气味非常迷人。" },
    300047: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]像午后依靠在树荫下的少女，\n望着薰衣草田里的恋人。" },
    300048: { nxId: 1, scene: 31004, doing: 2, item: 211005, music: "", sound: "", txt: "[我]你的比喻真有画面感，好浪漫……" },
    300049: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "外国人轻轻指向你的脸颊。" },
    300050: { nxId: 300063, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]因为它就叫“少女之颊”。" },
    //b
    300051: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]对不起。" },
    300052: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]算了。这款香水有名字吗？" },
    300053: { nxId: 300063, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]“少女之颊”。" },
    //B
    300054: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]告诉我怎么做?" },
    300055: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "男子揽起自己的袖子，把香水喷在\n了手腕上，然后把香水涂在自己的\n脖子上。你照样做了。" },
    300056: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "你感到自己的两颊有点温热，又有\n点清凉，一股花与阳光般慵懒的香\n氛淡淡地包裹住了你。" },
    300057: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]在体温的作用下，\n它的味道会真正地展现出来。" },
    300058: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谢谢你的推荐，这气味非常迷人。" },
    300059: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]像午后依靠在树荫下的少女，\n望着薰衣草田里的恋人的模样。" },
    300060: { nxId: 1, scene: 31004, doing: 2, item: 211005, music: "", sound: "", txt: "[我]好浪漫的画面……" },
    300061: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "外国人轻轻指向你的脸颊。" },
    300062: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]因为它就叫“少女之颊”。" },

    300063: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这个名字真是起的恰到好处。" },
    300064: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]它很适合你。" },
    300065: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]为什么适合我？" },
    300066: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]它和你的气息很接近。" },
    300067: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]怎么说？" },
    300068: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]芬芳但并不浓烈，细腻但并不脆弱，\n贴近肌肤，才会散发出迷人的香氛。" },

    300069: { nxId: 1, scene: 31004, doing: 4, item: 43003, music: "", sound: "", txt: "分支选择" },
    //A
    300070: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]你不用谢谢我，我应该谢谢你。" },
    300071: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]什么？" },
    300072: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]这瓶香水这里只有这半瓶了。\n就留给相称的女士吧！" },
    300073: { nxId: 300077, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……谢谢。" },
    //B
    300074: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]美丽的姑娘，你这话可真是伤害了我。" },
    300075: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]这瓶香水只有这半瓶了。\n就留给相称的女士吧！" },
    300076: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谢谢。" },

    300077: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "haha", sound: "", txt: "[程昱川]不需要这位先生的好意。\n你要是喜欢，我找瓶新的送给你。" },
    300078: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]程昱川？你什么时候进来的？" },
    300079: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]一个电话要不了多久。\n亲爱的！" },
    300080: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]“亲爱的”？" },
    300081: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川不等你说完立刻转身朝向外\n国男子，一脸理直气壮的模样。" },
    300082: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]朋友，谢谢你的推荐。\n我替她谢谢你了。" },
    300083: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川转过头来对着你，一副就像\n跟你是一对相处已久的情侣的模样。" },
    300084: { nxId: 1, scene: 31004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]亲爱的，只要你想要的东西，\n要多少有多少。" },
    300085: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]这个香水是一位著名的调香师特制，\n只有少量几瓶……" },
    300086: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]我找了很久，应该除了这半瓶，\n全城都没有了。" },
    300087: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这样啊……\n看来我淘到了宝贝啊。" },
    300088: { nxId: 1, scene: 31004, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]不稀罕他的，我能弄到！" },
    300089: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]人家都说了只有这一瓶了…… " },
    300090: { nxId: 1, scene: 31004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]他没办法，我有啊。" },
    300091: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]你的女朋友非常漂亮。" },
    300092: { nxId: 1, scene: 31004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]谢谢。这是我唯一同意你的地方。" },

    300093: { nxId: 1, scene: 31004, doing: 4, item: 43004, music: "", sound: "", txt: "分支选择" },
    //A
    //正常分支
    300094: { nxId: 1, scene: 31004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]我和他只是旅途中偶遇而已，\n不是情侣好吗！ " },
    300095: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]是吗？我还以为……" },
    300096: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川把你拉到一边，声音压低。" },
    300097: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你可真是伤了我的心。\n我还以为我们关系不一样了。" },
    300098: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我不要你觉得，我要我觉得。 " },
    300099: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]认识你们二位真是很高兴，\n真希望能够再和你们多聊聊。" },
    300100: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]我在中国长大，也有一半中国血统，\n看到你们让我觉得亲切。" },
    300101: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]不过我还有别的事情要去忙，\n先告辞了。" },
    //博1
    300102: { nxId: 300229, scene: 31004, doing: 7, item: 71017, music: "", sound: "", txt: "好感度" },
    //特殊分支
    300103: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我和他只是旅途中偶遇而已，\n不是情侣好吗！ " },
    300104: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]是吗？我还以为……" },
    300105: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川把你拉到一边，声音压低。" },
    300106: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]你可真是伤了我的心。\n我还以为我们关系不一样了。" },
    300107: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我不要你觉得，我要我觉得。 " },
    300108: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]认识你们二位真是很高兴，\n真希望能够再和你们多聊聊。" },
    300109: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]我在中国长大，也有一半中国血统，\n看到你们让我觉得亲切。" },
    300110: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]不过我还有别的事情要去忙，\n先告辞了。" },
    //博2
    300111: { nxId: 300229, scene: 31004, doing: 7, item: 71018, music: "", sound: "", txt: "好感度" },
    //B
    300112: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "你伸手挽住了程昱川的胳膊。这个\n举动让他吃了一惊，回头看向你，\n眼神中流露出惊喜和得意。" },
    300113: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]别人也是一片好心，\n你好好说话行吗？ " },
    300114: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]啊，不好意思，请原谅我刚才的话。\n我女朋友有时候有点呆呆的。" },
    300115: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "这家伙掩饰不住满脸的开心，\n语调里都带着嘚瑟。" },

    300116: { nxId: 1, scene: 31004, doing: 4, item: 43005, music: "", sound: "", txt: "分支选择" },
    //a
    300117: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好了，我们该走了。\n也谢谢你的割爱。 " },
    300118: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]没什么，认识你们二位很高兴。\n我在中国长大，也有一半中国血统。" },
    300119: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]难怪看上去你不像典型的西班牙人。" },
    300120: { nxId: 300229, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]看到你们让我觉得亲切。\n有机会的话我们再见，告辞了。" },
    //b
    300121: { nxId: 1, scene: 31004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]啊！！！" },
    300122: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "你悄咪咪地一把拧在程昱川的胳膊\n上，这家伙差点叫出声来。这情形\n让你忍俊不禁。" },
    300123: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]这位先生你有什么不舒服吗？" },
    300124: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]没什么……我只是忘了我女朋友\n刚才交代的事情。" },
    300125: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]好吧，认识你们二位真是很高兴。" },
    300126: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]我在中国长大，也有一半中国血统，\n看见你们让我觉得非常亲切。" },
    300127: { nxId: 300229, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]有缘的话我们再见！\n告辞了。" },

    //C
    300128: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]不过你可能没法再找到这样的香水了。" },
    300129: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我可以再请这位调香师帮她做一次。" },
    300130: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]我不怀疑您的能力，\n但是，这位调香师已经过世了。" },
    300131: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]……OK，我想她也不稀罕。\n名贵的香水多了去了，不差这一瓶。" },
    300132: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]但是我就想要这一瓶嘛。 " },
    300133: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]冒昧问一句：你们二位是刚认识不\n久，还是刚吵完架？" },
    300134: { nxId: 1, scene: 31004, doing: 2, item: 217004, music: "", sound: "", txt: "[程昱川]朋友，你的问题也无礼了吧？" },
    300135: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]那就是刚认识。" },
    300136: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你为什么这么说？ " },
    300137: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]如果是刚吵完架的情侣的话，他应该会\n说“和你有什么关系”才对。" },
    300138: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]哦？我都不知道，一个画家，\n大上午会放下手头的工作，" },
    300139: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]跑来香水店跟姑娘搭讪。是习惯吗？" },
    300140: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]哈哈，你很聪明啊。" },
    300141: { nxId: 300143, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]程昱川，你是怎么看出来的？ " },
    300143: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川指了指对方的手臂。" },
    300144: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]还没来得及处理干净的颜料的痕迹，\n从袖口上颜料盘的压痕看是左撇子。" },
    300145: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]没有穿外套就在这里闲逛，\n说明工作的地点离这并不远。" },
    300146: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川说到这里思索了一下。" },
    300147: { nxId: 1, scene: 31004, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]格拉西亚大道寸土寸金，能在这附近工\n作的艺术家，绝非等闲。" },
    300148: { nxId: 1, scene: 31004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（这家伙平时不正经，认真起来却挺有\n    魅力的。） " },
    300149: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]哈哈，看来我的眼光真是不错。" },
    300150: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你的眼光不错？ " },
    300151: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]您是一位非常独特的女孩！" },
    300152: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]否则，这位如此聪明的先生怎么会和我\n一样，都被您给迷住了呢？" },
    300153: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]一下把三个人全夸了，\n你也很不简单。" },
    300154: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]这下你是承认了对她心怀不轨了。" },
    300155: { nxId: 1, scene: 31004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]如果你们二位才刚认识不久，\n我也说不上“心怀不轨”吧？" },
    300156: { nxId: 1, scene: 31004, doing: 2, item: 217004, music: "", sound: "", txt: "[程昱川]这个女孩是我的，\n你还是趁早打消念头！" },
    300157: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "这两人的声音越来越大，店内有些\n客人也被吸引，纷纷朝你这边看来。" },
    300158: { nxId: 1, scene: 31004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（糟糕，大家都在看这边……）" },
    300159: { nxId: 1, scene: 31004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（虽然两个大帅哥为我争风吃醋很享受，\n   但是这样下去太丢人了……）" },

    300160: { nxId: 1, scene: 31004, doing: 4, item: 43006, music: "", sound: "", txt: "分支选择" },
    //a
    //正常分支
    300161: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]两位，在你们开始决斗之前，听我说\n一句好吗？" },
    300162: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "两人听你这么一说，停止了对峙，\n都看着你这边。" },
    300163: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我来这只是想看看漂亮的瓶瓶罐罐，\n不想成为你们争吵的战利品。" },
    300164: { nxId: 300173, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]好吧。" },
    //程1
    300173: { nxId: 300165, scene: 31004, doing: 7, item: 71005, music: "", sound: "", txt: "好感度" },
    300165: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "你把香水递还给外国人，并向他点\n头致意，然后拉着程昱川正要离开，\n没想到那个外国人也追了上来。" },
    300166: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]两位稍等，刚才的事，我不是故意的。" },
    300167: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]其实能认识你们我很高兴。" },
    300168: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没关系。" },
    300169: { nxId: 1, scene: 31004, doing: 2, item: 217004, music: "", sound: "", txt: "[程昱川]哼。" },
    300170: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]我在中国长大，也有一半中国血统。\n看见你让我不由自主觉得非常亲切。" },
    300171: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]还有这位先生，如果刚才有冒犯的地方。\n还请多多包涵。" },
    300172: { nxId: 300174, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]有缘的话我们再见……\n告辞了。" },
    //博2
    300174: { nxId: 300229, scene: 31004, doing: 7, item: 71018, music: "", sound: "", txt: "好感度" },
    //特殊分支
    300175: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]两位，在你们开始决斗之前，听我说\n一句好吗？？" },
    300176: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "两人听你这么一说，只好停止对峙\n都看着你这边。" },
    300177: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我来这只是想看看漂亮的瓶瓶罐罐，\n不想成为你们争吵的战利品。" },
    300178: { nxId: 300187, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]好吧。" },
    //程2
    300187: { nxId: 300179, scene: 31004, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },
    300179: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "你把香水递还给外国人，并向他点\n头致意，然后拉着程昱川正要离开\n没想到那个外国人也追了上来。" },
    300180: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]两位稍等，刚才的事，我不是故意的。" },
    300181: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]其实能认识你们我很高兴。" },
    300182: { nxId: 1, scene: 31004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]没关系。" },
    300183: { nxId: 1, scene: 31004, doing: 2, item: 217004, music: "", sound: "", txt: "[程昱川]哼。" },
    300184: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]我在中国长大，也有一半中国血统。\n看见你让我不由自主觉得非常亲切。" },
    300185: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]还有这位先生，如果刚才有冒犯的地方。\n还请多多包涵。" },
    300186: { nxId: 300188, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]有缘的话我们再见……\n告辞了。" },
    //博3
    300188: { nxId: 300229, scene: 31004, doing: 7, item: 71019, music: "", sound: "", txt: "好感度" },
    //b
    //正常分支
    300189: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你们二位慢慢厮杀，\n我不可想影响你们成为大家的焦点。" },
    300190: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "你把香水递还给外国人，并向他点\n头致意，然后转身离开。" },
    300191: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哼！幼稚的男人……" },//还不是你挑的，作！
    300192: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "背后脚步声传来，你回头一看，却\n是程昱川追了出来。" },
    300193: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]抱歉，刚才让你觉得不自在了。" },
    300194: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没事。" },
    300195: { nxId: 1, scene: 31004, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]失态了，见笑见笑，哈哈……" },
    300196: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你们男人就这么强的……占有欲吗？" },
    300197: { nxId: 1, scene: 31004, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]那你想怎么样？我跟他互相谦让吗？\n“您请” “不不不，您先请”？" },
    300198: { nxId: 300207, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]讨厌！" },
    //程1
    300207: { nxId: 300199, scene: 31004, doing: 7, item: 71005, music: "", sound: "", txt: "好感度" },
    300199: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "这时那个外国男人也走了出来。" },
    300200: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]二位，刚才失礼之处还请多包涵。" },
    300201: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没关系的。" },
    300202: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]我在中国长大，也有一半中国血统。\n看见你让我不由自主觉得非常亲切。" },
    300203: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]还有这位先生，如果刚才有冒犯的地方。\n还请多多包涵。" },
    300204: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]两位，有缘的话我们再见……\n告辞了。" },
    300205: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "外国人走出两步后，又转头看向你\n们，眼神却一直聚焦在你身上……" },
    300206: { nxId: 300208, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]其实能认识你们我很高兴……" },
    //博2
    300208: { nxId: 300229, scene: 31004, doing: 7, item: 71018, music: "", sound: "", txt: "好感度" },
    //特殊分支
    300209: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你们二位慢慢厮杀，\n我不可想当你们“男子气概”的奖品。" },
    300210: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "你把香水递还给外国人，并向他点\n头致意，然后转身离开。" },
    300211: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哼！幼稚的男人……" },
    300212: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "背后脚步声传来，你回头一看，却\n是程昱川追了出来。" },
    300213: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]抱歉，刚才让你觉得不自在了。" },
    300214: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没事。" },
    300215: { nxId: 1, scene: 31004, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]失态了，见笑见笑，哈哈……" },
    300216: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你们男人就这么强的……占有欲吗？" },
    300217: { nxId: 1, scene: 31004, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]那你想怎么样？我跟他互相谦让吗？\n“您请” “不不不，您先请”？" },
    300218: { nxId: 300227, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]讨厌！" },
    //程2
    300227: { nxId: 300219, scene: 31004, doing: 7, item: 71006, music: "", sound: "", txt: "好感度" },
    300219: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "这时那个外国男人也走了出来。" },
    300220: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]二位，刚才失礼之处还请多包涵。" },
    300221: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]没关系的。" },
    300222: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]我在中国长大，也有一半中国血统。\n看见你让我不由自主觉得非常亲切。" },
    300223: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]还有这位先生，如果刚才有冒犯的地方。\n还请多多包涵。" },
    300224: { nxId: 1, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]两位，有缘的话我们再见……\n告辞了。" },
    300225: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "外国人走出两步后，又转头看向你\n们，眼神却一直聚焦在你身上……" },
    300226: { nxId: 300228, scene: 31004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]其实能认识你们我很高兴……" },
    //博3
    300228: { nxId: 1, scene: 31004, doing: 7, item: 71019, music: "", sound: "", txt: "好感度" },

    300229: { nxId: 1, scene: 31004, doing: 1, item: 0, music: "", sound: "", txt: "说完这番话，外国人离开了你们。" },
    300230: { nxId: 1, scene: 31004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]程昱川！\n干嘛说我跟你是一对啊？" },
    300231: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]是他这么觉得，我只是顺嘴而已。\n而且我觉得……阿嚏！" },
    300232: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……你冒着香水过敏跑到店里去的？" },
    300233: { nxId: 1, scene: 31004, doing: 2, item: 217009, music: "", sound: "", txt: "[程昱川]嗯。" },
    300234: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]真幼稚啊，你这个男人……" },
    300235: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]我这是怕你上别人当……阿嚏！" },
    300236: { nxId: 1, scene: 31004, doing: 2, item: 211003, music: "", sound: "", txt: "[我]要不要紧？\n回酒店休息一下吧。" },
    300237: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]没关系，我……阿嚏！" },
    300238: { nxId: 1, scene: 31004, doing: 2, item: 211003, music: "", sound: "", txt: "[我]别犟了，过敏可不是闹着玩的，\n我陪你去医院吧？" },
    300239: { nxId: 1, scene: 31004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]没关系，老毛病了，我自己去就好。" },
    300240: { nxId: 1, scene: 31004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]正好刚才电话找我有点事，我需要处理\n一下，可能下午没办法陪你了。" },
    300241: { nxId: 1, scene: 31004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我帮你叫车。" },
    //格拉西亚大道
    300242: { nxId: 1, scene: 24001, doing: 0, item: 0, music: "missing", sound: "", txt: "背景初始化" },
    300243: { nxId: 300245, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "离开香水博物馆，你在格拉西亚大\n道边帮程昱川叫了一辆出租车。" },
    300245: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川忍住喷嚏不敢张口……\n只能挥挥手跟你告别。" },
    300246: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "他的样子让你感觉有些好笑，却又\n有些感动，一瞬间你心中蓦然涌出\n了小小的冲动。 " },

    300247: { nxId: 1, scene: 24004, doing: 4, item: 43007, music: "", sound: "", txt: "分支选择" },
    //A
    300248: { nxId: 1, scene: 24004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]程昱川！" },
    300249: { nxId: 1, scene: 24004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]啥？" },
    300250: { nxId: 1, scene: 24004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]路上小心……" },
    300251: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "听到你这么说，程昱川从怀中掏出\n不存在的墨镜带在脸上，摆出酷酷\n的方下巴表情看向你。 " },
    300252: { nxId: 1, scene: 24004, doing: 2, item: 217004, music: "", sound: "", txt: "[程昱川] 我会回来的……\n 阿嚏！" },
    300253: { nxId: 1, scene: 24004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]终结者先生，先治好过敏吧！" },
    300254: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "玩笑过后，你看着程昱川拿着你买\n的大袋小袋上了车，往酒店的方向\n驶去。 " },
    300255: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "目送程昱川离开，你拍了拍自己心\n口，长出了一口气。 " },
    300256: { nxId: 1, scene: 24004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（刚才居然想要亲他，还好忍住了……\n    要真亲了他得嘚瑟成啥样……）" },
    300257: { nxId: 300267, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "过了好一会，平复了心情的你才又\n悠闲的转向格拉西亚街道。" },
    //B//正常分支
    300258: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川拦下了计程车，把你买的东\n西放好，准备钻进车内。" },
    300259: { nxId: 1, scene: 24004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]站住！" },
    300260: { nxId: 1, scene: 24004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]？" },
    300261: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川呆住的瞬间，你轻快地在程\n昱川脸上亲了一下。他明显没有任\n何准备，整个人就僵在原地。" },
    300262: { nxId: 1, scene: 24004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]一个小小的奖励。" },
    300263: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "偷袭得手之后，你转身飞快地溜走\n想着程昱川刚才的傻样，你不禁笑\n了出来。" },
    300264: { nxId: 1, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "被你偷袭的程昱川果然石化当场，\n过了好一会，他脸上才出现了明了\n的笑意。" },
    300265: { nxId: 1, scene: 24004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]……真是个古灵精怪的小妖精啊。\n阿嚏！" },
    //程3
    300266: { nxId: 300244, scene: 24004, doing: 7, item: 71007, music: "", sound: "", txt: "好感度" },
    300244: { nxId: 300267, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "躲在远处目送程昱川离开，平复了\n心情的你才又转向格拉西亚街道。" },
    
    //特殊分支
    300999: { nxId: 300998, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川拦下了计程车，把你买的东西放\n好，准备钻进车内。" },
    300998: { nxId: 300997, scene: 24004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]站住！" },
    300997: { nxId: 300996, scene: 24004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]？" },
    300996: { nxId: 300995, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川呆住的瞬间，你轻快地在程昱川\n脸上亲了一下。他明显没有任何准备，\n整个人就僵在原地" },
    300995: { nxId: 300994, scene: 24004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]一个小小的奖励。" },
    300994: { nxId: 300993, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "偷袭得手之后，你转身飞快地溜走。想\n着程昱川刚才的傻样，你不禁笑了出来" },
    300993: { nxId: 300992, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "被你偷袭的程昱川果然石化当场，过了\n好一会，他脸上才出现了明了的笑意" },
    300992: { nxId: 300991, scene: 24004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]……真是个古灵精怪的女孩啊。\n阿嚏！" },
    //程4
    300991: { nxId: 300990, scene: 24004, doing: 7, item: 71008, music: "", sound: "", txt: "好感度" },
    300990: { nxId: 300267, scene: 24004, doing: 1, item: 0, music: "", sound: "", txt: "躲在远处目送程昱川离开，平复了心\n情的你才又转向格拉西亚街道" },
    
    //格拉西亚街道
    300267: { nxId: 300269, scene: 32001, doing: 0, item: 0, music: "t2", sound: "", txt: "背景初始化" },

    300268: { nxId: 1, scene: 32002, doing: 0, item: 0, music: "", sound: "", txt: "背景向左移动" },//废

    300269: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "街道上有许多艺术家和表演者。其\n中有一个的周围围着许多人，你耐\n不住好奇心，挤进了人群。" },
    300270: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]啊？" },
    300271: { nxId: 300988, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "一个身穿中国古代服饰的男子，拿\n着长刀在摆着各种造型，与众不同\n的服饰引的路人们纷纷拍照合影。" },
    300988: { nxId: 300272, scene: 32004, doing: 2, item: 213007, music: "guardine", sound: "", txt: "[锦衣卫]心存侥幸者，赌徒是也……\n在下北镇抚司，顾不识！" },
    300272: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]锦……锦衣卫？！" },
    300273: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "或许是在异国的街头看到了出乎意\n料的景象，惊奇让你的声音分贝有\n些大。" },
    300274: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "锦衣卫听到你的声音，转头看向了\n你，突然他挪动了位置，快步向你\n走来。" },
    300275: { nxId: 1, scene: 32004, doing: 2, item: 213007, music: "gutingwei", sound: "", txt: "[锦衣卫]喂喂！你！" },
    300276: { nxId: 1, scene: 32004, doing: 2, item: 211003, music: "", sound: "", txt: "[我]（怎么回事，这是要干什么？）" },
    300277: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "锦衣卫一把将你拉了过来，\n还抓住了你的包。" },
    300278: { nxId: 1, scene: 32004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]你要干什么！" },
    300279: { nxId: 1, scene: 32004, doing: 2, item: 213007, music: "", sound: "", txt: "[锦衣卫]你嚷嚷什么？自己看看背后！" },
    300280: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "锦衣卫向你身后指了指，一个男人\n正在快速地从人群中挤出去。人们\n纷纷查看自己东西有没有遗失。" },
    300281: { nxId: 1, scene: 32004, doing: 2, item: 213007, music: "", sound: "", txt: "[锦衣卫]你快看看有没有少了东西。" },
    300282: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你赶紧打开包检查，钱包、护照、\n粉底口红、防晒喷雾、定妆粉、充\n电宝、小本子，一个不少。" },
    300283: { nxId: 1, scene: 32004, doing: 2, item: 213007, music: "", sound: "", txt: "[锦衣卫]这么多东西……你的包是黑洞吗？" },
    300284: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]女孩子的包不都这样吗？\n还好没丢东西，谢谢你啊。" },
    300285: { nxId: 1, scene: 32004, doing: 2, item: 213007, music: "", sound: "", txt: "[锦衣卫]那就好。要你多管闲事，\n遭报应了吧……" },
    300286: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]咦？多管闲事？我们见过吗？" },
    300287: { nxId: 1, scene: 32004, doing: 2, item: 213007, music: "", sound: "", txt: "[锦衣卫]哼哼，岂止见过，你还骂过我呢！" },
    300288: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "锦衣卫把面具摘下，\n露出了一张熟悉的面孔。" },
    300289: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是你！你是那个机场的……叫顾廷巍\n的孩子？你怎么会在这？" },
    300290: { nxId: 1, scene: 32004, doing: 2, item: 213011, music: "", sound: "", txt: "[顾廷巍]我在本来就在这留学。\n什么叫孩子？你才比我大多少？" },
    300291: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你在这儿卖艺？" },
    300292: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]我说姐姐，这叫街头艺术！\n你是来旅游的？" },

    300293: { nxId: 1, scene: 32004, doing: 4, item: 43008, music: "", sound: "", txt: "分支选择" },
    //A
    //正常分支
    300294: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]一个人出来旅行啊，至少算是七级\n孤独了。啧啧。" },
    300295: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你哪只眼睛看见我一个人？" },
    300296: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]姐姐，你难道忘了，\n我们是一起领的登机牌吗？" },
    300297: { nxId: 1, scene: 32004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]谁说一起来就要一起领登机牌了？\n又是谁说的路上不能认识新朋友的？" },
    300298: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]姐姐，淡定，激动会长皱纹的，\n那你朋友人呢？" },
    300299: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]他临时有事先走了。" },
    300300: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]您还真敢瞎吹……" },
    300301: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我说的是事实好嘛。信不信随你！" },
    //顾1
    300302: { nxId: 300326, scene: 32004, doing: 7, item: 71001, music: "", sound: "", txt: "好感度" },
    //特殊分支
    300303: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]一个人出来旅行啊，至少算是七级\n孤独了。啧啧。"},
    300304: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你哪只眼睛看见我一个人？" },
    300305: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]姐姐，你难道忘了，\n我们是一起领的登机牌吗？" },
    300306: { nxId: 1, scene: 32004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]谁说一起来就要一起领登机牌了？\n又是谁说的路上不能认识新朋友的？" },
    300307: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]姐姐，淡定，激动也会长皱纹的，\n那你朋友人呢？" },
    300308: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]他临时有事先走了。" },
    300309: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]您还真敢瞎吹…… "},
    300310: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我说的是事实好嘛。信不信随你！" },
    //顾2
    300311: { nxId: 300326, scene: 32004, doing: 7, item: 71002, music: "", sound: "", txt: "好感度" },

    //B
    //正常分支
    300312: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]也是，一个人出来旅行什么的，\n实在是太可怜了。" },
    300313: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哟，欺负人家小姑娘还哭得泪汪汪\n就不可怜了？" },
    300314: { nxId: 300326, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]打住打住，别提了哈。" },
    //特殊分支
    300315: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]也是，一个人出来旅行什么的，实在是\n太可怜了。" },
    300316: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哟，欺负人家小姑娘还哭得泪汪汪就不\n可怜了？" },
    300317: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]打住打住，别提了哈。" },
    300318: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍上下打量了你一下。" },
    300319: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]怎么？" },
    300320: { nxId: 1, scene: 32004, doing: 2, item: 213010, music: "", sound: "", txt: "[顾廷巍]姐姐今天看上去很不一样……" },
    300321: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]嗯？" },
    300322: { nxId: 1, scene: 32004, doing: 2, item: 213009, music: "", sound: "", txt: "[顾廷巍]特别好看。" },
    300323: { nxId: 1, scene: 32004, doing: 2, item: 211005, music: "", sound: "", txt: "[我]（……嘿呀，现在的小孩，说话都这么\n    真诚的吗……）" },
    300324: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你心情大好，\n对他的印象也好了不少。" },
    300325: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]咳咳，嗯，姐姐每天都很好看呢……" },

    300326: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]看不出来你竟然是学生？" },
    300327: { nxId: 1, scene: 32004, doing: 2, item: 213011, music: "", sound: "", txt: "[顾廷巍]你意思是说我显老咯？" },
    300328: { nxId: 1, scene: 32004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]很难想象你老老实实上课的画面。" },
    300329: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]学生知道的都比你多：\n巴塞罗那的小偷可是世界闻名。" },
    300330: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "就在你们说话的时候，原本围在附\n近的游客纷纷散去。" },
    300331: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好像影响到你的生意了。" },
    300332: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]没关系，钱不是最重要的，\n重要的是体验。刚刚你是不是想拍照？" },
    300333: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]对……" },
    300334: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]趁现在没人，你还拍吗？" },
    300335: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]拍啊，为什么不拍？" },
    300336: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你伸出手打开自拍，但是顾廷巍实\n在比你高太多。你看向他，他却一\n点没有稍微迁就你的意思。" },
    300337: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你能弯下腰吗？" },
    300338: { nxId: 1, scene: 32004, doing: 2, item: 213011, music: "", sound: "", txt: "[顾廷巍]没注意，姐姐你好矮啊！" },
    300339: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我说你这孩子会说话吗？" },
    300340: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍拿过你的手机，伸手拍下了\n照片。又拿着手机操作了些什么。" },
    300341: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]我加你微信了，\n遇到什么问题联系我，这里我熟！" },
    300342: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]好，谢谢你。" },
    300343: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你正准备离开，顾廷巍叫住了你。\n他指了指地上的牌子，上面用西班\n牙语写着合照10元。" },
    300344: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]拍照是要收费的。" },

    300345: { nxId: 1, scene: 32004, doing: 4, item: 43009, music: "", sound: "", txt: "分支选择" },
    //A
    //正常分支
    300346: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你从钱包里取出10欧元，\n递给顾廷巍。" },
    300347: { nxId: 1, scene: 32004, doing: 2, item: 213010, music: "", sound: "", txt: "[顾廷巍]谢谢惠顾！今天给美女姐姐买一送一！" },
    //顾2
    300348: { nxId: 300356, scene: 32004, doing: 7, item: 71002, music: "", sound: "", txt: "好感度" },
    //特殊分支
    300349: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你从钱包里取出10欧元，\n递给顾廷巍。" },
    300350: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]谢谢惠顾！今天给美女姐姐买一送一！" },
    300351: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍搭着你的肩膀，\n又自拍了好几张。" },
    //顾3
    300352: { nxId: 300356, scene: 32004, doing: 7, item: 71003, music: "", sound: "", txt: "好感度" },
    //B
    300353: { nxId: 1, scene: 32004, doing: 2, item: 213010, music: "", sound: "", txt: "[顾廷巍]明码标价，正经生意!" },
    300354: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我就知道……果然景区的热情导游\n都是挖坑的……" },
    300355: { nxId: 1, scene: 32004, doing: 2, item: 213011, music: "", sound: "", txt: "[顾廷巍]……算了算了，当我没说好吧。" },

    300356: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "e", txt: "你的肚子突然叫了，\n顾廷巍笑了起来。" },
    300357: { nxId: 1, scene: 32004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]笑、笑什么！" },
    300358: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]我还以为你是那种完美无缺的女人，\n原来也会跟我们一样肚子饿啊，哈哈。" },
    300359: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我又不是神仙，你没见过女人肚子饿？\n这附近有吃饭的地方吗？" },
    300360: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]附近的餐厅，现在这个时间没有预\n约恐怕你是吃不上的。" },
    300361: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]运气太差了吧……" },
    300362: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍走到一处台阶上，从放在附\n近的背包里，掏出一个用锡纸包裹\n的三明治递给你。" },
    300363: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]我做的，将就点？" },
    300364: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你坐到他身边，拨开锡纸，咬了一\n口，三明治馅料丰满酱汁酸甜清爽。" },
    300365: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]看不出来，手艺不错啊。" },
    300366: { nxId: 1, scene: 32004, doing: 2, item: 213009, music: "", sound: "", txt: "[顾廷巍]谢谢夸奖，10元！" },
    300367: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你怎么什么都要收钱啊？" },
    300368: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]我又没说免费请你吃了，\n天底下哪来的免费午餐？" },
    300369: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你刚才可还说钱不重要？" },
    300370: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你从钱包里拿出钱递给顾廷巍。" },
    300371: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]我只会免费给我女朋友做饭吃。" },
    300372: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你一口三明治噎在了胸口，咳嗽了\n起来顾廷巍赶紧递来一瓶水。" },
    300373: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]咳咳……等等，水要钱吗？" },
    300374: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]姐姐你是真的抠门。你是要钱还是\n要命啊，喝吧，免费的。" },
    300375: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你喝了一大口水才顺过气来。" },
    300376: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]还算你有点良心。" },

    300377: { nxId: 1, scene: 32004, doing: 4, item: 43010, music: "", sound: "", txt: "分支选择" },
    //A
    //正常分支
    300378: { nxId: 1, scene: 32004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]话说你这个造型是不错，在下北镇\n抚司顾不识，哈哈哈。" },
    300379: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你学着他的声调念起了台词，还没\n念完自己先笑了，顾廷巍也跟着笑了。" },
    300380: { nxId: 1, scene: 32004, doing: 2, item: 213009, music: "", sound: "", txt: "[顾廷巍]承蒙夸奖嘿。" },
    300381: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]衣服哪淘来的？" },
    300382: { nxId: 1, scene: 32004, doing: 2, item: 213010, music: "", sound: "", txt: "[顾廷巍]姐姐您不懂别瞎猜行吗？像我这么资深\n的Coser，果断是自己做的呀！" },
    300383: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你啃了口三明治，心想这小伙子又\n能下厨又能做衣服，挺少见的。" },
    300384: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]动手能力不错嘛。" },
    //顾2
    300385: { nxId: 1, scene: 32004, doing: 7, item: 71002, music: "", sound: "", txt: "好感度" },
    300386: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]留学生不自己动手怎么活？\n姐姐你一会打算去哪儿？" },
    300387: { nxId: 300407, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]等等我找找看。" },
   
    //特殊分支
    300388: { nxId: 1, scene: 32004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]你这身打扮不错啊，在下北镇\n抚司顾不识，哈哈哈。" },
    300389: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你学着他的声调念起了台词，还没念完\n自己先笑了，顾廷巍也跟着笑了……" },
    300390: { nxId: 1, scene: 32004, doing: 2, item: 213009, music: "", sound: "", txt: "[顾廷巍]承蒙夸奖嘿。" },
    300391: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]衣服哪淘来的？" },
    300392: { nxId: 1, scene: 32004, doing: 2, item: 213010, music: "", sound: "", txt: "[顾廷巍]姐姐您不懂别瞎猜行吗？像我这么资深\n的coser，果断是自己做的呀！" },
    300393: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你啃了口三明治，心想这小伙子又\n能下厨又能做衣服，挺少见的。" },
    300394: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]动手能力不错嘛。" },
    //顾3
    300395: { nxId: 1, scene: 32004, doing: 7, item: 71003, music: "", sound: "", txt: "好感度" },
    300396: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]留学生不自己动手怎么活？\n姐姐你一会打算去哪儿？" },
    300397: { nxId: 300407, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]等等我找找看。" },
    
    //B
    300398: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]姐姐我多嘴问你一句。" },//你好八卦
    300399: { nxId: 1, scene: 32004, doing: 2, item: 213011, music: "", sound: "", txt: "[顾廷巍]知道是多嘴那就不要问。" },
    300400: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我都没说是啥你怎么就这样？\n没长青春痘都长脾气了？" },
    300401: { nxId: 1, scene: 32004, doing: 2, item: 213008, music: "", sound: "", txt: "[顾廷巍]那你要问什么？" },
    300402: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]机场那个女孩，是你女朋友？" },
    300403: { nxId: 1, scene: 32004, doing: 2, item: 213011, music: "", sound: "", txt: "[顾廷巍]是。曾经是。" },
    300404: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那你们是……" },
    300405: { nxId: 1, scene: 32004, doing: 2, item: 213011, music: "", sound: "", txt: "[顾廷巍]就不该给你吃这个面包，有力气了就瞎\n管闲事。你等会是要去哪儿么？" },
    300406: { nxId: 1, scene: 32004, doing: 2, item: 211002, music: "", sound: "", txt: "[我]让我查查看……诶？这面包是姐姐我买\n的好不好？少给我唧唧歪歪的！" },

    300407: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你打开包包，拿出旅行的小册子\n翻了起来。" },
    300408: { nxId: 1, scene: 32004, doing: 2, item: 213011, music: "", sound: "", txt: "[顾廷巍]怎么，要去哪儿都不记得？" },
    300409: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我打算去奎尔公园，你有什么建议？" },
    300410: { nxId: 1, scene: 32004, doing: 2, item: 213011, music: "", sound: "", txt: "[顾廷巍]没有！\n如果你跑的快点，还来得及逛完。" },
    300411: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你不早说！" },
    300412: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍突然地站起来，\n走回了拍照的地方。" },
    300413: { nxId: 1, scene: 32004, doing: 2, item: 213011, music: "", sound: "", txt: "[顾廷巍]记得瓶子不要乱扔，要扔黄色的\n垃圾桶，不然罚起来你肉疼。" },
    300414: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]把我当白痴吗？我看得懂！" },
    300415: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "顾廷巍继续摆起了pose，\n不再搭理你。" },
    300416: { nxId: 1, scene: 32004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这人什么脾气……" },
    300417: { nxId: 1, scene: 32004, doing: 1, item: 0, music: "", sound: "", txt: "你向顾廷巍挥挥手，对方假装没看\n见。你白了他一眼，转身前往奎尔\n公园。" },
    
    //奎尔公园
    300418: { nxId: 1, scene: 33001, doing: 0, item: 0, music: "XS", sound: "", txt: "背景初始化" },
    300419: { nxId: 1, scene: 33004, doing: 1, item: 0, music: "", sound: "", txt: "公园里人不是很多，有一对当地人\n在廊下一弹一舞在做即兴表演，你\n拿出相机记录着这一幕。" },
    300420: { nxId: 1, scene: 33004, doing: 1, item: 0, music: "", sound: "", txt: "这时，你看到香水博物馆见过那个\n的外国人正在园中作画。他远远地\n也看见了你，冲你挥了挥手。" },
    300421: { nxId: 1, scene: 33004, doing: 2, item: 220009, music: "", sound: "", txt: "[外国人]又见面了，美丽的小姐。\n看来我们还真的很有缘分。" },
    300422: { nxId: 1, scene: 33004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]确实有缘……\n你在画什么？" },
    300423: { nxId: 1, scene: 33004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]随便什么。我在寻找灵感。" },
    300424: { nxId: 1, scene: 33004, doing: 1, item: 0, music: "", sound: "", txt: "你看了看他的画，上面有一个很像\n你的女性头像。" },
    300425: { nxId: 1, scene: 33004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这个人看起来很眼熟。" },
    300426: { nxId: 1, scene: 33004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]是的，也许在哪里见过。\n你的朋友呢？没有一起来吗？" },
    300427: { nxId: 1, scene: 33004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]他有点事情先回酒店。" },
    300428: { nxId: 1, scene: 33004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]这样啊，那么，\n能告诉我你的名字么？" },

    300429: { nxId: 1, scene: 33004, doing: 4, item: 43011, music: "", sound: "", txt: "分支选择" },
    //A
    300430: { nxId: 1, scene: 33004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我叫林晓璐。" },
    300431: { nxId: 1, scene: 33004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]很好听的名字……" },
    300432: { nxId: 1, scene: 33004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]我叫佩德罗.冈萨洛，\n你可以叫我的中文名：博文朗。" },
    //人物介绍博
    300433: { nxId: 1, scene: 33004, doing: 3, item: 31003, music: "", sound: "", txt: "人物介绍" },
    300434: { nxId: 300439, scene: 33004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你说过你是半个中国人。" },
    //B
    300435: { nxId: 1, scene: 33004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]问女士姓名之前，不该先自报家门吗？" },
    300436: { nxId: 1, scene: 33004, doing: 2, item: 220007, music: "", sound: "", txt: "[外国人]抱歉。我叫佩德罗.冈萨洛，\n你可以叫我的中文名：博文朗。" },
    //人物介绍博
    300437: { nxId: 1, scene: 33004, doing: 3, item: 31003, music: "", sound: "", txt: "人物介绍" },
    300438: { nxId: 1, scene: 33004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我叫林晓璐。你说过你是半个中国人？" },

    300439: { nxId: 1, scene: 33004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]是，我的父亲是中国人，\n他给我起的的这个名字。" },
    300440: { nxId: 1, scene: 33004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]非常特别。" },
    300441: { nxId: 1, scene: 33004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]特别？" },
    300442: { nxId: 1, scene: 33004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]一听就不是很中国。" },
    300443: { nxId: 1, scene: 33004, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]哈哈，从小大家都这么说。" },
    300444: { nxId: 1, scene: 33004, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]在中国的时候大家说我不中国，回西班\n牙后，同学们又觉得我不够西班牙。" },
    300445: { nxId: 1, scene: 33004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（看来他小时候经常被排挤……）" },
    300446: { nxId: 1, scene: 33004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]抱歉。我是无心之语。" },
    300447: { nxId: 1, scene: 33004, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]没关系。\n从小意识到自己不同可能是件好事。" },
    300448: { nxId: 1, scene: 33004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我能看看你的画吗？" },
    300449: { nxId: 1, scene: 33004, doing: 1, item: 0, music: "", sound: "", txt: "博文朗把手中的画簿递给了你。" },
    300450: { nxId: 1, scene: 33004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你画得真好。" },
    300451: { nxId: 1, scene: 33004, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]是你给了我灵感。" },

    300452: { nxId: 1, scene: 33004, doing: 4, item: 43012, music: "", sound: "", txt: "分支选择" },
    //A
    //正常分支
    300453: { nxId: 1, scene: 33004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]灵感无法用言语形容，它是一种情绪，\n一种头脑中的火花。" },
    300454: { nxId: 1, scene: 33004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]你感觉自己像一只穿过云层的飞鸟，\n一切都不能阻拦你。" },
    300455: { nxId: 1, scene: 33004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我才知道我还能让人飞起来。" },
    300456: { nxId: 1, scene: 33004, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]你绝对可以。" },
    //博1
    300457: { nxId: 300468, scene: 33004, doing: 7, item: 71009, music: "", sound: "", txt: "好感度" },
    //特殊分支
    300458: { nxId: 1, scene: 33004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]灵感无法用言语形容，它是一种情绪，\n一种头脑中的火花。" },
    300459: { nxId: 1, scene: 33004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]你感觉自己像一只穿过云层的飞鸟，\n一切都不能阻拦你。" },
    300460: { nxId: 1, scene: 33004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]我才知道我还能让人飞起来。" },
    300461: { nxId: 1, scene: 33004, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]你绝对可以。" },
    //博2
    300462: { nxId: 300468, scene: 33004, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" },
    //B
    300463: { nxId: 1, scene: 33004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]不如说它是机遇。" },
    300464: { nxId: 1, scene: 33004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]换个词听起来立刻不一样了，真聪明。" },
    300465: { nxId: 1, scene: 33004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]我只是说出我的看法。" },
    300466: { nxId: 1, scene: 33004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]每次你见到漂亮女孩，\n都会创造一个“机遇”？" },
    300467: { nxId: 1, scene: 33004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]那我就太忙碌了。\n我喜欢散散步，钓钓鱼，放松的生活。" },

    300468: { nxId: 1, scene: 33004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]所以你是个画家？" },
    300469: { nxId: 1, scene: 33004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]画家，也策划一些展览。" },
    300470: { nxId: 1, scene: 33004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你一会儿在香水博物馆，\n一会在公园闲逛，太悠闲了吧。" },
    300471: { nxId: 1, scene: 33004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]奎尔公园是高迪的代表作，也是我\n小时候常来的地方。" },
    300472: { nxId: 1, scene: 33004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]对我来说，这里有特殊的意义。" },
    300473: { nxId: 1, scene: 33004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你为什么当时离开中国呢？" },
    300474: { nxId: 1, scene: 33004, doing: 1, item: 0, music: "", sound: "", txt: "听到你的问题，博文朗沉默了一会\n良久，他才开口说话。" },
    300475: { nxId: 1, scene: 33004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]因为我父母离婚了。\n我回到巴塞罗那跟外公外婆一起住。" },
    300476: { nxId: 1, scene: 33004, doing: 2, item: 211003, music: "", sound: "", txt: "[我]啊？真是抱歉……" },
    300477: { nxId: 1, scene: 33004, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]你为什么要抱歉？\n他们离婚又不是因为你。" },
    300478: { nxId: 1, scene: 33004, doing: 2, item: 211003, music: "", sound: "", txt: "[我]勾起了你的伤心事。" },
    300479: { nxId: 1, scene: 33004, doing: 1, item: 0, music: "", sound: "", txt: "博文朗露出了笑容，\n他的面庞在阳光下像一尊青铜雕塑。" },
    300480: { nxId: 1, scene: 33004, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]那你陪我走走吧，就当安抚我了。" },

    //奎尔公园长椅
    300481: { nxId: 1, scene: 34001, doing: 0, item: 0, music: "bowenlang", sound: "", txt: "背景初始化" },
    300482: { nxId: 1, scene: 34004, doing: 1, item: 0, music: "", sound: "", txt: "眼前是一排砌在围墙上蜿蜒如波浪\n的五彩长椅，镶嵌着高迪标志性的\n彩色马赛克碎片，坐了很多人。" },
    300483: { nxId: 1, scene: 34004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]真有趣。\n就像坐在一个巨大的彩陶杯里。" },
    300484: { nxId: 1, scene: 34004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]这是世界上最长的椅子。" },
    300485: { nxId: 1, scene: 34004, doing: 1, item: 0, music: "", sound: "", txt: "博文朗躺到椅子上，\n说着从兜里掏出一壶酒。" },//我有一壶酒，足以慰风尘
    300486: { nxId: 1, scene: 34004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]要来一口吗？" },
    300487: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你喝的是什么？" },
    300488: { nxId: 1, scene: 34004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]巴塞罗那的琼浆玉液，Torres！" },
    300489: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我知道，是不错的好酒，\n我还知道它怎样会变得更美味。" },
    300490: { nxId: 1, scene: 34004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]你看上不像是对酒很了解的女孩。" },
    300491: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这么小看我？" },

    300666: { nxId: 300492, scene: 34004, doing: 8, item: 0, music: "huanzhuang", sound: "", txt: "换装界面" },//废

    300492: { nxId: 1, scene: 34004, doing: 4, item: 43013, music: "", sound: "", txt: "分支选择" },
    //A
    //正常分支
    300493: { nxId: 1, scene: 34004, doing: 1, item: 0, music: "", sound: "", txt: "你把路上买来的雪碧倒进酒壶，\n轻轻摇晃。" },
    300494: { nxId: 1, scene: 34004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]这是干什么？" },
    300495: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]给你的酒注入灵魂。" },
    300496: { nxId: 1, scene: 34004, doing: 1, item: 0, music: "", sound: "", txt: "博文朗尝了一口，享受地眯着眼睛。" },
    300497: { nxId: 1, scene: 34004, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]啊，这就是我热爱这个世界的原因。" },
    //博2
    300498: { nxId: 300520, scene: 34004, doing: 7, item: 71010, music: "", sound: "", txt: "好感度" },
    //特殊分支
    300499: { nxId: 1, scene: 34004, doing: 1, item: 0, music: "", sound: "", txt: "你把路上买来的雪碧倒进酒壶，\n轻轻摇晃。" },
    300500: { nxId: 1, scene: 34004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]这是干什么？" },
    300501: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]给你的酒注入灵魂。" },
    300502: { nxId: 1, scene: 34004, doing: 1, item: 0, music: "", sound: "", txt: "博文朗尝了一口，享受地眯着眼睛。" },
    300503: { nxId: 1, scene: 34004, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]啊，这就是我热爱这个世界的原因。" },
    300504: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]什么原因？比你更会调酒的人？" },
    300505: { nxId: 1, scene: 34004, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]能让我品尝到更美好滋味的人。" },
    300506: { nxId: 1, scene: 34004, doing: 2, item: 211004, music: "", sound: "", txt: "[我]听上去你需要的是一个厨师。" },
    300507: { nxId: 1, scene: 34004, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]哈哈哈，一个懂得让人灵魂共鸣，如美\n酒交融的厨师。" },
    300508: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那只是雪碧而已。话说，这可是中国人\n的喝法。你能习惯？" },
    300509: { nxId: 1, scene: 34004, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]为什么不能？" },
    300510: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]有很多人说，这是把酿酒时剔除的糖分\n加回去，不是一种像样的喝法。" },
    300511: { nxId: 1, scene: 34004, doing: 2, item: 220002, music: "", sound: "", txt: "[博文朗]哈哈，哪有这种说法。西班牙的国民酒\n桑格利亚，就是酒里加水果和糖。" },
    300512: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]大概是他们觉得不够“贵族”。" },
    300513: { nxId: 1, scene: 34004, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]葡萄酒在欧洲，是平民生活的一部分，\n就像阳光，空气和水一样。" },
    300514: { nxId: 1, scene: 34004, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]喜欢任何一种调味方式都不该是错，酒\n和食物是取悦于人的，而不应反过来。" },
    300515: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]同意你的看法。" },
    //博3
    300516: { nxId: 300520, scene: 34004, doing: 7, item: 71011, music: "", sound: "", txt: "好感度" },
    //B
    300517: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那你就这么喝吧，反正你看上去不是那\n么喜欢改变。" },
    300518: { nxId: 1, scene: 34004, doing: 2, item: 220005, music: "", sound: "", txt: "[博文朗]那你是误会我了，\n我一向乐于尝试新事物。" },
    300519: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]哼。" },

    300520: { nxId: 1, scene: 34004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]你了解奎尔公园吗？" },
    300521: { nxId: 1, scene: 34004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]这个地方充满了想象力，色彩，自然，\n怪大叔在这里熬成了怪老头！" },
    300522: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是说高迪大师嘛。" },
    300523: { nxId: 1, scene: 34004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]对，他住在这里的时候，\n从来不允许情侣进来参观。" },
    300524: { nxId: 1, scene: 34004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]一个与爱情绝缘的男人，终生奉献给他\n的事业，而非爱人。" },
    300525: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你看上去并不羡慕他这一方面。" },
    300526: { nxId: 1, scene: 34004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]没错，爱是生活的意义和目的。" },
    300527: { nxId: 1, scene: 34004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]你看看眼前，尽管高迪不允许情侣们踏\n足他的圣地。" },
    300528: { nxId: 1, scene: 34004, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]然而百年之后，热恋的人们依旧挤满了\n这里。爱是不可阻挡的……" },
    300529: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你有很多的异性朋友吧。" },
    300530: { nxId: 1, scene: 34004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]多少重要吗？" },
    300531: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]分人吧，对有的人来说，一段刻骨铭心\n的感情，胜过十段匆匆路过的经历。" },
    300532: { nxId: 1, scene: 34004, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]那你呢？" },
    300533: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我？" },
    300534: { nxId: 1, scene: 34004, doing: 1, item: 0, music: "", sound: "lingsheng", txt: "你正要回答，手机响了起来。" },
    //电话程
    300535: { nxId: 300536, scene: 34004, doing: 9, item: 930001, music: "", sound: "", txt: "电话微信" },

    300536: { nxId: 1, scene: 34004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]要回去了？" },
    300537: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]美好总是短暂的。走吧。" },
    300538: { nxId: 1, scene: 34004, doing: 1, item: 0, music: "", sound: "", txt: "你往回走，脚一崴鞋跟断了。" },
    300539: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]又来了……" },
    300540: { nxId: 1, scene: 34004, doing: 2, item: 220004, music: "", sound: "", txt: "[博文朗]怎么了？扭到脚了？" },
    300541: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]鞋坏了……" },
    300542: { nxId: 1, scene: 34004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]看来高迪并不想让你轻易地离开这里。" },
    300543: { nxId: 1, scene: 34004, doing: 1, item: 0, music: "", sound: "", txt: "看到你拿着坏掉的鞋发愁，\n博文朗脱下了自己的鞋。" },
    300544: { nxId: 1, scene: 34004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]那不如就让我们更加亲密地来感受一下\n大地好了。" },
    300545: { nxId: 1, scene: 34004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（真是个奇怪的男人，\n    似乎并不顾忌他人的眼光。）" },
    300546: { nxId: 1, scene: 34004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（和他在一起一切都变得轻松，\n    没有束缚。）" },
    300547: { nxId: 1, scene: 34004, doing: 1, item: 0, music: "", sound: "", txt: "你把鞋脱下，和他一起赤脚走在地\n上。穿了一天的高跟鞋，当光脚踏\n上地面，你感觉双脚被解放了出来。" },
    300548: { nxId: 1, scene: 34004, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]赤脚感觉怎么样？" },
    300549: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]一下子矮了不少。" },
    300550: { nxId: 1, scene: 34004, doing: 1, item: 0, music: "", sound: "", txt: "你们来到了门口，\n博文朗拉开了出租车的门。" },
    300551: { nxId: 1, scene: 34004, doing: 2, item: 220003, music: "", sound: "", txt: "[博文朗]上车吧，女士。" },
    300552: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]能不能把那副画送给我？" },
    300553: { nxId: 1, scene: 34004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]当然，如果你不嫌弃的话。不过这幅作\n品还没有完成，我画完再送给你如何？" },
    300554: { nxId: 1, scene: 34004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]那好吧。\n正好我也会在这里待几天。" },
    300555: { nxId: 1, scene: 34004, doing: 1, item: 0, music: "", sound: "", txt: "你和博文朗互留了电话，之后你向\n他道别。坐上了汽车，向酒店驶去。" },
    300556: { nxId: 1, scene: 34004, doing: 2, item: 220001, music: "", sound: "", txt: "[博文朗]再见，美丽的女士。\n也许我们很快就会再见……" },

    //酒店走廊
    300557: { nxId: 1, scene: 22001, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化" },
    300558: { nxId: 1, scene: 22004, doing: 1, item: 0, music: "haha", sound: "", txt: "你刚走到房间的门口，就看到程昱\n川斜靠在你的门框上，手上拿着个\n小盒子，冲着你得意的笑着。" },
    300559: { nxId: 1, scene: 22004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]给你的礼物！" },
    300560: { nxId: 1, scene: 22004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你什么时候买的？\n你不是香水过敏回来休息了吗？" },
    300561: { nxId: 1, scene: 22004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]休息就不能给你一个惊喜？" },
    300562: { nxId: 1, scene: 22004, doing: 2, item: 211015, music: "", sound: "", txt: "[我]（他特地为我准备的这份心意啊……）" },
    300563: { nxId: 1, scene: 22004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]无论如何，谢谢你！" },
    300564: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]要是能让你开心，这就很值得！" },
    //插图礼物盒
    300565: { nxId: 1, scene: 22004, doing: 5, item: 51003, music: "", sound: "", txt: "插图" },
    //插图香水瓶
    300566: { nxId: 300927, scene: 22004, doing: 5, item: 51004, music: "", sound: "", txt: "插图" },

    300927: { nxId: 300567, scene: 22004, doing: 2, item: 211003, music: "", sound: "", txt: "[我]啊，这不是……" },

    300567: { nxId: 1, scene: 22004, doing: 4, item: 43014, music: "", sound: "", txt: "分支选择" },
    //A
    300568: { nxId: 1, scene: 22004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]是刚刚那个……咦，不对，" },
    300569: { nxId: 1, scene: 22004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]博物馆里的只有半瓶，而这个是满的\n……你从哪得到的？" },
    300570: { nxId: 1, scene: 22004, doing: 2, item: 217005, music: "", sound: "", txt: "[程昱川]秘密。" },
    300571: { nxId: 1, scene: 22004, doing: 2, item: 211003, music: "", sound: "", txt: "[我]不会是你……偷来的吧？" },//脑回路也是清奇
    300572: { nxId: 1, scene: 22004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]你脑子里想些什么呢？\n我看上去那么像江洋大盗？" },
    300573: { nxId: 1, scene: 22004, doing: 1, item: 0, music: "", sound: "", txt: "你白了程昱川一眼，继续问道。" },
    300574: { nxId: 1, scene: 22004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]这费了你很多功夫吧？" },
    300575: { nxId: 1, scene: 22004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]一般一般，小意思。\n你高兴才是最重要的。" },
    300576: { nxId: 1, scene: 22004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]程昱川，谢谢你！" },
    300577: { nxId: 1, scene: 22004, doing: 1, item: 0, music: "", sound: "", txt: "刚才博文朗说过，整个城市里都找\n不到第二瓶现成的，要找到跟一模\n一样的香水，应该费了很大劲吧。" },
    300578: { nxId: 1, scene: 22004, doing: 1, item: 0, music: "", sound: "", txt: "没想到程昱川看着不靠谱，心思还\n挺细的……想到这里，你的心里有\n一股暖意。" },
    300579: { nxId: 1, scene: 22004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]要进来坐坐吗？" },
    300580: { nxId: 1, scene: 22004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]你今天走了很多地方吧？\n还是早点休息吧。" },
    300581: { nxId: 300592, scene: 22004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]嗯……晚安。" },
    //B
    300582: { nxId: 1, scene: 22004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]你的礼物很棒！" },
    300583: { nxId: 1, scene: 22004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]费了我一点时间，但是值得。" },
    300584: { nxId: 1, scene: 22004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不过，我不能收。" },
    300585: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]为什么？" },
    300586: { nxId: 1, scene: 22004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]刚才博物馆里那位先生说过，\n这个香水很稀有对吧？" },
    300587: { nxId: 1, scene: 22004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]我们才刚认识不久，\n我不能收这么贵重的礼物。" },
    300588: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]认识多久不是个问题。\n礼物送出就不能拿回，别推辞了。" },
    300589: { nxId: 1, scene: 22004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]……好吧，\n总之非常感谢你。" },
    300590: { nxId: 1, scene: 22004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]不过今天真的太累，\n我要去休息了。" },
    300591: { nxId: 1, scene: 22004, doing: 2, item: 217001, music: "", sound: "", txt: "[程昱川]那就祝你有个美妙的夜晚。\n做个好梦，晚安。" },

    300592: { nxId: 1, scene: 22004, doing: 1, item: 0, music: "", sound: "", txt: "你正要关上门，\n程昱川忽然又回过头。" },
    300593: { nxId: 1, scene: 22004, doing: 2, item: 217003, music: "", sound: "", txt: "[程昱川]喂，林晓璐，明天我带你去一个地方。" },
    300594: { nxId: 1, scene: 22004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]商业区就算了，\n我控制不住自己剁手的欲望。" },
    300595: { nxId: 1, scene: 22004, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]哈哈，不是，是海滩，\n非常漂亮，很适合约会。" },
    300596: { nxId: 1, scene: 22004, doing: 2, item: 211001, music: "", sound: "", txt: "[我]谁要和你约会了？" },
    300597: { nxId: 1, scene: 22004, doing: 2, item: 217002, music: "", sound: "", txt: "[程昱川]你不是说喜欢海吗？\n就这么说定了。" },
    300598: { nxId: 1, scene: 22004, doing: 1, item: 0, music: "", sound: "", txt: "程昱川说完这番话就扭头离开了。\n这人怎么都不知道尊重一下女士的\n意见呢？" },

    //酒店房间（夜）
    300599: { nxId: 1, scene: 21001, doing: 0, item: 0, music: "haha2", sound: "", txt: "背景初始化" },
    300600: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "你把白天的战利品扔在桌上，\n直接瘫倒在沙发上……" },
    300601: { nxId: 1, scene: 21004, doing: 1, item: 0, music: "", sound: "lingsheng", txt: "一边敲打着酸痛的腿，一边想着今\n天的见闻，忽然手机响起。" },

    300602: { nxId: 300603, scene: 21004, doing: 9, item: 930003, music: "", sound: "", txt: "电话微信" },

    300603: { nxId: 300889, scene: 21004, doing: 1, item: 0, music: "", sound: "", txt: "挂掉电话，你把自己埋在柔软舒服\n的的大床中，闭上了眼睛。" },
    
    //暂时替换剧情
    300889: { nxId: 300604, scene: 35001, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化", notopen: 1 },
    300604: { nxId: 1, scene: 35004, doing: 1, item: 0, music: "", sound: "", txt: "不知过了多久，你从睡梦中醒来，\n看看窗外，已是黄昏……", notopen: 1 },
    300605: { nxId: 1, scene: 35004, doing: 2, item: 211014, music: "", sound: "", txt: "[我]啊，睡的好舒服……", notopen: 1 },
    300606: { nxId: 1, scene: 35004, doing: 1, item: 0, music: "", sound: "", txt: "抬眼间，你看到桌上的花，想起程\n昱川明日的约会邀请……" , notopen: 1},
    300607: { nxId: 1, scene: 35004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]这个油腔滑调的家伙，\n明天要不要去呢？", notopen: 1 },
    300608: { nxId: 1, scene: 35004, doing: 1, item: 0, music: "", sound: "doorcell", txt: "门铃声忽然传来，\n打断了正在纠结的你。" , notopen: 1},
    300609: { nxId: 1, scene: 35004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]……又是谁？", notopen: 1 },
    //酒店走廊
    300610: { nxId: 1, scene: 22001, doing: 0, item: 0, music: "", sound: "opendoor", txt: "背景初始化", notopen: 1 },
    300611: { nxId: 300981, scene: 22004, doing: 1, item: 0, music: "", sound: "", txt: "门外并没有人，只有地上一只小纸\n飞机静静等待。", notopen: 1 },
    300981: { nxId: 300982, scene: 22004, doing: 5, item: 51011, music: "", sound: "", txt: "插图", notopen: 1 },//小灰机
    300982: { nxId: 300612, scene: 22004, doing: 1, item: 0, music: "", sound: "", txt: "你捡起小飞机返回了房内。" , notopen: 1},
    //酒店房间（夜）
    300612: { nxId: 300614, scene: 35001, doing: 0, item: 0, music: "", sound: "", txt: "背景初始化", notopen: 1 },
    300614: { nxId: 1, scene: 35004, doing: 1, item: 0, music: "", sound: "", txt: "小纸飞机上面有字，你将纸飞机打\n开，读出了上面的留言。", notopen: 1 },
    300615: { nxId: 1, scene: 35004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]“小姐姐，见字如晤。”", notopen: 1 },
    300616: { nxId: 1, scene: 35004, doing: 2, item: 211017, music: "", sound: "", txt: "[我]哈哈哈，顾廷巍，还会用古文啦。" , notopen: 1},
    300617: { nxId: 1, scene: 35004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]“今天在街头有演出，来不及招呼你，\n  别见怪啊。”" , notopen: 1},
    300618: { nxId: 1, scene: 35004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]“明天我带你到处去逛逛吧，我知道一\n  些很好玩的地方！”" },
    300619: { nxId: 1, scene: 35004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]“放心，这次免费！考虑好回我喔！”", notopen: 1 },
    300620: { nxId: 1, scene: 35004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]“PS：立刻回复有惊喜！”" , notopen: 1},
    300621: { nxId: 1, scene: 35004, doing: 2, item: 211017, music: "", sound: "", txt: "[我]这孩子真有意思，要不要答应他呢？" , notopen: 1},
    300622: { nxId: 1, scene: 35004, doing: 1, item: 0, music: "", sound: "lingsheng", txt: "正自思量间，电话又响了起来……" , notopen: 1},
    300623: { nxId: 1, scene: 35004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]今天什么情况，业务这么繁忙？" , notopen: 1},

    300624: { nxId: 300625, scene: 35004, doing: 9, item: 930037, music: "", sound: "", txt: "电话微信" , notopen: 1},

    300625: { nxId: 1, scene: 35004, doing: 1, item: 0, music: "", sound: "", txt: "放下电话，\n你整理了一下混乱的思绪……", notopen: 1 },
    300626: { nxId: 1, scene: 35004, doing: 2, item: 211011, music: "", sound: "", txt: "[我]突如其来的大桃花运，林晓璐！\n这可是重大抉择啊……", notopen: 1 },

    300627: { nxId: 1, scene: 35004, doing: 1, item: 0, music: "", sound: "", txt: "注意！在接下来的剧情中，\n您只能选择答应一位男士的邀请。", notopen: 1 },
    300628: { nxId: 1, scene: 35004, doing: 1, item: 0, music: "", sound: "", txt: "或者，您也可以在故事的章节页面\n选择【重置】来进行其他男主的故\n事线。" , notopen: 1},

    

    300629: { nxId: 1, scene: 35004, doing: 4, item: 43015, music: "", sound: "", txt: "分支选择" , notopen: 1},
    //程昱川
    300630: { nxId: 1, scene: 35004, doing: 2, item: 211016, music: "", sound: "", txt: "[我]（程昱川虽然有点不正经，但是我挺\n   喜欢他的风趣幽默……）", notopen: 1 },
    300631: { nxId: 1, scene: 35004, doing: 1, item: 0, music: "time", sound: "", txt: "你走到窗前，天还没黑，夕阳映晚\n霞，慢慢下沉到海边天际，唯美\n又壮观。" , notopen: 1},
    300632: { nxId: 300634, scene: 35004, doing: 6, item: 63001, music: "", sound: "", txt: "CG动画" , notopen: 1},//晚霞  

    300633: { nxId: 1, scene: 35004, doing: 1, item: 0, music: "", sound: "", txt: "看着夕阳慢慢沉入大海，带着咸味\n的微风轻拂发梢，夜色逐渐染满了\n房间。" },//废

    300634: { nxId: 1, scene: 35004, doing: 2, item: 211016, music: "", sound: "", txt: "[我]（一场心血来潮的旅行，一个陌生的城\n   市，一个意外相遇的人。）" , notopen: 1},
    300635: { nxId: 1, scene: 35004, doing: 2, item: 211016, music: "", sound: "", txt: "[我]（我不知道这个选择是否正确，但明天\n   似乎会是很值得期待的一天。）", notopen: 1 },
    300636: { nxId: 300654, scene: 35004, doing: 2, item: 211016, music: "", sound: "", txt: "[我]（程昱川，你会给我怎样的惊喜呢？）" , notopen: 1},
    300654: { nxId: 300651, scene: 35004, doing: 1, item: 0, music: "", sound: "", txt: "海风吹过，巴塞罗那，入夜了……" , notopen: 1},
    300651: { nxId: -1, scene: 35005, doing: 0, item: 1, music: "", sound: "", txt: "左移", notopen: 1 },
    //顾廷巍
    300637: { nxId: 1, scene: 35004, doing: 2, item: 211016, music: "", sound: "", txt: "[我]（顾廷巍这个小弟弟挺帅气的，\n   嘻嘻……）" , notopen: 1},
    300638: { nxId: 1, scene: 35004, doing: 1, item: 0, music: "time", sound: "", txt: "你走到窗前，天还没黑，夕阳映晚\n霞，慢慢下沉到海边天际，唯美\n又壮观。", notopen: 1 },
    300639: { nxId: 300641, scene: 35004, doing: 6, item: 63001, music: "", sound: "", txt: "CG动画" , notopen: 1},//晚霞

    300640: { nxId: 1, scene: 35004, doing: 1, item: 0, music: "", sound: "", txt: "看着夕阳慢慢沉入大海，带着咸味\n的微风轻拂发梢，夜色逐渐染满了\n房间。" },//废

    300641: { nxId: 1, scene: 35004, doing: 2, item: 211016, music: "", sound: "", txt: "[我]（顾廷巍，你今天竟敢敲本姑娘的\n   竹杠，真是胆大妄为。）" , notopen: 1},
    300642: { nxId: 1, scene: 35004, doing: 2, item: 211016, music: "", sound: "", txt: "[我]（你这我行我素的小狼狗，\n   会带给我什么惊喜呢？）", notopen: 1 },
    300643: { nxId: 300655, scene: 35004, doing: 2, item: 211016, music: "", sound: "", txt: "[我]（嘻嘻，看你能怎么伺候姐姐了。）" , notopen: 1},
    300655: { nxId: 300652, scene: 35004, doing: 1, item: 0, music: "", sound: "", txt: "远方的灯火闪烁，凉爽的海风和着\n夜色，你睡意渐浓……" , notopen: 1},
    300652: { nxId: -1, scene: 35005, doing: 0, item: 2, music: "", sound: "", txt: "左移" , notopen: 1},
    //博文朗
    300644: { nxId: 1, scene: 35004, doing: 2, item: 211016, music: "", sound: "", txt: "[我]（大画家的画室，\n   是什么样子的呢……）", notopen: 1 },
    300645: { nxId: 1, scene: 35004, doing: 1, item: 0, music: "time", sound: "", txt: "你走到窗前，天还没黑，夕阳映晚\n霞，慢慢下沉到海边天际，唯美\n又壮观。", notopen: 1 },   
    300646: { nxId: 300648, scene: 35004, doing: 6, item: 63001, music: "", sound: "", txt: "CG动画" , notopen: 1},//晚霞

    300647: { nxId: 1, scene: 35004, doing: 1, item: 0, music: "", sound: "", txt: "看着夕阳慢慢沉入大海，带着咸味\n的微风轻拂发梢，夜色逐渐染满了\n房间。" },//废

    300648: { nxId: 1, scene: 35004, doing: 2, item: 211016, music: "", sound: "", txt: "[我]（不知道为什么，我内心似乎非常\n   羡慕博文朗。）" , notopen: 1},
    300649: { nxId: 1, scene: 35004, doing: 2, item: 211016, music: "", sound: "", txt: "[我]（可能是他身上那股自由自在的\n   气息吧……）", notopen: 1 },
    300650: { nxId: 300656, scene: 35004, doing: 2, item: 211016, music: "", sound: "", txt: "[我]（大画家，你会在我的旅途中画一幅怎\n   样的杰作呢？）" , notopen: 1},
    300656: { nxId: 300653, scene: 35004, doing: 1, item: 0, music: "", sound: "", txt: "晚风轻拂，\n夜幕笼罩了你的房间……", notopen: 1 },
    300653: { nxId: -1, scene: 35005, doing: 0, item: 3, music: "", sound: "", txt: "左移", notopen: 1 },
}

export class CfgChapter3 {
    public chapters: any = chapterObj;
    public endChatuList: string[] = ["amt#阿马特耶之家", "park#奎尔公园", "sun#巴塞罗那落日", "bg_1_4#哭泣角落"];
}