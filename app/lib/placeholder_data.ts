import { Stock, UserData } from "@/typings.t";

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

// Dummy data for the placeholder stocks
export const dummyStocks: Stock[] = [
	{
		name: "Apple Inc.",
		price: 150.25,
		percentageChange: 2.5,
	},
	{
		name: "Microsoft Corporation",
		price: 300.75,
		percentageChange: -1.8,
	},
	{
		name: "Amazon.com Inc.",
		price: 3400.5,
		percentageChange: 0.2,
	},
	{
		name: "Google Alphabet Inc.",
		price: 2650.8,
		percentageChange: 1.5,
	},
	{
		name: "Tesla Inc.",
		price: 800.0,
		percentageChange: -3.0,
	},
	{
		name: "Facebook Inc.",
		price: 325.5,
		percentageChange: 0.8,
	},
	{
		name: "Johnson & Johnson",
		price: 170.6,
		percentageChange: -0.5,
	},
	{
		name: "Procter & Gamble Co.",
		price: 145.3,
		percentageChange: 1.2,
	},
	{
		name: "Intel Corporation",
		price: 55.8,
		percentageChange: -0.7,
	},
	{
		name: "Cisco Systems Inc.",
		price: 55.25,
		percentageChange: 0.5,
	},
	{
		name: "Walmart Inc.",
		price: 142.9,
		percentageChange: -2.0,
	},
	{
		name: "Johnson Controls International plc",
		price: 68.4,
		percentageChange: 2.8,
	},
	{
		name: "The Home Depot Inc.",
		price: 345.1,
		percentageChange: -0.3,
	},
	{
		name: "Verizon Communications Inc.",
		price: 55.75,
		percentageChange: 0.1,
	},
	{
		name: "Coca-Cola Company",
		price: 55.2,
		percentageChange: 1.0,
	},
];
