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

export type UserData = {
	name: string;
	email: string;
	password: string;
	username: string;
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
};
