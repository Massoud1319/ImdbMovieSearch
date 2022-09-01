import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./SingleMovie.module.css";

export const SingleMovie = () => {
  const [singleMovie, setSingleMovie] = useState([]);

  const { id } = useParams();

  const fetchMovie = () => {
    fetch(`https://www.omdbapi.com/?apikey=c24c2c7d&i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleMovie(data);
      });
  };
  useEffect(() => {
    // if (id) {
    fetchMovie();
    // }
  }, [id]);

  if (!singleMovie) {
    return <></>;
  }
  return (
    <div className={classes.singleMovie}>
      <img src={singleMovie.Poster} alt="" />
      <div className={classes.singleMovieDetails}>
        <h1>{singleMovie.Title}</h1>
        <p>{singleMovie.Plot}</p>
        <span>{singleMovie.Year}</span>
        <Link to="/">Back To Movies</Link>
      </div>
    </div>
  );
};
