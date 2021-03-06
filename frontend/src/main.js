import Vue from "vue";
import App from "./App.vue";
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'

Vue.config.productionTip = false;

new Vue({
	vuetify,
	router,
	Vuelidate,
	render: (h) => h(App)
}).$mount("#app");
