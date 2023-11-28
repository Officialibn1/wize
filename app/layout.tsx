import "@/app/global.css";
import AuthProviders from "./providers";
import HomeNavbar from "./components/Navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en'>
			<body>
				<AuthProviders>
					<main className='w-full outline'>
						<HomeNavbar />
						{children}
					</main>
				</AuthProviders>
			</body>
		</html>
	);
};

export default RootLayout;
