import tokenService from './tokenService';

export function addNew(data) {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      },
      body: JSON.stringify(data)
    };
    return fetch('http://localhost:3001/api/posts', options)
      .then(res => res.json());
  }

  export function getAll() {
      const options = {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
          }
      };
      return fetch('http://localhost:3001/api/posts', options)
        .then(res => res.json());
  }