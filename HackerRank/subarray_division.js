function birthday(s, d, m) {
    const counter = 0
    const possibilities = sumArray(s, d, m, counter)
    return possibilities
}

function sumArray(arr, result, len, counter) {
    if (arr.length < len) return counter
    const sum = arr.slice(0, len).reduce((add, value) => { 
        return add += value
    }, 0)
    if (sum === result) counter++
    arr.shift()
    return sumArray(arr, result, len, counter)
}

const s = [2,2,1,3,2]
const d = 4
const m = 2
// birthday(s,d,m)
console.log("birthday(s,d,m): ", birthday(s,d,m));
