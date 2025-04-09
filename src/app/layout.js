// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/navbar';

import ConditionalHomeSections from './components/ConditionalHomeSections';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dteez Events",
  description: "cakes, foods, grills & chops",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        
        {/* Conditional rendering for homepage-specific sections */}
        <ConditionalHomeSections />
        <main>{children}</main>
      </body>
    </html>
  );
}
