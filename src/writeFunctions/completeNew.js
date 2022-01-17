/**
 * 1.以ctor.prototype为原型创建一个对象
 * 2.执行构造函数并将this绑定到新创建的对象上
 * 3.判断构造函数执行返回结果是否是引用数据类型，若是则返回构造函数执行的结果，否则返回创建的对象
 */
export function newOperator(ctor, ...args) {
    if (typeof ctor !== 'function') {
        throw new TypeError('Type Error')
    }
    const obj = Object.create(ctor.prototype)
    const res = ctor.apply(obj, args)

    const isObject = typeof res === 'object' && res !== null
    const isFunction = typeof res === 'function'
    return (isObject || isFunction) ? res : obj
}

/**
 * 1.创建一个新的对象
 * 2.继承父类原型上的方法
 * 3.添加父类的属性到新的对象上并初始化，保存方法的执行结果
 * 4.如果执行结果有返回值并且是一个对象，返回执行的结果，否则，返回新的对象
 */

function _new(obj, ...args) {
    const newObject = Object.create(obj.prototype)

    const res = newObject.apply(this, ...args)

    /** call 参数列表 apply 参数数组 */

    return typeof res === 'object' ? res : newObject
}