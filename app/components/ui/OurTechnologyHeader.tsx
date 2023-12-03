import Link from "next/link";
import React from "react";

const OurTechnologyHeader = () => {
	return (
		<div className='ourTechnologyHeader'>
			<div>
				<div>
					<h1>Our Technology</h1>

					<p>
						We provide dynamic industry-leading technology that allow clients to
						thoroughly analyze and stay ahead of market moves.
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

export default OurTechnologyHeader;
