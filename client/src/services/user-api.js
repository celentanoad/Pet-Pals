import tokenService from './tokenService';

const BASE_URL = 'http://localhost:3001/api/users';


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

  export function login(creds) {
    return fetch('http://localhost:3001/api/auth', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(creds)
    })
    .then(res => {
      // Valid login if we have a status of 2xx (res.ok)
      if (res.ok) return res.json();
      throw new Error('Bad Credentials!');
    })
    .then(({token}) => tokenService.setToken(token));
  }

  export function logout() {
    tokenService.removeToken();
  }

  export function getUser() {
    let id = tokenService.getUserFromToken();
    return fetch(`http://localhost:3001/api/auth/${id.id}`, {
      method: 'GET'
    })
    .then(res => res.json())
  }