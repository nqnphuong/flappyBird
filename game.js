import { Application } from "pixi.js";
import { GAME_HEIGHT, GAME_WIDTH } from "./constant";

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

    }

    setup(){

    }

    update(){

    }

    end(){
        
    }
}
