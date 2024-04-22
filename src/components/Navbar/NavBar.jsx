const NavBar = () => {
	return (
		<nav className="flex justify-between items-center p-6 bg-black">
			<div className="flex items-center">
				<img src="/icon.png" className="h-16 w-auto mr-4" />
			</div>
			<div className="Justify-start">
				<a
					href="/apod"
					className="text-white font-bold text-2xl m-1 p-4 rounded-lg border-2 border-black hover:text-black hover:underline hover:bg-gradient-to-r from-cyan-500 to-blue-500"
				>
					APOD 📷
				</a>
				<a
					href="/neo"
					className="text-white font-bold text-2xl m-1 p-4 rounded-lg border-2 border-black hover:text-black hover:underline hover:bg-gradient-to-r from-cyan-500 to-blue-500"
				>
					NEO 🌌
				</a>
				<a
					href="/imgs"
					className="text-white font-bold text-2xl m-1 p-4 rounded-lg border-2 border-black hover:text-black hover:underline hover:bg-gradient-to-r from-cyan-500 to-blue-500"
				>
					NASA Image Search 🚀
				</a>
				<a
					href="/settings"
					className="text-white font-bold text-2xl m-1 p-4 rounded-lg border-2 border-black hover:text-black hover:underline hover:bg-gradient-to-r from-cyan-500 to-blue-500"
				>
					Settings ⚙️
				</a>
				<a
					href="/logout"
					className="text-white font-bold text-2xl m-1 p-4 rounded-lg border-2 border-black hover:text-black hover:underline hover:bg-gradient-to-r from-cyan-500 to-blue-500"
				>
					Logout 🚪
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
