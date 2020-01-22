
let size;
let mode = document.getElementById('pick-mode').value;
if (mode == "normal") {
  size = 17.2;
} else {
  size = 15.5;
}

let tileOffsetCSS = getOffsets(size, mode);

function getOffsets(size, mode) {
  //THIS FUNCTION IS SO UGLY IM SO SORRY
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









    //ans.push(`top:${startingY}%;left:${startingX}%`)


    // startingY = 50 - .5 * (h0);
    // startingX = 50;
    // ans.push(`top:${startingY}%;left:${startingX}%`)

    // startingY = 50 - 1.5 * (h0);
    // startingX = 50;
    // ans.push(`top:${startingY}%;left:${startingX}%`)





    // startingY = 50 - 1.5 * (h0);
    // startingX = 50 + .75 * (w0 * 2);
    // ans.push(`top:${startingY}%;left:${startingX}%`)


    // startingY = 50 - 1 * (h0);
    // startingX = 50 + .75 * (w0 * 3);
    // ans.push(`top:${startingY}%;left:${startingX}%`)




    // startingY = 50 - 1.5 * (hO * 1);
    // startingX = 50;
    // ans.push(`top:${startingY}%;left:${startingX}%`)


    // h0 = (size * 1.732050808 / 2);
    // w0 = size;

    // startingY = 50 - 2.5 * (hO * 1);
    // startingX = 50;

    // //ROW 1
    // for (let i = 0; i < 1; i++) {
    //   ans.push(`top:${startingY}%;left:${startingX + i * (wO)}%`)
    // }

    // //ROW 2
    // startingY = 50 - 2 * (h0);
    // startingX = 50 - 0 * (.5);

    // for (let i = 0; i < 2; i++) {
    //   ans.push(`top:${startingY}%;left:${startingX + i * (wO)}%`)
    // }


  }
  return ans;
}



//let portCSS = ["top:35%;left:10%;", "top:10%;left:60%;", "top:10%;left:26%;", "top:23%;left:85%;", "top:50%;left:97%;", "top:75%;left:83%;", "top:75%;left:83%;"]
//keeping this here for now bc im having trouble importing it
let resourceTypes = ["ore", "sheep", "brick", "wood", "wheat", "desert"];
//let prob = ["", "", ".", "..", "...", "....", ".....", "", "....", "...", "..", "..", ".",]
state = {
  numArray: [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12],
  expandednumArray: [2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12],
  resourceArray: ["ore", "ore", "ore", "brick", "brick", "brick", "sheep"
    , "sheep", "sheep", "sheep", "wood", "wood", "wood", "wood",
    "wheat", "wheat", "wheat", "wheat",],
  expandedresourceArray: ["ore", "ore", "ore", "ore", "ore", "brick", "brick", "brick", "brick", "brick", "sheep"
    , "sheep", "sheep", "sheep", "sheep", "sheep", "wood", "wood", "wood", "wood", "wood", "wood",
    "wheat", "wheat", "wheat", "wheat", "wheat", "wheat"],
  prob: ["", "", ".", "..", "...", "....", ".....", "", ".....", "....", "...", "..", ".",]

}

// Represents adjacencies of tiles on the board.
// Format --> tile # : [adjacent tiles]

let adjacencyList;

let getAdjList = (mode) => {
  if (mode == "normal") {
    adjacencyList = {

      0: [1, 3, 4],
      1: [0, 2, 4, 5],
      2: [1, 5, 6],
      3: [0, 4, 7, 8],
      4: [0, 1, 3, 5, 8, 9],
      5: [1, 2, 4, 6, 9, 10],
      6: [2, 5, 10, 11],
      7: [3, 8, 12],
      8: [3, 4, 7, 9, 12, 13],
      9: [4, 5, 8, 10, 13, 14],
      10: [5, 6, 9, 11, 14, 15],
      11: [6, 10, 15],
      12: [7, 8, 13, 16],
      13: [8, 9, 12, 14, 16, 17],
      14: [9, 10, 13, 15, 17, 18],
      15: [10, 11, 14, 18],
      16: [12, 13, 17],
      17: [13, 14, 16, 18],
      18: [14, 15, 17]

    }
  } else {
    adjacencyList = {

      0: [1, 2, 4],
      1: [3, 4, 7],
      2: [4, 5, 8],
      3: [6, 7, 10],
      4: [7, 8, 11],
      5: [8, 9, 12],
      6: [3, 10, 13],
      7: [1, 3, 4, 10, 11, 14],
      8: [2, 4, 5, 11, 12, 15],
      9: [5, 12, 16],
      10: [3, 6, 7, 13, 14, 17],
      11: [4, 7, 8, 14, 15, 18],
      12: [5, 8, 9, 15, 16, 19],
      13: [6, 10, 17, 20],
      14: [7, 10, 11, 17, 18, 21],
      15: [8, 11, 12, 18, 19, 22],
      16: [9, 12, 19, 23],
      17: [10, 13, 14, 20, 21, 24],
      18: [11, 14, 15, 21, 22, 25],
      19: [12, 15, 16, 22, 23, 26],
      20: [13, 17, 24],
      21: [14, 17, 18, 24, 25, 27],
      22: [15, 18, 19, 25, 26, 28],
      23: [16, 19, 26],
      24: [17, 20, 21, 27],
      25: [18, 21, 22, 27, 28, 29],
      26: [19, 22, 23, 28],
      27: [21, 24, 25, 29],
      28: [22, 25, 26, 29],
      29: [25, 27, 28],
    }

  }
}


let ports = ["wood-port", "wheat-port", "sheep-port", "brick-port", "three-port", "ore-port", "three-port", "three-port", "three-port",]





// This shuffle algorithm is used to shuffle both the resources and the numbers.
// Following that, it is used to shuffled the Tiles array created in gen().
// This algorithm shuffles the array in place.
// Algorithm from here: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
let shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}


let selectMode = () => {
  mode = document.getElementById('pick-mode').value;
  console.log(mode);
  //document.getElementById('board').innerHTML = "";

  if (mode == "normal") {
    size = 17.2;
  } else {
    size = 15;
  }
  getAdjList(mode);
  tileOffsetCSS = getOffsets(size, mode);
  buildBoard(mode);
  generateBoard();

}


// Checks the adjacencies of the specified tile.
// Returns true if adjacency present.
// Returns false if no adjacency present.



// Checks over each number in the randomized number array.
// If a number is a 6 or an 8, check its adjacencies.
// If there is a 6 or 8 in its adjacencies, return true, AKA there are adjacencies present.
// If it goes through whole array and does not encounter adjacent 6 and 8s, return false,
// AKA there are no adjacencies present.
let passedAdjacencyTest = (tilesArr) => {
  for (let [boardLocation, tile] of tilesArr.entries()) {
    if (tile.chit == 6 || tile.chit == 8) {
      for (adj of adjacencyList[boardLocation]) {
        if (tilesArr[adj].chit == 6 || tilesArr[adj].chit == 8) return false
      }
    }
  }
  return true
}

let passedResourceCheck = (tilesArr) => {
  for (let [boardLocation, tile] of tilesArr.entries()) {
    let resource = tile.resource
    let count = 1;
    for (adj of adjacencyList[boardLocation]) {
      if (resource == tilesArr[adj].resource) {
        count++
      }
    }
    if (count > 2) return false
  }
  return true
}



// This method just creates and returns the array of tiles (tile information)
// that generateTiles() uses to present the tiles to the board in HTML form.
let gen = () => {
  let randomNumbers;
  let randomResources;
  if (mode == "normal") {
    randomNumbers = shuffle(this.state.numArray)
    randomResources = shuffle(this.state.resourceArray)
  } else {
    randomNumbers = shuffle(this.state.expandednumArray)
    randomResources = shuffle(this.state.expandedresourceArray)
  }

  let probArr = this.state.prob;

  let tiles = []

  for (let x in randomNumbers) {
    let tile = Object()
    tile.chit = randomNumbers[x]
    tile.resource = randomResources[x]
    tile.probability = probArr[tile.chit]
    tiles.push(tile)
  }


  let desert = Object()
  desert.resource = "desert"
  desert.chit = ""
  desert.probability = ""
  tiles.push(desert)

  if (mode == "expanded") {
    tiles.push(desert)
  }

  //console.log(tiles)
  return shuffle(tiles)
}


////end what should not be in this file

let buildBoard = () => {

  if (mode == "normal") {
    document.getElementById('board').innerHTML = `<div id="border"></div>`
  } else {
    document.getElementById('board').innerHTML = `<div id="border-expanded"></div>`
  }


  if (mode == "normal") {
    for (let [id, css] of tileOffsetCSS.entries()) {

      document.getElementById('board').innerHTML +=
        `<div class="hex" style="${css}" id="tile-${id}")>
                  <div class="circle" id="circle-${id}">
                  </div>
              </div>`
    }
  } else if (mode == "expanded") {
    for (let [id, css] of tileOffsetCSS.entries()) {
      console.log("aaaa")
      document.getElementById('board').innerHTML +=
        `<div class="hex-expanded" style="${css}" id="tile-${id}")>
                  <div class="circle-expanded" id="circle-${id}">
                  </div>
              </div>`
    }
  }

}

// This method is called when the button is pressed.
// This is how the DOM interacts with the JS part.
let generateBoard = () => {
  event.preventDefault();
  generateTiles();

}

// This handles the HTML component/displaying of the tiles using the array
// returned by gen().
let generateTiles = () => {

  let tiles;
  do {
    tiles = gen();
  } while (!passedAdjacencyTest(tiles) || !passedResourceCheck(tiles))


  for (let [id, tile] of tiles.entries()) {

    let theTile = document.getElementById(`tile-${id}`);
    let theCircle = document.getElementById(`circle-${id}`);

    //console.log(theTile.classList)


    for (let currentResource of theTile.classList) {
      if (resourceTypes.includes(currentResource)) {
        theTile.classList.remove(currentResource);
        break
      }
    }
    theTile.classList.add(tile.resource);
    theCircle.innerHTML = `<h2>${tile.chit}</h2>`

    if (tile.chit == 8 || tile.chit == 6) {
      theTile.classList.add("high-prob")
    } else {
      theTile.classList.remove("high-prob")
      //theTile.style.color = "black";
    }

    if (tile.resource == "desert") {
      theCircle.classList.add("desert-chit")
    } else {
      theCircle.classList.remove("desert-chit")
      theCircle.innerHTML += `<h3>${tile.probability}</h3>`
    }
  }
}

// These functions are called initially upon loading the page for the first time.
// buildBoard() creates the HTML hexagon & chit elements for the board.
// generateTiles() handles the displaying of the resources and numbers.
getAdjList(mode);
buildBoard(mode);
generateTiles();



// theTile.style.backgroundImage = `url(./assets/${tile.resource}.png)`;

//  document.getElementById(`tile-${id}`).classList.add(tile.resource);

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
