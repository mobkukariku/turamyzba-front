import { Montserrat } from 'next/font/google'
import './globals.css'

export const metadata = {
	title: 'Turamyzba',
	description: 'Turamyzba Project',
}

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
	weight: ['400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<head>
				<title>Turamyzba</title>
				<link rel='icon' href='/assets/logo.svg' />
			</head>
			<body className={montserrat.className}>{children}</body>
		</html>
	)
}
