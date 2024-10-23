function pageCount(n, p) {
    const calcPagesFirstPage = p - 1
    const calcPagesLastPage = n - p
    const loop = Math.min(calcPagesFirstPage, calcPagesLastPage)
    if (loop === calcPagesLastPage) {
        const pages = getLastPages(n)
        let firstPage = pages[0], secondPage = pages[1], pages2 = 0
        for (let i = 0; i < loop; i++) {
            if (firstPage === p || secondPage === p) break
            [ firstPage, secondPage ] = [ (firstPage -2), (secondPage -2) ]
            pages2++
        }
        return pages2
    }
    if (loop === calcPagesFirstPage) {
        let page1 = 0, page2 = 1, pages1 = 0
        for (let i = 0; i < loop; i++) {
            if (page1 === p || page2 === p) break
            [ firstPage, secondPage ] = [ (firstPage +2), (secondPage +2) ]
            pages1++
        }
        return pages1
    }
}

function getLastPages(page) {
    let firstPage = 0, secondPage = 1, turns = 0, lastPages = []
    while (turns < page) {
        if (firstPage === page || secondPage === page) {
            lastPages = [firstPage, secondPage]
            break
        }
        [ firstPage, secondPage ] = [ firstPage +2, secondPage +2 ]
        turns++
    }
    return lastPages
}

// pageCount(6,2)
// console.log("pageCount(6,2): ", pageCount(7,4));
console.log("pageCount(6,2): ", pageCount(37455,29835));