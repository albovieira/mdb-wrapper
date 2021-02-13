<template>
  <div id="page" class="row col-xs-12 col-sm-12 col-md-12 col-lg-12" align="center">
    <b-container>
      <b-row class="block">
        <b-col cols="12">
          <h1>Não encontrado</h1>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { http } from '../../services/http.js';
import Loading from 'vue-loading-overlay';

export default {
  name: 'Error',
  data() {
    return {};
  },
  async created() {
    window.dataLayer.push({
      event: 'VirtualPageview',
      virtualPageURL: '/invalid',
      virtualPageTitle: 'Token Inválido',
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/index.scss';
</style>
