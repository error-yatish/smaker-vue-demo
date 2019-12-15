import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import SandwichesModule from './sandwiches';
import IngredientsModule from './ingredients';

Vue.use(Vuex);

export default new Store({
  modules: {
    SandwichesModule,
    IngredientsModule,
  },
});
