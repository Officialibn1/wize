import React from "react";
import DashboardSideNav from "../components/ui/DashboardSideNav";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className='w-full flex lg:gap-5 outline'>
			<DashboardSideNav />
			{children}
		</section>
	);
};

export default DashboardLayout;
