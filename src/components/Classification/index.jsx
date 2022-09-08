export default function Classification({ rating }) {
	const rateText = (rating) => {
		switch (rating) {
			case 1:
				return 'EXTRA COMMIE';
			case 2:
				return 'COMMUNIST';
			case 3:
				return 'LIBERAL LEFTIST';
			case 4:
				return 'LIBERAL';
			case 5:
				return 'DISPUTED';
			case 6:
				return 'OLDSCHOOL HOLLYWOOD';
			case 7:
				return 'CONSERVATIVE';
			case 8:
				return 'REACTIONARY';
			case 9:
				return 'NEOLIBERAL';
			case 10:
				return 'STRAIGHT UP FASCIST';
			default:
				return 'Not enough votes yet!';
		}
	};

	return (
		<div className="rate-text-container">
			<h3 className={`rate-text-${rating}`}>{rateText(rating)}</h3>
		</div>
	);
}
