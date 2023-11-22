import "@/app/global.css";
import AuthProvider from "./context/AuthProvider";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en'>
			<body>
				<AuthProvider>{children}</AuthProvider>
			</body>
		</html>
	);
};

export default RootLayout;
