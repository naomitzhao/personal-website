import { Inter } from "next/font/google";
import "@/app/globals.scss";
import NavBar from "../_components/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "naomi's rad website",
  description: "naomi zhao's personal website!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
