import React from "react";
import "@/app/components/styles/ServicesPage.css";
import HomeNavbar from "../components/Navbar";
import Footer from "../components/Footer";

const ServicesPage = () => {
	return (
		<div className='servicesPage'>
			<HomeNavbar />
			<h1 className='text3xl'>ServicesPage</h1>

			<Footer />
		</div>
	);
};

export default ServicesPage;
