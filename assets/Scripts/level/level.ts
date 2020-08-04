import UIManager from "../UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class level extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    UIM: UIManager

    onLoad () {
        // this.UIM = cc.find("Canvas/bg").getComponent(UIManager);
    }

    start () {

    }

    // update (dt) {}
}
