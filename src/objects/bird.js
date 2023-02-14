import { Container } from "pixi.js";

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
    }
}