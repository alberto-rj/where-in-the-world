import { Logo } from '@/components/logo';
import { ThemePicker } from '@/components/theme-picker';

export const Header = () => {
	return (
		<header className='bg-neutral-100 dark:bg-neutral-1 shadow-md py-8'>
			<div className='container flex justify-between items-center'>
				<Logo />
				<ThemePicker />
			</div>
		</header>
	);
};
