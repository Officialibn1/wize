import React from "react";
import "@/app/components/styles/TechnologyPage.css";
import "@/app/components/styles/ServicesPage.css";
import ServicesList from "../components/ServicesList";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";
import HomeNavbar from "../components/Navbar";
import OurTechnologyHeader from "../components/ui/OurTechnologyHeader";

const TechnologyPage = () => {
	return (
		<div className='servicesPage'>
			<HomeNavbar />

			<OurTechnologyHeader />

			<ServicesList />

			<Footer />

			<Disclaimer />
		</div>
	);
};

export default TechnologyPage;
