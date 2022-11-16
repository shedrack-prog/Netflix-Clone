import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__poster">
        {movies.map((movie) => (
          <img
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            key={movie.id}
            className={`poster ${isLargeRow && "poster__large"}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
