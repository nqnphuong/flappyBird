import { Container, Sprite } from "pixi.js";
import { SPEED_OBJECT } from "../constant";
import { Bird } from "../objects/bird";
import { Score } from "../objects/score";
import { Pipes } from "../objects/pipes";
import { Laze } from "../objects/laze";
import { Bomb } from "../objects/bomb";
import { getSpriteFromCache } from "../utils/utils";

export class PlayScene extends Container {
    constructor() {
        super();
        this.playSceneContainer = new Container();
        this.backgroundContainer = new Container(); // background - nam duoi cung
        this.birdContainer = new Container(); // this is the container have the bird and the pipe
        this.lazeContainer = new Container(); 
        this.scoreContainer = new Container(); // container have the score - nam tren cung
        
        this.playScene();

        this.playSceneContainer.addChild(this.backgroundContainer);
        this.playSceneContainer.addChild(this.birdContainer);
        this.playSceneContainer.addChild(this.lazeContainer);
        this.playSceneContainer.addChild(this.scoreContainer);
    }

    playScene() {
        this.createBackground();
        this.createBird();
        this.createScore();
        this.createLaze();
        this.createPipes();
        this.createBomb();
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
        this.bird.createBird();
        this.birdContainer.addChild(this.bird);
    }

    createScore() {
        this.score = new Score();
        this.score.createScore();
        this.scoreContainer.addChild(this.score);
    }

    createPipes(){
        this.pipes = new Pipes();
        this.pipes.createPipes();
        this.birdContainer.addChild(this.pipes);
    }

    createLaze(){
        this.laze = new Laze();
        this.laze.createLaze();
        this.lazeContainer.addChild(this.laze);
    }

    createBomb(){
        this.bomb = new Bomb();
        this.bomb.createBomb();
        this.lazeContainer.addChild(this.bomb);

        this.bombNumber = new Bomb();
        this.bombNumber.createBombNumber();
        this.scoreContainer.addChild(this.bombNumber);
    }

    updateBackground() {
        this.background.x -= SPEED_OBJECT;
        this.backgroundRight.x -= SPEED_OBJECT;

        if (this.background.x + this.background.width < 0) {
            this.background.x = this.backgroundRight.x + this.backgroundRight.width;
        }

        if (this.backgroundRight.x + this.backgroundRight.width < 0) {
            this.backgroundRight.x = this.background.x + this.background.width;
        }
    }

    updateScore(){ 
        if(this.bird.bird.x - this.pipes.botPipe.width == this.pipes.pipesGroup[0][0].x){
            this.score.update();
        }  
    }


}