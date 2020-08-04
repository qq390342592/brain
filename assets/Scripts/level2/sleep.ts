import UIManager from "../UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class sleep extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    door: boolean = false;

    time: number = 0;

    @property(Number)
    timeCount: number = 4;

    @property(UIManager)
    UIM: UIManager;

    onLoad() {
        this.UIM = cc.find("Canvas/bg").getComponent(UIManager);
        this.node.on(cc.Node.EventType.TOUCH_START, () => {
            this.door = true;
        })
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, () => {
            this.door = false;
        })
        this.node.on(cc.Node.EventType.TOUCH_END, () => {
            this.door = false;
        })
    }

    start() {

    }

    update(dt) {
        if (this.door == true) {
            this.time += dt;
            if (this.time > this.timeCount) {
                this.node.active = false;
                this.CustomsClearance();
            }
        } else {
            this.time = 0;
        }
    }

    //通关
    CustomsClearance() {
        this.UIM.GP.right();
        //计时器
        this.schedule(() => {
            this.UIM.FP.node.active = true;
            this.UIM.GP.node.active = false;
            this.UIM.buttom.active = false;
            this.UIM.GP.allClose();

        }, 0, 0, 1)
    }
}
