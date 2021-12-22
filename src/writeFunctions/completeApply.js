Function.prototype.apply = function (context = 'window', argArray) {
    /** typeof 操作符返回一个字符串，表示未经计算的操作数的类型
     * Function 对象返回值是function
     * NaN 返回值是number
     * 其他对象返回值是对象
     */

    /** instanceof 用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上
     * object instanceof constructor
     */
    if (typeof context !== 'function') {
        throw new TypeError('Type Error')
    }

    const fn = Symbol('fn')
    context[fn] = this

    const res = context[fn](...argArray)
    delete context[fn]
    return res
}