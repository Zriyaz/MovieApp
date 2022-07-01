import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Arrow from "../icons/Arrow";
import { useGetMovieDetailsQuery } from "../services/movies";
import "../App.css";

const MovieDetailsPage = () => {
  const { id: movieId } = useParams();
  const navigate = useNavigate();
  const { data: movieDetail } = useGetMovieDetailsQuery(movieId);
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  const imageUrl = `${imageBaseUrl}${movieDetail?.poster_path}`;
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        width: "100%",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
        position: "relative",
        // backgroundRepeat: "no-repeat",
        // backgroundRepeat: "no-repeat",
        // background: `linear-gradient('90deg, #000000 0%, rgba(0, 0, 0, 0) 100%')`,
        // background: `linear-gradient(190deg, #000000 0%, rgba(0, 0, 0, 0)30%), url(${imageUrl})`,
      }}
    >
      <div className="movie_details-container">
        <div className="arrow" onClick={() => navigate(-1)}>
          <Arrow />
        </div>
        <h2 className="details_heading">{movieDetail?.title}</h2>
        <p className="details_rating">
          Rating: {movieDetail?.vote_average} / 10
        </p>
        <p className="details_text">{movieDetail?.overview} / 10</p>
        <div>
          <div className="release_date">
            <p>Release Date</p>
            <span>{movieDetail?.release_date}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p className="details_rating" style={{ paddingRight: "1rem" }}>
              Orginal Language
            </p>
            {movieDetail?.spoken_languages?.map((lng) => (
              <span>{lng?.name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
