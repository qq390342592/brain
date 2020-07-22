import UIManager from "./UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class awardPanel extends cc.Component {

    @property(UIManager)
    UIM: UIManager;

    // onLoad () {}

    start() {

    }

    close() {
        this.UIM.bgClickPlay();

    }

    get() {
        this.UIM.bgClickPlay();

    }

    double() {
        this.UIM.bgClickPlay();

    }



    // update (dt) {}
}
