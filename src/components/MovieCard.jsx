import React from "react";
import "./style.css";
import Star from "../icons/Star";
import { Play } from "../icons/Play";

const MovieCard = ({ movie, onClickHanadler }) => {
  return (
    <div className="cardContainer" onClick={() => onClickHanadler(movie?.id)}>
      <div className="imageCardContainer">
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
          className="imageCard"
          alt=""
        />
      </div>
      <div className="cardHeaderConatiner">
        <div>
          <p className="movie_title" style={{ marginBottom: "0px !important" }}>
            {movie?.title}
          </p>
          <div className="rating_conatiner">
            <Star />
            <span className="rating">{movie?.vote_average} / 10</span>
          </div>
        </div>
        <div>
          <Play />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
