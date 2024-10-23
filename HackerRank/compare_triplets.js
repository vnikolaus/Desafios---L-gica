const a = [5,6,7]
const b = [3,6,10]

// compareTriplets(a,b)
console.log("compareTriplets(a,b): ", compareTriplets(a,b));


function compareTriplets(a, b) {
    let p1 = 0, p2 = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) continue
        
        a[i] > b[i] ? p1++ : p2++
    }
    return [p1,p2]
}