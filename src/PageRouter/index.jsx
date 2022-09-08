import Gallery from './Gallery';
import About from './About';
import TestArea from './TestArea';

export default function PageRouter(props) {
	switch (props.page) {
		case 'Gallery':
			return <Gallery />;
		case 'About':
			return <About />;
		case 'Test':
			return <TestArea />;
		default:
			console.log('routePages went default!');
			break;
	}
}
