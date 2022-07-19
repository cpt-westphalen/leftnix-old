import './styles.css';

export default function TestArea(props) {
	return (
		<div className="test-area">
			<VideoModal />
		</div>
	);
}
function VideoModal(props) {
	const handleClickModal = (e) => {
		console.log('Clicked Modal Handle!');
	};
	return (
		<div className="overlay">
			<div className="modal">
				<div className="modal-header">
					<h2>Movie Title</h2>
					<button
						style={{
							padding: '4px 6px',
							minWidth: '16px',
							borderRadius: '16px',
							border: 'solid 2px black',
						}}
						onClick={handleClickModal}
					>
						x
					</button>
				</div>
				<div className="modal-body">
					modal body
					<div className="modal-trailer-area">
						movie trailer area
						<div className="modal-trailer-video">video</div>
						movie trailer area
					</div>
					<div className="descriptions">descriptions area</div>
					modal body
				</div>
				<div className="modal-footer">This is where the rating is!</div>
			</div>
		</div>
	);
}
