/** ID,插图名称 */
/** 第一位item类型ID,第二位章节ID,其余为地点ID */

let placeObj = {
    121001: { name: "浦东国际机场", time: "清晨" },
    122001: { name: "巴塞罗那酒店", time: "清晨" },
    123001: { name: "香水博物馆", time: "午间" },
    124101: { name: "巴塞罗那酒店", time: "晚间" },
    124201: { name: "巴塞罗那酒店", time: "晚间" },
    124301: { name: "巴塞罗那酒店", time: "清晨" },
    125101: { name: "新酒店房间", time: "清晨" },
    125201: { name: "巴塞罗那酒店", time: "午间" },
    125301: { name: "画室卧室", time: "晚间" },
    126101: { name: "民宿酒店", time: "傍晚" },
    126201: { name: "酒吧门口", time: "晚间" },
    126301: { name: "画展", time: "上午" },
    125202: { name: "酒店房间", time: "早上的时候" },//顾线回忆进
    125203: { name: "酒店房间", time: "现在" },//顾线回忆出

}

export class CfgPlace {
    public places: any = placeObj;
}