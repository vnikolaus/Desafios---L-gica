const arr = [
    [512, 2],
    [123, 3],
    [987, 4],
    [123, 5],
]

const solution = (n, ratings) => {
    let obj = {}
    ratings.forEach(el => {
        obj[el[0]] = (obj[el[0]] ?? 0) + el[1] // objeto na chave el[0] recebe o proprio valor de obj[el[0]] ou 0 + a nota na posição [1] do arr
    })
    console.log("obj: ", obj);
    // Object.values / keys  =>  retorna array
    const higherRating = Math.max(...Object.values(obj))  // math max recebe um arr de numbers, object values retorna um array.
    const winnerKey = Object.keys(obj).find(key => obj[key] === higherRating)
    return winnerKey
}