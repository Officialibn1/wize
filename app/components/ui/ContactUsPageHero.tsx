import Link from "next/link";
import React from "react";

const ContactUsPageHero = () => {
	return (
		<div className='contactUsPageHero'>
			<div className='gradient-overlay'></div>
			<div className='heroText'>
				<h1>Contact Us</h1>

				<p>
					We&apos;re here to support our client&apos;s, by providing dedicated
					resources for all institutional and individual traders.
				</p>

				<Link href={"/signup"}>
					<button>Open Account</button>
				</Link>
			</div>
		</div>
	);
};

export default ContactUsPageHero;
