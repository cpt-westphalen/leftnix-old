import Slider from '../Slider';
import { BASE_IMG_URL } from '../../assets/utils';
import { useState } from 'react';

export default function MovieCard({ movie }) {
	const [showingMore, setShowingMore] = useState(false);
	const imgPath = `${BASE_IMG_URL}w300/${movie['poster_path']}`;
	/*	
	const overview = movie['overview'].slice(
		0,
		movie['overview'].indexOf('.') + 1
	);
	*/
	let title = movie['title'];

	const heroTitleIndex =
		title.indexOf(':') + 1 ||
		(title.toLowerCase().includes('harry potter and') ? 16 : 0);

	const superTitle = title.slice(0, heroTitleIndex) || null;

	if (!!heroTitleIndex) {
		title = title.slice(heroTitleIndex);
	}

	function handleShowMore() {
		setShowingMore(!showingMore);
	}

	return (
		<div className="movie-item">
			<img
				className="movie-item-cover"
				width="280px"
				alt="movie poster"
				src={imgPath}
			/>

			<div className="movie-item-title-wrap">
				<h2 className="movie-item-title hero-title">{superTitle || '\n'}</h2>
				<h3 className="movie-item-title">{title}</h3>
			</div>
			<p
				className={`movie-item-desc ${
					showingMore ? `movie-item-show` : `line-clamp-sm`
				}`}
			>
				{movie['overview']}
			</p>
			<button onClick={handleShowMore}>show more</button>
			<Slider id={movie.id} rating={movie['vote_average']} />
		</div>
	);
}

MovieCard.defaultProps = {
	movie: {
		id: 0,
		cover: '#',
		title: 'Title goes here',
		desc: 'This is the one-liner description',
		rating: 5,
	},
};
