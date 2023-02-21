import { Container } from "pixi.js";
import { getSpriteFromCache } from "../utils/utils";

export class Pipes extends Container {
    constructor() {
        super();
    }

    createTwo() {
        this.pipes = []
        this.pipe1 = getSpriteFromCache("pipe.png"); //tren
        this.pipe.position.set(500, );
        this.pipe2 = getSpriteFromCache("pipe.png"); //duoi
        this.pipe.position.set(500, 0);
        this.addChild(this.pipe);
    }

}