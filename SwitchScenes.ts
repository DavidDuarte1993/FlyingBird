const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

     onLoad () {
         cc.director.preloadScene("GameScene",function(){
             console.log("the scene has been loaded");
         });
         this.node.on("mousedown",function(){
             cc.director.loadScene("GameScene");
         });
     }

    start () {

    }
}
