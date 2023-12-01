import React from "react";
import "@/app/components/styles/DashboardPage.css";
import DashboardCards from "../components/DashboardCards";
import TotalGrowth from "../components/ui/TotalGrowth";

const DashboardPage = async () => {
	return (
		<div className='dashboardPage'>
			<h1 className='text-3xl'>Your Dashboard</h1>

			{/* Dashboard cards */}
			<DashboardCards />

			{/* First bar chart card */}
			<TotalGrowth />
		</div>
	);
};

export default DashboardPage;
