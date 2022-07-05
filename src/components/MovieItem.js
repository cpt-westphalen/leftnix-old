import Slider from './Slider';
import { BASE_IMG_URL } from '../assets/utils';

export default function MovieItem({ movie }) {
	const imgPath = `${BASE_IMG_URL}w300/${movie['poster_path']}`;
	return (
		<div className="movie-item">
			<img
				className="movie-item-cover"
				width="280px"
				alt="movie poster"
				src={imgPath}
			/>
			<h3 className="movie-item-title">{movie['title']}</h3>
			<p className="movie-item-desc">{movie['overview']}</p>
			<Slider id={movie.id} rating={movie['vote_average']} />
		</div>
	);
}

MovieItem.defaultProps = {
	movie: {
		id: 0,
		cover: '#',
		title: 'Title goes here',
		desc: 'This is the one-liner description',
		rating: 5,
	},
};
