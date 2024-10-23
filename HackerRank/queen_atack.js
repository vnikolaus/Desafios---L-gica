function queensAttack(len, qtyObstacles, rowQueen, columnQueen, arrayObstacles) {
    rowQueen = rowQueen -1
    columnQueen = columnQueen -1
    let attackQueen = 0
    const regex = /[a-z0-9]/i
    const board = Array.from(Array(len), () => new Array(len).fill(''))
    board[rowQueen][columnQueen] = 'Q'
    if (qtyObstacles > 0) {
        for (let i = 0; i < qtyObstacles; i++) {
            const row = arrayObstacles[0][i] -1
            const col = arrayObstacles[1][i] -1
            board[row][col] = 'X'
        }
    }

    let indexRowQueen = rowQueen
    let indexColQueen = columnQueen
    let tempRow1 = indexRowQueen -1, checkRow1 = indexRowQueen -1
    let tempCol1 = indexColQueen -1, checkCol1 = indexColQueen -1
    for (let i = tempRow1; i >= 0; i--) {
        if (regex.test(board[checkRow1--][checkCol1--])) break
        board[tempRow1--][tempCol1--] = 'A'
        attackQueen++
    }

    let tempRow2 = indexRowQueen -1, checkRow2 = indexRowQueen -1
    let tempCol2 = indexColQueen +1, checkCol2 = indexColQueen +1
    for (let i = tempRow2; i >= 0; i--) {
        if (regex.test(board[checkRow2--][checkCol2++])) break
        board[tempRow2--][tempCol2++] = 'A'
        attackQueen++
    }

    let tempRow3 = indexRowQueen +1, checkRow3 = indexRowQueen +1
    let tempCol3 = indexColQueen -1, checkCol3 = indexColQueen -1
    for (let i = tempRow3; i < board.length; i++) {
        if (regex.test(board[checkRow3++][checkCol3--]) || tempRow3 > board.length) break
        board[tempRow3++][tempCol3--] = 'A'
        attackQueen++
    }

    let tempRow4 = indexRowQueen +1, checkRow4 = indexRowQueen +1
    let tempCol4 = indexColQueen +1, checkCol4 = indexColQueen +1
    console.log("tempCol4: ", tempCol4);
    for (let i = tempRow4; i <= board.length -1; i++) {
        if (regex.test(board[checkRow4++][checkCol4++]) || tempRow4 > board.length) break
        board[tempRow4++][tempCol4++] = 'A'
        attackQueen++
    }

    let tempRow5 = indexRowQueen -1, checkRow5 = indexRowQueen -1
    for (let i = tempRow5; i >= 0; i--) {
        if (regex.test(board[checkRow5--][indexColQueen]) || tempRow5 < 0) break
        board[tempRow5--][indexColQueen] = 'A'
        attackQueen++
    }

    let tempRow6 = indexRowQueen +1, checkRow6 = indexRowQueen +1
    for (let i = tempRow6; i < board.length; i++) {
        if (regex.test(board[checkRow6++][indexColQueen]) || tempRow6 > board.length) break
        board[tempRow6++][indexColQueen] = 'A'
        attackQueen++
    }

    let tempCol7 = indexColQueen -1, checkCol7 = indexColQueen -1
    for (let i = tempCol7; i >= 0; i--) {
        if (regex.test(board[indexRowQueen][checkCol7--])) break
        board[indexRowQueen][tempCol7--] = 'A'
        attackQueen++
    }

    let tempCol8 = indexColQueen +1, checkCol8 = indexColQueen +1
    for (let i = tempCol8; i < board.length; i++) {
        if (regex.test(board[indexRowQueen][checkCol8++])) break
        board[indexRowQueen][tempCol8++] = 'A'
        attackQueen++
    }

    console.log(board);
    console.log("attackQueen: ", attackQueen);
    return attackQueen
}

// queensAttack(4,1,4,4,[[3],[2]])
// queensAttack(5,3,4,3,[[5,4,2],[5,2,3]])
queensAttack(6,5,1,1,[[3,2,5,2,4],[1,4,5,4,3]])
// queensAttack(12,5,5,5,[[5,3,7,2,2],[9,8,7,4,1]])