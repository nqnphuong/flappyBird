import { Application, Assets } from "pixi.js";
import { GAME_HEIGHT, GAME_WIDTH } from "./constant";
import { PlayScene } from "./scenes/playScene";
export default class Game {
    constructor() {
        this.app = new Application({
            width: GAME_WIDTH,
            height: GAME_HEIGHT,
            antialias: true,
            transparent: false
        });
        document.body.appendChild(this.app.view);
    }

    async loadAssets() {
        await Assets.load("./images/flappyBird.json");
        this.setup();
    }

    setup() {
        this.playScene = new PlayScene();
        this.app.stage.addChild(this.playScene.playSceneContainer);
        
        this.state = this.play;
        this.app.ticker.add((delta) => this.gameLoop());
    }

    gameLoop() {
        this.playScene.updateBackground();
        this.playScene.pipes.update();
        // this.playScene.bird.update();
        this.playScene.updateScore();
    }

    end() {
        this.playScene.visible = false;
    }
}
