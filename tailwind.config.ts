import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"electric-violet": {
					"50": "#f5f3ff",
					"100": "#ede9fe",
					"200": "#ddd6fe",
					"300": "#c4b5fd",
					"400": "#a78afb",
					"500": "#8b5bf7",
					"600": "#7c3aee",
					"700": "#6d27da",
					"800": "#5b20b7",
					"900": "#4c1c96",
					"950": "#2e1065",
				},
				bunker: {
					"50": "#f1f5fe",
					"100": "#e2eafc",
					"200": "#bed2f9",
					"300": "#85adf4",
					"400": "#4483ec",
					"500": "#1c64db",
					"600": "#0f4aba",
					"700": "#0d3b97",
					"800": "#0f347d",
					"900": "#122d68",
					"950": "#030711",
				},
			},
		},
		keyframes: {
			shimmer: {
				"100%": {
					transform: "translateX(100%)",
				},
			},
		},
	},

	plugins: [require("@tailwindcss/forms")],
};
export default config;
