const stringList = ['ab', 'ab', 'abc' ];
const queries = [ 'ab', 'abc', 'bc' ];

let arrResult = []
queries.forEach((qry, i) => {
    arrResult[i] = 0
})

for (const string of stringList) {
    for (let i = 0; i < queries.length; i++) {
        if (string === queries[i]) arrResult[i]++
    }
}

console.log(arrResult);