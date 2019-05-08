<template>
  <div id="page">
    <loading :active.sync="isLoading"></loading>

    <b-container align="center">
      <div class="wrapper">
        <div class="heading">
          <h2>{{movie.original_title}}</h2>
        </div>
        <div class="content">
          <b-row class="block" v-if="movie">
            <b-col cols="3">
              <img :src="`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`">
            </b-col>
            <b-col cols="9">
              <p>
                <strong>Release Date:</strong>
                {{movie.release_date}}
              </p>
              <p>{{movie.overview}}</p>
              <p>
                <strong>Genres:</strong>
                {{(movie.genres || []).map( g => g.name ).join()}}
              </p>
              <p v-if="movie.budget">
                <strong>Budget:</strong>
                {{movie.budget}}
              </p>
              <p>
                <strong>Rate:</strong>
                {{movie.vote_average}}
              </p>
              <p v-if="movie.homepage">
                <strong>
                  <a target="_blank" :href="movie.homepage">Go to movie oficial page</a>
                </strong>
              </p>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import moment from 'moment';
import Loading from 'vue-loading-overlay';
import { http } from '../../services/http.js';

export default {
  name: 'Movie',
  components: { Loading },
  data() {
    return {
      isLoading: false,
      movie: {},
    };
  },
  async created() {
    const { id } = this.$route.params;
    this.id = id;
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        this.isLoading = true;
        const { data } = await http.get(`/movies/${this.id}`);
        this.movie = data;

        this.movie.release_date = moment(this.movie.release_date).format('LL');

        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/index.scss';

p {
  text-align: left;
}
#header {
  background-color: #fff;
  padding: 20px 0;
  .logo {
    width: 140px;
  }
}
.wrapper {
  border-radius: 10px;
  overflow: hidden;
  margin: 70px 0;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.05);
  @media (max-width: 768px) {
    border-radius: 0;
  }
}
.heading {
  background: #ff8500;
  padding: 20px;
}

.page-item {
  padding: 1rem;
}

@media (max-width: 768px) {
  #page {
    > .container {
      padding: 0;
    }
  }
}
.content {
  margin: 2rem;
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
}
.logo {
  width: 10rem;
}
h2 {
  font-weight: bolder;
  color: #fff;
  font-size: 28px;
}
.text {
  line-height: 22px;
  font-size: 16px;
  color: #000;
  font-weight: 300;
  span {
    display: block;
  }
}

.btn {
  &-primary {
    background-color: #392c70;
    border-color: #392c70;
    font-size: 12px;
    border-radius: 30px;
    padding: 10px 30px;
    text-transform: uppercase;
  }
}
</style>
