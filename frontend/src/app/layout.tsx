import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Developer Assignment",
  description: "Savannah Senior Frontend Engineer Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased h-screen`}>
        <Providers>
          <div className="max-w-4xl mx-auto h-full pt-20">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
