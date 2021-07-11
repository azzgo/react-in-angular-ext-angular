import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Form from "./components/Form.vue";
import ReactVuePlugin from './lib/plugin';

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/home", component: Home },
    { path: "/form", component: Form }
  ]
});

Vue.use(VueRouter);
Vue.use(ReactVuePlugin);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
