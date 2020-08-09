import BaseView from "../../../Core/BaseView"
import GameMgr from "../../../GameMgr";
import UIConfig from "../../../UIConfig"
import Utils from "../../Utils/Utils"


/**
 * @name LaunchView.ts
 * @description 游戏启动场景
 * @author Created by jun on 2018.4.7
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class LaunchView extends BaseView {

    /** 背景 */
    @property(cc.Sprite)
    sprBg: cc.Sprite = null;

    /** 加载进度条 */
    @property(cc.ProgressBar)
    progressBarLoading: cc.ProgressBar = null;

    /** 进度条位置 */
    @property(sp.Skeleton)
    spPercent: sp.Skeleton = null;

    /** 进度百分比 */
    @property(cc.Label)
    txtPercent: cc.Label = null;

    /** 进度描述 */
    @property(cc.Label)
    txtTips: cc.Label = null;

    /** 进度描述 */
    _progress: number = 0;

    _bgUrl = "texture/bg1";

    _tips: string[] = [
        "采取不同的回应，男士们对你的好感也不一样,要注意哦",
        "星空裙会让人额外对你产生好感哦",
        "如果你和某位男士情投意合，就有机会走到最美好的结局",
        "选择不同，你和男主们的情感发展也会走向不同道路",
        "有些额外选项会带来更多的浪漫情缘",
        "巴塞罗那的景色适合与他同行，考虑一下选谁呢？",
        "美食，逛街，海边，你会选择与谁同行呢？",
        "恋爱是需要耗费时间的，但我们的读取过程不耗费流量",
        "程昱川是一个风趣幽默的人，他喜欢独立自主的你",
        "博文朗是一位多才多情的艺术家，他喜欢你的靓丽风情",
        "顾廷巍是一位活力四射的帅小伙，他喜欢可爱主动的你",
        "越了解彼此，你们的情感依赖就会愈加深厚，但有时走到最后还需要一点运气",
    ]

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, (event) => {
            event.stopPropagation();
        });
        
        // 加载随机背景
        let bgID: number = Utils.random(1, 6);
        this._bgUrl = "texture/bg" + bgID.toString()
        if (bgID > 1) {
            this._resMgr.loadAsset(UIConfig.UILoadingPanel.AB, this._bgUrl, cc.SpriteFrame, (spriteFrame) => {
                this.sprBg.spriteFrame = <cc.SpriteFrame>spriteFrame;
            })
        }
    }

    start() {
        console.log("=========start()=========" + this.name);
        this.txtTips.string = this._tips[Utils.random(0, this._tips.length - 1)];
        this._progress = 0;
    }

    onDestroy() {
        this._resMgr.removeAsset(UIConfig.UILoadingPanel.AB, this._bgUrl, cc.SpriteFrame)
    }

    update() {
        if (this._progress < 1) {
            this._progress += 0.002;
            this.progressBarLoading.progress = this._progress;
            this.txtPercent.string = Math.floor(this._progress * 100) + "%";
            this.spPercent.node.x = -this.progressBarLoading.totalLength * 0.5 + this.progressBarLoading.totalLength * this.progressBarLoading.progress;

            // 开始游戏
            if (!GameMgr.GAME_INIT_FIN && Math.floor(this._progress) >= 1) {
                this.txtTips.string = "正在初始化，努力渲染中";
                this.progressBarLoading.node.active = false;
                this.spPercent.node.active = false;
                GameMgr.GAME_INIT_FIN = true;
            }
        }
    }
}