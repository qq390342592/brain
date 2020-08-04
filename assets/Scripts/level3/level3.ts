import UIManager from "../UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class level3 extends cc.Component {

    @property(UIManager)
    UIM: UIManager;

    onLoad() {
        this.UIM = cc.find("Canvas/bg").getComponent(UIManager);
    }

    start() {

    }

    right() {
        this.UIM.GP.right();
        this.schedule(() => {
            this.UIM.FP.node.active = true;
            this.UIM.GP.node.active = false;
            this.UIM.buttom.active = false;
            this.UIM.GP.allClose();
        }, 0, 0, 1)
    }

    wrong() {
        this.UIM.GP.wrong();
        this.schedule(() => {
            this.UIM.GP.allClose();
        }, 0, 0, 1)
    }



    // update (dt) {}
}
