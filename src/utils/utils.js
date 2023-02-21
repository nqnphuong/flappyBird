import { Sprite, utils  } from "pixi.js";
import { GAME_HEIGHT } from "../constant";

export function getSpriteFromCache(name){
    return new Sprite(utils.TextureCache[`${name}`]);
}

export function getTextureFromCache(name) {
    return utils.TextureCache[`${name}`];
}

export function random() {
    return Math.floor(Math.random() * (GAME_HEIGHT - 0 + 1)) + 0;
}