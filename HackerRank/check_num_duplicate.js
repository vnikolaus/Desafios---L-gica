{
    // O(N)
    const arr = [1,2,3,4,11,4]
    function verifyDuplicate(arr) {
        const s = new Set()
        for (const n of arr) {
            if (s.has(n)) return true
            else s.add(n)
        }
        return false
    }
    // verifyDuplicate(arr)
    console.log("verifyDuplicate(arr): ", verifyDuplicate(arr));
}