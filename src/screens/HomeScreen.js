import React from 'react'
import './HomeScreen.css'
import Nav from '../Nav'
import Banner from '../Banner'
import Row from '../Row'

import requests from '../Requests'
function Homescreen() {
    return (
        <div className="homescreen">
            <Nav />
            <Banner />
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movie" fetchUrl={requests.fetchActionMovies} />

            <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Romanace Movie" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            {/* nav */}
            {/* banner */}
            {/* row */}
        </div>
    )
}

export default Homescreen;
