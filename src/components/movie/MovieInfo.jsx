import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/MovieInfo.scss";

const MovieInfo = (props) => {
  const [movieInfo, setMovieInfo] = useState({});

  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  const KEY = process.env.REACT_APP_TMDB_API_KEY;

  const Params = useParams();

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${Params.id}?api_key=${KEY}`;
    showInfo(apiUrl);
  }, [KEY, Params.id]);

  const showInfo = async (url) => {
    const data = await fetch(url).then((res) => res.json());
    console.log(data);
    console.log(data.results);

    setMovieInfo({
      id: data.id,
      title: data.title,
      poster: data.poster_path,
      language: data.original_language,
      overview: data.overview,
      popularity: data.popularity,
      vote: data.vote_average,
      release: data.release_date,
    });
  };

  return (
    <div className="movie-info-div">
      <div className="info-column">
        <h1 className="title">{movieInfo.title}</h1>
        <p className="movie-info">Release Data: {movieInfo.release}</p>
        <p className="movie-info">Language: {movieInfo.language}</p>
        <p className="movie-info">Overview: {movieInfo.overview}</p>
        <p className="movie-info">Vote: {movieInfo.vote}/10</p>
        <p className="movie-info">Popularity: {movieInfo.popularity}</p>
      </div>
      <img className="cover-img" src={IMGPATH + movieInfo.poster} alt="" />
    </div>
  );
};

export default MovieInfo;
