"use client";
import Link from "next/link";
import React, { useState } from "react";
import "@/app/components/styles/HomeNavbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useSession } from "next-auth/react";

const HomeNavbar = () => {
	const [navState, setNavState] = useState(false);

	// use server session instance
	const { data: session, status } = useSession();

	// console.log(session?.user);

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
							Home
						</Link>
					</li>
					<li>
						<Link href={"/accounts"}>Accounts</Link>
					</li>
					<li>
						<Link href={"/pricing"}>Pricing</Link>
					</li>
					<li>
						<Link href={"/technology"}>Technology</Link>
					</li>
					<li>
						<Link href={"/services"}>Services</Link>
					</li>
					<li>
						<Link href={"/faqs"}>FAQs</Link>
					</li>
				</ul>
			</div>

			{/* register and signin button for laptop and larger screen */}
			{status !== "authenticated" ? (
				<div className='navButtons'>
					<Link href={"/login"}>Sign in</Link>
					<Link href={"/signup"}>Register</Link>
				</div>
			) : (
				<div className='navButtons'>
					<Link href={"/dashboard"}>Dashboard</Link>
				</div>
			)}

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
							Home
						</Link>
					</li>
					<li>
						<Link
							onClick={() => toggler()}
							href={"/accounts"}>
							Accounts
						</Link>
					</li>
					<li>
						<Link
							onClick={() => toggler()}
							href={"/pricing"}>
							Pricing
						</Link>
					</li>
					<li>
						<Link
							onClick={() => toggler()}
							href={"/technology"}>
							Technology
						</Link>
					</li>
					<li>
						<Link
							onClick={() => toggler()}
							href={"/services"}>
							Services
						</Link>
					</li>
					<li>
						<Link
							onClick={() => toggler()}
							href={"/faqs"}>
							FAQs
						</Link>
					</li>
				</ul>

				{status !== "authenticated" ? (
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
				) : (
					<div className='mobileNavButtons'>
						<Link
							onClick={() => toggler()}
							href={"/dashboard"}>
							Dashboard
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
};

export default HomeNavbar;
