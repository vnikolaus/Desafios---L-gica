const h1 = [3, 2, 1, 1, 1]
const h2 = [4, 3, 2]
const h3 = [1, 1, 4, 1]

// equalStacks(h1, h2, h3)
console.log("equalStacks(h1, h2, h3): ", equalStacks(h1, h2, h3));

function equalStacks(h1, h2, h3) {
    const [ one1 ] = h1
    const [ one2 ] = h2
    const [ one, two ] = h3
    
    const s1 = h1.reduce((sum, n) => {return sum += n}, 0) - one1
    const s2 = h2.reduce((sum, n) => {return sum += n}, 0) - one2
    const s3 = h3.reduce((sum, n) => {return sum += n}, 0) - one - two

    return s1
}