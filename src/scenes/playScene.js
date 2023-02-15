import { Container, Sprite } from "pixi.js";
import { Bird } from "../objects/bird";

export class PlayScene extends Container{
    constructor(){
        super();
        this.playSceneContainer = new Container();
        this.playScene();
    }

    playScene(){
        this.background = Sprite.from("./images/background.png");
        this.playSceneContainer.addChild(this.background);
        this.createBird();
    }

    createBird(){
        this.bird = new Bird();
        this.bird.create();
        this.playSceneContainer.addChild(this.bird);
    }


}