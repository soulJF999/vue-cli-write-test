<template>
  <div>{{ booksHandler.countNum }}</div>
  <div>{{ countNum }}</div>
  <div>{{ booksHandler.countCom }}</div>
</template>

<script>
import {defineComponent, reactive, toRefs, computed, ref, watchEffect} from "vue";

export default defineComponent({
  name: "CompileReactiveChild",
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const propsData = toRefs(props)

    function getCountAdd() {
      return () => {}
    }

    const booksHandler = reactive({
      countNum: props.count,
      countCom: computed(() => propsData.count.value + 1)
    })

    // let { countNum } = booksHandler
    // countNum = 3
    // console.log(booksHandler.countNum)

    let { countNum } = toRefs(booksHandler)
    countNum.value = 4
    console.log(booksHandler.countNum)

    const countForComputed = ref(1)
    const plusOne = computed({
      get: () => countForComputed.value + 1,
      set: val => {
        countForComputed.value = val - 1
      }
    })

    plusOne.value = 1
    console.log(countForComputed.value) // 0

    watchEffect(onInvalidate => {
      const token = getCountAdd()
      console.log('hi', token)
      onInvalidate(() => {
        // id has changed or watcher is stopped.
        // invalidate previously pending async operation
        token.cancel()
      })
    })

    return {
      getCountAdd,
      booksHandler,
      countNum
    }
  }
})
</script>

<style scoped>

</style>