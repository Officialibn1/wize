import { AccountServices } from "@/typings.t";
import Image from "next/image";
import React from "react";

const AccountServicesItem = ({
	data,
	index,
}: {
	data: AccountServices;
	index: number;
}) => {
	return (
		<div
			className={`accountServicesItem flex-col ${
				index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
			}`}>
			{/* text div */}
			<div>
				{/* text wrapper div */}
				<div
					className={index % 2 !== 0 ? " ml-10 md:ml-auto md:mr-10" : "ml-10"}>
					<h1>{data.title}</h1>

					<p>{data.text}</p>
				</div>
			</div>

			{/* image div */}
			<div>
				<Image
					src={data.imageUrl}
					width={600}
					height={400}
					alt={data.title}
				/>
			</div>
		</div>
	);
};

export default AccountServicesItem;
