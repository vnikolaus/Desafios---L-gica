const nums = [3,2,4], alvo = 6
/**
 * 
 * @param {Array<number>} nums 
 * @param {number} target 
 */
function sumTwo(nums, target) {
    let arr = []
    let push = false
    for (const n1 of nums) {
        for (const n2 of nums) {
            if (n1 === n2) continue
            if (n1 + n2 === target) {
                arr.push(nums.indexOf(n1), nums.indexOf(n2))
                push = true
                break
            }
        }
        if (push) break
    }
    return arr
}

// teste(nums, alvo)
console.log("sumTwo ", sumTwo(nums, alvo));