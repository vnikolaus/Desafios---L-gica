const n = 9
const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]

const salesMatch = (n, arr) => {
    let obj = {}
    let totalPairs = 0
    arr.forEach(color => obj[color] = (obj[color] +1 || 1))
    const pairs = Object.values(obj).filter(value => value >= 2)
    for (const par of pairs) {
        const sum = Math.floor(par / 2)
        totalPairs += sum
    }
    return totalPairs
}

// salesMatch(n, arr)
console.log("salesMatch(n, arr): ", salesMatch(n, arr));