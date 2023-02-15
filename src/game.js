import { Application, Assets } from "pixi.js";
import { GAME_HEIGHT, GAME_WIDTH } from "./constant";
import { PlayScene } from "./scenes/playScene";
export default class Game{
    constructor(){
        this.app = new Application({
            width: GAME_WIDTH,
            height: GAME_HEIGHT,
            antialias: true,
            transparent: false,
            resolution: window.devicePixelRatio || 1
        });
        document.body.appendChild(this.app.view);
    }

    loadAssets(){
        Assets.load("./images/flappyBird.json");
        this.setup();
    }

    setup(){
        this.playScene = new PlayScene();
        this.app.stage.addChild(this.playScene.playSceneContainer);
    }

    update(){

    }

    end(){
        
    }
}
