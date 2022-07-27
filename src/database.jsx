import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieInfo from "./components/movie/MovieInfo";
import "./components/styles/Database.scss";
import ReactPaginate from "react-paginate";

const DataBase = (props) => {
  const KEY = process.env.REACT_APP_TMDB_API_KEY;

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState('1')

  // let currentPage=1;

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=${page}`;
    showMovies(apiUrl);
  }, [KEY, page]);

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

  const handlePageClick = (data) => {
    if (data.selected+1 !== Number(page)) {
      //let newPage = `${data.selected+1}`

      setPage(data.selected+1)
      
    }
  }
  console.log(page)
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
      <div className="pageNav">
        <ReactPaginate 
        pageCount={4}
        onPageChange = {handlePageClick}
        />
      </div>
    </React.Fragment>
  );
};

export default DataBase;
