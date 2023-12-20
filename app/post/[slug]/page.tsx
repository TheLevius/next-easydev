type Props = {
	params: unknown;
};

export async function generateStaticParams() {
	const films = await fetch('https://swapi.dev/api/films').then((res) =>
		res.json()
	);

	return films.results.map((film: any) => ({
		slug: film.title.replace(/\s/g, '-'),
	}));
}

export default function Post({ params }: Props) {
	return (
		<div>
			<h1>Film with id: {JSON.stringify(params)}</h1>
		</div>
	);
}
