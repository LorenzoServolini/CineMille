import { useState, useEffect } from "react";

const TMDB_API_KEY = import.meta.env.VITE_API_KEY; // Chiave per accedere alle API di TMDB specificata nel file .env

// Aggiunge i mesi specificati alla data fornita
function addMonthsToDate(dateString, months) {
    const date = new Date(dateString);
    date.setMonth(date.getMonth() + months);
    return date;
}

/*
 * Recupera, in modo asincrono, le informazioni del film tramite le API.
 * Parametri:
 * 1) ID del film
 * 2-3-4) Funzioni che aggiornano lo stato del fetch (hook useState)
*/
async function fetchMovie(id, setMovie, setIsLoading, setError) {
    const PROGRAMMING_MONTHS = 3;

    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=it-IT`
        );
        const data = await response.json();
        const formattedMovie = {
            title: data.original_title,
            overview: data.overview,
            poster: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
            rating: data.vote_average,
            releaseDate: data.release_date,
            endDate: addMonthsToDate(data.release_date, PROGRAMMING_MONTHS),
        };

        setMovie(formattedMovie);
        setIsLoading(false);
    } catch (error) {
        setError(error.message);
        setIsLoading(false);
    }
}

export const getTMDBMovie = (id) => {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchMovie(id, setMovie, setIsLoading, setError);
    }, [id]); // Esegue solo quando cambia l'id del film

    return { movie, isLoading, error };
};