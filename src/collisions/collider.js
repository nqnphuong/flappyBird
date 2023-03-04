import { ColliderMng } from "./coliiderMng";

export class Collider {
    constructor() {
        this.colliderList = [
            ["BIRD", "PIPE"],
            ["BIRD", "LAZE"],
            ["BIRD", "BOOM"],
            ["BOOM", "PIPE"]
        ];
        
        // this.colliderList = {
        //     "DIE": {
        //         tag1: "BIRD",
        //         tag2: ["PIPE", "LAZE"]
        //     },
        //     "GET": {
        //         tag1: "BIRD",
        //         tag2: "BOOM"
        //     },
        //     "BOOM": {
        //         tag1: "BOOM",
        //         tag2: "PIPE"
        //     }
        // }
    }

    getCollider(colliderTag){
        tagName = this.colliderList[colliderTag];
        console.log("tagName", tagName);
        tag1 = tagName.tag1;
        tag2 = tagName.tag2;
        this.checkCollider = ColliderMng(tag1, tag2);
        console.log("checkCollider", this.checkCollider);
    }


    detectCollisions(r1, r2) {
        let hit;
        hit = false;

        if (r2.note == "top") {
            if ((r1.y < r2.y) && (r1.x + r1.width > r2.x) && (r1.x < r2.x + r2.width)) {
                hit = true;
            }
        }
        if (r2.note == "bot") {
            if ((r1.y + r1.height > r2.y) && (r1.x + r1.width > r2.x) && (r1.x < r2.x + r2.width)) {
                hit = true;
            }
        }
        return hit;
    }
}