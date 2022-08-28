import { useState } from 'react';
import './styles.css';

export default function ModalDesc({ movie }) {
	const [show, setShow] = useState(false);

	function handleShow() {
		setShow(!show);
	}
	return (
		<div className="modal-desc">
			<img
				className="modal-desc-cover"
				height="250px"
				alt="movie poster"
				src={movie.imgPath || '#'}
			/>

			<div>
				<p className={`modal-desc-text ${show ? 'show' : 'line-clamp'}`}>
					{movie.desc}
				</p>
			</div>

			{!show && (
				<div className="modal-desc-show" onClick={handleShow}>
					show more
				</div>
			)}
			<div className="modal-desc-social">social area</div>
		</div>
	);
}
