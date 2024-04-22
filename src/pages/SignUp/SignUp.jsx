import NavBar from "../../components/NavBar2/NavBar2";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

function SignUp() {
	return (
		<>
			<div className="bg-cover bg-center bg-[url('/register.jpg')] w-full h-screen">
				<NavBar />
				<RegisterForm />
			</div>
		</>
	);
}

export default SignUp;
