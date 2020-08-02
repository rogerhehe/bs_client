/** ID,章节ID,分支ID,名称,介绍,皮肤,物品ID,价格 */

let clothObj = {
    1: { chId: 0, nxId: 0, name: "红色魅影", des: "人群之中，你是最吸引视线的一位", skin: "t1", goodsId: 0, price: 0 },
    2: { chId: 0, nxId: 0, name: "夏夜轻语", des: "犹如夏日池中的荷花清新可人", skin: "t2", goodsId: 100001, price: 15 },
    3: { chId: 0, nxId: 0, name: "Sunshine Cat", des: "随意而不失格调。走在大街上，你就是阳光", skin: "t3", goodsId: 100002, price: 15 },
    4: { chId: 0, nxId: 0, name: "星空旅人", des: "是流浪的精灵，是恣意的星光。你的美无可形容，穿上它似乎大家都更青睐你", skin: "t4", goodsId: 100003, price: 35 },
    5: { chId: 42, nxId: 0, name: "Metal Rose", des: "A kiss from a rose on the grey ", skin: "t5", goodsId: 100004, price: 25 }
}

export class CfgCloth {
    public cloths: any = clothObj;
}