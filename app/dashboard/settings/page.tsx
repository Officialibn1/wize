import Image from "next/image";
import React from "react";
import "@/app/components/styles/DashboardPage.css";
import "@/app/components/styles/SettingsPage.css";
import SettingsForm from "@/app/components/ui/SettingsForm";

const SettingsPage = () => {
	return (
		<div className='dashboardPage settingsPage'>
			<h1 className='text-3xl'>Account Settings</h1>

			<div className='settingsPageContent'>
				{/* profile image container */}
				<div className='profileImage'>
					<div>
						<Image
							src={"/profile1.jpeg"}
							width={200}
							height={200}
							alt='settings page image'
						/>
					</div>

					<p>Change profile image.</p>
				</div>

				<SettingsForm />
			</div>
		</div>
	);
};

export default SettingsPage;
