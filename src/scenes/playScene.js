import { Container, Sprite } from "pixi.js";
import { GAME_HEIGHT, GAME_WIDTH } from "../constant";
import { Bird } from "../objects/bird";
import { Score } from "../objects/score";
import { Pipes } from "../objects/pipes";
import { getSpriteFromCache } from "../utils/utils";

export class PlayScene extends Container {
    constructor(score) {
        super();
        this.score = score;
        this.playSceneContainer = new Container();
        this.backgroundContainer = new Container(); // background - nam duoi cung
        this.birdContainer = new Container(); // this is the container have the bird and the pipe
        this.scoreContainer = new Container(); // container have the score - nam tren cung
        this.playScene();

        this.playSceneContainer.addChild(this.backgroundContainer);
        this.playSceneContainer.addChild(this.birdContainer);
        this.playSceneContainer.addChild(this.scoreContainer);
    }

    playScene() {
        this.createBackground();
        this.createBird();
        this.createScore();
        this.createPipes();
    }

    createBackground() {
        this.background = getSpriteFromCache("background.png");
        this.background.x = 0;
        this.backgroundContainer.addChild(this.background);
        
        this.backgroundRight = getSpriteFromCache("background.png");
        this.backgroundRight.x = this.background.x + this.background.width;
        this.backgroundContainer.addChild(this.backgroundRight);
    }

    createBird() {
        this.bird = new Bird();
        this.bird.create();
        this.birdContainer.addChild(this.bird);
    }

    createScore() {
        this.score = new Score(this.score);
        this.score.create();
        this.scoreContainer.addChild(this.score);
    }

    createPipes(){
        this.pipes = new Pipes();
        this.pipes.createPipes();
        this.birdContainer.addChild(this.pipes);
    }

    updateBackground() {
        this.background.x -= 3;
        this.backgroundRight.x -= 3;

        if (this.background.x + this.background.width < 0) {
            this.background.x = this.backgroundRight.x + this.backgroundRight.width;
        }

        if (this.backgroundRight.x + this.backgroundRight.width < 0) {
            this.backgroundRight.x = this.background.x + this.background.width;
        }
    }

    updateScore(){
        if (this.bird.x > this.pipes.x + this.pipes.width){
            this.score.plusScore();
        }
    }


}