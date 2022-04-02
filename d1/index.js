import Vue from 'vue'
import App from './components1/App.vue'
let vm = new Vue({
    render(h) {
        return h(App)
    }
}).$mount('#app')
