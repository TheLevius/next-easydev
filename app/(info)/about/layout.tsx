import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Next.js',
	description: 'Generated by Next.js',
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<h1> About layout</h1>
			{children}
		</div>
	);
}
