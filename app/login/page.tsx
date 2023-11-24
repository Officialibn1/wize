import React from "react";
import LoginForm from "../components/ui/LoginForm";
import "@/app/components/styles/LoginPage.css";

const LoginPage = () => {
	return (
		<main className=' customContainer'>
			<div className='loginPage'>
				<LoginForm />
			</div>
		</main>
	);
};

export default LoginPage;
