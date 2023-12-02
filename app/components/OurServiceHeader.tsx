import Link from "next/link";
import React from "react";

const OurServiceHeader = () => {
	return (
		<div className='ourServiceHeader'>
			<div>
				<div>
					<h1>Our Services</h1>

					<p>
						We strive to create and maintain everlasting relationships that
						profoundly serve industry professionals.
					</p>

					<Link
						href={"/signup"}
						className='wizeButton w-fit'>
						Create Account
					</Link>
				</div>
			</div>
		</div>
	);
};

export default OurServiceHeader;
