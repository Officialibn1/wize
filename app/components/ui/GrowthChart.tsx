"use client";
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
import { barChartOptions } from "@/app/lib/chartjsOptions";

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

const weekData = getWeeklyData(0);

const labels = weekData.map((day) => day.day);

export const barData = {
	labels,
	datasets: [
		{
			label: "Profit",
			data: weekData.map((day) => day.profit),
			backgroundColor: "rgba(74, 222, 128, 0.5)",
		},
		{
			label: "Loss",
			data: weekData.map((day) => day.loss),
			backgroundColor: "rgba(248, 113, 113, 0.5)",
		},
	],
};
const GrowthChart = () => {
	return (
		<div className='growthChart'>
			<Bar
				options={barChartOptions}
				data={barData}
			/>
		</div>
	);
};

export default GrowthChart;
