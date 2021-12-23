/** instanceof 运算符用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上 */
export function myInstanceof(left, right) {
    if (typeof left !== 'object' || left === null) { return false }
    let leftProto = Object.getPrototypeOf(left)
    // eslint-disable-next-line no-constant-condition
    while (true) {
        if (leftProto === null) { return false }
        if (leftProto === right.prototype) { return true }
        leftProto = Object.getPrototypeOf(leftProto)
    }
}