import { useState, useEffect, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
// import { get } from 'helpers/request';
import { addToFavorites, removeFromFavorites } from 'features/Favorites/reducer';
import { selectFavorites } from 'features/Favorites/selectors';
import { ReactComponent as HeartEmpty } from './img/heart-empty.svg';
import { ReactComponent as HeartFilled } from './img/heart-filled.svg';
import { PageWrapper } from 'App.styled';
import {
	Wrapper,
	LikeWrapper,
	ImagesWrapper,
	Image,
	InfoWrapper,
	PriceWrapper,
	PriceRegular,
	PriceRegularWhenDiscounted,
	PriceDiscounted,
} from './styled';
import type { I_ProductDetails } from 'pages/types';
import type { I_UniRes } from 'types';
import { dummyProducts } from 'pages/dummyProducts';


const ProductDetailsPage: React.FC = () => {
	const params = useParams()
	const dispatch = useDispatch();

	const [productDetails, setProductDetails] = useState<I_ProductDetails>()

	// useEffect(() => {
	// 	get(`/products/${params.idOrSlug}`)
	// 		.then((res: I_UniRes) => setProductDetails(res.data))
	// }, [params.idOrSlug])

	useEffect(() => {
		const found = dummyProducts.find((p) => (
			[String(p.id), p.slug].includes(params.idOrSlug)
		))

		if (found) setProductDetails(found);
	}, [params.idOrSlug])

	const idsInFavorites = useSelector(selectFavorites);

	const isLiked = useMemo(
		() => idsInFavorites.includes(productDetails?.id!),
		[idsInFavorites, productDetails]
	)

	const handleFavorites = useCallback((e: React.MouseEvent<HTMLElement>) => {
		const { productId } = e.currentTarget.dataset

		dispatch(
			!idsInFavorites.includes(+productId!)
				? addToFavorites(+productId!)
				: removeFromFavorites(+productId!)
		)
	}, [dispatch, idsInFavorites])


	if (!productDetails) return null


	const { id, imgSrc, title, desc, price, priceDiscounted } = productDetails


	return <>
		<Helmet>
			<title>Главная - MW Marketplace</title>
		</Helmet>

		<PageWrapper>
			<Wrapper>
				<ImagesWrapper>
					<Image src={imgSrc} />

					<LikeWrapper
						data-product-id={id}
						onClick={handleFavorites}
					>
						{isLiked ? <HeartFilled /> : <HeartEmpty />}
					</LikeWrapper>
				</ImagesWrapper>

				<InfoWrapper>
					<h1>{title}</h1>

					<PriceWrapper>
						{Number.isInteger(priceDiscounted) ? <>
							<PriceDiscounted>{priceDiscounted} ₽</PriceDiscounted>
							<PriceRegularWhenDiscounted>{price} ₽</PriceRegularWhenDiscounted>
						</> : (
							<PriceRegular>{price} ₽</PriceRegular>
						)}
					</PriceWrapper>

					<p>{desc}</p>
				</InfoWrapper>
			</Wrapper>
		</PageWrapper>
	</>
}

export default ProductDetailsPage;
