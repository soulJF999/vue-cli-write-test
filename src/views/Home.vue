<template>
  <div class="home">
    <slot-show :items="testArr">
      <template #header>
        <button>123</button>
      </template>
      <template #default="{ item, bbc = 'aaa' }">
        <div>{{ item }}</div>
        <div>{{ bbc }}</div>
      </template>
      <template #footer>
        <button>789</button>
      </template>
    </slot-show>
  </div>
</template>

<script>
// @ is an alias to /src
import SlotShow from "../components/SlotShow";

export default {
  name: 'Home',
  components: {
    SlotShow
  },
  data () {
    return {
      item: {
        name: 1
      },
      testArr: ['爱情公寓', '圣诞节', '奇奇怪怪']
    }
  }
}
</script>
