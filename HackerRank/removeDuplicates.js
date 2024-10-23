{
    const str = 'azyzyzyzxx'
    // const str = 'abbaca'
    // const str = 'aaaaaaaaabbbbcccddz'

    function removeDuplicates(string) {
        //  O(N²)
        // const output = []
        // for (const char of string) {
        //     output.find(el => el === char) ? output.splice(output.indexOf(char), 1) : output.push(char)
        // }
        // return output.join('')


        // O(N)
        let obj = {}, output = []
        for (const char of string) {
            obj[char] = (obj[char] ?? 0) + 1
        }
        const singleValues = Object.values(obj).filter(value => value % 2 !== 0)
        Object.keys(obj).forEach(key => {
            if (singleValues.includes(obj[key])) output.push(key)
        })
        return output.join('')
    }
    console.log("removeDuplicates(str): ", removeDuplicates(str));
}