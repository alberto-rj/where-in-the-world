import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import { Header } from '@/components/header/header';

const nunito = localFont({
	src: [
		{
			path: '../public/assets/fonts/NunitoSans-ExtraBold.woff2',
			weight: '800',
			style: 'normal',
		},
		{
			path: '../public/assets/fonts/NunitoSans-SemiBold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../public/assets/fonts/NunitoSans-Light.woff2',
			weight: '300',
			style: 'normal',
		},
	],
});

export const metadata: Metadata = {
	title: 'Where in the world?',
	description: 'Countries',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${nunito.className} antialiased min-h-screen`}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
