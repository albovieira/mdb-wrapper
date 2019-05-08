import { Container } from 'inversify';
import * as Redis from 'ioredis';
import * as winston from 'winston';

import { TYPES } from './util/ioc-types';
import './controller/movies-controller';
import { ServiceConfig } from './model';
import Cache from './util/cache';

const DECIMAL_RADIX = 10;
const { MDB_BASE_URI , MDB_TOKEN, MDB_TIMEOUT } = process.env;

function getMDBConfig(): ServiceConfig {
  return {
    url: MDB_BASE_URI || '',
    token: MDB_TOKEN || '',
    timeout: MDB_TIMEOUT || '',
  };
}

export default async function(): Promise<Container> {
  const container = new Container({ autoBindInjectable: true });

  const logger = winston.createLogger({ level: 'verbose', exitOnError: false });
  const format = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
  );
  logger.add(new winston.transports.Console({ format, handleExceptions: true }));
  container.bind<winston.Logger>(TYPES.Logger).toConstantValue(logger);

  const cache = new Cache();
  container.bind(TYPES.Cache).toConstantValue(cache);

  container
    .bind(TYPES.CacheTtl)
    .toConstantValue(
      Number.parseInt(process.env.CACHE_TTL! || '60', DECIMAL_RADIX),
    );

  container
    .bind(TYPES.TheMovieDBConfig)
    .toConstantValue(getMDBConfig());

  return container;
}
