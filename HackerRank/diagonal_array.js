const arr = [
    [-1, 3, 0, 5, -4],
    [2, -1, 0, 2, -8],
    [9, -2, -5, 6, 0],
    [9, -7, 4, 8, -2],
    [3, 7, 8, -5, 0]
]

const arr2 = [
    [6 ,8],
    [-6, 9]
]
// diagonalDifference(arr2)
console.log("diagonalDifference(arr2): ", diagonalDifference(arr));

function diagonalDifference(arr) {
    let k = 1
    let v = 0
    let n1 = 0, n2 = 0
    for (let i = 0; i < arr.length; i++) {
        const len = arr[i].length
        n1 += arr[i][len - k++];
        n2 += arr[i][(len - len) + v++];
    }
    return Math.abs(n1 - n2)
}