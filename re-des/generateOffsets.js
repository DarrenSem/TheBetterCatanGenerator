// This function calculates the offsets of each hex.
function getOffsets(size, mode) {


    let small_side = (size * 0.866);
    let long_side = size;

    let tile_width = (size * 0.866); //SMALL SIDE
    let tile_height = size;
    let tiles = [];
    let tile_center_x_displacement = tile_width
    let tile_center_y_displacement = long_side * .711

    let buildRow = (x, y, number_of_tiles) => {

        //these translations are from the center of a tile

        offset_y = 50 + (y * tile_center_y_displacement)
        // left_most_tile_x = x * tile_center_x_displacement

        //places tiles into a row from left to right
        for (let i = 0; i < number_of_tiles; i++) {
            offset_x = (i * tile_center_x_displacement)
            tiles.push(`left:${50 - (x * tile_center_x_displacement) + (i * tile_center_x_displacement)}%;top:${offset_y}%`)
        }
    }

    let build_row = (row, board) => {

        //row adjusted for the origin of the board
        row_level = row - Number(board.center_row)

        //CSS
        y_coordinate = 50 + (row_level * board.row_step)
        x_is_even_shift = (row % 2) * board.cell_step / 2
        x_first_cell_shift = Math.floor(board.tiles_per_row[row] / 2) * (board.cell_step)

        //places cells into a row from left to right
        for (let cell = 0; cell < board.tiles_per_row[row]; cell++) {
            console.log("row", row, "cell", cell)
            x_coordinate = 50 - x_first_cell_shift + x_is_even_shift + (cell * board.cell_step)
            tiles.push(`left:${x_coordinate}%;top:${y_coordinate}%`)
        }

    }



    switch (mode) {
        case "normal":


            board.tiles_per_row = [3, 4, 5, 4, 3]
            board.row_step = long_side * .711
            board.center_row = Math.floor(board.tiles_per_row.length / 2)
            board.cell_step = tile_width

            for (let row = 0; row < board.tiles_per_row.length; row++) {
                build_row(row, board)
            }
            // for (let row = 0)
            //row zero (top row), 3 tileswexpanded
            // buildRow(1, -2, 3)

            // //row one, 4 tiles
            // buildRow(1.5, -1, 4)

            // //row two (middle row), 5 tiles
            // buildRow(2, 0, 5)

            // //row three, 4 riles
            // buildRow(1.5, 1, 4)

            // //row four (last row), 3 tiles
            // buildRow(1, 2, 3)

            break;
        case "expanded":

            //the expanded tile is rotated 90 degrees; this flips the height and width deimentions
            tile_height = (size * 0.866); //SMALL SIDE
            tile_width = size
            tile_center_x_displacement = tile_height * 1.578

            tile_center_y_displacement = tile_height



            board.tiles_per_row = [1, 2, 3, 4, 3, 4, 3, 4, 3, 2, 1]
            board.center_row = Math.floor(board.tiles_per_row.length / 2)
            board.cell_step = tile_height * 1.578
            board.row_step = tile_height / 2
            board.tile_center_x_displacement = tile_height * 1.578
            board.half_width = tile_height * 1.578 / 2


            for (let row = 0; row < board.tiles_per_row.length; row++) {
                build_row(row, board)
            }


            // //row one (top row), 1 tile
            // origin_x = 0;
            // buildRow(0, -2.5, 1)

            // //SECOND row
            // origin_x = .75 * tile_width * 1;
            // buildRow(.5, -2, 2)

            // //row 3
            // origin_x = (2 * .75) * tile_width;
            // buildRow(origin_x, -1.5, 3)

            // //row 4
            // origin_x = (3 * .75) * tile_width;
            // buildRow(origin_x, -1, 4)

            // //row 5
            // origin_x = (2 * .75) * tile_width;
            // buildRow(origin_x, -.5, 3)

            // //R0W 6
            // origin_x = (3 * .75) * tile_width;
            // buildRow(origin_x, 0, 4)

            // //row 5
            // origin_x = (2 * .75) * tile_width;
            // buildRow(origin_x, .5, 3)

            // //R0W 7
            // origin_x = (3 * .75) * tile_width;
            // buildRow(origin_x, 1, 4)

            // //row 8
            // origin_x = (2 * .75) * tile_width;
            // buildRow(origin_x, 1.5, 3)

            // //row 9
            // origin_x = (1 * .75) * tile_width;
            // buildRow(origin_x, 2, 2)

            // //row 10, bottom row
            // origin_x = 0;
            // buildRow(origin_x, 2.5, 1)
            break;
        case "seafarers":
            break;
    }
    return tiles;
}
