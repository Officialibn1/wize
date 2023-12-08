import React from "react";
import "@/app/components/styles/AccountIconsList.css";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { TbShieldDollar } from "react-icons/tb";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";

const AccountIconsList = () => {
	return (
		<div className='accountIconsList'>
			<div className='accountIconsText'>
				<p>
					Tailored brokerage solutions for a broad range of institutional and
					individual clients, including money managers, advisors, and hedge
					funds, backed by more than 30 years of experience.
				</p>
			</div>

			<div className='accountIconContainer'>
				{/* icon one */}
				<div className='accountImage'>
					<div>
						<AiOutlineUserSwitch />
					</div>

					<h1>Broakerage Service</h1>
				</div>

				{/* icon two */}
				<div className='accountImage'>
					<div>
						<MdOutlineCurrencyExchange />
					</div>

					<h1>Institutional Execution Services</h1>
				</div>

				{/* icon three */}
				<div className='accountImage'>
					<div>
						<TbShieldDollar />
					</div>

					<h1>Securities Lending</h1>
				</div>

				{/* icon four */}
				<div className='accountImage'>
					<div>
						<HiOutlineUserGroup />
					</div>

					<h1>Advisory Services</h1>
				</div>
			</div>
		</div>
	);
};

export default AccountIconsList;
