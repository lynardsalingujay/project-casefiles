import type { Metadata } from "next";
import { Special_Elite, Courier_Prime } from "next/font/google";
import "./globals.css";

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-headline",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Lynard Salingujay — Software Engineer",
  description:
    "Software engineer with 14+ years of enterprise experience in Java, Python, and SQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${specialElite.variable} ${courierPrime.variable} font-mono`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
