import Image from "next/image";
import React from "react";

type User =
	| {
			name?: string | null | undefined;
			email?: string | null | undefined;
			image?: string | null | undefined;
	  }
	| undefined;

const UserCard = ({ user }: { user: User }) => {
	console.log(user?.image);

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
					alt={user?.email as string}
					className='w-24 h-24 rounded-full'
				/>
			</div>
			<h1 className='text-3xl'>{user?.name}</h1>

			<p>{user?.email}</p>
		</div>
	);
};

export default UserCard;
