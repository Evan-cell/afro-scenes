const API_KEY = process.env.API_KEY

export default {
    fetchTrending:{
        title:'Trending',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title:'Top Rated',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies:{ 
        title:'Action',
        url:`/discover/moviek?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies:{
        title:'Comedy',
        url:`/discover/moviek?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies:{
        title:'Horror',
        url:`/discover/moviek?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanticMovies:{
        title:'Romantic',
        url:`/discover/moviek?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery:{
        title:'Mystery',
        url:`/discover/moviek?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi:{
        title:'Sci-Fi',
        url:`/discover/moviek?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern:{
        title:'Western',
        url:`/discover/moviek?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation:{
        title:'Animation',
        url:`/discover/moviek?api_key=${API_KEY}&with_genres=16`
    },
    fetchTv:{
        title:'Tv Movie',
        url:`/discover/moviek?api_key=${API_KEY}&with_genres=10770`
    },
}