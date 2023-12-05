import React from "react";
import "@/app/components/styles/DashboardPage.css";
import "@/app/components/styles/TransactionsPage.css";
import { dummyInvestmentTransactions } from "@/app/lib/placeholder_data";
import { InvestmentTransaction } from "@/typings.t";
import { WiDirectionDownLeft, WiDirectionUpRight } from "react-icons/wi";
import { MdArrowOutward } from "react-icons/md";
import { ImSpinner11 } from "react-icons/im";

const TransactionsPage = () => {
	const data: InvestmentTransaction[] = dummyInvestmentTransactions;
	return (
		<div className='dashboardPage transactionsPage'>
			<h1 className='text-3xl'>Your Transaction&apos;s</h1>

			<div className='transactionsTableContainer'>
				<div className='transactionsTable'>
					<table>
						{/* Tables Heading */}
						<thead>
							<tr>
								<th></th>
								<th>Tranaction ID</th>
								<th className='hidden lg:table-cell'>Transaction Name</th>
								<th>Type</th>
								<th className='hidden lg:table-cell'>Date</th>
								<th>Amount</th>
								<th>Status</th>
							</tr>
						</thead>

						{/* Tables Body */}
						<tbody>
							{data.slice(0, 12).map((data) => (
								<tr key={data.transactionId}>
									<td>
										<span
											className={`text-xl p-1 flex w-fit ${
												data.type === "Withdrawal"
													? "bg-red-400/25 text-red-300"
													: data.type === "Deposit"
													  ? "bg-green-400/25 text-green-300"
													  : "bg-green-400/25 text-green-300"
											}`}>
											{data.type === "Withdrawal" ? (
												<MdArrowOutward />
											) : data.type === "Deposit" ? (
												<MdArrowOutward className='rotate-90' />
											) : (
												<MdArrowOutward className='rotate-90' />
											)}
										</span>
									</td>
									<td>{data.transactionId}</td>
									<td className='hidden lg:table-cell'>
										{data.investmentName}
									</td>
									<td>{data.type}</td>
									<td className='hidden lg:table-cell'>{data.date}</td>
									<td>{data.amount}</td>
									<td>
										<span
											className={`p-1 px-2 ${
												data.status === "Completed"
													? "bg-green-400/25 text-green-300"
													: data.status === "Failed"
													  ? "bg-red-400/25 text-red-300"
													  : "bg-blue-400/25 text-blue-300"
											}`}>
											{data.status}
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default TransactionsPage;
