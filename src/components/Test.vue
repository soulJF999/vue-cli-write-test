<template>
 <section>
   <div id="a"></div>
 </section>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {}
  },
  methods: {
    dispatcher() {
      class EventEmitter {
        constructor() {
          this._events = {}
        }
        on(eventName, callback) {
          const callbacks = this._events[eventName] || []
          callbacks.push(callback)
          this._events[eventName] = callbacks
        }
        emit(eventName, ...args) {
          const events = this._events[eventName] || []
          events.forEach(cb => cb(...args))
        }
        off(eventName, callback) {
          const callbacks = this._events[eventName] || []
          const newCallbacks = callbacks.filter(fn => fn !== callback)
          this._events[eventName] = newCallbacks
        }
      }
      const a = new EventEmitter()
      a.on('hi', () => console.log('123456'))
    }
  },
  mounted() {
    const eDiv = document.getElementById("a")
    eDiv.classList.add("s1")
    // eDiv.classList.add("s2")
  }
}
</script>

<style scoped lang="scss">
.outer {
  width: 200px;
  display: flex;
  justify-content: space-around;
}
.inner {
  display: inline-block;
}
.s1 {
  width: 1px;
  height: 100px;
  transition: width 1s;
  background-color: black;
}

.s1:hover {
  width: 100px;
}
</style>

