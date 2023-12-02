import React from "react";
import "@/app/components/styles/PorpularStock.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Stock } from "@/typings.t";

const PorpularStock = ({ stock }: { stock: Stock }) => {
	return (
		<div className='porpularStock'>
			<div className='stockText'>
				<h1>{stock.name}</h1>

				<p
					className={
						stock.percentageChange >= 0 ? "text-green-400" : "text-red-400"
					}>
					{stock.percentageChange}%{" "}
					{stock.percentageChange >= 0 ? "Profit" : "Loss"}
				</p>
			</div>

			<div className='stockPrice'>
				<h3>${stock.price}</h3>

				<span
					className={
						stock.percentageChange >= 0 ? "bg-green-400/25" : "bg-red-400/25"
					}>
					{stock.percentageChange >= 0 ? (
						<IoIosArrowUp className='text-green-500' />
					) : (
						<IoIosArrowDown className='text-red-500' />
					)}
				</span>
			</div>
		</div>
	);
};

export default PorpularStock;
