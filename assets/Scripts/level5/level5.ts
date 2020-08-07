import UIManager from "../UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class level5 extends cc.Component {

    @property(UIManager)
    UIM: UIManager;

    @property([cc.Node])
    stars: cc.Node[] = [];

    HaveEvaluation: boolean = false;

    onLoad() {
        this.UIM = cc.find("Canvas/bg").getComponent(UIManager);
    }

    start() {

    }

    GiveAHighPraise() {
        this.stars.forEach(element => {
            element.children[0].active = true;
        });
        this.HaveEvaluation = true;
    }

    next() {
        this.UIM.bgClickPlay();

        if (this.HaveEvaluation) {
            this.UIM.level++;
            this.UIM.GP.node.destroyAllChildren();

            var a = cc.instantiate(this.UIM.GP.PB[this.UIM.level - 1]);
            a.parent = this.UIM.GP.node;
        } else {
            this.UIM.GP.wrong();
            this.schedule(() => {
                this.UIM.GP.allClose();
            }, 0, 0, 1)
        }
    }

    // update (dt) {}
}
