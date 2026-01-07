import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DocsLayout from './components/docs/DocsLayout';

const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route
				path='/docs'
				element={<Navigate to='/docs/getting-started' replace />}
			/>
			<Route path='/docs/*' element={<DocsLayout />} />
		</Routes>
	);
};

export default App;
