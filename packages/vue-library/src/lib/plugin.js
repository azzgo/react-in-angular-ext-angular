
import ReactVue from './ReactVue.vue'


export default {
  name: "VueLibrary",
  install(Vue) {
    Vue.component(ReactVue.name, ReactVue);
  }
}
