import { CountryCardSkeleton } from '@/components/country-card';

export function CountryGridSkeleton({ count = 12 }) {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
			{Array(count)
				.fill(0)
				.map((_, index) => (
					<CountryCardSkeleton key={index} />
				))}
		</div>
	);
}
