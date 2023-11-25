"use client";
import Link from "next/link";
import React, { useState } from "react";
import "@/app/components/styles/LoginForm.css";

const SignUpForm = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!firstName || !lastName || !email || !password || !confirmPassword) {
			setError("All fields are required!");
		}

		if (password !== confirmPassword) {
			setError("Confirm Password does'nt match password!");
		}
	};
	return (
		<form
			className='formElement'
			onSubmit={(e) => handleSubmit(e)}>
			<legend>Wize</legend>

			<h2>Signup for an account</h2>

			<label>
				<span>Firstname</span>
				<input
					type='text'
					id='lirstname'
					placeholder='Enter your Firstname'
					onChange={(e) => setFirstName(e.target.value)}
				/>
			</label>

			<label>
				<span>Lastname</span>
				<input
					type='text'
					id='lastname'
					placeholder='Enter your Lastname'
					onChange={(e) => setLastName(e.target.value)}
				/>
			</label>

			<label>
				<span>Email</span>
				<input
					type='email'
					id='email'
					placeholder='Enter your Email'
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>

			<label>
				<span>Password</span>
				<input
					type='password'
					id='password'
					placeholder='Create a password'
					onChange={(e) => setPassword(e.target.value)}
				/>
			</label>

			<label>
				<span>Confirm Password</span>
				<input
					type='password'
					id='confirmPassword'
					placeholder='Confirm your password'
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
			</label>

			<button disabled={isLoading}>
				{isLoading ? "Signing Up. . ." : "SignUp"}
			</button>

			{error && <h3 className='error'>{error}</h3>}
			<p>
				Have an account? <Link href={"/login"}>Login</Link>
			</p>
		</form>
	);
};

export default SignUpForm;
