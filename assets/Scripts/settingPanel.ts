import UIManager from "./UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class settingPanel extends cc.Component {

    @property(UIManager)
    UIM: UIManager;

    onLoad() {
        this.UIM = cc.find("Canvas/bg").getComponent(UIManager);
    }

    start() {

    }

    close() {
        this.node.active = false;
        this.UIM.MP.node.active = true;
    }



    // update (dt) {}
}
