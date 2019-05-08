import { injectable, inject } from 'inversify';
import * as Redis from 'ioredis';
import { TYPES } from '../util/ioc-types';

@injectable()
export default class Cache {
  private redis: Redis.Redis;
  private cacheTTL:number;
  constructor() {
    const DECIMAL_RADIX = 10;
    const REDIS_PORT = Number.parseInt(process.env.REDIS_PORT!, DECIMAL_RADIX);
    const REDIS_DB = Number.parseInt(process.env.REDIS_DB! || '0', DECIMAL_RADIX);

    this.redis = new Redis(REDIS_PORT || 6379 , process.env.REDIS_HOST, {
      db: REDIS_DB || 0,
      keyPrefix: 'mdb:',
      lazyConnect: true,
      maxRetriesPerRequest: 0,
    });
    this.cacheTTL = Number(process.env.REDIS_CACHE_TTL);
  }

  async getItem(key: string) {
    const item = await this.redis.get(key);
    return item ? JSON.parse(item) : null;
  }

  async hasKey(key:string) {
    return this.redis.exists(key);
  }

  async save(key: string, object: any) {
    return this.redis.setex(
      `${key}`,
      this.cacheTTL,
      JSON.stringify(object || {}),
    );
  }

  async clean() {
    return this.redis.flushdb();
  }
}
