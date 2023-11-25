"use client";
import Link from "next/link";
import React, { useState } from "react";
import "@/app/components/styles/LoginForm.css";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!email || !password) {
			setError("All fields are required!");
		}
	};
	return (
		<form
			className='formElement'
			onSubmit={(e) => handleSubmit(e)}>
			<legend>Wize</legend>

			<h2>Account Login</h2>

			<label>
				<span>Email</span>
				<input
					type='text'
					id='username'
					placeholder='Enter your email'
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>

			<label>
				<span>Password</span>
				<input
					type='password'
					id='password'
					placeholder='Enter your password'
					onChange={(e) => setPassword(e.target.value)}
				/>
			</label>

			<div>
				<label className='inputCheck'>
					<input
						type='checkbox'
						name='rememberMe'
						id='rememberMe'
					/>
					<span>Remember Me</span>
				</label>

				<p>Forgot Password?</p>
			</div>

			<button disabled={isLoading}>
				{isLoading ? "Logging In. . ." : "Login"}
			</button>

			{error && <h3 className='error'>{error}</h3>}

			<p>
				Don&apos;t have an account? <Link href={"/signup"}>Sign Up</Link>
			</p>
		</form>
	);
};

export default LoginForm;
