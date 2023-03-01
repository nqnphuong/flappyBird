import { Container, TextStyle, Text} from "pixi.js";
import { GAME_HEIGHT, GAME_WIDTH } from "../constant";

export class LoseScene extends Container {
    constructor() {
        super();
        this.loseSceneContainer = new Container();
        this.loseScene();
    }

    loseScene() {
        const style = new TextStyle({
            fontFamily: "Franklin Gothic Heavy",
            fontSize: 64,
            fill: "white"
        });
        this.message = new Text("Lose", style);
        this.message.x = GAME_WIDTH/2 - (this.message.width/2);
        this.message.y = GAME_HEIGHT / 2 - 32;
        this.loseSceneContainer.addChild(this.message);
    }

}