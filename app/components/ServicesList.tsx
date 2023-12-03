import React from "react";
import "@/app/components/styles/ServicesList.css";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { TbShieldDollar } from "react-icons/tb";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";

const ServicesList = () => {
	return (
		<div className='servicesList'>
			{/* First service item (Brokerage Service) */}
			<div className='serviceItem'>
				<div className='serviceImage'>
					<div>
						<AiOutlineUserSwitch />
					</div>

					<h1>Broakerage Service</h1>
				</div>

				<div className='serviceText'>
					<p>
						We offer a wide range of brokerage services designed to meet the
						complex needs of the institutional trader.
					</p>

					<ul>
						<li>
							Global clearing and custody, including DVP and Give-up accounts
						</li>
						<li>Introducing Broker (IB) solutions</li>
						<li>Securities Lending services and Yield Enhancement programs</li>
						<li>24/6 Trade Desk support</li>
						<li>Soft-dollar arrangements</li>
						<li>Custom Trading solutions</li>
					</ul>
				</div>
			</div>

			{/* second item (Institutional Execution Services) */}
			<div className='serviceItem'>
				<div className='serviceImage'>
					<div>
						<MdOutlineCurrencyExchange />
					</div>

					<h1>Institutional Execution Services</h1>
				</div>

				<div className='serviceText'>
					<p>
						Comprehensive electronic execution services across multiple asset
						classes. Our intelligent order routing and algorithmic execution
						technologies allow traders access to both displayed and
						non-displayed pools of liquidity. With our consistent focus on
						execution quality, speed and redundancy, we attempt to remain in
						front of market shifts before they occur.
					</p>
				</div>
			</div>

			{/* third item (Security Lending) */}
			<div className='serviceItem'>
				<div className='serviceImage'>
					<div>
						<TbShieldDollar />
					</div>

					<h1>Securities Lending</h1>
				</div>

				<div className='serviceText'>
					<p>
						TradeStation offers a unique and customizable securities lending
						solution for institutional entities. Our Securities Lending team is
						well positioned to leverage our inventory and industry relationships
						to easily locate hard to borrow, low-priced securities. TradeStation
						sets itself apart by offering exact pricing rather than marking up
						the collateral to 102%, thus allowing you to maximize your cash.
					</p>
				</div>
			</div>

			{/* forth item (Advisory Services) */}
			<div className='serviceItem'>
				<div className='serviceImage'>
					<div>
						<HiOutlineUserGroup />
					</div>

					<h1>Advisory Services</h1>
				</div>

				<div className='serviceText'>
					<p>
						For more than 30 years, we have worked side by side with Registered
						Investment Advisors (RIAs) and Commodity Trading Advisors (CTAs). We
						understand your business and provide customized services to help you
						realize your client’s goals.
					</p>

					<ul>
						<li>
							<h2>Block Trading/Allocation</h2>{" "}
							<p>
								Trade in a Block account and allocate across all managed
								accounts using a single average price.
							</p>
						</li>
						<li>
							<h2>Management Fees Service</h2>
							<p>
								We assist in administering all advisory management and
								performance fees.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ServicesList;
