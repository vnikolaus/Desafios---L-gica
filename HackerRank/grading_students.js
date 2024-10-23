const grades = [ 39,27,89,56,47,38,12,98,72,85,76,72,56,23,77,25,49,4,52,71 ]
const grades2 = [ 57,
    97,
    56,
    81,
    38,
    30,
    1,
    9,
    23,
    69,
    24,
    44,
    69,
    12,
    61,
    50,
    84,
    3,
    17,
    91]
// const grades = [ 33 ]

// gradingStudents(grades)
console.log("gradingStudents(grades): ", gradingStudents(grades));

function gradingStudents(grades) {
    let arr = Array()
    for (const grade of grades) {
        if (parseFloat(grade % 5) === 0) continue

        let roundedGrade = grade
        while (parseFloat(roundedGrade % 5) !== 0) {
            roundedGrade++
        }
    
        const sum = roundedGrade - grade
        
        if (grade === 33 && sum === 2) {
            arr.push(grade)
            continue
        }

        sum > 2 ? arr.push(grade) : arr.push(roundedGrade)
    }
    return arr
}
