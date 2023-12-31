import React from "react";
import SignUpForm from "../components/ui/SignUpForm";
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
				<SignUpForm />
			</div>
		</div>
	);
};

export default LoginPage;
