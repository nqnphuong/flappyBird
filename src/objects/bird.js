import { Container, AnimatedSprite, Texture, Sprite } from "pixi.js";
import { getSpriteFromCache, getTextureFromCache } from "../utils/utils";
export class Bird extends Container {
    constructor() {
        super();
        this.keyboard();
        this.v = 0;
        this.g = 0.15;
        // 
    }

    create() {
        this.bird = getSpriteFromCache("bird1.png");
        this.animationFly();
        this.bird.position.set(160, 500);
        // this.bird.vx = 0;
        // this.bird.vy = 0;
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
        console.log(birdObject);
        this.bird = new AnimatedSprite(birdObject);
        this.bird.animationSpeed = 0.2;
        this.bird.play();
    }

    keyboard() {
        document.addEventListener("keydown", (e) => {
            // press space to fly
            if (e.code == "Space") {
                this.fly();
            }
        });
    }

    fly(){
        this.v -= 2;
        this.bird.y -= this.v;
    }

    update() {
        this.v += this.g;
        this.bird.y = this.bird.y + this.v;
    }
}