/** ID,名字,年龄,职业,血型,星座,资源名 */
/** 第一位item类型ID，第二位章节ID，其余为人物ID */

let roleInfoObj = {
    31001: { name: "顾廷巍", age: "21岁", job: "留学生", blood: "B型", star: "双子座", res: "gu" },
    31002: { name: "程昱川", age: "29岁", job: "创业者", blood: "AB型", star: "摩羯座", res: "cheng" },
    31003: { name: "博文朗", age: "31岁", job: "艺术家", blood: "B型", star: "天秤座", res: "bo" },
}

export class CfgRoleInfo {
    public roleInfos: any = roleInfoObj;
}