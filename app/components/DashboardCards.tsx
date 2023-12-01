import React from "react";
import "@/app/components/styles/DashboardCards.css";
import DashboardCard from "./ui/DashboardCard";
import { dummyUserData } from "../lib/placeholder_data";

import {
	FaCircleDollarToSlot,
	FaSackDollar,
	FaMoneyBillTransfer,
} from "react-icons/fa6";

// summing up the total amount of money deposited
const totalDeposit = {
	title: "Deposit",
	amount: dummyUserData.deposit
		.map((d) => d.amount)
		.reduce((total, amount) => total + amount, 0),
	totalLength: dummyUserData.deposit.length,
	icon: <FaCircleDollarToSlot />,
};

// summing up the total amount of income earned
const totalIncome = {
	title: "Income",
	amount: dummyUserData.income,
	totalLength: 1,
	icon: <FaSackDollar />,
};

// summing up the total amunt of active investments
const totalActiveInvest = {
	title: "Active",
	amount: dummyUserData.activeInvestments
		.map((i) => i.amount)
		.reduce((t, a) => t + a, 0), // total active investment amount
	totalLength: dummyUserData.activeInvestments.length,
	icon: <FaMoneyBillTransfer />,
};

// card data for the dashboard card
const cardData = [
	totalDeposit, //deposit amount of deposit from the dummy data
	totalIncome, //Income amount of income from the dummy data
	totalActiveInvest, // total amount of active investments
];

const DashboardCards = () => {
	return (
		<div className='dashboardCards'>
			{cardData.map((d, i) => (
				<DashboardCard
					key={i}
					data={d}
				/>
			))}
		</div>
	);
};

export default DashboardCards;
