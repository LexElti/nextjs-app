const API_URL = process.env.NEXT_PUBLIC_DOMAIN;
export const API = {
	topPage: {
		find: API_URL + '/api/top-page/find',
		byAlias: API_URL + '/api/top-page/byAlias/'
	},
	product: {
		find: API_URL + '/api/product/find'
	},
	review: {
		createDemo: API_URL + '/api/review/create-demo'
	}
};
