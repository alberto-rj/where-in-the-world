export const API_BASE_URL = 'https://restcountries.com/v3.1';
export const API_FIELDS =
	'fields=borders,capital,currencies,flags,languages,name,population,region,subregion,tld';

export const getCountriesByRegion = async (region?: string) => {
	const url = region
		? `${API_BASE_URL}/region/${region}`
		: `${API_BASE_URL}/all`;

	const response = await fetch(`${url}?${API_FIELDS}`, {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		next: {
			revalidate: 3600,
		},
	});

	if (!response.ok) {
		throw new Error('Failed to fetch countries');
	}

	return response;
};

export const getCountriesByName = async (name?: string) => {
	const url = name ? `${API_BASE_URL}/name/${name}` : `${API_BASE_URL}/all`;

	const response = await fetch(`${url}?${API_FIELDS}`, {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		next: {
			revalidate: 3600,
		},
	});

	if (!response.ok) {
		throw new Error('Failed to fetch countries');
	}

	return response;
};
