export default function Slider(props) {
	const rate = Math.floor(
		props.rating.toString()[2]
			? props.rating.toString()[2]
			: props.rating.toString()[0]
	);
	return (
		<div className="slider-wrapper">
			<input
				type="range"
				min="1"
				max="10"
				value={rate}
				className={`slider rating-${rate}`}
				id={`slider-for-${props.id}`}
				readOnly
			/>
		</div>
	);
}
