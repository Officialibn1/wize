import React from "react";
import "@/app/components/styles/HeroSection.css";
import Link from "next/link";

const HeroSection = () => {
	return (
		<div className='heroSection'>
			<div>
				<h1>A Futures Broker as Sophisticated as You</h1>

				<p>
					With advanced trading tools, dedicated support, competitive pricing,
					and attractive margin rates
				</p>

				<button>
					<Link href={"/signup"}>Open Account</Link>
				</button>
			</div>
		</div>
	);
};

export default HeroSection;
