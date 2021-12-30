<template>
  <div>
    <input v-model="view" type="radio" value="v-a" id="a"><label for="a">A</label>
    <input v-model="view" type="radio" value="v-b" id="b"><label for="b">A</label>
    <transition mode="out-in" name="component-fade">
      <component :is="view"></component>
    </transition>
    <transition mode="out-in">
      <button :key="docState" @click="changeStatus(docState)">
        {{ buttonMessage }} - {{ count }} - {{ getterPlay }}
      </button>
    </transition>
    <TransitionGroupPlay />
  </div>
</template>

<script>
import TransitionGroupPlay from "../components/TransitionGroupPlay"
import { mapState, mapGetters } from 'vuex'
export default {
  name: "PlayTransition",
  components: {
    TransitionGroupPlay,
    'v-a': {
      template: '<div>v-a</div>'
    },
    'v-b': {
      template: '<div>v-b</div>'
    }
  },
  data () {
    return {
      docState: 'saved',
      view: 'v-a'
    }
  },
  computed: {
    buttonMessage() {
      return this.docState === 'saved' ? 'Save' : 'Edit'
    },
    ...mapState(['count']),
    ...mapGetters(['addCount']),
    getterPlay() {
      return this.addCount
    }
  },
  methods: {
    changeStatus (status) {
      if (status === 'saved') {
        this.docState = 'edit'
        this.$store.commit({ type: 'decrement', count: 10 })
      } else {
        this.$store.commit('increment')
        this.docState = 'saved'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}

.component-fade-leave-to {
  opacity: 0;
}
</style>