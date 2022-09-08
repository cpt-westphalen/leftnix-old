import { useState } from 'react';
import './styles.css';

export const TopBar = ({ type = 'search' }) => {
	if (type === 'search') {
		return (
			<div className="top-bar">
				<Logo />
				<TopSearch />
			</div>
		);
	}
	if (type === 'slogan') {
		return (
			<div className="top-bar">
				<Logo />
				<Slogan />
			</div>
		);
	}
};
const Logo = () => {
	return <h2 className="logo">LEFTNIX</h2>;
};
const TopSearch = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const styling = {
		margin: '0',
		backgroundColor: '#101010',
		borderColor: '#333333',
		borderRadius: '2em',
		fontSize: '1em',
		color: '#cccccc',
		transition: '0.25s',
	};

	const collapsed = {
		...styling,
		width: '2em',
		padding: '0.25em',
		borderRadius: '2em',
	};

	const expanded = {
		...styling,
		width: '10em',
		padding: '5px 12px',
		borderColor: 'red',
		outline: 'red 1px',
		boxShadow: '0 0 12px 0 red',
	};

	const expandSearchInput = () => {
		setIsExpanded(true);
	};
	const collapseSearchInput = () => {
		setIsExpanded(false);
	};

	return (
		<div id="top-search">
			<input
				id="top-search-input"
				type="text"
				onFocus={expandSearchInput}
				onBlur={collapseSearchInput}
				style={isExpanded ? expanded : collapsed}
			/>
			<img
				id="top-search-icon"
				alt="search!"
				height="20px"
				src="search-black.svg"
				onClick={() => {
					console.log('clicked search!');
				}}
			/>
		</div>
	);
};
const Slogan = () => {
	return <h4 className="slogan">Are you ready to uncover the truth?!</h4>;
};
