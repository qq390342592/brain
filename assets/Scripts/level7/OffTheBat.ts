import UIManager from "../UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class OffTheBat extends cc.Component {

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
        cc.tween(this.node)
            .by(1, { position: { value: cc.v2(0, 1200), easing: 'sineIn' } })
            .start()
    }

    button() {
        this.UIM.GP.wrong();
        this.schedule(() => {
            this.UIM.GP.allClose();
        }, 0, 0, 1)
    }

    // update (dt) {}
}
