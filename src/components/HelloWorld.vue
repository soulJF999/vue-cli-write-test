<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <div class="triangle-up" />
    <div class="square-adjust" />
    <div class="square-adjust-2">hello-every-one</div>
    <div class="square-adjust-3" />
    <div>
      <div class="children-with-different-rules" />
      <div class="children-with-different-rules" />
      <div class="children-with-different-rules" />
      <div class="children-with-different-rules" />
      <div class="children-with-different-rules" />
      <div class="children-with-different-rules" />
      <div :class="['children-with-different-rules', true ? 'square-adjust-3' : '']" />
      <!-- 阻止单击事件直接冒泡 -->
      <a @click.stop="doThis"/>
      <!-- 提交事件不再重载页面 -->
      <form @submit.prevent="onSubmit"/>
      <!-- 修饰符可以串联 -->
      <a @click.stop.prevent="doThat" />
      <!-- 只有修饰符 -->
      <form @submit.prevent />
      <!-- 添加事件监听器时使用事件捕获模式 -->
      <!-- 即内部元素触发的事件先在此处理，然后才交由内部元素处理 -->
      <div @click.capture="doThis" />

      <!-- 只当event.target是当前元素自身时触发函数 -->
      <!-- 即事件不是从内部元素触发 -->
      <div @click.self="doThat"></div>

      <!-- 点击事件将只会触发一次 -->
      <a @click.once="doThis"/>

      <!-- 滚动事件的默认行为（即滚动行为）将会立即触发-->
      <!-- 而不会等待`onScroll`完成-->
      <!-- 以防止其中包含`event.preventDefault()`的情况-->
      <div @scroll.passive="onScroll"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.triangle-up {
  width: 0;
  height: 0;
  border-left: solid 10px red;
  border-top: solid 10px transparent;
  border-bottom: solid 10px transparent;
}
.square-adjust {
  background-color: rebeccapurple;
  width: 100%;
  height: 100vw;
}
.square-adjust-2 {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-color: red;
}
.square-adjust-3 {
  width: 100%;
  overflow: hidden;
  background-color: green;
  &:after { display: block; margin-top: 100%; content: '' };
}
.children-with-different-rules {
  width: 20px;
  height: 60px;
  background-color: deeppink;
  margin-top: 10px;
  &:nth-child(-n + 3) {
    margin-top: 20px;
  }
  &:nth-child(4) {
    margin-top: 5px;
  }
}
</style>
