function calculeteDate(year) {
    if (year === 1918) return `26.09.${year}`
    if (year === 2000 || year === 2400) return `12.09.${year}`
    if (year < 1918) {
        return (year % 4 === 0) ? `12.09.${year}` : `13.09.${year}`
    }
    if (year > 1918) {
        const leapYear = (year % 4 === 0 && year % 100 !== 0)
        console.log("year % 4: ", year % 4);
        console.log("year % 4: ", year % 400);
        return leapYear ? `12.09.${year}` : `13.09.${year}`
    }
}

// calculeteDate(2016)
console.log("calculeteDate(2016): ", calculeteDate(2000));