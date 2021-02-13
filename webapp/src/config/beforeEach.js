import { getToken } from '@/services/storage';

const beforeEach = (to, from, next) => {
  const token = getToken();
  const routeName = to.name;

  if (routeName !== 'Login' && !token) {
    next('/');
    return;
  }

  if (routeName === 'Login' && token) {
    next('/dashboard');
    return;
  }

  next();
};

export default beforeEach;
