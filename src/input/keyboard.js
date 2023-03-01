export class Keyboard {
    constructor(key){
        this.key = key;
        this.inDown = false;
        this.handle();
    }

    handle() {
        window.addEventListener("keydown", (e) => this.downListener(e), false);
        window.addEventListener("keyup", (e) => this.upListener(e), false);
    }

    downListener(e) {
        if (e.code === this.key) {
            this.inDown = true;
        }
    }

    upListener(e) {
        if (e.code === this.key) {
            this.inDown = false;
        }
    }
 
    unsubscribe() {
        window.removeEventListener("keydown", this.downListener);
        window.removeEventListener("keyup", this.upListener);
    }
}