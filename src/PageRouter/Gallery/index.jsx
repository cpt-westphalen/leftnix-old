import { TopBar } from '../../components/TopBar';
import MovieGalleries from '../../components/MovieGalleries';
import { useState, useEffect } from 'react';
import { fetchMoviesFromTmdbApi, POPULAR_API_URL } from '../../assets/utils';

export default function Gallery() {
	const [movies, setMovies] = useState(getMoviesFromSessionStorage() || null);
	const [dataIsLoaded, setDataIsLoaded] = useState(false);

	function getDataFromAPItoMovies(url) {
		fetchMoviesFromTmdbApi(url)
			.then((moviesArray) => {
				setMovies(moviesArray);
				sessionStorage.setItem('leftnix-movies', JSON.stringify(moviesArray));
				setDataIsLoaded(true);
			})
			.catch((e) => {
				console.log(e);
				setDataIsLoaded(false);
			});
	}

	function getMoviesFromSessionStorage() {
		return JSON.parse(sessionStorage.getItem('leftnix-movies'));
	}

	useEffect(() => {
		if (movies && movies.length > 0) setDataIsLoaded(true);
		else if (!movies && !dataIsLoaded) {
			getDataFromAPItoMovies(POPULAR_API_URL);
		} else {
			console.log('Something went south.');
		}
	}, []);

	return (
		<main className="main-app-area">
			<TopBar />
			<MovieGalleries dataIsLoaded={dataIsLoaded} movies={movies} />
		</main>
	);
}
