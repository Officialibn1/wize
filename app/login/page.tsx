import React from "react";
import LoginForm from "../components/ui/LoginForm";

const LoginPage = async () => {
	return (
		<main className='customContainer'>
			<div className='loginPage'>
				<LoginForm />
			</div>
		</main>
	);
};

export default LoginPage;
