const arr1 = [0, -19, 12]
const arr2 = [3, -1000, -2, -2]
const v = 10
const checkSumArray = (arr1, arr2, v) => {
    for (const value of arr1) {
        const checkSum = arr2.find(value2 => value2 + value === v)
        if (checkSum) return 'É possível'
    }
    return 'Não é possível'
}
// checkSumArray(arr1, arr2, v)
console.log("checkSumArray(arr1, arr2, v): ", checkSumArray(arr1, arr2, v));