import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Nabvar from "@/components/Nabvar";
import { Toaster } from "@/components/ui/toaster";

const notoSans = Noto_Sans({
	weight: ["100","200","300","400","500", "600","700",],
	subsets: ["latin"],
});
 

export const metadata = {
  title: "FormSavvy",
  description: "Generated amazing PDFs from any FORM!",
};

export default function RootLayout({ children }) {
  return (
		<html lang="en">
			<body className={notoSans.className}>
				
				{children}
				<Toaster />
			</body>
		</html>
	);
}
