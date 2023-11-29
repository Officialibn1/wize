import HomeNavbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MarginIndex from "./components/MarginIndex";
import NewAccount from "./components/NewAccount";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";

const Page = () => {
	return (
		<section>
			{/* navigation bar */}
			<HomeNavbar />
			{/* hero component */}
			<HeroSection />

			{/* Margin  futures index section */}
			<MarginIndex />

			{/* NewAccount section */}
			<NewAccount />

			{/* Services Section */}
			<ServicesSection />

			{/* footer section */}
			<Footer />
		</section>
	);
};

export default Page;
