import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return <main className='w-full'>{children}</main>;
};

export default DashboardLayout;
