import { Container, AnimatedSprite} from "pixi.js";
import { getSpriteFromCache, getTextureFromCache } from "../utils/utils";
import { V_MAX, V_MIN, FORCE , G} from "../constant";
import { Keyboard } from "../input/keyboard";
export class Bird extends Container {
    constructor() {
        super();
        this.v = 0;
        this.fly();
        // 
    }

    create() {
        this.bird = getSpriteFromCache("bird1.png");
        this.animationFly();
        this.bird.position.set(160, 500);
        this.addChild(this.bird);
    }

    animationFly() {
        let birdFrames = [
            "bird1.png",
            "bird2.png",
            "bird3.png",
            "bird4.png",
            "bird3.png",
            "bird2.png",
        ];
        let birdObject = [];
        for (let i = 0; i < 6; i++) {
            birdObject.push(getTextureFromCache(birdFrames[i]));
        }
        this.bird = new AnimatedSprite(birdObject);
        this.bird.animationSpeed = 0.2;
        this.bird.play();
    }

    fly(){
        let space = new Keyboard("Space");
        if (space.inDown === true){
            if (this.v + FORCE > V_MAX){
                this.v += FORCE;
                this.bird.y -= this.v;
            }
        }
    }

    update() {
        // this.animationFly();
        this.v += G;
        this.bird.y += this.v;
    }
}