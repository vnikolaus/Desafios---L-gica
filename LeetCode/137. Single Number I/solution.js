const singleNumber = (nums) => {
    let number = 0
    for (const n of nums) {
        number ^= n // ^= XOR -> compara os valores binarios e retorna 1 se a comparação for diferente, 0 se for igual
    }
    return number
};

singleNumber([2,2,3])

// 00000000 -> 0
// 00000010 -> 2
// 00000010 => retorno 2

// 00000010 -> 2
// 00000010 -> 2
// 00000000 => retorno 0

// 00000000 -> 0
// 00000011 -> 3
// 00000011 => retorno 3