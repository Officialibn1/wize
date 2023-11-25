"use client";
import Link from "next/link";
import React, { useState } from "react";
import "@/app/components/styles/LoginForm.css";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!firstName || !lastName || !email || !password || !confirmPassword) {
			setError("All fields are required!");
			return;
		}

		if (password !== confirmPassword) {
			setError("Confirm Password does'nt match password!");
			return;
		}

		try {
			setIsLoading(true);
			const res = await fetch("/api/signup", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					firstName,
					lastName,
					email,
					password,
				}),
			});

			if (res.ok) {
				const form = e.target as HTMLFormElement;
				form.reset();
				router.push("/login");
			} else {
				setError("Registeration failed!");
				console.log("Registeration failed!");
			}
		} catch (error) {
			console.log("Failed operation", error);
		} finally {
			setError("");
		}
		setIsLoading(false);
		setFirstName("");
		setLastName("");
		setPassword("");
		setConfirmPassword("");
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
