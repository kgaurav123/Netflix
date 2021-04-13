import React, { useState, useEffect } from 'react'
import './Banner.css'
import axios from "./axios"
import requests from "./Requests"
function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchdata() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchdata();
    }, [])

    function truncate(string, n) {

        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }
    return (
        <header className="banner" style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
        }}>
            <div className="banner_contents">
                <h1 className="banner_title" style={{ color: `white` }}>
                    {movie?.name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description" style={{ color: `white` }}>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner--fadebottom" />
        </header >
    )
}

export default Banner
