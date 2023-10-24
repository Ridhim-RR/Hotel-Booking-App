import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "./head";
import GlobalProvider from "./globalProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Bookings",
//   description: "A full stack app for Hotels",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
        <GlobalProvider>{children}</GlobalProvider>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="https://kit.fontawesome.com/f0714b5e27.js"></Script>
      </body>
    </html>
  );
}
