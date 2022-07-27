import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieInfo from "./components/movie/MovieInfo";
import "./components/styles/Database.scss";

const DataBase = (props) => {
  const KEY = process.env.REACT_APP_TMDB_API_KEY;

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`;
    showMovies(apiUrl);
  }, [KEY]);

  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?&api_key=${KEY}&query=`;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search) {
      showMovies(SEARCHAPI + search);
      setSearch("");
    }
  };

  const showMovies = async (url) => {
    setMovies([]);

    const data = await fetch(url).then((res) => res.json());

    console.log(data.results);
    const array = [];

    data.results.forEach((element) => {
      array.push({
        id: element.id,
        title: element.title,
        poster: element.poster_path,
      });
    });
    console.log(array);
    setMovies(array);
  };

  return (
    <React.Fragment>
      <header>
        <h1>Movies</h1>
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={search}
            placeholder="Search"
            className="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </header>
      <main>
        {movies.map((movie, index) => {
          <MovieInfo selectedMovie={movie.id} />;
          return (
            <Link to={`movies/${movie.id}`} key={index}>
              <div>
                <img src={IMGPATH + movie.poster} alt="" />
                <h2>{movie.title}</h2>
              </div>
            </Link>
          );
        })}
      </main>
    </React.Fragment>
  );
};

export default DataBase;
