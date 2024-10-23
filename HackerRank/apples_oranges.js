
const s = 7
const t = 10
const a = 4
const b = 12
const apples = [ 2, 3, -4 ]
const oranges = [ 3, -2, -4 ]

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const countApples = apples.reduce((sum, value) => {
        if ((parseInt(value) + a) >= s) sum++
        return sum
    }, 0)
    console.log(countApples);

    const countOranges = oranges.reduce((sum, value) => {
        if ((parseInt(value) + a) >= s) sum++
        return sum
    }, 0)
    console.log(countOranges);
}

countApplesAndOranges(s,t,a,b,apples,oranges)
// console.log("countApplesAndOranges(s,t,a,b,apples,oranges): ", countApplesAndOranges(s,t,a,b,apples,oranges));