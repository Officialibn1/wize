import React from "react";
import "@/app/components/styles/DashboardPage.css";
import Image from "next/image";
import { dummyUserData } from "@/app/lib/placeholder_data";
import "@/app/components/styles/ProfilePage.css";

const ProfilePage = async () => {
	const user = await dummyUserData;

	return (
		<div className='dashboardPage profilePage'>
			<h1 className='text-3xl'>Profile</h1>

			<div className='profileContent'>
				{/* image container for the profile header */}
				<div className='profileImageContainer'>
					{/* Div wrapping the main header and applying the styles  */}
					<div className='profileImage'>
						<Image
							src={"/profile1.jpeg"}
							height={200}
							width={200}
							alt='user profile placeholder avatar'
						/>
					</div>
				</div>

				<div className='profileInformation'>
					<form>
						{/* full name container */}
						<label>
							<span>Full Name</span>
							<input
								type='text'
								value={user.name}
								disabled
							/>
						</label>

						{/* email addredd container */}
						<label>
							<span>Email Address</span>
							<input
								type='text'
								value={user.email}
								disabled
							/>
						</label>

						{/* useer name container */}
						<label>
							<span>User Name</span>
							<input
								type='text'
								value={user.username}
								disabled
							/>
						</label>

						{/* phone number container */}
						<label>
							<span>Phone Number</span>
							<input
								type='text'
								value={user.phoneNumber}
								disabled
							/>
						</label>

						{/* address container */}
						<label>
							<span>Address</span>
							<input
								type='text'
								value={`${user.address.houseNumber}, ${user.address.street}, ${user.address.state}, ${user.address.country}.`}
								disabled
							/>
						</label>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
