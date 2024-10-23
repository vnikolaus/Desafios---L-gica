const grid = [
    ["1","1","1","1","0","0"],
    ["1","1","0","1","0","0"],
    ["1","1","0","0","0","0"],
    ["0","0","0","0","1","1"],
    ["0","0","0","0","1","0"]
]

/**
 * @param {Array<[]>} grid
 * @return {number}
 */
const numIslands = (grid) => {
    if (!grid) return
    const rows = grid.length, cols = grid[0].length
    const visited = {}
    let islands = 0
    const dfs = (row, col) => {
        if (Reflect.has(visited, [row,col]) || row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === '0') return
        Reflect.set(visited, [row,col], null)
        dfs(row+1, col)
        dfs(row-1, col)
        dfs(row, col+1)
        dfs(row, col-1)

    }
    let [r,c] = [0,0]
    for (;;) {
        if (r >= rows || c >= cols) break
        if (grid[r][c] === '1' && !([r,c] in visited)) {
            dfs(r,c)
            islands += 1
        }
        ((c + 1) === cols && r < rows) ? [r++, c&=0] : c++
    }
    return islands
};

// numIslands(grid)
console.log("numIslands(grid): ", numIslands(grid));