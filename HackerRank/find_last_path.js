const paths = [['London', 'New York'],['New York', 'Lima'],['Lima', 'São Paulo']]
function solution(paths) {
    const output = {}
    for (const path of paths) {
        path.forEach(local => output[local] = (output[local] + 1) || 1)
    }
    const lastKey = Object.keys(output).at(-1)
    return lastKey
}
// solution(paths)
console.log("solution(paths): ", solution(paths));