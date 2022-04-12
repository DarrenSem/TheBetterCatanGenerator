// This function calculates the offsets of each hex.
function getOffsets(size, mode) {

    let small_side = (size * 0.866);
    let long_side = size;
    let tiles = [];

    let board_config = (mode) => {
        switch (mode) {
            case "normal":
                board.tiles_per_row = [3, 4, 5, 4, 3]
                board.row_step = long_side * .73 //was 76
                board.center_row = Math.floor(board.tiles_per_row.length / 2)
                board.cell_step = small_side * .99
                break;
            case "expanded":
                board.tiles_per_row = [1, 2, 3, 4, 3, 4, 3, 4, 3, 2, 1]
                board.center_row = Math.floor(board.tiles_per_row.length / 2)
                board.cell_step = long_side * 1.51 * .99
                board.row_step = small_side / 1.99
                break;
            case "seafarers":
                break;
        }
        return board
    }

    let build_row = (row, board) => {
        //row_level is row adjusted for the origin of the board
        row_level = row - Number(board.center_row)
        y_coordinate = 50 + (row_level * board.row_step)

        //cell adjustments
        x_is_even_shift = (row % 2) * board.cell_step / 2
        x_first_cell_shift = Math.floor(board.tiles_per_row[row] / 2) * (board.cell_step)

        //places cells into a row from left to right
        for (let cell = 0; cell < board.tiles_per_row[row]; cell++) {
            x_coordinate = 50 - x_first_cell_shift + x_is_even_shift + (cell * board.cell_step)
            tiles.push(`left:${x_coordinate}%;top:${y_coordinate}%`)
        }
    }

    board = board_config(mode)
    for (let row = 0; row < board.tiles_per_row.length; row++) {
        build_row(row, board)
    }
    return tiles;
}