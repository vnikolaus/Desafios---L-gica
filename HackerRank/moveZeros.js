{
    const arr = [2,1,0,1,0,0,0,0,0,3,12]
    // const arr = [2,0,0,1,5,0,12]

    
    /**
     * @param {Array<number>} arr 
     */
    function moveZeros(arr) {
        // let left = 0
        // let right = 0
        // while (right < arr.length) {
        //     if (arr[right] !== 0) { // se o numero atual (right) for diferente de zero, pega o indice do primeiro zero (left) e inverte os valores do array entre as posições em questão;
        //         [arr[left], arr[right]] = [arr[right], arr[left]]
        //         left++
        //     }
        //     right++
        // }

        // metodo 2
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] === 0) {
                    arr[i] = arr[j];
                    arr[j] = 0;
                }
            }
        }

        // metodo 3
        // let i = 0;
        // let count = 0;
        // while (count < arr.length) {
        //     if (arr[i] === 0) {
        //         arr.push(...arr.splice(i, 1));
        //     } else {
        //         i++;
        //     }
        //     count++;
        // }
    }

    moveZeros(arr)
    console.log("arr: ", arr);
}