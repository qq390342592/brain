import UIManager from "./UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class guidePanel extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    @property(cc.Node)
    hand: cc.Node;

    @property(UIManager)
    UIM: UIManager

    onLoad() {
        this.UIM = cc.find("Canvas/bg").getComponent(UIManager);
    }

    start() {

    }

    // update (dt) {}
}
