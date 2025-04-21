import { ThemeProvider } from 'next-themes';

type Props = {
	children: React.ReactNode;
};

export function Providers({ children }: Props) {
	return (
		<ThemeProvider
			attribute='data-theme'
			defaultTheme='system'
			disableTransitionOnChange
		>
			{children}
		</ThemeProvider>
	);
}
