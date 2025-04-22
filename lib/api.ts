// GET		: https://restcountries.com/v3.1/all?{fields} - get all countries
// USAGE	: https://restcountries.com/v3.1/all?fields=borders,capital,currencies,flags,languages,name,population,region,subregion,tld

// GET		: https://restcountries.com/v3.1/region/{region}?{fields} - filter countries by region
// USAGE	: https://restcountries.com/v3.1/region/africa?fields=borders,capital,currencies,flags,languages,name,population,region,subregion,tld

// GET		: https://restcountries.com/v3.1/name/{name}?{fields} - filter country by common or official name
// USAGE	: https://restcountries.com/v3.1/name/angola?fields=borders,capital,currencies,flags,languages,name,population,region,subregion,tld

import { z } from 'zod';

import { type Country, countrySchema } from '@/lib/country-schema';

const API_BASE_URL = 'https://restcountries.com/v3.1';
const API_FIELDS =
	'fields=borders,capital,currencies,flags,languages,name,population,region,subregion,tld';

export const getAllCountries = async (): Promise<Country[]> => {
	const url = `${API_BASE_URL}/all?${API_FIELDS}`;
	const response = await fetch(url, {
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

	try {
		const data = await response.json();
		return z.array(countrySchema).parse(data);
	} catch (error) {
		console.error('Validation error:', error);
		throw new Error('Country data has unexpected format');
	}
};

export const getCountriesByRegion = async (
	region: string
): Promise<Country[]> => {
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
		throw new Error(`Failed to fetch countries from region: ${region}`);
	}

	try {
		const data = await response.json();
		return z.array(countrySchema).parse(data);
	} catch (error) {
		console.error('Validation error:', error);
		throw new Error('Country data has unexpected format');
	}
};

export const getCountryByName = async (
	name: string
): Promise<Country | null> => {
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
		throw new Error(`Failed to fetch country: ${name}`);
	}

	try {
		const [data] = await response.json();
		return countrySchema.parse(data);
	} catch (error) {
		console.error('Validation error:', error);
		throw new Error('Country data has unexpected format');
	}
};
