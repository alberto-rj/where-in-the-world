import { CountryGrid } from '@/components/country-grid';
import { CountryForm } from '@/components/country-form';

export default function Home() {
	return (
		<>
			<CountryForm />
			<CountryGrid />
		</>
	);
}
