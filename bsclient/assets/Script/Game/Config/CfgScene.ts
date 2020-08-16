/** ID,背景,初始X坐标,X方向移动距离,移动需要时间 */
/** 第一位章节ID,第二位场景ID,其余为状态ID */

let sceneObj = {
    11000: { bg: "t2", initx: 0, x: 0, dt: 0 },
    11001: { bg: "t2", initx: 0, x: 0, dt: 0 },
    11002: { bg: "t2", initx: 0, x: -50, dt: 1 },
    11003: { bg: "t2", initx: 0, x: 0, dt: 0.8 },
    11004: { bg: "t2", initx: 0, x: 0, dt: 0 },

    12001: { bg: "checkin", initx: 500, x: 0, dt: 0 },
    12002: { bg: "checkin", initx: 0, x: -1200, dt: 1 },
    12003: { bg: "checkin", initx: 0, x: 1000, dt: 0.8 },
    12004: { bg: "checkin", initx: 0, x: 0, dt: 0 },

    13001: { bg: "corner", initx: 0, x: 0, dt: 0 },
    13002: { bg: "corner", initx: 0, x: -1000, dt: 1 },
    13003: { bg: "corner", initx: 0, x: 800, dt: 0.8 },
    13004: { bg: "corner", initx: 0, x: 0, dt: 0 },

    14001: { bg: "bar", initx: 400, x: 0, dt: 0 },
    14002: { bg: "bar", initx: 0, x: -1200, dt: 1 },
    14003: { bg: "bar", initx: 0, x: 1000, dt: 0.8 },
    14004: { bg: "bar", initx: 0, x: 0, dt: 0 },

    21001: { bg: "hotelm", initx: 200, x: 0, dt: 0 },
    21002: { bg: "hotelm", initx: 0, x: -500, dt: 1 },
    21003: { bg: "hotelm", initx: 0, x: 300, dt: 0.8 },
    21004: { bg: "hotelm", initx: 0, x: 0, dt: 0 },

    22001: { bg: "hallway", initx: 100, x: 0, dt: 0 },
    22002: { bg: "hallway", initx: 0, x: -1200, dt: 1 },
    22003: { bg: "hallway", initx: 0, x: 1000, dt: 0.8 },
    22004: { bg: "hallway", initx: 0, x: 0, dt: 0 },

    23001: { bg: "restaurant", initx: 200, x: -50, dt: 1 },
    23002: { bg: "restaurant", initx: 0, x: -1200, dt: 1 },
    23003: { bg: "restaurant", initx: 0, x: 1000, dt: 0.8 },
    23004: { bg: "restaurant", initx: 0, x: 0, dt: 0 },

    24001: { bg: "street1", initx: 300, x: -50, dt: 1 },
    24002: { bg: "street1", initx: 0, x: -1200, dt: 1 },
    24003: { bg: "street1", initx: 0, x: 1000, dt: 0.8 },
    24004: { bg: "street1", initx: 0, x: 0, dt: 0 },

    25001: { bg: "street2", initx: 400, x: -50, dt: 1 },
    25002: { bg: "street2", initx: 0, x: -1200, dt: 1 },
    25003: { bg: "street2", initx: 0, x: 1000, dt: 0.8 },
    25004: { bg: "street2", initx: 0, x: 0, dt: 0 },
    25005: { bg: "street2", initx: 0, x: 400, dt: 0.6 },
    25006: { bg: "street2", initx: -500, x: -50, dt: 1 },

    26001: { bg: "shop1", initx: 100, x: 0, dt: 0 },
    26002: { bg: "shop1", initx: 0, x: -1200, dt: 1 },
    26003: { bg: "shop1", initx: 0, x: 1000, dt: 0.8 },
    26004: { bg: "shop1", initx: 0, x: 0, dt: 0 },

    27001: { bg: "shop2", initx: 100, x: 0, dt: 0 },
    27002: { bg: "shop2", initx: 0, x: -1200, dt: 1 },
    27003: { bg: "shop2", initx: 0, x: 1000, dt: 0.8 },
    27004: { bg: "shop2", initx: 0, x: 0, dt: 0 },

    28001: { bg: "shop3", initx: -10, x: 0, dt: 0 },
    28002: { bg: "shop3", initx: 0, x: -1200, dt: 1 },
    28003: { bg: "shop3", initx: 0, x: 1000, dt: 0.8 },
    28004: { bg: "shop3", initx: 0, x: 0, dt: 0 },

    29001: { bg: "war", initx: 200, x: 0, dt: 0 },
    29002: { bg: "war", initx: 0, x: -1200, dt: 1 },
    29003: { bg: "war", initx: 0, x: 1000, dt: 0.8 },
    29004: { bg: "war", initx: 0, x: 0, dt: 0 },

    21101: { bg: "lion", initx: 100, x: 0, dt: 0 },
    21102: { bg: "lion", initx: 0, x: -1200, dt: 1 },
    21103: { bg: "lion", initx: 0, x: 1000, dt: 0.8 },
    21104: { bg: "lion", initx: 0, x: 0, dt: 0 },

    21201: { bg: "ama", initx: 200, x: 0, dt: 0 },
    21202: { bg: "ama", initx: 0, x: -1200, dt: 1 },
    21203: { bg: "ama", initx: 0, x: 1000, dt: 0.8 },
    21204: { bg: "ama", initx: 0, x: 0, dt: 0 },

    21301: { bg: "ama2", initx: 0, x: 0, dt: 0 },
    21302: { bg: "ama2", initx: 0, x: -1200, dt: 1 },
    21303: { bg: "ama2", initx: 0, x: 1000, dt: 0.8 },
    21304: { bg: "ama2", initx: 0, x: 0, dt: 0 },

    21401: { bg: "qiaokeli", initx: 0, x: 0, dt: 0 },
    21402: { bg: "qiaokeli", initx: 0, x: -1200, dt: 1 },
    21403: { bg: "qiaokeli", initx: 0, x: 1000, dt: 0.8 },
    21404: { bg: "qiaokeli", initx: 0, x: 0, dt: 0 },

    21501: { bg: "bate", initx: 200, x: 0, dt: 0 },
    21502: { bg: "bate", initx: 0, x: -1200, dt: 1 },
    21503: { bg: "bate", initx: 0, x: 1000, dt: 0.8 },
    21504: { bg: "bate", initx: 0, x: 0, dt: 0 },

    21601: { bg: "bate2", initx: 0, x: 0, dt: 0 },
    21602: { bg: "bate2", initx: 0, x: -1200, dt: 1 },
    21603: { bg: "bate2", initx: 0, x: 1000, dt: 0.8 },
    21604: { bg: "bate2", initx: 0, x: 0, dt: 0 },

    31001: { bg: "smell", initx: 300, x: 0, dt: 0 },
    31002: { bg: "smell", initx: 0, x: -1200, dt: 1 },
    31003: { bg: "smell", initx: 0, x: 1000, dt: 0.8 },
    31004: { bg: "smell", initx: 0, x: 0, dt: 0 },

    32001: { bg: "street3", initx: 0, x: 0, dt: 0 },
    32002: { bg: "street3", initx: 0, x: -1200, dt: 1 },
    32003: { bg: "street3", initx: 0, x: 1000, dt: 0.8 },
    32004: { bg: "street3", initx: 0, x: 0, dt: 0 },

    33001: { bg: "park", initx: 0, x: 0, dt: 0 },
    33002: { bg: "park", initx: 0, x: -1200, dt: 1 },
    33003: { bg: "park", initx: 0, x: 1000, dt: 0.8 },
    33004: { bg: "park", initx: 0, x: 0, dt: 0 },

    34001: { bg: "parkin", initx: 0, x: 0, dt: 0 },
    34002: { bg: "parkin", initx: 0, x: -1200, dt: 1 },
    34003: { bg: "parkin", initx: 0, x: 1000, dt: 0.8 },
    34004: { bg: "parkin", initx: 0, x: 0, dt: 0 },

    35001: { bg: "hoteln", initx: 0, x: 0, dt: 0 },
    35002: { bg: "hoteln", initx: 0, x: -1200, dt: 1 },
    35003: { bg: "hoteln", initx: 0, x: 100, dt: 0.8 },
    35004: { bg: "hoteln", initx: 0, x: 0, dt: 0 },
    35005: { bg: "hoteln", initx: 0, x: -200, dt: 0.6 },
    //酒店大门夜景
    42101: { bg: "hotelgate", initx: 150, x: 0, dt: 0 },
    42102: { bg: "hotelgate", initx: 0, x: -1800, dt: 1 },
    42103: { bg: "hotelgate", initx: 0, x: 1200, dt: 0.8 },
    42104: { bg: "hotelgate", initx: 0, x: 0, dt: 0 },
    42105: { bg: "hotelgate", initx: 0, x: -1000, dt: 0.6 },
    //圣家堂
    42201: { bg: "holy", initx: -800, x: 0, dt: 0 },
    42202: { bg: "holy", initx: 0, x: 1050, dt: 1 },
    42203: { bg: "holy", initx: 0, x: 1000, dt: 0.8 },
    42204: { bg: "holy", initx: 0, x: 0, dt: 0 },
    //酒店大门日景 
    42301: { bg: "hotelgate1", initx: 0, x: 0, dt: 0 },
    42302: { bg: "hotelgate1", initx: 0, x: -1800, dt: 1 },
    42303: { bg: "hotelgate1", initx: 0, x: 1200, dt: 0.8 },
    42304: { bg: "hotelgate1", initx: 0, x: 0, dt: 0 },
    //热气球出发点
    42401: { bg: "Balloon", initx: 0, x: 0, dt: 0 },
    42402: { bg: "Balloon", initx: -100, x: -1800, dt: 1 },
    42403: { bg: "Balloon", initx: 0, x: 1200, dt: 0.8 },
    42404: { bg: "Balloon", initx: 0, x: 0, dt: 0 },
    //热气球上
    42501: { bg: "airtalk", initx: 0, x: 0, dt: 0 },
    42502: { bg: "airtalk", initx: 0, x: -1800, dt: 1 },
    42503: { bg: "airtalk", initx: 0, x: 1200, dt: 0.8 },
    42504: { bg: "airtalk", initx: 0, x: 0, dt: 0 },
    //儿童乐园
    42601: { bg: "childpark", initx: 0, x: 0, dt: 0 },
    42602: { bg: "childpark", initx: 0, x: -1800, dt: 1 },
    42603: { bg: "childpark", initx: 0, x: 1200, dt: 0.8 },
    42604: { bg: "childpark", initx: 0, x: 0, dt: 0 },
    //游乐场 
    42701: { bg: "gate2", initx: 0, x: 0, dt: 0 },
    42702: { bg: "gate2", initx: 0, x: -1800, dt: 1 },
    42703: { bg: "gate2", initx: 0, x: 1200, dt: 0.8 },
    42704: { bg: "gate2", initx: 0, x: 0, dt: 0 },
    //摩天轮下
    42801: { bg: "toy", initx: 0, x: 0, dt: 0 },
    42802: { bg: "toy", initx: 0, x: -1800, dt: 1 },
    42803: { bg: "toy", initx: 0, x: 1200, dt: 0.8 },
    42804: { bg: "toy", initx: 0, x: 0, dt: 0 },
    //摩天轮内
    42901: { bg: "toyin", initx: 0, x: 0, dt: 0 },
    42902: { bg: "toyin", initx: 0, x: -1800, dt: 1 },
    42903: { bg: "toyin", initx: 0, x: 1200, dt: 0.8 },
    42904: { bg: "toyin", initx: 0, x: 0, dt: 0 },
    //夜间山道
    42111: { bg: "road", initx: 50, x: 0, dt: 0 },
    42112: { bg: "road", initx: 0, x: -1800, dt: 1 },
    42113: { bg: "road", initx: 0, x: 1200, dt: 0.8 },
    42114: { bg: "road", initx: 0, x: 0, dt: 0 },
    //山顶教堂
    42121: { bg: "top", initx: 0, x: 0, dt: 0 },
    42122: { bg: "top", initx: 0, x: -1800, dt: 1 },
    42123: { bg: "top", initx: 0, x: 1200, dt: 0.8 },
    42124: { bg: "top", initx: 0, x: 0, dt: 0 },
    //城市日出
    42131: { bg: "city", initx: 0, x: 0, dt: 0 },
    42132: { bg: "city", initx: 0, x: -1200, dt: 1 },
    42133: { bg: "city", initx: 0, x: 800, dt: 0.8 },
    42134: { bg: "city", initx: 0, x: 0, dt: 0 },
    42135: { bg: "city", initx: 0, x: -800, dt: 1 },
    //气球升空
    42141: { bg: "rise", initx: 0, x: 0, dt: 0 },
    42142: { bg: "rise", initx: 0, x: -1800, dt: 1 },
    42143: { bg: "rise", initx: 0, x: 1200, dt: 0.8 },
    42144: { bg: "rise", initx: 0, x: 0, dt: 0 },
    //火车上
    43101: { bg: "train", initx: 0, x: 0, dt: 0 },
    43102: { bg: "train", initx: 0, x: -1800, dt: 1 },
    43103: { bg: "train", initx: 0, x: 1200, dt: 0.8 },
    43104: { bg: "train", initx: 0, x: 0, dt: 0 },
    //锡切斯街道（雨）
    43201: { bg: "rainst", initx: 0, x: 0, dt: 0 },
    43202: { bg: "rainst", initx: 0, x: -1800, dt: 1 },
    43203: { bg: "rainst", initx: 0, x: 1200, dt: 0.8 },
    43204: { bg: "rainst", initx: 0, x: 0, dt: 0 },
    //酒吧门口
    43301: { bg: "barout", initx: 0, x: 0, dt: 0 },
    43302: { bg: "barout", initx: 0, x: -1800, dt: 1 },
    43303: { bg: "barout", initx: 0, x: 1200, dt: 0.8 },
    43304: { bg: "barout", initx: 0, x: 0, dt: 0 },
    //马丁内斯酒吧sitges
    43401: { bg: "bar2", initx: 500, x: 0, dt: 0 },
    43402: { bg: "bar2", initx: 0, x: -1800, dt: 1 },
    43403: { bg: "bar2", initx: 0, x: 1200, dt: 0.8 },
    43404: { bg: "bar2", initx: 0, x: 0, dt: 0 },
    //锡切斯街道
    43501: { bg: "sitges", initx: 100, x: 0, dt: 0 },
    43502: { bg: "sitges", initx: 0, x: -1800, dt: 1 },
    43503: { bg: "sitges", initx: 0, x: 1200, dt: 0.8 },
    43504: { bg: "sitges", initx: 0, x: 0, dt: 0 },
    //码头 
    43601: { bg: "anchor", initx: 0, x: 0, dt: 0 },
    43602: { bg: "anchor", initx: 0, x: -1800, dt: 1 },
    43603: { bg: "anchor", initx: 0, x: 1200, dt: 0.8 },
    43604: { bg: "anchor", initx: 0, x: 0, dt: 0 },
    //沙滩 
    43701: { bg: "beach1", initx: 600, x: 0, dt: 0 },
    43702: { bg: "beach1", initx: 0, x: -1800, dt: 1 },
    43703: { bg: "beach1", initx: 0, x: 1200, dt: 0.8 },
    43704: { bg: "beach1", initx: 0, x: 0, dt: 0 },
    //游艇
    43801: { bg: "boat", initx: 200, x: 0, dt: 0 },
    43802: { bg: "boat", initx: 0, x: -1800, dt: 1 },
    43803: { bg: "boat", initx: 0, x: 1200, dt: 0.8 },
    43804: { bg: "boat", initx: 0, x: 0, dt: 0 },
    //画室
    43901: { bg: "proom", initx: 500, x: 0, dt: 0 },
    43902: { bg: "proom", initx: 0, x: -1800, dt: 1 },
    43903: { bg: "proom", initx: 0, x: 1200, dt: 0.8 },
    43904: { bg: "proom", initx: 0, x: 0, dt: 0 },
    //浴室 
    41101: { bg: "bathroom", initx: 200, x: 0, dt: 0 },
    41102: { bg: "bathroom", initx: 0, x: -1800, dt: 1 },
    41103: { bg: "bathroom", initx: 0, x: 1200, dt: 0.8 },
    41104: { bg: "bathroom", initx: 0, x: 0, dt: 0 },
    //新房间卧室（夜） 
    41201: { bg: "newroomn", initx: 200, x: 0, dt: 0 },
    41202: { bg: "newroomn", initx: 0, x: -1800, dt: 1 },
    41203: { bg: "newroomn", initx: 0, x: 1200, dt: 0.8 },
    41204: { bg: "newroomn", initx: 0, x: 0, dt: 0 },
    //新酒店房间（夜）
    41301: { bg: "newhoteln", initx: 200, x: 0, dt: 0 },
    41302: { bg: "newhoteln", initx: 0, x: -1800, dt: 1 },
    41303: { bg: "newhoteln", initx: 0, x: 1200, dt: 0.8 },
    41304: { bg: "newhoteln", initx: 0, x: 0, dt: 0 },
    //新酒店房间（晨）
    41401: { bg: "newhotelm", initx: 200, x: 0, dt: 0 },
    41402: { bg: "newhotelm", initx: 0, x: -1800, dt: 1 },
    41403: { bg: "newhotelm", initx: 0, x: 1200, dt: 0.8 },
    41404: { bg: "newhotelm", initx: 0, x: 0, dt: 0 },
    //酒店餐厅  
    41501: { bg: "hotelfood", initx: 200, x: 0, dt: 0 },
    41502: { bg: "hotelfood", initx: 0, x: -1800, dt: 1 },
    41503: { bg: "hotelfood", initx: 0, x: 1200, dt: 0.8 },
    41504: { bg: "hotelfood", initx: 0, x: 0, dt: 0 },
    //医院大门 
    41601: { bg: "hospital", initx: 0, x: 0, dt: 0 },
    41602: { bg: "hospital", initx: 0, x: -1800, dt: 1 },
    41603: { bg: "hospital", initx: 0, x: 1200, dt: 0.8 },
    41604: { bg: "hospital", initx: 0, x: 0, dt: 0 },
    //医院回廊
    41701: { bg: "huilang", initx: 0, x: 0, dt: 0 },
    41702: { bg: "huilang", initx: 0, x: -1800, dt: 1 },
    41703: { bg: "huilang", initx: 0, x: 1200, dt: 0.8 },
    41704: { bg: "huilang", initx: 0, x: 0, dt: 0 },
    //薰衣草花田
    41801: { bg: "flower", initx: 200, x: 0, dt: 0 },
    41802: { bg: "flower", initx: 0, x: -1800, dt: 1 },
    41803: { bg: "flower", initx: 0, x: 1200, dt: 0.8 },
    41804: { bg: "flower", initx: 0, x: 0, dt: 0 },
    //海滩饭店
    41901: { bg: "seafood", initx: 200, x: 0, dt: 0 },
    41902: { bg: "seafood", initx: 0, x: -1800, dt: 1 },
    41903: { bg: "seafood", initx: 0, x: 1200, dt: 0.8 },
    41904: { bg: "seafood", initx: 0, x: 0, dt: 0 },
    //夜港 
    41111: { bg: "night", initx: 500, x: 0, dt: 0 },
    41112: { bg: "night", initx: 0, x: -1200, dt: 1 },
    41113: { bg: "night", initx: 0, x: 800, dt: 0.8 },
    41114: { bg: "night", initx: 0, x: 0, dt: 0 },
    //海滩 
    41121: { bg: "beach", initx: 300, x: 0, dt: 0 },
    41122: { bg: "beach", initx: 0, x: -1200, dt: 1 },
    41123: { bg: "beach", initx: 0, x: 1000, dt: 0.8 },
    41124: { bg: "beach", initx: 0, x: 0, dt: 0 },
    //顾廷巍走道
    52101: { bg: "gudoor", initx: 500, x: 0, dt: 0 },
    52102: { bg: "gudoor", initx: 0, x: -1200, dt: 1 },
    52103: { bg: "gudoor", initx: 0, x: 1000, dt: 0.8 },
    52104: { bg: "gudoor", initx: 0, x: 0, dt: 0 },
    //顾廷巍公寓
    52201: { bg: "guhome", initx: 0, x: 0, dt: 0 },
    52202: { bg: "guhome", initx: 0, x: -1200, dt: 1 },
    52203: { bg: "guhome", initx: 0, x: 1000, dt: 0.8 },
    52204: { bg: "guhome", initx: 0, x: 0, dt: 0 },
    //阳台
    52301: { bg: "gutai", initx: 0, x: 0, dt: 0 },
    52302: { bg: "gutai", initx: 0, x: -1200, dt: 1 },
    52303: { bg: "gutai", initx: 0, x: 1000, dt: 0.8 },
    52304: { bg: "gutai", initx: 0, x: 0, dt: 0 },
    //电音酒吧
    52401: { bg: "midibar", initx: 0, x: 0, dt: 0 },
    52402: { bg: "midibar", initx: 0, x: -1200, dt: 1 },
    52403: { bg: "midibar", initx: 0, x: 1000, dt: 0.8 },
    52404: { bg: "midibar", initx: 0, x: 0, dt: 0 },
    //酒吧门口
    52501: { bg: "bardoor", initx: 0, x: 0, dt: 0 },
    52502: { bg: "bardoor", initx: 0, x: -1200, dt: 1 },
    52503: { bg: "bardoor", initx: 0, x: 1000, dt: 0.8 },
    52504: { bg: "bardoor", initx: 0, x: 0, dt: 0 },
    //酒吧后巷
    62101: { bg: "backst", initx: -200, x: 0, dt: 0 },
    62102: { bg: "backst", initx: 0, x: -1200, dt: 1 },
    62103: { bg: "backst", initx: 0, x: 1000, dt: 0.8 },
    62104: { bg: "backst", initx: 0, x: 0, dt: 0 },
    //医院房间
    62201: { bg: "med", initx: 0, x: 0, dt: 0 },
    62202: { bg: "med", initx: 0, x: -1200, dt: 1 },
    62203: { bg: "med", initx: 0, x: 1000, dt: 0.8 },
    62204: { bg: "med", initx: 0, x: 0, dt: 0 },
    //顾卧室
    62301: { bg: "gubed", initx: 0, x: 0, dt: 0 },
    62302: { bg: "gubed", initx: 0, x: -1200, dt: 1 },
    62303: { bg: "gubed", initx: 0, x: 1000, dt: 0.8 },
    62304: { bg: "gubed", initx: 0, x: 0, dt: 0 },
    //喷
    62401: { bg: "pen", initx: 0, x: 0, dt: 0 },
    62402: { bg: "pen", initx: 0, x: -1200, dt: 1 },
    62403: { bg: "pen", initx: 0, x: 1000, dt: 0.8 },
    62404: { bg: "pen", initx: 0, x: 0, dt: 0 },
    //不喷
    62501: { bg: "pennon", initx: 0, x: 0, dt: 0 },
    62502: { bg: "pennon", initx: 0, x: -1200, dt: 1 },
    62503: { bg: "pennon", initx: 0, x: 1000, dt: 0.8 },
    62504: { bg: "pennon", initx: 0, x: 0, dt: 0 },
    //画室卧室（夜）
    53101: { bg: "pbedn", initx: 0, x: 0, dt: 0 },
    53102: { bg: "pbedn", initx: 0, x: -1200, dt: 1 },
    53103: { bg: "pbedn", initx: 0, x: 1000, dt: 0.8 },
    53104: { bg: "pbedn", initx: 0, x: 0, dt: 0 },
    //画室卧室（日）
    53201: { bg: "pbedm", initx: 0, x: 0, dt: 0 },
    53202: { bg: "pbedm", initx: 0, x: -1200, dt: 1 },
    53203: { bg: "pbedm", initx: 0, x: 1000, dt: 0.8 },
    53204: { bg: "pbedm", initx: 0, x: 0, dt: 0 },
    //画室门口老爷车
    53301: { bg: "oldbus", initx: 0, x: 0, dt: 0 },
    53302: { bg: "oldbus", initx: 0, x: -1200, dt: 1 },
    53303: { bg: "oldbus", initx: 0, x: 1000, dt: 0.8 },
    53304: { bg: "oldbus", initx: 0, x: 0, dt: 0 },
    //乡间小路
    53401: { bg: "vroad", initx: 0, x: 0, dt: 0 },
    53402: { bg: "vroad", initx: 0, x: -1200, dt: 1 },
    53403: { bg: "vroad", initx: 0, x: 1000, dt: 0.8 },
    53404: { bg: "vroad", initx: 0, x: 0, dt: 0 },
    //加油站
    53501: { bg: "gas", initx: 0, x: 0, dt: 0 },
    53502: { bg: "gas", initx: 0, x: -1200, dt: 1 },
    53503: { bg: "gas", initx: 0, x: 1000, dt: 0.8 },
    53504: { bg: "gas", initx: 0, x: 0, dt: 0 },
    //艺术堡垒
    53601: { bg: "whouse", initx: 200, x: 0, dt: 0 },
    53602: { bg: "whouse", initx: 0, x: -1200, dt: 1 },
    53603: { bg: "whouse", initx: 0, x: 1000, dt: 0.8 },
    53604: { bg: "whouse", initx: 0, x: 0, dt: 0 },
    //艺术堡垒内部
    53701: { bg: "whousein", initx: 200, x: 0, dt: 0 },
    53702: { bg: "whousein", initx: 0, x: -1200, dt: 1 },
    53703: { bg: "whousein", initx: 0, x: 1000, dt: 0.8 },
    53704: { bg: "whousein", initx: 0, x: 0, dt: 0 },
    //村口墓地
    53801: { bg: "grave", initx: 700, x: 0, dt: 0 },
    53802: { bg: "grave", initx: 0, x: -1200, dt: 1 },
    53803: { bg: "grave", initx: 0, x: 1000, dt: 0.8 },
    53804: { bg: "grave", initx: 0, x: 0, dt: 0 },
    //加泰罗尼亚风光
    53901: { bg: "jiatai", initx: 700, x: 0, dt: 0 },
    53902: { bg: "jiatai", initx: 0, x: -1200, dt: 1 },
    53903: { bg: "jiatai", initx: 0, x: 1000, dt: 0.8 },
    53904: { bg: "jiatai", initx: 0, x: 0, dt: 0 },
    //石堡卧室
    53111: { bg: "wbed", initx: 0, x: 0, dt: 0 },
    53112: { bg: "wbed", initx: 0, x: -1200, dt: 1 },
    53113: { bg: "wbed", initx: 0, x: 1000, dt: 0.8 },
    53114: { bg: "wbed", initx: 0, x: 0, dt: 0 },
    //画展
    53121: { bg: "pshow", initx: 700, x: 0, dt: 0 },
    53122: { bg: "pshow", initx: 0, x: -1200, dt: 1 },
    53123: { bg: "pshow", initx: 0, x: 1000, dt: 0.8 },
    53124: { bg: "pshow", initx: 0, x: 0, dt: 0 },
    //医院走道
    63101: { bg: "med2", initx: 800, x: 0, dt: 0 },
    63102: { bg: "med2", initx: 0, x: -1200, dt: 1 },
    63103: { bg: "med2", initx: 0, x: 1000, dt: 0.8 },
    63104: { bg: "med2", initx: 0, x: 0, dt: 0 },
    //医院房间
    63201: { bg: "med3", initx: 200, x: 0, dt: 0 },
    63202: { bg: "med3", initx: 0, x: -1200, dt: 1 },
    63203: { bg: "med3", initx: 0, x: 1000, dt: 0.8 },
    63204: { bg: "med3", initx: 0, x: 0, dt: 0 },
    //机场
    63301: { bg: "t3", initx: 0, x: 0, dt: 0 },
    63302: { bg: "t3", initx: 0, x: -1200, dt: 1 },
    63303: { bg: "t3", initx: 0, x: 1000, dt: 0.8 },
    63304: { bg: "t3", initx: 0, x: 0, dt: 0 },
    //飞机上
    63401: { bg: "classA", initx: 0, x: 0, dt: 0 },
    63402: { bg: "classA", initx: 0, x: -1200, dt: 1 },
    63403: { bg: "classA", initx: 0, x: 1000, dt: 0.8 },
    63404: { bg: "classA", initx: 0, x: 0, dt: 0 },
    //水底无人背景
    51101: { bg: "underwater", initx: -100, x: 0, dt: 0 },
    51102: { bg: "underwater", initx: 0, x: -1200, dt: 1 },
    51103: { bg: "underwater", initx: 0, x: 1000, dt: 0.8 },
    51104: { bg: "underwater", initx: 0, x: 0, dt: 0 },
    //新卧室（程日）
    51201: { bg: "51201", initx: 0, x: 0, dt: 0 },
    51202: { bg: "51201", initx: 0, x: -1200, dt: 1 },
    51203: { bg: "51201", initx: 0, x: 1000, dt: 0.8 },
    51204: { bg: "51201", initx: 0, x: 0, dt: 0 },
    //加泰罗尼亚广场
    51301: { bg: "51301", initx: 0, x: 0, dt: 0 },
    51302: { bg: "51301", initx: 0, x: -1200, dt: 1 },
    51303: { bg: "51301", initx: 0, x: 1000, dt: 0.8 },
    51304: { bg: "51301", initx: 0, x: 0, dt: 0 },
    //小火车
    51401: { bg: "51401", initx: 0, x: 0, dt: 0 },
    51402: { bg: "51401", initx: 0, x: -1200, dt: 1 },
    51403: { bg: "51401", initx: 0, x: 1000, dt: 0.8 },
    51404: { bg: "51401", initx: 0, x: 0, dt: 0 },
    //波盖利亚市场
    51501: { bg: "51501", initx: 0, x: 0, dt: 0 },
    51502: { bg: "51501", initx: 0, x: -1200, dt: 1 },
    51503: { bg: "51501", initx: 0, x: 1000, dt: 0.8 },
    51504: { bg: "51501", initx: 0, x: 0, dt: 0 },
    //波盖利亚市场内部
    51601: { bg: "51601", initx: 0, x: 0, dt: 0 },
    51602: { bg: "51601", initx: 0, x: -1200, dt: 1 },
    51603: { bg: "51601", initx: 0, x: 1000, dt: 0.8 },
    51604: { bg: "51601", initx: 0, x: 0, dt: 0 },
    //新酒店房间（程日）
    51701: { bg: "51701", initx: 0, x: 0, dt: 0 },
    51702: { bg: "51701", initx: 0, x: -1200, dt: 1 },
    51703: { bg: "51701", initx: 0, x: 1000, dt: 0.8 },
    51704: { bg: "51701", initx: 0, x: 0, dt: 0 },
    //波盖利亚市场外
    51801: { bg: "51801", initx: 200, x: 0, dt: 0 },
    51802: { bg: "51801", initx: 0, x: -1200, dt: 1 },
    51803: { bg: "51801", initx: 0, x: 1000, dt: 0.8 },
    51804: { bg: "51801", initx: 0, x: 0, dt: 0 },
    //三号酒店房间（傍晚）
    61101: { bg: "61101", initx: 0, x: 0, dt: 0 },
    61102: { bg: "61101", initx: 0, x: -1200, dt: 1 },
    61103: { bg: "61101", initx: 0, x: 1000, dt: 0.8 },
    61104: { bg: "61101", initx: 0, x: 0, dt: 0 },
    //三号酒店房间（清晨）
    61201: { bg: "61201", initx: 0, x: 0, dt: 0 },
    61202: { bg: "61201", initx: 0, x: -1200, dt: 1 },
    61203: { bg: "61201", initx: 0, x: 1000, dt: 0.8 },
    61204: { bg: "61201", initx: 0, x: 0, dt: 0 },
    //三号酒店房间（清晨）
    61301: { bg: "smoke", initx: 0, x: 0, dt: 0 },
    61302: { bg: "smoke", initx: 0, x: -1200, dt: 1 },
    61303: { bg: "smoke", initx: 0, x: 1000, dt: 0.8 },
    61304: { bg: "smoke", initx: 0, x: 0, dt: 0 },







}

export class CfgScene {
    public scenes: any = sceneObj;
}