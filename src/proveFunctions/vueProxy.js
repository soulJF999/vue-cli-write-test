const dinner = {
    meal: 'tacos'
}

const handler = {
    get(target, property, receiver) {
        /** 检查当前运行的是哪个副作用，并将其与target和property记录在一起 */
        track(target, property)
        return Reflect.get(...arguments)
    },
    set(target, property, receiver) {
        trigger(target, property)
        return Reflect.get(...arguments)
    }
}

const proxy = new Proxy(dinner, handler)
console.log(proxy.meal)

const track = (target, property) => {
    console.log(target, property)
}

const trigger = (target, property) => {
    console.log(target, property)
}