import hole from "./hole";
import level from "../level/level";
import UIManager from "../UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class level1 extends level {

    UIM: UIManager;
    onLoad () {
        this.UIM = cc.find("Canvas/bg").getComponent(UIManager);
    }

    start() {
        // this.UIM.FP.node.active = true;
    }

    // update (dt) {}
}
