<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <button v-on:click="reverseMessage">反转消息</button>
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <Test />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test'

export default {
  name: 'App',
  components: {
    Test
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
}
</style>
