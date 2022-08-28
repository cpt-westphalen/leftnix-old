import './styles.css';
import Button from '../Button';
import MovieRating from '../MovieRating';
import ModalDesc from '../ModalDesc';

const mockMovie = {
	title: 'Default Movie Title',
	imgPath:
		'https://upload.wikimedia.org/wikipedia/en/7/78/Stranger_Things_season_4.jpg',
	rating: 5,
	desc: `Est ea nihil explicabo. Nihil ea omnis libero assumenda fuga similique veritatis. Ut laboriosam sit eum. Blanditiis dolor pariatur sunt aut numquam quasi. Iure repudiandae quos est ea nisi.

Nisi necessitatibus odit ullam numquam. Sint dignissimos cumque voluptate laudantium porro minus reiciendis. Hic dolor voluptatem saepe doloribus voluptates sequi repellat.

Nisi necessitatibus odit ullam numquam. Sint dignissimos cumque voluptate laudantium porro minus reiciendis. Hic dolor voluptatem saepe doloribus voluptates sequi repellat.

Rerum sapiente commodi et. Et inventore sint est rerum qui odio recusandae. Omnis voluptas dolorum distinctio.`,
};

export function VideoModal({ movie = mockMovie, setIsModalOpen }) {
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
