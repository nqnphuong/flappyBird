import { utils } from "pixi.js";
import { CollderBird } from "./colliderBird";

export class ColliderMng extends utils.EventEmitter {
    constructor(tag1, tag2){
        super();
        this.tag1 = tag1;
        this.tag2 = tag2;
        console.log(tag1, tag2);
        this.checkCollider();
    }

    checkCollider(){
        this.tag1.forEach(elementTag1 => {
            this.tag2.forEach(elementTag2 => {
                if (elementTag1.detectCollisions(elementTag2)){
                    return True;
                }
            });
        });
    }


}