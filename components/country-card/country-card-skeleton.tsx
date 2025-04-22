export function CountryCardSkeleton() {
	return (
		<div className='bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md motion-safe:animate-pulse'>
			{/* Flag placeholder */}
			<div className='h-48 bg-gray-200 dark:bg-gray-600'></div>

			{/* Content placeholder */}
			<div className='p-6'>
				{/* Title placeholder */}
				<div className='h-6 bg-gray-200 dark:bg-gray-600 rounded w-3/4 mb-4'></div>

				{/* Details placeholder */}
				<div className='space-y-3'>
					<div className='h-4 bg-gray-200 dark:bg-gray-600 rounded w-full'></div>
					<div className='h-4 bg-gray-200 dark:bg-gray-600 rounded w-4/5'></div>
					<div className='h-4 bg-gray-200 dark:bg-gray-600 rounded w-2/3'></div>
				</div>
			</div>
		</div>
	);
}
