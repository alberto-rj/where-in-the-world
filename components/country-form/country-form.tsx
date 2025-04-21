import { RegionSelect } from '@/components/region-select';
import { SearchCountry } from '@/components/search-country';

export const CountryForm = () => {
	return (
		<form
			className='
				container py-8 sm:py-12 
				flex flex-wrap gap-10 justify-between flex-items-center
			'
		>
			<SearchCountry />
			<RegionSelect />
		</form>
	);
};
