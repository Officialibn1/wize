"use client";
import React from "react";
import UserCard from "../components/ui/UserCard";

const DashboardPage = () => {
	return (
		<div className='flex flex-col gap-5 items-center'>
			DashboardPage
			<UserCard />
			<button className='my-5 p-3 rounded-xl bg-slate-700 text-slate-900 font-bold hover:bg-slate-800'>
				Logout
			</button>
		</div>
	);
};

export default DashboardPage;
