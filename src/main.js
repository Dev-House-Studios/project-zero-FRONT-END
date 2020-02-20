import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

export const SocketInstance = io('http://api.project-zero.devhousestudios.com.br/')

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketInstance, // options object is Optional
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
})
)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
