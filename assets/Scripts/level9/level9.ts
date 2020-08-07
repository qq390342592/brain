import UIManager from "../UIManager";
import GravityTool from "../GravityTool";

const { ccclass, property } = cc._decorator;

@ccclass
export default class level9 extends GravityTool {

    @property(cc.Node)
    primeval: cc.Node;

    @property(cc.Node)
    fail: cc.Node;

    @property(cc.Node)
    succeed: cc.Node;

    @property(cc.Node)
    pressNode: cc.Node;

    press: any;

    // update (dt) {}

    start() {
        this.pressNode.on(cc.Node.EventType.TOUCH_START, () => {
            this.press = true;
        })
        this.pressNode.on(cc.Node.EventType.TOUCH_CANCEL, () => {
            this.press = false;
        })
        this.pressNode.on(cc.Node.EventType.TOUCH_END, () => {
            this.press = false;
        })
    }

    addScore() {
        if (this.press) {
            this.primeval.active = false;
            this.fail.active = false;
            this.succeed.active = true;
            this.UIM.GP.right();
            this.schedule(() => {
                this.UIM.FP.node.active = true;
                this.UIM.GP.node.active = false;
                this.UIM.buttom.active = false;
                this.UIM.GP.allClose();
            }, 0, 0, 1)
        }
        // } else {
        //     this.primeval.active = false;
        //     this.succeed.active = false;
        //     this.fail.active = true;
        // }
    }
}
