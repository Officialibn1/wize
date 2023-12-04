"use client";
import React from "react";

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
};

const InvestmentForm = () => {
	return (
		<div className='investmentForm'>
			<form onSubmit={(e) => handleSubmit(e)}>
				<legend>Create a new investment.</legend>

				<hr className=' border-slate-300/60 mb-5' />

				<div>
					{/* Investment name group */}
					<label>
						<span>Investment Name</span>
						<input
							type='text'
							placeholder='Name your investment'
						/>
						<p className='text-blue-400'>
							Give it a memorable name of your choice!
						</p>
					</label>

					{/* Investment type group */}
					<label>
						<span>Investment Type</span>
						<select
							name='investmentType'
							id='investmentType'>
							<option value='Stock'>Stock</option>
							<option value='Crypto'>Crypto</option>
							<option value='Indices'>Indices</option>
							<option value='Shared Bonds'>Shared Bonds</option>
							<option value='SP500'>SP500</option>
						</select>
					</label>

					{/* Investment Plan */}
					<label>
						<span>Investment Plan</span>
						<select
							name='investmentPlan'
							id='investmentPlan'>
							<option value='Short-Term'>Short-Term</option>
							<option value='Medium-Term'>Medium-Term</option>
							<option value='Long-Term'>Long-Term</option>
							<option value='Indices'>Indices</option>
							<option value='Shared Bonds'>Shared Bonds</option>
							<option value='SP500'>SP500</option>
						</select>
					</label>

					{/* Investment Plan */}
					<label>
						<span>Investment Period</span>
						<select
							name='investmentPeriod'
							id='investmentPeriod'>
							<option value='3 days'>3 days</option>
							<option value='5 days'>5 days</option>
							<option value='1 week'>1 week</option>
							<option value='2 weeks'>2 weeks</option>
							<option value='1 month'>1 month</option>
							<option value='Quaterly'>Quaterly</option>
							<option value='6 Months'>6 Months</option>
							<option value='1 Year'>1 Year</option>
						</select>
					</label>

					{/* Investment amount group */}
					<label>
						<span>Investment Amount</span>
						<input
							type='number'
							placeholder='Amount to Invest'
						/>
						<p className='text-red-400'>Invest what you can afford to lose!</p>
					</label>

					{/* Debit account */}
					<label>
						<span>Debit Account</span>
						<select
							name='debitAccount'
							id='debitAccount'>
							<option value='Main Ballance'>Main Ballance</option>
							<option value='Bonus Ballance'>Bonus Ballance</option>
							<option value='Earnings Ballance'>Earnings Ballance</option>
						</select>
					</label>

					{/* Re invest */}
					<fieldset>
						<span>Devident Reinvest</span>
						<div>
							<label htmlFor='yes'>
								<input
									type='radio'
									name='reinvest'
									id='yes'
								/>
								<span>Yes, Auto-Reinvest after duration period.</span>
							</label>

							<label htmlFor='no'>
								<input
									type='radio'
									name='reinvest'
									id='no'
								/>
								<span>No, Auto-Withdraw to ballance.</span>
							</label>
						</div>
					</fieldset>

					<label>
						<span>Transaction Fees Percentage</span>
						<input
							type='text'
							value={"7%"}
							disabled
						/>
					</label>

					<div>
						<button className='wizeButton'>Create Investment</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default InvestmentForm;
