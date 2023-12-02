import "@/app/global.css";
import AuthProviders from "./providers";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en'>
			<body>
				<AuthProviders>
					<main className='w-full h-fit'>{children}</main>
				</AuthProviders>
			</body>
		</html>
	);
};

export default RootLayout;
