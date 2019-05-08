import axios from 'axios';
import config from '../config/settings';

const http = axios.create({
  baseURL: `${config.tracker_api}/`,
  headers: {
    'Content-Type': 'application/json'
  }
});

const events = {
  start: 100,
  propose: 200,
  review: 300,
  conclusion: 400
};

const tracker = async (data, eventType) => {
  const payload = {
    ...data,
    event: events[eventType]
  };
  await http.post('hits', payload);
};

export default tracker;
