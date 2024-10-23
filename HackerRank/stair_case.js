function staircase(n) {
    let arr = Array.from(Array(n), () => new Array())
    let k = 1
    for (let i = 0; i < n; i++) {
        arr[n - k] = '#'
        arr[n - k++] = '#'
        const str = arr.toString().replace(/(,#)/g, '$#').replace(/,/g, ' ').replace('$', ' ').replace(/[$]/g, '').replace('# #', '##');
        console.log(str);
    }
}

staircase(6)