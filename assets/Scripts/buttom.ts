import UIManager from "./UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class buttom extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    @property(UIManager)
    UIM: UIManager;

    onLoad() {
        this.UIM = cc.find("Canvas/bg").getComponent(UIManager);
    }

    start() {

    }

    //寻找
    search() {
        if (this.UseWisdom(25)) {
            this.UIM.GdP.node.active = false;
            this.UIM.IfP.node.active = true;
        }
    }

    //使用智慧
    UseWisdom(n) {
        if (this.UIM.wisdom - n >= 0) {
            this.UIM.wisdom -= n;
            this.UIM.wisdomLabel.string = this.UIM.wisdom.toString();
            return true;
        }
        return false;
    }

    //礼物
    giftBag() {

    }

    //看视频
    video() {

    }

    //前进
    fastForward() {
        if (this.UseWisdom(50)) {
            var a = this.UIM.GP.node.children;
            for (var i = 0; i < a.length; i++) {
                if (a[i].active == true) {
                    a[i].active = false;
                    a[i + 1].active = true;
                    this.UIM.level++;
                    break;
                }
            }
        }
    }

    //返回
    return() {
        this.UIM.MP.node.active = true;
        this.UIM.GP.node.active = false;
        this.node.active = false;
    }


    // update (dt) {}
}
