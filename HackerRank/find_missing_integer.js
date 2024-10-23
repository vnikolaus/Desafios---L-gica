    // const arr = [1]
    // const arr = [3,4,-1,1]
    // const arr = [7,8,9,11,12]
    const findSmallestIntegerMissing = (nums) => {
        const filteredData = nums.filter(value => value > 0 && value < nums.length + 1).sort((a,b) => a-b)
        let smallestInteger = 1
        for (let i = 1; i < nums.length + 1; i++) {       
            if (!filteredData.includes(i)) {
                smallestInteger = i
                break
            }
            smallestInteger++  
        }
        return smallestInteger
    };

    // findSmallestInteger(arr)
    // console.log("recursiv(1): ", recursiv(1));
    console.log("findSmallestIntegerMissing", findSmallestIntegerMissing(arr));