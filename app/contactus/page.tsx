import React from "react";
import "@/app/components/styles/HeroSection.css";
import "@/app/components/styles/ContactUsPage.css";
import "@/app/components/styles/LoginForm.css";
import HomeNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";
import ContactUsPageHero from "../components/ui/ContactUsPageHero";
import ContactUsForm from "../components/ui/ContactUsForm";

const ContactUsPage = () => {
	return (
		<div className='contactUsPage'>
			{/* navbar */}
			<HomeNavbar />

			{/* home hero */}
			<ContactUsPageHero />

			{/* contact us form */}
			<ContactUsForm />

			{/* footer */}
			<Footer />

			{/* discalimer */}
			<Disclaimer />
		</div>
	);
};

export default ContactUsPage;
