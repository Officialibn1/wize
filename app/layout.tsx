import "@/app/global.css";
import AuthProviders from "./providers/AuthProviders";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en'>
			<body>
				<AuthProviders>{children}</AuthProviders>
			</body>
		</html>
	);
};

export default RootLayout;
