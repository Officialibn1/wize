"use client";
import React from "react";
import { useSession } from "next-auth/react";
import UserCard from "../components/ui/UserCard";
import Image from "next/image";

const DashboardPage = () => {
	const { data: session } = useSession();
	return (
		<div className='flex flex-col gap-5 items-center'>
			DashboardPage
			<UserCard user={session?.user} />
			<Image
				src={"/customers/ibn_profile.png"}
				width={200}
				height={200}
				alt='texting image'
				className='w-12 h-12 rounded-full'
			/>
		</div>
	);
};

export default DashboardPage;
