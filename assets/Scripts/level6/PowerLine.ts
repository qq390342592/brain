import UIManager from "../UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PowerLine extends cc.Component {

    @property(UIManager)
    UIM: UIManager;

    sA: number = 0;
    sB: number = 0;

    onLoad() {

        this.UIM = cc.find("Canvas/bg").getComponent(UIManager);

        this.node.on(cc.Node.EventType.TOUCH_START, (e) => {

            // var a = e.getLocation();
            // this.sA = a.x;
            // this.sB = a.y;
            // console.log(a.x + "--" + a.y);
        })

        this.node.on(cc.Node.EventType.TOUCH_MOVE, (e) => {

            var b = e.getDelta();
            // this.node.x += b.x;
            var buttom = -1100
            if (this.node.y >= buttom && this.node.y <= -900) {
                this.node.y += b.y;
                if (this.node.y < buttom) {
                    // this.node.y = buttom;

                    this.UIM.GP.right();
                    this.schedule(() => {
                        this.UIM.FP.node.active = true;
                        this.UIM.GP.node.active = false;
                        this.UIM.buttom.active = false;
                        this.UIM.GP.allClose();
                    }, 0, 0, 1)

                }
                if (this.node.y > -900) {
                    this.node.y = -900;
                }
            }
            // this.sA += b.x;
            // this.sB += b.x;
            // console.log(b.x + "--" + b.y);
        })
    }

    start() {

    }

    // update (dt) {}
}
