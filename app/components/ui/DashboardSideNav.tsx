"use client";
import React from "react";
import "@/app/components/styles/DashboardSideNav.css";
import Link from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
import { signOut, useSession } from "next-auth/react";

import {
	IoLogOutOutline,
	IoSettingsOutline,
	IoWalletOutline,
} from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { GiMoneyStack } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa6";

const DashboardSideNav = () => {
	return (
		<div className='dashboardSideNav'>
			{/* Logo for the sidenav */}
			<div className='sideNavLogo'>
				<Link href={"/"}>
					<h1>Wize</h1>
				</Link>
			</div>

			<div className='sideNavLinks'>
				<ul>
					{/* dashboard link */}
					<li>
						<Link href={"/dashboard"}>
							<AiOutlineDashboard />
							<span>Dashboard</span>
						</Link>
					</li>

					{/* wallet */}
					<li>
						<Link href={"/dashboard/wallet"}>
							<IoWalletOutline />
							<span>Wallet</span>
						</Link>
					</li>

					{/* Transactions */}
					<li>
						<Link href={"/dashboard/transactions"}>
							<GrTransaction />
							<span>Transactions</span>
						</Link>
					</li>

					{/* New Investment */}
					<li>
						<Link href={"/dashboard/new_investment"}>
							<GiMoneyStack />
							<span>New Investment</span>
						</Link>
					</li>

					{/* Profile */}
					<li>
						<Link href={"/dashboard/profile"}>
							<FaRegUser />
							<span>Profile</span>
						</Link>
					</li>

					{/* Settings */}
					<li>
						<Link href={"/dashboard/settings"}>
							<IoSettingsOutline />
							<span>Settings</span>
						</Link>
					</li>

					{/* Logout */}
					<li>
						<button onClick={() => signOut()}>
							<IoLogOutOutline />
							<span>Logout</span>
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default DashboardSideNav;
