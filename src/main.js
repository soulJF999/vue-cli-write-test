import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue'
import router from './router'
import store from './vuex'

createApp(App).use(router).use(store).mount('#app')
