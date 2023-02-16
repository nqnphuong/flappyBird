import { Container, AnimatedSprite, Texture, Sprite } from "pixi.js";
import { GAME_HEIGHT, GAME_WIDTH } from "../constant";
export class Bird extends Container {
    constructor() {
        super();
    }

    create() {
        let texture = Texture.from("images/bird1.png");
        this.bird = new Sprite(texture);
        this.fly();
        this.bird.position.set(225, 500);
        this.addChild(this.bird);
        
    }

    fly() {
        let birdFrames = [
            "images/bird1.png",
            "images/bird2.png",
            "images/bird3.png",
            "images/bird4.png",
            "images/bird3.png",
            "images/bird2.png",
        ];
        let birdObject = [];
        for (let i = 0; i < 6; i++) {
            birdObject.push(Texture.from(birdFrames[i]));
        }
        this.bird = new AnimatedSprite(birdObject);
        this.bird.animationSpeed = 0.2;
        this.bird.play();
    }

}