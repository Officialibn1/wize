"use client";
import Link from "next/link";
import React, { useState } from "react";
import "@/app/components/styles/HomeNavbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const HomeNavbar = () => {
	const [navState, setNavState] = useState(false);

	const toggler = () => {
		setNavState((prev) => !prev);
	};
	return (
		<nav className={!navState ? "overflow-hidden" : ""}>
			<div className='navLogo'>
				<Link href={"/"}>
					<h1>Wize</h1>
				</Link>
			</div>

			{/* navlinks for laptop screen */}
			<div className='desktopLinks'>
				<ul>
					<li>
						<Link
							className='active'
							href={"/"}>
							Learn
						</Link>
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

			{/* register and signin button for laptop and larger screen */}
			<div className='navButtons'>
				<Link href={"/login"}>Sign in</Link>
				<Link href={"/signup"}>Register</Link>
			</div>

			{/* toggle button for mobile and tablet screen */}
			<div className='toggleBtn'>
				<button onClick={() => toggler()}>
					<RxHamburgerMenu />
				</button>
			</div>

			{/* navlinks for mobile and tablet view */}
			<div className={`mobileLinks ${navState ? "right-0" : "-right-[200vw]"}`}>
				<div className='toggleBtn justify-end'>
					<button onClick={() => toggler()}>
						<IoMdClose />
					</button>
				</div>

				<ul>
					<li>
						<Link
							className='active'
							href={"/"}>
							Learn
						</Link>
					</li>
					<li>
						<Link
							onClick={() => toggler()}
							href={"/"}>
							Accounts
						</Link>
					</li>
					<li>
						<Link
							onClick={() => toggler()}
							href={"/"}>
							Pricing
						</Link>
					</li>
					<li>
						<Link
							onClick={() => toggler()}
							href={"/"}>
							Markets
						</Link>
					</li>
					<li>
						<Link
							onClick={() => toggler()}
							href={"/"}>
							Learn
						</Link>
					</li>
					<li>
						<Link
							onClick={() => toggler()}
							href={"/"}>
							FAQs
						</Link>
					</li>
				</ul>

				<div className='mobileNavButtons'>
					<Link
						onClick={() => toggler()}
						href={"/login"}>
						Sign in
					</Link>
					<Link
						onClick={() => toggler()}
						href={"/signup"}>
						Register
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default HomeNavbar;
