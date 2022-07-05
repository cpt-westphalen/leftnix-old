import { TopBar } from '../../components/TopBar';
import MovieGalleries from '../../components/MovieGalleries';
import { useState, useEffect } from 'react';
import { fetchMoviesFromTmdbApi } from '../../assets/utils';

export default function MovieGalleriesPage() {
	const [movies, setMovies] = useState(null);
	const [dataIsLoaded, setDataIsLoaded] = useState(false);

	const API_URL =
		'https://api.themoviedb.org/3/discover/movie?api_key=c8871ccdf8ead9afddf163ea56f08b41&language=en-US&include_adult=false&include_video=true&page=1&primary_release_date.gte=2000-01-01&vote_count.gte=10000&vote_average.gte=7&sort_by=popularity.desc';

	useEffect(() => {
		if (!dataIsLoaded) {
			fetchMoviesFromTmdbApi(API_URL).then((res) => {
				setMovies(res);
				setDataIsLoaded(true);
				console.log(movies);
			});
		}
	}, []);

	return (
		<main className="main-app-area">
			<TopBar />
			<MovieGalleries dataIsLoaded={dataIsLoaded} movies={movies} />
		</main>
	);
}
