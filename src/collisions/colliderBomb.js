export class ColliderBomb {
    constructor(obj1, obj2) {
        this.obj1 = obj1;
        this.obj2 = obj2;
        this.detectPipes(r1, r2);
    }

    detectPipes(r1, r2) {
        if (r1.x + r1.width > r2.x && r1.y + r1.height < r2.y && r1.y > r2.y + r2.height) {
            return true;
        }
        return false;
    }
}
