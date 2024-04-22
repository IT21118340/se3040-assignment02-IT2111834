import NavBar from "../../components/Navbar/NavBar";
import SettingsForm from "../../components/SettingsForm/SettingsForm";

function SettingsPage() {
	return (
		<>
			<div className="bg-cover bg-center bg-[url('/register.jpg')] w-full h-screen">
				<NavBar />
				<SettingsForm />
			</div>
		</>
	);
}

export default SettingsPage;
