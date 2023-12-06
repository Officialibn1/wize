import React from "react";
import "@/app/components/styles/AccountHero.css";
import "@/app/components/styles/ServicesPage.css";
import Link from "next/link";

const AccountHero = () => {
	return (
		<div className='accountHeader'>
			<div>
				<div>
					<h1>Why Have a Wize Account?</h1>

					<p>
						Because we provide Trading technologies and tailored brokerage
						solutions for both individual trader&apos;s and institutions.
					</p>

					<Link
						href={"/signup"}
						className='wizeButton w-fit mx-auto'>
						Create Account
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AccountHero;
