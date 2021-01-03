/** ID,彩蛋标记,大章节,章节阶段,特殊分支 */
/** 第一、二位item类型ID,第三位章节ID,其余为彩蛋ID */

let eggObj = {
    111001: { egg: 1, chapter: 1, stage: 0, branch: 0 },
    112001: { egg: 1, chapter: 1, stage: 0, branch: 0 },
    113001: { egg: 1, chapter: 1, stage: 0, branch: 0 },
    114001: { egg: 1, chapter: 4, stage: 1, branch: 0 },
    114002: { egg: 1, chapter: 4, stage: 2, branch: 0 },
    114003: { egg: 1, chapter: 4, stage: 3, branch: 0 },
    115001: { egg: 1, chapter: 5, stage: 1, branch: 0 },
}

export class CfgEgg {
    public eggs: any = eggObj;
}