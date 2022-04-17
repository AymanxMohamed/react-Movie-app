import axios from 'axios';

let apiKey = '6d04accc6274ffcb09397dcde5c58626';
let apiReadAccessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDA0YWNjYzYyNzRmZmNiMDkzOTdkY2RlNWM1ODYyNiIsInN1YiI6IjYyNWM2YjY0YmIyNjAyMTE4NGYwMjg5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.itbQM3FdzcNQiCjDYQ3RFR2Ts30Dw0XbwBUg1xT1G10`

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: { api_key: apiKey },
  headers: { 'Authorization': `Bearer ${ apiReadAccessToken }` },
  timeout: 5000,
})

export async function getAllMovies() {
  const res = await axiosInstance.get('/popular');
  return res.data.results;
}

export default axiosInstance;





