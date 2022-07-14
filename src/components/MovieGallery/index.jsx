import MovieCard from '../MovieCard';

export default function MovieGallery({ movies }) {
	return (
		<div id="movie-gallery-wrapper">
			{movies.map((movie) => {
				return <MovieCard key={movie.id} movie={movie} />;
			})}
		</div>
	);
}
