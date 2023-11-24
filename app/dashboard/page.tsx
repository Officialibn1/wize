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
		</div>
	);
};

export default DashboardPage;
