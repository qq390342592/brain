import UIManager from "./UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GravityTool extends cc.Component {

    @property(UIManager)
    UIM: UIManager;

    nowGX: number = 0;
    nowGY: number = 0;
    nowGZ: number = 0;

    score: number = 0;

    x_prev_tag: boolean = true;

    y_prev_tag: boolean = true;

    x_prev_val: any;

    y_prev_val: any;

    onLoad() {
        this.UIM = cc.find("Canvas/bg").getComponent(UIManager);
        cc.systemEvent.setAccelerometerEnabled(true);
        cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
    }


    // onEnable() {
    //     if (CC_WECHATGAME) {
    //         wx.startGyroscope({
    //             interval: "game",
    //             success: function () {
    //                 console.log("陀螺仪开始调用成功");
    //                 wx.onGyroscopeChange((res) => {
    //                     // console.log(res);
    //                     this.x += res.x;
    //                     this.y += res.y;
    //                     this.z += res.z;

    //                 })
    //             }.bind(this),
    //             fail: function () {
    //                 console.log("陀螺仪开始调用失败");
    //             }.bind(this),
    //             complete: function () {
    //                 console.log("陀螺仪开始调用完成");
    //             }.bind(this)
    //         })

    //     }
    // }

    // onDisable() {
    //     if (CC_WECHATGAME) {
    //         wx.offGyroscopeChange(() => {
    //             console.log("取消监听");
    //         })
    //         wx.stopGyroscope({
    //             success: function () {
    //                 console.log("陀螺仪停止调用成功");
    //             }.bind(this),
    //             fail: function () {
    //                 console.log("陀螺仪停止调用失败");
    //             }.bind(this),
    //             complete: function () {
    //                 console.log("陀螺仪停止调用完成");
    //             }.bind(this)
    //         })
    //     }
    // }

    onDeviceMotionEvent(event) {
        this.nowGX = event.acc.x.toFixed(2);
        this.nowGY = event.acc.y.toFixed(2);
        this.nowGZ = event.acc.z.toFixed(2);

        if (this._isGetScore3(this.nowGX, this.nowGY)) {
            this.addScore();
            // this.scoreDisplay.string = this.score.toString();
        }
    }

    addScore() {
        this.score += 1;
    }

    _isGetScore3(nowGX, nowGY) {
        var stand_x = 0.25;
        var stand_y = 0.25;
        if (this.x_prev_tag) {  //前一次为 正 
            stand_x = -stand_x;

            if (nowGX <= stand_x) {
                var cur_x_tag = false;
            } else {
                var cur_x_tag = true;
            }
        } else {    //前一次为负
            if (nowGX >= stand_x) {
                var cur_x_tag = true;
            } else {
                var cur_x_tag = false;
            }
        }

        if (this.y_prev_tag) {  //前一次为 正 
            stand_y = -stand_y;

            if (nowGY <= stand_y) {
                var cur_y_tag = false;
            } else {
                var cur_y_tag = true;
            }
        } else {    //前一次为负
            if (nowGY >= stand_y) {
                var cur_y_tag = true;
            } else {
                var cur_y_tag = false;
            }
        }

        var x_is = false;
        var y_is = false;
        if ((this.x_prev_tag == true && cur_x_tag == false) ||
            (this.x_prev_tag == false && cur_x_tag == true)
        ) {

            //console.log('x prev:cur==',this.x_prev_val, '##',nowGX);
            this.x_prev_val = nowGX;
            this.x_prev_tag = cur_x_tag;
            x_is = true;
        }

        if ((this.y_prev_tag == true && cur_y_tag == false) ||
            (this.y_prev_tag == false && cur_y_tag == true)
        ) {
            //console.log('y prev:cur==', this.y_prev_val, '##',nowGY)
            this.y_prev_val = nowGY;
            this.y_prev_tag = cur_y_tag;
            y_is = true;
        }

        return x_is || y_is;

    }
}
