import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import NavBar from "../../components/Navbar/NavBar";

const SearchImages = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [executeQuery, setExecuteQuery] = useState(false); // New state to control query execution

	// Adjusted to pass an object to useQuery
	const { isLoading, error, data } = useQuery({
		queryKey: ["images", searchTerm],
		queryFn: async () => {
			const response = await axios.get(
				`https://images-api.nasa.gov/search?media_type=image&q=${searchTerm}`
			);
			return response.data;
		},
		enabled: executeQuery && !!searchTerm, // Query runs only if executeQuery is true and searchTerm is not empty
	});

	const handleSearch = () => {
		setExecuteQuery(true); // Set executeQuery to true to trigger the query
	};

	return (
		<>
			<NavBar />
			<div className="m-2 p-2 bg-[url('/bg00.jpg')] h-fit">
				<center>
					<div className="flex items-center justify-center mb-4 border border-neutral-300 rounded-md p-4 w-fit">
						<input
							type="text"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							placeholder="Enter search term..."
							className="w-fit h-12 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-600 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 mx-8"
						/>
						<button
							onClick={handleSearch}
							className="h-12 px-6 py-2 text-lg text-white mx-8 bg-gray-600 hover:bg-blue-700 rounded-md transition duration-150 ease-in-out"
						>
							Search 🔎
						</button>
					</div>
					<ul className="grid grid-cols-4 gap-4 h-full flex items-center">
						{isLoading ? (
							<div className="flex items-center justify-center w-screen">
								<img src="/loader.gif" />
							</div>
						) : error ? (
							<div>An error occurred: {error.message}</div>
						) : (
							<>
								{data?.collection?.items.map((item, i) => (
									<li
										key={i}
										className="my-2 border-neutral-600 border rounded-md p-2"
									>
										<img src={item.links[0]?.href} />
										<a
											href={item.links[0]?.href}
											target="_blank"
											rel="noopener noreferrer"
										>
											{item.data[0]?.title}
										</a>
									</li>
								))}
							</>
						)}
					</ul>
				</center>
			</div>
		</>
	);
};

export default SearchImages;
