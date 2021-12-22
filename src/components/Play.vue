<template>
  <div id="cd" />
</template>

<script>
import { createApp } from 'vue'
createApp({
  el: '#cd',
  data: function () {
    return {
      message: 'Hello Vue!'
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}).mount('#cd')
</script>


<style scoped>

</style>