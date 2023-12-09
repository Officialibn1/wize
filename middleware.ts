export { default } from "next-auth/middleware";

export const config = {
	matcher: [
		"/dashboard",
		"/dashboard/wallet",
		"/dashboard/transactions",
		"/dashboard/new_investment",
		"/dashboard/profile",
		"/dashboard/settings",
	],
};
