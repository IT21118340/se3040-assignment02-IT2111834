import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle login logic here
		console.log("Email:", email, "Password:", password);
	};

	return (
		<>
			<center>
				<div className="flex justify-center items-center pt-24 ">
					<form
						onSubmit={handleSubmit}
						className="l-form w-1/2 p-8 rounded-md"
					>
						<h1 className="text-4xl text-white mb-4">Login</h1>
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
							<a href="/apod">Log In</a>
						</button>
						<p className="text-base text-white my-4">
							<a href="/signup" className="underline hover:text-red-700">
								Not a registered user?? Sign Up
							</a>
						</p>
					</form>
				</div>
			</center>
		</>
	);
}

export default LoginForm;
