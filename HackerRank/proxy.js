const obj = {
    id: 1,
    val: 'value'
}

const proxyObj = new Proxy(obj, {
    set(target, key, value) {
        if (key === 'id' && typeof value !== 'number') {
            throw new Error('Wrong type')
        }
        target[key] = value
    }
})

proxyObj.id = 3
console.log("proxyObj : ", proxyObj);