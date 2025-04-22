export function CountryDetailSkeleton() {
	return (
		<div className='motion-safe:animate-pulse'>
			{/* Back button placeholder */}
			<div className='mb-16'>
				<div className='w-24 h-10 bg-gray-200 dark:bg-gray-600 rounded'></div>
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
				{/* Flag placeholder */}
				<div className='h-64 md:h-96 bg-gray-200 dark:bg-gray-600 rounded'></div>

				<div>
					{/* Title placeholder */}
					<div className='h-10 bg-gray-200 dark:bg-gray-600 rounded w-1/2 mb-8'></div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
						<div className='space-y-4'>
							{Array(5)
								.fill(0)
								.map((_, i) => (
									<div
										key={`left-${i}`}
										className='h-5 bg-gray-200 dark:bg-gray-600 rounded w-full'
									></div>
								))}
						</div>

						<div className='space-y-4'>
							{Array(3)
								.fill(0)
								.map((_, i) => (
									<div
										key={`right-${i}`}
										className='h-5 bg-gray-200 dark:bg-gray-600 rounded w-full'
									></div>
								))}
						</div>
					</div>

					{/* Border countries placeholder */}
					<div className='mt-8'>
						<div className='h-6 bg-gray-200 dark:bg-gray-600 rounded w-1/3 mb-4'></div>
						<div className='flex flex-wrap gap-2'>
							{Array(3)
								.fill(0)
								.map((_, i) => (
									<div
										key={`border-${i}`}
										className='h-8 w-16 bg-gray-200 dark:bg-gray-600 rounded'
									></div>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
