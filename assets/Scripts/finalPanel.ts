import UIManager from "./UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class finalPanel extends cc.Component {

    @property(UIManager)
    UIM: UIManager;

    // onLoad () {}

    start() {

    }

    next() {
        this.UIM.bgClickPlay();

    }

    share() {
        this.UIM.bgClickPlay();

    }

    movie() {
        this.UIM.bgClickPlay();

    }

    // update (dt) {}
}
