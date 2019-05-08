import { injectable, inject } from 'inversify';
import * as request from 'superagent';
import { TYPES } from '../util/ioc-types';
import { ServiceConfig, QueryRequest, ResponseMoviesUpcoming, ResponseMovieDetails, Languages, HashParams } from '../model';
import Cache from '../util/cache';
import { query } from 'winston';

@injectable()
export class MovieDB {
  constructor(
    @inject(TYPES.TheMovieDBConfig)
    private movieDBConfig: ServiceConfig,
    @inject(TYPES.Cache)
    private cache: Cache,
  ) {}

  async getUpComing(options: QueryRequest){
    options.language = options.language || Languages.ENG_US;
    options.page = options.page || 1;
    const hashkey = this.createHashKey({ language: options.language, page: options.page });
    if(await this.cache.hasKey(hashkey)){
      const cacheValue = await this.cache.getItem(hashkey);
      return <ResponseMoviesUpcoming>cacheValue;
    }
    const response = await request
    .get(`${this.movieDBConfig.url}/movie/upcoming`)
    .query({ api_key: this.movieDBConfig.token })
    .query({ language: options.language })
    .query({ page: options.page });

    this.cache.save(hashkey, response.body);
    return <ResponseMoviesUpcoming>response.body;
  }

  async getMovieDetails(id:string, options: QueryRequest){
    options.language = options.language || Languages.ENG_US;
    const hashkey = this.createHashKey({ movieId: id, language: options.language });
    if(await this.cache.hasKey(hashkey)){
      const cacheValue = await this.cache.getItem(hashkey);
      return <ResponseMovieDetails>cacheValue;
    }
    const response = await request
    .get(`${this.movieDBConfig.url}/movie/${id}`)
    .query({ api_key: this.movieDBConfig.token })
    .query({ language: options.language });

    this.cache.save(hashkey, response.body);
    return <ResponseMovieDetails>response.body;
  }

  async searchMovie(options: QueryRequest){
    if(!options.query) throw new Error('No query informed');
    options.page = options.page || 1;
    options.language = options.language || Languages.ENG_US;
    const hashkey = this.createHashKey({ query: options.query, page: options.page, language: options.language });
    if(await this.cache.hasKey(hashkey)){
      const cacheValue = await this.cache.getItem(hashkey);
      return <ResponseMovieDetails>cacheValue;
    }
    const response = await request
    .get(`${this.movieDBConfig.url}/search/movie`)
    .query({ api_key: this.movieDBConfig.token })
    .query({ language: options.language })
    .query({ page: options.page })
    .query({ query: options.query });

    this.cache.save(hashkey, response.body);
    return <ResponseMovieDetails>response.body;
  }


  private createHashKey(hashParams: HashParams){
    const { movieId, query, language, page } = hashParams;
    if(movieId) return `${movieId}-${language}-movie/details`;
    if(query) return `${query}-${page}-${language}-movie/search`;
    return `${page}-${language}-movie/upcoming`;
  }
}
