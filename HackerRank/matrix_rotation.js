// function matrixRotation(matrix, r) {  
//   // METODO RESTO DA DIVISAO
//   const copy_arr = [];
//   let height = matrix.length - 1, width = matrix[0].length - 1;
//   for (let i = 0; i < matrix.length; i++) {
//     copy_arr[i] = [...matrix[i]];
//   }
//   let start_row = 0, start_col = 0
//   while(height > 0 && width > 0) {
//     const aroundValues = height * 2 + width * 2
//     const pendingRotation = r % aroundValues;
//     if (pendingRotation > 0) {
//       const end_row = height + start_row
//       const end_col = width + start_row
//       let row = start_row, col = start_col, key = 0
//       const obj = {}
//       while (key < aroundValues) {
//         obj[key] = [row, col]
//         if (row === start_row && col < end_col) col++
//         else if (col === end_col && row < end_row) row++
//         else if (row === end_row && col > start_col) col--
//         else row--
//         key++
//       }
//       const temp_obj = { ...obj }
//       for (let pos = 0; pos < aroundValues; pos++) {
//         const [old_row, old_col] = obj[pos]
//         const newPos = (aroundValues + (pos - pendingRotation)) % aroundValues
//         const [new_row, new_col] = temp_obj[newPos];
//         matrix[new_row][new_col] = copy_arr[old_row][old_col];
//       }
//     }
//     height -= 2
//     width -= 2
//     start_row++
//     start_col++
//   }
//   matrix.forEach((v) => console.log(...v));
// }

const rotation = 3
const arr = [
    [1,   2,   3,   4], 
    [5,   6,   7,   8], 
    [9,   10,  11,  12], 
    [13,  14,  15,  16]
]

// const arr = [
//   [ 1 , 2 , 3 , 4],
//   [ 7 , 8 , 9 ,10],
//   [13 ,14 ,15 ,16],
//   [19 ,20 ,21 ,22],
//   [25 ,26 ,27 ,28],
//   [29 ,30 ,31 ,32],
// ]

// const arr = [
//   [1 , 1],
//   [1 , 1],
// ]

// matrixRotation(arr, rotation)

// function matrixRotation2(matrix, r) {
//   let top = 0, left = 0, right = cols -1, bottom = rows-1
//   let p1 = 0, p2 = 0
//   while(p1 < bottom && p2 < right) {
//     const aroundLength = 2 * (right - left + bottom - top);
//     const rotations = r % aroundLength; // calcula a quantidade de giros necessaria, se as rotações forem maior que a length ao redor, não é necessario girar por completo pois iria completar uma volta sempre e realinhar tudo
//     for(let r = 0; r < rotations; r++) {
//       const tempValue = matrix[top][left];
//       while(p2 < right) {
//         matrix[p1][p2] = matrix[p1][p2 + 1]
//         p2++
//       }
//       while(p1 < bottom) {
//         matrix[p1][p2] = matrix[p1 + 1][p2]
//         p1++
//       }
//       while(p2 > left) {
//         matrix[p1][p2] = matrix[p1][p2 - 1]
//         p2--
//       }
//       while(p1 > top) {
//         matrix[p1][p2] = matrix[p1 - 1][p2]
//         p1--
//       }       
//       matrix[p1 + 1][p2] = tempValue
//     }
//     ++p1; ++p2; top++; left++; --bottom; --right; 
//   }
// }


// PROPRIA LOGICA
// function matrixRotation3(matrix, r) {
  // let lengthRows = matrix.length -1, lengthCols = matrix[0].length - 1
  // let startRow = 0, startCol = 0
  // while(lengthRows > 0 && lengthCols > 0) {
  //   const aroundLength = (lengthRows * 2) + (lengthCols * 2)
  //   const endRow = lengthRows + startRow, endCol = lengthCols + startCol
  //   let row = startRow, col = startCol
  //   const indexes = {}
  //   for (let i = 0; i < aroundLength; i++) {
  //     indexes[i] = [row, col]
  //     if (row === startRow && col < endCol) col++
  //     else if (col === endCol && row < endRow) row++
  //     else if (row === endRow && col > startCol) col--
  //     else row--
  //   }
  //   const tempArray = Object.keys(indexes).reduce((arr, key) => {
  //     const [row, col] = indexes[key]
  //     arr.push(matrix[row][col])
  //     return arr
  //   }, [])
  //   const rest = r % aroundLength
  //   const rotatedElements = tempArray.splice(0, rest)
  //   tempArray.push(...rotatedElements)
  //   Object.keys(indexes).forEach((key, i) => {
  //     const [row, col] = indexes[key]
  //     matrix[row][col] = tempArray[i]
  //   })
  //   startRow++; startCol++; lengthRows -= 2; lengthCols -= 2
  // }
  // matrix.forEach((value) => console.log(...value));
// }
// matrixRotation3(arr, 5)

function matrixRotation3(grid, k) {
  let lengthRows = grid.length -1, lengthCols = grid[0].length - 1
  let startRow = 0, startCol = 0
  while(lengthRows > 0 && lengthCols > 0) {
    const endRow = lengthRows + startRow, endCol = lengthCols + startCol
    const aroundLength = (lengthRows * 2) + (lengthCols * 2)
    const rotations = k % aroundLength
    const indexes = {}, tempArray = [], rotatedElements = []
    let row = startRow, col = startCol
    for (let i = 0; i < aroundLength; i++) {
      indexes[i] = [row, col]
      if (i >= rotations) {
        tempArray.push(grid[row][col])
      } else {
        rotatedElements.push(grid[row][col])
      }
      if (row === startRow && col < endCol) col++
      else if (col === endCol && row < endRow) row++
      else if (row === endRow && col > startCol) col--
      else row--
    }
    tempArray.push(...rotatedElements)
    tempArray.forEach((el, i) => {
      const [row, col] = indexes[i]
      grid[row][col] = el
    })
    startRow++; startCol++; lengthRows -= 2; lengthCols -= 2
  }
  grid.forEach((value) => console.log(...value));
}
matrixRotation3(arr, 3)