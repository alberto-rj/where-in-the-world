import { SearchIcon } from 'lucide-react';

export const SearchField = () => {
	return (
		<div className='grow max-w-[480px] flex items-center bg-neutral-100 dark:bg-neutral-1 text-neutral-500 shadow-lg rounded-md py-[14px] sm:py-[18px] outline-1 outline-neutral-2 focus-within:outline-2 focus-within:outline-neutral-1 dark:outline-neutral-300 dark:focus-within:outline-neutral-100'>
			<label
				htmlFor='search-country'
				className='shrink-0 pl-8 pr-4'
			>
				<span className='sr-only'>Search country</span>
				<SearchIcon
					size={18}
					aria-hidden={true}
					focusable={false}
					className='text-neutral-300 dark:text-neutral-100'
				/>
			</label>
			<input
				id='search-country'
				placeholder='Search for a country...'
				className='grow border-none outline-none text-xs sm:text-md placeholder:text-neutral-300 dark:placeholder:text-neutral-100 dark:text-neutral-100'
			/>
		</div>
	);
};
