import { useState, useEffect } from "react";

const TMDB_API_KEY = import.meta.env.VITE_API_KEY; // Chiave per accedere alle API di TMDB specificata nel file .env

// Aggiunge i mesi specificati alla data fornita
function addMonthsToDate(dateString, months) {
    const date = new Date(dateString);
    date.setMonth(date.getMonth() + months);
    return date;
}

/*
 * Recupera, in modo asincrono, le informazioni generali dei film tramite le API.
 * I 3 parametri sono le funzioni che aggiornano lo stato del fetch (hook useState).
*/
async function fetchData(setMovies, setIsLoading, setError) {
    const PROGRAMMING_MONTHS = 3;

    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=it-IT&page=1`
        );
        if (!response.ok) {
            throw new Error('Errore durante il recupero dei dati tramite le API di TMDB');
        }
        const data = await response.json();
        const formattedMovies = data.results.slice(0, 12).map((movie) => ({
            id: movie.id,
            title: movie.title,
            duration: movie.runtime,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            releaseDate: movie.release_date,
            endDate: addMonthsToDate(movie.release_date, PROGRAMMING_MONTHS),
        }));
        setMovies(formattedMovies);
        setIsLoading(false);
    } catch (err) {
        setError(err.message);
        setIsLoading(false);
    }
};

export const getTMDBMovieList = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData(setMovies, setIsLoading, setError);
    }, []); // Si aggiorna solo al primo render

    return { movies, isLoading, error };
};