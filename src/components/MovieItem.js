import Slider from './Slider';

export default function MovieItem({ movie }) {
	return (
		<div className="movie-item">
			<img
				className="movie-item-cover"
				width="280px"
				alt="movie poster"
				src={movie.cover}
			/>
			<h3 className="movie-item-title">{movie.title}</h3>
			<p className="movie-item-desc">{movie.desc}</p>
			<Slider movie={movie} />
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
