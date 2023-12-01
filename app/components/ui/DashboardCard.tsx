import { InvestmentCardData } from "@/typings.t";
import React from "react";

const DashboardCard = ({ data }: { data: InvestmentCardData }) => {
	return (
		<div className='dashboardCard'>
			<div className={`iconDiv ${data.title}`}>{data.icon}</div>

			<h1>
				{data.title} {data.title === "Active" && "Investments"}
			</h1>

			<div className='amountQuantity'>
				<p>${data.amount}</p>

				{data.title === "Active" && (
					<h3>
						Quantity: <span>{data.totalLength}</span>
					</h3>
				)}
			</div>
		</div>
	);
};

export default DashboardCard;
