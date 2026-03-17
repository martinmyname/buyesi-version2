import type { Metadata, Viewport } from "next";
import { Dosis, Overpass } from "next/font/google";
import PublicShell from "@/components/PublicShell";
import "./globals.css";

const dosis = Dosis({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const overpass = Overpass({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2E8B57",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dosis.variable} ${overpass.variable} antialiased`}>
        <PublicShell>{children}</PublicShell>
      </body>
    </html>
  );
}
