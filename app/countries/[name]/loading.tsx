import { CountryDetailSkeleton } from '@/components/country-detail';

export default function Loading() {
	return (
		<div className='container mx-auto px-4 py-16'>
			<CountryDetailSkeleton />
		</div>
	);
}
