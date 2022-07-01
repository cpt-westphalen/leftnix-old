export default function Slider({ movie }) {
	return (
		<div className="slider-wrapper">
			<input
				type="range"
				min="1"
				max="10"
				value={movie.rating}
				className={`slider rating-${movie.rating}`}
				id={`slider-for-${movie.id}`}
				readOnly
			/>
		</div>
	);
}
