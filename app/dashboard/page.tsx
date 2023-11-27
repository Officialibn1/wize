import React from "react";
import UserCard from "../components/ui/UserCard";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/options";

// const getdata = async () => {
// 	const session = await getServerSession(authOptions);

// 	const email = session?.user?.email;

// 	const res = await fetch("/api/fetchuser", {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({
// 			email,
// 		}),
// 	});

// 	const data = await res.json();

// 	return data;
// };

const DashboardPage = async () => {
	// const data = await getdata();

	// console.log(data);

	return (
		<div className='flex flex-col gap-5 items-center outline w-full'>
			<UserCard />
		</div>
	);
};

export default DashboardPage;
