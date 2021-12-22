<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Test v-model:description.capitalize="myText"/>
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test'

export default {
  name: 'App',
  components: {
    Test
  },
  data() {
    return {
      myText: ''
    }
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
