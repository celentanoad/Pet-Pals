import tokenService from './tokenService';

const BASE_URL = '/api/users';


export function signup(user) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(user)
    })
    .then(res => {
      if (res.ok) return res.json();
      // Probably a duplicate email
      throw new Error('Email already taken!');
    })
    // Parameter destructuring!
    .then(({token}) => tokenService.setToken(token));
    // The above could have been written as
    //.then((token) => token.token);
  }

  export function getUser() {
    return tokenService.getUserFromToken();
  }