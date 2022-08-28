import './styles.css';
import Button from '../Button';
import MovieRating from '../MovieRating';
import ModalDesc from '../ModalDesc';

export function VideoModal({ movie, setIsModalOpen }) {
	const handleClickModal = (e) => {
		setIsModalOpen(false);
	};
	return (
		<div className="overlay">
			<div className="modal">
				<div className="modal-header">
					<h2>Movie Title</h2>
					<Button type="close" onClick={handleClickModal}>
						X
					</Button>
				</div>
				<div className="modal-body">
					<div className="modal-trailer-area">
						<div className="iframe-container">
							<iframe
								className="ytb-iframe"
								// width="1080"
								// height="720"
								src={
									movie.videoUrl ||
									'https://www.youtube-nocookie.com/embed/yTX0HxTq9wo'
								}
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; encrypted-media;"
								allowfullscreen
							></iframe>
						</div>
					</div>
					<ModalDesc movie={movie} />
				</div>
				<div className="modal-footer">
					<MovieRating movie={movie} />
				</div>
			</div>
		</div>
	);
}
VideoModal.defaultProps = {
	movie: {
		title: 'Default Movie Title',
		imgPath: '#',
		rating: 5,
	},
};
