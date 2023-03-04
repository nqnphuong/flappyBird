import { Container, TextStyle, Text } from "pixi.js";
import { SPEED_OBJECT, GAME_WIDTH } from "../constant";
import { randomInt,getSpriteFromCache } from "../utils/utils";

export class Bomb extends Container {
    constructor() {
        super();
        this.bombNumber = 0;
    }

    createBombNumber() {
        const style = new TextStyle({
            fontFamily: "Franklin Gothic Heavy",
            fontSize: 20,
            fill: "white",
            style: "bold"
        });
        this.message = new Text("Bomb: " + this.bombNumber, style);
        this.message.x = GAME_WIDTH - 100;
        this.message.y = 60;
        this.addChild(this.message);
    }

    createBomb() {
        this.bomb = getSpriteFromCache("bomb.png");
        const y = randomInt();
        this.bomb.position.set(GAME_WIDTH + 500, y - 100);
        this.addChild(this.bomb);
    }

    updateBomb() {
        this.bomb.x -= SPEED_OBJECT;
    }

    updateBombNumber() {
        this.bombNumber += 1;
        this.message.text = "Bomb: " + this.bombNumber;
    }
}