import React from "react";
import "@/app/components/styles/Footer.css";
import {
	FaFacebookF,
	FaXTwitter,
	FaLinkedinIn,
	FaInstagram,
	FaDiscord,
	FaGithubAlt,
} from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
	return (
		<footer>
			<div className='footerLogo'>
				<h1>Wize</h1>
				<p>Investments</p>
			</div>

			<p>
				&copy; Wize by{" "}
				<a href='https://www.linkedin.com/in/isah-ibn-muhammad-5046b125a/'>
					Ibn Frontend Developer
				</a>
				. All rights reserved
			</p>

			<div className='socialIcons'>
				<a
					href='https://web.facebook.com/ibn0001'
					target='_blank'>
					<FaFacebookF />
				</a>

				<a
					href='https://twitter.com/__ibn1'
					target='_blank'>
					<FaXTwitter />
				</a>

				<a
					href='https://www.linkedin.com/in/isah-ibn-muhammad-5046b125a/'
					target='_blank'>
					<FaLinkedinIn />
				</a>

				<a
					href='https://instagram.com/__ibn1?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr'
					target='_blank'>
					<FaInstagram />
				</a>

				<a
					href='https://github.com/Officialibn1'
					target='_blank'>
					<FaGithubAlt />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
