const API_KEY = "4b62574e00d81f12ee2bd18b6bb09c73";
const BASE_URL = "https://api.themoviedb.org/3";

const trending = () =>
  fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`).then((res) =>
    res.json()
  );
const upcoming = () =>
  fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`
  ).then((res) => res.json());
const nowPlaying = () =>
  fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`
  ).then((res) => res.json());

export const moviesApi = { trending, upcoming, nowPlaying };
