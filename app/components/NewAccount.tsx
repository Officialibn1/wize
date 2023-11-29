import React from "react";
import "@/app/components/styles/NewAccount.css";
import Link from "next/link";

const NewAccount = () => {
	return (
		<div className='newAccount'>
			<div>
				<div className='newAccountContent'>
					<h1>Open a new account and lock-in lower fees</h1>

					<p>
						New accounts can save even more through our limited time offer for
						up to 50% off futures brokerage fees¹. Open a new account using the
						promo code FUTRAFZT to cut your futures brokerage fees in half –
						forever!
					</p>

					<Link href={"signup"}>
						<button>Open Account</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NewAccount;
