import React from "react";
import "@/app/components/styles/ServicesPage.css";
import HomeNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import OurServiceHeader from "../components/OurServiceHeader";

const ServicesPage = () => {
	return (
		<div className='servicesPage'>
			<HomeNavbar />

			{/* Hero banner */}
			<OurServiceHeader />

			<Footer />
		</div>
	);
};

export default ServicesPage;
