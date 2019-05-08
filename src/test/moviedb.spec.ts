import 'mocha';

import { Container } from 'inversify';
import * as chai from 'chai';
import { expect } from 'chai';
import * as sinon from 'sinon';
import * as nock from 'nock';
import 'chai-http';
import chaiAsPromised = require('chai-as-promised');
import * as moment from 'moment';
import createApp from '../lib/app';
import bootstrap from '../lib/bootstrap';
import { ServiceConfig } from '../lib/model';
import { TYPES } from '../lib/util/ioc-types';
import { HttpStatus } from '../lib/util/http-status';
import { mockUpcomingResponse, mockSearchByNameResponse, mockMovieDetails } from './mocks/mock-responses';
import Cache from '../lib/util/cache';

chai.use(chaiAsPromised);
chai.use(require('chai-http'));

describe('MovieDB', async () => {
  let movieConfig: ServiceConfig;
  let container:any;
  let app: any;

  before(async () => {
    container = await bootstrap();
    app = await createApp(container);
  });

  beforeEach(async () => {
    movieConfig = container.get(TYPES.TheMovieDBConfig);
    const cache:Cache = container.get(TYPES.Cache);
    await cache.clean();
  });

  it('should get upcoming movies', async () => {
    nock(movieConfig.url)
      .get('/movie/upcoming')
      .query({ api_key: movieConfig.token })
      .query({ language: 'en-US' })
      .query({ page: 1 })
      .reply(HttpStatus.OK, mockUpcomingResponse());

    const { status, body } = await chai
      .request(app)
      .get('/movies/upcoming')
      .query({ page: 1 });
    expect(status).to.be.eq(200);
    expect(body.total_results).to.be.eq(2);
    expect(body.total_pages).to.be.eq(1);
  });

  it('should search movie by name', async () => {
    nock(movieConfig.url)
      .get('/search/movie')
      .query({ api_key: movieConfig.token })
      .query({ language: 'en-US' })
      .query({ page: 1 })
      .query({ query: 'war' })
      .reply(HttpStatus.OK, mockSearchByNameResponse());

    const { status, body } = await chai
      .request(app)
      .get('/movies/search')
      .query({ language: 'en-US' })
      .query({ page: 1 })
      .query({ query: 'war' });
    expect(status).to.be.eq(200);
    expect(body.total_results).to.be.eq(3);
    expect(body.total_pages).to.be.eq(1);
  });

  it('should get movie details', async () => {
    nock(movieConfig.url)
      .get('/movie/283552')
      .query({ api_key: movieConfig.token })
      .query({ language: 'en-US' })
      .reply(HttpStatus.OK, mockMovieDetails());

    const { status, body } = await chai
      .request(app)
      .get('/movies/283552')
      .query({ page: 1 });
    expect(status).to.be.eq(200);
    expect(body.original_title).to.be.eq('The Light Between Oceans');
  });
});
