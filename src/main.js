import Vue from 'vue'
import App from './App.vue'
import DropdownMenu from 'v-dropdown-menu'
import DropdownMenu from "v-dropdown-menu/vue2"
Vue.use(DropdownMenu);
const app = createApp(App)
app.use(DropdownMenu)
app.mount('#app')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
