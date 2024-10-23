{
    // MAX PROFIT
    function profit(prices) {
        let buy = Number.MAX_VALUE
        let sell = Number.MIN_VALUE
        let left = 0, right = 1
        let profit = 0
        for (const i in prices) {
            if (prices[left] < buy) {
                buy = prices[left]
                sell = Number.MIN_VALUE
            }
            if (prices[right] > sell) {
                sell = prices[right]
            }
            if (buy < sell) {
                profit += sell - buy
                buy = Number.MAX_VALUE
                sell = Number.MIN_VALUE
            }
            left++
            right++
        }
        return profit
    }
    const prices = [2,1,2,0,1]
    const result =  profit(prices);
    console.log("result: ", result);
}