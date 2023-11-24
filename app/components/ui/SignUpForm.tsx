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

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!firstName || !lastName || !email || !password || !confirmPassword) {
			setError("All fields are required");
			return;
		}

		if (password !== confirmPassword) {
			setError("Confirm Password does'nt match passowrd!");
			return;
		}

		if (password === confirmPassword && password.length < 8) {
			setError("Password must be more than 8 characters");
			return;
		}

		try {
			const res = await fetch("api/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					firstName,
					lastName,
					email,
					password,
				}),
			});

			if (res.ok) {
				const form: HTMLFormElement = e.target as HTMLFormElement;
				form.reset();
			} else {
				setError("Registeration Failed");
				return;
			}
		} catch (error) {
			console.log("Error during registeration", error);
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

			<button>Signup</button>

			{error && <h3 className='error'>{error}</h3>}

			<p>
				Have an account? <Link href={"/login"}>Login</Link>
			</p>
		</form>
	);
};

export default SignUpForm;
