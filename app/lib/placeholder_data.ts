import { UserData } from "@/typings.t";

// Dummy data for testing
export const dummyUserData: UserData = {
	name: "John Doe",
	email: "johndoe@gmail.com",
	password: "12345",
	username: "john_doe",
	phoneNumber: "+234 903 8880 282",
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
			amount: 2400,
			time: new Date("2023-03-01"),
			percentage: 2,
			ROI: 40,
			withdrawable: new Date("2023-04-01"),
			close: new Date("2023-05-01"),
		},
		{
			name: "Stock APPL",
			amount: 2320,
			time: new Date("2023-03-06"),
			percentage: 12,
			ROI: 87,
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
	dailyProfitAndLoss: [
		{
			date: new Date("2022-12-01").toISOString().slice(0, 10),
			day: "Monday",
			profit: 500,
			loss: 50,
			net: 450,
		},
		{
			date: new Date("2022-12-02").toISOString().slice(0, 10),
			day: "Tuesday",
			profit: 200,
			loss: 30,
			net: 170,
		},
		{
			date: new Date("2022-12-03").toISOString().slice(0, 10),
			day: "Wednesday",
			profit: 360,
			loss: 45,
			net: 315,
		},
		{
			date: new Date("2022-12-04").toISOString().slice(0, 10),
			day: "Thursday",
			profit: 100,
			loss: 80,
			net: 20,
		},
		{
			date: new Date("2022-12-05").toISOString().slice(0, 10),
			day: "Friday",
			profit: 630,
			loss: 50,
			net: 580,
		},
		{
			date: new Date("2022-12-06").toISOString().slice(0, 10),
			day: "Saturday",
			profit: 200,
			loss: 10,
			net: 190,
		},
		{
			date: new Date("2022-12-07").toISOString().slice(0, 10),
			day: "Sunday",
			profit: 150,
			loss: 3,
			net: 147,
		},
		{
			date: new Date("2022-12-08").toISOString().slice(0, 10),
			day: "Monday",
			profit: 500,
			loss: 50,
			net: 450,
		},
		{
			date: new Date("2022-12-09").toISOString().slice(0, 10),
			day: "Tuesday",
			profit: 200,
			loss: 30,
			net: 170,
		},
		{
			date: new Date("2022-12-10").toISOString().slice(0, 10),
			day: "Wednesday",
			profit: 360,
			loss: 45,
			net: 315,
		},
		{
			date: new Date("2022-12-11").toISOString().slice(0, 10),
			day: "Thursday",
			profit: 100,
			loss: 80,
			net: 20,
		},
		{
			date: new Date("2022-12-12").toISOString().slice(0, 10),
			day: "Friday",
			profit: 630,
			loss: 50,
			net: 580,
		},
		{
			date: new Date("2022-12-13").toISOString().slice(0, 10),
			day: "Saturday",
			profit: 200,
			loss: 10,
			net: 190,
		},
		{
			date: new Date("2022-12-14").toISOString().slice(0, 10),
			day: "Sunday",
			profit: 150,
			loss: 3,
			net: 147,
		},
		// ... Repeat for the next two weeks
	],
};
