import { API_BASE_URL } from '../app-config';
const ACCESS_TOKEN = 'ACCESS_TOKEN';

export function call(api, method, request) {
  let headers = { 'Content-Type': 'application/json' };
  // 로컬 스토리지에서 ACCESS_TOKEN 가져오기
  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  if (accessToken && accessToken !== null) {
    headers.Authorization = `Bearer ${accessToken}`;
    // alert(JSON.stringify(headers));
  }

  let options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };

  if (request) {
    // GET method
    options.body = JSON.stringify(request);
    // alert(JSON.stringify(options));
  }

  return fetch(options.url, options)
    .then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          // response.ok가 true이면 정상적인 응답을 받은 것이고 아니면 에러 응답을 받은 것임
          return Promise.reject(json);
        }
        return json;
      })
    )
    .catch((error) => {
      console.log(error);
      if (error.status === 403) {
        window.location.href = '/login'; //redirect
      }
      return Promise.reject(error);
    });
}

export function signin(userDTO) {
  return call('/api/accounts/login/', 'POST', userDTO).then((response) => {
    if (response.access_token) {
      // 로컬 스토리지에 토큰 저장
      localStorage.setItem('ACCESS_TOKEN', response.access_token);
      return Promise.resolve(response);
      // token이 존재하는 경우 메인화면으로 리디렉트
      //window.location.href = '/';
      //alert('로그인 토큰: ' + response.acess_token);
    }
  });
}

export function signup(userDTO) {
  return call('/api/accounts/registration/', 'POST', userDTO);
}

export function signout() {
  return call('/api/accounts/logout/', 'POST').then((response) => {
    localStorage.removeItem(ACCESS_TOKEN);
    window.location.href = '/login';
  });
}
