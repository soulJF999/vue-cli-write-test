<template>
  <ul>
    <li v-for="(item ,index) in items" :key="index">
      <slot :item="item" :index="index"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SlotShow",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>