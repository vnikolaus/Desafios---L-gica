{
    function sortArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    const temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                    continue
                }
            }
        }
    }

    const arr = [7,5,1,3,17,14,8,2,4,6,9,12,15,20]
    sortArray(arr)
    console.log("arr: ", arr);
}