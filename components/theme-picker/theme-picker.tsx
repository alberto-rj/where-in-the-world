'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from 'lucide-react';

export const ThemePicker = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <ThemePickerSkeleton />;
	}

	const isDarkMode = theme === 'dark';

	return (
		<button
			role='switch'
			aria-checked={isDarkMode}
			onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
			className='cursor-pointer text-neutral-600 dark:text-neutral-100 flex items-center gap-2'
		>
			{isDarkMode ? (
				<SunIcon
					aria-hidden={true}
					focusable={false}
					className='size-[1.125rem] sm:size-6'
				/>
			) : (
				<MoonIcon
					aria-hidden={true}
					focusable={false}
					className='size-[1.125rem] sm:size-6'
				/>
			)}
			<span className='font-semibold text-xs sm:text-md leading-none'>
				Dark Mode
			</span>
		</button>
	);
};

const ThemePickerSkeleton = () => {
	return (
		<div className='flex items-center gap-2'>
			<div className='size-[1.25rem] sm:size-[1.5rem] rounded-full bg-neutral-300 motion-safe:animate-pulse'></div>
			<div className='size-[1.125rem] sm:h-[1.25rem] w-[7rem] rounded-md bg-neutral-300 motion-safe:animate-pulse'></div>
		</div>
	);
};
