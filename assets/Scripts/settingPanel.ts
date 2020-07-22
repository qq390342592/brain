import UIManager from "./UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class settingPanel extends cc.Component {

    @property(UIManager)
    UIM: UIManager;

    @property(Boolean)
    isSOUND: Boolean = true;

    @property(Boolean)
    isMUSIC: Boolean = true;

    @property(Boolean)
    isinform: Boolean = true;

    onLoad() {
        this.isSOUND = true;
        this.isMUSIC = true;
        this.isinform = true;
        this.UIM = cc.find("Canvas/bg").getComponent(UIManager);
    }

    start() {

    }

    close() {
        this.UIM.bgClickPlay();
        this.node.active = false;
        this.UIM.MP.node.active = true;
    }

    //对号
    leftSelect(event, customEvent) {
        this.UIM.bgClickPlay();
        var node: cc.Node = event.target;
        console.log(node);
        switch (customEvent) {
            case "1":
                node.children[0].getComponent(cc.Sprite).enabled = false;
                node.getParent().children[1].children[0].getComponent(cc.Sprite).enabled = false;
                this.isMUSIC = true;
                //
                cc.audioEngine.resume(this.UIM.current);
                break;
            case "2":
                node.children[0].getComponent(cc.Sprite).enabled = false;
                node.getParent().children[1].children[0].getComponent(cc.Sprite).enabled = false;
                this.isSOUND = true;
                break;
            case "3":
                node.children[0].getComponent(cc.Sprite).enabled = false;
                node.getParent().children[1].children[0].getComponent(cc.Sprite).enabled = false;
                this.isinform = true;
                break;
            case "4":
                break;
        }
    }

    //错号
    rightSelect(event, customEvent) {
        this.UIM.bgClickPlay();
        var node: cc.Node = event.target;

        switch (customEvent) {
            case "1":
                node.children[0].getComponent(cc.Sprite).enabled = true;
                node.getParent().children[0].children[0].getComponent(cc.Sprite).enabled = true;
                this.isMUSIC = false;
                //背景音暂停
                cc.audioEngine.pause(this.UIM.current);
                break;
            case "2":
                node.children[0].getComponent(cc.Sprite).enabled = true;
                node.getParent().children[0].children[0].getComponent(cc.Sprite).enabled = true;
                this.isSOUND = false;
                break;
            case "3":
                node.children[0].getComponent(cc.Sprite).enabled = true;
                node.getParent().children[0].children[0].getComponent(cc.Sprite).enabled = true;
                this.isinform = false;

                break;
            case "4":
                node.children[0].getComponent(cc.Sprite).enabled = true;
                node.getParent().children[0].children[0].getComponent(cc.Sprite).enabled = true;

                break;
        }
    }

    support() {
        this.UIM.bgClickPlay();

    }

    share() {
        this.UIM.bgClickPlay();

    }

    photograph() {
        this.UIM.bgClickPlay();

    }

    facebook() {
        this.UIM.bgClickPlay();

    }
    // update (dt) {}
}
