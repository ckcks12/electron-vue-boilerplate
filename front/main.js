import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './router.js'

Vue.use(VueRouter)
Vue.use(Vuex)
window.Vue = Vue // for debugging

// global component declare
import index from './components/index.vue'
Vue.component('index', index)

// vuex
const store = new Vuex.Store({
	state: {
		num: 0
	}
})

// Apply Vue
const app = new Vue({
	el: '#app',
	router,
	store
})
window.app = app // for debugging