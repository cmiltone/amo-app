export class MealItem {
	id: number;
	name: string;
	price: number;
	category: string;
	restaurant: string
	imageUrls: string[];
}
export class Order{
	id: number;
	status: string;
	date: string;
	cost: number;
	items: MealItem[];
}

export class Restaurant {
	id: number;
	name: string;
	location: string;
}