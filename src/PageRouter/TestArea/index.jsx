import { useState } from 'react';
import { VideoModal } from '../../components/VideoModal';

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
