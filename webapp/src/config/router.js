import Vue from 'vue';
import Router from 'vue-router';

import Search from '@/pages/search/Search';
import Upcoming from '@/pages/upcoming/Upcoming';
import Movie from '@/pages/movie/Movie';
import ErrorPage from '@/pages/error/ErrorPage';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Upcoming',
      component: Upcoming,
      alias: '/upcoming'
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }, {
      path: '/movie/:id',
      name: 'Movie',
      component: Movie
    },
    {
      path: '*',
      name: 'Error',
      component: ErrorPage
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
});

export default router;
