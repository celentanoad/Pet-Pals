import tokenService from "./tokenService";

const BASE_URL = '/api/profiles';


export function getUserProfile(id) {
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
  return fetch('http://localhost:3001/api/profiles/myprofile', options, {mode: "cors"})
  .then(res => res.json())
}