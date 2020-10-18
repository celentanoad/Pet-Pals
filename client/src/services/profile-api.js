import tokenService from "./tokenService";

const BASE_URL = '/api/profiles';


export function getProfile(id) {
  const options = {
    method: 'GET',
    headers: {
      'Authorization' : 'Bearer' + tokenService.getToken()
    }
  };
  return fetch('http://localhost:3001/api/profiles/' + id , options, {mode: "cors"})
  .then(res => res.json())
}

export function getCurrentUserProfile() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization' : 'Bearer' + tokenService.getToken()
    }
  };
  return fetch('http://localhost:3001/api/profiles/myprofile', options)
  .then(res => res.json())
}

export function createOrEditProfile(data) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(data)
  };
  return fetch('http://localhost:3001/api/profiles', options)
    .then(res => res.json());
}

export function addFriend(id) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch('http://localhost:3001/api/profiles/friends/' + id, options)
    .then(res => res.json());
}