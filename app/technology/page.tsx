import React from "react";
import "@/app/components/styles/TechnologyPage.css";
import "@/app/components/styles/ServicesPage.css";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";
import HomeNavbar from "../components/Navbar";
import OurTechnologyHeader from "../components/ui/OurTechnologyHeader";
import TechnologyList from "../components/TechnologyList";

const TechnologyPage = () => {
	return (
		<div className='servicesPage'>
			<HomeNavbar />

			<OurTechnologyHeader />

			<TechnologyList />

			<Footer />

			<Disclaimer />
		</div>
	);
};

export default TechnologyPage;
