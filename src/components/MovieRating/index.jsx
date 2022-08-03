import './styles.css';
import Slider from '../Slider';
import Classification from '../Classification';

export default function MovieRating({ movie }) {
	return (
		<div className="movie-rating">
			<Classification rating={movie.rating} />
			<Slider id={movie.id} rating={movie.rating} />
		</div>
	);
}

MovieRating.defaultProps = {
	movie: {
		id: 1234,
		rating: 5,
	},
};
