import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "All Nippon IT | IT Support & Managed IT Services in South Jordan, UT",
  description:
    "All Nippon IT provides professional IT support, managed IT services, computer support, network assistance, and business technology solutions in South Jordan, Utah.",
  keywords:
    "IT support South Jordan, IT services South Jordan UT, managed IT services Utah, computer support South Jordan, business IT support South Jordan, network support South Jordan",
  openGraph: {
    title: "All Nippon IT | IT Support & Managed IT Services in South Jordan, UT",
    description:
      "Professional IT support, managed IT services, and business technology solutions in South Jordan, Utah.",
    url: "https://allnipponit.us",
    siteName: "All Nippon IT",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <StructuredData />
          <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
