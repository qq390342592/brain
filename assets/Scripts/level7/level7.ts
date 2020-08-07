import UIManager from "../UIManager";
import RealBats from "./RealBats";
import OffTheBat from "./OffTheBat";
import GravityTool from "../GravityTool";

const { ccclass, property } = cc._decorator;

@ccclass
export default class level7 extends GravityTool {

    // @property(cc.Label)
    // scoreDisplay: cc.Label;

    interval: number = 0;

    isOver: boolean = false;

    @property(RealBats)
    realBats: RealBats;

    @property([OffTheBat])
    offTheBats: OffTheBat[] = [];

    start() {

    }

    onDeviceMotionEvent(event) {
        this.nowGX = event.acc.x.toFixed(2);
        this.nowGY = event.acc.y.toFixed(2);
        this.nowGZ = event.acc.z.toFixed(2);

        if (this._isGetScore3(this.nowGX, this.nowGY)) {
            if (this.nowGY > 0.45) {
                this.score += 1;
                // this.scoreDisplay.string = this.score.toString();
            }
        }
    }

    update(dt) {
        if (!this.isOver) {
            this.interval += dt;
            var t = 0.1;
            if (this.interval >= t) {
                this.interval -= t;
                console.log("x" + this.nowGX, "y" + this.nowGY, "z" + this.nowGZ);
                if (this.score == 4) {
                    this.isOver = true;
                    //TODO
                    this.realBats.isOver();
                    this.offTheBats[0].isOver();
                    this.offTheBats[1].isOver();
                }
            }
        }
    }
}
