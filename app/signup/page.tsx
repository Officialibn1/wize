import React from "react";
import SignUpForm from "../components/ui/SignUpForm";
import "@/app/components/styles/LoginPage.css";

const LoginPage = () => {
	return (
		<main className=' customContainer'>
			<div className='loginPage'>
				<SignUpForm />
			</div>
		</main>
	);
};

export default LoginPage;
