
export interface ISKU {
	skuid: number;
	quantity: number;
	active: boolean;
	unit: string;
	size: number;
	price: number;
}

export interface IProduct {
	description2: string;
	category: string;
	images: string[];
	SKUs: ISKU[];
	subCategory: string;
	isPopular: boolean;
	createdAt: number;
	active: boolean;
	id: string;
	description1: string;
	name: string;
	image: string;
	shortInfo?: string;
	NO_ID_FIELD?: string;
}
