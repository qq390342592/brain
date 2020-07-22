import gamePanel from "./gamePanel";
import MainPanel from "./MainPanel";
import SelectPanel from "./SelectPanel";
import settingPanel from "./settingPanel";
import guidePanel from "./guidePanel";
import infoPanel from "./infoPanel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIManager extends cc.Component {

    @property(cc.Node)
    bg: cc.Node;

    @property(gamePanel)
    GP: gamePanel;
    @property(MainPanel)
    MP: MainPanel;
    @property(SelectPanel)
    SP: SelectPanel;
    @property(settingPanel)
    STP: settingPanel;
    @property(guidePanel)
    GdP: guidePanel;
    @property(infoPanel)
    IfP: infoPanel;

    @property(cc.Node)
    title: cc.Node;

    @property(cc.Node)
    buttom: cc.Node;

    @property(cc.JsonAsset)
    json1: cc.JsonAsset;

    json: any;

    //当前关卡
    level: number = 1;

    //智慧
    wisdom: number = 100;

    @property(cc.Label)
    wisdomLabel: cc.Label;

    //背景音
    @property(cc.AudioClip)
    bgAudioSource: cc.AudioClip;

    //按钮点击音
    @property(cc.AudioClip)
    bgClick: cc.AudioClip;

    @property(cc.AudioClip)
    bgcheer: cc.AudioClip;

    @property(cc.AudioClip)
    bgcorrect: cc.AudioClip;

    current: any;

    onLoad() {

        this.json = this.json1.json;
        this.bgMusicPlay();

        //屏幕比例
        var sizeA: cc.Size = cc.director.getWinSize();
        var a = sizeA.height / sizeA.width;
        console.log(sizeA);
        //背景比例
        var sizeB = this.bg.getContentSize();
        var c = sizeB.height / sizeB.width;
        console.log(sizeB);

        if (a < c) {//屏幕比例大于背景比例
            this.bg.setScale(c / a, 1);
            console.log(c / a);
        } else {
            this.bg.setScale(1, c / a);
            console.log(c / a);
        }

        if (CC_WECHATGAME) {
            wx.onShareAppMessage(function () {
                var id = 'QMT+QCX4RZa/ax+tSTJrfw==' // 通过 MP 系统审核的图片编号
                var url = 'https://mmocgame.qpic.cn/wechatgame/jD1blmnv6m09mpQiazGcRib6IeNfX6hbZsUbXKFe7vklLJdzGkjAnFDD2JSbvsarmL/0' // 通过 MP 系统审核的图片地址
                // 用户点击了“转发”按钮
                return {
                    title: '颠覆思维，等你',
                    imageUrlId: id,
                    imageUrl: url
                }
            })
        }


    }

    start() {
        this.wisdomLabel.string = this.wisdom.toString();
    }

    settingButton() {
        this.STP.node.active = true;
        this.MP.node.active = false;
        this.bgClickPlay();
    }

    bgMusicPlay() {
        this.current = cc.audioEngine.playMusic(this.bgAudioSource, true);
    }

    bgcheerPlay() {
        cc.audioEngine.playEffect(this.bgcheer, false);
    }

    bgClickPlay() {
        if (this.STP.isSOUND) {
            cc.audioEngine.playEffect(this.bgClick, false);
        }
    }

    bgcorrectPlay() {
        cc.audioEngine.playEffect(this.bgcorrect, false);
    }

    // update (dt) {}
}
