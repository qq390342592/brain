import UIManager from "./UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SelectPanel extends cc.Component {

    @property(cc.Node)
    UIMnode: cc.Node;

    @property(UIManager)
    UIM: UIManager;

    onLoad() {
        this.UIM = this.UIMnode.getComponent(UIManager);
    }

    start() {

    }

    return() {
        this.node.active = false;
        this.UIM.MP.node.active = true;
    }

    // update (dt) {}
}
