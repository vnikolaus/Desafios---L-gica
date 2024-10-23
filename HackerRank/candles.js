const arr = [4,4,1,3]

birthdayCakeCandles(arr)


function birthdayCakeCandles(candles) {
    const biggerNum = Math.max(...candles)
    const filter = candles.filter(el => el === biggerNum)
    console.log(filter.length);
}