import SelectPanel from "./SelectPanel";
import UIManager from "./UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class page extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    @property(cc.SpriteFrame)
    aSp: cc.SpriteFrame;

    @property(cc.SpriteFrame)
    bSp: cc.SpriteFrame;

    @property(Number)
    AllTheLevels: number = 3;

    @property(UIManager)
    UIM: UIManager;

    n: number = 0;

    onLoad() {

    }

    onEnable() {

        //遍历值
        this.n = 0;

        //页数
        var x = this.node.children;

        for (var i = 0; i < x.length; i++) {
            for (var j = 0; j < x[i].children.length; j++) {
                this.n++;
                if (this.n > this.AllTheLevels) {
                    x[i].children[j].children[0].getComponent(cc.Sprite).spriteFrame = this.bSp;
                    x[i].children[j].getComponent(cc.Button).enabled = false;
                } else {
                    x[i].children[j].children[0].getComponent(cc.Sprite).spriteFrame = this.aSp;
                    x[i].children[j].getComponent(cc.Button).enabled = true;
                }
            }
        }

    }

    //向后翻
    back() {
        this.UIM.bgClickPlay();
        var a = this.node.children;
        for (var i = 0; i < a.length; i++) {
            //如果该页面是激活状态
            if (a[i].active == true) {
                if (i != 0) {
                    a[i].active = false;
                    a[i - 1].active = true;
                }
                break;
            }
        }

    }

    //向前翻
    next() {
        this.UIM.bgClickPlay();
        var a = this.node.children;
        for (var i = 0; i < a.length; i++) {
            if (a[i].active == true) {
                if (i != a.length - 1) {
                    a[i].active = false;
                    a[i + 1].active = true;
                }
                break;
            }
        }
    }

    //进入关卡
    EnterTheGate(event, customEventData) {
        if (customEventData == 1) {
            this.UIM.GdP.node.active = true;
        }
        //按钮音
        var UIM = this.node.parent.getComponent(SelectPanel).UIM;
        UIM.bgClickPlay();
        //切换
        UIM.SP.node.active = false;
        UIM.GP.node.active = true;
        UIM.buttom.active = true;
        //
        // UIM.GP.node.children.forEach(element => {
        //     element.active = false;
        // });
        //
        // UIM.GP.node.children[customEventData - 1].active = true;

        var a = cc.instantiate(UIM.GP.PB[customEventData - 1]);
        a.parent = UIM.GP.node;

        UIM.level = customEventData;
        console.log("customEventData");
    }

    // update (dt) {}
}
