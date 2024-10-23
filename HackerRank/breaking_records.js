// const scores = [10,5,20,20,4,5,2,25,1]
const scores = [3,4,21,36,10,28,35,5,24,42]
// const scores = [12,24,10,24]

function breakingRecords(scores) {
    const set = new Set(scores)
    let compareHigher = scores[0], compareLower = scores[0]
    let higherPontuation = 0, lowerPontuation = 0
    for (const result of set) {
        if (compareHigher < result) {
            higherPontuation++
            compareHigher = result
        }
        if (compareLower > result) {
            lowerPontuation++
            compareLower = result
        }
    }
    console.log(higherPontuation, lowerPontuation);
    return [higherPontuation, lowerPontuation]
}

breakingRecords(scores)