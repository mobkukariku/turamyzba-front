import { Header } from "@/components"



export const metadata = {
	title: 'Turamyzba',
}


export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header isInputVisible={false} />
			{children}
		</>
	)
}
