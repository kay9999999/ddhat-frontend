import localFont from "next/font/local";
import "./globals.css";
import { getGlobalPageData, getGlobalPageMetadata } from "@/data/loaders";
import { Header } from "../components/custom/Header";
import { Footer } from "../components/custom/Footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata() {
  const metadata = await getGlobalPageMetadata();
  return {
    title: metadata?.data?.title,
    description: metadata?.data?.description,
  };
}

export default async function RootLayout({ children }) {
  const globalData = await getGlobalPageData();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <Header data={globalData?.data?.header} />
        <main>{children}</main>
        <Footer data={globalData?.data?.footer} />
      </body>
    </html>
  );
}
