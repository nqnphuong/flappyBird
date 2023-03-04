export class CollderBird {
    constructor(obj1, obj2) {
        this.obj1 = obj1;
        this.obj2 = obj2;
        if (this.obj2.constructor.name == "Pipes") {
            this.detectPipes(r1, r2);
        } else if (this.obj2.constructor.name == "Laze") {
            this.detectLaze(r1, r2);
        } else if (this.obj2.constructor.name == "Bomb") {
            this.detectBomb(r1, r2);
        }
    }

    detectPipes(r1, r2) {
        if (r2.note == "top") {
            if ((r1.y < r2.y) && (r1.x + r1.width > r2.x) && (r1.x < r2.x + r2.width)) {
                return true;
            }
        }
        if (r2.note == "bot") {
            if ((r1.y + r1.height > r2.y) && (r1.x + r1.width > r2.x) && (r1.x < r2.x + r2.width)) {
                return true;
            }
        }
        return false;
    }

    detectLaze(r1, r2) {
        if (r1.y < r2.y && r1.y + r1.height > r2.y) {
            return true;
        }
        return false;
    }

    detectBomb(r1, r2) {
        if (r1.x + r1.width < r2.x) {
            if (r1.y > r2.y + r2.height || r1.y + r1.height < r2.y) {
                return false
            } else {
                return true;
            }
        }
        return false;
    }
}