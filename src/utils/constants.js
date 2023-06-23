import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
export const links = [
	{
		id: 1,
		text: 'home',
		url: '/',
	},
	{
		id: 2,
		text: 'about',
		url: '/about',
	},
	{
		id: 3,
		text: 'products',
		url: '/products',
	},
];

export const services = [
	{
		id: 1,
		icon: <GiCompass />,
		title: 'mission',
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
	},
	{
		id: 2,
		icon: <GiDiamondHard />,
		title: 'vision',
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
	},
	{
		id: 3,
		icon: <GiStabbedNote />,
		title: 'history',
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
	},
];

export const products_url = 'https://course-api.com/react-store-products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;

let a = {
	id: 'recZkNf2kwmdBcqd0',
	name: 'accent chair',
	price: 25999,
	image: 'https://www.course-api.com/images/store/product-1.jpeg',
	colors: ['#ff0000', '#00ff00', '#0000ff'],
	company: 'marcos',
	description:
		'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
	category: 'office',
	shipping: true,
};
