import "~/styles/globals.css";

import {Inter} from "next/font/google";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Pixora",
  description: "Collaborative Drawing App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>{children}</body>
    </html>
  );
}
