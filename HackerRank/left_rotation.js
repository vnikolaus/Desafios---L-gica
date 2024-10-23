const arr = [1,2,3,4,5]

function rotateArray(d = 1, arr) {
    let start = 0
    while (start < d) {
        const firstItem = arr.splice(0,1)
        arr.push(...firstItem)
        start++
    }

    return arr
}

// rotateArray(arr)
console.log("rotateArray(arr): ", rotateArray(4, arr));