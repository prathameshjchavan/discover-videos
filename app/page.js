import Banner from "./components/Banner";

export default function Home() {
	return (
		<main>
			<h1>Netflix</h1>

			<Banner
				title="Clifford the red dog"
				subTitle="a very cute dog"
				imgUrl="/static/clifford.webp"
			/>
		</main>
	);
}
