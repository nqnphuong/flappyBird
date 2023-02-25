export class Collider {
    detectCollisions(r1, r2) {
        let hit;
        hit = false;

        if (r2.note == "top"){
            if ((r1.y < r2.y) && (r1.x + r1.width > r2.x)){
                console.log("Dung tren");
                hit = true;
            }
        }
        if (r2.note == "bot"){
            if ((r1.y + r1.height > r2.y) && (r1.x + r1.width > r2.x)){
                console.log("Dung duoi");
                hit = true;
            } 
        }
        return hit;
    }
}