const s = '12:45:54PM'
// const s = '14:00:00PM'

timeConversion(s)
console.log("timeConversion(s): ", timeConversion(s));

function timeConversion(s) {
    const param =  String(s.slice(-2))
    const param2 = String(s)
    s = s.replace(/[a-zA-Z]/g, '')

    if (param === 'AM' && param2.startsWith('12')) {
        const halfHour =  s.split(':')
        halfHour[0] = '00'
        return halfHour.join(':')
    }

    if (param === 'AM') return s
    
    s = s.split(':')

    s[0] = +s[0] === 12 ? +s[0] : +s[0] + 12
    s = s.join(':')
    return s
}