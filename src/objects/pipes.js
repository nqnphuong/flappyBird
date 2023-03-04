import { Container } from "pixi.js";
import { getSpriteFromCache, randomInt } from "../utils/utils";
import { DISTANCE_BETWEEN_PIPE, GAME_HEIGHT, GAME_WIDTH, DISTANCE_TWO_PIPES, SPEED_OBJECT } from "../constant";

export class Pipes extends Container {
    constructor() {
        super();
    }

    createPipes() {
        let x = 300;
        this.pipesGroup = [];

        for (let i = 1; i <= 3; i++) {
            let pipes = [];
            this.botPipe = getSpriteFromCache("pipe.png"); //tren
            this.botPipe.position.set(x + i * DISTANCE_TWO_PIPES, randomInt());
            this.botPipe.note = "bot";
            console.log("botPipe: " + this.botPipe.y);
            pipes.push(this.botPipe);

            this.topPipe = getSpriteFromCache("pipe.png"); //duoi
            this.topPipe.position.set(x + i * DISTANCE_TWO_PIPES, this.botPipe.y - DISTANCE_BETWEEN_PIPE);
            this.topPipe.rotation = Math.PI;
            this.topPipe.scale.x = -1;
            this.topPipe.note = "top";
            pipes.push(this.topPipe);

            this.addChild(this.topPipe);
            this.addChild(this.botPipe);
            this.pipesGroup.push(pipes);
        }
    }

    update() {
        this.pipesGroup.forEach(pipes => {
            pipes[0].x -= SPEED_OBJECT;
            pipes[1].x -= SPEED_OBJECT;

            if (pipes[0].x < -110) {
                pipes[0].y = randomInt();
                pipes[1].y = pipes[0].y - DISTANCE_BETWEEN_PIPE;
                pipes[0].x = this.pipesGroup[this.pipesGroup.length - 1][0].x + 380;
                pipes[1].x = pipes[0].x;
                this.pipesGroup.shift();
                this.pipesGroup.push(pipes);
            }
        });
    }

    bombPipe(){
        //
    }

}


