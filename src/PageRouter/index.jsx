import Gallery from './Gallery';
import AboutPage from './AboutPage';

export default function PageRouter(props) {
	switch (props.page) {
		case 'Gallery':
			return <Gallery />;
		case 'About':
			return <AboutPage />;
		default:
			console.log('routePages went default!');
			break;
	}
}
