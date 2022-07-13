import MovieGallery from './MovieGallery.js';

export default function MovieGalleries(props) {
	return (
		<div className="movie-galleries">
			{props.dataIsLoaded ? (
				<MovieGallery movies={props.movies} />
			) : (
				<h2>loading movies...</h2>
			)}
			<div id="credit-movie-source">
				Source:{' '}
				<img src="TMDB-LOGO.svg" width={200} alt="The Movies Database Logo" />
			</div>
		</div>
	);
}
