import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import NextUIProviderWrapper from "@/components/providers/NextUiProviderWrapper";

const inter = Inter({ subsets: ["latin"] });
const roboto = Poppins({
  style: "normal",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
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
      <body className={roboto.className}>
        <NextUIProviderWrapper>
          <Navbar />
          {children}
          <footer>
            <div className="  flex h-[320px] bg-[#FEF9FF]">
              <div className="w-[90%] mx-auto flex items-center justify-center">
                <div className="w-[50%] ">
                  <div className="w-[80%]">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                      We are a brand new OOH advertising company with a unique
                      concept of allowing advertisers to deliver hyper-local
                      campaigns and reach millions of consumers instantly. We
                      operate a fleet of screens that are equipped with some of
                      the most advanced technologies allowing you to flexibly
                      run your ad campaigns as well as track the performance in
                      real-time.
                      <br></br>
                      <br></br>
                      The future of OOH is here now!
                    </p>
                  </div>
                </div>
                <div className="w-[50%] flex items-center flex-col justify-center py-2">
                  <p className="text-xl">hello@evox.media</p>
                  <p className="text-xl">Phone: +44 03330 500911</p>
                  <div className="flex justify-between w-[30%] my-[2rem]">
                    <a href="https://x.com/evoxmedia_" target="_blank">
                      <img
                        src="instagram-logo.png"
                        className="w-[30px] h-[30px]"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/people/EvoxMedia/61562484713101/"
                      target="_blank"
                    >
                      <img
                        src="facebook-logo.png"
                        className="w-[30px] h-[30px]"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/evoxmedia"
                      target="_blank"
                    >
                      <img
                        src="linkedin-logo.png"
                        className="w-[30px] h-[30px]"
                      />
                    </a>
                  </div>
                  <p className="text-xl">Privacy Policy | Terms of Service</p>
                </div>
              </div>
            </div>
          </footer>
        </NextUIProviderWrapper>
        <script
          id="messenger-widget-b"
          src="https://cdn.botpenguin.com/website-bot.js"
          defer
        >
          67324af63550526a802cce75,67324ac21db6dc41404745ba
        </script>
      </body>
    </html>
  );
}
