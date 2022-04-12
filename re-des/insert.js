state = {
    numArray: [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12],
    regNums: [, 3, 4, 5, 9, 10, 11],
    expandednumArray: [2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12],
    resourceArray: ["ore", "ore", "ore", "brick", "brick", "brick", "sheep"
        , "sheep", "sheep", "sheep", "wood", "wood", "wood", "wood",
        "wheat", "wheat", "wheat", "wheat",],
    expandedresourceArray: ["ore", "ore", "ore", "ore", "ore", "brick", "brick", "brick", "brick", "brick", "sheep"
        , "sheep", "sheep", "sheep", "sheep", "sheep", "wood", "wood", "wood", "wood", "wood", "wood",
        "wheat", "wheat", "wheat", "wheat", "wheat", "wheat"],
    prob: ["", "", ".", "..", "...", "....", ".....", "", ".....", "....", "...", "..", ".",]
}

let normalSize = 18
let expandedSize = 16

let resourceTypes = ["ore", "sheep", "brick", "wood", "wheat", "desert"];

// adjacencyList, given a tile number, lists tiles adjacent to that tile. Used for rule checking.
let adjacencyList;

// Variable size corresponds to the size of the hexagons in the CSS file.
let size;
// Determine the mode using the pick mode selector, set corresponding value for size.
let mode = document.getElementById('pick-mode').value;
if (mode == "normal") {
    size = normalSize;
} else {
    size = expandedSize;
}

//let shuftype = document.getElementById('pick-shuffle').value;
let shuftype = 'random';

//Generation boolean default values

let adjacent_6_8 = false
let adjacent_2_12 = true
let adjacent_same_numbers = true
let adjacent_same_resource = true


let settingAdjusted = false


let setMenuValues = () => {
    document.getElementById('adjacent_6_8_input').checked = adjacent_6_8
    document.getElementById('adjacent_2_12_input').checked = adjacent_2_12
    document.getElementById('adjacent_same_numbers_input').checked = adjacent_same_numbers
    document.getElementById('adjacent_same_resource_input').checked = adjacent_same_resource

}

// This is matches each tile to its corresponding offset depending on the mode.
// Used by the buildTiles function.
let tileOffsetCSS = getOffsets(size, mode);

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


let selectShuffle = () => {
    shuftype = document.getElementById('pick-shuffle').value;
    console.log(shuftype)
    start()
}


// This function is used to grab the value of the mode from the selector and perform the corresponding changes.
// The value of size is changed, the adjacency list is retrieved, and the offsets are retrieved.
// The changed board is then built and generated.
let selectMode = () => {
    mode = document.getElementById('pick-mode').value;
    if (mode == "normal") {
        size = normalSize

    } else {
        size = expandedSize;
    }
    flipSameResourceSetting()
    tileOffsetCSS = getOffsets(size, mode);
    start()
}

let toggleSetting = (setting) => {

    settingAdjusted = true

    switch (setting) {
        case "6_8":
            adjacent_6_8 = document.getElementById('adjacent_6_8_input').checked
            break;
        case "2_12":
            adjacent_2_12 = document.getElementById('adjacent_2_12_input').checked
            break;
        case "same_number":
            adjacent_same_numbers = document.getElementById('adjacent_same_numbers_input').checked
            break;
        case "same_resource":
            adjacent_same_resource = document.getElementById('adjacent_same_resource_input').checked
            break;

    }
}


// Checks over each number in the randomized number array.
// If a number is a 6 or an 8, check its adjacencies.
// If there is a 6 or 8 in its adjacencies, return true, AKA there are adjacencies present.
// If it goes through whole array and does not encounter adjacent 6 and 8s, return false,
// AKA there are no adjacencies present.
let passedAdjacencyTest = (tilesArr, num1, num2) => {
    for (let [boardLocation, tile] of tilesArr.entries()) {
        if (tile.chit == num1 || tile.chit == num2) {
            for (adj of adjacencyList[boardLocation]) {
                if (tilesArr[adj].chit == num1 || tilesArr[adj].chit == num2) return false
            }
        }
    }
    return true
}



let passedBalancedCheck = (tilesArr) => {
    return true
}

