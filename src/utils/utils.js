import { Sprite, utils  } from "pixi.js";
import { GAME_HEIGHT } from "../constant";

export function getSpriteFromCache(name){
    return new Sprite(utils.TextureCache[`${name}`]);
}

export function getTextureFromCache(name) {
    return utils.TextureCache[`${name}`];
}

export function randomInt() {
    const min = 400;
    const max = GAME_HEIGHT - 200;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}