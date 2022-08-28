export default function ModalDesc(movie) {
	return (
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
	);
}
