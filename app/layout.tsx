import { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Providers from "./components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Senne Bels",
  generator: "Next.js",
  category: "Portfolio",
  description: "Your favourite frontend developer",
  robots: {
    googleBot: {
      index: true,
    },
    index: true,
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.sennebels.xyz",
    title: "Senne Bels Web Portfolio",
    description: "Your favourite frontend developer",
    creator: "@sennebels",
    images: [
      {
        url: "https://sennebels.xyz/logo.svg",
        width: 800,
        height: 600,
      },
    ],
  },
  applicationName: "Senne Bels",
  keywords: ["Senne Bels", "Frontend", "Portfolio", "Web Portfolio"],
  authors: [{ name: "Senne Bels", url: "https://sennebels.xyz" }],
  creator: "Senne Bels",
  publisher: "Senne Bels",
  openGraph: {
    title: "Senne Bels",
    creators: ["@sennebels"],
    siteName: "Senne Bels Portfolio",

    description:
      "Welcome to the portfolio of Senne Bels, a frontend developer with expertise in building responsive and user-friendly web applications. Explore a collection of Senne Bels' latest projects, featuring cutting-edge technologies such as React, Next.js, and Tailwind.",
    url: "https://www.sennebels.xyz",
    images: [
      {
        url: "https://sennebels.xyz/logo.svg",
        width: 800,
        height: 600,
      },
    ],
  },
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-light-secondary w-screen h-screen overflow-x-hidden text-light-secondary">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
