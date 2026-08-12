import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Paola Cejoco — UI/UX Designer",
  description:
    "Portfolio of Paola Cejoco, UI/UX Designer based in Montreal.",
  openGraph: {
    title: "Paola Cejoco — UI/UX Designer",
    description:
      "Portfolio of Paola Cejoco, UI/UX Designer based in Montreal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-body antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
