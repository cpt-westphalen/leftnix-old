import MovieGalleriesPage from './MovieGalleriesPage/MovieGalleriesPage';
import AboutPage from './AboutPage/AboutPage';
import { useState, useEffect } from 'react';

export default function Pages(props) {
	const routePages = () => {
		switch (props.page) {
			case 'MovieGalleriesPage':
				return <MovieGalleriesPage />;
			case 'AboutPage':
				return <AboutPage />;
			default:
				console.log('routePages went default!');
				break;
		}
	};

	return routePages();
}
