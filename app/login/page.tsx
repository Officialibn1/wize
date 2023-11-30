import React from "react";
import LoginForm from "../components/ui/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const LoginPage = async () => {
	const session = await getServerSession();

	if (session) {
		redirect("/dashboard");
	}
	return (
		<div className='customContainer'>
			<div className='loginPage'>
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginPage;
