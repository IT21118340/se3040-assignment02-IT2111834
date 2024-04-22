import LoginForm from "../../components/LoginForm/LoginForm";
import NavBar from "../../components/NavBar2/NavBar2";

function Login() {
	return (
		<>
			<div className="bg-cover bg-center bg-[url('/login.jpg')] w-full h-screen">
				<NavBar />
				<LoginForm />
			</div>
		</>
	);
}

export default Login;
