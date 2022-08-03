export default function Slider({ id, rating }) {
	const rate = Math.floor(
		rating.toString()[2] ? rating.toString()[2] : rating.toString()[0]
	);
	return (
		<div className="slider-wrapper">
			<input
				type="range"
				min="1"
				max="10"
				value={rate}
				className={`slider rating-${rate}`}
				id={`slider-for-${id}`}
				readOnly
			/>
		</div>
	);
}
