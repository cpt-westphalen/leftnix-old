import { useState } from 'react';
import './styles.css';

const reviewMock = {
	author: { name: 'flano', badge: 'ancom' },
	text: 'corpo do review corpo do review corpo do review corpo do review',
	rating: 1,
};

const reviewListMock = [
	reviewMock,
	{
		author: { name: 'ciclano', badge: 'lib' },
		text: 'corpo do review corpo do review corpo do review corpo do review corpo do review corpo do review',
		rating: 4,
	},
	{
		author: { name: 'beltrano', badge: 'ancap' },
		text: 'corpo do review corpo do review corpo do review corpo do review corpo do review corpo do review corpo',
		rating: 1,
	},
];

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
			<SocialArea movie={movie} />
		</div>
	);
}

const SocialArea = ({ movie }) => {
	const [reviewList, setReviewList] = useState(reviewListMock);

	// fn(): get movie id and fetch reviews from somewhere, pass them to the setReviewList

	return (
		<div className="modal-desc-social">
			<h4>Reviews</h4>
			{reviewList.map((review) => (
				<Review review={review} />
			))}
		</div>
	);
};

const Review = ({ review }) => {
	return (
		<article className="social-review-container">
			<div className="social-review-heading">
				<div className="social-review-username">{review.author.name}</div>
				<div className="social-review-userbadge">{review.author.badge}</div>
			</div>
			<p className="social-review-text">{review.text}</p>
			<p className="social-review-rating">{review.rating}</p>
		</article>
	);
};
