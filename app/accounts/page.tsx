import React from "react";
import HomeNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";
import AccountHero from "../components/ui/AccountHero";

const AccountPage = () => {
	return (
		<section>
			{/* Navbae */}
			<HomeNavbar />

			{/* Account hero */}
			<AccountHero />

			{/* footer */}
			<Footer />

			{/* Discalimer  */}
			<Disclaimer />
		</section>
	);
};

export default AccountPage;
