/** 原理就是监听页面滚动事件，分析clientHeight、scrollHeight、scrollTop三者的关系 */
window.addEventListener('scroll', () => {
    const clientHeight = document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight

    if (clientHeight + scrollTop >= scrollHeight) {
        /** 检测到滚动至页面底部， 进行后续操作 */
        console.log('hi')
    }
}, {capture :false})