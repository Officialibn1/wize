"use client";
import Link from "next/link";
import React, { useState } from "react";

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
};

const ContactUsForm = () => {
	const [fullName, setFullName] = useState("");
	const [tel, setTel] = useState("");
	const [email, setEmail] = useState("");
	const [complain, setComplain] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	return (
		<div className='contactUsForm'>
			<form
				className='formElement'
				onSubmit={(e) => handleSubmit(e)}>
				<legend>Contact Us</legend>

				<h2>Contact us for instant support!</h2>

				<label>
					<span>Full Name</span>
					<input
						type='text'
						id='lirstname'
						placeholder='Enter your Firstname'
						onChange={(e) => setFullName(e.target.value)}
						disabled={isLoading}
					/>
				</label>

				<label>
					<span>Phone</span>
					<input
						type='tel'
						id='lastname'
						placeholder='000 0000 000'
						onChange={(e) => setTel(e.target.value)}
						disabled={isLoading}
					/>
				</label>

				<label>
					<span>Email</span>
					<input
						type='email'
						id='email'
						placeholder='Enter your Email'
						onChange={(e) => setEmail(e.target.value)}
						disabled={isLoading}
					/>
				</label>
				<label>
					<span>Complain</span>
					<textarea
						className='min-h-[180px]'
						id='complain'
						placeholder='Write in details your complain. . .'
						onChange={(e) => setComplain(e.target.value)}
						disabled={isLoading}
					/>
				</label>

				<button disabled={isLoading}>
					{isLoading ? "Submitting. . ." : "Submit"}
				</button>

				{error && <h3 className='error'>{error}</h3>}
			</form>
		</div>
	);
};

export default ContactUsForm;
