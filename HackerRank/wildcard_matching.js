const str = "abccd"
const padrao = "?*cd"
/**
 * @param {string} s 
 * @param {string} p 
 * @returns 
 */
const WildcardMatching = (s, p) => {
    let stringIndex = 0, padraoIndex = 0
    let strAsterico = -1, padAsterisco = -1

    while(stringIndex < s.length) {
        if (compareChar(s[stringIndex], p[padraoIndex])) {
            stringIndex++
            padraoIndex++
        } else if (p[padraoIndex] === '*') {
            strAsterico = stringIndex
            padAsterisco = padraoIndex
            padraoIndex++
        } else if (strAsterico !== -1) {
            stringIndex = strAsterico + 1
            padraoIndex = padAsterisco + 1
            strAsterico++
        } else if (stringIndex === 0 && stringIndex < s.length) {
            stringIndex++
            padraoIndex++
        } else {
            return false
        }
    }
    while (padraoIndex < p.length && p[padraoIndex] === '*') {
        padraoIndex++
    }
    return padraoIndex === p.length
}

const compareChar = (s, p) => {
    if (p === '?') return true
    return s === p
}

// isMatch(str, padrao)
console.log("WildcardMatching ", WildcardMatching(str, padrao));