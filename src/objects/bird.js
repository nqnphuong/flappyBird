import { Container, AnimatedSprite, Texture, Sprite  } from "pixi.js";

export class Bird extends Container {
    constructor() {
        super();
    }

    create() {
        let birdFrames = [
            "bird1.png",
            "bird2.png",
            "bird3.png",
            "bird4.png",
        ];
        let texture = Texture.from("images/bird1.png");
        this.bird = new Sprite(texture);
        this.bird.position.set(100, 50);
        this.bird.scale(0.5, 0.5);
        this.addChild(this.bird);
        // const birdArray = [];
        // for (let i = 0; i < 4; i++) {
        //     const texture = Texture.from(birdFrames[i]);
        //     birdArray.push(texture);
        // }
        // const animatedSprite = new AnimatedSprite(birdArray);
    }

}