"use client";
import React from "react";

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
};

const InvestmentForm = () => {
	return (
		<div className='investmentForm'>
			<form onSubmit={(e) => handleSubmit(e)}></form>
		</div>
	);
};

export default InvestmentForm;
