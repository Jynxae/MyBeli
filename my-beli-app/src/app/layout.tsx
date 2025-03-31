import "./globals.css";
import Navigation from "./Components/Navbar/page";
import Footer from "./Components/Footer/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navigation />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
