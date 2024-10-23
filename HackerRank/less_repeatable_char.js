const str = 'abababcabababab'
const checkLessRepeatableChar = (string) => {
    let obj = {}
    for (const char of string) {
        obj[char] = (obj[char] + 1 || 1)
    }
    const lessRepeatable = Math.min(...Object.values(obj))
    if (lessRepeatable === 1) return Object.keys(obj).find(key => obj[key] === lessRepeatable)
    return '_'
}
console.log("checkLessRepeatableChar", checkLessRepeatableChar(str));