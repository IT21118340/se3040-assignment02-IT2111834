import axios from "axios";
import { useState } from "react";
import AsteroidCard from "../../components/AsteroidCard/AsteroidCard";
import NavBar from "../../components/Navbar/NavBar";

const AsteroidsTable = () => {
	const [startDate, setStartDate] = useState("");
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchData = async () => {
		if (!startDate) return;

		setIsLoading(true);
		try {
			const result = await axios.get(
				`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${startDate}&api_key=DEMO_KEY`
			);
			setData(result.data.near_earth_objects[startDate]);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<NavBar />
			<div className="m-2 p-2 bg-[url('/bg00.jpg')] h-fit">
				<center>
					<div className="flex items-center justify-center mb-4 border border-neutral-300 rounded-md p-4 w-fit">
						<input
							type="date"
							value={startDate}
							onChange={(e) => setStartDate(e.target.value)}
							className="w-fit h-12 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-600 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 mx-8"
						/>

						<button
							onClick={fetchData}
							className="h-12 px-6 py-2 text-lg text-white mx-8 bg-gray-600 hover:bg-blue-700 rounded-md transition duration-150 ease-in-out"
						>
							Search 🔎
						</button>
					</div>
					<div className="grid grid-cols-4 gap-4 h-full">
						{isLoading ? (
							<div className="flex items-center justify-center w-screen">
								<img src="/loader.gif" />
							</div>
						) : (
							<>
								{data.map((item) => (
									<AsteroidCard
										key={item.neo_reference_id}
										asteroid={item}
									/>
								))}
							</>
						)}
					</div>
				</center>
			</div>
		</>
	);
};

export default AsteroidsTable;
