import { useState } from 'react';
import './styles.css';
import Button from '../../components/Button';

export default function TestArea(props) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleClick = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<div className="test-area">
			<button onClick={handleClick}>Click for modal</button>
			{isModalOpen && <VideoModal setIsModalOpen={setIsModalOpen} />}
		</div>
	);
}
function VideoModal(props) {
	const handleClickModal = (e) => {
		props.setIsModalOpen(false);
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
								src="https://www.youtube-nocookie.com/embed/yTX0HxTq9wo"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; encrypted-media;"
								allowfullscreen
							></iframe>
						</div>
					</div>
					<div className="modal-desc">
						descriptions area
						<div className="modal-social">social area</div>
					</div>
				</div>
				<div className="modal-footer">This is where the rating is!</div>
			</div>
		</div>
	);
}
