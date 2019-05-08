import 'reflect-metadata';
import {} from 'inversify';
import 'dotenv/config';

console.log(process.env.REDIS_HOST);
require('./server');
