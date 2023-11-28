import React from "react";
import "@/app/components/styles/HeroSection.css";
import Link from "next/link";

const HeroSection = () => {
	return (
		<div className='heroSection'>
			<div className='gradient-overlay'></div>
			<div className='heroText'>
				<h1>A Futures Broker as Sophisticated as You</h1>

				<p>
					With advanced trading tools, dedicated support, competitive pricing,
					and attractive margin rates
				</p>

				<Link href={"/signup"}>
					<button>Open Account</button>
				</Link>
			</div>
		</div>
	);
};

export default HeroSection;
