import Link from "next/link";
import HomeNavbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MarginIndex from "./components/MarginIndex";
import NewAccount from "./components/NewAccount";

const Page = () => {
	return (
		<section>
			{/* hero component */}
			<HeroSection />

			{/* Margin  futures index section */}
			<MarginIndex />

			{/* NewAccount section */}
			<NewAccount />
		</section>
	);
};

export default Page;
