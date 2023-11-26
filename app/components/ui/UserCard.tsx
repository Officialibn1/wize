import Image from "next/image";
import React from "react";

type User =
	| {
			firstName?: string | null | undefined;
			lastName?: string | null | undefined;
			email?: string | null | undefined;
			image?: string | null | undefined;
	  }
	| undefined;

const fetchUserData = async (userEmail: string) => {
	const res = await fetch("/api/fetchuser", {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({
			userEmail,
		}),
	});
};

const UserCard = async ({ user }: { user: User }) => {
	const userEmail = user?.email;
	const userData = await fetchUserData(userEmail as string);

	console.log(userData);

	return (
		<div className=' p-5 w-fit outline mx-auto flex flex-col gap-5 text-center'>
			<div className='w-18 h-18 rounded-full mx-auto outline'>
				<Image
					src={
						user?.image === undefined
							? "/customers/ibn_profile.png"
							: (user.image as string)
					}
					width={400}
					height={400}
					alt={"user profile"}
					className='w-24 h-24 rounded-full'
				/>
			</div>
			<p className='text-3xl'>{user?.firstName}</p>
			<h1 className='text-2xl'>{user?.lastName}</h1>

			<p>{user?.email}</p>
		</div>
	);
};

export default UserCard;
