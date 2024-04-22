import { useState } from "react";
import "./SettingsForm.css";

function SettingsForm() {
	const [email, setEmail] = useState("dkumarathungapro@gmail.com");
	const [password, setPassword] = useState("1234");
	const [key, setKey] = useState("fPmJ1tNwKaVRT5hG2jPsxrx3q4gF6OSRrzAtx0s8");

	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle login logic here
		console.log("Email:", email, "Password:", password, "API Key:", key);
	};

	return (
		<>
			<center>
				<div className="flex justify-center items-center pt-16 ">
					<form
						onSubmit={handleSubmit}
						className="l-form w-1/2 p-8 rounded-md"
					>
						<h1 className="text-4xl text-white mb-4">Settings ⚙</h1>
						<hr className="mb-8" />
						<input
							id="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							placeholder="Email"
							className="text-black text-1xl font-bold mt-1 block w-3/4 h-1/5 py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-16 focus:ring-indigo-500 focus:border-indigo-500"
						/>

						<input
							id="key"
							type="key"
							value={key}
							onChange={(e) => setKey(e.target.value)}
							required
							placeholder="API Key"
							className="text-black text-1xl font-bold my-8 block w-3/4 h-1/5 py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-16 focus:ring-indigo-500 focus:border-indigo-500"
						/>

						<input
							id="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							placeholder="Password"
							className="text-black text-1xl font-bold my-8 block w-3/4 h-1/5 py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-16 focus:ring-indigo-500 focus:border-indigo-500"
						/>

						<hr className="mt-2 mb-4" />

						<button
							type="submit"
							className=" w-2/4 inline-flex text-1xl justify-center py-2 px-4 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Submit
						</button>
						<p className="text-base text-white my-4">
							<a href="/apod" className="underline hover:text-red-700">
								Go Back
							</a>
						</p>
					</form>
				</div>
			</center>
		</>
	);
}

export default SettingsForm;
