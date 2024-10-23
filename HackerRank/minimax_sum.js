const arr = [7,69,2,221,8974]

miniMaxSum(arr)
// console.log("miniMaxSum(arr): ", miniMaxSum(arr));

function miniMaxSum(arr) {
    arr = arr.sort((a, b) =>  a - b );
    let v1 = 0, v2 = 0, k = 1
    for (let i = 0; i < arr.length - 1; i++) {
        v1 += arr[i]
    }
    for (let i = arr.length; i > k; i--) {
        v2 += arr[i - 1]
    }
    console.log(v1, v2);
}