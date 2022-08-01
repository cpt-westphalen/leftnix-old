import './styles.css';

export default function Button({ type, children, onClick }) {
	switch (type) {
		case 'close':
			return (
				<button className="btn-close" onClick={onClick}>
					{children}
				</button>
			);
		case 'confirm':
			return (
				<button className="btn-confirm" onClick={onClick}>
					{children}
				</button>
			);
		case 'basic':
			return (
				<button className="btn" onClick={onClick}>
					{children}
				</button>
			);
		default:
			throw new Error('Button needs a type');
	}
}
