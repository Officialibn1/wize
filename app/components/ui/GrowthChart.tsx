import React from "react";
import "@/app/components/styles/GrowthChart.css";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { DailyProfitAndLoss } from "@/typings.t";
import { dummyUserData } from "@/app/lib/placeholder_data";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

export const getWeeklyData = (weekIndex: number): DailyProfitAndLoss[] => {
	const daysPerWeek = 7;
	const weeklyStart = daysPerWeek * weekIndex;
	const weeklyEnd = weeklyStart + daysPerWeek;
	const weeklyData = dummyUserData.dailyProfitAndLoss.slice(
		weeklyStart,
		weeklyEnd,
	);

	return weeklyData;
};

const GrowthChart = () => {
	const weekData = getWeeklyData(0);

	console.log(weekData);

	return <div className='growthChart'></div>;
};

export default GrowthChart;
