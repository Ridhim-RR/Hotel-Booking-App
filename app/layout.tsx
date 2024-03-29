'use client';
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import Head from "./head";
import GlobalProvider from "./globalProvider";
import Script from "next/script";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useSelector } from "react-redux";
import SignIn from "./signin/page";
import axios from "axios";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const token = async () => {
  //   const data = await axios.get("http://localhost:3000/api/auth/refresh");
  //   console.log(data); 
  // }
  // useEffect(() => {
  //   token()
  // },[])
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
        <GlobalProvider>
          <Header />
          {children}
        </GlobalProvider>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="https://kit.fontawesome.com/f0714b5e27.js"></Script>
      </body>
    </html>
  );
}
