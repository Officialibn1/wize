import React from "react";
import "@/app/components/styles/ServicesPage.css";
import HomeNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import OurServiceHeader from "../components/OurServiceHeader";
import ServicesList from "../components/ServicesList";
import Disclaimer from "../components/Disclaimer";

const ServicesPage = () => {
	return (
		<div className='servicesPage'>
			<HomeNavbar />

			{/* Hero banner */}
			<OurServiceHeader />

			{/* Text under the service hero section */}
			<div className='teamAproach'>
				<div>
					<p>
						With our team approach, our goal is to identify new ways to{" "}
						<b className=' font-semibold'>
							increase performance, reduce cost and manage risk.
						</b>{" "}
						With TradeStation Institutional Services, your firm will be working
						with an experienced and professional institutional team committed to
						your relationship.
					</p>
					<br />
					{/* <br /> */}
					<p>
						Review our services below to see how we can help you to achieve your
						goals.
					</p>
				</div>
			</div>

			{/* List of services */}
			<ServicesList />

			<Footer />

			<Disclaimer />
		</div>
	);
};

export default ServicesPage;
