import Vue from 'vue';
import App from './App.vue';
import "./assets/Style.css";
import router from "@/router";
import VueRouter from 'vue-router'

Vue.config.productionTip = false;
Vue.use(VueRouter);
const app = new Vue({
  router,
  render: h => h(App),
});

app.$mount('#app');
