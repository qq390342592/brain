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
        this.UIM.bgClickPlay();

        if (this.UseWisdom(25)) {
            this.UIM.GdP.node.active = false;
            this.UIM.IfP.node.active = true;
        }
    }

    //使用智慧
    UseWisdom(n) {
        this.UIM.bgClickPlay();

        if (this.UIM.wisdom - n >= 0) {
            this.UIM.wisdom -= n;
            this.UIM.wisdomLabel.string = this.UIM.wisdom.toString();
            return true;
        }
        return false;
    }

    //礼物
    giftBag() {
        this.UIM.bgClickPlay();
        if (CC_WECHATGAME) {
            var id = 'QMT+QCX4RZa/ax+tSTJrfw==' // 通过 MP 系统审核的图片编号
            var url = 'https://mmocgame.qpic.cn/wechatgame/jD1blmnv6m09mpQiazGcRib6IeNfX6hbZsUbXKFe7vklLJdzGkjAnFDD2JSbvsarmL/0' // 通过 MP 系统审核的图片地址
            wx.shareAppMessage({
                title: '颠覆思维，等你',
                imageUrlId: id,
                imageUrl: url
            })
        }

    }

    //看视频
    video() {
        this.UIM.bgClickPlay();
    }

    //前进
    fastForward() {
        this.UIM.bgClickPlay();

        if (this.UseWisdom(50)) {

            this.UIM.level++;
            this.UIM.GP.node.destroyAllChildren();

            var a = cc.instantiate(this.UIM.GP.PB[this.UIM.level - 1]);
            a.parent = this.UIM.GP.node;
        }
    }

    fastNotUseWisdom() {
        this.UIM.bgClickPlay();

        this.UIM.level++;
        this.UIM.GP.node.destroyAllChildren();

        var a = cc.instantiate(this.UIM.GP.PB[this.UIM.level - 1]);
        a.parent = this.UIM.GP.node;
    }

    //返回
    return() {
        this.UIM.bgClickPlay();

        this.UIM.MP.node.active = true;
        this.UIM.GP.node.active = false;
        this.UIM.GP.node.destroyAllChildren();
        this.node.active = false;
    }


    // update (dt) {}
}
