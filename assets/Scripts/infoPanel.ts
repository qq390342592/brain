import UIManager from "./UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class infoPanel extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    @property(UIManager)
    UIM: UIManager;

    @property(cc.Label)
    PMLabel: cc.Label

    onLoad() {
        this.UIM = cc.find("Canvas/bg").getComponent(UIManager);
    }

    onEnable() {

        var str: string = this.UIM.json[this.UIM.level]["PromptMessage"];

        this.PMLabel.string = str;

        this.node.children[0].children[0].getComponent(cc.Animation).play();

    }

    start() {

    }

    close() {
        this.UIM.bgClickPlay();

        this.node.active = false;
    }

    // update (dt) {}
}
