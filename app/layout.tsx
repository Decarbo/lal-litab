import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './navbar/page';
import { Yatra_One } from 'next/font/google';

const yatraOne = Yatra_One({
	subsets: ['latin'],
	variable: '--font-yatra',
	weight: '400',
	display: 'swap',
});
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${yatraOne.variable} `}>
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
