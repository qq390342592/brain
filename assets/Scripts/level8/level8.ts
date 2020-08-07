import UIManager from "../UIManager";
import GravityTool from "../GravityTool";

const { ccclass, property } = cc._decorator;

@ccclass
export default class level8 extends GravityTool {

    @property(cc.EditBox)
    editBox: cc.EditBox;

    appleNumber: number = 5;

    @property([cc.Node])
    apples: cc.Node[] = [];

    // update (dt) {}

    queding() {
        if (this.editBox.string == "8") {
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

    addScore() {
        //掉苹果
        if (this.appleNumber > 0) {
            this.appleNumber -= 1;
            this.apples[this.appleNumber].active = true;
            cc.tween(this.apples[this.appleNumber])
                .by(0.2, { position: { value: cc.v2(0, -300), easing: 'sineIn' } })
                .start()
        }
    }
}
