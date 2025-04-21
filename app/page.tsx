import { CountriesList } from '@/components/countries-list';
import { CountryForm } from '@/components/country-form';

export default function Home() {
	return (
		<>
			<CountryForm />
			<CountriesList />
		</>
	);
}
