import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import classes from "../components/movies/MovieList.module.css";

const MoviesList = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);

  const loadData = async () => {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=c24c2c7d&s=${searchTerm}`
    );
    setMovies(response.data.Search ?? movies);
  };
  useEffect(() => {
    if (searchTerm.length <= 2) {
      return;
    }
    loadData();
  }, [searchTerm]);
  const movieMap = movies.map((movie) => (
    <Link to={`/${movie.imdbID}`} className={classes.movie} key={movie.imdbID}>
      <img src={movie.Poster} alt={"Not Founded"} />
    </Link>
  ));

  return <div className={classes.moviesList}>{movieMap}</div>;
};
export default MoviesList;
