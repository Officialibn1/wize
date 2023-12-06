import React from "react";
import HomeNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";

const AccountPage = () => {
	return (
		<section>
			{/* Navbae */}
			<HomeNavbar />

			{/* footer */}
			<Footer />

			{/* Discalimer  */}
			<Disclaimer />
		</section>
	);
};

export default AccountPage;
