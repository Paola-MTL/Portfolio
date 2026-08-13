import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-body" });
const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

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
      <body
        className={`${montserrat.variable} ${inter.variable} font-body antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
