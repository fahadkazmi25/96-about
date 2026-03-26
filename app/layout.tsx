import type { Metadata } from "next";
import { Lexend, Inter } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  weight: "500",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "96in and 96.com - Official Sports Betting and Casino Site in India",
  description: "Welcome to 96in, the premier online gaming destination in India for sports betting and world-class online casino games.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-brand-bg text-brand-text font-inter antialiased selection:bg-brand-gold selection:text-brand-bg min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
