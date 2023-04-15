import arrow from "../images/arrow.png"
import { useParams, Link } from "react-router-dom";
import { getTMDBMovie } from "../API/getTMDBMovie";
import "../styles/movie-details.css";

// Formatta la data secondo lo "standard" italiano
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const MovieDetails = () => {
  const { id } = useParams();
  const { movie, isLoading, error } = getTMDBMovie(id); // Recupera i dati del film

  if (isLoading)
    return <div>Caricamento informazioni...</div>;
  if (error)
    return <div>Errore: {error}</div>;

  return (
    <>
      <Link to={"/"}>
        <div className="selection">
          <img src={arrow} alt="Go back" />
        </div>
      </Link>

      <div className="movie-wrapper">
        <div className="movie-banner">
          <img src={movie.poster} alt={`${movie.title} poster`} />
          <div className="movie-info">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>
              Valutazione: <span>{movie.rating}</span>
            </p>
            <p>
              Uscita: <span>{formatDate(movie.releaseDate)}</span>
            </p>
            <p className="spacer">
              Fine Programmazione: <span>{formatDate(movie.endDate)}</span>
            </p>
            <button>Acquista Ora</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;