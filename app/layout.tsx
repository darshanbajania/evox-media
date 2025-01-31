import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import NextUIProviderWrapper from "@/components/providers/NextUiProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evox Media",
  description: "Redefining Advertisement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProviderWrapper>
          <Navbar />
          {children}
          <footer>
            <div className=" max-w-[1244px] mx-auto flex h-[250px] bg-[#F7F8F9]">
              <div className="w-[50%] flex items-center justify-center">
                <h2 className="text-2xl ">
                  Evox Media | Revolutionizing Mobile Advertising
                </h2>
              </div>
              <div className="w-[50%] flex items-center flex-col justify-center py-2">
                <p className="text-xl">info@evoxmedia.com</p>
                <p className="text-xl">Phone: (123) 456-7890</p>
                <div className="flex justify-between w-[30%] my-[2rem]">
                  <img src="instagram-logo.png" className="w-[30px] h-[30px]" />
                  <img src="facebook-logo.png" className="w-[30px] h-[30px]" />
                  <img src="linkedin-logo.png" className="w-[30px] h-[30px]" />
                </div>
                <p className="text-xl">Privacy Policy | Terms of Service</p>
              </div>
            </div>
          </footer>
        </NextUIProviderWrapper>
      </body>
    </html>
  );
}
