import React from "react";
import "@/app/components/styles/TotalGrowth.css";
import GrowthChart from "./GrowthChart";
import PorpularStocks from "../PorpularStocks";

const TotalGrowth = () => {
	return (
		<div className='totalGrowth'>
			<div className='totalGrowthHeader'>
				<div className='headerText'>
					<p>Total Growth</p>

					<h1>${"31,123.21"}</h1>
				</div>

				{/* button whos purpose will be to toggle beyween today, this week , this month, this year */}
				<button>This Week</button>
			</div>

			{/* catainer wrapping the barchart and porpular stocks list */}
			<div className='barAndStockContainer'>
				<div className='growthChartContainer'>
					{/* growth bar chart */}
					<GrowthChart />
				</div>

				<div className='propularStocksContainer'>
					<PorpularStocks />
				</div>
			</div>
		</div>
	);
};

export default TotalGrowth;
