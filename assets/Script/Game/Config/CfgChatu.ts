/** ID,插图名称 */
/** 第一位item类型ID,第二位章节ID,其余为插图ID */

let chatuObj = {
    51001: { name: "chatu1_1", scale: 1, x: 0, y: 0, act: "chatu_move" },//顾孟对打
    51002: { name: "chatu2_1", scale: 1, x: 0, y: 0, act: "chatu_scale" },//阿尔冯斯穆夏
    51003: { name: "chatu_3_1", scale: 1, x: 0, y: 0, act: "chatu_scale" },//礼物盒
    51004: { name: "chatu_3_2", scale: 1, x: 0, y: 0, act: "chatu_scale" },//香水瓶
    51005: { name: "chatu_5_1", scale: 1, x: 0, y: 0, act: "chatu_scale" },//乔安娜礼物盒
    51006: { name: "chatu_6_1", scale: 1, x: 0, y: 0, act: "chatu_scale" },//程昱川信
    51007: { name: "soul1", scale: 1, x: 0, y: 0, act: "chatu_scale" },//灵魂1 
    51008: { name: "soul2", scale: 1, x: 0, y: 0, act: "chatu_scale" },//灵魂2 
    51009: { name: "CC", scale: 1, x: 0, y: 0, act: "chatu_scale" },//程昱川照片
    51010: { name: "fan", scale: 1, x: 0, y: 0, act: "chatu_scale" },//海鲜饭
    51011: { name: "zhifeiji", scale: 1, x: 0, y: 0, act: "chatu_scale" },//纸飞机

}

export class CfgChatu {
    public chatus: any = chatuObj;
}