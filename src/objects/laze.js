import { Container, Graphics  } from "pixi.js";
import { getSpriteFromCache, randomInt } from "../utils/utils";
import { GAME_WIDTH, LASER_INTERVAL } from "../constant";

export class Laze extends Container{
    constructor(){
        super();
    }

    createLaze(){
        this.warning = getSpriteFromCache("warning.png");
        const y =  randomInt();
        this.warning.position.set(GAME_WIDTH - 5 - this.warning.width, y);
        this.addChild(this.warning);

        this.warningFlicker = setInterval(() => {
            this.warning.alpha = (this.warning.alpha === 1) ? 0.5 : 1;
        }, 100);

        setTimeout(() => {
            this.line = new Graphics();
            this.line.lineStyle(2, 0xff0000); // red
            this.line.moveTo(0, y + this.warning.height / 2);
            this.line.lineTo(GAME_WIDTH, y + this.warning.height / 2);  
            this.addChild(this.line);

            this.removeChild(this.warning);
            setTimeout(() => {
                this.delete();
            }, 200);
        }, 2000);
        this.removeChild(this.line);
    }

    delete(){
        clearInterval(this.warningFlicker);
        this.parent.removeChild(this);
    }

    updateLaze(){
        console.log("updateLaze");
        this.createLaze();
    }
}