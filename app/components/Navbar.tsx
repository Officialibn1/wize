import Link from "next/link";
import React from "react";
import "@/app/components/styles/HomeNavbar.css";

const HomeNavbar = () => {
	return (
		<nav>
			<div className='navLogo'>
				<Link href={"/"}>
					<h1>Wize</h1>
				</Link>
			</div>

			<div className='desktopLinks'>
				<ul>
					<li>
						<Link href={"/"}>Learn</Link>
					</li>
					<li>
						<Link href={"/"}>Accounts</Link>
					</li>
					<li>
						<Link href={"/"}>Pricing</Link>
					</li>
					<li>
						<Link href={"/"}>Markets</Link>
					</li>
					<li>
						<Link href={"/"}>Learn</Link>
					</li>
					<li>
						<Link href={"/"}>FAQs</Link>
					</li>
				</ul>
			</div>
			<div className='navButtons'>
				<Link href={"/login"}>Sign in</Link>
				<Link href={"/signup"}>Register</Link>
			</div>
		</nav>
	);
};

export default HomeNavbar;
