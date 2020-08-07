import UIManager from "../UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RealBats extends cc.Component {

    @property(cc.Sprite)
    sp: cc.Sprite;

    iO: boolean = false;

    @property(cc.SpriteFrame)
    combine: cc.SpriteFrame;

    @property(cc.SpriteFrame)
    open: cc.SpriteFrame;

    @property(UIManager)
    UIM: UIManager;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.UIM = cc.find("Canvas/bg").getComponent(UIManager);
    }

    start() {

    }

    isOver() {
        this.sp.spriteFrame = this.open;
        this.iO = true;
    }

    button() {
        //如果把手机倒过来了
        if (this.iO == true) {
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
