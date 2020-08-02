import GameMgr from "../../../GameMgr";
import CfgMgr from "../../cfg/CfgMgr";

/**
 * @name ClothDescItem.ts
 * @description 服装描述
 * @author Created by jun on 2020.1.12
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class ClothDescItem extends cc.Component {

    @property(cc.Label)
    txtPrice: cc.Label = null

    @property(cc.Label)
    txtName: cc.Label = null

    @property(cc.Label)
    txtDesc: cc.Label = null

    onLoad() {

    }

    showDesc(clothId: number) {
        if (this.node.active) {
            this.hideDesc()
        } else {
            let clothObj = CfgMgr.CfgCloth.cloths[clothId]
            if (clothObj.free > 0) {
                // 收费
            }
            this.txtPrice.string = clothObj.price.toString();
            this.txtName.string = clothObj.name;
            this.txtDesc.string = clothObj.des;

            this.node.active = true;
            cc.tween(this.node)
                .to(0.05, { scale: 1.1 })
                .to(0.05, { scale: 1.0 })
                .start()
        }
    }

    hideDesc() {
        if (this.node.active) {
            cc.tween(this.node)
                .to(0.05, { scale: 0 })
                .call(() => {
                    this.node.active = false;
                })
                .start()
        }
    }
}