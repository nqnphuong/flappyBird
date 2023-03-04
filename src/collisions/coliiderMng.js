import { utils } from "pixi.js";
import { CollderBird } from "./colliderBird";
import { ColliderBomb } from "./colliderBomb";
export class ColliderMng extends utils.EventEmitter {
    constructor(){
        super();
        this.colliderList = [
            ["Bird", "Pipes"],
            ["Bird", "Laze"],
            ["Bird", "Bomb"],
            ["bomb", "Pipes"]
        ];
    }

    checkCollider(obj1, obj2){
        let obj1Name = obj1.constructor.name;
        let obj2Name = obj2.constructor.name;  
        let collider = this.colliderList.find((collider) => {
            return collider[0] === obj1Name && collider[1] === obj2Name;
        });
        if (collider){
            switch (collider[0]){
                case "Bird":
                    return CollderBird(obj1, obj2);
                    break;
                case "Bomb":
                    return ColliderBomb(obj1, obj2);
                    break;
            }
        }
        return false;
    }
}