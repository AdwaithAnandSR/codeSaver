import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
 
 
import Navbar from "../components/Navbar.jsx";

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
   title: "codeSaver",
   description: ""
};

export default function RootLayout({ children }) {
   return (
      <html lang='en'>
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
            <Analytics />
            <SpeedInsights />
         </body>
      </html>
   );
}



