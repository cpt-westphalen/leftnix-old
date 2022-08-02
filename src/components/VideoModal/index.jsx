import './styles.css';
import Button from '../Button';

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
					<div className="modal-desc">
						<img
							className="modal-desc-cover"
							width="280px"
							alt="movie poster"
							src={movie.imgPath || '#'}
						/>
						<p className="modal-desc-text">
							{movie.desc ||
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum numquam quod exercitationem quibusdam in dicta.'}
						</p>
						<div className="modal-desc-social">social area</div>
					</div>
				</div>
				<div className="modal-footer">
					This is where the rating is!{' '}
					{movie.rating && `Rating: ${movie.rating}`}
				</div>
			</div>
		</div>
	);
}
VideoModal.defaultProps = {
	movie: {
		title: '',
		imgPath: '',
		rating: '',
	},
};
