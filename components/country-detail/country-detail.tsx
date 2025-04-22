import { getCountriesByName } from '@/lib/api';

type Props = {
	name?: string;
};

export const CountryDetail = async ({ name }: Props) => {
	const response = await getCountriesByName(name);
	console.log(response);

	return <div>CountryDetail: {name}</div>;
};
