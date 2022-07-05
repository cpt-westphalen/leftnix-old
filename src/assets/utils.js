//The Movies Database API Utils
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';

const POPULAR_API_URL =
	'https://api.themoviedb.org/3/discover/movie?api_key=c8871ccdf8ead9afddf163ea56f08b41&language=en-US&include_adult=false&include_video=true&page=1&primary_release_date.gte=2000-01-01&vote_count.gte=10000&vote_average.gte=7&sort_by=popularity.desc';

async function fetchMoviesFromTmdbApi(url) {
	const data = await fetch(url)
		.then((res) => {
			if (res.ok) return res.json();
			else throw new Error('Bad API Response');
		})
		.then(({ results }) => {
			return results;
		})
		.catch((e) => {
			console.log('Data failed to load, error: ', e);
		});
	return data;
}

export { POPULAR_API_URL, BASE_IMG_URL, fetchMoviesFromTmdbApi };
