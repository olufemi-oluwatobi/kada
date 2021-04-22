const buildQueryString = queryObject =>
  Object.entries(queryObject)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');

const getDefaultHttpParams = () => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });
  return {headers, credentials: 'same-origin'};
};

export const makeGetRequest = async (requestURL, queryData = {}) => {
  const params = getDefaultHttpParams();

  // SET HTTP METHOD
  params.method = 'GET';
  const url = `${requestURL}?${buildQueryString(queryData)}`;

  const response = await fetch(url, params);
  const data = await response.json();

  return Promise.resolve({data, status: response.status});
};
