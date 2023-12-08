import React from "react";
import "@/app/components/styles/AccountServices.css";
import AccountServicesItem from "./ui/AccountServicesItem";
import { accountServices } from "../lib/placeholder_data";

const AccountServices = () => {
	return (
		<div className='accountServices'>
			{accountServices.map((data, i) => (
				<AccountServicesItem
					key={i}
					data={data}
					index={i}
				/>
			))}
		</div>
	);
};

export default AccountServices;
