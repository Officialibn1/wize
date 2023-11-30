import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return <section className='w-full'>{children}</section>;
};

export default DashboardLayout;
