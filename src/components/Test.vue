<template>
  <input
      type="text"
      :value="description"
      @input="emitValue">
</template>

<script>
export default {
  name: "Test",
  props: ['description', 'descriptionModifiers'],
  emits: ['update:description'],
  data() {
    return {}
  },
  methods: {
    emitValue(e) {
      // let value = e.target.value
      // value = value.charAt(0).toUpperCase() + value.slice(1)
      console.log(e.target.value, typeof e.target.value)
      this.$emit('update:description', e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
    }
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