// Checks over each tile in the board and checks if any two of its adjacent tiles are of the same resource.
// If 2 or more are of the same resource, the board fails the resource check. Otherwise, it passes.
let passedResourceCheck = (tilesArr, limit) => {
    for (let [boardLocation, tile] of tilesArr.entries()) {
        let resource = tile.resource
        let count = 1;
        for (adj of adjacencyList[boardLocation]) {
            if (resource == tilesArr[adj].resource) {
                count++
            }
        }
        if (count > limit) return false
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

    document.getElementById('board').innerHTML = `<div class="${mode}BorderCommon border-${mode}"></div>`

    for (let [id, css] of tileOffsetCSS.entries()) {
        document.getElementById('board').innerHTML +=
            `<div class="hex-${mode} hex-base" style="${css}" id="tile-${id}")>
                  <div class="circle-${mode} circle-base font-size-wrap" id="circle-${id}">
                  </div>
              </div>`
    }
}

// This function ties together the results of generateTileContent() and buildTiles().
// In other words, it populates the HTML created by buildTiles() with the content
// created by generateTileContent().


let shuffleIsValid = (tiles) => {

    let validShuffle = true

    //the expansion pack can not use this setting
    if (adjacent_same_resource || mode != "normal") {
        validShuffle &&= passedResourceCheck(tiles, 2)
    } else {
        validShuffle &&= passedResourceCheck(tiles, 1)
    }




    console.log(adjacent_6_8)

    if (!adjacent_6_8) {
        validShuffle &&= passedAdjacencyTest(tiles, 6, 8)
        if (!validShuffle) return false
    }

    if (!adjacent_2_12) {
        validShuffle &&= passedAdjacencyTest(tiles, 2, 12)
    }

    if (!adjacent_same_numbers) {
        for (let num of state.regNums) {
            validShuffle &&= passedAdjacencyTest(tiles, num, num)
            if (!validShuffle) return false
        }
        //validShuffle &&= passedAdjacencyTest(tiles, 2, 12)
    }



    //let manditoryRules = !passedAdjacencyTest(tiles, 6, 8) || !passedResourceCheck(tiles))
    return validShuffle




    // if (shuftype == "random") {
    //     return manditoryRules
    // } else if (shuftype == "fair") {
    //     return manditoryRules
    // }
    // else if (shuftype == "balanced") {
    //     return manditoryRules || !passed
    // }

}


let fillTiles = () => {
    let tiles;
    do {
        tiles = generateTileContent();
    } while (!shuffleIsValid(tiles))

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
        theTile.setAttribute("alt", tile.resource)
        theCircle.innerHTML = `<div class="tile-chit-${mode} chit-number-base">${tile.chit}</div>`


        if (tile.chit == 8 || tile.chit == 6) {
            theTile.classList.add("high-prob")
        } else {
            theTile.classList.remove("high-prob")
        }

        if (tile.resource == "desert") {
            theCircle.classList.add("desert-chit")
        } else {
            theCircle.classList.remove("desert-chit")
            theCircle.innerHTML += `<div class="prob-dots-base small-font-size-wrap">${tile.probability}<div/>`
        }
    }
}

// This method is called when the button is pressed.
// This is how the DOM interacts with the JS part.
let generateBoard = () => {
    event.preventDefault();
    fillTiles();
}


let flipSameResourceSetting = () => {
    let sameResource = document.getElementById("sameResourceSetting").classList
    if (mode == "normal") {
        sameResource.remove("settingViewToggle")
    } else {
        sameResource.add("settingViewToggle")
    }
}

let toggleOptions = () => {

    let optionsMenu = document.getElementById("popmenu").classList
    // let sameResouceToggle = document.getElementById("popmenu").classList
    let optionsButton = document.getElementById("btnOps")



    flipSameResourceSetting()






    if (optionsMenu.contains("menuToggle")) {
        //THIS OPENS THE MENU
        optionsMenu.remove("menuToggle")
        optionsButton.innerHTML = "Close Options"




        setMenuValues()

    } else {
        optionsMenu.add("menuToggle")
        optionsButton.innerHTML = "Options"

        if (settingAdjusted) {
            settingAdjusted = false
            generateBoard()
        }

    }
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
