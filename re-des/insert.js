let resourceTypes = ["ore", "sheep", "brick", "wood", "wheat", "desert"];

// adjacencyList, given a tile number, lists tiles adjacent to that tile. Used for rule checking.
let adjacencyList;

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



// Variable size corresponds to the size of the hexagons in the CSS file.
let size;
// Determine the mode using the pick mode selector, set corresponding value for size.
let mode = document.getElementById('pick-mode').value;
if (mode == "normal") {
  size = 17.2;
} else {
  size = 15;
}

// This is matches each tile to its corresponding offset depending on the mode.
// Used by the buildTiles function.
let tileOffsetCSS = getOffsets(size, mode);

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



// This function is used to grab the value of the mode from the selector and perform the corresponding changes.
// The value of size is changed, the adjacency list is retrieved, and the offsets are retrieved.
// The changed board is then built and generated.
let selectMode = () => {
  mode = document.getElementById('pick-mode').value;
  if (mode == "normal") {
    size = 17.2;
  } else {
    size = 15;
  }
  tileOffsetCSS = getOffsets(size, mode);
  start()
}



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



// Checks over each tile in the board and checks if any two of its adjacent tiles are of the same resource.
// If 2 or more are of the same resource, the board fails the resource check. Otherwise, it passes.
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



// This method just creates and returns the array of tiles (tile content)
// that fillTiles() uses to present the tiles to the board in HTML form.
let generateTileContent = () => {
  let randomNumbers;
  let randomResources;

  // Selects appropriate number and resource arrays depending on the board mode.
  if (mode == "normal") {
    randomNumbers = shuffle(this.state.numArray)
    randomResources = shuffle(this.state.resourceArray)
  } else {
    randomNumbers = shuffle(this.state.expandednumArray)
    randomResources = shuffle(this.state.expandedresourceArray)
  }

  // Grabs the array of probability dots corresponding to numbers.
  let probArr = this.state.prob;

  // Initialize the array to hold completed tiles.
  let tiles = []

  // Creates the tiles. Fills in the number, resource, and probability of the object, pushes it to tiles array.
  for (let x in randomNumbers) {
    let tile = Object()
    tile.chit = randomNumbers[x]
    tile.resource = randomResources[x]
    tile.probability = probArr[tile.chit]
    tiles.push(tile)
  }

  // Creates the desert tile (no number, no probability), and adds it to tiles array.
  let desert = Object()
  desert.resource = "desert"
  desert.chit = ""
  desert.probability = ""
  tiles.push(desert)

  // If mode is expanded, add another desert tile.
  if (mode == "expanded") {
    tiles.push(desert)
  }

  // Returns the array of "filled" tile objects.
  return shuffle(tiles)
}



// buildTiles() creates the HTML hexagon & chit elements for the board.
let buildTiles = () => {

  document.getElementById('board').innerHTML = `<div id="border-${mode}"></div>`

  for (let [id, css] of tileOffsetCSS.entries()) {
    document.getElementById('board').innerHTML +=
      `<div class="hex-${mode}" style="${css}" id="tile-${id}")>
                  <div class="circle-${mode}" id="circle-${id}">
                  </div>
              </div>`
  }
}



// This function ties together the results of generateTileContent() and buildTiles().
// In other words, it populates the HTML created by buildTiles() with the content
// created by generateTileContent().
let fillTiles = () => {

  let tiles;
  do {
    tiles = generateTileContent();
  } while (!passedAdjacencyTest(tiles) || !passedResourceCheck(tiles))


  for (let [id, tile] of tiles.entries()) {

    let theTile = document.getElementById(`tile-${id}`);
    let theCircle = document.getElementById(`circle-${id}`);

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
    }

    if (tile.resource == "desert") {
      theCircle.classList.add("desert-chit")
    } else {
      theCircle.classList.remove("desert-chit")
      theCircle.innerHTML += `<h3>${tile.probability}</h3>`
    }
  }
}



// This method is called when the button is pressed.
// This is how the DOM interacts with the JS part.
let generateBoard = () => {
  event.preventDefault();
  fillTiles();
}



// A function called initially and also when mode is switched to start board generation.
let start = () => {
  // These functions are called initially upon loading the page for the first time.
  getAdjList(mode);
  buildTiles(mode);
  fillTiles();
}



// Start the board baby. Called when page is opened, or when mode is changed.
start();

// -----------------------------------------------------------------------------------------------------

// Delete this maybe later, but might need it for mobile, so for now it stays.

// // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
// let vh = window.innerHeight * 0.01;
// // Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener('resize', () => {
//   // We execute the same script as before
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });
