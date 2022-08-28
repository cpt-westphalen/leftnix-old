import './styles.css';
import Slider from '../Slider';
import Classification from '../Classification';

export default function MovieRating({ movie }) {
	const rate = Math.floor(
		movie.rating.toString()[2]
			? movie.rating.toString()[2]
			: movie.rating.toString()[0]
	);
	return (
		<div className="movie-rating">
			<Classification rating={movie.rating} />
			<Slider
				inputClassName="modal-slider"
				id={movie.id}
				rating={movie.rating}
			/>
			<button className="movie-rating-rate-btn">Rate Now</button>
		</div>
	);
}

MovieRating.defaultProps = {
	movie: {
		id: 1234,
		rating: 5,
	},
};
