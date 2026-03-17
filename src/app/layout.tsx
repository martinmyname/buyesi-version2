import type { Metadata } from "next";
import { Dosis, Overpass } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const dosis = Dosis({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const overpass = Overpass({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Buyesi Youth Initiative - Sustainable Goat Farming in Uganda",
  description:
    "Empowering rural communities through sustainable goat farming in Puti-Puti, Pallisa, Uganda. Let's grow with goats.",
  icons: {
    icon: "/favicon/favicon-32x32.png",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dosis.variable} ${overpass.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
