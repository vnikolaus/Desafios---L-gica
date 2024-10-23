/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
const maxSatisfied = (customers, grumpy, minutes) => {
    let firstSum = 0
    customers.forEach((c, i) => {
        if (grumpy[i] === 0) firstSum += c
    })
    let secondSum = 0, maxSum = 0
    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 1) secondSum += customers[i]
        if (i >= minutes && grumpy[i - minutes] === 1) secondSum -= customers[i - minutes]
        maxSum = Math.max(maxSum, secondSum)
    }
    return firstSum + maxSum
}


const customers = [4,10,10], grumpy = [1,1,0], minutes = 2 // TODO
// const customers = [8,8], grumpy = [1,0], minutes = 2
// const customers = [1], grumpy = [0], minutes = 1
// const customers = [1,0,1,2,1,1,7,5]
// const grumpy =    [0,1,0,1,0,1,0,1], minutes = 3
// const customers = [5,8], grumpy = [0,1], minutes = 2
// const customers = [2,6,9,6], grumpy = [0,0,1,1], minutes = 2
// maxSatisfied(customers, grumpy, minutes)
console.log("maxSatisfied(customers, grumpy, minutes): ", maxSatisfied(customers, grumpy, minutes));
