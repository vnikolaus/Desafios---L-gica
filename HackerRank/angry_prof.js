const limit = 3
const presentStudents = [ -1, -3, 4, 2 ]

const cancelClass = (limit, present) => {
    const checkStudents = present.filter(p => p <= 0)
    if (checkStudents.length >= limit) return 'NO'
    return 'YES'
}

// startClass(students, limit, presentStudents)
console.log("startClass(students, limit, presentStudents): ", cancelClass(limit, presentStudents));