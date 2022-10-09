export interface I_ProductDetails {
	id: number;
	slug?: string;
	imgSrc: string;
	price: number;
	priceDiscounted?: number;
	title: string;
	desc: string;
}