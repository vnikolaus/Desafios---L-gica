function arrayManipulation(n, queries) {
    // Write your code here
    const array = new Array(n).fill(0)

    queries.forEach(qry => {
        array[qry[0] - 1] += qry[2]
        array[qry[1]] += -qry[2]
    })

    for (let i = 1; i < n; i++) {
        array[i] += array[i - 1]
    }

    const [ result ] = array.sort((a, b) => b - a)
    
    return result
}

const n = 10
const queries = [
    [1,5,3],
    [4,8,7],
    [6,9,1]
]
// arrayManipulation(n, queries)
console.log("arrayManipulation(n, queries): ", arrayManipulation(n, queries));