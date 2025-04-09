import "./globals.css";
import Navigation from "./Components/Navbar/page";
import Footer from "./Components/Footer/page";
import { Encode_Sans } from "next/font/google";
const encodeSans = Encode_Sans({
  subsets: ["latin"], // or ['latin-ext'] depending on your use case
  display: "swap",
  variable: "--font-encode-sans", // optional for CSS custom property
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={encodeSans.className}>
      <Navigation />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
