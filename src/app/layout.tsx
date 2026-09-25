import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import ConditionalNav from "@/components/ConditionalNav";
import PageCurtain from "@/components/PageCurtain";
import ConditionalFooter from "@/components/ConditionalFooter";
import MotionProvider from "@/components/MotionProvider";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-body" });
const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Extend under the notch / home indicator; fixed UI pads with env(safe-area-*).
  viewportFit: "cover",
  themeColor: "#0f0c21",
};

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
        <MotionProvider>
          <ConditionalNav />
          <main>{children}</main>
          <ConditionalFooter />
          <PageCurtain />
        </MotionProvider>
      </body>
    </html>
  );
}
