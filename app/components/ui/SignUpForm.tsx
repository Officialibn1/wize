import Link from "next/link";
import React from "react";
import "@/app/components/styles/LoginForm.css";

const SignUpForm = () => {
	return (
		<form className='formElement'>
			<legend>Signup for an account</legend>

			<label>
				<span>Firstname</span>
				<input
					type='text'
					id='lirstname'
					placeholder='Enter your Firstname'
				/>
			</label>

			<label>
				<span>Lastname</span>
				<input
					type='text'
					id='lastname'
					placeholder='Enter your Lastname'
				/>
			</label>

			<label>
				<span>Email</span>
				<input
					type='text'
					id='email'
					placeholder='Enter your Email'
				/>
			</label>

			<label>
				<span>Password</span>
				<input
					type='password'
					id='password'
					placeholder='Create a password'
				/>
			</label>

			<label>
				<span>Confirm Password</span>
				<input
					type='password'
					id='confirmPassword'
					placeholder='Confirm your password'
				/>
			</label>

			<button>Signup</button>
			<p>
				Have an account? <Link href={"/login"}>Login</Link>
			</p>
		</form>
	);
};

export default SignUpForm;
