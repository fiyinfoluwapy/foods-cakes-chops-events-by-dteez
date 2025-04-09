// src/app/layout.js
import { Geist, Geist_Mono, Oleo_Script, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from './components/navbar';
import ConditionalHomeSections from './components/ConditionalHomeSections';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const oleo = Oleo_Script({ variable: "--font-oleo", subsets: ["latin"], weight: ["400", "700"] });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Dteez Events",
  description: "cakes, foods, grills & chops",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${oleo.variable} ${cormorant.variable}`}>
        <Navbar />
        <ConditionalHomeSections />
        <main>{children}</main>
      </body>
    </html>
  );
}
