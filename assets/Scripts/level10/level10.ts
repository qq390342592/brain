import UIManager from "../UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class level10 extends cc.Component {

    @property(UIManager)
    UIM: UIManager;

    @property(cc.EditBox)
    editBox: cc.EditBox;

    onLoad () {
        this.UIM = cc.find("Canvas/bg").getComponent(UIManager);
    }

    start() {

    }

    queding() {
        if (this.editBox.string == "14") {
            this.UIM.GP.right();
            this.schedule(() => {
                this.UIM.FP.node.active = true;
                this.UIM.GP.node.active = false;
                this.UIM.buttom.active = false;
                this.UIM.GP.allClose();
            }, 0, 0, 1)
        } else {
            this.UIM.GP.wrong();
            this.schedule(() => {
                this.UIM.GP.allClose();
            }, 0, 0, 1)
        }
    }

    // update (dt) {}
}
