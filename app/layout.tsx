import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/header";
import Footer from "@/components/footer";





export const metadata: Metadata = {
  title: "30-Daybook Challenge",
  description: "This web application is crafted to support you in embarking on a 30-day journey of daily learning and documenting your progress. Consider it an engaging challenge to embrace!",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa", "30-Daybook"],
};
export const viewport = {
  default: "width=device-width, initial-scale=1",
  // Add your theme color configurations here
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <main className="flex w-[98%] sm:w-[90%] md:w-[80%] m-auto flex-col  justify-between bg-[#f5f8f8] dark:bg-gray-900 md:my-8 my-2  rounded-md">
      <Header/>

      {children}  

      <Footer/>
    </main>
        </Providers>
        </body>
    </html>
  );
}
