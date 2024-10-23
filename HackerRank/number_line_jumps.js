function kangaroo(x1, v1, x2, v2) {
    let kang1 = x1, kang2 = x2, index = 0
    while (index < 1e4) {
        kang1 += v1 
        kang2 += v2
        if (kang1 === kang2) return 'YES'
        index++
    }
    return 'NO'
}

// const x1 = 0, v1 = 3, x2 = 4, v2 = 2
// const x1 = 55, v1 = 8223, x2 = 5803, v2 = 6509
const x1 = 56233, v1 = 17673, x2 = 3214, v2 = 22112
// kangaroo(x1,v1,x2,v2)
console.log("kangaroo(x1,v1,x2,v2): ", kangaroo(x1,v1,x2,v2));