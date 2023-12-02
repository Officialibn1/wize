import React from "react";
import "@/app/components/styles/PorpularStocks.css";

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
		</div>
	);
};

export default PorpularStocks;
