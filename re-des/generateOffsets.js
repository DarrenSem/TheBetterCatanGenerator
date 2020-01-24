// This function calculates the offsets of each hex.
function getOffsets(size, mode) {
    //THIS FUNCTION IS SO UGLY IM SO SORRY apology not accepted
    // wO represents the width of a hex. The ugly number is (sqrt(3)/2).
    let wO = (size * 1.732050808 / 2);
    let hO = size;
    let ans = [];
    let startingY;
    let startingX;

    if (mode == "normal") {

        wO = (size * 1.732050808 / 2);
        hO = size;

        startingY = 50 - 2 * (hO * .75);
        startingX = 50 - wO;

        for (let i = 0; i < 3; i++) {
            ans.push(`top:${startingY}%;left:${startingX + i * (wO)}%`)
        }

        startingY = 50 - 1 * (hO * .75);
        startingX = 50 - wO * (1.5);

        for (let i = 0; i < 4; i++) {
            ans.push(`top:${startingY}%;left:${startingX + i * (wO)}%`)
        }

        startingY = 50;
        startingX = 50 - wO * (2);

        for (let i = 0; i < 5; i++) {
            ans.push(`top:${startingY}%;left:${startingX + i * (wO)}%`)
        }



        startingY = 50 + 1 * (hO * .75);
        startingX = 50 - wO * (1.5);

        for (let i = 0; i < 4; i++) {
            ans.push(`top:${startingY}%;left:${startingX + i * (wO)}%`)
        }

        startingY = 50 + 2 * (hO * .75);
        startingX = 50 - wO;


        for (let i = 0; i < 3; i++) {
            ans.push(`top:${startingY}%;left:${startingX + i * (wO)}%`)
        }
    } else {


        h0 = (size * 1.732050808 / 2);
        w0 = size;
        console.log(size)
        console.log(w0)

        //FIRST ROW
        startingY = 50 - 2.5 * (h0);
        startingX = 50;
        ans.push(`top:${startingY}%;left:${startingX}%`)

        //SECOND ROW
        startingY = 50 - 2 * (h0);
        startingX = 50 - .75 * w0;

        for (let i = 0; i < 2; i++) {
            ans.push(`top:${startingY}%;left:${startingX + i * (wO * 1.75)}%`)
        }

        //ROW 3
        startingY = 50 - 1.5 * (h0);
        startingX = 50 - 1.5 * w0;
        for (let i = 0; i < 3; i++) {
            ans.push(`top:${startingY}%;left:${startingX + i * (wO * 1.75)}%`)
        }

        //R0W 4
        startingY = 50 - 1 * (h0);
        startingX = 50 - (3 * .75) * w0;

        for (let i = 0; i < 4; i++) {
            ans.push(`top:${startingY}%;left:${startingX + i * (wO * 1.75)}%`)
        }

        //ROW 5
        startingY = 50 - .5 * (h0);
        startingX = 50 - 1.5 * w0;
        for (let i = 0; i < 3; i++) {
            ans.push(`top:${startingY}%;left:${startingX + i * (wO * 1.75)}%`)
        }

        //R0W 6
        startingY = 50;
        startingX = 50 - (3 * .75) * w0;

        for (let i = 0; i < 4; i++) {
            ans.push(`top:${startingY}%;left:${startingX + i * (wO * 1.75)}%`)
        }

        //ROW 5
        startingY = 50 + .5 * (h0);
        startingX = 50 - 1.5 * w0;
        for (let i = 0; i < 3; i++) {
            ans.push(`top:${startingY}%;left:${startingX + i * (wO * 1.75)}%`)
        }

        //R0W 7
        startingY = 50 + 1 * (h0);
        startingX = 50 - (3 * .75) * w0;

        for (let i = 0; i < 4; i++) {
            ans.push(`top:${startingY}%;left:${startingX + i * (wO * 1.75)}%`)
        }

        //ROW 8

        startingY = 50 + 1.5 * (h0);
        startingX = 50 - 1.5 * w0;
        for (let i = 0; i < 3; i++) {
            ans.push(`top:${startingY}%;left:${startingX + i * (wO * 1.75)}%`)
        }

        //ROW 9
        startingY = 50 + 2 * (h0);
        startingX = 50 - .75 * w0;

        for (let i = 0; i < 2; i++) {
            ans.push(`top:${startingY}%;left:${startingX + i * (wO * 1.75)}%`)
        }

        //ROW 10
        startingY = 50 + 2.5 * (h0);
        startingX = 50;
        ans.push(`top:${startingY}%;left:${startingX}%`)


    }
    return ans;
}
