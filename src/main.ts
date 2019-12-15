import Vue from 'vue';
import App from './App.vue';
import store from './store/';
import BootstrapVue from 'bootstrap-vue';
import UUID from 'vue-uuid';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './custom.css';

Vue.use(BootstrapVue);
Vue.use(UUID);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
