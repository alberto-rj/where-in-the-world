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

export const getCountriesByRegion = async (region?: string) => {
	if (!region) {
		return await getAllCountries();
	}

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

export const getCountriesByName = async (name?: string) => {
	if (!name) {
		return await getAllCountries();
	}

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
		return [];
	}

	if (!response.ok) {
		throw new Error('Failed to fetch countries');
	}

	return response.json();
};
