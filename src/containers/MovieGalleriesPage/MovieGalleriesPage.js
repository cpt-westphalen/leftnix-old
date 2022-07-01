import { TopBar } from '../../components/TopBar';
import MovieGalleries from '../../components/MovieGalleries';
import { useState, useEffect } from 'react';

export default function MovieGalleriesPage() {
	const [movies, setMovies] = useState([]);
	const [dataIsLoaded, setDataIsLoaded] = useState(false);

	const fetchMovies = () => {
		fetch('movieList.json')
			.then((res) => {
				if (res.ok) return res.json();
				else throw new Error('BAD RESPONSE');
			})
			.then(({ movieList }) => {
				setMovies(movieList);
				setDataIsLoaded(true);
			})
			.catch((e) => {
				console.log('Data failed to load');
			});
	};

	useEffect(() => {
		if (!dataIsLoaded) {
			console.log('loading data...');
			setTimeout(() => {
				fetchMovies();
			}, 2000);
		} else {
			console.log('useEffect was called, and dataIsLoaded is ', true);
		}
	}, [dataIsLoaded]);

	return (
		<main className="main-app-area">
			<TopBar />
			<MovieGalleries dataIsLoaded={dataIsLoaded} movies={movies} />
			<button
				onClick={() => {
					setDataIsLoaded(!dataIsLoaded);
				}}
			>
				This toggles dataIsLoaded
			</button>
		</main>
	);
}
