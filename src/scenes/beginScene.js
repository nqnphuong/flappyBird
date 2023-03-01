import { Container, TextStyle, Text } from "pixi.js";
import { GAME_HEIGHT, GAME_WIDTH } from "../constant";

export class BeginScene extends Container{
    constructor(){
        super();
        this.beginSceneContainer = new Container();
        this.beginScene();
    }

    beginScene(){
        const style = new TextStyle({
            fontFamily: "Franklin Gothic Heavy",
            fontSize: 40,
            fill: "white"
        });
        this.message = new Text("Press Space to play", style);
        this.message.x = GAME_WIDTH/2 - (this.message.width/2);
        this.message.y = GAME_HEIGHT / 2 - 70;
        this.beginSceneContainer.addChild(this.message);
    }


}