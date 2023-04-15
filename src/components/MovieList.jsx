import { useState } from "react";
import { getTMDBMovieList } from "../API/getTMDBMovieList";
import { Link } from "react-router-dom";
import "../styles/movie-list.css";

// Formatta la data secondo lo "standard" italiano
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const MovieList = () => {
  const { movies, isLoading, error } = getTMDBMovieList(); // Recupera la lista di film

  if (isLoading)
    return <div>Loading...</div>;
  if (error)
    return <div>Error: {error}</div>;

  return (
    <>
      {
        // Crea un contenitore per ogni film nell'elenco
        movies.map((movie, index) => (
          <div key={index} className="banner">
            <div className="banner-img">
              <Link to={`/movie/${movie.id}`}>
                <img src={movie.poster} alt={`${movie.title} poster`} />
              </Link>
            </div>
            <div className="banner-info">
              <Link to={`/movie/${movie.id}`}>
                <h2>{movie.title}</h2>
              </Link>
              <p>
                Uscita: <span>{formatDate(movie.releaseDate)}</span>
              </p>
              <p>
                Fine Programmazione: <span>{formatDate(movie.endDate)}</span>{" "}
              </p>
              <div className="banner-other">
                <p>
                  Oggi{" "}
                  <span>
                    {new Date().toLocaleDateString("it-IT", {
                      weekday: "short",
                      day: "numeric",
                      month: "long",
                    })}
                  </span>
                </p>
                <Link to={`/movie/${movie.id}`}>
                  <button>
                    Sala | <span>{index + 1}</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      }
    </>
  );
};

export default MovieList;