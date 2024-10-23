
function getMoneySpent(keyboards, drives, b) {
    let budget = -1
    keyboards.forEach(keyboard => {
        for (const drive of drives) {
            if ((keyboard + drive) <= b && (keyboard + drive) > budget) {
                budget = keyboard + drive
                continue
            }
        }
    })
    return budget
}

// getMoneySpent([40,50,60], [5,8,12], 60)
console.log("getMoneySpent([40,50,60], [5,8,12], 60): ", getMoneySpent([40,50,60], [5,8,12], 60));
