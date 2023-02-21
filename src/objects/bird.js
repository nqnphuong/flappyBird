import { Container, AnimatedSprite, Texture, Sprite } from "pixi.js";
import { getSpriteFromCache, getTextureFromCache } from "../utils/utils";
export class Bird extends Container {
    constructor() {
        super();
    }

    create() {
        this.bird = getSpriteFromCache("bird1.png");
        this.fly();
        this.bird.position.set(225, 500);
        this.addChild(this.bird);
    }

    fly() {
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

}