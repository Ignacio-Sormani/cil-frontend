const baseURL = 'http://localhost:4000';

const requestHandler = res => {
  return res.json();
};

const errorHandler = err => {
  console.error(err);
  throw err;
};

const fetchi = (url, params) => {
  url = baseURL + url;
  const f = params ? fetch(url, params) : fetch(url);
  return f.then(requestHandler).catch(errorHandler);
};

// Check if the token works this ways and then use it everywhere
// export const get = (url, token = '') => {
export const get = url => {
  const params = {
    method: 'GET'
    // headers: token ? { Authorization: token } : undefined
  };
  return fetchi(url, params);
};

// export const post = (url, data, token = '') => {
export const post = (url, data) => {
  let params = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  // if (token) {
  //   params = {
  //     ...params,
  //     header: {
  //       ...params.header,
  //       Authorizacion: token
  //     }
  //   };
  // }
  return fetchi(url, params);
};

export const patch = (url, data) => {
  const params = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  return fetchi(url, params);
};

export const remove = (url, data) => {
  const params = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  };
  return fetchi(url, params);
};
