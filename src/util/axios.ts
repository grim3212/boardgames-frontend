import axios, { Method } from 'axios'

export const CONNECTION_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://boardgames-server.grimoid.com'
    : 'http://localhost:5056'

export const request = (endpoint: string, method: Method, data?: any) =>
  axios(CONNECTION_URL + endpoint, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  })
