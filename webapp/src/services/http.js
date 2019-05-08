import axios from 'axios';
import moment from 'moment';
import config from '../config/settings';
// import { getToken, getInfoByAttr, clearStorage } from './storage';

const http = axios.create({
  baseURL: `${config.api}/`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export {
  http
};
