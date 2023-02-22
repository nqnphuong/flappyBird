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
        this.score = 0;
        document.body.appendChild(this.app.view);
    }

    async loadAssets() {
        await Assets.load("./images/flappyBird.json");
        this.setup();
    }

    setup() {
        console.log(this.score);
        this.playScene = new PlayScene(this.score);
        this.app.stage.addChild(this.playScene.playSceneContainer);

        // Set the game state
        this.state = this.play;
        //Start the game loop 
        this.app.ticker.add((delta) => this.gameLoop());
    }

    gameLoop() {
        //Runs the current game `state` in a loop and renders the sprites
        this.playScene.updateBackground();
        this.playScene.pipes.update();
        this.playScene.bird.update();
    }

    end() {
        this.playScene.visible = false;
    }

    update() {

    }
}
