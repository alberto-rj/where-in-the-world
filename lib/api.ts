// GET		: https://restcountries.com/v3.1/all?{fields} - get all countries
// USAGE	: https://restcountries.com/v3.1/all?fields=borders,capital,currencies,flags,languages,name,population,region,subregion,tld

// GET		: https://restcountries.com/v3.1/region/{region}?{fields} - filter countries by region
// USAGE	: https://restcountries.com/v3.1/region/africa?fields=borders,capital,currencies,flags,languages,name,population,region,subregion,tld

// GET		: https://restcountries.com/v3.1/name/{name}?{fields} - filter country by common or official name
// USAGE	: https://restcountries.com/v3.1/name/angola?fields=borders,capital,currencies,flags,languages,name,population,region,subregion,tld

const API_BASE_URL = 'https://restcountries.com/v3.1';
const API_FIELDS =
	'fields=borders,capital,currencies,flags,languages,name,population,region,subregion,tld';

export const getAllCountries = async () => {
	const url = `${API_BASE_URL}/all?${API_FIELDS}`;
	const response = await fetch(url, {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		next: {
			revalidate: 3600,
		},
	});

	if (response.status === 404) {
		return [];
	}

	if (!response.ok) {
		throw new Error('Failed to fetch countries');
	}

	return await response.json();
};

export const getCountriesByRegion = async (region: string) => {
	const url = `${API_BASE_URL}/region/${region}?${API_FIELDS}`;
	const response = await fetch(url, {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		next: {
			revalidate: 3600,
		},
	});

	if (response.status === 404) {
		return [];
	}

	if (!response.ok) {
		throw new Error('Failed to fetch countries');
	}

	return await response.json();
};

export const getCountryByName = async (name: string) => {
	const url = `${API_BASE_URL}/name/${name}?${API_FIELDS}`;
	const response = await fetch(url, {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		next: {
			revalidate: 3600,
		},
	});

	if (response.status === 404) {
		return null;
	}

	if (!response.ok) {
		throw new Error('Failed to fetch countries');
	}

	return response.json();
};
