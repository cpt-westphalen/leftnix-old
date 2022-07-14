import './styles.css';
import { LeftSidebar } from './components/LeftSidebar';
import PageRouter from './PageRouter';
import { useState } from 'react';

export default function App() {
	const [page, setPage] = useState('Gallery');

	return (
		<div className="App">
			<LeftSidebar setPage={setPage} />
			<PageRouter page={page} />
		</div>
	);
}
