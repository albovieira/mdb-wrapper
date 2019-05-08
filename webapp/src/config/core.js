import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import VueScrollTo from 'vue-scrollto';
import VueClipboard from 'vue-clipboard2';
import VueMask from 'v-mask';

export default {
  inject: () => {
    Vue.use(BootstrapVue);
    Vue.use(VueScrollTo);
    Vue.component('icon', Icon);
    Vue.use(VueClipboard);
    Vue.config.productionTip = false;
    Vue.use(VueMask);
    Vue.filter('toCurrency', (value) => {
      if (typeof value !== 'number') {
        return value;
      }
      const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
      });
      return formatter.format(value);
    });
  }
};
