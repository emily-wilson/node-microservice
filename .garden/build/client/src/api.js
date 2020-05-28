import fetch from 'node-fetch';

const headers = {
  'Access-Control-Allow-Origin': 'http://backend',
  'Content-Type': 'application/json'
}

export async function get(url) {
  const response = await fetch(url, {
    method: 'get',
    mode: 'no-cors'
  });
  return await response.json();
}

export async function post(url, body) {
  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers
  });
  return await response.json();
}
