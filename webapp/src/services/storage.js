import moment from 'moment';

const setToken = token => {
  return localStorage.setItem('token', token);
};
const getToken = () => {
  return localStorage.getItem('token');
};

const setValidator = validator => {
  return localStorage.setItem('validator', validator);
};
const getValidator = () => {
  return localStorage.getItem('validator');
};

const getCustomerInfo = () => {
  return JSON.parse(localStorage.getItem('customer_info'));
};
const setCustomerInfo = customer => {
  return localStorage.setItem('customer_info', JSON.stringify(customer));
};

const getProposal = () => {
  return JSON.parse(localStorage.getItem('proposal'));
};
const setProposal = proposal => {
  return localStorage.setItem('proposal', JSON.stringify(proposal));
};

const getPlan = () => {
  return JSON.parse(localStorage.getItem('plan'));
};
const setPlan = plan => {
  localStorage.setItem('plan', JSON.stringify(plan));
};

const clearStorage = () => localStorage.clear();

export {
  setToken,
  getToken,
  getCustomerInfo,
  setCustomerInfo,
  getPlan,
  setPlan,
  setValidator,
  getValidator,
  getProposal,
  setProposal
};
