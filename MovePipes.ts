const {ccclass, property} = cc._decorator;
var numbersToUse = [70,140,210,280];
var random = 0;
@ccclass
export default class NewClass extends cc.Component {

    // onLoad () {}

    start () {

    }

    update (dt) {
        this.node.setPosition(this.node.position.x-450*dt,this.node.position.y);
        random = Math.floor(Math.random()*numbersToUse.length);
        if(this.node.position.x<-(cc.winSize.width)){
            this.node.setPosition((cc.winSize.width+this.node.getContentSize().width),numbersToUse[random]);
        }
    }
}
