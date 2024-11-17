import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "../components/Navbar.jsx";
import { GlobalProvider } from "../context/global.context.js";

const geistSans = localFont({
   src: "./fonts/GeistVF.woff",
   variable: "--font-geist-sans",
   weight: "100 900"
});
const geistMono = localFont({
   src: "./fonts/GeistMonoVF.woff",
   variable: "--font-geist-mono",
   weight: "100 900"
});

export const metadata = {
   title: "codeSpace",
   description: "Need code? Find it instantly on codeSpace."
};

export default function RootLayout({ children }) {
   return (
      <html lang='en'>
         <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
         />
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <GlobalProvider>
               <Navbar />
               <ToastContainer
                  position='bottom-center'
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  theme='dark'
               />
               {children}
            </GlobalProvider>
            <Analytics />
            <SpeedInsights />
         </body>
      </html>
   );
}
