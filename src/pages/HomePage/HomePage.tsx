import { Helmet } from "react-helmet";

import { PageWrapper } from 'App.styled';
import { dummyProducts } from 'pages/dummyProducts';
import { ProductGroup, ProductGroupContainer } from './styled';
import ProductCard from 'blocks/ProductCard';

const HomePage: React.FC = () => {
	return <>
		<Helmet>
			<title>Главная - MW Marketplace</title>
		</Helmet>
		<PageWrapper>
			<ProductGroup>
				<h2>Рекомендуемые товары</h2>

				<ProductGroupContainer>
					{dummyProducts.map((p) => (
						<ProductCard
							{...p}
							key={p.id}
						// isLiked={idsInFavorites.includes(p.id)}
						// isLiked={false}
						/>
					))}
				</ProductGroupContainer>
			</ProductGroup>
		</PageWrapper>
	</>
}

export default HomePage;
