import NavBar2 from "../../components/NavBar2/NavBar2";

export default function Landing() {
	return (
		<>
			<NavBar2 />
			<img src="/nebula2.jpg" alt="Nebula" className="w-screen h-auto" />
			<div className="justify-items-center tracking-widest text-balance antialiased w-screen self-center px-64">
				<section className="mb-48 mt-16">
					<h1 className="text-8xl font-bold mb-8">Welcome</h1>
					<p className="text-3xl mb-16">
						Interactive dashboard to visualize data from NASA APIs
					</p>
					<p className="text-2xl mb-36">
						The project aims to leverage the power of NASA's extensive
						science data repositories to create an intuitive and
						interactive dashboard. Inspired by platforms like VEDA
						(Visualization, Exploration, and Data Analysis), this project
						seeks to offer similar functionalities tailored towards
						visualizing and interpreting data from various NASA APIs.
					</p>
				</section>

				<section className="mb-48 mt-16 ">
					<h2 className="text-5xl font-semibold mb-16">
						Astronomy Picture of the Day (APOD)
					</h2>
					<p className="text-2xl mb-16">
						The NASA Astronomy Picture of the Day (APOD) API is a powerful
						tool designed to provide daily astronomical images and
						explanations to users worldwide. Developed and maintained by
						NASA, this API serves as a bridge between the vast amount of
						astronomical data collected by NASA and the public, allowing
						anyone with internet access to explore the cosmos through
						stunning images and insightful descriptions.
					</p>
				</section>

				<section className="mb-48 mt-16">
					<h2 className="text-5xl font-semibold mb-16">
						Near-Earth Objects (NEO)
					</h2>
					<p className="text-2xl mb-16">
						The NASA Near-Earth Objects (NEO) API is a powerful tool
						designed to provide detailed information about asteroids and
						comets that come close to Earth's orbit. This API is part of
						NASA's broader efforts to enhance our understanding of the
						solar system and mitigate potential hazards posed by
						near-Earth objects. By offering access to data such as size,
						speed, and close-approach details of these celestial bodies,
						the NEO API enables scientists, researchers, and enthusiasts
						alike to explore and analyze the dynamic nature of our solar
						neighborhood.
					</p>
				</section>

				<section className="mb-48 mt-16">
					<h2 className="text-5xl font-semibold mb-16">
						Nasa Image Search
					</h2>
					<p className="text-2xl mb-16">
						The NASA Near-Earth Objects (NEO) API is a powerful tool
						designed to provide detailed information about asteroids and
						comets that come close to Earth's orbit. This API is part of
						NASA's broader efforts to enhance our understanding of the
						solar system and mitigate potential hazards posed by
						near-Earth objects. By offering access to data such as size,
						speed, and close-approach details of these celestial bodies,
						the NEO API enables scientists, researchers, and enthusiasts
						alike to explore and analyze the dynamic nature of our solar
						neighborhood.
					</p>
				</section>
			</div>
		</>
	);
}
