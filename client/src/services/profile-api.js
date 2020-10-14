import tokenService from './tokenService';

const BASE_URL = '/api/profiles';

export function getAll() {
  const options = {
    method: 'GET'
  };
  return fetch(BASE_URL, options).then(res => res.json());
}