import React from "react";

export type InvestmentCardData = {
	amount: number;
	title: string;
	totalLength: number;
	icon: React.ReactNode;
};

// Define types for the user schema
type Address = {
	houseNumber: string;
	street: string;
	state: string;
	country: string;
	postcode: string;
};

type Account = {
	accountName: string;
	accountNumber: string;
	bankName: string;
};

type ActiveInvestment = {
	name: string;
	amount: number;
	time: Date;
	percentage: number;
	ROI: number;
	withdrawable: Date;
	close: Date;
};

type ClosedInvestment = {
	name: string;
	amount: number;
	ROI: number;
	timeOpened: Date;
	timeCompleted: Date;
};

export type DailyProfitAndLoss = {
	day: string; // e.g., "Monday", "Tuesday", ...
	profit: number;
	loss: number;
	net: number;
	date: string;
};

export type UserData = {
	name: string;
	email: string;
	password: string;
	username: string;
	phoneNumber: string;
	address: Address;
	accounts: {
		depositAccount: Account;
		withdrawalAccounts: Account[];
	};
	deposit: {
		amount: number;
		timestamp: Date;
	}[];
	income: number;
	withdrawalCash: {
		totalWithdrawal: number;
		availableWithdrawal: number;
	};
	activeInvestments: ActiveInvestment[];
	closedInvestments: ClosedInvestment[];
	dailyProfitAndLoss: DailyProfitAndLoss[];
};

// Typings for the stock data
export type Stock = {
	name: string;
	price: number;
	percentageChange: number;
};

export interface InvestmentTransaction {
	transactionId: string;
	investmentName: string;
	type: "Deposit" | "Withdrawal" | "Dividend";
	date: string; // Assuming it's a string in the format DD/MM/YY
	amount: number;
	status: "Pending" | "Completed" | "Failed";
}
// \typings for the wallet page data of the dashboard
export type Wallet = {
	name: string;
	icon: React.ReactNode;
	amount: number;
	quantity: number;
	iconColor: string;
	bgColor: string;
};

// typings for the account Services for the account page
export type AccountServices = {
	title: string;
	text: string;
	imageUrl: string;
};
