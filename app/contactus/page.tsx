import React from "react";
import "@/app/components/styles/HeroSection.css";
import "@/app/components/styles/ContactUsPage.css";
import HomeNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";
import ContactUsPageHero from "../components/ui/ContactUsPageHero";

const ContactUsPage = () => {
	return (
		<div className='contactUsPage'>
			{/* navbar */}
			<HomeNavbar />

			{/* home hero */}
			<ContactUsPageHero />

			{/* footer */}
			<Footer />

			{/* discalimer */}
			<Disclaimer />
		</div>
	);
};

export default ContactUsPage;
