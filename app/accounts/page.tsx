import React from "react";
import HomeNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";
import AccountHero from "../components/ui/AccountHero";
import AccountIconsList from "../components/AccountIconsList";
import AccountServices from "../components/AccountServices";

const AccountPage = () => {
	return (
		<section>
			{/* Navbar */}
			<HomeNavbar />

			{/* Account hero */}
			<AccountHero />

			{/* account icons */}
			<AccountIconsList />

			{/* account services and images */}
			<AccountServices />

			{/* footer */}
			<Footer />

			{/* Discalimer  */}
			<Disclaimer />
		</section>
	);
};

export default AccountPage;
