const arr = [ -4, 3, -9, 0, 4, 1 ]

plusMinus(arr)

function plusMinus(arr) {
    let n1 = 0, n2 = 0, n3 = 0
    for (let i of arr) {
        i < 0 ? n1++ : i === 0 ? n2++ : n3++
    }

    const v1 =(n1 / arr.length).toFixed(6)
    console.log("v1: ", v1);
    const v2 =(n2 / arr.length).toFixed(6)
    console.log("v2: ", v2);
    const v3 =(n3 / arr.length).toFixed(6)
    console.log("v3: ", v3);
}