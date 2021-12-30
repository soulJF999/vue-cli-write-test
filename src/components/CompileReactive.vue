<template>
  <div>
    <span>{{ count }}</span>
    <button @click="count ++">Increment count</button>
    <button @click="nested.count.value ++">Nested Increment count</button>
    <button @click="haveFun">play some vuex + {{ count }}</button>
    <span>{{ comeHandler.books[0] }}</span>
    <span>{{ comeHandler.books[0].value }}</span>
    <CompileReactiveChild :count="count" />
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from "vue"
import CompileReactiveChild from "./CompileReactiveChild"
// import { mapState } from 'vuex'

export default defineComponent({
  components: { CompileReactiveChild },
  setup() {
    const count = ref(0)
    const state = reactive({
      count
    })

    const comeHandler = reactive({
      books: [ref('hey jude')]
    })

    console.log(state.count) // 0

    state.count = 1
    console.log(count.value) // 1

    const otherCount = ref(2)

    state.count = otherCount
    console.log(state.count) // 2
    console.log(count.value) // 1

    const books = reactive([ref('hey Jude')])
    console.log(books[0].value, books[0])

    const mapBooks = reactive(new Map([['hey', 123]]))
    console.log(mapBooks.get('hey').value, mapBooks, mapBooks.get('hey'))

    return {
      count,
      nested: {
        count
      },
      comeHandler
    }
  },
  methods: {
    haveFun () {
      this.$store.dispatch('incrementRootStateAndState')
      this.$store.dispatch('increment')
    }
  },
  computed: {
    // ...mapState(['moduleA/count'])
  }
})
</script>

<style scoped>

</style>