const { ccclass, property } = cc._decorator;

@ccclass
export default class gamePanel extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    @property([cc.Prefab])
    PB: cc.Prefab[] = [];

    @property(cc.Node)
    CheckTheNumber: cc.Node;

    @property(cc.Node)
    WrongNumber: cc.Node;

    onLoad() {
        // this.PB.forEach(element => {
        //     var a = cc.instantiate(element);
        //     a.parent = this.node;
        //     a.active = false;
        // });
    }

    start() {

    }

    right() {
        this.CheckTheNumber.active = true;
        this.WrongNumber.active = false;
        this.CheckTheNumber.getComponent(cc.AudioSource).play();
        this.CheckTheNumber.getComponent(cc.Animation).play();
    }

    wrong() {
        this.CheckTheNumber.active = false;
        this.WrongNumber.active = true;
        this.WrongNumber.getComponent(cc.AudioSource).play();
        this.WrongNumber.getComponent(cc.Animation).play();
    }

    allClose() {
        this.CheckTheNumber.active = false;
        this.WrongNumber.active = false;
    }



    // update (dt) {}
}
