const c = document.getElementById("domcekCanvas");
const ctx = c.getContext("2d");

const destinations = [
    // x, y
    [0, 100],
    [100, 0],
    [200, 100],
    [200, 200],
    [0, 100],
    [200, 100],
    [0, 200],
    [200, 200]
];

ctx.moveTo(0, 200);

let i = 0;
let [cX, cY] = [0, 200];
let addX, addY = 1;
let destination = destinations[i];

setInterval(() => {
    if(cX === destination[0] && cY === destination[1]) {
        destination = destinations[++i];
    } else {
        const [absX, absY] = [Math.abs(destination[0] - cX), Math.abs(destination[1] - cY)];

        if(absX === absY) {
            addX = 1;
            addY = 1;
        } else {
            if(absX < absY) {
                addX = 0.5;
                addY = 1;
            } else {
                addX = 1;
                addY = 0.5;
            }
        }

        if(cX < destination[0]) {
            cX += addX;
        } else {
            cX -= addX;
        }

        if(cY < destination[1]) {
            cY += addY;
        } else {
            cY -= addY;
        }

        ctx.lineTo(cX, cY);
        ctx.stroke();
    }
}, 5);