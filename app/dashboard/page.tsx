import React from "react";
import "@/app/components/styles/DashboardPage.css";
import DashboardCards from "../components/DashboardCards";

const DashboardPage = async () => {
	return (
		<div className='dashboardPage'>
			<h1 className='text-3xl'>Your Dashboard</h1>

			<DashboardCards />
		</div>
	);
};

export default DashboardPage;
