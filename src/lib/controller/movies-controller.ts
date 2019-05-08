import {
  interfaces,
  controller,
  httpPost,
  requestBody,
  httpGet,
  requestParam,
  queryParam,
} from 'inversify-express-utils';
import { MovieDB } from '../service/moviedb';

@controller('/movies')
export class MoviesController implements interfaces.Controller {

  constructor(
    private movieDB: MovieDB,
  ) {}

  @httpGet('/upcoming')
  async upcoming(@queryParam('language') language: string, @queryParam('page') page: number) {
    return this.movieDB.getUpComing({ language, page });
  }

  @httpGet('/search')
  async search(@queryParam('query') query: string, @queryParam('language') language: string, @queryParam('page') page: number) {
    return this.movieDB.searchMovie({ query, language, page });
  }

  @httpGet('/:movieId')
  async movieDetails(@requestParam('movieId') movieId: string, @queryParam('language') language: string) {
    return this.movieDB.getMovieDetails(movieId, { language });
  }
}
