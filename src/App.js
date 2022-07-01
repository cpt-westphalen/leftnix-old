import './styles.css';
import { LeftSidebar } from './components/LeftSidebar';
import Pages from './containers/Pages';
import { useState } from 'react';

export default function App() {
	const [page, setPage] = useState('MovieGalleriesPage');

	return (
		<div className="App">
			<LeftSidebar setPage={setPage} />
			<Pages page={page} />
		</div>
	);
}
