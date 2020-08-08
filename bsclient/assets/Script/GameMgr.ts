import LoginCtr from "./Game/Module/Login/LoginCtr";
import PopupCtr from "./Game/Module/Popup/PopupCtr";
import PlayerCtr from "./Game/Module/Player/PlayerCtr";
import MainCtr from "./Game/Module/Main/MainCtr";
import ChapterCtr from "./Game/Module/Chapter/ChapterCtr";
import StoryCtr from "./Game/Module/Story/StoryCtr";
import CallCtr from "./Game/Module/Call/CallCtr";
import CGCtr from "./Game/Module/Cg/CGCtr";
import EndCtr from "./Game/Module/End/EndCtr";
import MaskCtr from "./Game/Module/Mask/MaskCtr";
import PlaceInfoCtr from "./Game/Module/PlaceInfo/PlaceInfoCtr";
import PlaybackCtr from "./Game/Module/PlayBack/PlaybackCtr";
import ReplacementCtr from "./Game/Module/Cloth/ClothCtr";
import RoleBranchCtr from "./Game/Module/RoleBranch/RoleBranchCtr";
import RoleInfoCtr from "./Game/Module/RoleInfo/RoleInfoCtr";
import RoleTalkCtr from "./Game/Module/RoleTalk/RoleTalkCtr";
import SelectCtr from "./Game/Module/Select/SelectCtr";
import SoliloquyCtr from "./Game/Module/Soliloquy/SoliloquyCtr";
import AsideCtr from "./Game/Module/Aside/AsideCtr";

/**
 * @name GameMgr.ts
 * @description 实例化单例
 * @author Created by jun on 2018.4.7
 */

export default class GameMgr {
    private static _instance: GameMgr;

    private constructor() { }

    public static getInstance(): GameMgr {
        if (!GameMgr._instance) {
            GameMgr._instance = new GameMgr();
        }
        return GameMgr._instance;
    }

    /** 游戏初始化完成 */
    public static GAME_INIT_FIN: boolean = false;

    //==================controller init==================//
    public static popupCtr: PopupCtr = PopupCtr.getInstance();
    public static playerCtr: PlayerCtr = PlayerCtr.getInstance();
    public static loginCtr: LoginCtr = LoginCtr.getInstance();
    public static mainCtr: MainCtr = MainCtr.getInstance();
    public static chapterCtr: ChapterCtr = ChapterCtr.getInstance();
    public static storyCtr: StoryCtr = StoryCtr.getInstance();
    public static callCtr: CallCtr = CallCtr.getInstance();
    public static cgCtr: CGCtr = CGCtr.getInstance();
    public static endCtr: EndCtr = EndCtr.getInstance();
    public static maskCtr: MaskCtr = MaskCtr.getInstance();
    public static placeInfoCtr: PlaceInfoCtr = PlaceInfoCtr.getInstance();
    public static playbackCtr: PlaybackCtr = PlaybackCtr.getInstance();
    public static replacementCtr: ReplacementCtr = ReplacementCtr.getInstance();
    public static roleBranchCtr: RoleBranchCtr = RoleBranchCtr.getInstance();
    public static roleInfoCtr: RoleInfoCtr = RoleInfoCtr.getInstance();
    public static roleTalkCtr: RoleTalkCtr = RoleTalkCtr.getInstance();
    public static selectCtr: SelectCtr = SelectCtr.getInstance();
    public static soliloquyCtr: SoliloquyCtr = SoliloquyCtr.getInstance();
    public static asideCtr: AsideCtr = AsideCtr.getInstance();

    public init() {

    }
}