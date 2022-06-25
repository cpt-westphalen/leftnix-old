import { LeftSidebar } from './components/LeftSidebar';
import './styles.css';
import { TopBar } from './components/TopBar';
import { movieList } from './movieList';

export default function App() {
	return (
		<div className="App">
			<LeftSidebar />
			<main className="main-app-area">
				<TopBar />
				<div className="movie-galleries">
					<MovieGallery movies={movieList} />
				</div>
				{/* <LoginSplash/> */}
			</main>
		</div>
	);
}

const MovieGallery = ({ movies }) => {
	return (
		<div id="movie-gallery-wrapper">
			{movies.map((movie) => {
				return <MovieItem key={movie.id} movie={movie} />;
			})}
		</div>
	);
};

const MovieItem = ({ movie }) => {
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
};

MovieItem.defaultProps = {
	movie: {
		id: 0,
		cover: '#',
		title: 'Title goes here',
		desc: 'This is the one-liner description',
		rating: 5,
	},
};

const Slider = ({ movie }) => {
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
};
