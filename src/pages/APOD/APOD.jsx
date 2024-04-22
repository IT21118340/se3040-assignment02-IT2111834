import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/Navbar/NavBar";

const APOD = () => {
	/*const [apodData, setApodData] = useState(null);

	useEffect(() => {
		const fetchAPOD = async () => {
			try {
				const response = await axios.get(
					"https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY"
				);
				setApodData(response.data);
			} catch (error) {
				console.error("Error fetching APOD data:", error);
			}
		};

		fetchAPOD();
	}, []);

	return (
		<div>
			{apodData && (
				<div>
					<h1>{apodData.title}</h1>
					<img src={apodData.url} alt={apodData.title} />
					<p>{apodData.explanation}</p>
				</div>
			)}
		</div>
	);*/

	return (
		<>
			<NavBar />
			<div className="m-2 p-2 bg-[url('/bg00.jpg')] h-fit">
				<center className="p-4 m-4">
					<h1 className="text-3xl font-bold mb-8 mt-2 underline">
						Aurora Banks Peninsula
					</h1>
					<img src="./apod2.jpg" alt="apod" />
					<p className="text-1xl tracking-widest my-8 px-16">
						{" "}
						This well-composed composite panoramic view looks due south
						from Banks Peninsula near Christchurch on New Zealand's South
						Island. The base of a tower-like rocky sea stack is awash in
						the foreground, with stars of the Southern Cross at the top of
						the frame and planet Earth's south celestial pole near center.
						Still, captured on May 11, vibrant aurora australis dominate
						the starry southern sea and skyscape. The shimmering southern
						lights were part of extensive auroral displays that
						entertained skywatchers in northern and southern hemispheres
						around planet Earth, caused by intense geomagnetic storms. The
						extreme spaceweather was triggered by the impact of coronal
						mass ejections launched from powerful solar active region AR
						3664.{" "}
					</p>
				</center>
			</div>
		</>
	);
};

export default APOD;
