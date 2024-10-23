function designerPdfViewer(h, word) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let obj = {}
    for (const char of word) {
        const charIndex = alphabet.indexOf(char)
        obj[char] = (obj[char] ?? h[charIndex])       
    }

    const higherValue = Math.max(...Object.values(obj))
    const result = higherValue * word.length
    return result
}

const h = [1 ,3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7]

// designerPdfViewer(h, 'zaba')
console.log("designerPdfViewer(h, 'zaba'): ", designerPdfViewer(h, 'zaba'));