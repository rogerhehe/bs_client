import GameMgr from "../../../GameMgr";

/**
 * @name RoleBranchView.ts
 * @description 故事线选择界面
 * @author Created by jun on 2020.4.11
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class RoleBranchView extends cc.Component {

    /** 独白背景 */
    @property(cc.Sprite)
    sprBg: cc.Sprite = null;

    /** 旁白背景 */
    @property(cc.Sprite)
    sprAsideBg: cc.Sprite = null;

    /** 独白 */
    @property(cc.Label)
    txtAside: cc.Label = null;

    /** 程 */
    @property(cc.Button)
    btnCheng: cc.Button = null;
    /** 程头像 */
    @property(cc.Sprite)
    sprHeadCheng: cc.Sprite = null;
    /** 程名背景 */
    @property(cc.Sprite)
    sprNameBgCheng: cc.Sprite = null;
    /** 程名 */
    @property(cc.Sprite)
    sprNameCheng: cc.Sprite = null;

    /** 顾 */
    @property(cc.Button)
    btnGu: cc.Button = null;
    /** 顾头像 */
    @property(cc.Sprite)
    sprHeadGu: cc.Sprite = null;
    /** 顾名背景 */
    @property(cc.Sprite)
    sprNameBgGu: cc.Sprite = null;
    /** 顾名 */
    @property(cc.Sprite)
    sprNameGu: cc.Sprite = null;

    /** 博 */
    @property(cc.Button)
    btnBo: cc.Button = null;
    /** 博头像 */
    @property(cc.Sprite)
    sprHeadBo: cc.Sprite = null;
    /** 博名背景 */
    @property(cc.Sprite)
    sprNameBgBo: cc.Sprite = null;
    /** 博名 */
    @property(cc.Sprite)
    sprNameBo: cc.Sprite = null;

    @property(cc.Node)
    ndBgHolder: cc.Node = null;
    @property(cc.Node)
    ndNameBgHolder: cc.Node = null;
    @property(cc.Node)
    ndNameHolder: cc.Node = null;
    @property(cc.Node)
    ndHeadHolder: cc.Node = null;

    /** 返回按钮 */
    @property(cc.Button)
    btnReturn: cc.Button = null;

    _dist: number = 400;
    _end: boolean = false;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickNext.bind(this))
    }

    start() {
        this.sprAsideBg.node.active = false;
        this.sprAsideBg.node.x += this._dist;

        this.btnCheng.node.active = false;
        this.btnCheng.node.x -= this._dist;
        this.sprHeadCheng.node.active = false;
        this.sprHeadCheng.node.x -= this._dist;
        this.sprNameCheng.node.active = false;
        this.sprNameCheng.node.x -= this._dist;

        this.btnBo.node.active = false;
        this.btnBo.node.x += this._dist;
        this.sprHeadBo.node.active = false;
        this.sprHeadBo.node.x += this._dist;
        this.sprNameBo.node.active = false;
        this.sprNameBo.node.x += this._dist;

        this.btnGu.node.active = false;
        this.btnGu.node.x -= this._dist;
        this.sprHeadGu.node.active = false;
        this.sprHeadGu.node.x -= this._dist;
        this.sprNameGu.node.active = false;
        this.sprNameGu.node.x -= this._dist;
        this.btnReturn.node.active = false;
        this._end = false;

        if (GameMgr.roleBranchCtr.fromChapterView) {
            this.sprBg.node.opacity = 230;
            this._showSelect();
            this.scheduleOnce(() => {
                if (!this._end) {
                    this.btnReturn.node.active = true;
                }
            }, 1.5);

        } else {
            this.scheduleOnce(this._showSelect, 1.5);
        }
    }

    onDestroy() {
        GameMgr.roleBranchCtr.fromChapterView = false;
        this.unscheduleAllCallbacks();
    }

    onClickReturn(event) {
        event.stopPropagation();
        GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);
        GameMgr.uiMgr.closeUI(GameMgr.cfg.uiRoleBranchPanel);
    }

    _showSelect() {
        this.sprAsideBg.node.active = true;

        this.btnCheng.node.active = true;
        this.sprHeadCheng.node.active = true;
        this.sprNameCheng.node.active = true;

        this.btnBo.node.active = true;
        this.sprHeadBo.node.active = true;
        this.sprNameBo.node.active = true;

        this.btnGu.node.active = true;
        this.sprHeadGu.node.active = true;
        this.sprNameGu.node.active = true;

        cc.tween(this.sprAsideBg.node)
            .to(0.2, { position: cc.v2(this.sprAsideBg.node.x - this._dist, this.sprAsideBg.node.y) }, { easing: 'sineIn' })
            .start()

        cc.tween(this.btnCheng.node)
            .to(0.3, { position: cc.v2(this.btnCheng.node.x + this._dist, this.btnCheng.node.y) }, { easing: 'sineIn' })
            .start()
        cc.tween(this.sprHeadCheng.node)
            .to(0.3, { position: cc.v2(this.sprHeadCheng.node.x + this._dist, this.sprHeadCheng.node.y) }, { easing: 'sineIn' })
            .start()
        cc.tween(this.sprNameCheng.node)
            .to(0.3, { position: cc.v2(this.sprNameCheng.node.x + this._dist, this.sprNameCheng.node.y) }, { easing: 'sineIn' })
            .start()

        cc.tween(this.btnBo.node)
            .to(0.2, { position: cc.v2(this.btnBo.node.x - this._dist, this.btnBo.node.y) }, { easing: 'sineIn' })
            .start()
        cc.tween(this.sprHeadBo.node)
            .to(0.2, { position: cc.v2(this.sprHeadBo.node.x - this._dist, this.sprHeadBo.node.y) }, { easing: 'sineIn' })
            .start()
        cc.tween(this.sprNameBo.node)
            .to(0.2, { position: cc.v2(this.sprNameBo.node.x - this._dist, this.sprNameBo.node.y) }, { easing: 'sineIn' })
            .start()

        cc.tween(this.btnGu.node)
            .to(0.3, { position: cc.v2(this.btnGu.node.x + this._dist, this.btnGu.node.y) }, { easing: 'sineIn' })
            .start()
        cc.tween(this.sprHeadGu.node)
            .to(0.3, { position: cc.v2(this.sprHeadGu.node.x + this._dist, this.sprHeadGu.node.y) }, { easing: 'sineIn' })
            .start()
        cc.tween(this.sprNameGu.node)
            .to(0.3, { position: cc.v2(this.sprNameGu.node.x + this._dist, this.sprNameGu.node.y) }, { easing: 'sineIn' })
            .start()
    }

    onClickNext(event: any) {
        event.stopPropagation();
    }

    onClickCheng(event, data) {
        this._interactableAll();
        event.stopPropagation();
        GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);
        if (this._end) { return; }

        let callSelectRole = () => {
            this.sprAsideBg.node.active = false;

            this.btnGu.node.active = false;
            this.sprHeadGu.node.active = false;
            this.sprNameBgGu.node.active = false;
            this.sprNameGu.node.active = false;

            this.btnBo.node.active = false;
            this.sprHeadBo.node.active = false;
            this.sprNameBgBo.node.active = false;
            this.sprNameBo.node.active = false;

            this.btnCheng.interactable = false;
            this.sprNameBgCheng.node.active = true;
            this._selectRole(this.btnCheng.node, this.sprHeadCheng.node, this.sprNameBgCheng.node, this.sprNameCheng.node, 300630)
        }

        if (GameMgr.roleBranchCtr.fromChapterView) {
            this._showResetSure(1, callSelectRole);
        } else {
            callSelectRole();
        }
    }

    onClickGu(event, data) {
        this._interactableAll();
        event.stopPropagation();
        GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);
        if (this._end) { return; }

        let callSelectRole = () => {
            this.sprAsideBg.node.active = false;

            this.btnBo.node.active = false;
            this.sprHeadBo.node.active = false;
            this.sprNameBgBo.node.active = false;
            this.sprNameBo.node.active = false;

            this.btnCheng.node.active = false;
            this.sprHeadCheng.node.active = false;
            this.sprNameBgCheng.node.active = false;
            this.sprNameCheng.node.active = false;

            this.btnGu.interactable = false;
            this.sprNameBgGu.node.active = true;
            this._selectRole(this.btnGu.node, this.sprHeadGu.node, this.sprNameBgGu.node, this.sprNameGu.node, 300637)
        }

        if (GameMgr.roleBranchCtr.fromChapterView) {
            this._showResetSure(2, callSelectRole);
        } else {
            callSelectRole();
        }
    }

    onClickBo(event, data) {
        this._interactableAll();
        event.stopPropagation();
        GameMgr.audioMgr.playSound(GameMgr.cfg.btnAudioUrl);
        if (this._end) { return; }

        let callSelectRole = () => {
            this.sprAsideBg.node.active = false;

            this.btnGu.node.active = false;
            this.sprHeadGu.node.active = false;
            this.sprNameBgGu.node.active = false;
            this.sprNameGu.node.active = false;

            this.btnCheng.node.active = false;
            this.sprHeadCheng.node.active = false;
            this.sprNameBgCheng.node.active = false;
            this.sprNameCheng.node.active = false;

            
            this.sprNameBgBo.node.active = true;
            this._selectRole(this.btnBo.node, this.sprHeadBo.node, this.sprNameBgBo.node, this.sprNameBo.node, 300644)
        }

        if (GameMgr.roleBranchCtr.fromChapterView) {
            this._showResetSure(3, callSelectRole);
        } else {
            callSelectRole();
        }
    }

    _selectRole(bg: cc.Node, head: cc.Node, nameBg: cc.Node, name: cc.Node, branchId: number) {
        this._end = true;
        this.btnReturn.node.active = false;

        cc.tween(bg)
            .to(1, { position: cc.v2(this.ndBgHolder.x, this.ndBgHolder.y) }, { easing: 'sineIn' })
            .start()

        cc.tween(head)
            .to(1, { position: cc.v2(this.ndHeadHolder.x, this.ndHeadHolder.y) }, { easing: 'sineIn' })
            .start()

        cc.tween(nameBg)
            .to(1, { position: cc.v2(this.ndNameBgHolder.x, this.ndNameBgHolder.y) }, { easing: 'sineIn' })
            .start()

        cc.tween(name)
            .to(1, { position: cc.v2(this.ndNameHolder.x, this.ndNameHolder.y), scale: this.ndNameHolder.scale }, { easing: 'sineIn' })
            .start()

        this.scheduleOnce(() => {
            if (GameMgr.roleBranchCtr.fromChapterView) {
                // 重新开始故事
                GameMgr.uiMgr.closeUI(GameMgr.cfg.uiChapterPanel);
                GameMgr.storyCtr.doStartStory(GameMgr.playerCtr.playerModel.currOperId);
            } else {
                // 切换分支
                GameMgr.storyCtr.doStory({ "select": true, "branch": branchId });
            }
            GameMgr.uiMgr.closeUI(GameMgr.cfg.uiRoleBranchPanel);
        }, 2.2)
    }

    _showResetSure(stageId: number, callSelectRole: any) {
        let popupParam: IPopupParam = {
            txtContent: "切换角色会导致\n从第四章开始的剧情重置，可以吗?",
            txtSure: "可以",
            txtCancel: "不要",
            callbackSure: () => { // 确定切换
                GameMgr.playerCtr.playerModel.resetRole(stageId);
                callSelectRole();
            },
            callbackCancle: () => { // 取消切换
                GameMgr.uiMgr.closeUI(GameMgr.cfg.uiRoleBranchPanel);
            }
        }
        GameMgr.popupCtr.openPopupBtn(popupParam);
    }

    _interactableAll() {
        this.btnGu.interactable = false;
        this.btnCheng.interactable = false;
        this.btnBo.interactable = false;
        this.btnReturn.interactable = false;
    }
}