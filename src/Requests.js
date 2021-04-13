const API_KEY = "16d6fd71ff8c1906b434e005394c65ce"
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&genres=99`,
}
export default requests;