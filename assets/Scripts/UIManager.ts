import gamePanel from "./gamePanel";
import MainPanel from "./MainPanel";
import SelectPanel from "./SelectPanel";
import settingPanel from "./settingPanel";
import guidePanel from "./guidePanel";
import infoPanel from "./infoPanel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIManager extends cc.Component {

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

    @property(cc.AudioClip)
    bgAudioSource: cc.AudioClip;

    @property(cc.AudioClip)
    bgClick: cc.AudioClip;

    @property(cc.AudioClip)
    bgcheer: cc.AudioClip;

    @property(cc.AudioClip)
    bgcorrect: cc.AudioClip;

    onLoad() {
        this.json = this.json1.json;
        cc.audioEngine.playMusic(this.bgAudioSource, true);
    }

    start() {
        this.wisdomLabel.string = this.wisdom.toString();
    }

    settingButton() {
        this.STP.node.active = true;
        this.MP.node.active = false;
    }

    bgcheerPlay() {
        cc.audioEngine.playEffect(this.bgcheer, false);
    }

    bgClickPlay() {
        cc.audioEngine.playEffect(this.bgClick, false);
    }

    bgcorrectPlay() {
        cc.audioEngine.playEffect(this.bgcorrect, false);
    }

    // update (dt) {}
}
