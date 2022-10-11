import FavoritesPage from 'pages/FavoritesPage';
import { lazy } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { checkPathMatch, paths } from './helpers';


const HomePage = lazy(() => import('pages/HomePage'));
const ProductDetailsPage = lazy(() => import('pages/ProductDetailsPage'));
import LoginPage from './../pages/AuthPages/LoginPage';
import RegisterPage from 'pages/AuthPages/RegisterPage';

const PublicRoutes: React.FC = () => {
	const location = useLocation()

	const isMatch = checkPathMatch(location.pathname, paths)

	return (
		<Routes>
			<Route path={paths.login} element={<LoginPage />} />
			<Route path={paths.register} element={<RegisterPage />} />

			<Route path={paths.home} element={<HomePage />} />
			<Route path={paths.productDetails} element={<ProductDetailsPage />} />
			<Route path={paths.favorites} element={<FavoritesPage />} />

			<Route path='*' element={!isMatch ? <Navigate to={paths.home} /> : null} />
		</Routes>
	)
}

export default PublicRoutes;