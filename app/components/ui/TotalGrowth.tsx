import React from "react";
import "@/app/components/styles/TotalGrowth.css";
import GrowthChart from "./GrowthChart";

const TotalGrowth = () => {
	return (
		<div className='totalGrowth'>
			<div className='totalGrowthHeader'>
				<div className='headerText'>
					<p>Total Growth</p>

					<h1>${"31,123.21"}</h1>
				</div>

				{/* button whos purpose will be to toggle beyween today, this week , this month, this year */}
				<button>Today</button>
			</div>

			<div>
				{/* growth bar chart */}
				<GrowthChart />
			</div>
		</div>
	);
};

export default TotalGrowth;
