import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log("====", process.env.REACT_APP_SECRET_KEY);
export const moviesAPI = createApi({
  reducerPath: "moviesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (pageCount) =>
        `movie/popular?api_key=5cfa49ca3da12766b7c64a4ba0e48f96&language=en-US&page=${pageCount}`,
    }),
    getMovieDetails: builder.query({
      query: (movieId) =>
        `movie/${movieId}?api_key=5cfa49ca3da12766b7c64a4ba0e48f96&language=en-US`,
    }),
    getSearchedMovie: builder.query({
      query: (args) =>
        `search/movie?api_key=5cfa49ca3da12766b7c64a4ba0e48f96&language=en-US&query=${args?.movieName}&page=${args?.pageCount}&include_adult=false`,
    }),
  }),
});

export const {
  useGetPokemonByNameQuery,
  useGetMovieDetailsQuery,
  useGetSearchedMovieQuery,
} = moviesAPI;
