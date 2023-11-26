"use client";
import { signOut, useSession } from "next-auth/react";
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

const UserCard = () => {
	const { data: session } = useSession();

	const user: User = session?.user;

	return (
		<div className=' p-5 w-fit outline mx-auto flex flex-col gap-5 text-center my-10'>
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

			<button
				className='my-5 p-3 rounded-xl bg-slate-700 text-slate-900 font-bold hover:bg-slate-800'
				onClick={() => signOut()}>
				Logout
			</button>
		</div>
	);
};

export default UserCard;
