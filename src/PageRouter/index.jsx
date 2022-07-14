import Gallery from './Gallery';
import About from './About';

export default function PageRouter(props) {
	switch (props.page) {
		case 'Gallery':
			return <Gallery />;
		case 'About':
			return <About />;
		default:
			console.log('routePages went default!');
			break;
	}
}
