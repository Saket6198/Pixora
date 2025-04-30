import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { type Metadata } from "next";
import  Providers  from "./providers"
import { ToastContainer } from "react-toastify";


export const metadata: Metadata = {
  title: "Pixora",
  description: "Collaborative Drawing App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <Providers>
          {children}
        </Providers>
        <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={4000}
          hideProgressBar={true}
          pauseOnHover={true}
        />
      </body>
    </html>
  );
}
