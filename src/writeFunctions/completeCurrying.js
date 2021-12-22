/**
 * 柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
 */

let curry = function (fn) {
    /** [].slice.call(arguments)能将具有length属性的对象转成数组 */
    let args = [].slice.call(arguments, 1)
    console.log('first-level', arguments)
    return function () {
        console.log('second-level', arguments)
        let newArgs = args.concat([].slice.call(arguments))
        return fn.apply(this, newArgs)
    }
}

function add(a, b) {
    return a + b
}

let addCurry = curry(add, 1, 2)
addCurry()

export const maxCurry = function (fn, args) {
    let length = fn.length

    args = args || []

    console.log(new Date(), 'level1', args, length, fn)

    return function () {
        let _args = args.slice(0)
        let arg
        let i
        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i]
            _args.push(arg)
        }
        console.log(new Date(), 'level2', _args, arguments)
        if (_args.length < length) {
            return maxCurry.call(this, fn, _args)
        } else {
            return fn.apply(this, _args)
        }
    }
}