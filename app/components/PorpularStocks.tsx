import React from "react";
import "@/app/components/styles/PorpularStocks.css";
import { dummyStocks } from "../lib/placeholder_data";
import PorpularStock from "./ui/PorpularStock";

const PorpularStocks = () => {
	return (
		<div className='porpularStocks'>
			{/* Header that apeards before the list of stocks */}
			<div className='porpularStocksHeader'>
				{/* Header Title */}
				<h1>Porpular Stocks</h1>

				{/* Header Image with some text */}
				<div className='PorpularStocksImage'>
					<div>
						<h1>Dow Jones</h1>

						<p>{"10"}% Profit</p>
					</div>

					<h2>${"1921.02"}</h2>
				</div>
			</div>

			<div className='porpularStocksItems'>
				{dummyStocks.map((stock, i) => (
					<PorpularStock
						key={i}
						stock={stock}
					/>
				))}
			</div>
		</div>
	);
};

export default PorpularStocks;
