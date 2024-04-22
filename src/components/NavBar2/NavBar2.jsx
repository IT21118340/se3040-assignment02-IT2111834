const NavBar2 = () => {
	return (
		<nav className="flex justify-between items-center p-6 bg-black">
			<div className="flex items-center">
				<img src="/icon.png" className="h-16 w-auto mr-4" />
			</div>
			<div className="Justify-start">
				<a
					href="/login"
					className="text-white font-bold text-2xl m-8 p-4 rounded-lg border-2 border-black hover:text-black hover:underline hover:bg-gradient-to-r from-cyan-500 to-blue-500"
				>
					👉 Login / Sign Up
				</a>
			</div>
		</nav>
	);
};

export default NavBar2;
