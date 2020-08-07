import UIManager from "../UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class level4 extends cc.Component {

    @property(UIManager)
    UIM: UIManager;

    x: number = 0;
    y: number = 0;
    z: number = 0;

    interval: number = 0;

    onLoad() {
        this.UIM = cc.find("Canvas/bg").getComponent(UIManager);

        // open Accelerometer
        // cc.systemEvent.setAccelerometerEnabled(true);
        // cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
    }

    // onDestroy() {
    //     cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
    // }

    // onDeviceMotionEvent(event) {
    //     cc.log(event.acc.x + "   " + event.acc.y);
    //     this.xLabel.string = event.acc.x;
    //     this.yLabel.string = event.acc.y;
    // }

    onEnable() {
        if (CC_WECHATGAME) {
            wx.startGyroscope({
                interval: "game",
                success: function () {
                    console.log("陀螺仪开始调用成功");
                    wx.onGyroscopeChange((res) => {
                        // console.log(res);
                        this.x += res.x;
                        this.y += res.y;
                        this.z += res.z;

                    })
                }.bind(this),
                fail: function () {
                    console.log("陀螺仪开始调用失败");
                }.bind(this),
                complete: function () {
                    console.log("陀螺仪开始调用完成");
                }.bind(this)
            })

        }
    }

    onDisable() {
        if (CC_WECHATGAME) {
            wx.offGyroscopeChange(() => {
                console.log("取消监听");
            })
            wx.stopGyroscope({
                success: function () {
                    console.log("陀螺仪停止调用成功");
                }.bind(this),
                fail: function () {
                    console.log("陀螺仪停止调用失败");
                }.bind(this),
                complete: function () {
                    console.log("陀螺仪停止调用完成");
                }.bind(this)
            })
        }
    }

    update(dt) {
        this.interval += dt;
        var t = 0.1;
        if (this.interval >= t) {
            this.interval -= t;
            console.log("x" + this.x);
        }
    }

    submit() {
        console.log("submit-1");
        if (this.x < -15 || !CC_WECHATGAME) {
            console.log("submit-2");
            this.UIM.GP.right();
            this.schedule(() => {
                this.UIM.FP.node.active = true;
                this.UIM.GP.node.active = false;
                this.UIM.buttom.active = false;
                this.UIM.GP.allClose();
            }, 0, 0, 1)
        } else {
            this.UIM.GP.wrong();
            this.schedule(() => {
                this.UIM.GP.allClose();
            }, 0, 0, 1)
        }
    }
}
