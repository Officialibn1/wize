"use client";
import Link from "next/link";
import React, { useState } from "react";
import "@/app/components/styles/LoginForm.css";

const LoginForm = () => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	return (
		<form className='formElement'>
			<legend>Wize</legend>

			<h2>Account Login</h2>

			<label>
				<span>Email / Username</span>
				<input
					type='text'
					id='name'
					placeholder='Enter your name / username'
				/>
			</label>

			<label>
				<span>Password</span>
				<input
					type='password'
					id='password'
					placeholder='Enter your password'
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

			<button>Login</button>
			{error && <h3 className='error'>{error}</h3>}
			<p>
				Don&apos;t have an account? <Link href={"/signup"}>Sign Up</Link>
			</p>
		</form>
	);
};

export default LoginForm;
