import React from "react";
import "@/app/components/styles/DashboardPage.css";
import "@/app/components/styles/WalletPage.css";
import { FaPaypal } from "react-icons/fa6";

import { FaBitcoin, FaEthereum } from "react-icons/fa6";
import { SiBinance, SiCardano, SiTether } from "react-icons/si";
import { Wallet } from "@/typings.t";

const wallets: Wallet[] = [
	{
		name: "Bitcoin",
		icon: <FaBitcoin />,
		amount: 1223.32,
		quantity: 1,
		iconColor: "text-amber-600",
		bgColor: "bg-amber-300/25",
	},
	{
		name: "Ethereum",
		icon: <FaEthereum />,
		amount: 4213.32,
		quantity: 3,
		iconColor: "text-sky-600",
		bgColor: "bg-sky-300/25",
	},
	{
		name: "USDT",
		icon: <SiTether />,
		amount: 3413.32,
		quantity: 3413.32,
		iconColor: "text-blue-400",
		bgColor: "bg-blue-300/25",
	},
	{
		name: "BNB",
		icon: <SiBinance />,
		amount: 935.32,
		quantity: 24,
		iconColor: "text-yellow-600",
		bgColor: "bg-yellow-300/25",
	},
	{
		name: "ADA",
		icon: <SiCardano />,
		amount: 1935.32,
		quantity: 12,
		iconColor: "text-blue-600",
		bgColor: "bg-blue-300/25",
	},
];

const WalletPage = () => {
	return (
		<div className='dashboardPage walletPage'>
			<h1 className='text-3xl'>Your Wallet&apos;s</h1>

			<div className='walletsContainer'>
				<div className='cryptoWallets'>
					{/* Bank account card */}
					<div className='bankAccount'>
						{/* bank icon and name container */}
						<div className='bankIcon'>
							<div>
								<FaPaypal />
							</div>

							<span>
								<h1>PayPal</h1>
							</span>
						</div>

						{/* details of the account container */}
						<div className='bankDetails'>
							<h2>
								Name: <span>Jerry Maguire</span>
							</h2>

							<h3>
								Number: <span>9382 988 0192</span>
							</h3>

							<p>
								Type: <span>Credit Account</span>
							</p>

							<h4>
								Balance: <span>${"12,321.65"}</span>
							</h4>
						</div>
					</div>

					{/* crypto wallets container */}
					{wallets.map((card, i) => (
						// crypto card
						<div
							className='cryptoCard'
							key={i}>
							{/* crypto icon container */}
							<div
								className={`cryptoCardIcon ${card.bgColor} ${card.iconColor}`}>
								{card.icon}
							</div>

							{/* name and amount container */}
							<div className='cryptoCardDetails'>
								<h1>
									<span className={card.iconColor}>{card.name}</span>{" "}
									{card.quantity}
								</h1>

								<hr />

								<h2>${card.amount}</h2>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WalletPage;
