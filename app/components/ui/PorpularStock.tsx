import React from "react";
import "@/app/components/styles/PorpularStock.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Stock } from "@/typings.t";

const PorpularStock = ({ stock }: { stock: Stock }) => {
	return (
		<div className='porpularStock'>
			<div className='stockText'>
				<h1>{stock.name}</h1>

				<p>{stock.percentageChange}% Profit</p>
			</div>

			<div className='stockPrice'>
				<h3>${stock.price}</h3>

				<span>
					<IoIosArrowDown />
				</span>
			</div>
		</div>
	);
};

export default PorpularStock;
