import rabbit from "./rabbit";
import level1 from "./level1";

const { ccclass, property } = cc._decorator;

@ccclass
export default class hole extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    // @property(level1)
    // level1MG: level1;
    @property(level1)
    level1: level1;

    @property([hole])
    holes: hole[] = [];

    //是否有兔子
    @property(Boolean)
    haveRabbit: Boolean = false;

    //兔子
    @property(rabbit)
    rabbit: rabbit;

    //是否按着
    @property(Boolean)
    down: Boolean = false;

    onLoad() {

        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            //如果没有兔子
            if (this.haveRabbit == false) {
                this.down = true;
            }
            console.log("TOUCH_START");
        }.bind(this), this);

        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            this.dowm = false;
            console.log("TOUCH_END");
        }.bind(this), this)

        // this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
        //     this.dowm = false;
        //     console.log("TOUCH_MOVE");
        // }.bind(this), this)

        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            this.dowm = false;
            console.log("TOUCH_CANCEL");
        }.bind(this), this)

    }

    start() {

    }

    // update (dt) {}
}
