import { Application, Assets } from "pixi.js";
import { GAME_HEIGHT, GAME_WIDTH } from "./constant";
import { PlayScene } from "./scenes/playScene";
import { LoseScene } from "./scenes/loseScene";
import { Collider } from "./collisions/collider";
import { BeginScene } from "./scenes/beginScene";
import { Keyboard } from "./input/keyboard";
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
        this.playScene.playSceneContainer.skipChildrenUpdate = true;

        this.loseScene = new LoseScene();
        this.app.stage.addChild(this.loseScene.loseSceneContainer);
        this.loseScene.loseSceneContainer.visible = false;

        this.beginScene = new BeginScene();
        this.app.stage.addChild(this.beginScene.beginSceneContainer);

        this.waitStart();
    }

    waitStart() {
        this.space = new Keyboard("Space");
        this.app.ticker.add(() => {
            if (this.space.inDown) {
                this.app.ticker.remove(this.waitStart);
                this.playScene.bird.fly();
                this.start();
            }
        });
    }

    start() {
        this.space.unsubscribe();
        console.log("Space ", this.space);
        this.beginScene.beginSceneContainer.visible = false;
        this.playScene.playSceneContainer.skipChildrenUpdate = false;
        this.state = this.play;
        this.app.ticker.add((delta) => this.gameLoop(delta));
    }


    gameLoop(delta) {
        this.state(delta);
    }

    play() {
        this.playScene.updateBackground();
        this.playScene.pipes.update();
        // this.playScene.bird.update();
        this.playScene.updateScore();
        // setTimeout(() => {
        //     console.log("Hello time");
        //     this.playScene.laze.updateLaze();
        // }, 10000);
        this.playScene.bomb.updateBomb();

        // collision
        let hit = false;
        this.collider = new Collider();
        this.playScene.pipes.pipesGroup.forEach(pipes => {
            pipes.forEach(pipe => {
                if (this.collider.detectCollisions(this.playScene.bird.bird, pipe)) {
                    // hit = true;
                    console.log("Dung roi do");
                }
            });
        });
        if (hit === true) {
            this.state = this.end;
            this.loseScene.message.text = "You lose!";
        }
    }

    end() {
        this.playScene.playSceneContainer.skipChildrenUpdate = false;
        this.loseScene.loseSceneContainer.visible = true;
    }
}
