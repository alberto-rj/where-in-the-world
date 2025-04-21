import { SearchIcon } from 'lucide-react';

export const SearchCountry = () => {
	return (
		<div
			className='
				grow
				shadow-lg 
				rounded-md 
				max-w-[480px] 
				flex items-center 
				bg-neutral-100  
				text-neutral-500 
				py-4 
				ring-1 ring-neutral-2 
				focus-within:ring-2 
				focus-within:ring-neutral-1 
				dark:bg-neutral-1
				dark:outline-neutral-300 
				dark:focus-within:ring-neutral-100
			'
		>
			<label
				htmlFor='search-country'
				className='shrink-0 px-4'
			>
				<span className='sr-only'>Search country</span>
				<SearchIcon
					size={18}
					aria-hidden={true}
					focusable={false}
					className='
						text-neutral-300 
						dark:text-neutral-100
					'
				/>
			</label>
			<input
				id='search-country'
				placeholder='Search for a country...'
				className='
					grow 
					border-none 
					outline-none 
					text-sm  
					placeholder:text-neutral-300
					dark:text-neutral-100 
					dark:placeholder:text-neutral-100
				'
			/>
		</div>
	);
};
