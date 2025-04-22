import { NextResponse } from 'next/server';

import { getCountryByName } from '@/lib/api';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const name = searchParams.get('name');

	if (!name) {
		return NextResponse.json(
			{ error: 'Missing name parameter' },
			{ status: 400 }
		);
	}

	try {
		const countries = await getCountryByName(name);
		return NextResponse.json(countries);
	} catch (error) {
		return NextResponse.json(
			{ error: 'Failed to fetch countries' },
			{ status: 500 }
		);
	}
}
