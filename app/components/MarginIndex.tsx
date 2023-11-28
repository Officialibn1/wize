import React from "react";
import "@/app/components/styles/MarginIndex.css";
import Image from "next/image";
import Link from "next/link";

const MarginIndex = () => {
	return (
		<div className='marginIndex'>
			<div>
				<div className='marginImage'>
					<Image
						src={"/futures_margin.jpeg"}
						width={300}
						height={150}
						alt='index futures S&P 500 Futures (ES)'
					/>
				</div>

				<div className='marginText'>
					<h1>
						More buying power when you day-trade popular equity index futures
					</h1>

					<p>
						Our new lower intraday margin rate applies to some of the
						most-active U.S. index futures during the day-trading session.
					</p>

					<ul>
						<li>E-mini S&P 500 Futures (ES)</li>
						<li>E-mini Dow Jones Futures (YM)</li>
						<li>E-mini NASDAQ 100 Futures (NQ)</li>
					</ul>

					<Link href={"/"}>
						<button>Learn More</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MarginIndex;
