import { useState } from 'react';
import MovieGallery from '../MovieGallery/index.jsx';
import { VideoModal } from '../VideoModal/index.jsx';

export default function MovieGalleries(props) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleClick = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<div className="movie-galleries">
			{/* this is temporary */}
			<button onClick={handleClick}>Click for modal</button>
			{isModalOpen && <VideoModal setIsModalOpen={setIsModalOpen} />}
			{/* this is temporary */}
			{props.dataIsLoaded ? (
				<MovieGallery movies={props.movies} />
			) : (
				<h2>loading movies...</h2>
			)}
			<div id="credit-movie-source">
				Source:{' '}
				<img src="TMDB-LOGO.svg" width={200} alt="The Movies Database Logo" />
			</div>
		</div>
	);
}
