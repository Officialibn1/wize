import React from "react";
import DashboardSideNav from "../components/ui/DashboardSideNav";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className='w-full grid grid-cols-8 md:grid-cols-12 gap-5 outline'>
			<DashboardSideNav />
			{children}
		</section>
	);
};

export default DashboardLayout;
