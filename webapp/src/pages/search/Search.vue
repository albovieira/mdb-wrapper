<template>
  <div id="page">
    <loading :active.sync="isLoading"></loading>

    <b-container align="center">
      <div class="wrapper">
        <div class="heading">
          <h2>Search Movies</h2>
          <b-input-group class="mt-3">
            <b-form-input v-model="movieName"></b-form-input>
            <b-input-group-append>
              <b-button @click="fetchData" variant="success">Search</b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
        <div class="content">
          <movie-list :movies="moviesList"></movie-list>
          <b-row v-if="moviesList.length > 0">
            <b-pagination
              @input="fetchData($event)"
              :total-rows="total_results"
              v-model="page"
              :per-page="20"
            ></b-pagination>
          </b-row>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import { http } from '../../services/http.js';
import MovieList from '../../components/MovieList';

export default {
  name: 'Search',
  components: { Loading, MovieList },
  data() {
    return {
      isLoading: false,
      moviesList: [],
      movieName: '',
      page: 1,
      total_results: 0,
      total_pages: 0,
    };
  },
  async created() {},
  methods: {
    async fetchData(newPage) {
      try {
        let page = Number(newPage) || 1;
        this.isLoading = true;
        const { data } = await http.get(
          `/movies/search?page=${page}&query=${this.movieName}`,
        );
        this.moviesList = data.results;
        this.page = data.page;
        this.total_results = data.total_results;
        this.total_pages = data.total_pages;

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
ul.pagination {
  width: 100%;
  justify-content: center;
  li {
    padding: 5px !important;
  }
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
    background-color: #ff8500;
    border-color: #ff8500;
    font-size: 12px;
    border-radius: 30px;
    padding: 10px 30px;
    text-transform: uppercase;
  }
}
</style>
