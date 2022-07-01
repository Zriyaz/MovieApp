import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import MovieCard from "./../components/MovieCard";
import "../App.css";

import {
  useGetPokemonByNameQuery,
  useGetSearchedMovieQuery,
} from "../services/movies";
import { MoviePagination } from "../components/MoviePagination";
import LogoIcon from "../icons/LogoIcon";
import { SearchBar } from "../components/SearchBar";

const HomePage = () => {
  const navigate = useNavigate();
  const [pageCount, setPageCount] = useState(1);
  const [searchText, setSearchText] = useState();
  const {
    data: moviesData,
    refetch,
    isLoading,
  } = useGetPokemonByNameQuery(pageCount);
  const movies = moviesData?.results;
  console.log("movies", movies);
  const { data: searchedMovies, refetch: searchRefetchMovie } =
    useGetSearchedMovieQuery({ movieName: searchText, pageCount: pageCount });
  const [movieItems, setMovieItems] = useState(movies ? movies : []);
  const [totalPageCount, setTotalPageCount] = useState(
    searchText ? searchedMovies?.total_pages : moviesData?.total_pages
  );
  // searchText && setMovieItems(searchedMovies);
  const onClickHanadler = (id) => navigate(`/movie/${id}`);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  const imageUrl =
    movies?.length > 0 ? `${imageBaseUrl}${movies[0]?.poster_path}` : "";

  useEffect(() => {
    refetch(pageCount);
  }, [pageCount, refetch]);
  const handlePageClick = (event) => setPageCount(event.selected);

  useEffect(() => {
    searchRefetchMovie({ movieName: searchText, pageCount: pageCount });
  }, [searchText, searchRefetchMovie]);
  console.log("searchText", searchText);

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "40vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BounceLoader color={`#456745`} loading={isLoading} size={150} />
        </div>
      ) : (
        <div className="app">
          <header className="header">
            <div style={{ width: "100%", height: "40px" }}>
              <LogoIcon />
            </div>
            <div className="search_container">
              <SearchBar setValue={setSearchText} value={searchText} />
            </div>
          </header>
          <div
            style={{
              // backgroundImage: `url(${imageUrl})`,
              width: "100%",
              height: "100vh",
              backgroundPosition: "center",
              backgroundSize: "cover",
              objectFit: "cover",
              position: "relative",
              // backgroundRepeat: "no-repeat",
              // backgroundRepeat: "no-repeat",
              backgroundRepeat: "no-repeat !important",
              // background: `linear-gradient('90deg, #000000 0%, rgba(0, 0, 0, 0) 100%')`,
              background: `linear-gradient(190deg, #000000 0%, rgba(0, 0, 0, 0)30%), url(${imageUrl})`,
            }}
          >
            {/* <img
              src={"https://image.tmdb.org/t/p/w500" + movies[0]?.poster_path}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            /> */}
          </div>
          <div className="trending_heading">
            <h3>Trending</h3>
          </div>
          {searchText ? (
            <div className="main_cardContainer">
              {searchedMovies?.results?.map((movie) => (
                <MovieCard movie={movie} onClickHanadler={onClickHanadler} />
              ))}
            </div>
          ) : (
            <div className="main_cardContainer">
              {movies?.map((movie) => (
                <MovieCard movie={movie} onClickHanadler={onClickHanadler} />
              ))}
            </div>
          )}
          <div className="paginationContainer">
            <MoviePagination
              handlePageClick={handlePageClick}
              pageCount={
                searchText
                  ? searchedMovies?.total_pages
                  : moviesData?.total_pages
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
