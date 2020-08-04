import hole from "./hole";
import level1 from "./level1";

const { ccclass, property } = cc._decorator;

@ccclass
export default class rabbit extends cc.Component {

    @property(hole)
    hole: hole;

    @property(level1)
    level1: level1;

    @property(cc.Sprite)
    rabbitSp: cc.Sprite;

    @property(cc.SpriteFrame)
    rabbitA: cc.SpriteFrame;

    @property(cc.SpriteFrame)
    rabbitB: cc.SpriteFrame;

    onLoad() {
        //按钮按下的时候
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            //如果有兔子
            if (this.hole.haveRabbit) {
                //TODO
                //如果其他3个洞都堵上了
                var allstem = true;
                this.hole.holes.forEach(element => {
                    if (element.down == false) {
                        //如果其他3个洞没都堵上
                        allstem = false;
                    }
                });
                if (allstem) {
                    //替换兔子被打图片
                    //TODO
                    this.rabbitSp.spriteFrame = this.rabbitB;
                    //通关
                    this.CustomsClearance()
                } else {
                    //从没有被堵住的口出来
                    //TODO
                    this.decline();
                }
                // console.log('Mouse down');
            }
        }.bind(this), this);
    }

    //通关
    CustomsClearance() {
        this.hole.level1.UIM.GP.right();
        //计时器
        this.schedule(() => {
            this.hole.level1.UIM.FP.node.active = true;
            this.hole.level1.UIM.GP.node.active = false;
            this.hole.level1.UIM.buttom.active = false;
            this.hole.level1.UIM.GP.allClose();

        }, 0, 0, 1)
    }

    start() {
        // console.log(this.hole.level1.UIM.FP.node.active);
        // this.hole.level1.UIM.FP.node.active = true;

    }

    //上升
    up() {
        // // 停止一个动作
        // node.stopAction(action);
        // // 停止所有动作
        // node.stopAllActions();
        this.hole.haveRabbit = true;
        cc.tween(this.node)
            .to(0.2, { position: cc.v2(10, 150) })
            .call(() => {
                // cc.log('This is a callback')
            })
            .start()
    }

    //下降
    decline() {
        this.hole.haveRabbit = false;
        var a = Math.floor(Math.random() * 3);
        if (a == 3) {
            a = 2;
        }
        this.hole.holes[a].rabbit.up();

        cc.tween(this.node)
            .to(0.2, { position: cc.v2(10, -150) })
            .call(() => {
                // cc.log('This is a callback')
            })
            .start()
    }

    // update (dt) {}
}
