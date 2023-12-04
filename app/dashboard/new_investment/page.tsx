import React from "react";
import "@/app/components/styles/DashboardPage.css";
import "@/app/components/styles/NewInvestmentPage.css";
import InvestmentForm from "@/app/components/ui/InvestmentForm";
import { FaFilterCircleDollar, FaMoneyBillTransfer } from "react-icons/fa6";
import { GiMoneyStack, GiTakeMyMoney } from "react-icons/gi";

const NewInvestmentPage = () => {
	return (
		<div className='dashboardPage newInvestmentPage'>
			<h1 className='text-3xl'>New Investment</h1>

			<div className='investmentFormContainer'>
				{/* Cards showind the available ballance */}
				<div className='investmentBallance'>
					{/* Revenue amount card */}
					<div className='investRevenue'>
						{/* Card text */}
						<div>
							<h2>Revenue</h2>

							<h1>${2483.42}</h1>

							<p>${4231.32} Last Month</p>
						</div>

						{/* Card Icon */}
						<div className='text-red-400 bg-red-600/25'>
							<FaFilterCircleDollar />
						</div>
					</div>

					{/* Invest devident */}
					<div className='investDevident'>
						{/* Card text */}
						<div>
							<h2>Investments</h2>

							<h1>23</h1>

							<p>{12}% Increase</p>
						</div>

						{/* Card Icon */}
						<div className='text-blue-400 bg-blue-600/25'>
							<FaMoneyBillTransfer />
						</div>
					</div>

					{/* Invest profits */}
					<div className='investProfits'>
						{/* Card text */}
						<div>
							<h2>Net Profit</h2>

							<h1>${1433.42}</h1>

							<p>${2941.32} Last Month</p>
						</div>

						{/* Card Icon */}
						<div className='text-green-400 bg-green-600/25'>
							<GiTakeMyMoney />
						</div>
					</div>

					{/* Available ballance */}
					<div className='investBallance'>
						{/* Card text */}
						<div>
							<h2>Available</h2>

							<h1>${9423.42}</h1>

							<p>{27}% Increase</p>
						</div>

						{/* Card Icon */}
						<div className='text-indigo-400 bg-indigo-600/25'>
							<GiMoneyStack />
						</div>
					</div>
				</div>

				{/* Investment form */}
				<InvestmentForm />
			</div>
		</div>
	);
};

export default NewInvestmentPage;
