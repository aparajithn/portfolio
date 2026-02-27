import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aparajith Nagarajan (Abu) - Portfolio",
  description: "Founder of Dabara Coffee. Coffee enthusiast, adventurer, and builder based in Calgary, Alberta.",
  keywords: ["Aparajith Nagarajan", "Abu", "Dabara Coffee", "Calgary", "Portfolio", "Coffee", "Tamil"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
