const arr = [1,55,2,400,4,3,67,56,44,57,59]
function longestSequence(arr) {
    // O(N)
    const set = new Set(arr)
    let longest = 1
    for (const n of set) {
        if (!set.has(n - 1)) {
            let next_num = n + 1, len = 1
            while(set.has(next_num)) {
                len++
                next_num++
            }
            longest = Math.max(longest, len) // verifico ele mesmo ou o len para garantir que outras sequencias menores não passem caso o longest receba um valor maior antes
        }
    }
    console.log("longest: ", longest);
    
    // O(N LOG N)
    // arr.sort((a, b) => a - b)
    // const set = new Set(arr)
    // arr = [...set]
    // let count = 1
    // for(let i = 1; i <= arr.length; i++){
    //     if (arr[i] === arr[i-1] + 1) {
    //         count++
    //     }
    // }
    // console.log("count: ", count);
}
longestSequence(arr)