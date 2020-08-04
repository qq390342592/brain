import UIManager from "./UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MainPanel extends cc.Component {

    // @property(UIManager)
    UIM: UIManager;

    onLoad () {
        this.UIM = cc.find("Canvas/bg").getComponent(UIManager);
    }

    start() {

    }

    startButton() {
        this.UIM.bgClickPlay();
        this.UIM.MP.node.active = false;
        // this.UIM.title.active = false;
        this.UIM.SP.node.active = true;
    }



    // update (dt) {}
}
