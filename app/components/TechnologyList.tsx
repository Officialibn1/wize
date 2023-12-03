import React from "react";
import "@/app/components/styles/ServicesList.css";
import { TbShieldDollar } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { GiMaterialsScience } from "react-icons/gi";
import { IoPieChartOutline } from "react-icons/io5";
import { TbSettingsCode } from "react-icons/tb";
import { BsDatabaseGear } from "react-icons/bs";

const TechnologyList = () => {
	return (
		<div className='servicesList'>
			{/* First service item (Brokerage Service) */}
			<div className='serviceItem'>
				<div className='serviceImage'>
					<div>
						<GiMaterialsScience />
					</div>

					<h1>Algorithms</h1>
				</div>

				<div className='serviceText'>
					<p>
						Through strategic relationships with leading algorithmic execution
						providers, TradeStation Institutional offers a suite of execution
						algorithms that allow investors to efficiently access pools of
						liquidity while minimizing execution costs and market impact.
					</p>
				</div>
			</div>

			<hr />

			{/* second item (Institutional Execution Services) */}
			<div className='serviceItem'>
				<div className='serviceImage'>
					<div>
						<IoPieChartOutline />
					</div>

					<h1>Analytics</h1>
				</div>

				<div className='serviceText'>
					<p>
						Experience the power of Wize award-winning desktop platform with
						premium Wize Analytics. Contact us to explore one-of-a-kind analysis
						tools such as our RadarScreen® real-time market monitoring tools
						and OptionStation Pro options analysis platform. You’ll also receive
						real-time market data, access to Wize extensive historical market
						database and mobile and web trading apps.
					</p>
				</div>
			</div>

			<hr />

			{/* third item (Security Lending) */}
			<div className='serviceItem'>
				<div className='serviceImage'>
					<div>
						<TbSettingsCode />
					</div>

					<h1>API Integration & Co-Location</h1>
				</div>

				<div className='serviceText'>
					<p>
						Wize institutional partners with FCM360 to provide an
						ultra-low-latency solution through the combination of co-location
						and cross connectivity. Additionally, TradeStation offers FIX API
						and Web API connectivity, allowing partners to integrate with third
						party while leveraging Wize robust technology.
					</p>
				</div>
			</div>

			<hr />

			{/* forth item (Advisory Services) */}
			<div className='serviceItem'>
				<div className='serviceImage'>
					<div>
						<BsDatabaseGear />
					</div>

					<h1>Data/Execution</h1>
				</div>

				<div className='serviceText'>
					<p>
						Empower your business with exceptional market data and order
						execution technology. With speed and reliability, you’ll stay on top
						of market shifts as they occur. TradeStation maintains one of the
						financial industry’s most extensive historical market databases,
						allowing you to research and back-test trading ideas. TradeStation
						Institutional offers institutional investors comprehensive
						electronic execution services across multiple asset classes. Our
						intelligent order routing and algorithmic execution technologies
						allow investors access to both displayed and non-displayed execution
						venues.
					</p>
				</div>
			</div>
		</div>
	);
};

export default TechnologyList;
