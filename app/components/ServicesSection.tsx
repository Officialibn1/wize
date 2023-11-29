import React from "react";
import "@/app/components/styles/ServicesSection.css";
import Link from "next/link";

const ServicesSection = () => {
	return (
		<div className='servicesSection'>
			<div className='servicesSectionContent'>
				<div className='cryptoTrading'>
					<h1>Introducing Wize Crypto</h1>

					<p>
						Trade and invest in crypto on a powerful yet simple crypto platform,
						with a variety of crypto coins and ecosystems.
					</p>

					<Link href={"/signup"}>
						<button className='wizeButton'>Get Started</button>
					</Link>
				</div>

				<div className='platformTools'>
					<h1>Wize Platform & Tools</h1>

					<p>
						Making trading decisions can be intimidating. But, it doesn’t need
						to be, with the tools offered in the Wize investment platform.
					</p>

					<Link href={"/signup"}>
						<button className='wizeButton'>Get Started</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ServicesSection;
