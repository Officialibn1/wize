"use client";

import React from "react";
import { dummyUserData } from "@/app/lib/placeholder_data";

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
};

const SettingsForm = () => {
	const user = dummyUserData;

	return (
		<div className='settingsForm'>
			<legend>Edit profile details</legend>
			<form onSubmit={(e) => handleSubmit(e)}>
				{/* First name input group */}
				<label>
					<span>First Name:</span>
					<input
						type='text'
						placeholder='John'
					/>
				</label>

				{/* Last name input group */}
				<label>
					<span>Last Name:</span>
					<input
						type='text'
						placeholder='Doe'
					/>
				</label>

				{/* Email input group */}
				<label>
					<span>Email Address:</span>
					<input
						type='email'
						placeholder='johndoe@gmail.com'
					/>
				</label>

				{/* Phone number input group */}
				<label>
					<span>Phone Number</span>
					<input
						type='tel'
						name='phone number'
						id='phoneNumber'
						placeholder='234 903 8880 282'
					/>
				</label>

				{/* Street Address input group */}
				<label>
					<span>Street Address:</span>
					<input
						type='text'
						placeholder={`${user.address.houseNumber}, ${user.address.street}`}
					/>
				</label>

				{/* State Address input group */}
				<label>
					<span>State:</span>
					<input
						type='text'
						placeholder={`${user.address.state}`}
					/>
				</label>

				{/* Country Address input group */}
				<label>
					<span>Country:</span>
					<input
						type='text'
						placeholder={`${user.address.country}`}
					/>
				</label>

				{/* Country Address input group */}
				<label>
					<span>Zip Code:</span>
					<input
						type='text'
						placeholder={`${user.address.postcode}`}
					/>
				</label>
				<div>
					<button className='wizeButton'>Update Details</button>
				</div>
			</form>
		</div>
	);
};

export default SettingsForm;
