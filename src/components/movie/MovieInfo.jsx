import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
      vote: data.vote_average,
      release: data.release_date,
    });
  };

  return (
    <div className="movie-info-div">
      <div className="cover-img">
        <img src={IMGPATH + movieInfo.poster} alt="" />
      </div>
      <div className="info-column">
        <h1 className="title">{movieInfo.title}</h1>
        <p className="movie-info">
          Release Data: <info>{movieInfo.release}</info>
        </p>
        <p className="movie-info">
          Language: <info>{movieInfo.language}</info>
        </p>
        <p className="movie-info">
          Overview: <info>{movieInfo.overview}</info>
        </p>
        <p className="movie-info">
          Vote: <info>{movieInfo.vote}/10</info>
        </p>
      </div>
    </div>
  );
};

export default MovieInfo;
