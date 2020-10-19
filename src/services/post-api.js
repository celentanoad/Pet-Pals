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
    return fetch('/api/posts', options)
      .then(res => res.json());
  }

  export function getAll() {
      const options = {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
          }
      };
      return fetch('/api/posts', options)
        .then(res => res.json());
  }

  export function likePost(id) {
      // PUT to api/posts/like/:id
      const options = {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + tokenService.getToken()
        },
      };
      return fetch('/api/posts/like/' + id, options)
        .then(res => res.json());
  }

  export function addComment(comment, id) {
      const options = {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
          },
          body: JSON.stringify(comment)
      };
      return fetch(`/api/posts/comment/${id}`, options)
        .then(res => res.json());
  }