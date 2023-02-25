import { Application, Assets } from "pixi.js";
import { GAME_HEIGHT, GAME_WIDTH } from "./constant";
import { PlayScene } from "./scenes/playScene";
import { LoseScene } from "./scenes/loseScene";
import { Collider } from "./collisions/collider";
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
        this.loseScene = new LoseScene();
        this.app.stage.addChild(this.loseScene.loseSceneContainer);
        this.loseScene.loseSceneContainer.visible = false;

        this.state = this.play;
        this.app.ticker.add((delta) => this.gameLoop(delta));
    }

    gameLoop(delta) {
        this.state(delta);
    }

    play() {
        this.playScene.updateBackground();
        this.playScene.pipes.update();
        this.playScene.bird.update();
        this.playScene.updateScore();

        // collision
        let hit = false;
        this.collider = new Collider();
        this.playScene.pipes.pipesGroup.forEach(pipes => {
            pipes.forEach(pipe => {
                if (this.collider.detectCollisions(this.playScene.bird.bird, pipe)) {
                    hit = true;
                    console.log("Dung roi do");
                    this.state = this.end;
                    this.loseScene.message.text = "You lose!";
                }
            });
        });

        // document.addEventListener("keydown", (e) => {
        //     if (e.code == "KeyA") {
        //         this.state = this.end;
        //     }
        // });
    }

    end() {
        this.playScene.playSceneContainer.visible = false;
        this.loseScene.loseSceneContainer.visible = true;
    }
}
