import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Search from "../components/Search";
import Footer from "../components/Footer";

const MovieInfo = () => {
    const navigate = useNavigate();
    const { imdbID, apiKey, searchId } = useParams();
    const [movieInfo, setMovieInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getMovieInfo() {
        setLoading(true);
        const { data } = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=6c5beaa4`);
        setMovieInfo(data);
        setLoading(false);
    }

    useEffect(() => {
        // Simulate a 2-second loading state
        const loadingTimeout = setTimeout(() => {
            getMovieInfo();
        }, 1500);

        return () => clearTimeout(loadingTimeout);
    }, [imdbID, apiKey]);

    return (
        <>
            <Search />
            {loading ? (
                    <div className="movie__info--padding">
                        <div className="movie__info--wrapper">
                            <div
                            className="movie__info--img skeleton__movie movie"
                            />
                            <div className="skeleton__paras">
                            <p className="movie__info--para skeleton__para"></p>
                            <p className="movie__info--para skeleton__para"></p>
                            <p className="movie__info--para skeleton__para"></p>
                            <p className="movie__info--para skeleton__para"></p>
                            </div>
                        </div>
                    </div>
            ) : (
                <div className="movie__info--padding">
                    <div className="movie__info--wrapper">
                        <img 
                        className="movie__info--img"
                        src={movieInfo.Poster} alt={movieInfo.Title} />
                        <div className="movie__info">
                            <p className="movie__info--para">Genre: {movieInfo.Genre}</p>
                            <p className="movie__info--para">Synopsis: {movieInfo.Plot}</p>
                            <p className="movie__info--para">Director: {movieInfo.Director}</p>
                            <p className="movie__info--para">Talent: {movieInfo.Actors}</p>
                            <p className="movie__info--para">Released: {movieInfo.Released}</p>
                            <p className="movie__info--para">Rated: {movieInfo.Rated}</p>
                        </div>
                    </div>
                    <div
                        className="movie__info--back"
                        onClick={() => navigate(`/${searchId}`)}
                    >
                        click here to return to search results
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
};

export default MovieInfo;
