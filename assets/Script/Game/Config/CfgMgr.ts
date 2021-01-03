import { CfgCloth } from "./CfgCloth";
import { CfgScene } from "./CfgScene";
import { CfgRole } from "./CfgRole";
import { CfgChatu } from "./CfgChatu";
import { CfgSoliloquy } from "./CfgSoliloquy";
import { CfgRoleInfo } from "./CfgRoleInfo";
import { CfgSelect } from "./CfgSelect";
import { CfgCG } from "./CfgCG";
import { CfgLove } from "./CfgLove";
import { CfgMessage } from "./CfgMessage";
import { CfgEgg } from "./CfgEgg";
import { CfgPlace } from "./CfgPlace";


import { CfgChapter1 } from "./CfgChapter1";
import { CfgChapter2 } from "./CfgChapter2";
import { CfgChapter3 } from "./CfgChapter3";
import { CfgChapter4_1 } from "./CfgChapter4_1";
import { CfgChapter4_2 } from "./CfgChapter4_2";
import { CfgChapter4_3 } from "./CfgChapter4_3";
import { CfgChapter5_1 } from "./CfgChapter5_1";
import { CfgChapter5_2 } from "./CfgChapter5_2";
import { CfgChapter5_3 } from "./CfgChapter5_3";
import { CfgChapter6_1 } from "./CfgChapter6_1";
import { CfgChapter6_2 } from "./CfgChapter6_2";
import { CfgChapter6_3 } from "./CfgChapter6_3";


/** 
 * @name CfgMgr.ts
 * @description 配表文件
 * @author Auto by python, do not edit.
 */

export default class CfgMgr {

    private static _instance: CfgMgr;

    private constructor() { }

    public static getInstance(): CfgMgr {
        if (!CfgMgr._instance) {
            CfgMgr._instance = new CfgMgr();
        }
        return CfgMgr._instance;
    }

    public static Chapter = {
        "1": new CfgChapter1(),
        "2": new CfgChapter2(),
        "3": new CfgChapter3(),
        "4_1": new CfgChapter4_1(),
        "4_2": new CfgChapter4_2(),
        "4_3": new CfgChapter4_3(),
        "5_1": new CfgChapter5_1(),
        "5_2": new CfgChapter5_2(),
        "5_3": new CfgChapter5_3(),
        "6_1": new CfgChapter6_1(),
        "6_2": new CfgChapter6_2(),
        "6_3": new CfgChapter6_3(),
    }

    public static CfgCloth: CfgCloth = new CfgCloth();
    public static CfgScene: CfgScene = new CfgScene();
    public static CfgRole: CfgRole = new CfgRole();
    public static CfgChatu: CfgChatu = new CfgChatu();
    public static CfgSoliloquy: CfgSoliloquy = new CfgSoliloquy();
    public static CfgRoleInfo: CfgRoleInfo = new CfgRoleInfo();
    public static CfgSelect: CfgSelect = new CfgSelect();
    public static CfgCG: CfgCG = new CfgCG();
    public static CfgLove: CfgLove = new CfgLove();
    public static CfgMessage: CfgMessage = new CfgMessage();
    public static CfgEgg: CfgEgg = new CfgEgg();
    public static CfgPlace: CfgPlace = new CfgPlace();
}