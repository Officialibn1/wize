import { InvestmentCardData, UserData } from "@/typings.t";

const dummyInvestmentData: InvestmentCardData = {
	totalEarning: 50000,
	totalIncome: 75000,
	referralIncome: 2000,
	totalInvested: 30000,
	activeInvestmentIncome: 25000,
};

// Dummy data for testing
export const dummyUserData: UserData = {
	name: "John Doe",
	email: "johndoe@gmail.com",
	password: "12345",
	username: "john_doe",
	address: {
		houseNumber: "123",
		street: "Main Street",
		state: "California",
		country: "USA",
		postcode: "12345",
	},
	accounts: {
		depositAccount: {
			accountName: "Savings",
			accountNumber: "1234567890",
			bankName: "Bank of Example",
		},
		withdrawalAccounts: [
			{
				accountName: "Checking",
				accountNumber: "0987654321",
				bankName: "Example Bank",
			},
		],
	},
	deposit: [
		{
			amount: 1000,
			timestamp: new Date("2023-01-01"),
		},
		{
			amount: 500,
			timestamp: new Date("2023-02-01"),
		},
	],
	income: 5000,
	withdrawalCash: {
		totalWithdrawal: 2000,
		availableWithdrawal: 1000,
	},
	activeInvestments: [
		{
			name: "Stock ABC",
			amount: 2000,
			time: new Date("2023-03-01"),
			percentage: 2,
			ROI: 40,
			withdrawable: new Date("2023-04-01"),
			close: new Date("2023-05-01"),
		},
	],
	closedInvestments: [
		{
			name: "Crypto XYZ",
			amount: 1500,
			ROI: 30,
			timeOpened: new Date("2022-12-01"),
			timeCompleted: new Date("2023-01-01"),
		},
	],
};
