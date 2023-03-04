import { Container, TextStyle, Text } from "pixi.js";
import { GAME_HEIGHT, GAME_WIDTH } from "../constant";

export class Score extends Container{
    constructor(){
        super();
        this.score = 0;
    }

    createScore(){
        const style = new TextStyle({
            fontFamily: "Franklin Gothic Heavy",
            fontSize: 40,
            fill: "white",
            style: "bold"
        });   
        this.message = new Text("SCORE: "+this.score, style);
        this.message.x = GAME_WIDTH/2 - 130;
        this.message.y = 50;
        this.addChild(this.message);
    }

    update(){
        this.score += 1;
        this.message.text = "SCORE: "+this.score;
    }
}