import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from "react-helmet";

import { PageWrapper } from 'App.styled';
import { ProductGroup, ProductGroupContainer } from './styled';
import ProductCard from 'blocks/ProductCard';
import { selectFavorites } from 'features/Favorites/selectors';
import { get } from 'helpers/request';
import { I_UniRes } from './../../types';

const HomePage: React.FC = () => {
	const idsInFavorites = useSelector(selectFavorites);

	const [products, setProducts] = useState<any[]>([])

	useEffect(() => {
		get('/products')
			.then((res: I_UniRes) => setProducts(res.data as any[]))
	}, [])

	if (!products) return <p>Loading</p>;

	return <>
		<Helmet>
			<title>Главная - MW Marketplace</title>
		</Helmet>
		<PageWrapper>
			<ProductGroup>
				<h2>Рекомендуемые товары</h2>

				<ProductGroupContainer>
					{products.map((p) => (
						<ProductCard
							{...p}
							key={p.id}
							isLiked={idsInFavorites.includes(p.id)}
						/>
					))}
				</ProductGroupContainer>
			</ProductGroup>
		</PageWrapper>
	</>
}

export default HomePage;
