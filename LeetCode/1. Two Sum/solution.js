const nums = [11,15,2,7], target = 9

const twoSum = (nums, target) => {
    const map = new Map()
    const output = new Array(2)
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) { // se já existir o numero necessario para a soma do target, encerra a operação
            output[0] = map.get(nums[i])
            output[1] = i
        } else {
            const sum = target - nums[i] // calcula qual numero é necessario na soma entre nums[i] + ? para o resultar ser o target
            map.set(sum, i)
        }
    }
    return output
};

twoSum(nums, target)