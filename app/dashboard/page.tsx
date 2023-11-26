"use client";
import React from "react";
import UserCard from "../components/ui/UserCard";
import { signOut, useSession } from "next-auth/react";

const DashboardPage = () => {
	const { data: session } = useSession();

	return (
		<div className='flex flex-col gap-5 items-center outline w-full'>
			DashboardPage
			<UserCard user={session?.user} />
			<button
				className='my-5 p-3 rounded-xl bg-slate-700 text-slate-900 font-bold hover:bg-slate-800'
				onClick={() => signOut()}>
				Logout
			</button>
		</div>
	);
};

export default DashboardPage;
