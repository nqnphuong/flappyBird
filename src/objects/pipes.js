import { Container } from "pixi.js";
import { getSpriteFromCache, randomInt } from "../utils/utils";
import { DISTANCE_BETWEEN_PIPES, GAME_HEIGHT, GAME_WIDTH } from "../constant";

export class Pipes extends Container {
    constructor() {
        super();
    }

    createPipes() {
        let x = 300;
        this.pipe1 = getSpriteFromCache("pipe.png"); //tren
        this.pipe1.position.set(x, randomInt());

        this.pipe2 = getSpriteFromCache("pipe.png"); //duoi
        this.pipe2.position.set(x, this.pipe1.y - DISTANCE_BETWEEN_PIPES);
        this.pipe2.rotation = Math.PI;
        this.pipe2.scale.x = -1;

        this.addChild(this.pipe1);
        this.addChild(this.pipe2);
    }

    // createThreePipes(){
    //     this.ThreePipes = []
    //     for(let i = 0; i < 3; i++){
    //         let pipes = this.createPipes();
    //         this.ThreePipes.push(pipes);
    //     }
    // }

    update(){
        this.pipe1.x -= 2;
        this.pipe2.x -= 2;

        if(this.pipe1.x < GAME_WIDTH){

        }
    }

}


