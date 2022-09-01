import classes from "./header.module.css";

const SearchBar = ({ onChange, searchTerm }) => {
  const onChangeHandler = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={classes.header}>
      <label className={classes.label} htmlFor="movieId">
        Search Movies
      </label>
      <input
        className={classes.input}
        id="moveId"
        onChange={onChangeHandler}
        value={searchTerm}
      />
    </div>
  );
};

export default SearchBar;
