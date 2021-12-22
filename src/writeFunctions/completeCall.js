Function.prototype.call = function (context = 'window', ...argArray) {
    if (typeof this !== 'function') {
        throw new TypeError('Type Error')
    }

    const fn = Symbol('fn')
    context[fn] = this

    const res = context[fn](...argArray)
    delete context[fn]
    return res
}