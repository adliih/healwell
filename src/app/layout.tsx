import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heal Well Catalogue",
  description: "Curated Healthy Product Catalog by Heal Well",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container mx-auto p-2">{children}</main>
      </body>
      <PrelineScript />
    </html>
  );
}
