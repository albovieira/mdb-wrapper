<template>
  <div class="content">
    <b-row class="block">
      <b-col v-for="(movie, index) in movies" :key="index">
        <b-card
          :img-src="`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`"
          img-left
          class="mb-3"
        >
          <b-card-text>
            <p>
              <strong>{{ movie.original_title }}</strong>
            </p>
            <p>
              <strong>Rate:</strong>
              {{movie.vote_average}}
            </p>
            <p>
              <strong>Release Date:</strong>
              {{movie.release_date}}
            </p>
          </b-card-text>
          <b-button :to="`/movie/${movie.id}`" variant="primary">More Info</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import { http } from '../services/http.js';

export default {
  name: 'MovieList',
  components: { Loading },
  props: ['movies'],
  created() {},
};
</script>

<style lang='scss' scoped>
@import '../assets/scss/index.scss';
</style>
