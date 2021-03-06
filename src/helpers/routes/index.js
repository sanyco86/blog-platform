import { stringify, parse } from 'qs'

export const postsPath = (p = {}) => `/${queryString(p)}`;
export const postPath = (id = ':id', p = {}) => `/posts/${id}${queryString(p)}`;
export const likePostPath = (id = ':id') => `/posts/${id}/like`;
export const aboutPath = (p = {}) => '/about';
export const extractParams = (location) => parse(location.search.substr(1));
export const queryString = (params) => {
  const str = stringify(params);
  return str ? `?${str}` : '';
};
