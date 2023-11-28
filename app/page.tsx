import Link from "next/link";
import HomeNavbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MarginIndex from "./components/MarginIndex";

const Page = () => {
	return (
		<section>
			{/* hero component */}
			<HeroSection />

			{/* Margin  futures index section */}
			<MarginIndex />
		</section>
	);
};

export default Page;
