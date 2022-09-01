import SearchBar from "./components/header/SearchBar";
import classes from "./app.module.css";
import MoviesList from "./components/MoviesList";
import React, { useState } from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";

function App(props) {
  const params = useParams();
  console.log(params);
  const [searchTerm, setSearchTerm] = useState("batman");
  return (
    <Fragment>
      <div className={classes.App}>
        <SearchBar onChange={setSearchTerm} searchTerm={searchTerm} />
        <MoviesList searchTerm={searchTerm} />
      </div>
    </Fragment>
  );
}
export default App;
