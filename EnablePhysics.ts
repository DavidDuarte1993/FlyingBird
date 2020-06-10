const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    onBeginContact(contact,selfCollider,otherCollider){
        cc.director.loadScene("GameScene - 001");
    }
    JumpBird(event){
        switch(event.keyCode){
            case cc.macro.KEY.space:
                this.node.getComponent(cc.RigidBody).applyForceToCenter(new cc.Vec2(0,90000),true);
            break;
        }
    }
     onLoad () {
         var manager = cc.director.getPhysicsManager();
         manager.enabled = true;

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.JumpBird,this);

         cc.director.preloadScene("GameScene - 001",function(){
             console.log("GameScene - 001 has been preloaded");
         });
     }

    start () {

    }

}

