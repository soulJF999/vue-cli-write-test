/** 触发高频时间n秒内函数只会执行一次，如果n秒内高频时间再次触发，则重新计算时间
 * 防抖常应用于用户进行搜索输入节约请求资源，window触发resize事件时进行防抖只触发一次
 */
export const debounce = (fn, time) => {
    let timeout = null
    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, arguments)
        }, time)
    }
}