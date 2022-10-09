import { Suspense } from 'react';

import Header from 'features/Header';
import PrivateRoutes from 'routes/PrivateRoutes';
import PublicRoutes from 'routes/PublicRoutes';
import { AppStyles, Footer } from 'App.styled';

const App = () => {
	return <>
		<AppStyles />

		<Header />

		<Suspense fallback={'Loading...'}>
			<PublicRoutes />
			{/* <PrivateRoutes /> */}
		</Suspense>

		<Footer>
			<div>© Маркетплейс</div>
		</Footer>
	</>
}

export default App;