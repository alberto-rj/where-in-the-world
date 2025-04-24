import { CountryGridSkeleton } from '@/components/country-grid/country-grid-skeleton';

export default function Loading() {
	return (
		<div className='container mx-auto px-4 py-8'>
			{/* Placeholders para os filtros */}
			<div 
				className='
					flex flex-col md:flex-row md:justify-between gap-4 mb-8
				'>
				<div className='h-14 bg-gray-200 dark:bg-gray-700 rounded w-full md:w-96 motion-safe:animate-pulse'></div>
				<div className='h-14 bg-gray-200 dark:bg-gray-700 rounded w-full md:w-48 motion-safe:animate-pulse'></div>
			</div>

			<CountryGridSkeleton count={12} />
		</div>
	);
}
