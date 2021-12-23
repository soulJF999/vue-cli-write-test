/**
 * 模拟实现Promise
 * Promise利用三大手段解决回调地狱
 * 1.回调函数延迟绑定
 * 2.返回值穿透
 * 3.错误冒泡
 */

/** 定义三种状态 */
/** 进行中 */
const PENDING = 'PENDING'
/** 已成功 */
const FULFILLED = 'FULFILLED'
/** 已失败 */
const REJECTED = 'REJECTED'

// eslint-disable-next-line no-unused-vars
class Promise {
    constructor(executor) {
        /** 初始化状态 */
        this.status = PENDING
        /** 将成功、失败结果放在this上，便于then、catch访问 */
        this.value = undefined
        this.reason = undefined
        /** 成功态回调函数队列 */
        this.onFulFilledCallbacks = []
        /** 失败态回调函数队列 */
        this.onRejectedCallbacks = []

        const resolve = value => {
            /** 只有进行中状态才能更改状态 */
            if (this.status === PENDING) {
                this.status = FULFILLED
                this.value = value
                /** 成功态函数依次执行 */
                this.onFulFilledCallbacks.forEach(fn => fn(this.value))
            }
        }

        const reject = reason => {
            /** 只有进行中状态才能更改状态 */
            if (this.status === PENDING) {
                this.status = REJECTED
                this.reason = reason
                /** 失败态函数依次执行 */
                this.onRejectedCallbacks.forEach(fn => fn(this.reason))
            }
        }
        try {
            /** 立即执行executor
             * 把内部的resolve和reject传入executor，用户可调用resolve和reject
             */
            executor(resolve, reject)
        } catch (e) {
            /** executor执行出错，将错误内容reject出去 */
            reject(e)
        }
    }

    then(onFulFilled, onRejected) {
        onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw new Error(reason instanceof Error ? reason.message : reason) }
        /** 保存this */
        const self = this
        return new Promise((resolve, reject) => {
            if (self.status === PENDING) {
                self.onFulFilledCallbacks.push(() => {
                    /** try捕获错误 */
                    try {
                        /** 模拟微任务 */
                        setTimeout(() => {
                            const result = onFulFilled(self.value)
                            /**
                             * 分两种情况
                             * 1.回调函数返回值是Promise，执行then操作
                             * 2.如果不是Promise，调用新Promise的resolve函数
                             */
                            result instanceof Promise ? result.then(resolve, reject) : resolve(result)
                        })
                    } catch (e) {
                        reject(e)
                    }
                })
                self.onRejectedCallbacks.push(() => {
                    /** 以下同理 */
                    try {
                        setTimeout(() => {
                            const result = onRejected(self.reason)
                            result instanceof Promise ? result.then(resolve, reject) : resolve(result)
                        })
                    } catch (e) {
                        reject(e)
                    }
                })
            } else if (self.status === FULFILLED) {
                try {
                    setTimeout(() => {
                        const result = onFulFilled(self.value)
                        result instanceof Promise ? result.then(resolve, reject) : resolve(result)
                    })
                } catch (e) {
                    reject(e)
                }
            } else if (self.status === REJECTED) {
                try {
                    setTimeout(() => {
                        const result = onRejected(self.reason)
                        result instanceof Promise ? result.then(resolve, reject) : resolve(result)
                    })
                } catch (e) {
                    reject(e)
                }
            }
        })
    }

    catch(onRejected) {
        return this.then(null, onRejected)
    }

    static resolve(value) {
        if (value instanceof Promise) {
            /** 如果是Promise实例，直接返回 */
            return value
        } else {
            return new Promise((resolve) => resolve(value))
        }
    }

    static reject(reason) {
        return new Promise((resolve, reject) => reject(reason))
    }

    /** Promise.all是支持链式调用的，本质上就是返回了一个Promise实例，通过resolve和reject来改变实例状态 */
    static all(promiseArr) {
        const len = promiseArr.length
        const arr = new Array(len)
        let count = 0
        return new Promise((resolve, reject) => {
            for (let i = 0; i < len; i++) {
                Promise.resolve(promiseArr[i]).then(val => {
                    arr[i] = val
                    count ++
                    if (count === len) {
                        resolve(arr)
                    }
                }, err => {
                    reject(err)
                })
            }
        })
    }

    static race(promiseArr) {
        return new Promise((resolve, reject) => {
            promiseArr.forEach(p => {
                Promise.resolve(p).then(val => resolve(val), err => reject(err))
            })
        })
    }
}