const { ccclass, property } = cc._decorator;

@ccclass
export default class gamePanel extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    @property([cc.Prefab])
    PB: cc.Prefab[] = [];

    onLoad() {
        this.PB.forEach(element => {
            var a = cc.instantiate(element);
            a.parent = this.node;
            a.active = false;
        });
    }

    start() {
        
    }

    // update (dt) {}
}
