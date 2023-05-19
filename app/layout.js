import "./globals.css";
import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
	title: "Netflix",
	description: "Created by Prathamesh Chavan",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={robotoSlab.className}>{children}</body>
		</html>
	);
}
