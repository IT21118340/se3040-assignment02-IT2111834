import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import APOD from "./pages/APOD/APOD";
import AsteroidsTable from "./pages/AsteroidsTable/AsteroidsTable";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import SearchImages from "./pages/SearchImages/SearchImages";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import SignUp from "./pages/SignUp/SignUp";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index element={<Landing />} />
					<Route path="/apod" element={<APOD />} />
					<Route path="/neo" element={<AsteroidsTable />} />
					<Route path="/imgs" element={<SearchImages />} />
					<Route path="/logout" element={<Landing />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/settings" element={<SettingsPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
