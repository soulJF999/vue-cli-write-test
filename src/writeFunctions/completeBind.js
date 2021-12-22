Function.prototype.bind = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('Type Error')
    }

    var self = this

    return function F() {
        if (this instanceof F) {
            return new self(...args, ...arguments)
        }
        return self.apply(context, [...args, ...arguments])
    }
}