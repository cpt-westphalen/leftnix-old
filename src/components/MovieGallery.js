import MovieItem from './MovieItem';

export default function MovieGallery({ movies }) {
	return (
		<div id="movie-gallery-wrapper">
			{movies.map((movie) => {
				return <MovieItem key={movie.id} movie={movie} />;
			})}
		</div>
	);
}
