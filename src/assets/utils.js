//The Movies Database API Utils
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';

async function fetchMoviesFromTmdbApi(url) {
	const data = await fetch(url)
		.then((res) => {
			if (res.ok) return res.json();
			else throw new Error('Bad API Response');
		})
		.then(({ results }) => {
			console.log(results);
			return results;
		})
		.catch((e) => {
			console.log('Data failed to load, error: ', e);
		});
	return data;
}

export { BASE_IMG_URL, fetchMoviesFromTmdbApi };
