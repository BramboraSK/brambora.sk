/**
 * Draws the object.
 * @param {string} canvas Canvas to draw in
 * @param {number[]} start Starting position
 * @param {number[][]} destinations Destinations
 * @param {number} speed Interval in ms
 */
const draw = (canvas, start, destinations, speed = 5) => {
    const c = document.getElementById(canvas);
    const ctx = c.getContext("2d");

    ctx.moveTo(...start);

    let i = 0;
    let [cX, cY] = start;
    let addX, addY = 1;
    let destination = destinations[i];

    let x = setInterval(() => {
        if(cX === destination[0] && cY === destination[1]) {
            destination = destinations[++i];
            if(!destination) clearInterval(x);
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
    }, speed);
}

const domcek = [
    [0, 100],
    [100, 0],
    [200, 100],
    [200, 200],
    [0, 100],
    [200, 100],
    [0, 200],
    [200, 200]
];

draw("domcekCanvas", [0, 200], domcek);

const vitazi = [
    [0, 100],
    [50, 100],
    [50, 50],
    [100, 50],
    [100, 0],
    [150, 0],
    [150, 50],
    [200, 50],
    [200, 100],
    [250, 100],
    [250, 150],
    [0, 150]
];

draw("vitaziCanvas", [0, 150], vitazi);