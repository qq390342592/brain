import UIManager from "./UIManager";
import buttom from "./buttom";

const { ccclass, property } = cc._decorator;

@ccclass
export default class finalPanel extends cc.Component {

    @property(UIManager)
    UIM: UIManager;

    @property(cc.Label)
    miaoshu: cc.Label;

    // onLoad () {}

    start() {

    }

    onEnable() {
        var str: string = this.UIM.json[this.UIM.level]["Customs"];
        this.miaoshu.string = str;
    }

    next() {
        this.UIM.bgClickPlay();
        //TODO
        this.UIM.FP.node.active = false;
        this.UIM.GP.node.active = true;
        this.UIM.buttom.active = true;

        this.UIM.buttom.getComponent(buttom).getComponent(buttom).fastNotUseWisdom();
    }

    share() {
        this.UIM.bgClickPlay();
        //TODO
    }

    movie() {
        this.UIM.bgClickPlay();
        //TODO
    }

    // update (dt) {}
}
