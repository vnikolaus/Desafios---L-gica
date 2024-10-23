const arr = [[1,2,3,4],[4,3,2,1],[3,1,4,2],[2,4,1,3]]
function solution(arr) {
    const n = []
    for (let i = 1; i <= arr[0].length; i++) {
        n.push(i)
    }
    for (const num of n) {
        for (const array of arr) {
            if (!array.find(el => el === num)) return false
        }
    }
    return true
}
// solution(arr)
console.log("solution(arr): ", solution(arr));